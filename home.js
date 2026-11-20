/* Home page behaviour: count-up highlights, project filters. */
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

  /* Intro video dialog */
  function introVideo() {
    var dlg = document.getElementById('intro-dialog');
    var openBtn = document.querySelector('[data-intro-open]');
    if (!dlg || !openBtn) return;
    var video = dlg.querySelector('video');
    openBtn.addEventListener('click', function () {
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
      try { var p = video.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
    });
    function close() { if (dlg.open) { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); } }
    dlg.querySelector('[data-intro-close]').addEventListener('click', close);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener('close', function () { video.pause(); openBtn.focus(); });
  }

  introVideo();
  countUp();
  filters();
})();
