// ConstructionTimeline: choreographs the swarm. Each cursor gets its own track (a GSAP
// timeline) and every move it makes has a job: draw a box, type a line, place an image,
// duplicate a card. Tracks run side by side on one master timeline; when one cursor needs
// another's work (cards it fills must exist first) it waits for that point in the other's track.

import { SwarmCursor } from './swarm-cursor.js';

export const CREW = [
  { name: 'Layout', color: '#6C3CF5', side: 1, from: [-60, 260], gather: [540, 330] },
  { name: 'Type', color: '#E8368F', side: -1, from: [520, -60], gather: [612, 300] },
  { name: 'Visuals', color: '#0E9F84', side: 1, from: [1260, 320], gather: [676, 352] },
  { name: 'UI', color: '#E08600', side: -1, from: [420, 820], gather: [594, 400] },
];

export function buildConstruction(gsap, canvas, { onComplete } = {}) {
  const e = canvas.els, L = canvas.L;
  const sx = L.w / 1200, sy = L.h / 750; // crew start/gather points are authored for the wide stage

  const cursors = CREW.map((c) => {
    const cur = new SwarmCursor(canvas.cursorLayer, c, gsap);
    cur.set(c.from[0] * sx, c.from[1] * sy);
    cur.home = c;
    cur.sel = mk('sw-sel', c.color);
    cur.dim = mk('sw-dim', c.color);
    return cur;
  });
  function mk(cls, color) {
    const n = document.createElement('div');
    n.className = cls;
    n.style.setProperty('--c', color);
    canvas.cursorLayer.before(n);
    return n;
  }

  const box = (n) => canvas.box(n);
  const show = (n) => { n.style.visibility = 'visible'; n.style.opacity = '1'; };
  const sel = (cur, x, y, w, h, text) => {
    const s = cur.sel.style;
    s.left = x + 'px'; s.top = y + 'px'; s.width = Math.max(0, w) + 'px'; s.height = Math.max(0, h) + 'px'; s.opacity = '1';
    cur.sel.classList.toggle('is-text', !!text);
  };
  const dim = (cur, x, y, w, h) => {
    cur.dim.textContent = `${Math.round(w)} × ${Math.round(h)}`;
    cur.dim.style.transform = `translate3d(${x + 16}px, ${y + 16}px, 0) scale(${cur.k})`;
    cur.dim.style.opacity = '1';
  };
  const guides = (b) => {
    e.guideH.style.transform = `translateY(${b.y}px)`;
    e.guideV.style.transform = `translateX(${b.x}px)`;
    gsap.fromTo([e.guideH, e.guideV], { opacity: 1 }, { opacity: 0, duration: 0.5, delay: 0.3, ease: 'power1.out' });
  };

  // ---- steps ---------------------------------------------------------------------------
  const T = () => gsap.timeline();

  function drawBox(cur, node, { move = 0.55, drag = 0.75 } = {}) {
    const b = box(node), tl = T();
    tl.call(() => cur.setMode('cross'));
    tl.add(cur.moveTo(b.x, b.y, { duration: move }));
    tl.add(cur.press());
    tl.call(() => { sel(cur, b.x, b.y, 0, 0); show(node); node.style.clipPath = 'inset(0 100% 100% 0)'; });
    tl.add(cur.drag(b.x + b.w, b.y + b.h, {
      duration: drag,
      onUpdate: (nx, ny) => {
        const w = nx - b.x, h = ny - b.y;
        sel(cur, b.x, b.y, w, h);
        dim(cur, nx, ny, w, b.h <= 4 ? b.h : h);
        node.style.clipPath = `inset(0 ${(1 - w / b.w) * 100}% ${b.h <= 4 ? 0 : (1 - h / b.h) * 100}% 0)`;
      },
    }));
    tl.add(cur.release());
    tl.call(() => { node.style.clipPath = 'none'; cur.dim.style.opacity = '0'; });
    tl.to(cur.sel, { opacity: 0, duration: 0.25 }, '+=0.12');
    tl.call(() => cur.setMode('arrow'));
    return tl;
  }

  function typeText(cur, node, { cps = 0.035, textBox = true } = {}) {
    const b = box(node), v = node._value, o = { n: 0 }, tl = T();
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x, b.y + 2, { duration: 0.5 }));
    tl.add(cur.press());
    if (textBox) {
      tl.call(() => sel(cur, b.x, b.y, 0, 0, true));
      tl.add(cur.drag(b.x + b.w, b.y + b.h, { duration: 0.38, onUpdate: (nx, ny) => sel(cur, b.x, b.y, nx - b.x, ny - b.y, true) }));
    }
    tl.add(cur.release());
    tl.call(() => { show(node); node._span.textContent = ''; node.classList.add('is-typing'); });
    tl.addLabel('type');
    tl.add(cur.moveTo(b.x + Math.min(b.w, 260) * 0.6, b.y + b.h + 30, { duration: 0.45, arc: 0.06 }), 'type+=0.1');
    tl.to(o, { n: v.length, duration: v.length * cps, ease: 'none', onUpdate: () => { node._span.textContent = v.slice(0, Math.round(o.n)); } }, 'type');
    tl.to({}, { duration: 0.35 }); // the caret blinks a moment before they move on
    tl.call(() => { node.classList.remove('is-typing'); cur.sel.style.opacity = '0'; cur.setMode('arrow'); });
    return tl;
  }

  function fillCard(cur, card, cps = 0.018) {
    const b = box(card), tl = T();
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x + 18, b.y + 22, { duration: 0.38 }));
    tl.add(cur.click());
    card._parts.forEach(([n, v]) => {
      const o = { n: 0 };
      tl.to(o, { n: v.length, duration: Math.max(0.18, v.length * cps), ease: 'none', onUpdate: () => { n.textContent = v.slice(0, Math.round(o.n)); } });
    });
    tl.call(() => cur.setMode('arrow'));
    return tl;
  }

  function duplicate(cur, src, dst) {
    const a = box(src), b = box(dst), tl = T();
    const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
    let ghost;
    tl.add(cur.moveTo(ax, ay, { duration: 0.38 }));
    tl.call(() => {
      ghost = src.cloneNode(true);
      ghost.classList.add('sw-ghost');
      ghost.style.visibility = 'visible';
      ghost.style.clipPath = 'none';
      cur.nameTag.dataset.mod = '⌥';
      canvas.cursorLayer.before(ghost);
    });
    tl.add(cur.press());
    tl.add(cur.drag(b.x + b.w / 2, b.y + b.h / 2, {
      duration: 0.5,
      ease: 'power3.inOut',
      onUpdate: (nx, ny) => { ghost.style.transform = `translate3d(${nx - ax}px, ${ny - ay}px, 0)`; },
    }));
    tl.call(() => guides(b));
    tl.add(cur.release());
    tl.call(() => { ghost.remove(); show(dst); dst.style.clipPath = 'none'; delete cur.nameTag.dataset.mod; });
    return tl;
  }

  function revealImage(cur) {
    const b = box(e.image), tl = T();
    tl.add(cur.moveTo(b.x + b.w * 0.5, b.y + b.h * 0.5, { duration: 0.5 }));
    tl.add(cur.click());
    tl.call(() => { e.img.style.visibility = 'visible'; });
    tl.fromTo(e.img, { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.06 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.1, ease: 'power3.out' });
    tl.to(e.placeholder, { opacity: 0, duration: 0.4 }, '<0.35');
    tl.add(cur.moveTo(b.x + b.w + 26, b.y + b.h * 0.7, { duration: 0.5 }), '<');
    return tl;
  }

  function placeTags(cur) {
    const tl = T();
    e.tags.forEach((t) => {
      const b = box(t);
      tl.add(cur.moveTo(b.x + b.w / 2, b.y + b.h / 2, { duration: 0.32 }));
      tl.add(cur.click());
      tl.call(() => show(t));
      tl.fromTo(t, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.22, ease: 'power2.out' }, '<');
    });
    return tl;
  }

  const gather = (cur) => cur.moveTo(cur.home.gather[0] * sx, cur.home.gather[1] * sy, { duration: 1.05, ease: 'power3.out' });
  const leave = (cur) => {
    const tl = T(), [fx, fy] = cur.home.from;
    tl.add(cur.moveTo(fx * sx, fy * sy, { duration: 0.75, ease: 'power2.in' }));
    tl.to(cur.root, { opacity: 0, duration: 0.2 }, '-=0.2');
    return tl;
  };

  // ---- tracks ---------------------------------------------------------------------------
  function track(cur) {
    const tl = gsap.timeline();
    let t = 0;
    const api = {
      tl,
      get t() { return t; },
      at(x) { t = Math.max(t, x); return api; },
      then(step, gap = 0) { tl.add(step, t + gap); t += gap + step.duration(); return api; },
    };
    return api;
  }

  const [layout, type, visuals, ui] = cursors;
  const tL = track(layout), tT = track(type), tV = track(visuals), tU = track(ui);
  [tL, tT, tV, tU].forEach((tr, i) => tr.then(gather(cursors[i]), 0.1 + i * 0.07));

  // Layout: draws the main container, lets it settle, then frames the button
  tL.at(1.55).then(drawBox(layout, e.container, { move: 0.6, drag: 1.05 }));
  tL.then(gsap.to(e.containerShadow, { opacity: 1, duration: 0.45, ease: 'power2.out' }));
  tL.then(drawBox(layout, e.cta, { move: 0.5, drag: 0.6 }), 0.15);

  // Type: eyebrow, heading, then the summary
  tT.at(tL.t - 1.05).then(typeText(type, e.eyebrow, { cps: 0.028, textBox: false }));
  tT.then(typeText(type, e.title, { cps: 0.045 }), 0.15);
  tT.then(typeText(type, e.summary, { cps: 0.014 }), 0.15);

  // Visuals: image frame with a grey placeholder, the image itself, then the stat cards
  tV.at(3.3).then(drawBox(visuals, e.image, { move: 0.6, drag: 0.8 }));
  tV.then(revealImage(visuals), 0.2);
  tV.then(drawBox(visuals, e.stats[0], { move: 0.45, drag: 0.55 }), 0.1);
  e.stats.slice(1).forEach((s, i) => tV.then(duplicate(visuals, e.stats[i], s), 0.08));
  const statsReady = tV.t;
  if (e.tags.length) tV.then(placeTags(visuals), 0.15);

  // UI: section divider, first fact card, then three duplicates
  tU.at(3.45).then(drawBox(ui, e.divider, { move: 0.5, drag: 0.65 }));
  tU.then(drawBox(ui, e.facts[0], { move: 0.45, drag: 0.55 }), 0.1);
  e.facts.slice(1).forEach((f, i) => tU.then(duplicate(ui, e.facts[i > 1 ? i - 1 : 0], f), 0.08));
  const factsReady = tU.t;
  tU.then(fillCard(ui, e.facts[0]), 0.1).then(fillCard(ui, e.facts[1]), 0.05);

  // Layout comes back to fill the other two facts and label the button
  tL.at(factsReady + 0.1).then(fillCard(layout, e.facts[2])).then(fillCard(layout, e.facts[3]), 0.05);
  tL.then(typeCta(layout), 0.1);
  function typeCta(cur) {
    const b = box(e.cta), v = e.cta._text, o = { n: 0 }, tl = T();
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x + 24, b.y + b.h / 2, { duration: 0.45 }));
    tl.add(cur.click());
    tl.to(o, { n: v.length, duration: v.length * 0.03, ease: 'none', onUpdate: () => { e.ctaLabel.textContent = v.slice(0, Math.round(o.n)); } });
    tl.call(() => cur.setMode('arrow'));
    return tl;
  }

  // Type finishes with the stat numbers once Visuals has placed the cards
  tT.at(statsReady + 0.1);
  e.stats.forEach((s, i) => tT.then(fillCard(type, s), i ? 0.05 : 0));

  // Everyone heads off once their own work is done
  [tL, tT, tV, tU].forEach((tr, i) => tr.then(leave(cursors[i]), 0.3));

  const master = gsap.timeline({ paused: true, onComplete: () => { canvas.finish(); onComplete && onComplete(); } });
  [tL, tT, tV, tU].forEach((tr) => master.add(tr.tl, 0));

  const tick = () => cursors.forEach((c) => c.tick());
  return {
    cursors,
    master,
    start() { gsap.ticker.add(tick); master.play(0); },
    stop() { gsap.ticker.remove(tick); master.kill(); },
    setScale(s) { cursors.forEach((c) => c.setScale(s)); },
    hideCrew() { cursors.forEach((c) => { c.hide(); c.sel.style.opacity = '0'; c.dim.style.opacity = '0'; }); },
  };
}
