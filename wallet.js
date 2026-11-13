/* Opens the 3D wallet (built separately into /wallet/) full-screen when the purse button is clicked. */
(function () {
  var buttons = document.querySelectorAll('.purse-btn');
  if (!buttons.length) return;
  var dlg, frame, lastFocus;

  function build() {
    dlg = document.createElement('dialog');
    dlg.className = 'wallet-dialog';
    dlg.setAttribute('aria-label', 'My work, presented as a 3D wallet');
    dlg.innerHTML =
      '<button type="button" class="wallet-close" aria-label="Close the wallet">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg><span class="wallet-close-tx">Close</span></button>' +
      '<iframe title="My work, presented as a 3D wallet" src="about:blank"></iframe>';
    document.body.appendChild(dlg);
    frame = dlg.querySelector('iframe');
    dlg.querySelector('.wallet-close').addEventListener('click', close);
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
    dlg.addEventListener('close', function () {
      document.documentElement.classList.remove('wallet-open');
      frame.src = 'about:blank'; // stop the 3D scene while it is hidden
      if (lastFocus) lastFocus.focus();
    });
  }

  function open(e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let "open in new tab" work
    e.preventDefault();
    lastFocus = e.currentTarget;
    if (!dlg) build();
    frame.src = 'wallet/index.html';
    document.documentElement.classList.add('wallet-open');
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    frame.addEventListener('load', function onLoad() { frame.removeEventListener('load', onLoad); try { frame.focus(); } catch (err) {} });
  }

  function close() {
    if (!dlg || !dlg.open) return;
    if (dlg.close) dlg.close(); else { dlg.removeAttribute('open'); dlg.dispatchEvent(new Event('close')); }
  }

  buttons.forEach(function (b) {
    b.setAttribute('aria-haspopup', 'dialog');
    b.addEventListener('click', open);
  });
})();
