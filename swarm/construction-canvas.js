// ConstructionCanvas: the grey canvas and the project presentation laid out on it.
// Everything is positioned in a fixed design space (a "stage") that is scaled to fit the
// canvas, so cursor coordinates and element boxes share one coordinate system.
// Elements start unbuilt (hidden); ConstructionTimeline builds them one by one.

const LAYOUTS = {
  // Desktop / landscape canvas
  wide: {
    w: 1200, h: 750,
    container: [40, 40, 1120, 670],
    image: [620, 88, 492, 316],
    eyebrow: [88, 92, 480, 22],
    title: [88, 122, 500, 116, 44],
    summary: [88, 252, 480, 84, 17],
    divider: [88, 356, 480, 2],
    facts: [[88, 378], [338, 378], [88, 490], [338, 490]], factSize: [230, 92],
    stats: [[620, 424], [791, 424], [962, 424]], statSize: [150, 112],
    tags: [620, 560],
    cta: [88, 614, 240, 54],
  },
  // Phone / portrait canvas
  // (narrow stage so text stays readable once scaled to a phone)
  tall: {
    w: 420, h: 900,
    container: [16, 16, 388, 868],
    image: [36, 36, 348, 200],
    eyebrow: [36, 256, 348, 20],
    title: [36, 280, 348, 80, 30],
    summary: [36, 370, 348, 104, 15],
    divider: [36, 486, 348, 2],
    facts: [[36, 502], [216, 502], [36, 612], [216, 612]], factSize: [168, 100],
    stats: [[36, 726], [156, 726], [276, 726]], statSize: [108, 84],
    tags: null,
    cta: [36, 824, 348, 48],
  },
};

const el = (tag, cls, parent) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (parent) parent.appendChild(n);
  return n;
};
const place = (n, [x, y, w, h]) => {
  n.style.left = x + 'px';
  n.style.top = y + 'px';
  if (w != null) n.style.width = w + 'px';
  if (h != null) n.style.height = h + 'px';
};

export class ConstructionCanvas {
  constructor(host, project) {
    this.host = host;
    this.project = project;
    this.stage = el('div', 'sw-stage', host);
    this.stage.setAttribute('aria-busy', 'true');
    this.scale = 1;
    this.mode = null;
  }

  /** Picks the layout for the canvas shape and (re)creates every element, unbuilt. */
  layout() {
    const r = this.host.getBoundingClientRect();
    const mode = r.width / Math.max(r.height, 1) < 0.95 ? 'tall' : 'wide';
    if (mode !== this.mode) this.build(mode);
    this.fit(r);
    return this.mode;
  }

  fit(r = this.host.getBoundingClientRect()) {
    const L = LAYOUTS[this.mode];
    const top = this.mode === 'tall' ? 64 : 0; // keep the portrait stage clear of the top-right buttons
    const s = Math.min(r.width / L.w, (r.height - top) / L.h);
    this.scale = s;
    this.stage.style.transform = `translate(${(r.width - L.w * s) / 2}px, ${top + (r.height - top - L.h * s) / 2}px) scale(${s})`;
    this.onFit && this.onFit(s);
  }

  build(mode) {
    const p = this.project, L = LAYOUTS[mode];
    this.mode = mode;
    this.L = L;
    this.stage.replaceChildren();
    this.stage.classList.toggle('is-tall', mode === 'tall');
    this.stage.style.width = L.w + 'px';
    this.stage.style.height = L.h + 'px';
    const S = this.stage, e = (this.els = {});

    e.container = el('div', 'sw-el sw-container', S); place(e.container, L.container);
    e.containerShadow = el('div', 'sw-container-shadow', e.container);

    e.image = el('div', 'sw-el sw-image', S); place(e.image, L.image);
    e.placeholder = el('div', 'sw-placeholder', e.image);
    e.placeholder.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="9" width="36" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="17" cy="19" r="4" fill="currentColor"/><path d="M8 36l11-11 8 8 6-6 9 9" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>';
    e.img = el('img', 'sw-img', e.image);
    e.img.src = p.image.src;
    e.img.alt = p.image.alt;
    e.img.decoding = 'async';

    e.eyebrow = this.text('sw-eyebrow', L.eyebrow, p.eyebrow);
    e.title = this.text('sw-title', L.title, p.title, 'h2');
    e.title.style.fontSize = L.title[4] + 'px';
    e.summary = this.text('sw-summary', L.summary, p.summary, 'p');
    e.summary.style.fontSize = L.summary[4] + 'px';

    e.divider = el('div', 'sw-el sw-divider', S); place(e.divider, L.divider);

    e.facts = L.facts.map(([x, y], i) => {
      const c = el('div', 'sw-el sw-card', S); place(c, [x, y, ...L.factSize]);
      const k = el('span', 'sw-card-k', c), v = el('span', 'sw-card-v', c);
      c._parts = [[k, p.facts[i][0]], [v, p.facts[i][1]]];
      return c;
    });
    e.stats = L.stats.map(([x, y], i) => {
      const c = el('div', 'sw-el sw-card sw-stat', S); place(c, [x, y, ...L.statSize]);
      const v = el('span', 'sw-stat-v', c), k = el('span', 'sw-stat-k', c);
      c._parts = [[v, p.stats[i][0]], [k, p.stats[i][1]]];
      return c;
    });
    e.tags = [];
    if (L.tags) {
      let x = L.tags[0];
      p.tags.forEach((t) => {
        const w = 22 + t.length * 8.6;
        const g = el('span', 'sw-el sw-tag', S); place(g, [x, L.tags[1], w, 32]);
        g.textContent = t;
        e.tags.push(g);
        x += w + 10;
      });
    }

    e.cta = el('a', 'sw-el sw-cta', S); place(e.cta, L.cta);
    e.cta.href = p.href;
    e.cta.tabIndex = -1;
    e.ctaLabel = el('span', 'sw-cta-label', e.cta);
    e.cta._text = p.cta + '  →';

    // Alignment guides flashed while building (each cursor brings its own selection box)
    e.guideH = el('div', 'sw-guide sw-guide-h', S);
    e.guideV = el('div', 'sw-guide sw-guide-v', S);
    this.cursorLayer = el('div', 'sw-cursors', S);
  }

  text(cls, box, value, tag = 'div') {
    const n = el(tag, 'sw-el sw-text ' + cls, this.stage);
    place(n, box);
    n._value = value;
    n._span = el('span', 'sw-typed', n);
    n._caret = el('span', 'sw-caret', n);
    return n;
  }

  /** Box of an element in stage coordinates. */
  box(n) {
    return { x: n.offsetLeft, y: n.offsetTop, w: n.offsetWidth, h: n.offsetHeight };
  }

  /** Shows the finished presentation with no construction (skip, reduced motion, re-layout). */
  showFinal() {
    const e = this.els;
    this.stage.querySelectorAll('.sw-el').forEach((n) => {
      n.style.visibility = 'visible';
      n.style.opacity = '1';
      n.style.clipPath = 'none';
      n.style.transform = 'none';
    });
    [e.eyebrow, e.title, e.summary].forEach((t) => { t._span.textContent = t._value; t.classList.remove('is-typing'); });
    [...e.facts, ...e.stats].forEach((c) => c._parts.forEach(([n, v]) => (n.textContent = v)));
    e.ctaLabel.textContent = e.cta._text;
    e.placeholder.style.opacity = '0';
    e.img.style.visibility = 'visible';
    e.img.style.clipPath = 'none';
    e.img.style.transform = 'none';
    e.containerShadow.style.opacity = '1';
    [e.guideH, e.guideV].forEach((n) => (n.style.opacity = '0'));
    this.stage.querySelectorAll('.sw-ghost').forEach((n) => n.remove());
    this.finish();
  }

  finish() {
    this.stage.setAttribute('aria-busy', 'false');
    this.els.cta.tabIndex = 0;
    this.done = true;
  }
}
