/* Home page behaviour: intro video dialog and count-up highlights. */
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
})();
