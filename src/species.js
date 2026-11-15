import * as THREE from 'three';
import { Builder } from './builder.js';
import { T, RX, RY, RZ, S, mul, frame, col, mixc, shade, jitterc, bez, polyAt, lerp, clamp, TAU, mulberry } from './util.js';
import { G, leaf, leavesAlong, basalLeaves, fanLeaf, mkStem, head, floretBall, sprout, habitStems, habitBush, habitSpike, habitCascade, habitTree, habitClimber } from './parts.js';
import { makePlantMaterial } from './plantmat.js';
import { moreSpecies, rareSpecies, LOVES } from './species2.js';

const V3 = THREE.Vector3;
const W = col(0xffffff);
const YEL = { type: 'dome', r: 0.012, h: 0.007, cols: [col(0xd9900f), col(0xf5c628), col(0xf9dc55)] };

// ---------- head specs ----------
const H = {
  daisy: { sepals: { n: 8, L: 0.012, W: 0.006 }, layers: [
    { n: 17, L: 0.05, W: 0.013, a: 0.7, b: 0.4, tilt: 1.42, tiltC: 0.2, curl: 0.2, cup: 0.5, cols: [col(0xf1eedd), W, W], nu: 4, nv: 2 },
    { n: 15, L: 0.045, W: 0.013, a: 0.7, b: 0.4, tilt: 1.3, tiltC: 0.15, curl: 0.15, cup: 0.5, cols: [col(0xeeeadb), W, W], nu: 4, nv: 2 }],
    center: { ...YEL, r: 0.016, h: 0.009 } },
  tulip: (c0, c1, c2) => ({ layers: [
    { n: 3, L: 0.075, W: 0.058, a: 1.05, b: 0.6, tilt: 0.42, tiltC: 0.3, curl: -0.6, curlC: -0.78, cup: 0.95, r: 0.006, cols: [c0, c1, c2], closedScale: 0.7, vein: 0.2 },
    { n: 3, L: 0.072, W: 0.056, a: 1.05, b: 0.6, tilt: 0.34, tiltC: 0.25, curl: -0.58, curlC: -0.75, cup: 0.95, r: 0.004, cols: [c0, c1, c2], closedScale: 0.7, vein: 0.2 }] }),
  sunflower: { sepals: { n: 13, L: 0.05, W: 0.03, tilt: 1.5 }, layers: [
    { n: 21, L: 0.115, W: 0.034, a: 0.8, b: 0.6, tilt: 1.45, tiltC: 0.4, curl: 0.25, cup: 0.6, r: 0.07, cols: [col(0xe89a0c), col(0xf8c21c), col(0xffd93e)], nu: 4, nv: 2, tj: 0.1 },
    { n: 21, L: 0.1, W: 0.032, a: 0.8, b: 0.6, tilt: 1.3, tiltC: 0.3, curl: 0.2, cup: 0.6, r: 0.066, cols: [col(0xe89a0c), col(0xf5b915), col(0xffd53a)], nu: 4, nv: 2, tj: 0.1 }],
    center: { type: 'dome', r: 0.078, h: 0.022, y: 0.004, cols: [col(0x7a4a14), col(0x3a2208), col(0x6b5a1e)], seg: 16 } },
  rose: (cIn, cOut, tip) => ({ sepals: { n: 5, L: 0.03, W: 0.011 }, layers: [
    { n: 24, golden: true, L: [0.024, 0.055], W: [0.024, 0.062], a: 1.35, b: 0.48, tilt: [0.04, 1.2], tiltC: [0.02, 0.22], curl: [-0.6, 0.85], curlC: [-0.7, -0.5], cup: [1.4, 0.45], cupC: 1.2,
      r: [0.001, 0.009], y: [0.014, 0], cols: [shade(cIn, 0.8), cIn, mixc(cIn, tip, 0.5)], cols2: [shade(cOut, 0.9), cOut, tip], closedScale: 0.6, vein: 0.06 }] }),
  peony: (c0, c1) => ({ sepals: { n: 5, L: 0.03, W: 0.02 }, layers: [
    { n: 38, golden: true, L: [0.026, 0.07], W: [0.026, 0.07], a: 1.4, b: 0.42, tilt: [0.08, 1.3], tiltC: [0.02, 0.2], curl: [-0.7, 0.25], curlC: -0.8, cup: [1.3, 0.6], ruffle: 0.22, rf: 3,
      r: [0.001, 0.01], y: [0.02, 0], cols: [c0, mixc(c0, c1, 0.4), c1], cols2: [mixc(c0, c1, 0.5), c1, mixc(c1, W, 0.5)], closedScale: 0.55 }] }),
  dahlia: (c0, c1) => ({ sepals: { n: 8, L: 0.02, W: 0.01 }, layers: [
    { n: 58, golden: true, L: [0.018, 0.062], W: [0.011, 0.024], a: 0.95, b: 0.85, tilt: [0.06, 1.55], tiltC: [0.02, 0.3], curl: [-0.5, 0.15], curlC: -0.5, cup: [1.6, 0.9],
      r: [0.001, 0.006], y: [0.016, -0.004], cols: [shade(c0, 0.85), c0, c1], cols2: [c0, mixc(c0, c1, 0.5), mixc(c1, W, 0.3)], nu: 4, nv: 2, closedScale: 0.5 }] }),
  marigold: (c0, c1) => ({ sepals: { n: 6, L: 0.018, W: 0.012 }, layers: [
    { n: 34, golden: true, L: [0.012, 0.032], W: [0.014, 0.032], a: 1.5, b: 0.4, tilt: [0.05, 1.35], tiltC: [0.02, 0.2], curl: [-0.4, 0.3], cup: [1.0, 0.3], ruffle: 0.4, rf: 3,
      r: [0.001, 0.006], y: [0.012, 0], cols: [shade(c0, 0.85), c0, c1], nu: 4, nv: 3, closedScale: 0.5 }] }),
  zinnia: (c0, c1) => ({ sepals: { n: 8, L: 0.014, W: 0.01 }, layers: [
    { n: 14, L: 0.042, W: 0.02, a: 1.0, b: 0.5, tilt: 1.45, tiltC: 0.2, curl: 0.15, cup: 0.4, cols: [shade(c0, 0.85), c0, c1], nu: 4, nv: 2 },
    { n: 12, L: 0.032, W: 0.018, a: 1.0, b: 0.5, tilt: 1.25, tiltC: 0.15, curl: 0.1, cup: 0.4, y: 0.003, cols: [shade(c0, 0.85), c0, c1], nu: 4, nv: 2 },
    { n: 9, L: 0.022, W: 0.014, a: 1.0, b: 0.5, tilt: 1.0, tiltC: 0.1, curl: 0.1, cup: 0.5, y: 0.006, cols: [c0, c0, c1], nu: 3, nv: 2 }],
    center: { ...YEL, r: 0.009, h: 0.008, y: 0.008 } }),
  cosmos: (c0, c1) => ({ sepals: { n: 8, L: 0.012, W: 0.005 }, layers: [
    { n: 8, L: 0.048, W: 0.032, a: 1.5, b: 0.5, tilt: 1.35, tiltC: 0.2, curl: 0.1, cup: 0.35, notch: 0.12, ruffle: 0.08, rf: 3, cols: [shade(c0, 0.8), c0, c1], vein: 0.2 }],
    center: { ...YEL, r: 0.009, h: 0.006 } }),
  poppy: { layers: [
    { n: 4, L: 0.06, W: 0.078, a: 1.5, b: 0.42, tilt: 1.0, tiltC: 0.15, curl: -0.35, curlC: -0.7, cup: 0.7, ruffle: 0.28, rf: 2.5, cols: [col(0x1c0d12), col(0xdc2a18), col(0xf04a26)], closedScale: 0.5 },
    { n: 2, L: 0.055, W: 0.07, a: 1.5, b: 0.42, tilt: 0.8, tiltC: 0.1, curl: -0.4, curlC: -0.7, cup: 0.8, ruffle: 0.28, rf: 2.5, cols: [col(0x1c0d12), col(0xd8281a), col(0xee4424)], closedScale: 0.5 }],
    center: { type: 'dome', r: 0.01, h: 0.012, y: 0.006, cols: [col(0x56633a), col(0x6f7d48), col(0x3d4526)], seg: 8,
      stamens: { n: 16, len: 0.016, spread: 0.9, c: col(0x2a1c22), tip: col(0x1a1216), tipR: 0.0028 } } },
  pansy: (c0, c1, eye) => ({ layers: [
    { n: 2, L: 0.036, W: 0.046, a: 1.5, b: 0.4, tilt: 1.3, tiltC: 0.3, cup: 0.15, azList: [-0.55, 0.55], azStep: 0, jit: 0, cols: [shade(c0, 0.7), c0, c1], vein: 0.25 },
    { n: 3, L: 0.036, W: 0.048, a: 1.5, b: 0.4, tilt: 1.42, tiltC: 0.3, cup: 0.15, azList: [-1.9, 1.9, Math.PI], jit: 0, cols: [eye, mixc(eye, c0, 0.75), c1], vein: 0.25 }],
    center: { ...YEL, r: 0.005, h: 0.004 } }),
  lily: (c0, c1, throat) => ({ layers: [
    { n: 3, L: 0.095, W: 0.036, a: 0.9, b: 0.7, tilt: 0.78, tiltC: 0.12, curl: 1.4, curlC: -0.2, curlPow: 2, cup: 0.7, cols: [throat, c0, c1], vein: 0.3, closedScale: 0.75 },
    { n: 3, L: 0.09, W: 0.03, a: 0.9, b: 0.7, tilt: 0.85, tiltC: 0.1, curl: 1.5, curlC: -0.2, curlPow: 2, cup: 0.7, cols: [throat, c0, c1], vein: 0.3, closedScale: 0.75 }],
    center: { stamens: { n: 6, len: 0.065, spread: 0.45, c: col(0xcfe0a0), tip: col(0xb5551a), tipR: 0.005 } } }),
  hibiscus: (c0, c1, eye) => ({ sepals: { n: 5, L: 0.025, W: 0.012 }, layers: [
    { n: 5, L: 0.075, W: 0.08, a: 1.4, b: 0.42, tilt: 1.2, tiltC: 0.12, curl: 0.35, curlC: -0.5, cup: 0.3, ruffle: 0.18, rf: 3, twist: 0.3, cols: [eye, c0, c1], vein: 0.22, closedScale: 0.6 }],
    center: { type: 'column', L: 0.075, cols: [c0, col(0xd01838)], dots: col(0xf7d24a) } }),
  daffodil: { layers: [
    { n: 3, L: 0.042, W: 0.03, a: 1.05, b: 0.6, tilt: 1.42, tiltC: 0.3, curl: 0.1, cup: 0.35, cols: [col(0xf3d94e), col(0xfbe672), col(0xfff3a6)] },
    { n: 3, L: 0.042, W: 0.03, a: 1.05, b: 0.6, tilt: 1.5, tiltC: 0.3, curl: 0.1, cup: 0.35, cols: [col(0xf3d94e), col(0xfbe672), col(0xfff3a6)] }],
    center: { type: 'trumpet', L: 0.032, r0: 0.01, r1: 0.019, cols: [col(0xf2b21c), col(0xf58a12)], ruffle: 0.12, rf: 7 } },
  azalea: (c0, c1) => ({ layers: [
    { n: 5, L: 0.03, W: 0.026, a: 1.3, b: 0.5, tilt: 1.05, tiltC: 0.15, curl: 0.3, cup: 0.4, ruffle: 0.15, cols: [shade(c0, 0.75), c0, c1], nu: 3, nv: 2 }],
    center: { stamens: { n: 5, len: 0.028, spread: 0.3, c: c1, tip: col(0x7a2a4a), tipR: 0.0025 } } }),
  camellia: (c0, c1) => ({ sepals: { n: 5, L: 0.02, W: 0.014 }, layers: [
    { n: 26, golden: true, L: [0.018, 0.048], W: [0.02, 0.05], a: 1.4, b: 0.45, tilt: [0.08, 1.35], tiltC: [0.02, 0.2], curl: [-0.5, 0.2], cup: [1.2, 0.35],
      r: [0.001, 0.007], y: [0.012, 0], cols: [shade(c0, 0.9), c0, c1], nu: 4, nv: 3, closedScale: 0.55 }],
    center: { ...YEL, r: 0.005, h: 0.006, y: 0.012 } }),
  waterlily: (c0, c1) => ({ layers: [
    { n: 26, golden: true, L: [0.03, 0.075], W: [0.012, 0.03], a: 0.9, b: 0.75, tilt: [0.25, 1.3], tiltC: [0.05, 0.3], curl: [-0.3, -0.2], cup: [1.2, 0.8],
      r: [0.006, 0.012], y: [0.01, 0], cols: [mixc(c0, W, 0.3), c0, c1], cols2: [W, mixc(c0, W, 0.6), mixc(c1, W, 0.5)], nu: 4, nv: 2, closedScale: 0.6 }],
    center: { type: 'dome', r: 0.012, h: 0.008, y: 0.008, cols: [col(0xe8a818), col(0xf7cf3a), col(0xf9dc55)], stamens: { n: 14, len: 0.02, spread: 0.6, c: col(0xf2c230), tip: col(0xf7d85a), tipR: 0.003 } } }),
  lotus: (c0, c1) => ({ layers: [
    { n: 18, golden: true, L: [0.06, 0.11], W: [0.04, 0.065], a: 1.0, b: 0.62, tilt: [0.2, 1.15], tiltC: [0.04, 0.2], curl: [-0.5, -0.25], curlC: -0.7, cup: [1.3, 0.9],
      r: [0.012, 0.02], y: [0.012, 0], cols: [col(0xfff6ee), c0, c1], cols2: [W, mixc(c0, W, 0.4), c1], closedScale: 0.7, vein: 0.2 }],
    center: { type: 'dome', r: 0.022, h: 0.016, y: 0.012, cols: [col(0xb8c44a), col(0xd9d24a), col(0xe9de62)], stamens: { n: 22, len: 0.028, spread: 0.85, c: col(0xf2c230), tip: col(0xf7e07a), tipR: 0.003 } } }),
  orchid: (c0, c1, lip) => ({ layers: [
    { n: 3, L: 0.036, W: 0.02, a: 0.9, b: 0.6, tilt: 1.4, tiltC: 0.3, cup: 0.2, jit: 0, azList: [0, 2.35, -2.35], azStep: 0, cols: [mixc(c0, lip, 0.2), c0, c1], nu: 3, nv: 2 },
    { n: 2, L: 0.04, W: 0.046, a: 1.3, b: 0.42, tilt: 1.45, tiltC: 0.3, cup: 0.15, jit: 0, azList: [-1.2, 1.2], azStep: 0, cols: [mixc(c0, lip, 0.25), c0, c1], nu: 4, nv: 3 },
    { n: 1, L: 0.022, W: 0.022, a: 1.2, b: 0.5, tilt: 1.0, tiltC: 0.3, cup: 1.2, curl: -0.6, jit: 0, azList: [Math.PI], cols: [col(0xf7d24a), lip, shade(lip, 0.85)], nu: 3, nv: 2 }],
    center: { type: 'dome', r: 0.004, h: 0.005, y: 0.004, cols: [col(0xf7e9a0), W], seg: 5 } }),
  succulent: (c0, c1, tip) => ({ layers: [
    { n: 34, golden: true, L: [0.014, 0.06], W: [0.012, 0.036], a: 1.25, b: 0.7, tilt: [0.12, 1.28], tiltC: [0.12, 1.28], curl: [-0.5, -0.2], curlC: [-0.5, -0.2], cup: [1.0, 0.7],
      r: [0.001, 0.008], y: [0.02, 0], cols: [shade(c0, 0.8), c0, mixc(c1, tip, 0.6)], cols2: [shade(c0, 0.75), c1, tip], nu: 4, nv: 3, closedScale: 1, vein: 0.05 }] }),
  cactusFlower: (c0, c1) => ({ layers: [
    { n: 12, L: 0.04, W: 0.016, a: 1.0, b: 0.7, tilt: 1.15, tiltC: 0.1, curl: 0.3, cup: 0.6, cols: [mixc(c0, W, 0.3), c0, c1], nu: 3, nv: 2 },
    { n: 10, L: 0.034, W: 0.015, a: 1.0, b: 0.7, tilt: 0.8, tiltC: 0.1, curl: 0.2, cup: 0.6, cols: [mixc(c0, W, 0.4), c0, c1], nu: 3, nv: 2 }],
    center: { stamens: { n: 12, len: 0.018, spread: 0.5, c: col(0xf7e07a), tip: col(0xf5c628), tipR: 0.003 } } }),
  small5: (c0, c1, eye) => ({ layers: [
    { n: 5, L: 0.02, W: 0.016, a: 1.3, b: 0.5, tilt: 1.3, tiltC: 0.2, cup: 0.3, cols: [eye ?? shade(c0, 0.8), c0, c1], nu: 3, nv: 2 }],
    center: { type: 'dome', r: 0.003, h: 0.003, cols: [col(0xf5c628), col(0xf9dc55)], seg: 5 } }),
};

const petunia = (c0, c1, throat) => (b, M, rng, open) => {
  const o = lerp(0.35, 1, open), s = 1 + rng.range(-0.1, 0.1);
  const prof = [[0.004, 0], [0.006, 0.02], [0.012 * o, 0.034], [0.03 * o, 0.043], [0.041 * o, 0.045]].map(([r, y]) => [r * s, y * s]);
  const c = new THREE.Color();
  b.lathe(M, prof, null, null, 15, (t, cc) => { if (t < 0.5) cc.copy(throat).lerp(c0, t * 2); else cc.copy(c0).lerp(c1, t * 2 - 1); }, 0.1, 5);
};
const smallFlower = (spec, k = 1) => (b, M, rng, open) => head(b, M, rng, spec, open, k);

// rose leaflets: 5-leaflet compound look via fan
const roseLeaf = { L: 0.055, W: 0.034, c: col(0x2f6a36), n: 3, tilt: 1.0, a: 0.85, b: 0.7, fold: 0.3 };

// ---------- catalogue ----------
// spots: bed (ground), pot, hang (hanging basket), window (window box), pond, tree, arch
const defs = [];
const add = (d) => defs.push(d);

add({ id: 'margarida', name: 'Margarida', lvl: 1, price: 8, grow: 50, gift: 6, spots: ['bed', 'pot', 'window'], h: 0.4,
  info: 'Simples e alegre, cresce rapidinho.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [6, 8], H: 0.34, lean: 0.22, spread: 0.09, stemR: 0.003, basal: { n: 12, L: 0.13, W: 0.04, a: 1.3, b: 0.7, tilt: 1.0 }, leaf: { n: 2, L: 0.05, W: 0.014, tilt: 0.7 }, head: H.daisy }, g, o) });

add({ id: 'tagetes', name: 'Cravo-de-defunto', lvl: 1, price: 10, grow: 60, gift: 7, spots: ['bed', 'pot', 'window'], h: 0.32,
  info: 'Pompons alaranjados que espantam pragas.',
  build: (b, r, g, o) => habitBush(b, r, { R: 0.15, H: 0.24, branches: 9, heads: 8, stalk: 0.12, leaf: { n: 8, L: 0.05, W: 0.012, c: col(0x3f7d3a), tilt: 1.1 },
    head: (rr) => rr() < 0.5 ? H.marigold(col(0xf28a0c), col(0xf8b63a)) : H.marigold(col(0xf5b21a), col(0xfcd34a)), headK: 1.25 }, g, o) });

const tulipDefs = [
  ['tulipa_vermelha', 'Tulipa vermelha', 1, 12, [0xf0c63a, 0xd42028, 0xe8483a]],
  ['tulipa_amarela', 'Tulipa amarela', 2, 14, [0xd9e06a, 0xf7cf1e, 0xfbe45a]],
  ['tulipa_rosa', 'Tulipa rosa', 3, 16, [0xfaf0e0, 0xf08ab0, 0xf7b4cc]],
  ['tulipa_roxa', 'Tulipa roxa', 5, 22, [0xe9d8f0, 0x7a3fa8, 0x9a5fc8]],
];
for (const [id, name, lvl, price, c] of tulipDefs) add({ id, name, lvl, price, grow: 70, gift: Math.round(price * 0.7), spots: ['bed', 'pot', 'window'], h: 0.45,
  info: 'Elegante, de pétalas em taça.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [5, 6], H: 0.4, lean: 0.12, spread: 0.1, stemR: 0.0045, stemC: col(0x7aa860),
    basal: { n: 9, L: 0.26, W: 0.055, a: 0.75, b: 0.6, tilt: 0.3, curl: 0.55, fold: 0.5, c: col(0x5f9a6a), r: 0.02 }, head: H.tulip(col(c[0]), col(c[1]), col(c[2])) }, g, o) });

add({ id: 'amor_perfeito', name: 'Amor-perfeito', lvl: 2, price: 12, grow: 65, gift: 8, spots: ['bed', 'pot', 'window', 'hang'], h: 0.2,
  info: 'Carinhas coloridas que adoram sombra fresca.',
  build: (b, r, g, o) => {
    const pal = [[0x6a2fa0, 0xb07ad6, 0x2a0f3a], [0xf7c81e, 0xfbe36a, 0x4a1a10], [0xf4f0ff, 0xc9b4f0, 0x4b1f7a], [0xe8641c, 0xf7a43a, 0x3a1208]];
    habitBush(b, r, { R: 0.14, H: 0.13, branches: 9, heads: 9, stalk: 0.25, headUp: 0.25, leaf: { n: 7, L: 0.045, W: 0.03, c: col(0x3f8a3f), a: 0.9, b: 0.6, tilt: 1.1 },
      head: (rr) => { const p = rr.pick(pal); return H.pansy(col(p[0]), col(p[1]), col(p[2])); }, headK: 1.15 }, g, o);
  } });

add({ id: 'lavanda', name: 'Lavanda', lvl: 2, price: 15, grow: 80, gift: 10, spots: ['bed', 'pot'], h: 0.55,
  info: 'Perfumada, atrai abelhas e borboletas.',
  build: (b, r, g, o) => {
    basalLeaves(b, r, { n: Math.round(40 * g), L: 0.16 * g, W: 0.012, c: col(0x8aa58c), tip: col(0xb8c9b0), tilt: 0.55, curl: 0.3, fold: 0.2, a: 0.8, b: 0.9 });
    habitSpike(b, r, { stems: [16, 20], H: 0.5, lean: 0.4, stemC: col(0x8fae82), stemR: 0.0025, florets: 22, from: 0.68, type: 'card', fs: 0.011, off: 0.004, whorl: 1.3, taper: 0.4,
      cols: [col(0x7658c2), col(0x9d82e6)], bud: col(0x8f96b8) }, g, o);
  } });

add({ id: 'petunia', name: 'Petúnia', lvl: 2, price: 14, grow: 70, gift: 9, spots: ['hang', 'window', 'pot'], h: 0.25,
  info: 'Cai em cascata, perfeita para vasos suspensos.',
  build: (b, r, g, o) => {
    const pal = r.pick([[0x7a2fb0, 0xa85fd6, 0x2a0a4a], [0xe8408a, 0xf78ab8, 0x8a1048], [0xf4f0ff, 0xffffff, 0xd9c84a]]);
    habitCascade(b, r, { stems: 13, L: 0.36, up: 0.45, out: 0.75, drop: 1.0, leaf: { n: 9, L: 0.04, W: 0.022, c: col(0x4a9440), a: 0.9, b: 0.65 },
      flower: { per: 3, make: petunia(col(pal[0]), col(pal[1]), col(pal[2])) } }, g, o);
  } });

add({ id: 'suculenta', name: 'Suculenta', lvl: 2, price: 16, grow: 90, gift: 11, spots: ['pot', 'window'], h: 0.14, thirst: 0.4,
  info: 'Roseta carnuda que quase não pede água.',
  build: (b, r, g, o) => {
    const sp = H.succulent(col(0x6fa58c), col(0x9ccab4), col(0xe890a4));
    head(b, T(0, 0.01, 0), r, sp, 1, 1.6 * g);
    for (let i = 0; i < 3; i++) { const a = i * 2.2 + r(); head(b, mul(T(Math.cos(a) * 0.1 * g, 0.005, Math.sin(a) * 0.1 * g), RX(0.25), RY(a)), r, sp, 1, 0.6 * g); }
    if (o > 0.2) for (let i = 0; i < 2; i++) {
      const pts = mkStem(r, 0.2, 0.09, i * 3 + r(), 0.05, 6);
      b.tube(null, pts, 0.003, 0.002, col(0xd88a8a), col(0xe8a08a), 4);
      for (let k = 0; k < 6; k++) { const { p, d } = polyAt(pts, 0.6 + k * 0.08); const s = 0.016 * lerp(0.5, 1, o);
        b.lathe(mul(frame(p, d), RY(k * 2.4), RX(1.9)), [[s * 0.2, 0], [s * 0.4, s * 0.5], [s * 0.5, s]], col(0xf08a5a), col(0xf7c84a), 5); }
    }
  } });

add({ id: 'geranio', name: 'Gerânio', lvl: 3, price: 18, grow: 85, gift: 12, spots: ['window', 'pot', 'hang', 'bed'], h: 0.34,
  info: 'Clássico das janelas, floresce o ano todo.',
  build: (b, r, g, o) => {
    const c = r.pick([[0xe0222f, 0xf04a4a], [0xf06a9a, 0xf7a0c0], [0xf2f2f2, 0xffffff]]).map(col);
    habitBush(b, r, { R: 0.17, H: 0.2, branches: 10, heads: 5, stalk: 0.45, headUp: 0.7, leaf: { n: 5, L: 0.06, W: 0.07, c: col(0x3d8a3a), a: 1.0, b: 0.32, fold: 0.15, curl: 0.3, tilt: 1.15 },
      head: { ball: { n: 16, r: 0.04, fs: 0.022, np: 5, cols: c, squash: 0.7, cover: 0.2 } } }, g, o);
  } });

add({ id: 'samambaia', name: 'Samambaia', lvl: 3, price: 20, grow: 95, gift: 13, spots: ['hang', 'pot'], h: 0.4, foliage: true,
  info: 'Folhagem farta que balança com a brisa.',
  build: (b, r, g) => habitCascade(b, r, { stems: 18, L: 0.5, up: 0.55, out: 0.85, drop: 1.1, upFall: 0.5, stemC: col(0x5a8a3a), stemR: 0.0025, frond: { pairs: 15, L: 0.07, wr: 0.3, c: col(0x4c9a3c) } }, g, -1) });

add({ id: 'cosmos', name: 'Cosmos', lvl: 3, price: 18, grow: 75, gift: 12, spots: ['bed', 'pot'], h: 0.65,
  info: 'Leve como o vento, em tons de rosa.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [7, 9], H: 0.6, lean: 0.3, spread: 0.08, stemR: 0.0025, wob: 0.09, leaf: { n: 8, L: 0.07, W: 0.005, tilt: 0.9, c: col(0x5a9a48), fold: 0 },
    head: (rr) => rr() < 0.6 ? H.cosmos(col(0xe2589c), col(0xf7a0cc)) : H.cosmos(col(0xf4d8e8), col(0xffffff)), headTilt: 0.35 }, g, o) });

add({ id: 'girassol', name: 'Girassol', lvl: 3, price: 22, grow: 110, gift: 16, spots: ['bed'], h: 1.6, fixedRot: true,
  info: 'Alto e radiante, sempre olhando o sol.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [2, 3], H: 1.5, lean: 0.06, spread: 0.2, stemR: 0.016, stemC: col(0x6a9a40), faceZ: true, wob: 0.03,
    leaf: { n: 9, L: 0.24, W: 0.19, a: 0.7, b: 0.75, tilt: 1.15, curl: 0.7, c: col(0x4a8a36), fold: 0.25, nu: 5, nv: 4, t0: 0.12, t1: 0.9 }, head: H.sunflower, headTilt: 1.15 }, g, o) });

add({ id: 'narciso', name: 'Narciso', lvl: 4, price: 22, grow: 80, gift: 14, spots: ['bed', 'pot', 'window'], h: 0.4,
  info: 'Trombetinhas douradas que anunciam a primavera.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [5, 7], H: 0.36, lean: 0.14, spread: 0.08, stemR: 0.004, basal: { n: 12, L: 0.3, W: 0.022, a: 0.7, b: 0.5, tilt: 0.25, curl: 0.5, fold: 0.3, c: col(0x5a9a5a) },
    head: H.daffodil, headTilt: 1.2 }, g, o) });

add({ id: 'manjericao', name: 'Manjericão', lvl: 4, price: 15, grow: 60, gift: 10, spots: ['pot', 'window', 'bed'], h: 0.3,
  info: 'Cheiroso e viçoso, bom de ter perto da cozinha.',
  build: (b, r, g, o) => {
    habitBush(b, r, { R: 0.15, H: 0.24, branches: 10, heads: 0, leaf: { n: 9, L: 0.055, W: 0.04, c: col(0x57a83c), a: 0.85, b: 0.6, fold: -0.25, cup: 0.5, curl: 0.5, tilt: 1.0 } }, g, -1);
    if (o > 0.2) habitSpike(b, r, { stems: [6, 7], H: 0.34, lean: 0.35, florets: 10, from: 0.75, type: 'card', fs: 0.009, cols: [W, col(0xf0e8ff)], stemC: col(0x6a9a4a) }, g, o);
  } });

add({ id: 'cacto', name: 'Cacto florido', lvl: 4, price: 24, grow: 120, gift: 17, spots: ['pot', 'window'], h: 0.3, thirst: 0.35,
  info: 'Espinhudo por fora, uma flor delicada no topo.',
  build: (b, r, g, o) => {
    const body = (M, R, Hh, top) => {
      const prof = []; for (let i = 0; i <= 8; i++) { const t = i / 8; prof.push([R * Math.pow(Math.sin(Math.PI * (0.08 + t * 0.92) * 0.5 + (t > 0.6 ? (t - 0.6) * 1.5 : 0)), 0.7) * (t > 0.85 ? (1 - t) / 0.15 * 0.6 + 0.4 : 1) * (0.75 + 0.25 * Math.sin(t * 3.1)), Hh * t]); }
      prof.push([0.001, Hh * 1.005]);
      b.lathe(M, prof, col(0x3a7a44), col(0x5fa35a), 40, null, 0.09, 10);
      for (let k = 0; k < 10; k++) for (let j = 1; j < 6; j++) { const t = j / 6.2, a = ((k + 0.25) / 10) * TAU, pr = prof[Math.round(t * 8)];
        b.blob(mul(M, T(Math.cos(a) * pr[0] * 1.07, pr[1], Math.sin(a) * pr[0] * 1.07)), 0.006, 0.006, col(0xf4eed2), col(0xfffbe8), 4, 3); }
      if (top && o > 0.02) head(b, mul(M, T(0, Hh * 0.98, 0)), r, H.cactusFlower(col(0xf06aa8), col(0xf7a6cc)), o, 1.5);
    };
    body(T(0, 0, 0), 0.085 * g, 0.2 * g, true);
    if (g > 0.5) { body(mul(T(0.085 * g, 0.03, 0.02), RZ(-0.5)), 0.04 * g, 0.09 * g, o > 0.8); body(mul(T(-0.07 * g, 0.02, -0.04), RZ(0.6)), 0.032 * g, 0.07 * g, false); }
  } });

add({ id: 'hera', name: 'Hera', lvl: 4, price: 18, grow: 85, gift: 12, spots: ['hang', 'window', 'pot'], h: 0.3, foliage: true,
  info: 'Verde pendente que veste qualquer cantinho.',
  build: (b, r, g) => habitCascade(b, r, { stems: 12, L: 0.62, up: 0.3, out: 0.6, drop: 1.6, upFall: 0.3, stemC: col(0x6a7a3a), leaf: { n: 15, L: 0.05, W: 0.05, c: col(0x3a8a48), tip: col(0xdce8a0), tipMix: 0.45, a: 0.7, b: 0.5, fold: 0.15, curl: 0.2 } }, g, -1) });

add({ id: 'papoula', name: 'Papoula', lvl: 5, price: 24, grow: 85, gift: 16, spots: ['bed', 'pot'], h: 0.5,
  info: 'Pétalas de seda vermelha, delicadas ao vento.',
  build: (b, r, g, o) => habitStems(b, r, { stems: [6, 8], H: 0.46, lean: 0.28, spread: 0.08, stemR: 0.0028, stemC: col(0x7a9a6a), wob: 0.1,
    basal: { n: 12, L: 0.16, W: 0.045, a: 0.8, b: 0.9, tilt: 0.8, c: col(0x6a9a78), ruffle: 0.3, rf: 4, nv: 4 }, head: H.poppy, headTilt: 0.3, headK: 1.1 }, g, o) });

add({ id: 'zinia', name: 'Zínia', lvl: 5, price: 22, grow: 80, gift: 15, spots: ['bed', 'pot', 'window'], h: 0.45,
  info: 'Colorida e resistente, a favorita das borboletas.',
  build: (b, r, g, o) => {
    const pal = [[0xe02a6a, 0xf46a9a], [0xf2701a, 0xf7a23a], [0xf7c81e, 0xfbe36a], [0xd8284a, 0xf0506a]];
    habitStems(b, r, { stems: [6, 8], H: 0.42, lean: 0.25, spread: 0.08, stemR: 0.0035, leaf: { n: 5, L: 0.08, W: 0.035, tilt: 1.0, c: col(0x4a8a3c), azStep: Math.PI / 2 },
      head: (rr) => { const p = rr.pick(pal); return H.zinnia(col(p[0]), col(p[1])); }, headK: 1.15 }, g, o);
  } });

const roseDefs = [
  ['rosa_vermelha', 'Rosa vermelha', 5, 30, 0x9a0f22, 0xc8182e, 0xe03a48],
  ['rosa_rosa', 'Rosa cor-de-rosa', 6, 32, 0xe86a96, 0xf59ab8, 0xfcd0de],
  ['rosa_branca', 'Rosa branca', 7, 34, 0xf2e6c8, 0xfaf4e6, 0xffffff],
  ['rosa_amarela', 'Rosa amarela', 8, 36, 0xf0b21a, 0xf8d24a, 0xfdeea0],
  ['rosa_pessego', 'Rosa pêssego', 10, 42, 0xf08a5a, 0xf8b48a, 0xfde0c8],
];
for (const [id, name, lvl, price, a, c, t] of roseDefs) add({ id, name, lvl, price, grow: 130, gift: Math.round(price * 0.72), spots: ['bed', 'pot'], h: 0.75,
  info: 'A rainha do jardim, de perfume inesquecível.',
  build: (b, r, g, o) => habitBush(b, r, { R: 0.3, H: 0.55, branches: 12, heads: 9, stalk: 0.1, splay: 0.85, wood: col(0x4a5a34), stemR: 0.007, fill: 46,
    leaf: { n: 13, L: 0.075, W: 0.046, c: col(0x2c6634), a: 0.85, b: 0.7, fold: 0.3, tilt: 1.1 }, head: H.rose(col(a), col(c), col(t)), headK: 1.25, headUp: 0.5 }, g, o) });

add({ id: 'lirio', name: 'Lírio', lvl: 6, price: 34, grow: 120, gift: 24, spots: ['bed', 'pot'], h: 0.8,
  info: 'Trombetas recurvadas com perfume doce.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xffffff, 0xfff8f0, 0xd9f0b0], [0xf48fb1, 0xfce4ec, 0xf7f0c0], [0xf7941e, 0xfbc05a, 0xf7e08a]]);
    habitStems(b, r, { stems: [3, 4], H: 0.72, lean: 0.14, spread: 0.07, stemR: 0.006, leaf: { n: 22, L: 0.11, W: 0.018, tilt: 0.95, c: col(0x3f8a44), t0: 0.08, t1: 0.82, taper: 0.5 },
      head: H.lily(col(p[0]), col(p[1]), col(p[2])), headsPer: 3, pedicel: 0.07, headTilt: 1.05, headK: 1.05 }, g, o);
  } });

add({ id: 'costela', name: 'Costela-de-adão', lvl: 6, price: 38, grow: 140, gift: 26, spots: ['pot'], h: 0.75, foliage: true,
  info: 'Folhas enormes e recortadas, puro charme tropical.',
  build: (b, r, g) => {
    const n = Math.round(4 + 5 * g);
    for (let i = 0; i < n; i++) {
      const az = i * 2.4 + r.range(-0.2, 0.2), L = 0.5 * g * r.range(0.65, 1.1), out = r.range(0.3, 0.75);
      const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.3, L * 0.8, Math.sin(az) * L * out * 0.3), new V3(Math.cos(az) * L * out, L * (1 - out * 0.3), Math.sin(az) * L * out), 6);
      b.tube(null, pts, 0.007, 0.004, col(0x3f7a3a), col(0x4c8a44), 5);
      const p = pts[6], s = 0.3 * g * r.range(0.7, 1.1), c = col(0x2a6a38);
      const M = mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(1.0 + r.range(-0.2, 0.3)));
      leaf(b, M, r, { L: s, W: s * 0.2, c, a: 0.8, b: 0.6, fold: 0.3, curl: 0.5, nu: 5 });
      for (let k = 0; k < 6; k++) { const t = 0.08 + k * 0.14, ll = s * 0.52 * Math.sin(Math.PI * Math.pow(t + 0.12, 0.8)) + s * 0.1;
        for (const sd of [-1, 1]) leaf(b, mul(M, T(0, s * t, 0), RZ(sd * (1.15 - t * 0.5)), RX(0.12)), r, { L: ll, W: s * 0.115, c, a: 0.5, b: 0.45, base: 0.9, fold: 0.1, curl: 0.25, nu: 3, vein: 0.15, tipMix: 0.1 }); }
    }
  } });

const hydDefs = [['hortensia_azul', 'Hortênsia azul', 7, 40, [0x5f82e6, 0x86a4f2, 0x9a8ae8, 0x7aa8f0]], ['hortensia_rosa', 'Hortênsia rosa', 8, 42, [0xf07ab0, 0xf7a4c8, 0xe86aa0, 0xf9c0d8]]];
for (const [id, name, lvl, price, cs] of hydDefs) add({ id, name, lvl, price, grow: 150, gift: Math.round(price * 0.72), spots: ['bed', 'pot'], h: 0.7,
  info: 'Buquês redondos que mudam de cor com a terra.',
  build: (b, r, g, o) => habitBush(b, r, { R: 0.36, H: 0.5, branches: 9, heads: 8, splay: 0.95, stalk: 0.05, leaf: { n: 8, L: 0.13, W: 0.09, c: col(0x3a8040), a: 0.8, b: 0.6, fold: 0.25, curl: 0.6, tilt: 1.15, nu: 4, nv: 3 },
    head: { ball: { n: 46, r: 0.095, fs: 0.034, cols: cs.map(col), squash: 0.75, cover: 0.35 } }, headUp: 0.6 }, g, o) });

add({ id: 'dalia', name: 'Dália', lvl: 7, price: 40, grow: 130, gift: 28, spots: ['bed', 'pot'], h: 0.7,
  info: 'Pétalas em espiral perfeita, obra de geometria.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xc8283e, 0xf58a5a], [0xe85a9a, 0xfbd0e0], [0xf2a01a, 0xfbe36a], [0x8a2a8a, 0xe8a0e0]]);
    habitBush(b, r, { R: 0.26, H: 0.55, branches: 8, heads: 5, stalk: 0.14, splay: 0.8, leaf: { n: 8, L: 0.1, W: 0.05, c: col(0x35763a), tilt: 1.1 }, head: H.dahlia(col(p[0]), col(p[1])), headK: 1.5, headUp: 0.35 }, g, o);
  } });

add({ id: 'bromelia', name: 'Bromélia', lvl: 8, price: 45, grow: 150, gift: 31, spots: ['pot', 'bed'], h: 0.5, thirst: 0.6,
  info: 'Joia das matas brasileiras, com espiga vermelha.',
  build: (b, r, g, o) => {
    basalLeaves(b, r, { n: Math.round(10 + 10 * g), L: 0.34 * g, W: 0.05, a: 0.55, b: 0.45, tilt: 0.75, curl: 1.0, curlPow: 2, fold: 0.5, c: col(0x3f8a50), tip: col(0x8ac070), nu: 5, base: 0.5, r: 0.012 });
    if (o >= 0) {
      const Hh = 0.3 * g * lerp(0.5, 1, o);
      b.tube(null, [new V3(0, 0, 0), new V3(0, Hh * 0.5, 0), new V3(0, Hh, 0)], 0.008, 0.005, col(0xc8283a), col(0xe8323a), 5);
      head(b, T(0, Hh * 0.45, 0), r, { layers: [{ n: 20, golden: true, L: [0.07, 0.035], W: [0.03, 0.018], a: 0.8, b: 0.7, tilt: [0.75, 0.25], tiltC: [0.3, 0.1], curl: 0.3, cup: 0.9, y: [0, Hh * 0.6], r: 0.006,
        cols: [col(0xd81e3a), col(0xee3a44), col(0xf7b02a)], closedScale: 0.6, nu: 3, nv: 2 }] }, o, 1);
    }
  } });

add({ id: 'peonia', name: 'Peônia', lvl: 8, price: 48, grow: 160, gift: 34, spots: ['bed', 'pot'], h: 0.7,
  info: 'Nuvens de pétalas macias, puro romantismo.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xf28ab4, 0xfde0ea], [0xfbd0dc, 0xfff6f6], [0xd83a6a, 0xf58aa8]]);
    habitBush(b, r, { R: 0.3, H: 0.52, branches: 8, heads: 5, stalk: 0.1, splay: 0.85, leaf: { n: 9, L: 0.1, W: 0.04, c: col(0x2f6e3a), tilt: 1.1 }, leafTip: { n: 3, L: 0.09, W: 0.035, c: col(0x2f6e3a), spread: 1.6 },
      head: H.peony(col(p[0]), col(p[1])), headK: 1.45, headUp: 0.45 }, g, o);
  } });

add({ id: 'delfinio', name: 'Delfínio', lvl: 9, price: 46, grow: 140, gift: 32, spots: ['bed'], h: 1.0,
  info: 'Torres de flores azuis, altivas e elegantes.',
  build: (b, r, g, o) => habitSpike(b, r, { stems: [4, 5], H: 0.95, lean: 0.12, stemR: 0.006, florets: 26, from: 0.42, type: 'flower', fs: 0.03, off: 0.012, taper: 0.55,
    cols: [col(0x3a56d8), col(0x6a7af0)], bud: col(0x7a9a8a), eye: col(0xf4f0ff), basalFan: { count: 8, stalk: 0.22, n: 5, L: 0.11, W: 0.04, c: col(0x3f8a44), spread: 2.4 }, leaf: { n: 5, L: 0.07, W: 0.03, c: col(0x3f8a44) } }, g, o) });

add({ id: 'dedaleira', name: 'Dedaleira', lvl: 9, price: 44, grow: 140, gift: 31, spots: ['bed'], h: 1.0,
  info: 'Sininhos pintados em hastes altas.',
  build: (b, r, g, o) => habitSpike(b, r, { stems: [3, 4], H: 0.95, lean: 0.1, stemR: 0.006, florets: 22, from: 0.4, type: 'bell', fs: 0.05, off: 0.006, whorl: 0.55, taper: 0.5,
    cols: [col(0xd85aa8), col(0xf0a0d0)], bud: col(0x9ab88a), basal: { n: 12, L: 0.2, W: 0.075, a: 0.75, b: 0.65, tilt: 1.05, c: col(0x4a8a48) }, leaf: { n: 6, L: 0.1, W: 0.04, c: col(0x4a8a48) } }, g, o) });

add({ id: 'hibisco', name: 'Hibisco', lvl: 9, price: 50, grow: 160, gift: 35, spots: ['bed', 'pot'], h: 0.85,
  info: 'Flor tropical de um dia, sempre renovada.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xe2203e, 0xf4506a, 0x6a0a22], [0xf7a02a, 0xfbd05a, 0xc8201e], [0xf48ab4, 0xfcd0e0, 0xb81a4a]]);
    habitBush(b, r, { R: 0.34, H: 0.68, branches: 10, heads: 6, stalk: 0.04, fill: 44, wood: col(0x5a4a34), stemR: 0.008, leaf: { n: 10, L: 0.085, W: 0.06, c: col(0x23602e), a: 0.8, b: 0.6, tilt: 1.1 },
      head: H.hibiscus(col(p[0]), col(p[1]), col(p[2])), headK: 1.35, headUp: 0.15 }, g, o);
  } });

add({ id: 'copo_de_leite', name: 'Copo-de-leite', lvl: 10, price: 52, grow: 150, gift: 37, spots: ['bed', 'pot'], h: 0.65,
  info: 'Cálice branco de linhas puras.',
  build: (b, r, g, o) => {
    for (let i = 0; i < Math.round(5 + 4 * g); i++) {
      const az = i * 2.4, L = 0.34 * g * r.range(0.7, 1.1), out = r.range(0.25, 0.6);
      const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.2, L * 0.7, Math.sin(az) * L * out * 0.2), new V3(Math.cos(az) * L * out, L, Math.sin(az) * L * out), 5);
      b.tube(null, pts, 0.006, 0.004, col(0x4a8a4a), col(0x4a8a4a), 5);
      const p = pts[5];
      leaf(b, mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RX(0.8 + r() * 0.3)), r, { L: 0.24 * g, W: 0.13 * g, a: 0.6, b: 0.7, c: col(0x2f7a40), fold: 0.3, curl: 0.5, nu: 5, nv: 4 });
    }
    if (o >= 0) for (let i = 0; i < 4; i++) {
      const pts = mkStem(r, 0.55 * g * r.range(0.8, 1.05), 0.08, i * 2.1 + 1, 0.03, 6);
      b.tube(null, pts, 0.006, 0.005, col(0x5a9a50), col(0x6aa860), 5);
      const M = mul(tipFrame2(pts), RX(0.25)), op = lerp(0.35, 1, o), c = new THREE.Color();
      const prof = [[0.007, 0], [0.01, 0.035], [0.02 * op, 0.075], [0.04 * op, 0.105], [0.052 * op, 0.112]];
      b.lathe(mul(M, S(1, 1, 1.25)), prof, null, null, 12, (t, cc) => cc.copy(col(0xcfe6b0)).lerp(W, clamp(t * 2.5, 0, 1)), 0.0, 1);
      head(b, M, r, { layers: [], center: { type: 'spadix', L: 0.07, r: 0.007, cols: [col(0xf2b81e), col(0xf9d84a)] } }, o);
    }
  } });
function tipFrame2(pts) { const { p, d } = polyAt(pts, 1); return frame(p, d); }

add({ id: 'azaleia', name: 'Azaleia', lvl: 10, price: 50, grow: 160, gift: 35, spots: ['bed', 'pot'], h: 0.55,
  info: 'Arbusto que se cobre inteiro de flores.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xe0408a, 0xf78ab8], [0xf4f0f4, 0xffffff], [0xe8503a, 0xf79a7a]]);
    habitBush(b, r, { R: 0.34, H: 0.42, branches: 14, heads: 34, fill: 70, wood: col(0x5a4634), leaf: { n: 12, L: 0.05, W: 0.024, c: col(0x2c6634), tilt: 1.0 }, head: H.azalea(col(p[0]), col(p[1])), headK: 1.5, headUp: 0.5 }, g, o);
  } });

add({ id: 'orquidea', name: 'Orquídea', lvl: 11, price: 60, grow: 190, gift: 44, spots: ['pot', 'hang'], h: 0.6, thirst: 0.6,
  info: 'Rara e paciente; cada flor dura semanas.',
  build: (b, r, g, o) => {
    basalLeaves(b, r, { n: 6, L: 0.2 * g, W: 0.065, a: 0.7, b: 0.45, tilt: 1.05, curl: 0.5, fold: 0.5, c: col(0x2f7a3e), nu: 5, base: 0.6, r: 0.01 });
    if (o < 0) return;
    const p = r.pick([[0xffffff, 0xfdf4fa, 0xc2307a], [0xe86ab0, 0xf7b0d6, 0x9a1a5a], [0xf7e08a, 0xfdf4c0, 0xb8283a]]);
    for (let s = 0; s < 2; s++) {
      const az = s * 2.6 + r(), L = 0.55 * g;
      const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.1, L * 0.95, Math.sin(az) * L * 0.1), new V3(Math.cos(az) * L * 0.75, L * 0.7, Math.sin(az) * L * 0.75), 10);
      b.tube(null, pts, 0.004, 0.0025, col(0x5a7a44), col(0x6a8a4a), 4);
      for (let k = 0; k < 7; k++) {
        const t = 0.5 + k * 0.075, pp = polyAt(pts, t).p, sd = k % 2 ? 1 : -1;
        const dir = new V3(Math.cos(az + sd * 1.2) * 0.8, 0.25, Math.sin(az + sd * 1.2) * 0.8).normalize();
        const q = pp.clone().add(dir.clone().multiplyScalar(0.02));
        head(b, mul(frame(q, dir), RY(r() * 0.4)), r, H.orchid(col(p[0]), col(p[1]), col(p[2])), clamp(o * 1.5 - k * 0.07, 0, 1), 1.3);
      }
    }
  } });

add({ id: 'camelia', name: 'Camélia', lvl: 11, price: 58, grow: 180, gift: 42, spots: ['bed', 'pot'], h: 0.8,
  info: 'Flores de porcelana entre folhas brilhantes.',
  build: (b, r, g, o) => {
    const p = r.pick([[0xf07a9e, 0xf9b8cc], [0xfaf4f0, 0xffffff], [0xc81e3e, 0xe84a5e]]);
    habitBush(b, r, { R: 0.33, H: 0.66, branches: 11, heads: 9, fill: 50, wood: col(0x5a4634), stemR: 0.008, leaf: { n: 11, L: 0.075, W: 0.045, c: col(0x1f5a2c), a: 0.85, b: 0.65, tilt: 1.1 }, head: H.camellia(col(p[0]), col(p[1])), headK: 1.45, headUp: 0.3 }, g, o);
  } });

// pond
add({ id: 'ninfeia', name: 'Ninfeia', lvl: 6, price: 36, grow: 120, gift: 26, spots: ['pond'], h: 0.12, thirst: 0,
  info: 'Estrela branca que flutua sobre a água.',
  build: (b, r, g, o) => aquatic(b, r, g, o, H.waterlily(col(0xfbe0ec), col(0xf48ab0)), 0, 0.17, 1.25) });
add({ id: 'lotus', name: 'Lótus', lvl: 10, price: 56, grow: 170, gift: 40, spots: ['pond'], h: 0.5, thirst: 0,
  info: 'Nasce da lama e se abre imaculada.',
  build: (b, r, g, o) => aquatic(b, r, g, o, H.lotus(col(0xf9a8c4), col(0xe85a94)), 0.36, 0.21, 1.25) });

function aquatic(b, r, g, o, spec, rise, padR, k) {
  const n = Math.round(3 + 4 * g);
  for (let i = 0; i < n; i++) {
    const az = i * 2.4 + r(), d = (0.12 + 0.3 * Math.sqrt((i + 0.5) / n)) * (0.6 + 0.4 * g), s = padR * g * r.range(0.7, 1.15);
    const up = rise && i % 3 === 0 ? rise * 0.55 * g * r.range(0.6, 1) : 0;
    const px = Math.cos(az) * d, pz = Math.sin(az) * d;
    if (up) b.tube(null, [new V3(px, -0.1, pz), new V3(px, up * 0.5, pz), new V3(px, up, pz)], 0.005, 0.004, col(0x5a8a4a), col(0x5a8a4a), 4);
    const c = jitterc(col(0x3f8a48), r, 0.05);
    // round pad: fan of wedges with a notch
    const M = mul(T(px, up + 0.012 + i * 0.0015, pz), RY(r() * TAU));
    const seg = 14, st = b.n, c1 = mixc(c, G.light, 0.3);
    b.vert(0, up ? -0.02 : 0, 0, shade(c, 0.8), M);
    for (let j = 0; j <= seg; j++) { const a = 0.18 + (j / seg) * (TAU - 0.36), rr = s * (1 + 0.04 * Math.sin(a * 7));
      b.vert(Math.cos(a) * rr, up ? 0.02 : 0.003 * Math.sin(a * 5), Math.sin(a) * rr, j % 2 ? c : c1, M); }
    for (let j = 0; j < seg; j++) b.idx.push(st, st + j + 2, st + j + 1);
  }
  if (o >= 0) for (let i = 0; i < Math.round(1 + 2 * g); i++) {
    const az = i * 2.2 + 0.7, d = i === 0 ? 0 : 0.2;
    const y = rise ? rise * g * (i === 0 ? 1 : 0.7) : 0.02;
    if (rise) b.tube(null, [new V3(Math.cos(az) * d, -0.1, Math.sin(az) * d), new V3(Math.cos(az) * d, y * 0.5, Math.sin(az) * d + 0.01), new V3(Math.cos(az) * d, y, Math.sin(az) * d)], 0.006, 0.005, col(0x5a8a4a), col(0x6a9a54), 4);
    head(b, mul(T(Math.cos(az) * d, y, Math.sin(az) * d), RY(r() * 3)), r, spec, clamp(o - i * 0.1, 0, 1), k * (0.75 + 0.25 * g));
  }
}

// trees
const treeDefs = [
  { id: 'cerejeira', name: 'Cerejeira', lvl: 5, price: 80, gift: 45, info: 'Nuvem cor-de-rosa que chove pétalas.', petal: 0xf9c4d8,
    P: { H: 1.25, R: 1.25, trunkR: 0.085, limbs: 7, bark: col(0x5a3f38), foliage: 0.18, leaves: 700, leafCols: [col(0x5a9a44), col(0x7ab85a)], blossom: { n: 3200, size: 0.125, cols: [col(0xf9bcd2), col(0xfcd8e6), col(0xf6a4c2), col(0xffffff)], buds: [col(0xe888ae), col(0xd9708e)] } } },
  { id: 'limoeiro', name: 'Limoeiro', lvl: 7, price: 95, gift: 55, info: 'Flores perfumadas e limões amarelinhos.',
    P: { H: 0.95, R: 1.0, trunkR: 0.07, limbs: 7, bark: col(0x6a5a44), foliage: 1, leaves: 2800, leafSize: 0.15, leafCols: [col(0x2f7a38), col(0x3f8a40), col(0x256a30)], blossom: { n: 260, size: 0.075, cols: [W, col(0xfff8e8)] }, fruit: { n: 18, r: 0.045, tall: 1.25, c: col(0xf7d21e) } } },
  { id: 'ipe_amarelo', name: 'Ipê-amarelo', lvl: 9, price: 120, gift: 70, info: 'Símbolo do Brasil: ouro puro no inverno.', petal: 0xf7cf1e,
    P: { H: 1.5, R: 1.3, trunkR: 0.09, limbs: 8, bark: col(0x6a5a4a), foliage: 0.06, leaves: 900, leafCols: [col(0x4a8a3a), col(0x5a9a44)], blossom: { n: 3300, size: 0.125, cols: [col(0xf7cf1e), col(0xfbdc3a), col(0xf2b80f), col(0xfde86a)], buds: [col(0xd9a80f), col(0xb8c04a)] } } },
  { id: 'laranjeira', name: 'Laranjeira', lvl: 11, price: 130, gift: 76, info: 'Flor de laranjeira e frutos doces.',
    P: { H: 1.0, R: 1.1, trunkR: 0.075, limbs: 7, bark: col(0x5f4f3c), foliage: 1, leaves: 2900, leafSize: 0.15, leafCols: [col(0x256a30), col(0x2f7a38), col(0x1f5a2a)], blossom: { n: 240, size: 0.075, cols: [W] }, fruit: { n: 20, r: 0.055, tall: 1.0, c: col(0xf58a1e) } } },
  { id: 'jacaranda', name: 'Jacarandá', lvl: 13, price: 160, gift: 95, info: 'Copa lilás que tinge o chão de roxo.', petal: 0xa888ee,
    P: { H: 1.6, R: 1.45, trunkR: 0.09, limbs: 8, bark: col(0x5a4a40), foliage: 0.15, leaves: 900, leafCols: [col(0x5a9a44), col(0x6aa850)], blossom: { n: 3500, size: 0.125, cols: [col(0x9a7ae8), col(0xb89af2), col(0x8a6ad8), col(0xc8b4f6)], buds: [col(0x7a5ac8)] } } },
];
for (const t of treeDefs) add({ ...t, price: t.price, grow: 240, spots: ['tree'], h: 3.2, tree: true, thirst: 0.5,
  build: (b, r, g, o) => habitTree(b, r, t.P, g, o) });

// climbers (arch)
const roseClimb = H.rose(col(0xe85a8a), col(0xf58ab0), col(0xfcd0de));
const climbDefs = [
  { id: 'rosa_trepadeira', name: 'Rosa trepadeira', lvl: 6, price: 70, gift: 42, info: 'Cobre o arco de rosas miúdas.',
    P: { leaf: { n: 60, L: 0.06, W: 0.038, c: col(0x2c6634) }, flower: { n: 46, make: (b, p, r, o) => { const d = new V3(r.range(-0.6, 0.6), r.range(0.1, 1), r.range(-1, 1) > 0 ? 1 : -1).normalize(); head(b, frame(p.clone().add(d.clone().multiplyScalar(0.07)), d), r, roseClimb, o, 1.05); } } } },
  { id: 'glicinia', name: 'Glicínia', lvl: 8, price: 90, gift: 54, info: 'Cachos lilases que pendem como cortinas.',
    P: { leaf: { n: 70, L: 0.07, W: 0.025, c: col(0x4a9444) }, flower: { n: 30, t0: 0.5, make: (b, p, r, o) => {
      const L = 0.36 * lerp(0.4, 1, o) * r.range(0.7, 1.15), n = 26, sx = r.range(-0.06, 0.06), sz = r.range(-0.1, 0.1);
      for (let i = 0; i < n; i++) { const t = i / n, rad = 0.05 * (1 - t * 0.85), a = i * 2.4;
        const c = mixc(col(0x8a6ae0), col(0xcdb8f8), t * 0.6 + r() * 0.3);
        const M = mul(T(p.x + sx + Math.cos(a) * rad, p.y - 0.03 - t * L, p.z + sz + Math.sin(a) * rad), RY(-a + Math.PI / 2), RX(1.9));
        b.card(M, 0.034, 0.042, shade(c, 0.8), mixc(c, W, 0.25), 0, -0.3, 0.95, 0.3); } } } } },
  { id: 'primavera', name: 'Primavera', lvl: 10, price: 105, gift: 64, info: 'Buganvília: uma explosão de magenta.',
    P: { leaf: { n: 50, L: 0.055, W: 0.035, c: col(0x358040) }, flower: { n: 260, make: (b, p, r, o) => {
      const c = jitterc(r.pick([col(0xe0208a), col(0xf04aa0), col(0xc81878)]), r, 0.05), d = new V3(r.range(-1, 1), r.range(-0.2, 1), r.range(-1, 1)).normalize();
      const q = p.clone().add(d.clone().multiplyScalar(r.range(0.03, 0.16)));
      for (let j = 0; j < 3; j++) b.card(mul(frame(q, d), RY(j * 2.1), RX(0.9)), 0.04 * lerp(0.5, 1, o), 0.05 * lerp(0.5, 1, o), shade(c, 0.8), mixc(c, W, 0.15), 0, 0.62, -0.78, 0.35); } } } },
  { id: 'jasmim', name: 'Jasmim', lvl: 12, price: 115, gift: 70, info: 'Estrelinhas brancas de perfume noturno.',
    P: { leaf: { n: 80, L: 0.05, W: 0.022, c: col(0x2f7a3a) }, flower: { n: 110, make: (b, p, r, o) => { const d = new V3(r.range(-1, 1), r.range(-0.1, 1), r.range(-1, 1)).normalize(); head(b, frame(p.clone().add(d.clone().multiplyScalar(0.06)), d), r, H.small5(col(0xfffdf4), W, col(0xf7ecc0)), o, 1.5); } } } },
];
for (const c of climbDefs) add({ ...c, grow: 220, spots: ['arch'], h: 2.3, climber: true, fixedRot: true,
  build: (b, r, g, o) => habitClimber(b, r, c.P, g, o) });

add({ id: 'alecrim', name: 'Alecrim', lvl: 3, price: 14, grow: 65, gift: 9, spots: ['pot', 'window', 'bed'], h: 0.35,
  info: 'Raminhos aromáticos com florzinhas azuis.',
  build: (b, r, g, o) => habitSpike(b, r, { stems: [16, 18], H: 0.34, lean: 0.45, stemC: col(0x6a7a54), stemR: 0.003, florets: o > 0.2 ? 12 : 2, from: 0.55, type: 'card', fs: 0.007, off: 0.006,
    cols: [col(0x7a8ae8), col(0xaab8f8)], bud: col(0x7a9a7a), leaf: { n: 26, L: 0.026, W: 0.004, c: col(0x4f7a58), fold: 0, tilt: 0.8, t0: 0.08, t1: 0.98, taper: 0.2 }, from2: 1 }, g, Math.max(o, 0)) });

// ---------- public API ----------
moreSpecies(add, H); rareSpecies(add, H);
for (const d of defs) if (!d.loves && LOVES[d.id]) d.loves = LOVES[d.id];
// Pacing: quick flowers take minutes, the grand ones take hours (they keep growing while the game is closed, as long as they have water)
const PACE = [0, 9, 18, 28, 40, 55, 70, 85, 100, 115, 130, 150, 150, 150];
for (const d of defs) { d.grow = Math.round(d.grow * PACE[Math.min(d.lvl, 13)] * (d.tree ? 2 : d.climber ? 1.5 : 1)); d.every = 300 + d.lvl * 90; }
export const SPECIES = {};
defs.sort((a, b) => a.lvl - b.lvl || a.price - b.price);
for (const d of defs) SPECIES[d.id] = d;
export const SPECIES_LIST = defs;

export const STAGES = 4; // 1 sprout, 2 young, 3 bud, 4 bloom
const stageParams = [null, null, [0.55, -1], [0.85, 0.12], [1, 1]];

export function buildPlantGeometry(id, seed, stage) {
  const sp = SPECIES[id], b = new Builder(), rng = mulberry(seed * 7919 + 13);
  if (stage <= 1) {
    if (sp.tree) { b.tube(null, mkStem(rng, 0.3, 0.02, 1, 0.05, 4), 0.012, 0.005, G.wood, G.stem, 5); for (let i = 0; i < 6; i++) leaf(b, mul(T(0, 0.12 + i * 0.035, 0), RY(i * 2.4), RX(1.0)), rng, { L: 0.09, W: 0.04, c: G.lime }); }
    else if (sp.spots[0] === 'pond') aquatic(b, rng, 0.3, -1, null, 0, 0.14, 1);
    else if (sp.climber) {
      for (const x of [-0.75, 0.75]) { const bb = new Builder(); sprout(bb, rng); const off = b.n;
        for (let i = 0; i < bb.pos.length; i += 3) b.vert(bb.pos[i] + x, bb.pos[i + 1], bb.pos[i + 2], new THREE.Color(bb.col[i], bb.col[i + 1], bb.col[i + 2]));
        for (const k of bb.idx) b.idx.push(k + off); }
    } else sprout(b, rng);
  } else {
    const [g, o] = stageParams[stage];
    const gg = sp.tree ? [0, 0, 0.45, 0.78, 1][stage] : sp.climber ? [0, 0, 0.4, 0.8, 1][stage] : g;
    sp.build(b, rng, gg, sp.foliage ? -1 : o);
  }
  return b.build();
}

export function plantMaterialFor(id) {
  const sp = SPECIES[id];
  return makePlantMaterial({ sway: sp.tree ? 0.04 : sp.climber ? 0.05 : sp.id === 'cacto' || sp.id === 'suculenta' ? 0.02 : sp.h > 1 ? 0.16 : 0.5, glow: sp.tree ? 0.1 : 0.12, phase: Math.random() * 6 });
}
