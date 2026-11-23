/* F1 intro: in the dark F1 theme, a race car streaks across the screen from left to right,
   two red light trails pouring off its tyres, with a synthesised V6 engine pass-by.

   - Plays once per visit when a page loads in the dark theme, and every time the visitor
     switches to the dark theme (the toggle click also lets the browser play sound).
   - Browsers only allow sound after the visitor has interacted with the site, so on a cold
     load the pass is silent; that's a browser rule, not a bug.
   - Skipped entirely with prefers-reduced-motion. Never blocks clicks (pointer-events: none). */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DURATION = 1900; // ms for the whole pass
  var running = false;

  // ---- the car (generic open-wheel racer, side view, facing right) ----
  var CAR =
    '<svg class="f1x-car" viewBox="0 0 520 130" aria-hidden="true">' +
    '<defs>' +
    '<linearGradient id="f1x-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF2A1A"/><stop offset=".55" stop-color="#E10600"/><stop offset="1" stop-color="#7A0300"/></linearGradient>' +
    '<linearGradient id="f1x-carbon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2A2A"/><stop offset="1" stop-color="#0A0A0A"/></linearGradient>' +
    '<radialGradient id="f1x-tyre" cx=".5" cy=".5" r=".5"><stop offset=".55" stop-color="#1A1A1A"/><stop offset=".62" stop-color="#E10600"/><stop offset=".66" stop-color="#151515"/><stop offset="1" stop-color="#050505"/></radialGradient>' +
    '</defs>' +
    // floor + diffuser shadow
    '<path d="M40 100 L470 100 L480 106 L30 106 Z" fill="#050505" opacity=".85"/>' +
    // rear wing
    '<path d="M18 30 L70 30 L72 40 L22 40 Z" fill="url(#f1x-carbon)"/><rect x="18" y="26" width="54" height="5" rx="2" fill="#E10600"/>' +
    '<path d="M40 40 L48 40 L56 86 L46 86 Z" fill="#111"/>' +
    // engine cover + sidepod
    '<path d="M48 86 C70 60 110 52 170 50 L250 48 C280 47 300 56 318 70 L360 78 C400 82 440 84 478 86 L496 92 L490 100 L44 100 Z" fill="url(#f1x-body)"/>' +
    '<path d="M150 50 C175 30 205 26 228 34 L246 48 Z" fill="url(#f1x-body)"/>' +
    // airbox + halo + helmet
    '<path d="M196 30 C204 22 220 20 230 26 L236 36 L200 38 Z" fill="#111"/>' +
    '<circle cx="262" cy="52" r="11" fill="#FFFFFF"/><path d="M252 50 h20 v5 h-20 z" fill="#111"/>' +
    '<path d="M232 44 C250 32 280 34 300 50" fill="none" stroke="#1A1A1A" stroke-width="5" stroke-linecap="round"/>' +
    // livery stripes (white + black)
    '<path d="M120 76 L330 70 L336 76 L124 82 Z" fill="#FFFFFF" opacity=".92"/>' +
    '<path d="M330 80 L470 88 L470 92 L328 85 Z" fill="#111"/>' +
    // number
    '<text x="190" y="72" font-family="Plus Jakarta Sans, system-ui, sans-serif" font-style="italic" font-weight="800" font-size="20" fill="#FFFFFF">AT</text>' +
    // front wing + nose cone
    '<path d="M470 90 L512 92 L514 100 L462 100 Z" fill="url(#f1x-carbon)"/><rect x="480" y="98" width="36" height="5" rx="2" fill="#E10600"/>' +
    // tyres (spinning)
    '<g class="f1x-wheel" style="transform-origin:96px 92px"><circle cx="96" cy="92" r="34" fill="url(#f1x-tyre)"/><path d="M96 64 v56 M68 92 h56 M76 72 l40 40 M116 72 l-40 40" stroke="#2E2E2E" stroke-width="3"/><circle cx="96" cy="92" r="7" fill="#E10600"/></g>' +
    '<g class="f1x-wheel" style="transform-origin:420px 96px"><circle cx="420" cy="96" r="29" fill="url(#f1x-tyre)"/><path d="M420 72 v48 M396 96 h48 M403 79 l34 34 M437 79 l-34 34" stroke="#2E2E2E" stroke-width="3"/><circle cx="420" cy="96" r="6" fill="#E10600"/></g>' +
    '</svg>';

  var CSS =
    '.f1x{position:fixed;inset:0;z-index:2147483000;pointer-events:none;overflow:hidden}' +
    '.f1x-rig{position:absolute;left:0;top:62%;width:min(46vw,560px);transform:translate3d(-130%,0,0);will-change:transform}' +
    '.f1x-car{position:relative;display:block;width:100%;height:auto;filter:drop-shadow(0 18px 18px rgba(0,0,0,.55)) drop-shadow(0 0 22px rgba(225,6,0,.35))}' +
    // the two red straps: light trails pouring off each tyre, stretching back to the left edge
    '.f1x-trail{position:absolute;right:calc(100% - 20%);height:7%;width:180vw;border-radius:99px;' +
    'background:linear-gradient(90deg,rgba(225,6,0,0) 0%,rgba(225,6,0,.15) 55%,rgba(255,40,20,.85) 92%,#FF6A50 100%);' +
    'box-shadow:0 0 18px 4px rgba(225,6,0,.55);filter:blur(1.2px);transform-origin:100% 50%;will-change:transform,opacity}' +
    '.f1x-trail.t-rear{top:66%;right:calc(100% - 20%)}' +
    '.f1x-trail.t-front{top:70%;right:calc(100% - 82%);height:5.5%}' +
    '.f1x-wheel{animation:f1x-spin .12s linear infinite}' +
    '@keyframes f1x-spin{to{transform:rotate(360deg)}}' +
    '.f1x-flash{position:absolute;left:0;right:0;top:54%;height:26%;background:radial-gradient(60% 50% at 50% 50%,rgba(225,6,0,.22),transparent 70%);opacity:0}';

  function build() {
    if (!document.getElementById('f1x-css')) {
      var st = document.createElement('style');
      st.id = 'f1x-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    var wrap = document.createElement('div');
    wrap.className = 'f1x';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<div class="f1x-flash"></div><div class="f1x-rig"><span class="f1x-trail t-rear"></span><span class="f1x-trail t-front"></span>' + CAR + '</div>';
    document.body.appendChild(wrap);
    return wrap;
  }

  // ---- engine sound: synthesised V6 pass-by (no recordings) ----
  var ctx = null;
  function audio() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) { try { ctx = new AC(); } catch (e) { return null; } }
    if (ctx.state === 'suspended') ctx.resume().catch(function () {});
    return ctx;
  }

  function engine(seconds) {
    var ac = audio();
    if (!ac || ac.state !== 'running') return; // not allowed yet: stay silent
    var t0 = ac.currentTime + 0.02, T = seconds, mid = t0 + T * 0.5, end = t0 + T;

    var out = ac.createGain();
    out.gain.setValueAtTime(0.0001, t0);
    out.gain.exponentialRampToValueAtTime(0.5, mid - 0.05);   // approaching: louder
    out.gain.exponentialRampToValueAtTime(0.16, mid + 0.35);
    out.gain.exponentialRampToValueAtTime(0.0001, end + 0.25); // gone
    var pan = ac.createStereoPanner ? ac.createStereoPanner() : null;
    if (pan) { pan.pan.setValueAtTime(-0.9, t0); pan.pan.linearRampToValueAtTime(0.9, end); }
    var tone = ac.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.setValueAtTime(2600, t0);
    tone.frequency.linearRampToValueAtTime(5200, mid);
    tone.frequency.linearRampToValueAtTime(1600, end);
    tone.Q.value = 1.2;
    tone.connect(out);
    (pan ? out.connect(pan) && pan : out).connect(ac.destination);

    // Engine firing frequency: rpm climbs through two quick upshifts, then the Doppler drop
    // as the car passes (higher pitch coming in, lower going away).
    function pitch(param, mult) {
      var f = function (hz) { return hz * mult; };
      param.setValueAtTime(f(420), t0);
      param.exponentialRampToValueAtTime(f(640), t0 + T * 0.22);
      param.exponentialRampToValueAtTime(f(470), t0 + T * 0.25);   // upshift
      param.exponentialRampToValueAtTime(f(700), t0 + T * 0.46);
      param.exponentialRampToValueAtTime(f(520), mid + 0.06);       // Doppler drop
      param.exponentialRampToValueAtTime(f(430), end);
    }
    [[1, 'sawtooth', 0.32], [2, 'square', 0.08], [0.5, 'sawtooth', 0.22], [1.505, 'triangle', 0.1]].forEach(function (h) {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = h[1];
      pitch(o.frequency, h[0]);
      g.gain.value = h[2];
      o.connect(g).connect(tone);
      o.start(t0); o.stop(end + 0.3);
    });
    // turbo whine + exhaust hiss
    var len = Math.floor(ac.sampleRate * (T + 0.4)), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    var n = ac.createBufferSource(), nf = ac.createBiquadFilter(), ng = ac.createGain();
    n.buffer = buf; nf.type = 'bandpass'; nf.Q.value = 0.8;
    nf.frequency.setValueAtTime(1800, t0); nf.frequency.linearRampToValueAtTime(3200, mid); nf.frequency.linearRampToValueAtTime(1400, end);
    ng.gain.value = 0.12;
    n.connect(nf).connect(ng).connect(out);
    n.start(t0); n.stop(end + 0.3);
  }

  // ---- the pass ----
  function run() {
    if (running || reduce || root.dataset.theme !== 'dark' || !document.body) return;
    running = true;
    var wrap = build(), rig = wrap.querySelector('.f1x-rig'), trails = wrap.querySelectorAll('.f1x-trail'), flash = wrap.querySelector('.f1x-flash');
    var W = innerWidth, w = rig.offsetWidth;
    var from = -w * 1.3, to = W + w * 0.4;
    var ease = 'cubic-bezier(.55,.06,.32,1)'; // launches hard, holds speed, exits
    engine(DURATION / 1000);
    var a = rig.animate([
      { transform: 'translate3d(' + from + 'px,0,0) skewX(0deg)' },
      { transform: 'translate3d(' + (W * 0.35) + 'px,-2px,0) skewX(-4deg)', offset: 0.45 },
      { transform: 'translate3d(' + to + 'px,0,0) skewX(-7deg)' },
    ], { duration: DURATION, easing: ease, fill: 'forwards' });
    trails.forEach(function (t, i) {
      t.animate([
        { transform: 'scaleX(.15)', opacity: 0 },
        { transform: 'scaleX(1)', opacity: 1, offset: 0.3 },
        { transform: 'scaleX(1)', opacity: 1, offset: 0.8 },
        { transform: 'scaleX(.6)', opacity: 0 },
      ], { duration: DURATION, delay: i * 40, easing: 'linear', fill: 'forwards' });
    });
    flash.animate([{ opacity: 0 }, { opacity: 1, offset: 0.45 }, { opacity: 0 }], { duration: DURATION, fill: 'forwards' });
    var done = function () { wrap.remove(); running = false; };
    a.finished.then(done, done);
    setTimeout(function () { if (wrap.isConnected) done(); }, DURATION + 1500); // background tabs pause animations
  }

  // Once per visit on load (dark theme only)
  function onLoad() {
    var seen = false;
    try { seen = sessionStorage.getItem('f1-intro') === '1'; sessionStorage.setItem('f1-intro', '1'); } catch (e) {}
    if (!seen) setTimeout(run, 350);
  }
  if (document.readyState === 'complete') onLoad();
  else addEventListener('load', onLoad);

  // Every switch to the dark theme replays it (the click also unlocks the sound)
  document.addEventListener('themechange', function () { if (root.dataset.theme === 'dark') run(); });
  // Unlock audio on the first interaction so later passes are heard
  ['pointerdown', 'keydown'].forEach(function (ev) { addEventListener(ev, function () { audio(); }, { once: true, capture: true }); });
})();
