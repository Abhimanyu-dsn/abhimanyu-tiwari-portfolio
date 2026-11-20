// ConstructionTimeline: choreographs the swarm for one section of the case study.
// Each cursor gets its own track (a GSAP timeline) and every move has a job: draw the section
// card, type a heading, frame and reveal a screen, duplicate a card. Tracks run side by side;
// when one cursor needs another's work, it waits for that point in the other's track.
// Recipes are driven by what ConstructionCanvas found in the section's markup, so any
// project's case-study markup can be built the same way.

import { SwarmCursor } from './swarm-cursor.js';

export const CREW = [
  { name: 'Layout', color: '#6C3CF5', side: 1 },
  { name: 'Type', color: '#E8368F', side: -1 },
  { name: 'Visuals', color: '#0E9F84', side: 1 },
  { name: 'UI', color: '#E08600', side: -1 },
];

/**
 * Builds one section. `intro` = the first section (crew gathers first, normal pace);
 * later sections run faster so scrolling never waits long.
 */
export function buildSection(gsap, canvas, S, { intro = false, onComplete } = {}) {
  const { w: SW, h: SH } = canvas.sectionSize(S);
  const pace = intro ? 1 : 0.62; // multiplies typing time per character for later sections
  const box = (n) => canvas.box(S, n);
  const show = (n) => n.classList.remove('sw-u');

  // Where each collaborator comes from / goes back to (section coordinates)
  const doors = [[-70, SH * 0.25], [SW * 0.45, -70], [SW + 70, SH * 0.35], [SW * 0.3, SH + 70]];
  const cursors = CREW.map((c, i) => {
    const cur = new SwarmCursor(S.layer, c, gsap);
    cur.set(doors[i][0], doors[i][1]);
    cur.root.style.opacity = '0';
    cur.door = doors[i];
    cur.sel = mk('sw-sel', c.color);
    cur.dim = mk('sw-dim', c.color);
    return cur;
  });
  function mk(cls, color) {
    const n = document.createElement('div');
    n.className = cls;
    n.style.setProperty('--c', color);
    S.layer.appendChild(n);
    return n;
  }
  const guideH = mk('sw-guide sw-guide-h'), guideV = mk('sw-guide sw-guide-v');

  const sel = (cur, x, y, w, h, text) => {
    const s = cur.sel.style;
    s.left = x + 'px'; s.top = y + 'px'; s.width = Math.max(0, w) + 'px'; s.height = Math.max(0, h) + 'px'; s.opacity = '1';
    cur.sel.classList.toggle('is-text', !!text);
  };
  const dim = (cur, x, y, w, h) => {
    cur.dim.textContent = `${Math.round(w)} × ${Math.round(h)}`;
    cur.dim.style.transform = `translate3d(${x + 14 * cur.k}px, ${y + 44 * cur.k}px, 0) scale(${cur.k})`;
    cur.dim.style.opacity = '1';
  };
  const guides = (b) => {
    guideH.style.transform = `translateY(${b.y}px)`;
    guideV.style.transform = `translateX(${b.x}px)`;
    gsap.fromTo([guideH, guideV], { opacity: 1 }, { opacity: 0, duration: 0.45, delay: 0.25, ease: 'power1.out' });
  };

  // ---- steps -----------------------------------------------------------------------------
  const T = () => gsap.timeline();

  function enter(cur) {
    const tl = T();
    tl.to(cur.root, { opacity: 1, duration: 0.2 });
    return tl;
  }

  function drawBox(cur, node, { move = 0.5, drag = 0.7 } = {}) {
    const b = box(node), tl = T(), flat = b.h <= 6;
    tl.call(() => cur.setMode('cross'));
    tl.add(cur.moveTo(b.x, b.y, { duration: move }));
    tl.add(cur.press());
    tl.call(() => { sel(cur, b.x, b.y, 0, 0); show(node); node.style.clipPath = 'inset(0 100% 100% 0)'; });
    tl.add(cur.drag(b.x + b.w, b.y + b.h, {
      duration: drag,
      onUpdate: (nx, ny) => {
        const w = nx - b.x, h = ny - b.y;
        sel(cur, b.x, b.y, w, h);
        dim(cur, nx, ny, w, h);
        node.style.clipPath = `inset(0 ${Math.max(0, (1 - w / b.w) * 100)}% ${flat ? 0 : Math.max(0, (1 - h / b.h) * 100)}% 0)`;
      },
    }));
    tl.add(cur.release());
    tl.call(() => { node.style.clipPath = ''; cur.dim.style.opacity = '0'; });
    tl.to(cur.sel, { opacity: 0, duration: 0.22 }, '+=0.1');
    tl.call(() => cur.setMode('arrow'));
    return tl;
  }

  function typeText(cur, item, { cps = 0.03, textBox = true } = {}) {
    const n = item.el, b = box(n), o = { n: 0 }, tl = T(), len = item.typer.total;
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x, b.y + 2, { duration: 0.42 }));
    tl.add(cur.press());
    if (textBox) {
      tl.call(() => sel(cur, b.x, b.y, 0, 0, true));
      tl.add(cur.drag(b.x + b.w, b.y + b.h, { duration: 0.3, onUpdate: (nx, ny) => sel(cur, b.x, b.y, nx - b.x, ny - b.y, true) }));
    }
    tl.add(cur.release());
    tl.call(() => { item.typer.set(0); item.typer.caret(true); show(n); });
    tl.addLabel('type');
    tl.add(cur.moveTo(b.x + Math.min(b.w, 260) * 0.6, b.y + b.h + 26, { duration: 0.4, arc: 0.06 }), 'type+=0.08');
    tl.to(o, { n: len, duration: Math.max(0.2, len * cps * pace), ease: 'none', onUpdate: () => item.typer.set(o.n) }, 'type');
    tl.to({}, { duration: 0.22 });
    tl.call(() => { item.typer.caret(false); cur.sel.style.opacity = '0'; cur.setMode('arrow'); });
    return tl;
  }

  function fillCard(cur, card, cps = 0.014) {
    const b = box(card.el), o = { n: 0 }, tl = T();
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x + 18, b.y + 20, { duration: 0.32 }));
    tl.add(cur.click());
    card.imgs.forEach((img) => tl.add(revealImg(img), '<'));
    tl.call(() => card.typer.set(0));
    tl.to(o, { n: card.typer.total, duration: Math.max(0.2, card.typer.total * cps * pace), ease: 'none', onUpdate: () => card.typer.set(o.n) });
    tl.call(() => { card.typer.done(); cur.setMode('arrow'); });
    return tl;
  }

  function duplicate(cur, src, dst) {
    const a = box(src), b = box(dst), tl = T();
    const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
    let ghost;
    tl.add(cur.moveTo(ax, ay, { duration: 0.32 }));
    tl.call(() => {
      ghost = src.cloneNode(true);
      ghost.classList.add('sw-ghost');
      ghost.classList.remove('sw-u');
      Object.assign(ghost.style, { position: 'absolute', left: a.x + 'px', top: a.y + 'px', width: a.w + 'px', height: a.h + 'px', margin: '0', clipPath: '' });
      cur.nameTag.dataset.mod = '⌥';
      S.layer.prepend(ghost);
    });
    tl.add(cur.press());
    tl.add(cur.drag(b.x + b.w / 2, b.y + b.h / 2, {
      duration: 0.42,
      ease: 'power3.inOut',
      onUpdate: (nx, ny) => { ghost.style.transform = `translate3d(${nx - ax}px, ${ny - ay}px, 0)`; },
    }));
    tl.call(() => guides(b));
    tl.add(cur.release());
    tl.call(() => { ghost.remove(); show(dst); delete cur.nameTag.dataset.mod; });
    return tl;
  }

  /** Quick paste for the rest of a long row: click the spot, the copy pops in. */
  function paste(cur, dst) {
    const b = box(dst), tl = T();
    tl.add(cur.moveTo(b.x + b.w / 2, b.y + b.h / 2, { duration: 0.24 }));
    tl.add(cur.click());
    tl.call(() => show(dst));
    tl.fromTo(dst, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out', clearProps: 'transform,opacity' }, '<');
    return tl;
  }

  function revealImg(img) {
    const tl = T();
    tl.call(() => { show(img); const f = img.closest('.sw-ph'); f && f.classList.remove('sw-ph'); });
    tl.fromTo(img, { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.05 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.7, ease: 'power3.out', clearProps: 'clipPath,transform' });
    return tl;
  }

  function popTags(cur, tags) {
    const tl = T();
    tags.forEach((t) => {
      const b = box(t);
      tl.add(cur.moveTo(b.x + b.w / 2, b.y + b.h / 2, { duration: 0.26 }));
      tl.add(cur.click());
      tl.call(() => show(t));
      tl.fromTo(t, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out', clearProps: 'transform,opacity' }, '<');
    });
    return tl;
  }

  function leave(cur) {
    const tl = T();
    tl.add(cur.moveTo(cur.door[0], cur.door[1], { duration: 0.6, ease: 'power2.in' }));
    tl.to(cur.root, { opacity: 0, duration: 0.18 }, '-=0.18');
    return tl;
  }

  // ---- tracks ----------------------------------------------------------------------------
  function track(cur) {
    const tl = gsap.timeline();
    let t = 0, used = false;
    const api = {
      cur, tl,
      get t() { return t; },
      get used() { return used; },
      at(x) { t = Math.max(t, x); return api; },
      then(step, gap = 0) {
        if (!used) { used = true; tl.add(enter(cur), t); }
        tl.add(step, t + gap);
        t += gap + step.duration();
        return api;
      },
    };
    return api;
  }
  const [tLayout, tType, tVis, tUI] = cursors.map(track);

  // Intro only: the crew gathers in the middle first
  let start = 0.05;
  if (intro) {
    const spots = [[0.42, 0.45], [0.5, 0.38], [0.56, 0.48], [0.48, 0.56]];
    [tLayout, tType, tVis, tUI].forEach((tr, i) =>
      tr.then(tr.cur.moveTo(SW * spots[i][0], SH * spots[i][1], { duration: 0.8, ease: 'power3.out' }), 0.05 + i * 0.05));
    start = 1.1;
  }

  // 1. Layout draws the section card
  tLayout.at(start).then(drawBox(cursors[0], S.bg, { move: 0.55, drag: intro ? 1 : 0.75 }));
  const cardDrawn = tLayout.t;

  // 2. Type writes the left column (label, heading, text), starting as the card lands
  tType.at(cardDrawn - (intro ? 0.15 : 0.55));
  S.texts.forEach((t, i) => {
    const big = /^H[12]$/.test(t.el.tagName);
    tType.then(typeText(cursors[1], t, { cps: big ? 0.04 : t.typer.total > 60 ? 0.012 : 0.026, textBox: big || t.typer.total > 60 }), i ? 0.08 : 0);
  });

  // 3. The rest of the crew shares the right column
  const jobs = [];
  if (S.tags.length) jobs.push({ kind: 'tags' });
  S.figures.forEach((f, i, all) => {
    const first = all.findIndex((x) => x.row === f.row);
    if (first === i) jobs.push({ kind: 'figures', figs: all.filter((x) => x.row === f.row) });
  });
  S.groups.forEach((g) => jobs.push({ kind: 'group', g }));
  if (S.lists.length) jobs.push({ kind: 'lists' });

  const workers = [tUI, tVis, tLayout];
  const fillLater = []; // cards a helper fills once it's free
  jobs.forEach((job, i) => {
    const tr = job.kind === 'figures' ? tVis : workers[i % workers.length];
    const cur = tr.cur;
    tr.at(cardDrawn + 0.1 + (tr === tLayout ? 0 : i * 0.15));
    if (job.kind === 'tags') {
      tr.then(popTags(cur, S.tags));
    } else if (job.kind === 'figures') {
      const figs = job.figs;
      tr.then(drawBox(cur, figs[0].el, { move: 0.45, drag: 0.55 }));
      figs.slice(1).forEach((f, k) => tr.then(k < 1 ? duplicate(cur, figs[0].el, f.el) : paste(cur, f.el), 0.05));
      figs.forEach((f) => {
        const b = box(f.el), step = T();
        step.add(cur.moveTo(b.x + b.w / 2, b.y + Math.min(b.h, 300) / 2, { duration: 0.3 }));
        step.add(cur.click());
        if (f.img) step.add(revealImg(f.img), '<0.05');
        tr.then(step, 0.02);
        if (f.cap) tr.then(typeText(cur, f.cap, { cps: 0.016, textBox: false }), 0.02);
      });
    } else if (job.kind === 'group') {
      const cards = job.g.cards;
      tr.then(drawBox(cur, cards[0].el, { move: 0.42, drag: 0.5 }));
      cards.slice(1).forEach((c, k) => tr.then(k < 2 ? duplicate(cur, cards[0].el, c.el) : paste(cur, c.el), 0.04));
      const ready = tr.t;
      const mine = cards.length > 3 ? cards.slice(0, Math.ceil(cards.length / 2)) : cards;
      mine.forEach((c) => tr.then(fillCard(cur, c), 0.03));
      cards.slice(mine.length).forEach((c) => fillLater.push({ c, ready }));
    } else if (job.kind === 'lists') {
      S.lists.forEach((l) => tr.then(typeText(cur, l, { cps: 0.018, textBox: false }), 0.03));
    }
  });

  // Type helps fill the second half of long card rows once its own text is done
  fillLater.forEach(({ c, ready }) => { tType.at(ready); tType.then(fillCard(cursors[1], c), 0.03); });

  // 4. Everyone heads off once their own work is done
  [tLayout, tType, tVis, tUI].forEach((tr) => tr.used && tr.then(leave(tr.cur), 0.2));

  const master = gsap.timeline({ paused: true, onComplete: () => { canvas.finish(S); onComplete && onComplete(); } });
  [tLayout, tType, tVis, tUI].forEach((tr) => tr.used && master.add(tr.tl, 0));
  master.timeScale(intro ? 1.5 : 2.5);

  const tick = () => cursors.forEach((c) => c.tick());
  return {
    master,
    start() { gsap.ticker.add(tick); master.play(0); },
    stop() { gsap.ticker.remove(tick); master.kill(); },
    setScale(z) { cursors.forEach((c) => c.setScale(z)); },
  };
}
