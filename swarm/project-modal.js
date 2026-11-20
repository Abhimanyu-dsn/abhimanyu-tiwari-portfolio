// ProjectModal: turns a project ID card into a large presentation canvas, then lets the
// swarm build the presentation on it. Driven by the `pb:open` event that badge3d.js fires
// when a card is clicked; cards without an entry in PROJECTS keep opening their case study.
//
// Motion (motion.dev, vanilla) handles the card ↔ popup morphs; GSAP runs the construction.

import { credProject } from './cred-content.js';
import { ConstructionCanvas } from './construction-canvas.js';
import { buildConstruction } from './construction-timeline.js';
import { ModalControls } from './modal-controls.js';

// Card index in the Selected work grid → presentation. Experiment: CREDex (first card) only.
const PROJECTS = { 0: credProject };

const MOTION_URL = 'https://cdn.jsdelivr.net/npm/motion@11.18.2/+esm';
const GSAP_URL = 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm';
const EASE_MORPH = [0.32, 0.72, 0, 1]; // drawer-style curve for the card ↔ popup morph
const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_IN_OUT = [0.77, 0, 0.175, 1];
// Motion can't tween a transform to 'none', so the resting popup uses an explicit identity.
const ID = 'translate(0px, 0px) scale(1, 1)';

let libs = null;
const loadLibs = () =>
  (libs ||= Promise.all([import(MOTION_URL), import(GSAP_URL)]).then(([m, g]) => ({ animate: m.animate, gsap: g.gsap || g.default })));

let cssLoaded = false;
const loadCss = () => {
  if (cssLoaded) return;
  cssLoaded = true;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = new URL('./swarm.css', import.meta.url).href;
  document.head.appendChild(l);
};
// Resolves when the animation ends, or after its duration if the page is in the background
// (rAF and the animation timeline pause there, and the popup must never get stuck half-open).
const finished = (a, seconds) =>
  Promise.race([a && a.finished ? a.finished : Promise.resolve(a), new Promise((r) => setTimeout(r, seconds * 1000 + 120))]);
const faces = new WeakMap();
function cardImage(face) {
  // A half-size copy of the card's own front texture, so the flying card is pixel-identical.
  if (!faces.has(face)) {
    const c = document.createElement('canvas');
    c.width = Math.round(face.width / 2);
    c.height = Math.round(face.height / 2);
    c.getContext('2d').drawImage(face, 0, 0, c.width, c.height);
    faces.set(face, c);
  }
  const src = faces.get(face), c = document.createElement('canvas');
  c.width = src.width;
  c.height = src.height;
  c.getContext('2d').drawImage(src, 0, 0);
  return c;
}

let active = null;

class ProjectModal {
  constructor(grid, detail, project) {
    this.grid = grid;
    this.detail = detail;
    this.project = project;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  async open() {
    active = this;
    loadCss();
    let L;
    try {
      [L] = await Promise.all([loadLibs(), cssReady()]);
    } catch (err) {
      console.warn('Project popup unavailable, opening the case study instead:', err);
      active = null;
      location.assign(this.project.href);
      return;
    }
    const { animate, gsap } = L;
    this.animate = animate;
    this.gsap = gsap;
    this.lastFocus = document.activeElement;

    // ---- DOM ----
    const root = (this.root = document.createElement('div'));
    root.className = 'sw-root';
    root.innerHTML = '<div class="sw-backdrop"></div>';
    this.backdrop = root.firstChild;
    const shell = (this.shell = document.createElement('div'));
    shell.className = 'sw-shell';
    shell.setAttribute('role', 'dialog');
    shell.setAttribute('aria-modal', 'true');
    shell.setAttribute('aria-label', this.project.label);
    shell.innerHTML = '<div class="sw-canvas"></div>';
    this.host = shell.firstChild;
    root.appendChild(shell);
    this.controls = new ModalControls(shell, {
      onClose: () => this.close(),
      onFullscreen: () => this.toggleFullscreen(),
      onSkip: () => this.skip(),
    });
    const fly = (this.fly = cardImage(this.detail.face));
    fly.className = 'sw-fly';
    fly.setAttribute('aria-hidden', 'true');
    root.appendChild(fly);
    document.body.appendChild(root);
    document.documentElement.classList.add('sw-open');

    // Swap the 3D card for its DOM twin in the same spot
    const r = this.detail.el.getBoundingClientRect();
    this.placeFly(r);
    this.grid.pbSetHidden && this.grid.pbSetHidden(this.detail.index, true);

    this.canvas = new ConstructionCanvas(this.host, this.project);
    this.canvas.layout();
    this.wire();

    if (this.reduced) {
      fly.style.opacity = '0';
      this.canvas.showFinal();
      this.controls.doneBuilding();
      await Promise.all([
        finished(animate(this.backdrop, { opacity: [0, 1] }, { duration: 0.2 }), 0.2),
        finished(animate(shell, { opacity: [0, 1] }, { duration: 0.2 }), 0.2),
      ]);
      this.controls.close.focus();
      return;
    }

    // ---- open: lift the card toward the viewer, then morph it into the popup ----
    const fin = shell.getBoundingClientRect();
    const lift = 'perspective(1000px) translate3d(0px, -14px, 0px) scale(1.06) rotateX(7deg)';
    this.centerT = this.flyToCenter(r, fin);
    shell.style.opacity = '0';
    animate(this.backdrop, { opacity: [0, 1] }, { duration: 0.45, ease: EASE_OUT });
    await finished(animate(fly, { transform: ['perspective(1000px) translate3d(0px, 0px, 0px) scale(1) rotateX(0deg)', lift] }, { duration: 0.24, ease: EASE_OUT }), 0.24);
    animate(fly, { transform: [lift, this.centerT], opacity: [1, 0] }, { duration: 0.62, ease: EASE_MORPH, opacity: { duration: 0.32, delay: 0.16, ease: 'linear' } });
    await finished(
      animate(shell, { transform: [this.cardT(r, fin), ID], opacity: [0, 1] }, { duration: 0.62, ease: EASE_MORPH, opacity: { duration: 0.22, ease: 'linear' } }),
    0.62,
    );
    shell.style.transform = '';
    shell.style.opacity = '';
    if (this.closing) return;
    this.controls.close.focus({ preventScroll: true });

    // ---- the crew builds the presentation ----
    this.startBuild();
  }

  startBuild() {
    this.crew = buildConstruction(this.gsap, this.canvas, { onComplete: () => this.built() });
    this.canvas.onFit = (s) => this.crew && this.crew.setScale(s);
    this.crew.setScale(this.canvas.scale);
    this.gsap.delayedCall(0.18, () => !this.closing && this.crew.start());
  }

  built() {
    if (this.crew) this.crew.stop();
    this.controls.doneBuilding();
  }

  skip() {
    if (!this.crew || this.canvas.done) return;
    this.crew.stop();
    this.crew.hideCrew();
    this.canvas.showFinal();
    this.controls.doneBuilding();
  }

  wire() {
    this.onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); this.close(); }
      else if (e.key === ' ' && !this.canvas.done && !(e.target.closest && e.target.closest('button,a'))) { e.preventDefault(); this.skip(); }
      else if (e.key === 'Tab') this.trapFocus(e);
    };
    document.addEventListener('keydown', this.onKey);
    this.host.addEventListener('click', (e) => { if (!e.target.closest('a')) this.skip(); });
    this.backdrop.addEventListener('click', () => this.close());
    this.onResize = () => this.relayout();
    addEventListener('resize', this.onResize);
  }

  trapFocus(e) {
    const f = [...this.shell.querySelectorAll('button, a[href]')].filter((n) => n.tabIndex >= 0 && n.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (!this.shell.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  }

  /** Re-fits the stage; if the canvas changes shape mid-build, the finished layout is shown. */
  relayout() {
    const before = this.canvas.mode;
    const building = this.crew && !this.canvas.done;
    this.canvas.layout();
    if (this.canvas.mode !== before) {
      if (this.crew) { this.crew.stop(); this.crew = null; }
      this.canvas.showFinal();
      this.controls.doneBuilding();
    } else if (building) {
      this.crew.setScale(this.canvas.scale);
    }
  }

  async toggleFullscreen() {
    const a = this.shell.getBoundingClientRect();
    this.full = !this.full;
    this.shell.classList.toggle('is-full', this.full);
    this.controls.setFullscreen(this.full);
    const b = this.shell.getBoundingClientRect();
    this.relayout();
    if (this.reduced) return;
    await finished(
      this.animate(
        this.shell,
        { transform: [`translate(${a.left - b.left}px, ${a.top - b.top}px) scale(${a.width / b.width}, ${a.height / b.height})`, ID] },
        { duration: 0.45, ease: EASE_IN_OUT },
      ),
    0.45,
    );
    this.shell.style.transform = '';
  }

  async close() {
    if (this.closing || !this.root) return;
    this.closing = true;
    document.removeEventListener('keydown', this.onKey);
    removeEventListener('resize', this.onResize);
    if (this.crew) { this.crew.stop(); this.crew.hideCrew(); }
    const animate = this.animate;
    const r = this.detail.el.getBoundingClientRect();
    if (!this.reduced && animate) {
      const fin = this.shell.getBoundingClientRect();
      this.placeFly(r);
      const centerT = this.flyToCenter(r, fin);
      animate(this.backdrop, { opacity: [1, 0] }, { duration: 0.42, ease: EASE_OUT });
      animate(this.host, { opacity: [1, 0] }, { duration: 0.16, ease: 'linear' });
      animate(this.fly, { transform: [centerT, 'perspective(1000px) translate3d(0px, 0px, 0px) scale(1) rotateX(0deg)'], opacity: [0, 1] }, { duration: 0.5, ease: EASE_MORPH, opacity: { duration: 0.24, delay: 0.06, ease: 'linear' } });
      await finished(
        animate(this.shell, { transform: [ID, this.cardT(r, fin)], opacity: [1, 0] }, { duration: 0.5, ease: EASE_MORPH, opacity: { duration: 0.28, delay: 0.16, ease: 'linear' } }),
      0.5,
      );
    } else if (animate) {
      await finished(animate(this.root, { opacity: [1, 0] }, { duration: 0.18 }), 0.18);
    }
    this.grid.pbSetHidden && this.grid.pbSetHidden(this.detail.index, false);
    // Let the 3D card draw before the DOM twin goes, so nothing blinks
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.root.remove();
      document.documentElement.classList.remove('sw-open');
      const back = this.detail.link || this.lastFocus;
      back && back.focus && back.focus({ preventScroll: true });
      active = null;
    }));
  }

  placeFly(r) {
    Object.assign(this.fly.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.width * (this.fly.height / this.fly.width) + 'px' });
  }

  /** Transform that makes the popup (laid out at `fin`) sit exactly on the card rect `r`. */
  cardT(r, fin) {
    const h = r.width * (this.fly.height / this.fly.width);
    return `translate(${r.left - fin.left}px, ${r.top - fin.top}px) scale(${r.width / fin.width}, ${h / fin.height})`;
  }

  /** Transform that carries the flying card to the popup's centre, grown toward the viewer. */
  flyToCenter(r, fin) {
    const h = r.width * (this.fly.height / this.fly.width);
    const dx = fin.left + fin.width / 2 - (r.left + r.width / 2);
    const dy = fin.top + fin.height / 2 - (r.top + h / 2);
    const k = Math.min(fin.width / r.width, fin.height / h) * 0.92;
    return `perspective(1000px) translate3d(${dx}px, ${dy}px, 0px) scale(${k}) rotateX(0deg)`;
  }
}

function cssReady() {
  const l = [...document.styleSheets].find((s) => s.href && s.href.includes('swarm/swarm.css'));
  if (l) return Promise.resolve();
  const link = document.querySelector('link[href*="swarm/swarm.css"]');
  return new Promise((res) => {
    link.addEventListener('load', res, { once: true });
    link.addEventListener('error', res, { once: true });
  });
}

function attach(grid) {
  if (grid.dataset.swarm) return;
  grid.dataset.swarm = '1';
  grid.addEventListener('pb:open', (e) => {
    const project = PROJECTS[e.detail.index];
    if (!project || active) return;
    e.preventDefault();
    new ProjectModal(grid, e.detail, project).open();
  });
  // Warm the libraries and styles as soon as someone heads for the cards
  grid.addEventListener('pointerenter', () => { loadCss(); loadLibs().catch(() => {}); }, { once: true });
}
document.querySelectorAll('.pb-grid').forEach(attach);
