// ProjectModal: turns a project ID card into a large presentation canvas holding the whole
// case study, which the swarm builds section by section: the intro as soon as the popup
// opens, every later section as it scrolls into view. Driven by the `pb:open` event that
// badge3d.js fires when a card is clicked; cards without an entry in PROJECTS keep opening
// their case study page.
//
// Motion (motion.dev, vanilla) handles the card ↔ popup morphs; GSAP runs the construction.

import { credProject } from './cred-content.js';
import { ConstructionCanvas } from './construction-canvas.js';
import { buildSection } from './construction-timeline.js';
import { ModalControls } from './modal-controls.js';

// Card index in the Selected work grid → case study. CREDex (first card) for now.
const PROJECTS = { 0: credProject };

const MOTION_URL = 'https://cdn.jsdelivr.net/npm/motion@11.18.2/+esm';
const GSAP_URL = 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm';
const EASE_MORPH = [0.32, 0.72, 0, 1]; // drawer-style curve for the card ↔ popup morph
const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_IN_OUT = [0.77, 0, 0.175, 1];
// Motion can't tween a transform to 'none', so the resting popup uses an explicit identity.
const ID = 'translate(0px, 0px) scale(1, 1)';
const FLY_REST = 'perspective(1000px) translate3d(0px, 0px, 0px) scale(1) rotateX(0deg)';
const FLY_LIFT = 'perspective(1000px) translate3d(0px, -14px, 0px) scale(1.06) rotateX(7deg)';

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
function cssReady() {
  if ([...document.styleSheets].some((s) => s.href && s.href.includes('swarm/swarm.css'))) return Promise.resolve();
  const link = document.querySelector('link[href*="swarm/swarm.css"]');
  return new Promise((res) => {
    link.addEventListener('load', res, { once: true });
    link.addEventListener('error', res, { once: true });
  });
}
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
    this.detail = detail; // { index, el, face?, link? }
    this.project = project;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.queue = [];
    this.running = null;
    this.crews = new Set(); // sections being built or whose cursors are still walking off
  }

  async open() {
    active = this;
    loadCss();
    let L;
    try {
      [L] = await Promise.all([loadLibs(), cssReady()]);
    } catch (err) {
      console.warn('Project popup unavailable, opening the case study page instead:', err);
      active = null;
      location.assign(this.project.page);
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
    shell.innerHTML = '<div class="sw-canvas" tabindex="-1"></div><div class="sw-progress" aria-hidden="true"></div>';
    this.host = shell.firstChild;
    root.appendChild(shell);
    this.controls = new ModalControls(shell, {
      onClose: () => this.close(),
      onFullscreen: () => this.toggleFullscreen(),
      onSkip: () => this.skip(),
    });
    if (this.detail.face) {
      this.fly = cardImage(this.detail.face);
      this.fly.className = 'sw-fly';
      this.fly.setAttribute('aria-hidden', 'true');
      root.appendChild(this.fly);
    }
    document.body.appendChild(root);
    document.documentElement.classList.add('sw-open');
    if (location.hash !== '#' + this.project.id) history.replaceState(null, '', '#' + this.project.id);

    const r = this.detail.el.getBoundingClientRect();
    if (this.fly) {
      this.placeFly(r);
      this.grid.pbSetHidden && this.grid.pbSetHidden(this.detail.index, true);
    }

    this.canvas = new ConstructionCanvas(this.host, this.project);
    this.canvas.layout();
    this.canvas.onFit = (z) => this.crews.forEach((c) => c.setScale(z));
    this.wire();

    if (this.reduced) {
      if (this.fly) this.fly.style.opacity = '0';
      this.canvas.finishAll();
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
    shell.style.opacity = '0';
    animate(this.backdrop, { opacity: [0, 1] }, { duration: 0.45, ease: EASE_OUT });
    if (this.fly) {
      await finished(animate(this.fly, { transform: [FLY_REST, FLY_LIFT] }, { duration: 0.24, ease: EASE_OUT }), 0.24);
      animate(this.fly, { transform: [FLY_LIFT, this.flyToCenter(r, fin)], opacity: [1, 0] }, { duration: 0.62, ease: EASE_MORPH, opacity: { duration: 0.32, delay: 0.16, ease: 'linear' } });
      await finished(
        animate(shell, { transform: [this.cardT(r, fin), ID], opacity: [0, 1] }, { duration: 0.62, ease: EASE_MORPH, opacity: { duration: 0.22, ease: 'linear' } }),
        0.62,
      );
    } else {
      // Opened from a link (no card on screen): rise and fade in
      await finished(animate(shell, { transform: ['translate(0px, 24px) scale(0.96, 0.96)', ID], opacity: [0, 1] }, { duration: 0.45, ease: EASE_OUT }), 0.45);
    }
    shell.style.transform = '';
    shell.style.opacity = '';
    if (this.closing) return;
    this.controls.close.focus({ preventScroll: true });

    // ---- the crew builds: intro now, the rest as each section scrolls into view ----
    this.enqueue(this.canvas.sections[0]);
    this.watch();
  }

  watch() {
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const S = this.canvas.sections.find((s) => s.el === e.target);
        if (S) this.enqueue(S, true);
      });
    }, { root: this.host, threshold: [0.3], rootMargin: '0px 0px -10% 0px' });
    this.canvas.sections.slice(1).forEach((S) => this.io.observe(S.el));
  }

  /**
   * Sections build one after another, top to bottom, while the reader stays where they are.
   * A section the reader has scrolled to (`seen`) jumps the queue so they never wait on
   * sections above it.
   */
  enqueue(S, seen = false) {
    if (S.built || this.closing) return;
    if (seen) S.seen = true;
    if (!S.queued) { S.queued = true; this.queue.push(S); }
    this.queue.sort((a, b) => (b.seen ? 1 : 0) - (a.seen ? 1 : 0) || a.index - b.index);
    this.next();
  }

  async next() {
    if (this.running || !this.queue.length || this.closing) return;
    const S = this.queue.shift();
    this.running = { S, crew: null };
    await this.canvas.ready(S);
    if (this.closing || S.built) { this.running = null; return this.next(); }
    const crew = buildSection(this.gsap, this.canvas, S, {
      // As soon as this section's pieces are in place the next one starts;
      // its cursors finish walking off in the meantime.
      onBuilt: () => {
        this.running = null;
        if (this.canvas.allBuilt) return this.allDone();
        // The next section builds while the reader stays where they are (no auto-scroll)
        const all = this.canvas.sections;
        const after = all.find((x) => x.index > S.index && !x.built) || all.find((x) => !x.built);
        if (after) this.enqueue(after);
        this.next();
      },
      onDone: () => { crew.stop(); this.crews.delete(crew); },
    });
    this.running.crew = crew;
    this.crews.add(crew);
    crew.setScale(this.canvas.zoom);
    crew.start();
  }

  allDone() {
    if (this.io) this.io.disconnect();
    this.controls.doneBuilding();
  }

  /** Finish everything now: the running section and every section not built yet. */
  skip() {
    if (this.canvas.allBuilt) return;
    this.crews.forEach((c) => c.stop());
    this.crews.clear();
    this.running = null;
    this.queue = [];
    this.canvas.finishAll();
    this.allDone();
  }

  wire() {
    this.onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); this.close(); }
      else if (e.key === ' ' && !this.canvas.allBuilt && !(e.target.closest && e.target.closest('button,a'))) { e.preventDefault(); this.skip(); }
      else if (e.key === 'Tab') this.trapFocus(e);
    };
    document.addEventListener('keydown', this.onKey);
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

  /** Re-fits the page; if it flips between phone and desktop mid-build, everything is finished. */
  relayout() {
    if (this.canvas.layout() && !this.canvas.allBuilt) this.skip();
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
    if (this.io) this.io.disconnect();
    this.crews.forEach((c) => c.stop());
    this.queue = [];
    if (location.hash === '#' + this.project.id) history.replaceState(null, '', location.pathname + location.search);
    const animate = this.animate;
    const r = this.detail.el.getBoundingClientRect();
    if (!this.reduced && animate && this.fly) {
      const fin = this.shell.getBoundingClientRect();
      this.placeFly(r);
      animate(this.backdrop, { opacity: [1, 0] }, { duration: 0.42, ease: EASE_OUT });
      animate(this.host, { opacity: [1, 0] }, { duration: 0.16, ease: 'linear' });
      animate(this.fly, { transform: [this.flyToCenter(r, fin), FLY_REST], opacity: [0, 1] }, { duration: 0.5, ease: EASE_MORPH, opacity: { duration: 0.24, delay: 0.06, ease: 'linear' } });
      await finished(
        animate(this.shell, { transform: [ID, this.cardT(r, fin)], opacity: [1, 0] }, { duration: 0.5, ease: EASE_MORPH, opacity: { duration: 0.28, delay: 0.16, ease: 'linear' } }),
        0.5,
      );
    } else if (animate) {
      await finished(animate(this.root, { opacity: [1, 0] }, { duration: 0.2 }), 0.2);
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

// ---- wiring ----------------------------------------------------------------------------

function openProject(grid, index, detail) {
  const project = PROJECTS[index];
  if (!project || active) return false;
  const card = grid.querySelectorAll('.pb-card')[index];
  const link = card && card.nextElementSibling && card.nextElementSibling.matches('a.pb-link') ? card.nextElementSibling : null;
  new ProjectModal(grid, detail || { index, el: card, link }, project).open();
  return true;
}

function attach(grid) {
  if (grid.dataset.swarm) return;
  grid.dataset.swarm = '1';
  // Card click (from badge3d.js)
  grid.addEventListener('pb:open', (e) => {
    if (!PROJECTS[e.detail.index]) return; // other cards open their case-study page
    e.preventDefault(); // this one is the popup's, even if a popup is already opening
    openProject(grid, e.detail.index, e.detail);
  });
  // The "Read case study" pill under a card opens the same popup (keyboard path too);
  // Ctrl/⌘/Shift-click still opens the page in a new tab.
  grid.querySelectorAll('.pb-card').forEach((card, index) => {
    const link = card.nextElementSibling;
    if (!PROJECTS[index] || !link || !link.matches('a.pb-link')) return;
    link.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if (grid.pbOpenIndex) grid.pbOpenIndex(index); // goes through pb:open with the card's face
      else openProject(grid, index);
    });
  });
  // Warm the libraries and styles as soon as someone heads for the cards
  grid.addEventListener('pointerenter', () => { loadCss(); loadLibs().catch(() => {}); }, { once: true });
}

const grids = [...document.querySelectorAll('.pb-grid')];
grids.forEach(attach);

// Deep link: index.html#credex opens that case study straight away
const linked = Object.entries(PROJECTS).find(([, p]) => location.hash === '#' + p.id);
if (linked && grids[0]) {
  const go = () => {
    const i = +linked[0];
    const card = grids[0].querySelectorAll('.pb-card')[i];
    if (card) card.scrollIntoView({ block: 'center' });
    setTimeout(() => (grids[0].pbOpenIndex ? grids[0].pbOpenIndex(i) : openProject(grids[0], i)), 80);
  };
  // Give the 3D cards a moment to come up so the card can fly; open plainly if they don't
  const t0 = performance.now();
  (function wait() {
    if (grids[0].classList.contains('pb-3d') || performance.now() - t0 > 2500) go();
    else setTimeout(wait, 100);
  })();
}
