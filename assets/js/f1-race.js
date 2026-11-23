/* F1 progress line (home page, dark F1 theme only).
   A thin line runs down the left gutter and fills with racing red as you scroll. Each section
   is a checkpoint: crossing one shows a broadcast-style sector graphic with the section's name.
   Off in light theme and with reduced motion. */
(function () {
  'use strict';
  if (!/(^|\/)(index\.html)?$/.test(location.pathname)) return;

  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)');
  var AT = 0.45;    // the fill tip sits at this fraction of the viewport height
  var HOLD = 2800;  // ms a sector graphic stays up

  var CSS =
    '.f1r-track{position:absolute;left:0;top:0;z-index:-1;pointer-events:none;overflow:visible}' +
    '.f1r-track .cp{fill:#101010;stroke:#3A3A3A;stroke-width:2;transition:fill .25s,stroke .25s}' +
    '.f1r-track .cp.done{fill:#E10600;stroke:#E10600}' +
    // sector graphic
    '.f1r-hud{position:fixed;left:24px;bottom:24px;z-index:29;pointer-events:none;width:min(360px,calc(100vw - 48px));' +
    'font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#FFFFFF;visibility:hidden}' +
    '.f1r-hud.on{visibility:visible}' +
    '.f1r-hud-in{position:relative;padding:12px 16px 14px 20px;background:linear-gradient(100deg,rgba(16,16,16,.96),rgba(25,25,25,.9));' +
    'border:1px solid #303030;border-left:0;border-radius:4px 12px 12px 4px;box-shadow:0 18px 40px -18px rgba(0,0,0,.9);overflow:hidden}' +
    '.f1r-hud-in::before{content:"";position:absolute;left:0;top:0;bottom:0;width:6px;background:#E10600}' +
    '.f1r-hud-in::after{content:"";position:absolute;right:0;top:0;bottom:0;width:28px;opacity:.35;' +
    'background:repeating-conic-gradient(#FFFFFF 0 25%,transparent 0 50%) 0 0/8px 8px}' +
    '.f1r-hud-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-right:28px}' +
    '.f1r-tag{font:800 11px/1 "Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:.14em;background:#E10600;color:#FFFFFF;padding:5px 8px;border-radius:3px;font-style:italic}' +
    '.f1r-lap{font:700 12px/1 "Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:.08em;color:#A5A5A5;font-variant-numeric:tabular-nums}' +
    '.f1r-lap b{color:#FFFFFF;font-weight:700}' +
    '.f1r-name{margin:10px 28px 0 0;font:italic 800 24px/1.1 "Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:-.01em;text-transform:uppercase}' +
    '.f1r-info{margin:6px 28px 0 0;font:500 13px/1.4 "Plus Jakarta Sans",system-ui,sans-serif;color:#A5A5A5}' +
    '@media (max-width:760px){' +
    '.f1r-hud{left:50%;bottom:16px;transform:translateX(-50%);width:calc(100vw - 32px);max-width:360px}' +
    '.f1r-name{font-size:19px}.f1r-info{font-size:12px}}';

  var on = false, started = false, raf = 0, ro = null, layoutQueued = false;
  var el = {}, cps = [], y0 = 0, y1 = 1, x = 20, r = 5, cpIdx = -1, hudTimer = 0, hudAnim = null, t0 = 0;

  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  var docTop = function (n) { return n.getBoundingClientRect().top + scrollY; };
  var pad2 = function (n, w) { n = String(n); while (n.length < w) n = '0' + n; return n; };

  // ---------- build / teardown ----------
  function build() {
    if (!document.getElementById('f1r-css')) {
      var st = document.createElement('style');
      st.id = 'f1r-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    cps = [].slice.call(document.querySelectorAll('[data-cp]')).map(function (s, i) {
      return { el: s, i: i, name: s.dataset.cp, info: s.dataset.cpInfo || '', y: 0 };
    });
    if (cps.length < 2) return false;

    el.track = svgEl('svg', { class: 'f1r-track', 'aria-hidden': 'true' });
    document.body.appendChild(el.track);

    el.hud = document.createElement('div');
    el.hud.className = 'f1r-hud';
    el.hud.setAttribute('aria-live', 'polite');
    el.hud.innerHTML = '<div class="f1r-hud-in"><div class="f1r-hud-top"><span class="f1r-tag"></span><span class="f1r-lap">LAP <b></b></span></div>' +
      '<div class="f1r-name"></div><div class="f1r-info"></div></div>';
    document.body.appendChild(el.hud);
    return true;
  }

  function teardown() {
    ['track', 'hud'].forEach(function (k) { if (el[k]) el[k].remove(); });
    el = {};
    clearTimeout(hudTimer);
    cancelAnimationFrame(raf); raf = 0;
    removeEventListener('scroll', onScroll);
    removeEventListener('resize', queueLayout);
    if (ro) { ro.disconnect(); ro = null; }
    cpIdx = -1;
  }

  // ---------- layout: a straight line in the left gutter ----------
  function layout() {
    layoutQueued = false;
    if (!on) return;
    var main = document.querySelector('main') || document.body;
    var gutter = Math.max(12, main.getBoundingClientRect().left + (parseFloat(getComputedStyle(main).paddingLeft) || 0));
    x = Math.round(gutter / 2);
    r = gutter > 40 ? 5 : 3.5;
    var w = gutter > 40 ? 2 : 1.5;

    var docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    cps.forEach(function (c) { c.y = docTop(c.el) + 24; });
    y0 = cps[0].y;
    var last = cps[cps.length - 1].el;
    y1 = Math.min(docTop(last) + last.offsetHeight, docH - innerHeight * (1 - AT));
    if (y1 <= y0 + 50) y1 = y0 + 50;
    cps.forEach(function (c) { c.y = Math.min(c.y, y1 - 8); });

    var t = el.track, H = Math.ceil(y1 + 40), W = x * 2 + 20;
    t.setAttribute('width', W); t.setAttribute('height', H);
    t.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    t.textContent = '';
    svgEl('line', { x1: x, y1: y0, x2: x, y2: y1, stroke: '#262626', 'stroke-width': w, 'stroke-linecap': 'round' }, t);
    el.fill = svgEl('line', { x1: x, y1: y0, x2: x, y2: y0, stroke: '#E10600', 'stroke-width': w, 'stroke-linecap': 'round',
      style: 'filter:drop-shadow(0 0 4px rgba(225,6,0,.8))' }, t);
    cps.forEach(function (c) { c.dot = svgEl('circle', { class: 'cp', cx: x, cy: c.y, r: r }, t); });
    el.end = svgEl('circle', { class: 'cp', cx: x, cy: y1, r: r * 0.6 }, t);
    cpIdx = -1;
    update();
  }
  function queueLayout() { if (!layoutQueued) { layoutQueued = true; requestAnimationFrame(layout); } }

  // ---------- per scroll ----------
  function update() {
    raf = 0;
    if (!on || !el.fill) return;
    var tip = Math.max(y0, Math.min(y1, scrollY + innerHeight * AT));
    el.fill.setAttribute('y2', tip.toFixed(1));
    el.end.classList.toggle('done', tip >= y1 - 1);
    var idx = 0;
    for (var i = 0; i < cps.length; i++) if (tip >= cps[i].y - 1) idx = i;
    if (idx !== cpIdx) {
      cpIdx = idx;
      cps.forEach(function (c, k) { c.dot.classList.toggle('done', k <= idx); });
      if (started) showSector(idx);
    }
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(update); }

  // ---------- sector graphic ----------
  function showSector(i) {
    var c = cps[i], h = el.hud;
    var ms = Math.max(0, performance.now() - t0), m = Math.floor(ms / 60000), s = Math.floor(ms / 1000) % 60;
    h.querySelector('.f1r-tag').textContent = 'SECTOR ' + pad2(i + 1, 2) + ' / ' + pad2(cps.length, 2);
    h.querySelector('.f1r-lap b').textContent = pad2(m, 2) + ':' + pad2(s, 2) + '.' + pad2(Math.floor(ms % 1000), 3);
    h.querySelector('.f1r-name').textContent = c.name;
    h.querySelector('.f1r-info').textContent = c.info;
    clearTimeout(hudTimer);
    if (hudAnim) hudAnim.cancel();
    h.classList.add('on');
    var inner = h.firstChild;
    hudAnim = inner.animate([
      { transform: 'translateX(-24px) skewX(-12deg)', opacity: 0 },
      { transform: 'translateX(4px) skewX(-2deg)', opacity: 1, offset: 0.7 },
      { transform: 'none', opacity: 1 }
    ], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
    hudTimer = setTimeout(function () {
      hudAnim = inner.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateX(-24px) skewX(-12deg)', opacity: 0 }],
        { duration: 320, easing: 'ease-in', fill: 'forwards' });
      var off = function () { if (el.hud) el.hud.classList.remove('on'); };
      hudAnim.finished.then(off, function () {});
      setTimeout(off, 600);
    }, HOLD);
  }

  // ---------- lifecycle ----------
  function want() { return root.dataset.theme === 'dark' && !reduce.matches; }
  function start() {
    if (on || !want() || !document.body) return;
    if (!build()) return;
    on = true;
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', queueLayout);
    if ('ResizeObserver' in window) { ro = new ResizeObserver(queueLayout); ro.observe(document.querySelector('main') || document.body); }
    layout();
    var go = function () {
      if (!on) return;
      started = true; t0 = performance.now();
      queueLayout();
      if (cpIdx >= 0) showSector(cpIdx);
    };
    if (root.classList.contains('f1-loading')) {
      var mo = new MutationObserver(function () {
        if (!root.classList.contains('f1-loading')) { mo.disconnect(); setTimeout(go, 300); }
      });
      mo.observe(root, { attributes: true, attributeFilter: ['class'] });
    } else go();
  }
  function stop() { if (!on) return; on = false; started = false; teardown(); }
  function sync() { want() ? start() : stop(); }

  document.addEventListener('themechange', function () { setTimeout(sync, 0); });
  if (reduce.addEventListener) reduce.addEventListener('change', sync);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
