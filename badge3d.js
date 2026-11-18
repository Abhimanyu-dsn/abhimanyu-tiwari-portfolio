/* 3D ID badge for the hero: woven lanyard, polished steel clip and a glossy PVC card.
   Falls back to the CSS badge if WebGL is missing. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const scene = document.querySelector('.badge-scene');
if (scene) init().catch((e) => { console.warn('3D badge unavailable:', e); });

async function init() {
  const test = document.createElement('canvas');
  if (!(test.getContext('webgl2') || test.getContext('webgl'))) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- assets ---------- */
  const FONT = '"Plus Jakarta Sans", system-ui, sans-serif';
  await Promise.all(['700 40px', '600 40px', '500 40px', 'italic 700 40px'].map((f) => document.fonts.load(`${f} "Plus Jakarta Sans"`).catch(() => {})));
  const photo = await loadImage(scene.querySelector('.badge-photo').src);

  /* ---------- renderer ---------- */
  const canvas = document.createElement('canvas');
  canvas.className = 'badge3d';
  canvas.setAttribute('aria-hidden', 'true');
  scene.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  const world = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  world.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  world.environmentIntensity = 0.9;
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(-3, 5, 6); world.add(key);
  const rim = new THREE.DirectionalLight(0xc9b0ff, 0.8); rim.position.set(4, 2, -3); world.add(rim);
  world.add(new THREE.HemisphereLight(0xffffff, 0xe9e0ff, 0.35));

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);

  /* ---------- dimensions (world units) ---------- */
  const W = 2.4, H = 3.36, R = 0.17, DEPTH = 0.035;
  const SLOT = { w: 0.5, h: 0.12, y: H / 2 - 0.27 };
  const STRAP_W = 0.46;

  /* ---------- card ---------- */
  const shape = roundedRect(-W / 2, -H / 2, W, H, R);
  const hole = roundedRect(-SLOT.w / 2, SLOT.y - SLOT.h / 2, SLOT.w, SLOT.h, SLOT.h / 2);
  shape.holes.push(hole);

  const bodyGeo = new THREE.ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 4, curveSegments: 32 });
  bodyGeo.translate(0, 0, -DEPTH / 2);
  const plastic = new THREE.MeshPhysicalMaterial({ color: 0xf8f6fc, roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.3 });
  const body = new THREE.Mesh(bodyGeo, plastic);

  const faceGeo = new THREE.ShapeGeometry(shape, 32);
  remapUV(faceGeo, W, H);
  const printTex = cardTexture();
  const front = new THREE.Mesh(faceGeo, new THREE.MeshPhysicalMaterial({
    map: printTex, emissiveMap: printTex, emissive: 0xffffff, emissiveIntensity: 0.32,
    roughness: 0.3, clearcoat: 0.9, clearcoatRoughness: 0.15, metalness: 0,
  }));
  front.position.z = DEPTH / 2 + 0.0125;
  const back = new THREE.Mesh(faceGeo, new THREE.MeshPhysicalMaterial({ map: backTexture(), roughness: 0.5, clearcoat: 0.4 }));
  back.rotation.y = Math.PI; back.position.z = -DEPTH / 2 - 0.0125;

  // soft coloured shadow that travels with the card
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.6, H * 1.5), new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false, opacity: 0.55 }));
  shadow.position.set(-0.15, -0.3, -0.45); shadow.material.opacity = 0.85;

  const card = new THREE.Group();
  card.add(shadow, body, front, back);

  /* ---------- steel hardware ---------- */
  const steel = new THREE.MeshStandardMaterial({ color: 0xdfe2e8, metalness: 1, roughness: 0.2 });
  const darkSteel = new THREE.MeshStandardMaterial({ color: 0xb8bcc6, metalness: 1, roughness: 0.32 });
  const hw = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 20, 80), steel);
  ring.scale.set(1, 1.15, 1); ring.position.y = -0.23; ring.rotation.y = 0.25;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 24), steel); neck.position.y = -0.48;
  const swivel = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.05, 0.13, 32), steel); swivel.position.y = -0.57;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.065, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), steel); cap.position.y = -0.505;
  // lobster clasp: a thick open loop plus its spring gate
  const clasp = new THREE.Group(); clasp.position.y = -0.8; clasp.rotation.y = 0.5;
  const claspBody = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.042, 24, 64, Math.PI * 1.62), steel);
  claspBody.rotation.z = Math.PI * 0.69; claspBody.scale.set(0.78, 1.55, 1);
  const gate = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.16, 6, 16), darkSteel);
  gate.position.set(0.085, 0.0, 0); gate.rotation.z = 0.22; gate.scale.y = 1.35;
  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.07), darkSteel); lever.position.set(0.09, 0.17, 0);
  clasp.add(claspBody, gate, lever);
  hw.add(ring, neck, cap, swivel, clasp);

  /* ---------- assembly: ring top is the pivot ---------- */
  const assembly = new THREE.Group();
  card.position.y = -0.95 - SLOT.y; // the clasp hooks through the slot
  assembly.add(hw, card);
  world.add(assembly);

  /* ---------- strap ---------- */
  const strapTex = strapTextures(maxAniso);
  const fabric = new THREE.MeshPhysicalMaterial({
    map: strapTex.map, bumpMap: strapTex.bump, bumpScale: 1.6, roughness: 0.82,
    sheen: 0.7, sheenColor: new THREE.Color(0xb995ff), sheenRoughness: 0.45, side: THREE.DoubleSide,
  });
  const strap = new THREE.Mesh(new THREE.PlaneGeometry(STRAP_W, 1, 1, 1), fabric);
  strap.geometry.translate(0, 0.5, 0); // origin at its bottom end
  world.add(strap);
  // the end that folds over the ring
  const fold = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, STRAP_W, 24, 1, true, 0, Math.PI), fabric);
  fold.rotation.z = Math.PI / 2;
  const foldWrap = new THREE.Group(); foldWrap.add(fold); world.add(foldWrap);

  /* ---------- layout ---------- */
  const STRAP_ANGLE = THREE.MathUtils.degToRad(21);
  const REST_TILT = THREE.MathUtils.degToRad(-8);
  let anchor = new THREE.Vector3(), strapLen = 4, pxPerUnit = 100;
  const cssBadge = scene.querySelector('.badge');

  function layout() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    pxPerUnit = cssBadge.offsetWidth / W;
    const visH = h / pxPerUnit;
    const dist = visH / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    // place the card where the CSS badge sits
    const b = cssBadge.getBoundingClientRect();
    const bx = b.left + b.width / 2 - rect.left, by = b.top + b.height / 2 - rect.top;
    const restCenter = new THREE.Vector3(0, card.position.y, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), REST_TILT);
    camera.position.set(restCenter.x - (bx - w / 2) / pxPerUnit, restCenter.y + (by - h / 2) / pxPerUnit, dist);
    camera.lookAt(camera.position.x, camera.position.y, 0);
    camera.updateProjectionMatrix();
    // anchor the strap above the top edge, leaning right
    const top = camera.position.y + visH / 2 + 0.6;
    strapLen = top / Math.cos(STRAP_ANGLE);
    anchor.set(Math.sin(STRAP_ANGLE) * strapLen, top, -0.15);
  }

  /* ---------- motion: a damped double pendulum, nudged by pointer and breeze ---------- */
  let phi = 0, phiV = 0;          // strap swing around its anchor
  let theta = REST_TILT, thetaV = 0; // card swing around the ring
  let yaw = 0.18, yawV = 0, yawTarget = 0.18, pitch = 0, pitchTarget = 0;
  let dragging = false, lastX = 0, t0 = performance.now(), last = t0;

  scene.addEventListener('pointermove', (e) => {
    const r = scene.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
    yawTarget = 0.18 + nx * 0.7; pitchTarget = ny * 0.25;
    if (dragging) { thetaV += (e.clientX - lastX) * -0.004; phiV += (e.clientX - lastX) * -0.0008; lastX = e.clientX; }
  });
  scene.addEventListener('pointerleave', () => { yawTarget = 0.18; pitchTarget = 0; dragging = false; });
  scene.addEventListener('pointerdown', (e) => { dragging = true; lastX = e.clientX; });
  addEventListener('pointerup', () => { dragging = false; });

  function step(now) {
    const dt = Math.min(0.033, (now - last) / 1000); last = now;
    const t = (now - t0) / 1000;
    const breeze = reduce ? 0 : Math.sin(t * 0.9) * 0.12 + Math.sin(t * 2.1 + 1) * 0.05;
    thetaV += (-(theta - REST_TILT) * 9 - thetaV * 1.6 + breeze * 1.2) * dt; theta += thetaV * dt;
    phiV += (-phi * 3 - phiV * 1.2 + breeze * 0.15 + thetaV * 0.02) * dt; phi += phiV * dt;
    yawV += ((yawTarget - yaw) * 10 - yawV * 4 + (reduce ? 0 : Math.sin(t * 0.7) * 0.25)) * dt; yaw += yawV * dt;
    pitch += (pitchTarget - pitch) * Math.min(1, dt * 4);
  }

  function pose() {
    // strap end (pivot) swings slightly around the anchor
    const dir = new THREE.Vector3(-Math.sin(STRAP_ANGLE + phi), -Math.cos(STRAP_ANGLE + phi), 0.04);
    const pivot = anchor.clone().addScaledVector(dir.normalize(), strapLen);
    assembly.position.copy(pivot);
    assembly.rotation.set(pitch, yaw, theta, 'ZYX');
    // stretch the strap from the pivot up to the anchor
    const v = anchor.clone().sub(pivot);
    strap.position.copy(pivot);
    strap.scale.set(1, v.length(), 1);
    strap.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize());
    strap.rotateY(0.22 + yaw * 0.25); // a little twist so the weave catches light
    strapTex.map.repeat.y = strapTex.bump.repeat.y = v.length() / 7;
    foldWrap.position.copy(pivot); foldWrap.position.y -= 0.02;
    foldWrap.quaternion.copy(strap.quaternion);
  }

  /* ---------- run only while visible ---------- */
  let visible = true, raf = 0;
  const loop = (now) => { raf = 0; step(now); pose(); renderer.render(world, camera); schedule(); };
  const schedule = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; schedule(); }).observe(scene);
  document.addEventListener('visibilitychange', schedule);
  new ResizeObserver(() => { layout(); schedule(); }).observe(scene);
  addEventListener('resize', layout);

  layout(); pose(); renderer.render(world, camera);
  scene.classList.add('has-3d');
  last = performance.now(); schedule();

  /* ================= textures ================= */
  function cardTexture() {
    const S = 600; // px per world unit
    const c = document.createElement('canvas'); c.width = W * S; c.height = H * S;
    const g = c.getContext('2d'); const cw = c.width, ch = c.height;
    g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, cw, ch);
    // lavender wave across the top
    let gr = g.createLinearGradient(0, 0, cw, ch * 0.45);
    gr.addColorStop(0, '#F3EDFF'); gr.addColorStop(1, '#E7DBFF');
    g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.lineTo(cw, 0); g.lineTo(cw, ch * 0.30);
    g.bezierCurveTo(cw * 0.7, ch * 0.42, cw * 0.32, ch * 0.20, 0, ch * 0.33); g.closePath(); g.fill();
    // stronger violet sweep top-right
    gr = g.createRadialGradient(cw * 0.95, ch * 0.02, 10, cw * 0.95, ch * 0.02, cw * 0.62);
    gr.addColorStop(0, 'rgba(160,100,255,.85)'); gr.addColorStop(0.55, 'rgba(190,150,255,.45)'); gr.addColorStop(1, 'rgba(210,190,255,0)');
    g.fillStyle = gr; g.beginPath(); g.moveTo(cw * 0.45, 0); g.lineTo(cw, 0); g.lineTo(cw, ch * 0.3);
    g.bezierCurveTo(cw * 0.92, ch * 0.2, cw * 0.72, ch * 0.08, cw * 0.45, 0); g.fill();
    // fine print-like noise
    noise(g, cw, ch, 0.025);
    // slot shadow
    const sx = cw / 2, sy = (H / 2 - SLOT.y) * S;
    g.save(); g.shadowColor = 'rgba(70,30,160,.35)'; g.shadowBlur = 18; g.strokeStyle = 'rgba(120,80,210,.25)'; g.lineWidth = 6;
    rr(g, sx - SLOT.w * S / 2 - 6, sy - SLOT.h * S / 2 - 6, SLOT.w * S + 12, SLOT.h * S + 12, (SLOT.h * S + 12) / 2); g.stroke(); g.restore();
    // AT monogram
    gr = g.createLinearGradient(80, 90, 300, 220); gr.addColorStop(0, '#5B2BE0'); gr.addColorStop(1, '#9B3CF2');
    g.fillStyle = gr; g.font = `italic 700 118px ${FONT}`; g.textBaseline = 'alphabetic'; g.fillText('AT', 92, 230);
    // photo with ring and glow
    const px = cw / 2, py = ch * 0.36, pr = cw * 0.2;
    g.save(); g.shadowColor = 'rgba(110,50,230,.45)'; g.shadowBlur = 60; g.shadowOffsetY = 24;
    g.fillStyle = '#FFFFFF'; g.beginPath(); g.arc(px, py, pr + 18, 0, Math.PI * 2); g.fill(); g.restore();
    g.strokeStyle = 'rgba(160,110,255,.35)'; g.lineWidth = 8; g.beginPath(); g.arc(px, py, pr + 24, 0, Math.PI * 2); g.stroke();
    g.save(); g.beginPath(); g.arc(px, py, pr, 0, Math.PI * 2); g.clip();
    g.fillStyle = '#16141c'; g.fillRect(px - pr, py - pr, pr * 2, pr * 2);
    const s = Math.max((pr * 2) / photo.width, (pr * 2) / photo.height);
    const iw = photo.width * s, ih = photo.height * s;
    g.drawImage(photo, px - iw / 2, py - pr - (ih - pr * 2) * 0.2, iw, ih); g.restore();
    // name and role
    g.textAlign = 'center'; g.fillStyle = '#15131C'; g.font = `700 128px ${FONT}`; g.strokeStyle = '#15131C'; g.lineWidth = 5;
    fit(g, 'Abhimanyu Tiwari', cw * 0.86, 128, '700'); g.fillText('Abhimanyu Tiwari', cw / 2, ch * 0.62); g.strokeText('Abhimanyu Tiwari', cw / 2, ch * 0.62);
    g.fillStyle = '#6A2BE8'; g.font = `700 80px ${FONT}`; g.strokeStyle = '#6A2BE8'; g.lineWidth = 2.5; g.fillText('Product Designer', cw / 2, ch * 0.675); g.strokeText('Product Designer', cw / 2, ch * 0.675);
    // divider
    g.fillStyle = '#ECEAF2'; g.fillRect(cw * 0.08, ch * 0.705, cw * 0.84, 4);
    // stats
    const cols = [['5+ Years', 'Experience', 'briefcase'], ['Product', 'Design', 'layers'], ['Bangalore', 'India', 'pin']];
    cols.forEach(([a, b2, ic], i) => {
      const x = cw * (0.21 + i * 0.29), y = ch * 0.75;
      drawIcon(g, ic, x, y, 54);
      g.fillStyle = g.strokeStyle = '#1B1B21'; g.lineWidth = 3; g.font = `700 62px ${FONT}`; g.fillText(a, x, y + 108); g.strokeText(a, x, y + 108);
      g.fillStyle = g.strokeStyle = '#5E5C6B'; g.lineWidth = 1.5; g.font = `500 52px ${FONT}`; g.fillText(b2, x, y + 172); g.strokeText(b2, x, y + 172);
      if (i) { g.fillStyle = '#ECEAF2'; g.fillRect(x - cw * 0.145, y - 40, 4, 230); }
    });
    // barcode
    let bx = cw * 0.27; const by = ch * 0.89, bw = cw * 0.46; let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    g.fillStyle = '#B9A6E8';
    while (bx < cw * 0.27 + bw) { const w = [4, 4, 8, 8, 12][Math.floor(rnd() * 5)]; if (rnd() < 0.85) g.fillRect(bx, by, w, 120); bx += w + [4, 6, 8][Math.floor(rnd() * 3)]; }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = maxAniso;
    return tex;
  }

  function backTexture() {
    const c = document.createElement('canvas'); c.width = 480; c.height = 672;
    const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 480, 672); gr.addColorStop(0, '#F6F1FF'); gr.addColorStop(1, '#EDE4FF');
    g.fillStyle = gr; g.fillRect(0, 0, 480, 672); noise(g, 480, 672, 0.03);
    g.fillStyle = 'rgba(123,60,240,.14)'; g.font = `italic 700 220px ${FONT}`; g.textAlign = 'center'; g.fillText('AT', 240, 420);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }

  function shadowTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    gr.addColorStop(0, 'rgba(110,50,220,.55)'); gr.addColorStop(0.5, 'rgba(140,90,240,.22)'); gr.addColorStop(1, 'rgba(160,120,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  function strapTextures(aniso) {
    const w = 256, h = 2048;
    const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
    const b = document.createElement('canvas'); b.width = w; b.height = h; const gb = b.getContext('2d');
    // base dye with darker edges
    const gr = g.createLinearGradient(0, 0, w, 0);
    gr.addColorStop(0, '#4A18C0'); gr.addColorStop(0.12, '#6A2EEA'); gr.addColorStop(0.5, '#7B3CF5'); gr.addColorStop(0.88, '#6A2EEA'); gr.addColorStop(1, '#4512B0');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    gb.fillStyle = '#808080'; gb.fillRect(0, 0, w, h);
    // weave: fine horizontal ribs plus a twill offset
    for (let y = 0; y < h; y += 4) {
      g.fillStyle = 'rgba(255,255,255,.07)'; g.fillRect(0, y, w, 1.5);
      g.fillStyle = 'rgba(20,0,60,.10)'; g.fillRect(0, y + 2, w, 1.5);
      gb.fillStyle = '#b0b0b0'; gb.fillRect(0, y, w, 2); gb.fillStyle = '#4a4a4a'; gb.fillRect(0, y + 2, w, 2);
    }
    for (let x = 0; x < w; x += 3) { gb.fillStyle = `rgba(0,0,0,${x % 6 ? 0.05 : 0.12})`; gb.fillRect(x, 0, 1, h); }
    // stitched hems
    [14, w - 16].forEach((x) => {
      g.fillStyle = 'rgba(30,0,90,.35)'; g.fillRect(x, 0, 3, h);
      g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(x + 3, 0, 1.5, h);
      gb.fillStyle = '#303030'; gb.fillRect(x, 0, 3, h);
    });
    noise(g, w, h, 0.05);
    // printed AT, close to the bottom end (v=0 is the ring end)
    g.save(); g.translate(w / 2, h - 118); g.rotate(-Math.PI / 2 + Math.PI / 2);
    g.fillStyle = 'rgba(255,255,255,.95)'; g.font = `italic 700 104px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = 'rgba(20,0,60,.25)'; g.shadowBlur = 2; g.fillText('AT', 0, 0); g.restore();
    const map = new THREE.CanvasTexture(c), bump = new THREE.CanvasTexture(b);
    map.colorSpace = THREE.SRGBColorSpace;
    [map, bump].forEach((t) => { t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso; t.offset.y = 0; });
    return { map, bump };
  }

  /* ================= helpers ================= */
  function drawIcon(g, name, x, y, s) {
    g.save(); g.translate(x, y); g.strokeStyle = '#7B3CF0'; g.lineWidth = 9; g.lineJoin = g.lineCap = 'round';
    g.beginPath();
    if (name === 'briefcase') { rr(g, -s * 0.6, -s * 0.32, s * 1.2, s * 0.9, 10); g.moveTo(-s * 0.22, -s * 0.32); g.lineTo(-s * 0.22, -s * 0.56); g.lineTo(s * 0.22, -s * 0.56); g.lineTo(s * 0.22, -s * 0.32); g.moveTo(-s * 0.6, s * 0.05); g.lineTo(s * 0.6, s * 0.05); }
    if (name === 'layers') { g.moveTo(0, -s * 0.55); g.lineTo(s * 0.6, -s * 0.22); g.lineTo(0, s * 0.11); g.lineTo(-s * 0.6, -s * 0.22); g.closePath(); g.moveTo(-s * 0.6, s * 0.1); g.lineTo(0, s * 0.43); g.lineTo(s * 0.6, s * 0.1); }
    if (name === 'pin') { g.moveTo(0, s * 0.6); g.bezierCurveTo(-s * 0.8, -s * 0.1, -s * 0.45, -s * 0.62, 0, -s * 0.62); g.bezierCurveTo(s * 0.45, -s * 0.62, s * 0.8, -s * 0.1, 0, s * 0.6); g.moveTo(s * 0.18, -s * 0.2); g.arc(0, -s * 0.2, s * 0.18, 0, Math.PI * 2); }
    g.stroke(); g.restore();
  }
  function fit(g, text, maxW, size, weight) { while (g.measureText(text).width > maxW && size > 40) { size -= 4; g.font = `${weight} ${size}px ${FONT}`; } }
  function noise(g, w, h, amt) {
    const d = g.getImageData(0, 0, w, h), a = d.data;
    for (let i = 0; i < a.length; i += 4) { const n = (Math.random() - 0.5) * 255 * amt; a[i] += n; a[i + 1] += n; a[i + 2] += n; }
    g.putImageData(d, 0, 0);
  }
  function rr(g, x, y, w, h, r) { g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function roundedRect(x, y, w, h, r) {
    const s = new THREE.Shape();
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }
  function remapUV(geo, w, h) {
    const p = geo.attributes.position, uv = geo.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + w / 2) / w, (p.getY(i) + h / 2) / h);
    uv.needsUpdate = true;
  }
  function loadImage(src) {
    return new Promise((res, rej) => { const i = new Image(); i.decoding = 'async'; i.onload = () => res(i); i.onerror = rej; i.src = src; });
  }
}
