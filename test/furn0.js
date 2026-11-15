// Example pieces (not shipped): they set the level of detail expected from every piece of furniture.
import { furn, tone, WOOD, METAL, ROOM_H, T, RX, RY, RZ, mul, THREE } from '../src/furncore.js';
import { run } from './furnview.js';

furn({ id: 'ex_poltrona', name: 'Poltrona de leitura', cat: 'Sofás e poltronas', price: 520, lvl: 4, w: 0.95, d: 0.9, h: 1.0, cols: [0x7fa08a, WOOD.nogueira], colN: ['Tecido', 'Pés'], seat: [0, 0.44, 0.05], info: 'Fofa, de braços largos, com almofada e mantinha.' }, (k) => {
  const F = k.c1, W = k.c2;
  k.legs(0.8, 0.74, 0.14, W, { r: 0.028, taper: 0.55 });
  k.rbox(0.9, 0.2, 0.84, 0, 0.24, 0, tone(F, 0.92), 0.06);                               // base
  k.rbox(0.62, 0.16, 0.62, 0, 0.4, 0.08, tone(F, 1.06), 0.07);                           // seat cushion
  k.rbox(0.66, 0.62, 0.2, 0, 0.66, -0.31, F, 0.09, RX(-0.13));                           // back
  k.rbox(0.5, 0.36, 0.12, 0, 0.66, -0.2, tone(F, 1.1), 0.06, RX(-0.16));                 // back cushion
  for (const s of [-1, 1]) { k.rbox(0.17, 0.4, 0.8, s * 0.39, 0.42, 0.0, F, 0.08); k.cyl(0.085, 0.085, 0.8, s * 0.39, 0.62, 0.0, tone(F, 1.04), 12, RX(Math.PI / 2)); } // rolled arms
  k.rbox(0.3, 0.3, 0.1, -0.1, 0.62, -0.08, 0xf2d9a0, 0.045, mul(RY(0.3), RX(-0.35)));    // little pillow
  k.rbox(0.2, 0.42, 0.03, 0.39, 0.52, 0.2, 0xe9dcc8, 0.012, RZ(0.02));                   // throw blanket over the arm
  for (let i = 0; i < 5; i++) k.box(0.012, 0.05, 0.004, 0.31 + i * 0.04, 0.3, 0.214, 0xd9c8ac); // its fringe
});

furn({ id: 'ex_abajur', name: 'Abajur de chão', cat: 'Luzes', price: 260, lvl: 3, w: 0.45, d: 0.45, h: 1.6, cols: [0xf4e4c0, METAL.latao], colN: ['Cúpula', 'Haste'], info: 'Luz morna para ler à noite.' }, (k) => {
  k.latheS([[0.001, 0], [0.15, 0], [0.15, 0.02], [0.03, 0.05], [0.014, 0.08]], 0, 0, 0, k.c2, 20);
  k.cylS(0.012, 0.012, 1.25, 0, 0.7, 0, k.c2, 8);
  k.lathe2([[0.2, 1.24], [0.13, 1.56]], 0, 0, 0, k.c1, 24);                              // shade (seen from both sides)
  k.torus(0.2, 0.006, 0, 1.24, 0, tone(k.c1, 0.8), RX(Math.PI / 2)); k.torus(0.13, 0.006, 0, 1.56, 0, tone(k.c1, 0.8), RX(Math.PI / 2));
  k.glow(new THREE.SphereGeometry(0.06, 12, 8), 0xfff0c8, 3, { at: [0, 1.36, 0] });      // bulb: lights up at night
  k.glow(new THREE.CylinderGeometry(0.125, 0.195, 0.3, 24, 1, true), 0xffd9a0, 0.9, { at: [0, 1.4, 0], double: true, opacity: 0.55 }); // the shade's warm halo
});

furn({ id: 'ex_quadro', name: 'Quadro de girassóis', cat: 'Quadros e parede', kind: 'wall', price: 180, lvl: 2, w: 0.7, d: 0.05, h: 0.9, cols: [WOOD.mel, 0xf6efe0], colN: ['Moldura', 'Passe-partout'], info: 'Pintado num domingo de sol.' }, (k) => {
  const y = 1.55, w = 0.7, h = 0.9, f = 0.05;
  for (const s of [-1, 1]) { k.box(f, h, 0.04, s * (w - f) / 2, y, 0.02, k.c1); k.box(w, f, 0.04, 0, y + s * (h - f) / 2, 0.02, k.c1); }
  k.box(w - f * 2, h - f * 2, 0.012, 0, y, 0.008, k.c2);
  k.art('girassois', w - 0.2, h - 0.2, 0, y, 0.016, (g, W, H) => {
    const sky = g.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#9fd0e8'); sky.addColorStop(0.6, '#e8f0d8'); g.fillStyle = sky; g.fillRect(0, 0, W, H);
    g.fillStyle = '#7fae5a'; g.fillRect(0, H * 0.7, W, H * 0.3);
    for (const [x, y0, r] of [[0.3, 0.42, 0.13], [0.68, 0.33, 0.16], [0.52, 0.6, 0.11]]) { g.strokeStyle = '#3f7a34'; g.lineWidth = W * 0.02; g.beginPath(); g.moveTo(x * W, y0 * H); g.lineTo(x * W + 4, H); g.stroke();
      g.fillStyle = '#f5c21e'; for (let i = 0; i < 14; i++) { const a = (i / 14) * 6.283; g.beginPath(); g.ellipse(x * W + Math.cos(a) * r * W * 0.8, y0 * H + Math.sin(a) * r * W * 0.8, r * W * 0.42, r * W * 0.16, a, 0, 6.283); g.fill(); }
      g.fillStyle = '#6a4424'; g.beginPath(); g.arc(x * W, y0 * H, r * W * 0.5, 0, 6.283); g.fill(); }
  });
});

furn({ id: 'ex_estante_plantas', name: 'Estante escada de plantas', cat: 'Vasos e plantas', price: 480, lvl: 4, w: 0.9, d: 0.5, h: 1.3, cols: [WOOD.pinho, 0xc66f48], colN: ['Madeira', 'Vasos'],
  plants: [[-0.25, 0.48, 0.12, 0.8, 'pot'], [0.25, 0.48, 0.12, 0.8, 'pot'], [0, 0.88, -0.02, 0.8, 'pot'], [0, 1.26, -0.14, 0.7, 'pot']], info: 'Três degraus e quatro vasos para encher de verde.' }, (k) => {
  const W = k.c1, pot = (x, y, z, s) => k.lathe([[0.001, 0], [0.07 * s, 0], [0.075 * s, 0.015], [0.1 * s, 0.14 * s], [0.112 * s, 0.15 * s], [0.112 * s, 0.17 * s], [0.095 * s, 0.17 * s], [0.09 * s, 0.155 * s]], x, y, z, k.c2, 16);
  for (const s of [-1, 1]) { k.box(0.035, 1.34, 0.05, s * 0.43, 0.64, -0.06, W, RX(-0.2)); k.box(0.035, 1.25, 0.04, s * 0.43, 0.62, -0.21, tone(W, 0.9), RX(0.06)); }
  [[0.3, 0.12, 0.3], [0.7, -0.02, 0.26], [1.08, -0.14, 0.22]].forEach(([y, z, d]) => k.box(0.9, 0.028, d, 0, y, z, tone(W, 1.06)));
  pot(-0.25, 0.315, 0.12, 1); pot(0.25, 0.315, 0.12, 1); pot(0, 0.715, -0.02, 1); pot(0, 1.095, -0.14, 0.9);
});
run();
