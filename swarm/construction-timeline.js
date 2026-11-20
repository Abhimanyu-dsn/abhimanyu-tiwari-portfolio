// ConstructionTimeline: choreographs the swarm for one section of the case study.
// Every element gets its own cursor: a Layout cursor draws the section card, a Type cursor
// writes each heading and paragraph, a UI cursor draws and fills each card or list item, a
// Visuals cursor frames and reveals each screen. Each comes in from the nearest edge, builds
// its one piece, and leaves, so a section is built by a crowd working at once.
// Recipes are driven by what ConstructionCanvas found in the section's markup, so any
// project's case-study markup can be built the same way.

import { SwarmCursor } from './swarm-cursor.js';

// Pace knob. Each project sets its own `speed` so its whole case study builds in about 30 s.
export const SPEED = 1.3;

const PALETTE = {
  Layout: ['#6C3CF5', '#5B2BE0'],
  Type: ['#E8368F', '#C2185B', '#D9328A', '#F06292', '#AD1457'],
  Visuals: ['#0E9F84', '#00897B', '#26A69A', '#00796B', '#2BB39A'],
  UI: ['#E08600', '#F4511E', '#FB8C00', '#C77700', '#EF6C00', '#D84315'],
};

/**
 * Builds one section. `onBuilt` fires as soon as every piece is in place (the next section
 * can start then); `onDone` fires once the last cursor has left.
 */
export function buildSection(gsap, canvas, S, { onBuilt, onDone, speed = SPEED } = {}) {
  const { w: SW, h: SH } = canvas.sectionSize(S);
  const box = (n) => canvas.box(S, n);
  const show = (n) => n.classList.remove('sw-u');
  const T = () => gsap.timeline();

  // ---- crew --------------------------------------------------------------------------------
  const cursors = [];
  const hired = {};
  function mk(cls, color) {
    const n = document.createElement('div');
    n.className = cls;
    n.style.setProperty('--c', color);
    S.layer.appendChild(n);
    return n;
  }
  /** A door just outside the section edge closest to the element. */
  function doorFor(b) {
    const d = [b.x, SW - (b.x + b.w), b.y, SH - (b.y + b.h)], m = Math.min(...d);
    if (m === d[0]) return [-48, b.y + b.h / 2];
    if (m === d[1]) return [SW + 48, b.y + b.h / 2];
    if (m === d[2]) return [b.x + b.w / 2, -48];
    return [b.x + b.w / 2, SH + 48];
  }
  function hire(role, node) {
    const k = (hired[role] = (hired[role] || 0) + 1) - 1;
    const color = PALETTE[role][k % PALETTE[role].length];
    const cur = new SwarmCursor(S.layer, { name: role, color, side: k % 2 ? -1 : 1 }, gsap);
    cur.door = doorFor(box(node));
    cur.set(cur.door[0], cur.door[1]);
    cur.root.style.opacity = '0';
    cur.sel = mk('sw-sel', color);
    cur.dim = mk('sw-dim', color);
    cursors.push(cur);
    return cur;
  }

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

  // ---- steps -------------------------------------------------------------------------------
  function drawBox(cur, node, { move = 0.3, drag = 0.32 } = {}) {
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
    tl.to(cur.sel, { opacity: 0, duration: 0.16 });
    return tl;
  }

  /** Types an element's text. `cps` = seconds per character; long text is capped so it never drags. */
  function typeText(cur, item, { cps = 0.01, textBox = false, max = 0.7 } = {}) {
    const n = item.el, b = box(n), o = { n: 0 }, tl = T(), len = item.typer.total;
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x, b.y + 2, { duration: 0.3 }));
    tl.add(cur.press());
    if (textBox) {
      tl.call(() => sel(cur, b.x, b.y, 0, 0, true));
      tl.add(cur.drag(b.x + b.w, b.y + b.h, { duration: 0.18, onUpdate: (nx, ny) => sel(cur, b.x, b.y, nx - b.x, ny - b.y, true) }));
    }
    tl.add(cur.release());
    tl.call(() => { item.typer.set(0); item.typer.caret(true); show(n); });
    tl.to(o, { n: len, duration: Math.min(max, Math.max(0.15, len * cps)), ease: 'none', onUpdate: () => item.typer.set(o.n) });
    tl.call(() => { item.typer.caret(false); cur.sel.style.opacity = '0'; });
    return tl;
  }

  function revealImg(img) {
    const tl = T();
    tl.call(() => { show(img); const f = img.closest('.sw-ph'); f && f.classList.remove('sw-ph'); });
    tl.fromTo(img, { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.05 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.45, ease: 'power3.out', clearProps: 'clipPath,transform' });
    return tl;
  }

  function fillCard(cur, card) {
    const b = box(card.el), o = { n: 0 }, tl = T(), len = card.typer.total;
    tl.call(() => cur.setMode('text'));
    tl.add(cur.moveTo(b.x + 16, b.y + 18, { duration: 0.18 }));
    card.imgs.forEach((img) => tl.add(revealImg(img), '<'));
    tl.call(() => card.typer.set(0));
    tl.to(o, { n: len, duration: Math.min(0.55, Math.max(0.15, len * 0.005)), ease: 'none', onUpdate: () => card.typer.set(o.n) });
    tl.call(() => card.typer.done());
    return tl;
  }

  function popTag(cur, t) {
    const b = box(t), tl = T();
    tl.add(cur.moveTo(b.x + b.w / 2, b.y + b.h / 2, { duration: 0.3 }));
    tl.add(cur.click());
    tl.call(() => show(t));
    tl.fromTo(t, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.18, ease: 'power2.out', clearProps: 'transform,opacity' }, '<');
    return tl;
  }

  function buildFigure(cur, f) {
    const tl = T();
    tl.add(drawBox(cur, f.el, { move: 0.3, drag: 0.3 }));
    tl.add(cur.click());
    if (f.img) tl.add(revealImg(f.img), '<');
    if (f.cap) tl.add(typeText(cur, f.cap, { cps: 0.008, max: 0.35 }));
    return tl;
  }

  // ---- jobs: one cursor per element ----------------------------------------------------------
  const master = gsap.timeline({ paused: true });
  let builtAt = 0;
  function job(role, node, at, build) {
    const cur = hire(role, node), tl = T();
    tl.to(cur.root, { opacity: 1, duration: 0.12 });
    tl.add(build(cur));
    const end = tl.duration();
    tl.call(() => cur.setMode('arrow'));
    tl.add(cur.moveTo(cur.door[0], cur.door[1], { duration: 0.32, ease: 'power2.in' }));
    tl.to(cur.root, { opacity: 0, duration: 0.12 }, '-=0.12');
    master.add(tl, at);
    builtAt = Math.max(builtAt, at + end);
  }

  // The section card first
  job('Layout', S.bg, 0, (c) => drawBox(c, S.bg, { move: 0.28, drag: 0.42 }));

  // Left column: a Type cursor per heading / paragraph, slightly staggered
  S.texts.forEach((t, i) => {
    const big = /^H[12]$/.test(t.el.tagName);
    job('Type', t.el, 0.3 + i * 0.08, (c) => typeText(c, t, { cps: big ? 0.012 : t.typer.total > 60 ? 0.0045 : 0.01, textBox: big, max: big ? 0.6 : 0.8 }));
  });

  // Right column: one cursor per tag, card, screen and list item
  let k = 0;
  const next = () => 0.4 + k++ * 0.06;
  S.tags.forEach((t) => job('UI', t, next(), (c) => popTag(c, t)));
  S.groups.forEach((g) => g.cards.forEach((card) => job('UI', card.el, next(), (c) => {
    const tl = T();
    tl.add(drawBox(c, card.el, { move: 0.3, drag: 0.28 }));
    tl.add(fillCard(c, card));
    return tl;
  })));
  S.figures.forEach((f) => job('Visuals', f.el, next(), (c) => buildFigure(c, f)));
  S.lists.forEach((l) => job('UI', l.el, next(), (c) => typeText(c, l, { cps: 0.01, max: 0.45 })));
  // Anything else (diagrams, rows, icons): a Layout cursor draws its box
  S.blocks.forEach((n) => {
    const b = box(n);
    if (b.w * b.h < 64) { master.call(() => show(n), null, 0.3); return; } // too small to draw
    job('Layout', n, next(), (c) => drawBox(c, n, { move: 0.3, drag: 0.3 }));
  });

  master.call(() => { canvas.finish(S, { keepCrew: true }); onBuilt && onBuilt(); }, null, builtAt);
  master.eventCallback('onComplete', () => onDone && onDone());
  master.timeScale(speed);

  const tick = () => cursors.forEach((c) => c.tick());
  let stopped = false;
  return {
    master,
    builtIn: builtAt / speed, // seconds until the section is fully built
    start() { gsap.ticker.add(tick); master.play(0); },
    stop() {
      if (stopped) return;
      stopped = true;
      gsap.ticker.remove(tick);
      master.kill();
      S.layer.replaceChildren();
    },
    setScale(z) { cursors.forEach((c) => c.setScale(z)); },
  };
}
