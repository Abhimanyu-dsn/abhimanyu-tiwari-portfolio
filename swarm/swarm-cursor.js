// SwarmCursor: one collaborator's pointer on the construction canvas.
// It lives in stage coordinates, moves along gently curved paths (GSAP), switches between
// arrow, crosshair and text modes, and leaves a short fading trail behind it.

const ARROW = '<path d="M3 2.2 3 19.4 7.6 15.1 10.6 21.9 13.6 20.6 10.7 13.9 17 13.9Z" fill="var(--c)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>';
const CROSS = '<g stroke="var(--c)" stroke-width="1.8" stroke-linecap="round"><path d="M11 1v7M11 14v7M1 11h7M14 11h7"/></g><circle cx="11" cy="11" r="1.6" fill="var(--c)"/>';
const BEAM = '<g stroke="var(--c)" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M8 2.5h6M8 19.5h6M11 2.5v17"/></g>';
const SHAPES = { arrow: [ARROW, 0, 0], cross: [CROSS, -11, -11], text: [BEAM, -11, -11] };
const TRAIL = 4;

export class SwarmCursor {
  constructor(layer, { name, color, side = 1 }, gsap) {
    this.gsap = gsap;
    this.side = side; // which way its paths bow, so two cursors never trace the same arc
    this.pos = { x: -60, y: -60 };
    this.hist = [];
    this.root = document.createElement('div');
    this.root.className = 'sw-cursor';
    this.root.style.setProperty('--c', color);
    this.ghosts = Array.from({ length: TRAIL }, (_, i) => {
      const g = document.createElement('span');
      g.className = 'sw-trail';
      g.style.setProperty('--c', color);
      g.style.opacity = String(0.32 - i * 0.07);
      layer.appendChild(g);
      return g;
    });
    this.root.innerHTML =
      '<span class="sw-ptr"><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"></svg></span>' +
      `<span class="sw-name">${name}</span>`;
    this.ptr = this.root.firstChild;
    this.svg = this.ptr.firstChild;
    this.nameTag = this.root.lastChild;
    layer.appendChild(this.root);
    this.setMode('arrow');
    this.k = 1;
    this.set(this.pos.x, this.pos.y);
  }

  /** Keeps the pointer the same on-screen size whatever the stage scale. */
  setScale(stageScale) {
    this.k = 1 / stageScale;
    this.set(this.pos.x, this.pos.y);
  }

  setMode(m) {
    const [svg, ox, oy] = SHAPES[m];
    this.svg.innerHTML = svg;
    this.svg.style.transform = `translate(${ox}px, ${oy}px)`;
    this.root.dataset.mode = m;
  }

  set(x, y) {
    this.pos.x = x;
    this.pos.y = y;
    this.root.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${this.k})`;
  }

  /** Called every frame while the canvas is open; the ghosts lag behind the pointer. */
  tick() {
    this.hist.unshift([this.pos.x, this.pos.y]);
    if (this.hist.length > TRAIL * 3) this.hist.length = TRAIL * 3;
    this.ghosts.forEach((g, i) => {
      const h = this.hist[Math.min((i + 1) * 3 - 1, this.hist.length - 1)];
      g.style.transform = `translate3d(${h[0]}px, ${h[1]}px, 0) scale(${this.k})`;
    });
  }

  /** Curved, eased move to (x, y). The start is read when the move begins, so moves chain. */
  moveTo(x, y, { duration = 0.8, ease = 'power3.inOut', arc = 0.12 } = {}) {
    const o = { t: 0 };
    let x0, y0, cx, cy;
    return this.gsap.to(o, {
      t: 1,
      duration,
      ease,
      onStart: () => {
        x0 = this.pos.x; y0 = this.pos.y;
        const dx = x - x0, dy = y - y0;
        cx = x0 + dx / 2 - dy * arc * this.side;
        cy = y0 + dy / 2 + dx * arc * this.side;
      },
      onUpdate: () => {
        const t = o.t, u = 1 - t;
        this.set(u * u * x0 + 2 * u * t * cx + t * t * x, u * u * y0 + 2 * u * t * cy + t * t * y);
      },
    });
  }

  /** Straight, steady drag (used while drawing or dragging something). */
  drag(x, y, { duration = 0.8, ease = 'power2.inOut', onUpdate } = {}) {
    const o = { t: 0 };
    let x0, y0;
    return this.gsap.to(o, {
      t: 1,
      duration,
      ease,
      onStart: () => { x0 = this.pos.x; y0 = this.pos.y; },
      onUpdate: () => {
        const nx = x0 + (x - x0) * o.t, ny = y0 + (y - y0) * o.t;
        this.set(nx, ny);
        onUpdate && onUpdate(nx, ny, x0, y0);
      },
    });
  }

  press() {
    return this.gsap.to(this.ptr, { scale: 0.82, duration: 0.09, ease: 'power2.out' });
  }

  release() {
    return this.gsap.to(this.ptr, { scale: 1, duration: 0.16, ease: 'power2.out' });
  }

  click() {
    const tl = this.gsap.timeline();
    tl.add(this.press()).add(this.release());
    return tl;
  }

  hide() {
    this.root.style.opacity = '0';
    this.ghosts.forEach((g) => (g.style.opacity = '0'));
  }
}
