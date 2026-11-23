/* F1 hero weather (home page, dark F1 theme only).
   Brings the night-race photo behind the hero to life: the car shakes with engine vibration,
   its rain light blinks and throws red onto the wet track, the rear tyres kick up spray, ground
   mist rushes past, storm clouds drift and flash with lightning, the floodlights flicker and
   rain falls and splashes on the track. One canvas, paused when the hero is off screen.
   Off in light theme and with reduced motion (the still photo stays). */
(function () {
  'use strict';
  if (!/(^|\/)(index\.html)?$/.test(location.pathname)) return;

  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)');
  var SRC = 'assets/v2/f1-track.webp';
  var IW = 1768, IH = 890;        // photo size; points below are in photo pixels
  var LIGHT = [1588, 591];        // car rain light
  var TYRES = [[1398, 628], [1668, 632]];
  var CAR_BOX = [1290, 495, 1760, 665];
  var FLOODS = [[1728, 275], [1745, 273], [1557, 322], [1580, 318], [1602, 314], [1490, 402], [1507, 400], [1528, 398],
    [1414, 425], [1432, 423], [1384, 465], [1318, 470], [1336, 468], [1290, 490]];
  var HORIZON = 600;

  var CSS =
    'html.f1-fx[data-theme="dark"] .hero2::before{background:none!important}' +
    '.f1h{position:absolute;z-index:-1;top:-160px;bottom:0;left:50%;width:100vw;transform:translateX(-50%);overflow:hidden;pointer-events:none}' +
    '.f1h>*{position:absolute;left:0;top:0}' +
    '.f1h-img,.f1h-car{background-image:url("' + SRC + '");background-repeat:no-repeat}' +
    '.f1h-img{width:100%;height:100%}' +
    '.f1h-car{-webkit-mask-image:radial-gradient(50% 50% at 50% 56%,#000 68%,transparent 100%);mask-image:radial-gradient(50% 50% at 50% 56%,#000 68%,transparent 100%);' +
    'animation:f1h-rev .11s steps(1) infinite;will-change:transform}' +
    '@keyframes f1h-rev{0%{transform:translate(0,0)}25%{transform:translate(.4px,-.6px)}50%{transform:translate(-.3px,.3px)}75%{transform:translate(.2px,-.3px)}}' +
    '.f1h canvas{width:100%;height:100%}' +
    '.f1h-shade{width:100%;height:100%;background:' +
    'linear-gradient(90deg,rgba(8,8,8,.94) 0%,rgba(8,8,8,.72) 34%,rgba(8,8,8,.15) 62%,rgba(8,8,8,0) 80%),' +
    'linear-gradient(180deg,rgba(8,8,8,.35) 0%,rgba(8,8,8,0) 22%,rgba(8,8,8,0) 70%,#080808 100%)}';

  var on = false, box, imgEl, carEl, cv, ctx, hero, raf = 0, last = 0, visible = true, ro = null, io = null;
  var W = 0, H = 0, dpr = 1, s = 1, ox = 0, oy = 0;
  var cloudTex, mistTex, soft, softRed, drops = [], splashes = [], spray = [], streaks = [];
  var flash = 0, nextFlash = 0, flashSeq = [], tm = 0;

  var P = function (x, y) { return [ox + x * s, oy + y * s]; };
  var rnd = function (a, b) { return a + Math.random() * (b - a); };

  // ---------- textures ----------
  function noiseTex(w, h, cell, oct, lo, hi, band) {
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var g = c.getContext('2d'), im = g.createImageData(w, h), d = im.data;
    var layers = [];
    for (var o = 0; o < oct; o++) {
      var cw = Math.max(2, Math.round(w / (cell / Math.pow(2, o)))), chh = Math.max(2, Math.round(h / (cell / Math.pow(2, o)))) + 1, a = [];
      for (var i = 0; i < cw * chh; i++) a.push(Math.random());
      layers.push({ cw: cw, ch: chh, a: a, amp: Math.pow(0.5, o) });
    }
    var sm = function (t) { return t * t * (3 - 2 * t); };
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var n = 0, tot = 0;
      for (var l = 0; l < layers.length; l++) {
        var L = layers[l], fx = x / w * L.cw, fy = y / h * (L.ch - 1), x0 = Math.floor(fx), y0 = Math.floor(fy);
        var tx = sm(fx - x0), ty = sm(fy - y0), x1 = (x0 + 1) % L.cw; // wraps horizontally
        var v00 = L.a[y0 * L.cw + x0], v10 = L.a[y0 * L.cw + x1], v01 = L.a[(y0 + 1) * L.cw + x0], v11 = L.a[(y0 + 1) * L.cw + x1];
        n += ((v00 * (1 - tx) + v10 * tx) * (1 - ty) + (v01 * (1 - tx) + v11 * tx) * ty) * L.amp; tot += L.amp;
      }
      n /= tot;
      var a2 = Math.max(0, Math.min(1, (n - lo) / (hi - lo)));
      a2 *= Math.pow(Math.sin(Math.PI * y / (h - 1)), band); // soft top and bottom edges
      var k = (y * w + x) * 4;
      d[k] = d[k + 1] = d[k + 2] = 255; d[k + 3] = a2 * 255;
    }
    g.putImageData(im, 0, 0);
    return c;
  }
  function sprite(r, g, b) {
    var c = document.createElement('canvas'); c.width = c.height = 64;
    var x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',1)');
    gr.addColorStop(0.4, 'rgba(' + r + ',' + g + ',' + b + ',.45)');
    gr.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    return c;
  }

  // ---------- build / layout ----------
  function build() {
    hero = document.querySelector('.hero2');
    if (!hero) return false;
    if (!document.getElementById('f1h-css')) {
      var st = document.createElement('style'); st.id = 'f1h-css'; st.textContent = CSS; document.head.appendChild(st);
    }
    box = document.createElement('div'); box.className = 'f1h'; box.setAttribute('aria-hidden', 'true');
    box.innerHTML = '<div class="f1h-img"></div><div class="f1h-car"></div><canvas></canvas><div class="f1h-shade"></div>';
    hero.insertBefore(box, hero.firstChild);
    imgEl = box.children[0]; carEl = box.children[1]; cv = box.children[2]; ctx = cv.getContext('2d');
    if (!cloudTex) {
      cloudTex = noiseTex(320, 120, 120, 5, 0.42, 0.85, 0.8);
      mistTex = noiseTex(320, 48, 90, 4, 0.3, 0.8, 1.2);
      soft = sprite(210, 215, 225); softRed = sprite(255, 40, 20);
    }
    root.classList.add('f1-fx');
    return true;
  }

  function layout() {
    if (!on) return;
    W = box.clientWidth; H = box.clientHeight;
    if (!W || !H) return;
    dpr = Math.min(devicePixelRatio || 1, W < 760 ? 1.25 : 1.5);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    s = Math.max(W / IW, H / IH);
    var dw = IW * s, dh = IH * s;
    ox = (W - dw) * 0.7; oy = H - dh;
    var bs = dw.toFixed(1) + 'px ' + dh.toFixed(1) + 'px';
    imgEl.style.backgroundSize = bs;
    imgEl.style.backgroundPosition = ox.toFixed(1) + 'px ' + oy.toFixed(1) + 'px';
    var c0 = P(CAR_BOX[0], CAR_BOX[1]), cw = (CAR_BOX[2] - CAR_BOX[0]) * s, ch = (CAR_BOX[3] - CAR_BOX[1]) * s;
    carEl.style.cssText = 'left:' + c0[0].toFixed(1) + 'px;top:' + c0[1].toFixed(1) + 'px;width:' + cw.toFixed(1) + 'px;height:' + ch.toFixed(1) +
      'px;background-size:' + bs + ';background-position:' + (-CAR_BOX[0] * s).toFixed(1) + 'px ' + (-CAR_BOX[1] * s).toFixed(1) + 'px';

    var n = Math.round(Math.min(420, W * H / 3200));
    drops = [];
    for (var i = 0; i < n; i++) drops.push(newDrop(true));
    streaks = [];
    for (var j = 0; j < 5; j++) streaks.push(newStreak(true));
  }

  function newDrop(any) {
    var z = Math.pow(Math.random(), 1.6) * 0.8 + 0.2;
    return { x: rnd(-0.1, 1.1) * W, y: any ? rnd(0, H) : rnd(-60, -10), z: z, v: (700 + 900 * z) * Math.max(0.7, H / 900), l: 8 + 26 * z };
  }
  function newStreak(any) {
    var h = P(0, HORIZON - rnd(4, 30))[1], car = P(1330, 0)[0];
    return { x: any ? rnd(0, car) : car + rnd(0, 60), y: h, len: rnd(60, 220) * s * 2, v: rnd(500, 1100) * s * 2, a: rnd(0.15, 0.4) };
  }

  // ---------- frame ----------
  function frame(now) {
    raf = 0;
    if (!on || !visible) return;
    var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now; tm += dt;
    var g = ctx;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);

    // lightning: a few quick in-cloud flickers every 6-14 s
    if (tm > nextFlash) {
      nextFlash = tm + rnd(6, 14);
      var t = 0; flashSeq = [];
      for (var k = 0, nk = 2 + (Math.random() * 2 | 0); k < nk; k++) { flashSeq.push([tm + t, rnd(0.5, 1)]); t += rnd(0.07, 0.22); }
    }
    while (flashSeq.length && flashSeq[0][0] <= tm) flash = Math.max(flash, flashSeq.shift()[1]);
    flash *= Math.pow(0.0009, dt);

    var sky0 = P(0, -40)[1], sky1 = P(0, 470)[1];
    // storm clouds drifting left
    g.globalCompositeOperation = 'source-over';
    var cwid = W * 1.6, cx = -((tm * 9 * s * 2) % cwid);
    g.globalAlpha = 0.16;
    g.drawImage(cloudTex, cx, sky0, cwid, sky1 - sky0); g.drawImage(cloudTex, cx + cwid, sky0, cwid, sky1 - sky0);
    var cx2 = -((tm * 4 * s * 2) % cwid);
    g.globalAlpha = 0.1;
    g.drawImage(cloudTex, cx2 + cwid * 0.3, sky0 + 20, cwid, (sky1 - sky0) * 0.8); g.drawImage(cloudTex, cx2 - cwid * 0.7, sky0 + 20, cwid, (sky1 - sky0) * 0.8);
    if (flash > 0.01) {
      g.globalCompositeOperation = 'lighter';
      g.globalAlpha = flash * 0.75;
      g.drawImage(cloudTex, cx, sky0, cwid, sky1 - sky0); g.drawImage(cloudTex, cx + cwid, sky0, cwid, sky1 - sky0);
      var fc = P(1540, 60), fr = 700 * s;
      var fg = g.createRadialGradient(fc[0], fc[1], 0, fc[0], fc[1], fr);
      fg.addColorStop(0, 'rgba(190,205,255,' + (0.45 * flash) + ')'); fg.addColorStop(1, 'rgba(190,205,255,0)');
      g.globalAlpha = 1; g.fillStyle = fg; g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(200,210,255,' + (0.05 * flash) + ')'; g.fillRect(0, 0, W, H);
    }

    // floodlights: glow, gentle flicker, faint beams through the rain
    g.globalCompositeOperation = 'lighter';
    for (var f = 0; f < FLOODS.length; f++) {
      var q = P(FLOODS[f][0], FLOODS[f][1]);
      if (q[0] < -50 || q[0] > W + 50) continue;
      var fl = 0.75 + 0.15 * Math.sin(tm * 13 + f * 2.1) * Math.sin(tm * 7.3 + f) + flash * 0.3;
      var r = 26 * s * 2;
      g.globalAlpha = 0.55 * fl; g.drawImage(soft, q[0] - r, q[1] - r, r * 2, r * 2);
      g.globalAlpha = 0.9 * fl; g.drawImage(soft, q[0] - r * 0.3, q[1] - r * 0.3, r * 0.6, r * 0.6);
      if (f % 2 === 0) {
        var bh = P(0, HORIZON)[1] - q[1], bw = 70 * s * 2;
        var bg = g.createLinearGradient(0, q[1], 0, q[1] + bh);
        bg.addColorStop(0, 'rgba(220,225,235,' + (0.06 * fl) + ')'); bg.addColorStop(1, 'rgba(220,225,235,0)');
        g.globalAlpha = 1; g.fillStyle = bg;
        g.beginPath(); g.moveTo(q[0] - 3, q[1]); g.lineTo(q[0] + 3, q[1]); g.lineTo(q[0] + bw * 0.6, q[1] + bh); g.lineTo(q[0] - bw, q[1] + bh); g.closePath(); g.fill();
      }
    }

    // passing light streaks along the horizon, rushing left
    for (var si = 0; si < streaks.length; si++) {
      var st = streaks[si];
      st.x -= st.v * dt;
      if (st.x + st.len < 0) { streaks[si] = newStreak(false); continue; }
      var sg = g.createLinearGradient(st.x, 0, st.x + st.len, 0);
      sg.addColorStop(0, 'rgba(225,6,0,0)'); sg.addColorStop(1, 'rgba(255,60,40,' + st.a + ')');
      g.globalAlpha = 1; g.fillStyle = sg; g.fillRect(st.x, st.y, st.len, Math.max(1, 1.6 * s * 2));
    }

    // ground mist rushing past at track level
    g.globalCompositeOperation = 'source-over';
    var m0 = P(0, 520)[1], m1 = P(0, 690)[1], mw = W * 1.3;
    var mx = -((tm * 140 * s * 2) % mw), mx2 = -((tm * 60 * s * 2) % mw);
    g.globalAlpha = 0.12; g.drawImage(mistTex, mx, m0, mw, m1 - m0); g.drawImage(mistTex, mx + mw, m0, mw, m1 - m0);
    g.globalAlpha = 0.08; g.drawImage(mistTex, mx2 + mw * 0.5, m0 - 20, mw, m1 - m0); g.drawImage(mistTex, mx2 - mw * 0.5, m0 - 20, mw, m1 - m0);

    // rain light: F1 cars blink it in the wet, about 4 times a second
    var blink = ((tm * 4) % 1) < 0.5 ? 1 : 0.18;
    var L = P(LIGHT[0], LIGHT[1]);
    g.globalCompositeOperation = 'lighter';
    var lr = 170 * s * 2;
    g.globalAlpha = 0.35 * blink; g.drawImage(softRed, L[0] - lr, L[1] - lr, lr * 2, lr * 2);
    g.globalAlpha = 0.9 * blink; g.drawImage(softRed, L[0] - 14 * s * 2, L[1] - 10 * s * 2, 28 * s * 2, 20 * s * 2);
    // its reflection streaking down the wet track
    g.save(); g.translate(L[0], P(0, 668)[1]); g.scale(0.6, 2.4);
    g.globalAlpha = 0.28 * blink; g.drawImage(softRed, -40 * s * 2, -40 * s * 2, 80 * s * 2, 80 * s * 2);
    g.restore();

    // tyre spray: rolling clouds of water thrown up behind the rear wheels
    var rate = W < 760 ? 30 : 60;
    for (var e = 0; e < TYRES.length; e++) {
      var acc = rate * dt + Math.random();
      var side = e === 0 ? -1 : 1, ep = P(TYRES[e][0], TYRES[e][1]);
      while (acc-- >= 1) spray.push({ x: ep[0] + rnd(-12, 12) * s * 2, y: ep[1] + rnd(-6, 4) * s * 2, vx: side * rnd(10, 90) * s * 2 + rnd(-20, 20) * s * 2,
        vy: rnd(-70, -10) * s * 2, r0: rnd(4, 10) * s * 2, r1: rnd(40, 95) * s * 2, life: rnd(0.8, 1.6), t: 0 });
    }
    for (var pi = spray.length - 1; pi >= 0; pi--) {
      var p = spray[pi];
      p.t += dt;
      if (p.t >= p.life) { spray.splice(pi, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 26 * s * 2 * dt; p.vx *= 1 - 0.6 * dt;
      var u = p.t / p.life, rr = p.r0 + (p.r1 - p.r0) * Math.sqrt(u), al = Math.sin(Math.PI * Math.min(1, u * 1.4)) * (1 - u);
      var dx = p.x - L[0], dy = p.y - L[1], near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / (260 * s * 2));
      g.globalAlpha = al * 0.09; g.drawImage(soft, p.x - rr, p.y - rr, rr * 2, rr * 2);
      if (near > 0) { g.globalAlpha = al * 0.22 * near * blink; g.drawImage(softRed, p.x - rr, p.y - rr, rr * 2, rr * 2); }
    }

    // rain
    g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1; g.lineCap = 'round';
    var wind = 0.16, road = P(0, HORIZON + 8)[1];
    for (var b = 0; b < 3; b++) {
      g.beginPath();
      var zl = b / 3, zh = (b + 1) / 3;
      for (var di = 0; di < drops.length; di++) {
        var dr = drops[di], zz = (dr.z - 0.2) / 0.8;
        if (zz < zl || zz >= zh) continue;
        dr.y += dr.v * dt; dr.x -= dr.v * wind * dt;
        if (dr.y > H || (dr.z > 0.55 && dr.y > road && Math.random() < 0.04)) {
          if (dr.y > road && dr.y < H) splashes.push({ x: dr.x, y: dr.y, t: 0, r: (1.5 + 3 * dr.z) * Math.max(1, s * 2) });
          drops[di] = newDrop(false); continue;
        }
        g.moveTo(dr.x, dr.y); g.lineTo(dr.x + dr.l * wind, dr.y - dr.l);
      }
      g.strokeStyle = 'rgba(200,208,222,' + (0.1 + 0.16 * b + flash * 0.25) + ')';
      g.lineWidth = 0.6 + 0.5 * b;
      g.stroke();
    }
    // splashes on the track
    g.lineWidth = 0.8; g.strokeStyle = 'rgba(210,215,225,.5)';
    for (var sp = splashes.length - 1; sp >= 0; sp--) {
      var c = splashes[sp];
      c.t += dt;
      if (c.t > 0.35) { splashes.splice(sp, 1); continue; }
      var k2 = c.t / 0.35;
      g.globalAlpha = 0.6 * (1 - k2);
      g.beginPath(); g.ellipse(c.x, c.y, c.r * (0.4 + k2 * 1.6), c.r * 0.3 * (0.4 + k2 * 1.6), 0, 0, Math.PI * 2); g.stroke();
    }
    g.globalAlpha = 1;
    if (splashes.length > 300) splashes.splice(0, splashes.length - 300);
    if (spray.length > 400) spray.splice(0, spray.length - 400);

    raf = requestAnimationFrame(frame);
  }
  function kick() { if (on && visible && !raf) { last = 0; raf = requestAnimationFrame(frame); } }

  // ---------- lifecycle ----------
  function want() { return root.dataset.theme === 'dark' && !reduce.matches; }
  function onVis() { visible = !document.hidden && box && box.dataset.inview !== '0'; visible ? kick() : null; }
  function start() {
    if (on || !want() || !document.body) return;
    if (!build()) return;
    on = true;
    layout();
    addEventListener('resize', layout);
    if ('ResizeObserver' in window) { ro = new ResizeObserver(layout); ro.observe(hero); }
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (es) { box.dataset.inview = es[0].isIntersecting ? '1' : '0'; onVis(); });
      io.observe(box);
    }
    document.addEventListener('visibilitychange', onVis);
    nextFlash = tm + 3;
    kick();
  }
  function stop() {
    if (!on) return;
    on = false;
    cancelAnimationFrame(raf); raf = 0;
    removeEventListener('resize', layout);
    document.removeEventListener('visibilitychange', onVis);
    if (ro) ro.disconnect(); if (io) io.disconnect(); ro = io = null;
    if (box) box.remove(); box = null;
    spray = []; splashes = [];
    root.classList.remove('f1-fx');
  }
  function sync() { want() ? start() : stop(); }

  document.addEventListener('themechange', function () { setTimeout(sync, 0); });
  if (reduce.addEventListener) reduce.addEventListener('change', sync);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
