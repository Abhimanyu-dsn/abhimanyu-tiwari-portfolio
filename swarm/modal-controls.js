// ModalControls: the popup's top-right buttons (fullscreen toggle and close) plus a
// "Skip" button that only exists while the crew is still building.

// Lucide icons from the site's sprite (assets/icons/lucide.svg)
const ICONS = { expand: 'maximize-2', collapse: 'minimize-2', close: 'x', skip: 'skip-forward' };
const svg = (name, size = 20) =>
  `<svg class="ms" aria-hidden="true" style="font-size: ${size}px"><use href="assets/icons/lucide.svg#${name}"></use></svg>`;

export class ModalControls {
  constructor(parent, { onClose, onFullscreen, onSkip }) {
    this.root = document.createElement('div');
    this.root.className = 'sw-controls';

    this.skip = this.button('sw-btn sw-skip', 'Skip the build', onSkip);
    this.skip.innerHTML = 'Skip' + svg(ICONS.skip, 16);

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
