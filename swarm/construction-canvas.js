// ConstructionCanvas: the grey canvas inside the popup, now a scrolling page of section cards.
// Each section's markup (from the project's content module) is laid out by CSS straight away
// but kept invisible; the swarm then builds it piece by piece. Nothing is hand-positioned:
// the swarm measures the real elements, so any section markup can be built.

const W = { wide: 1120, tall: 420 };

// What the swarm treats as one thing to build
const TEXT = '.fx-num, h1, h2, h3, .fx-d, .fx-quote, .fx-key, .fx-note, .fx-hmw, .fx-big, .fx-cap';
const GROUPS = [
  ['.sw-facts', ':scope > div'],
  ['.fx-stats', ':scope > .fx-stat'],
  ['.fx-items', ':scope > .fx-item'],
  ['.fx-notifs', ':scope > .fx-notif'],
  ['.fx-dec', ':scope > li'],
];
const LISTS = '.fx-learn > li, .fx-tags > li';
// Containers the recipes above already know; anything else with a row of like children
// (cases, steps, people, bars, checks…) becomes a generic group, one cursor per child.
const KNOWN = '.sw-facts, .sw-tags, .fx-stats, .fx-items, .fx-notifs, .fx-dec, .fx-phones, .fx-pair, .fx-learn, .fx-tags, figure, svg';
const NO_TYPE = '.ms, .fx-notif > i'; // icon glyphs and logo tiles appear with their card

const el = (tag, cls, parent) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (parent) parent.appendChild(n);
  return n;
};

/** Splits an element's text into typed + not-yet-typed spans, so layout never shifts while typing. */
function makeTyper(root) {
  const parts = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.nodeValue.trim() && !n.parentElement.closest(NO_TYPE) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    // Custom tags, so no case-study CSS rule (e.g. `.fx-stat span`) can restyle the pieces
    const w = document.createElement('sw-w'), t = document.createElement('sw-t'), r = document.createElement('sw-r');
    w.append(t, r);
    r.textContent = n.nodeValue;
    n.replaceWith(w);
    parts.push({ t, r, v: n.nodeValue });
  });
  const caret = document.createElement('sw-caret');
  const total = parts.reduce((a, p) => a + p.v.length, 0);
  return {
    total,
    set(n) {
      let k = Math.round(n), placed = false;
      for (const p of parts) {
        const c = Math.max(0, Math.min(p.v.length, k));
        p.t.textContent = p.v.slice(0, c);
        p.r.textContent = p.v.slice(c);
        if (!placed && c < p.v.length) { p.t.after(caret); placed = true; }
        k -= p.v.length;
      }
      if (!placed && parts.length) parts[parts.length - 1].t.after(caret);
    },
    caret(on) { root.classList.toggle('is-typing', on); if (!on) caret.remove(); },
    done() { parts.forEach((p) => { p.t.textContent = p.v; p.r.textContent = ''; }); caret.remove(); root.classList.remove('is-typing'); },
  };
}

export class ConstructionCanvas {
  constructor(host, project) {
    this.host = host;
    this.project = project;
    this.page = el('div', 'sw-page sw-p-' + project.id, host);
    this.zoom = 1;
    this.mode = null;
    this.sections = project.sections.map((s, i) => this.mount(s, i));
  }

  mount(spec, index) {
    const sec = el('section', 'sw-sec', this.page);
    sec.dataset.id = spec.id;
    const bg = el('div', 'sw-sec-bg', sec);
    const body = el('div', 'sw-sec-body', sec);
    body.innerHTML = spec.html;
    const layer = el('div', 'sw-cursors', sec);
    const S = { id: spec.id, index, el: sec, bg, body, layer, built: false };
    this.prepare(S);
    return S;
  }

  /** Finds every piece the swarm will build in a section and hides it. */
  prepare(S) {
    const b = S.body, hide = (n) => n.classList.add('sw-u');
    const reg = new Set(); // every node a recipe builds
    const take = (n) => { hide(n); reg.add(n); return n; };
    hide(S.bg);

    // Group boxes: the known ones, then any other row of like children
    const boxes = [];
    GROUPS.forEach(([g, c]) => b.querySelectorAll(g).forEach((box) => boxes.push({ box, sel: c })));
    [...b.querySelectorAll('[class*="fx-"]')].forEach((n) => {
      const kids = [...n.children];
      if (kids.length < 2 || n.matches(KNOWN) || n.closest('figure, svg, .fx-sec > .fx-l > h2')) return;
      if (boxes.some((x) => x.box.contains(n) || n.contains(x.box))) return;
      if (!kids.every((k) => k.tagName === kids[0].tagName && k.tagName !== 'SPAN' && k.tagName !== 'B')) return;
      if (n.closest(TEXT) || n.matches('.fx-l, .fx-r, .fx-sec')) return;
      boxes.push({ box: n, sel: ':scope > *' });
    });
    const inGroup = (n) => boxes.some((x) => x.box.contains(n));

    const texts = [...b.querySelectorAll(TEXT)].filter((n) => !inGroup(n));
    S.texts = texts.filter((n) => !texts.some((o) => o !== n && o.contains(n)) && !n.closest('figure'))
      .map((n) => { take(n); return { el: n, typer: makeTyper(n) }; });
    S.tags = [...b.querySelectorAll('.sw-tags > span')];
    S.tags.forEach(take);

    S.groups = boxes.map(({ box, sel }) => {
      const cards = [...box.querySelectorAll(sel)].map((n) => {
        take(n);
        const imgs = [...n.querySelectorAll('img')];
        imgs.forEach(hide);
        return { el: n, imgs, typer: makeTyper(n) };
      });
      return { box, cards };
    });

    S.figures = [...b.querySelectorAll('figure')].filter((f) => !inGroup(f)).map((f) => {
      take(f);
      const img = f.querySelector('img'), cap = f.querySelector('figcaption');
      if (img) hide(img);
      f.classList.add('sw-ph');
      return { el: f, img, cap: cap ? { el: cap, typer: makeTyper(cap) } : null, row: f.parentElement };
    });

    S.lists = [...b.querySelectorAll(LISTS)].filter((n) => !inGroup(n)).map((n) => { take(n); return { el: n, typer: makeTyper(n) }; });

    // Anything left (diagrams, rows, icons…) is drawn as one block, so nothing shows early
    S.blocks = [];
    const holds = (n) => [...reg].some((r) => n.contains(r));
    const sweep = (n) => [...n.children].forEach((c) => {
      if (reg.has(c)) return;
      if (holds(c)) sweep(c);
      else { take(c); S.blocks.push(c); }
    });
    sweep(b);
    S.images = [...b.querySelectorAll('img')];
  }

  /** Width-fits the page; returns true if the layout switched between phone and desktop. */
  layout() {
    const w = this.host.clientWidth;
    const mode = w < 700 ? 'tall' : 'wide';
    const changed = this.mode && mode !== this.mode;
    this.mode = mode;
    this.page.classList.toggle('is-tall', mode === 'tall');
    const gutter = mode === 'wide' ? 64 : 20;
    this.zoom = Math.min(mode === 'wide' ? 1 : 1.2, (w - gutter) / W[mode]);
    this.page.style.zoom = String(this.zoom);
    this.onFit && this.onFit(this.zoom);
    return changed;
  }

  /** An element's box in its section's own (unzoomed) coordinates. */
  box(S, n) {
    const a = n.getBoundingClientRect(), s = S.el.getBoundingClientRect(), z = this.zoomFactor(S);
    return { x: (a.left - s.left) / z, y: (a.top - s.top) / z, w: a.width / z, h: a.height / z };
  }

  /** Ratio between screen pixels and the section's CSS pixels (CSS zoom). */
  zoomFactor(S) {
    return S.el.getBoundingClientRect().width / S.el.offsetWidth || 1;
  }

  sectionSize(S) {
    return { w: S.el.offsetWidth, h: S.el.offsetHeight };
  }

  /** Images of a section decoded, so measured boxes are final (gives up after 1.5 s). */
  ready(S) {
    const all = Promise.all(S.images.map((i) => (i.complete ? Promise.resolve() : i.decode().catch(() => {}))));
    return Promise.race([all, new Promise((r) => setTimeout(r, 1500))]);
  }

  /** Shows a section finished, with no construction. */
  finish(S, { keepCrew = false } = {}) {
    S.el.querySelectorAll('.sw-u').forEach((n) => n.classList.remove('sw-u'));
    S.el.querySelectorAll('.sw-ph').forEach((n) => n.classList.remove('sw-ph'));
    S.el.querySelectorAll('.sw-ghost').forEach((n) => n.remove());
    [S.bg, ...S.el.querySelectorAll('.sw-sec-body *')].forEach((n) => {
      if (n.style.clipPath) n.style.clipPath = '';
      if (n.style.opacity) n.style.opacity = '';
      if (n.style.transform && !n.closest('.sw-cursors')) n.style.transform = '';
    });
    S.texts.forEach((t) => t.typer.done());
    S.groups.forEach((g) => g.cards.forEach((c) => c.typer.done()));
    S.figures.forEach((f) => f.cap && f.cap.typer.done());
    S.lists.forEach((l) => l.typer.done());
    if (!keepCrew) S.layer.replaceChildren(); // cursors still walking off are cleared by their crew
    S.built = true;
  }

  finishAll() {
    this.sections.forEach((S) => !S.built && this.finish(S));
  }

  get allBuilt() {
    return this.sections.every((S) => S.built);
  }
}
