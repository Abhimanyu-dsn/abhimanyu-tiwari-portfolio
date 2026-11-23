/* Light / F1 dark theme toggle. The <head> of every page applies the saved choice before
   the first paint; this wires the header button, saves the choice and tells the 3D cards
   (badge3d.js) to repaint via a `themechange` event. */
(function () {
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var light = meta ? meta.getAttribute('content') : '#6C3CF5';

  function sync() {
    var dark = root.dataset.theme === 'dark';
    document.querySelectorAll('.theme-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', dark ? 'true' : 'false');
      b.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark F1 theme');
      b.title = b.getAttribute('aria-label');
    });
    if (meta) meta.setAttribute('content', dark ? '#080808' : light);
  }

  function set(theme) {
    if (theme === 'dark') root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    sync();
    document.dispatchEvent(new Event('themechange'));
  }

  document.querySelectorAll('.theme-btn').forEach(function (b) {
    b.addEventListener('click', function () { set(root.dataset.theme === 'dark' ? 'light' : 'dark'); });
  });
  sync();
})();
