/* F1 race layer (home page, dark F1 theme only).
   A top-view race car drives down a track in the left gutter as you scroll. Each section is a
   checkpoint: crossing one shows a broadcast-style sector graphic. A circuit mini-map (top right)
   fills with racing red as the car progresses. Off in light theme and with reduced motion. */
(function () {
  'use strict';
  if (!/(^|\/)(index\.html)?$/.test(location.pathname)) return;

  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)');
  var CAR_SRC = 'assets/v2/f1-car-top.webp';
  var CAR_RATIO = 2.09; // height / width of the car image
  var CAR_AT = 0.45;    // the car sits at this fraction of the viewport height
  var HOLD = 2800;      // ms a sector graphic stays up

  // Original circuit for the mini-map (100 x 120 units), drawn clockwise from the start line
  var CIRCUIT = 'M22 98 L22 44 C22 24 40 16 52 26 L63 36 C69 42 79 40 81 30 L83 20 C85 9 97 9 97 22 ' +
    'L97 90 C97 104 87 111 75 106 L57 98 C49 95 45 100 45 106 C45 114 31 115 26 110 C23 107 22 103 22 98 Z';

  var CSS =
    '.f1r-track{position:absolute;left:0;top:0;z-index:-1;pointer-events:none;overflow:visible}' +
    '.f1r-car{position:fixed;left:0;top:0;z-index:15;pointer-events:none;will-change:transform;transform-origin:50% 50%}' +
    '.f1r-car img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 6px 6px rgba(0,0,0,.7)) drop-shadow(0 0 10px rgba(225,6,0,.25))}' +
    '.f1r-trail{position:absolute;top:86%;width:9%;height:260%;border-radius:99px;opacity:0;transform-origin:50% 0;' +
    'background:linear-gradient(180deg,#FF6A50 0%,rgba(255,40,20,.85) 8%,rgba(225,6,0,.15) 45%,rgba(225,6,0,0) 100%);' +
    'box-shadow:0 0 10px 2px rgba(225,6,0,.45);filter:blur(.6px)}' +
    '.f1r-trail.l{left:8%}.f1r-trail.r{right:8%}' +
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
    // mini-map
    '.f1r-map{position:fixed;top:88px;right:24px;z-index:30;width:212px;box-sizing:border-box;padding:10px 10px 8px;border-radius:14px;' +
    'background:rgba(8,8,8,.78);border:1px solid #303030;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);' +
    'box-shadow:0 18px 40px -20px rgba(0,0,0,.9);font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#FFFFFF}' +
    '.f1r-map-h{display:flex;justify-content:space-between;align-items:center;font:800 10px/1 "Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:.16em;color:#A5A5A5;font-style:italic}' +
    '.f1r-map-h b{color:#FF4D45;font-weight:800}' +
    '.f1r-map svg{display:block;width:100%;height:auto;margin-top:4px;overflow:visible}' +
    '.f1r-map .cp{cursor:pointer;outline:none}' +
    '.f1r-map .cp text{font:700 6.8px "Plus Jakarta Sans",system-ui,sans-serif;fill:#A5A5A5;letter-spacing:.02em}' +
    '.f1r-map .cp.done text{fill:#FFFFFF}.f1r-map .cp.now text{fill:#FF4D45}' +
    '.f1r-map .cp:hover text,.f1r-map .cp:focus-visible text{fill:#FFFFFF;text-decoration:underline}' +
    '.f1r-map .cp:focus-visible circle{stroke:#FFFFFF;stroke-width:1.4}' +
    '.f1r-now{margin-top:2px;font:italic 800 11px/1.2 "Plus Jakarta Sans",system-ui,sans-serif;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.f1r-now span{color:#FF4D45;margin-right:6px}' +
    '@media (max-width:760px){' +
    '.f1r-map{top:76px;right:12px;width:96px;padding:7px 7px 6px;border-radius:10px}' +
    '.f1r-map .cp text{display:none}.f1r-map-h{font-size:8px;letter-spacing:.1em}.f1r-now{font-size:9px}' +
    '.f1r-hud{left:50%;bottom:16px;transform:translateX(-50%);width:calc(100vw - 32px);max-width:360px}' +
    '.f1r-name{font-size:19px}.f1r-info{font-size:12px}}';

  var on = false, started = false, raf = 0;
  var el = {}, cps = [], lut = [], y0 = 0, y1 = 1, total = 1, laneX = 20, carW = 40, carH = 98;
  var mapLen = 1, mapPts = [], cpIdx = -1, hudTimer = 0, hudAnim = null, t0 = 0;
  var lastY = 0, vel = 0, ang = Math.PI, dir = 1, layoutQueued = false, ro = null;

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
      return { el: s, i: i, name: s.dataset.cp, short: s.dataset.cpShort || s.dataset.cp, info: s.dataset.cpInfo || '', y: 0 };
    });
    if (cps.length < 2) return false;

    el.track = svgEl('svg', { class: 'f1r-track', 'aria-hidden': 'true' });
    document.body.appendChild(el.track);

    el.car = document.createElement('div');
    el.car.className = 'f1r-car';
    el.car.setAttribute('aria-hidden', 'true');
    el.car.innerHTML = '<span class="f1r-trail l"></span><span class="f1r-trail r"></span><img alt="" src="' + CAR_SRC + '" decoding="async">';
    document.body.appendChild(el.car);
    el.trails = el.car.querySelectorAll('.f1r-trail');

    el.hud = document.createElement('div');
    el.hud.className = 'f1r-hud';
    el.hud.setAttribute('aria-live', 'polite');
    el.hud.innerHTML = '<div class="f1r-hud-in"><div class="f1r-hud-top"><span class="f1r-tag"></span><span class="f1r-lap">LAP <b></b></span></div>' +
      '<div class="f1r-name"></div><div class="f1r-info"></div></div>';
    document.body.appendChild(el.hud);

    buildMap();
    return true;
  }

  function buildMap() {
    el.map = document.createElement('nav');
    el.map.className = 'f1r-map';
    el.map.setAttribute('aria-label', 'Track map');
    el.map.innerHTML = '<div class="f1r-map-h"><span>CIRCUIT AT</span><b class="f1r-pct">0%</b></div>';
    var svg = el.mapSvg = svgEl('svg', { viewBox: '-34 -4 188 128', role: 'presentation' }, el.map);
    var g = svgEl('g', { transform: 'translate(0 2)' }, svg);
    svgEl('path', { d: CIRCUIT, fill: 'none', stroke: '#303030', 'stroke-width': 7, 'stroke-linejoin': 'round' }, g);
    var base = svgEl('path', { d: CIRCUIT, fill: 'none', stroke: '#0B0B0B', 'stroke-width': 5, 'stroke-linejoin': 'round' }, g);
    el.mapFill = svgEl('path', { d: CIRCUIT, fill: 'none', stroke: '#E10600', 'stroke-width': 3.2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, g);
    // start / finish line
    svgEl('rect', { x: 17.5, y: 96, width: 9, height: 2.2, fill: '#FFFFFF' }, g);
    svgEl('rect', { x: 17.5, y: 96, width: 2.25, height: 1.1, fill: '#0B0B0B' }, g);
    svgEl('rect', { x: 22, y: 96, width: 2.25, height: 1.1, fill: '#0B0B0B' }, g);
    svgEl('rect', { x: 19.75, y: 97.1, width: 2.25, height: 1.1, fill: '#0B0B0B' }, g);
    svgEl('rect', { x: 24.25, y: 97.1, width: 2.25, height: 1.1, fill: '#0B0B0B' }, g);

    mapLen = base.getTotalLength();
    el.mapFill.setAttribute('stroke-dasharray', mapLen + ' ' + mapLen);
    el.mapFill.setAttribute('stroke-dashoffset', mapLen);
    mapPts = [];
    for (var i = 0; i <= 300; i++) { var p = base.getPointAtLength(mapLen * i / 300); mapPts.push([p.x, p.y]); }

    el.cpG = svgEl('g', {}, g);
    el.dot = svgEl('circle', { r: 3.4, fill: '#FFFFFF', stroke: '#E10600', 'stroke-width': 1.6 }, g);
    el.now = document.createElement('div');
    el.now.className = 'f1r-now';
    el.map.appendChild(el.now);
    document.body.appendChild(el.map);
  }

  function placeMapCheckpoints() {
    var cx = 60, cy = 64;
    el.cpG.textContent = '';
    cps.forEach(function (c) {
      var f = c.i / cps.length; // sectors are evenly spaced around the circuit
      var p = mapPts[Math.round(f * 300)];
      var dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy) || 1;
      var gq = svgEl('g', { class: 'cp', tabindex: '0', role: 'button', 'aria-label': 'Go to ' + c.name.toLowerCase() }, el.cpG);
      svgEl('circle', { cx: p[0], cy: p[1], r: 2.6, fill: '#191919', stroke: '#A5A5A5', 'stroke-width': 1 }, gq);
      var tx = p[0] + dx / d * 7, ty = p[1] + dy / d * 7 + 2;
      var t = svgEl('text', { x: tx, y: ty, 'text-anchor': dx > 6 ? 'start' : dx < -6 ? 'end' : 'middle' }, gq);
      t.textContent = 'T' + (c.i + 1) + ' ' + c.short;
      var go = function () { c.el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      gq.addEventListener('click', go);
      gq.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      c.g = gq;
    });
  }

  function teardown() {
    ['track', 'car', 'hud', 'map'].forEach(function (k) { if (el[k]) el[k].remove(); });
    el = {};
    clearTimeout(hudTimer);
    cancelAnimationFrame(raf); raf = 0;
    removeEventListener('scroll', onScroll);
    removeEventListener('resize', queueLayout);
    if (ro) { ro.disconnect(); ro = null; }
    cpIdx = -1;
  }

  // ---------- layout: lane, path, lookup table ----------
  function layout() {
    layoutQueued = false;
    if (!on) return;
    var main = document.querySelector('main') || document.body;
    var mr = main.getBoundingClientRect();
    var gutter = Math.max(14, mr.left + (parseFloat(getComputedStyle(main).paddingLeft) || 0));
    carW = Math.round(Math.max(16, Math.min(44, gutter * 0.45)));
    carH = Math.round(carW * CAR_RATIO);
    laneX = Math.max(carW / 2 + 2, gutter / 2);
    var amp = Math.max(0, Math.min(28, gutter / 2 - carW / 2 - 4));
    el.car.style.width = carW + 'px';
    el.car.style.height = carH + 'px';

    var docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    cps.forEach(function (c) { c.y = docTop(c.el) + 24; });
    y0 = cps[0].y + 16;
    y1 = Math.min(docTop(cps[cps.length - 1].el) + cps[cps.length - 1].el.offsetHeight, docH - innerHeight * (1 - CAR_AT));
    if (y1 <= y0 + 50) y1 = y0 + 50;
    cps.forEach(function (c, i) { c.y = i === 0 ? y0 : Math.min(c.y, y1 - 8); });

    // lookup table every 4px of document y: x, slope, cumulative length
    lut = [];
    var segs = cps.map(function (c) { return c.y; }).concat([y1]);
    var len = 0, px = laneX, py = y0;
    for (var y = y0; y <= y1 + 0.1; y += 4) {
      var s = 0;
      while (s < segs.length - 2 && y >= segs[s + 1]) s++;
      var a = segs[s], b = segs[s + 1] || y1, t = b > a ? (y - a) / (b - a) : 0;
      var side = s % 2 ? -1 : 1, sn = Math.sin(Math.PI * t);
      var x = laneX + amp * side * sn * sn;
      var dxdy = b > a ? amp * side * 2 * sn * Math.cos(Math.PI * t) * Math.PI / (b - a) : 0;
      len += Math.hypot(x - px, y - py); px = x; py = y;
      lut.push([x, dxdy, len]);
    }
    total = len || 1;

    // track SVG
    var W = Math.ceil(laneX * 2 + 40), tw = Math.max(10, carW * 1.7);
    var t = el.track;
    t.setAttribute('width', W); t.setAttribute('height', Math.ceil(y1 + 80));
    t.setAttribute('viewBox', '0 0 ' + W + ' ' + Math.ceil(y1 + 80));
    t.textContent = '';
    var d = '';
    for (var i = 0; i < lut.length; i += 4) d += (i ? 'L' : 'M') + lut[i][0].toFixed(1) + ' ' + (y0 + i * 4);
    d += 'L' + lut[lut.length - 1][0].toFixed(1) + ' ' + y1;
    var defs = svgEl('defs', {}, t);
    var pat = svgEl('pattern', { id: 'f1r-chk', width: 8, height: 8, patternUnits: 'userSpaceOnUse' }, defs);
    svgEl('rect', { width: 8, height: 8, fill: '#FFFFFF' }, pat);
    svgEl('rect', { width: 4, height: 4, fill: '#0B0B0B' }, pat);
    svgEl('rect', { x: 4, y: 4, width: 4, height: 4, fill: '#0B0B0B' }, pat);
    svgEl('path', { d: d, fill: 'none', stroke: '#303030', 'stroke-width': tw + 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, t);
    svgEl('path', { d: d, fill: 'none', stroke: '#141414', 'stroke-width': tw, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, t);
    if (tw > 20) {
      // kerbs: red/white dashes along both edges
      var off = tw / 2 - 1.5;
      [-off, off].forEach(function (o) {
        var dk = '';
        for (var j = 0; j < lut.length; j += 4) dk += (j ? 'L' : 'M') + (lut[j][0] + o).toFixed(1) + ' ' + (y0 + j * 4);
        svgEl('path', { d: dk, fill: 'none', stroke: '#E10600', 'stroke-width': 3, 'stroke-dasharray': '10 10', opacity: .55 }, t);
      });
      svgEl('path', { d: d, fill: 'none', stroke: '#3A3A3A', 'stroke-width': 1.5, 'stroke-dasharray': '14 18' }, t);
    }
    el.line = svgEl('path', { d: d, fill: 'none', stroke: '#E10600', 'stroke-width': Math.max(2, tw * 0.12), 'stroke-linecap': 'round',
      'stroke-dasharray': total + ' ' + total, 'stroke-dashoffset': total, style: 'filter:drop-shadow(0 0 4px rgba(225,6,0,.8))' }, t);
    cps.forEach(function (c, i) {
      var r = rowAt(c.y);
      svgEl('rect', { x: (r[0] - tw / 2).toFixed(1), y: c.y - 3, width: tw.toFixed(1), height: 6, fill: 'url(#f1r-chk)' }, t);
      if (tw > 20) {
        var lb = svgEl('text', { x: (r[0] + tw / 2 + 4).toFixed(1), y: c.y + 4, fill: '#FF4D45',
          style: 'font:italic 800 11px "Plus Jakarta Sans",system-ui,sans-serif' }, t);
        lb.textContent = 'T' + (i + 1);
      }
    });

    var hd = document.querySelector('header');
    if (hd) el.map.style.top = Math.round(Math.max(72, hd.getBoundingClientRect().bottom + 10)) + 'px';
    el.mapSvg.setAttribute('viewBox', matchMedia('(max-width: 760px)').matches ? '14 4 90 116' : '-34 -4 188 128');
    placeMapCheckpoints();
    lastY = scrollY;
    update(true);
  }
  function queueLayout() { if (!layoutQueued) { layoutQueued = true; requestAnimationFrame(layout); } }
  function rowAt(y) { return lut[Math.max(0, Math.min(lut.length - 1, Math.round((y - y0) / 4)))] || [laneX, 0, 0]; }

  // ---------- per-frame ----------
  function update(snap) {
    if (!on || !lut.length) return false;
    var sy = scrollY, dy = sy - lastY;
    lastY = sy;
    vel = vel * 0.8 + dy * 0.2;
    if (Math.abs(dy) > 0.5) dir = dy > 0 ? 1 : -1;
    var cy = Math.max(y0, Math.min(y1, sy + innerHeight * CAR_AT));
    var r = rowAt(cy);
    // nose-up image: moving down needs atan2(dxdy, -1), moving up atan2(-dxdy, 1)
    var target = dir > 0 ? Math.atan2(r[1], -1) : Math.atan2(-r[1], 1);
    var diff = Math.atan2(Math.sin(target - ang), Math.cos(target - ang));
    ang = snap ? target : ang + diff * 0.18;
    var sp = Math.min(1, Math.abs(vel) / 24);
    el.car.style.transform = 'translate3d(' + (r[0] - carW / 2).toFixed(1) + 'px,' + (cy - sy - carH / 2).toFixed(1) + 'px,0) rotate(' +
      ang.toFixed(4) + 'rad) scaleY(' + (1 + sp * 0.06).toFixed(3) + ')';
    el.trails[0].style.opacity = el.trails[1].style.opacity = sp.toFixed(2);
    el.trails[0].style.transform = el.trails[1].style.transform = 'scaleY(' + (0.3 + sp * 0.7).toFixed(2) + ')';

    var f = r[2] / total;
    el.line.setAttribute('stroke-dashoffset', (total - r[2]).toFixed(1));
    // map progress: equal-length sectors, linear within each one
    var sI = 0;
    while (sI < cps.length - 1 && cy >= cps[sI + 1].y) sI++;
    var sa = cps[sI].y, sb = sI < cps.length - 1 ? cps[sI + 1].y : y1;
    var mf = Math.max(0, Math.min(1, (sI + (sb > sa ? (cy - sa) / (sb - sa) : 1)) / cps.length));
    el.mapFill.setAttribute('stroke-dashoffset', (mapLen * (1 - mf)).toFixed(2));
    var mp = mapPts[Math.round(mf * 300)];
    el.dot.setAttribute('cx', mp[0]); el.dot.setAttribute('cy', mp[1]);
    el.map.querySelector('.f1r-pct').textContent = Math.round(mf * 100) + '%';

    var idx = 0;
    for (var i = 0; i < cps.length; i++) if (cy >= cps[i].y - 1) idx = i;
    if (idx !== cpIdx) {
      cpIdx = idx;
      cps.forEach(function (c, k) { c.g.classList.toggle('done', k < idx); c.g.classList.toggle('now', k === idx); });
      el.now.innerHTML = '<span>T' + (idx + 1) + '</span>' + cps[idx].name;
      if (started) showSector(idx);
    }
    return Math.abs(diff) > 0.002 || Math.abs(vel) > 0.05;
  }

  function loop() {
    raf = 0;
    if (update(false)) raf = requestAnimationFrame(loop);
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(loop); }

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
