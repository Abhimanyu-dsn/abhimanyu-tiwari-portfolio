/* Home page behaviour: count-up highlights, animated "tentacle" wires, project filters. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Count-up numbers in Experience & highlights */
  function countUp() {
    var grid = document.getElementById('highlights-grid');
    if (!grid || reduce || typeof IntersectionObserver === 'undefined') return;
    var els = grid.querySelectorAll('[data-count]');
    els.forEach(function (el) { el.textContent = '0'; });
    var io = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      io.disconnect();
      var start = performance.now(), dur = 1400;
      (function tick(t) {
        var p = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - p, 3);
        els.forEach(function (el) { el.textContent = Math.round(+el.dataset.count * e); });
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    }, { threshold: 0.35 });
    io.observe(grid);
  }

  /* Tools & loves: icons drift and the wires bend like tentacles */
  function tentacles() {
    var wrap = document.querySelector('.circuit-wrap');
    if (!wrap || reduce) return;
    var base = { figma: [470, 135], ps: [590, 205], ai: [680, 285], html: [725, 375], css: [690, 460], gpt: [175, 240], claude: [150, 335], cursor: [160, 430], game: [780, 575], swim: [735, 655], cricket: [615, 725], yt: [330, 750], sports: [470, 820] };
    var anchors = { hubT: [205, 128], hubL: [840, 828], pTop: [490, 345], pLeft: [380, 575], pRight: [625, 480], pBot: [490, 615] };
    var edges = [['ct1', 'hubT', 'figma'], ['ct2', 'hubT', 'ps'], ['ct3', 'hubT', 'pTop'], ['ct4', 'hubT', 'gpt'], ['ct5', 'hubT', 'cursor'], ['ct6', 'gpt', 'claude'], ['ct7', 'claude', 'cursor'], ['ct8', 'cursor', 'pLeft'], ['ct9', 'ps', 'ai'], ['ct10', 'ai', 'html'], ['ct11', 'html', 'css'], ['ct12', 'css', 'pRight'], ['cl1', 'pBot', 'game'], ['cl2', 'pBot', 'swim'], ['cl3', 'pBot', 'cricket'], ['cl4', 'pBot', 'yt'], ['cl5', 'pBot', 'sports'], ['cl6', 'cricket', 'hubL'], ['cl7', 'sports', 'hubL']];
    var order = ['figma', 'ps', 'ai', 'html', 'css', 'gpt', 'claude', 'cursor', 'game', 'swim', 'cricket', 'yt', 'sports'];
    var lis = {}, paths = {}, seed = {};
    wrap.querySelectorAll('li.node').forEach(function (li, i) { if (order[i]) lis[order[i]] = li; });
    edges.forEach(function (e) { paths[e[0]] = document.getElementById(e[0]); });
    order.forEach(function (id, i) { seed[id] = [i * 1.7 + 0.3, i * 2.3 + 1.1, 0.32 + ((i * 37) % 10) / 38, 0.28 + ((i * 53) % 10) / 42]; });
    var t0 = performance.now();
    function f(n) { return n.toFixed(1); }
    (function tick(now) {
      requestAnimationFrame(tick);
      if (document.hidden) return;
      var t = (now - t0) / 1000, k = (wrap.offsetWidth || 600) / 1000, pos = {};
      order.forEach(function (id) {
        var b = base[id], s = seed[id];
        var ox = Math.sin(t * s[2] + s[0]) * 24 + Math.sin(t * s[3] * 1.7 + s[1]) * 10;
        var oy = Math.cos(t * s[3] + s[1]) * 22 + Math.sin(t * s[2] * 1.3 + s[0]) * 9;
        pos[id] = [b[0] + ox, b[1] + oy];
        if (lis[id]) lis[id].style.transform = 'translate(-50%, -50%) translate(' + f(ox * k) + 'px, ' + f(oy * k) + 'px)';
      });
      edges.forEach(function (e, i) {
        var p = paths[e[0]]; if (!p) return;
        var a = pos[e[1]] || anchors[e[1]], b = pos[e[2]] || anchors[e[2]];
        var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
        var amp = Math.min(48, L * 0.22), w1 = Math.sin(t * 1.25 + i * 0.9) * amp, w2 = Math.sin(t * 1.6 + i * 1.4 + 1.2) * amp;
        p.setAttribute('d', 'M' + f(a[0]) + ' ' + f(a[1]) + ' C' + f(a[0] + dx * 0.33 + nx * w1) + ' ' + f(a[1] + dy * 0.33 + ny * w1) + ' ' + f(a[0] + dx * 0.66 - nx * w2) + ' ' + f(a[1] + dy * 0.66 - ny * w2) + ' ' + f(b[0]) + ' ' + f(b[1]));
      });
    })(t0);
  }

  /* Project filter chips */
  function filters() {
    var group = document.querySelector('[aria-label="Filter projects"]');
    if (!group) return;
    var chips = group.querySelectorAll('button');
    var cards = document.querySelectorAll('#work a.m3-card[data-tags]');
    var on = chips[0].getAttribute('style'), off = chips[1].getAttribute('style');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var tag = chip.textContent.replace('check', '').trim();
        chips.forEach(function (c) {
          var active = c === chip;
          c.setAttribute('aria-pressed', active);
          c.setAttribute('style', active ? on : off);
          var icon = c.querySelector('.ms');
          if (active && !icon) c.insertAdjacentHTML('afterbegin', '<span class="ms" aria-hidden="true" style="font-size: 18px">check</span>');
          if (!active && icon) icon.remove();
        });
        cards.forEach(function (card) {
          var show = tag === 'All' || (' ' + card.dataset.tags + ' ').indexOf(' ' + tag + ' ') > -1 || card.dataset.tags === tag;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  countUp();
  tentacles();
  filters();
})();
