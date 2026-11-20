// ModalControls: the popup's top-right buttons (fullscreen toggle and close) plus a
// "Skip" button that only exists while the crew is still building.

const ICONS = {
  expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  collapse: '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
};
const svg = (d) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

export class ModalControls {
  constructor(parent, { onClose, onFullscreen, onSkip }) {
    this.root = document.createElement('div');
    this.root.className = 'sw-controls';

    this.skip = this.button('sw-btn sw-skip', 'Skip the build', onSkip);
    this.skip.innerHTML = 'Skip<span aria-hidden="true">⏭</span>';

    this.full = this.button('sw-btn sw-icon', 'Fullscreen', onFullscreen);
    this.full.setAttribute('aria-pressed', 'false');
    this.full.innerHTML = svg(ICONS.expand);

    this.close = this.button('sw-btn sw-icon', 'Close', onClose);
    this.close.innerHTML = svg(ICONS.close);

    parent.appendChild(this.root);
  }

  button(cls, label, fn) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = cls;
    b.setAttribute('aria-label', label);
    b.title = label;
    b.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
    this.root.appendChild(b);
    return b;
  }

  setFullscreen(on) {
    this.full.setAttribute('aria-pressed', String(on));
    this.full.setAttribute('aria-label', on ? 'Exit fullscreen' : 'Fullscreen');
    this.full.title = on ? 'Exit fullscreen' : 'Fullscreen';
    this.full.innerHTML = svg(on ? ICONS.collapse : ICONS.expand);
  }

  doneBuilding() {
    if (this.skip.isConnected) {
      if (document.activeElement === this.skip) this.close.focus();
      this.skip.remove();
    }
  }
}
