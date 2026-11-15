// Second catalogue: many more flowers, foliage, trees and climbers, the vegetable patch and the greenhouse exotics.
// loves: seasons (0 spring, 1 summer, 2 autumn, 3 winter) in which the plant grows faster and gives more.
// season: the plant can only be planted outdoors in that season (the greenhouse grows anything, any time).
import * as THREE from 'three';
import { T, RX, RY, RZ, S, mul, frame, col, mixc, shade, jitterc, bez, polyAt, lerp, clamp, TAU } from './util.js';
import { G, leaf, leavesAlong, basalLeaves, fanLeaf, mkStem, head, floretBall, habitStems, habitBush, habitSpike, habitCascade, habitTree, habitClimber } from './parts.js';

const V3 = THREE.Vector3, W = col(0xffffff);
const YEL = { type: 'dome', r: 0.012, h: 0.007, cols: [col(0xd9900f), col(0xf5c628), col(0xf9dc55)] };
const rays = (c0, c1, c2, o = {}) => ({ sepals: { n: 8, L: 0.012, W: 0.006 }, layers: [
  { n: o.n ?? 17, L: o.L ?? 0.05, W: o.W ?? 0.013, a: 0.7, b: 0.4, tilt: 1.42, tiltC: 0.2, curl: 0.2, cup: 0.5, cols: [c0, c1, c2], nu: 4, nv: 2 },
  { n: (o.n ?? 17) - 2, L: (o.L ?? 0.05) * 0.9, W: o.W ?? 0.013, a: 0.7, b: 0.4, tilt: 1.3, tiltC: 0.15, curl: 0.15, cup: 0.5, cols: [c0, c1, c2], nu: 4, nv: 2 }],
  center: { ...YEL, r: o.cr ?? 0.016, h: 0.009, cols: o.cc ?? YEL.cols } });
const flat5 = (c0, c1, eye, o = {}) => ({ layers: [{ n: o.n ?? 5, L: o.L ?? 0.03, W: o.W ?? 0.03, a: 1.4, b: 0.42, tilt: 1.35, tiltC: 0.2, cup: 0.2, ruffle: o.ruffle ?? 0, cols: [eye ?? shade(c0, 0.8), c0, c1], nu: 3, nv: 2, notch: o.notch ?? 0 }],
  center: { type: 'dome', r: 0.004, h: 0.003, cols: [col(0xf5c628), col(0xf9dc55)], seg: 5 } });
const bell = (c0, c1, s = 0.03) => (b, M, r, o) => { const k = s * lerp(0.5, 1, o); b.lathe(mul(M, RX(Math.PI)), [[k * 0.15, 0], [k * 0.3, k * 0.4], [k * 0.34, k * 0.85], [k * 0.5, k * 1.05]], c0, c1, 6, null, 0.12, 5); };
const fruitOn = (b, r, n, R, H, o) => { for (let i = 0; i < n; i++) { const az = r() * TAU, el = r.range(0.5, 1.25), k = r.range(0.55, 0.95);
  const p = new V3(Math.cos(az) * Math.sin(el) * R * k, Math.cos(el) * H * k + (o.y ?? 0), Math.sin(az) * Math.sin(el) * R * k), s = o.r * r.range(0.8, 1.15);
  const c = o.ripe < 1 ? mixc(o.green, o.c, clamp(o.ripe * 1.2 - r() * 0.3, 0, 1)) : jitterc(o.c, r, 0.04);
  b.blob(mul(T(p.x, p.y, p.z), RZ(r.range(-0.3, 0.3))), s, s * (o.tall ?? 1), shade(c, 0.78), c, 7, 5, mixc(c, W, 0.22)); } };

export function moreSpecies(add, H) {
  const F = (d) => add({ spots: ['bed', 'pot'], ...d });

  // ================= flowers =================
  F({ id: 'onze_horas', name: 'Onze-horas', lvl: 1, price: 9, grow: 55, gift: 6, spots: ['bed', 'pot', 'window', 'hang'], h: 0.14, loves: [1], info: 'Abre com o sol do fim da manhã.',
    build: (b, r, g, o) => { const pal = [[0xf0408a, 0xf78ab8], [0xf7a21e, 0xfbd05a], [0xf7e04a, 0xfff2a0], [0xffffff, 0xfff0f6]];
      habitCascade(b, r, { stems: 12, L: 0.2, up: 0.25, out: 0.9, drop: 0.25, stemC: col(0xb86a6a), leaf: { n: 10, L: 0.022, W: 0.006, c: col(0x5aa04a), fold: 0 },
        flower: { per: 2, make: (bb, M, rr, oo) => { const p = rr.pick(pal); head(bb, M, rr, H.camellia(col(p[0]), col(p[1])), oo, 0.6); } } }, g, o); } });
  F({ id: 'calendula', name: 'Calêndula', lvl: 1, price: 10, grow: 60, gift: 7, spots: ['bed', 'pot', 'window'], h: 0.34, loves: [0, 2], info: 'Solzinhos alaranjados que curam e alegram.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.15, H: 0.26, branches: 9, heads: 7, stalk: 0.14, leaf: { n: 7, L: 0.07, W: 0.022, c: col(0x5a9a44), tilt: 1.0 }, head: (rr) => rr() < 0.5 ? rays(col(0xe8780c), col(0xf79a1e), col(0xfbb83a), { cc: [col(0x8a4a0c), col(0xb86a14), col(0xd98a1e)] }) : rays(col(0xf2b21a), col(0xf9cf3a), col(0xfde46a)), headK: 1.05 }, g, o) });
  F({ id: 'maria_sem_vergonha', name: 'Maria-sem-vergonha', lvl: 2, price: 12, grow: 60, gift: 8, spots: ['bed', 'pot', 'window', 'hang'], h: 0.26, loves: [0, 1], info: 'Floresce sem parar, até na sombra.',
    build: (b, r, g, o) => { const pal = [[0xf06a9a, 0xf9a8c4], [0xf7785a, 0xfbb09a], [0xfaf4f6, 0xffffff], [0xd83a8a, 0xf07ab4], [0xb86ae0, 0xd8a8f0]];
      habitBush(b, r, { R: 0.17, H: 0.2, branches: 10, heads: 14, headUp: 0.4, leaf: { n: 8, L: 0.05, W: 0.028, c: col(0x3f8f44), tilt: 1.1 }, head: (rr) => { const p = rr.pick(pal); return flat5(col(p[0]), col(p[1]), null, { L: 0.028, W: 0.03, notch: 0.1 }); }, headK: 1.1 }, g, o); } });
  F({ id: 'miosotis', name: 'Miosótis', lvl: 2, price: 12, grow: 60, gift: 8, spots: ['bed', 'pot', 'window'], h: 0.22, loves: [0], info: 'Azulzinho de céu: “não te esqueças de mim”.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.16, H: 0.18, branches: 11, heads: 26, headUp: 0.5, stalk: 0.2, leaf: { n: 8, L: 0.045, W: 0.014, c: col(0x4a9050) }, head: H.small5(col(0x6aa8f0), col(0xa8d0ff), col(0xffffff)), headK: 0.75 }, g, o) });
  F({ id: 'begonia', name: 'Begônia', lvl: 2, price: 13, grow: 65, gift: 9, spots: ['pot', 'window', 'hang', 'bed'], h: 0.26, loves: [1, 2], info: 'Folhas lustrosas e flores de cera.',
    build: (b, r, g, o) => { const p = r.pick([[0xe8384a, 0xf47a86], [0xf78ab0, 0xfcc4d8], [0xfaf4f0, 0xffffff]]);
      habitBush(b, r, { R: 0.16, H: 0.2, branches: 9, heads: 10, headUp: 0.5, leaf: { n: 6, L: 0.06, W: 0.055, c: col(0x3a7a3c), tip: col(0x9a5a4a), tipMix: 0.35, a: 0.9, b: 0.4, tilt: 1.15 }, head: H.camellia(col(p[0]), col(p[1])), headK: 0.6 }, g, o); } });
  F({ id: 'violeta', name: 'Violeta', lvl: 2, price: 14, grow: 70, gift: 9, spots: ['pot', 'window'], h: 0.16, loves: [3, 0], info: 'Pequenina, de folhas aveludadas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(8 + 8 * g), L: 0.085 * g, W: 0.07 * g, a: 1.3, b: 0.4, tilt: 1.25, curl: 0.4, fold: 0.15, c: col(0x3f7a44), nu: 4, nv: 3 });
      if (o >= 0) { const p = r.pick([[0x6a3fc0, 0x9a78e8], [0xe85aa8, 0xf7a0d0], [0xf4f0ff, 0xffffff]]); for (let i = 0; i < 9; i++) { const az = i * 2.4, d = r.range(0.01, 0.045); head(b, mul(T(Math.cos(az) * d, 0.06 * g + r() * 0.02, Math.sin(az) * d), RY(az), RX(0.3)), r, flat5(col(p[0]), col(p[1]), null, { L: 0.02, W: 0.021 }), clamp(o + r.range(-0.2, 0.1), 0, 1), 1.1); } } } });
  F({ id: 'kalanchoe', name: 'Calanchoê', lvl: 3, price: 15, grow: 70, gift: 10, spots: ['pot', 'window'], h: 0.24, thirst: 0.5, loves: [3], info: 'Flor-da-fortuna: buquês que duram meses.',
    build: (b, r, g, o) => { const c = r.pick([[0xe8301e, 0xf46a4a], [0xf7a21e, 0xfbc85a], [0xf05a9a, 0xf9a0c4], [0xf7e04a, 0xfff0a0]]).map(col);
      habitBush(b, r, { R: 0.14, H: 0.17, branches: 8, heads: 5, stalk: 0.4, headUp: 0.8, leaf: { n: 6, L: 0.06, W: 0.045, c: col(0x3a8048), a: 0.9, b: 0.45, cup: 0.4, fold: 0.1, tilt: 1.15 }, head: { ball: { n: 22, r: 0.04, fs: 0.016, cols: c, squash: 0.5, cover: 0.1 } } }, g, o); } });
  F({ id: 'aster', name: 'Áster', lvl: 3, price: 16, grow: 70, gift: 11, h: 0.45, loves: [2], info: 'Estrelinhas lilases do outono.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.2, H: 0.38, branches: 10, heads: 14, stalk: 0.1, leaf: { n: 9, L: 0.06, W: 0.014, c: col(0x4a8a48) }, head: (rr) => rr() < 0.6 ? rays(col(0x7a5ac8), col(0x9a7ee0), col(0xc0a8f0), { n: 19, L: 0.036, W: 0.008, cr: 0.011 }) : rays(col(0xd85aa0), col(0xf08ac0), col(0xf9b8d8), { n: 19, L: 0.036, W: 0.008, cr: 0.011 }) }, g, o) });
  F({ id: 'capuchinha', name: 'Capuchinha', lvl: 3, price: 16, grow: 70, gift: 11, spots: ['bed', 'hang', 'window', 'pot'], h: 0.26, loves: [1], info: 'Folhas redondinhas e flores que se comem.',
    build: (b, r, g, o) => { const pal = [[0xf2701a, 0xf7a23a], [0xf7c81e, 0xfbe36a], [0xd8281e, 0xf0503a]];
      habitCascade(b, r, { stems: 11, L: 0.42, up: 0.4, out: 0.8, drop: 0.9, stemC: col(0x8ab868), leaf: { n: 8, L: 0.06, W: 0.07, c: col(0x5aa850), a: 1.0, b: 0.3, fold: 0.05, curl: 0.15 },
        flower: { per: 2, make: (bb, M, rr, oo) => { const p = rr.pick(pal); head(bb, M, rr, flat5(col(p[0]), col(p[1]), col(0x8a2a0c), { L: 0.034, W: 0.034, ruffle: 0.15 }), oo, 1.1); } } }, g, o); } });
  F({ id: 'lobelia', name: 'Lobélia', lvl: 3, price: 15, grow: 65, gift: 10, spots: ['hang', 'window', 'pot'], h: 0.2, loves: [0, 1], info: 'Uma cascata de azul miúdo.',
    build: (b, r, g, o) => habitCascade(b, r, { stems: 16, L: 0.36, up: 0.35, out: 0.7, drop: 1.3, stemC: col(0x5a8a4a), stemR: 0.002, leaf: { n: 8, L: 0.02, W: 0.008, c: col(0x4a9044), fold: 0 },
      flower: { per: 5, make: (bb, M, rr, oo) => head(bb, M, rr, H.small5(col(0x3a5ae0), col(0x7a9af8), col(0xffffff)), oo, 0.75) } }, g, o) });
  F({ id: 'jacinto', name: 'Jacinto', lvl: 3, price: 18, grow: 75, gift: 13, spots: ['bed', 'pot', 'window'], h: 0.3, loves: [0], season: 0, info: 'Só na primavera: cachos perfumadíssimos.',
    build: (b, r, g, o) => { const c = r.pick([[0x6a5ae0, 0x9a8af4], [0xf07ab0, 0xf9b0d0], [0xf4f0ff, 0xffffff]]).map(col);
      habitSpike(b, r, { stems: [3, 4], H: 0.28, lean: 0.12, stemR: 0.008, stemC: col(0x6aa058), florets: 26, from: 0.35, type: 'flower', fs: 0.022, off: 0.012, taper: 0.25, cols: c, bud: col(0x8ab87a),
        basal: { n: 10, L: 0.24, W: 0.03, a: 0.7, b: 0.5, tilt: 0.35, curl: 0.5, fold: 0.45, c: col(0x4a9a50) } }, g, o); } });
  F({ id: 'gerbera', name: 'Gérbera', lvl: 4, price: 22, grow: 80, gift: 15, h: 0.45, loves: [0, 1], info: 'Margaridona de cores vibrantes.',
    build: (b, r, g, o) => { const pal = [[0xe02a6a, 0xf46a9a], [0xf2701a, 0xf7a23a], [0xe8281e, 0xf4584a], [0xf7c81e, 0xfbe36a]];
      habitStems(b, r, { stems: [5, 6], H: 0.4, lean: 0.2, spread: 0.07, stemR: 0.004, basal: { n: 12, L: 0.2, W: 0.06, a: 1.1, b: 0.7, tilt: 0.95, ruffle: 0.2, rf: 3, nv: 3, c: col(0x3f8a40) },
        head: (rr) => { const p = rr.pick(pal); return rays(col(p[0]), col(p[0]), col(p[1]), { n: 22, L: 0.058, W: 0.012, cr: 0.02, cc: [col(0x3a2a14), col(0x6a4a1c), col(0xd9a01e)] }); }, headTilt: 0.2, headK: 1.15 }, g, o); } });
  F({ id: 'cravo', name: 'Cravo', lvl: 4, price: 22, grow: 85, gift: 15, h: 0.5, loves: [0, 3], info: 'Pétalas franjadas com cheiro de especiaria.',
    build: (b, r, g, o) => { const pal = [[0xe02a4a, 0xf4607a], [0xf48ab0, 0xfcc8dc], [0xfaf6f4, 0xffffff], [0xf7c84a, 0xfde8a0]];
      habitStems(b, r, { stems: [7, 9], H: 0.46, lean: 0.24, spread: 0.07, stemR: 0.003, stemC: col(0x8aa890), leaf: { n: 7, L: 0.09, W: 0.008, c: col(0x7a9a88), tilt: 0.7, fold: 0 },
        head: (rr) => { const p = rr.pick(pal); return H.marigold(col(p[0]), col(p[1])); }, headK: 1.35 }, g, o); } });
  F({ id: 'boca_de_leao', name: 'Boca-de-leão', lvl: 4, price: 22, grow: 85, gift: 15, h: 0.6, loves: [0, 3], info: 'Aperta de ladinho e a florzinha “fala”.',
    build: (b, r, g, o) => { const c = r.pick([[0xf05a8a, 0xfbd24a], [0xe8301e, 0xf7a23a], [0xf7c81e, 0xfff2a0], [0xfaf4f6, 0xf9a8c4]]).map(col);
      habitSpike(b, r, { stems: [5, 6], H: 0.55, lean: 0.2, stemR: 0.004, florets: 20, from: 0.4, type: 'bell', fs: 0.036, off: 0.006, whorl: 1.9, taper: 0.5, cols: c, bud: col(0x8ab87a), leaf: { n: 10, L: 0.06, W: 0.014, c: col(0x4a8a44) } }, g, o); } });
  F({ id: 'salvia', name: 'Sálvia', lvl: 4, price: 20, grow: 80, gift: 14, h: 0.5, loves: [1, 2], info: 'Espigas vermelhas que chamam beija-flores.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(18 * g), L: 0.1 * g, W: 0.045, c: col(0x4a8a48), tilt: 1.0 });
      habitSpike(b, r, { stems: [8, 10], H: 0.46, lean: 0.3, stemR: 0.003, florets: 20, from: 0.5, type: 'card', fs: 0.013, off: 0.005, whorl: 1.4, taper: 0.4, cols: [col(0xd8201e), col(0xf0503a)], bud: col(0x8a4a3a), leaf: { n: 6, L: 0.06, W: 0.028, c: col(0x4a8a48) } }, g, o); } });
  F({ id: 'lirio_da_paz', name: 'Lírio-da-paz', lvl: 4, price: 24, grow: 90, gift: 16, spots: ['pot', 'bed'], h: 0.5, loves: [1], info: 'Bandeirinhas brancas entre folhas brilhantes.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(8 + 8 * g), L: 0.34 * g, W: 0.085, a: 0.7, b: 0.6, tilt: 0.65, curl: 0.7, fold: 0.35, c: col(0x256a32), nu: 5, nv: 3, r: 0.01 });
      if (o >= 0) for (let i = 0; i < 4; i++) { const pts = mkStem(r, 0.46 * g * r.range(0.85, 1.05), 0.08, i * 1.7 + r(), 0.03, 6); b.tube(null, pts, 0.004, 0.003, col(0x4a8a44), col(0x5a9a50), 4);
        const p = pts[6], M = mul(T(p.x, p.y, p.z), RY(r() * 6), RX(0.2)); b.petal(M, { L: 0.1 * lerp(0.5, 1, o), W: 0.06 * lerp(0.4, 1, o), a: 0.75, b: 0.6, cup: 0.9, curl: -0.3, cols: [col(0xd9efc0), W, W] });
        b.blob(mul(M, T(0, 0.035, -0.008)), 0.006, 0.03, col(0xf2e6a0), col(0xfaf4c8), 5, 4); } } });
  F({ id: 'alho_ornamental', name: 'Alho-ornamental', lvl: 5, price: 26, grow: 90, gift: 18, h: 0.75, loves: [0], info: 'Pompons roxos equilibrados em hastes finas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: 8, L: 0.26 * g, W: 0.03, a: 0.7, b: 0.5, tilt: 0.55, curl: 0.8, c: col(0x5a9a5a) });
      for (let i = 0; i < 4; i++) { const pts = mkStem(r, 0.7 * g * r.range(0.75, 1.05), 0.1, i * 1.6 + r(), 0.02, 6); b.tube(null, pts, 0.005, 0.004, col(0x6aa058), col(0x7ab068), 5);
        if (o >= 0) floretBall(b, frame(pts[6], new V3(0, 1, 0)), r, { n: 60, r: 0.07, fs: 0.022, np: 6, cols: [col(0x8a5ad8), col(0xa87ae8), col(0x7a4ac0)], squash: 1, cover: 0.95 }, o); } } });
  F({ id: 'anemona', name: 'Anêmona', lvl: 5, price: 26, grow: 85, gift: 18, h: 0.4, loves: [0], season: 0, info: 'Só na primavera: olho escuro e pétalas de papel.',
    build: (b, r, g, o) => { const pal = [[0xfaf6f6, 0xffffff], [0x6a4ac8, 0x9a82e8], [0xd8283e, 0xf0586a], [0xf07ab0, 0xf9b8d4]];
      habitStems(b, r, { stems: [6, 8], H: 0.36, lean: 0.24, spread: 0.07, stemR: 0.003, basal: { n: 10, L: 0.1, W: 0.06, c: col(0x4a8a48), ruffle: 0.3, rf: 4, nv: 3, tilt: 0.9 },
        head: (rr) => { const p = rr.pick(pal); return { layers: [{ n: 7, L: 0.045, W: 0.036, a: 1.4, b: 0.45, tilt: 1.25, tiltC: 0.15, cup: 0.35, ruffle: 0.1, cols: [mixc(col(p[0]), col(0x2a1a3a), 0.5), col(p[0]), col(p[1])] }],
          center: { type: 'dome', r: 0.011, h: 0.01, y: 0.004, cols: [col(0x1a1420), col(0x2a2030), col(0x3a3040)], seg: 8, stamens: { n: 14, len: 0.012, spread: 0.9, c: col(0x2a2030), tip: col(0x3a3046), tipR: 0.0025 } } }; }, headTilt: 0.25, headK: 1.15 }, g, o); } });
  F({ id: 'lupino', name: 'Lupino', lvl: 5, price: 26, grow: 90, gift: 18, spots: ['bed'], h: 0.8, loves: [0, 1], info: 'Torres em degradê, do rosa ao azul.',
    build: (b, r, g, o) => { const c = r.pick([[0xf07ab0, 0x7a5ae0], [0xf7c84a, 0xf2701a], [0x9a7ae8, 0x4a5ad8], [0xfaf0f6, 0xf06a9a]]).map(col);
      habitSpike(b, r, { stems: [4, 5], H: 0.74, lean: 0.14, stemR: 0.006, florets: 34, from: 0.4, type: 'card', fs: 0.02, off: 0.012, whorl: 1.25, taper: 0.55, cols: c, bud: col(0x8ab08a),
        basalFan: { count: 9, stalk: 0.2, n: 7, L: 0.085, W: 0.022, c: col(0x4a9048), spread: 3.0 } }, g, o); } });
  F({ id: 'ranunculo', name: 'Ranúnculo', lvl: 6, price: 30, grow: 95, gift: 21, h: 0.42, loves: [0, 3], info: 'Camadas e mais camadas, como papel crepom.',
    build: (b, r, g, o) => { const pal = [[0xf7a23a, 0xfbd08a], [0xf06a8a, 0xfbc0cc], [0xfaf4ec, 0xffffff], [0xe8482a, 0xf7947a], [0xf7d84a, 0xfdf0b0]];
      habitStems(b, r, { stems: [6, 8], H: 0.38, lean: 0.2, spread: 0.07, stemR: 0.0035, basal: { n: 12, L: 0.11, W: 0.05, c: col(0x4a8f48), ruffle: 0.3, rf: 4, nv: 3, tilt: 0.9 },
        head: (rr) => { const p = rr.pick(pal); return H.camellia(col(p[0]), col(p[1])); }, headK: 1.3, headTilt: 0.15 }, g, o); } });
  F({ id: 'amarilis', name: 'Amarílis', lvl: 6, price: 32, grow: 100, gift: 22, spots: ['pot', 'bed'], h: 0.6, loves: [3], season: 3, info: 'Só no inverno: trombetas enormes numa haste só.',
    build: (b, r, g, o) => { const p = r.pick([[0xd8201e, 0xf0504a, 0x8a0f1a], [0xfaf4f4, 0xffffff, 0xd9f0b0], [0xf07a8a, 0xfcd0d6, 0xfaf0e0]]);
      habitStems(b, r, { stems: [2, 2], H: 0.52, lean: 0.05, spread: 0.06, stemR: 0.011, stemC: col(0x6aa058), wob: 0.02, basal: { n: 7, L: 0.34, W: 0.04, a: 0.7, b: 0.45, tilt: 0.45, curl: 0.7, fold: 0.4, c: col(0x3f8f48) },
        head: H.lily(col(p[0]), col(p[1]), col(p[2])), headsPer: 3, pedicel: 0.04, headTilt: 1.2, headK: 1.25 }, g, o); } });
  F({ id: 'agapanto', name: 'Agapanto', lvl: 6, price: 32, grow: 100, gift: 22, h: 0.75, loves: [1], info: 'Fogos de artifício azuis no verão.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(12 + 8 * g), L: 0.36 * g, W: 0.03, a: 0.7, b: 0.45, tilt: 0.6, curl: 0.9, fold: 0.4, c: col(0x3f8a48), nu: 5 });
      for (let i = 0; i < 4; i++) { const pts = mkStem(r, 0.68 * g * r.range(0.8, 1.05), 0.14, i * 1.7 + r(), 0.02, 6); b.tube(null, pts, 0.005, 0.004, col(0x5a9a50), col(0x6aa860), 5);
        if (o >= 0) floretBall(b, frame(pts[6], new V3(0, 1, 0)), r, { n: 34, r: 0.075, fs: 0.036, np: 6, cols: [col(0x5a7ae8), col(0x8aa0f4), col(0x4a62d8)], squash: 0.85, cover: 0.55 }, o); } } });
  F({ id: 'gladiolo', name: 'Gladíolo', lvl: 6, price: 32, grow: 100, gift: 22, spots: ['bed'], h: 0.95, loves: [1], season: 1, info: 'Só no verão: a palma-de-santa-rita.',
    build: (b, r, g, o) => { const c = r.pick([[0xe8301e, 0xf47a5a], [0xf07ab0, 0xfbc4dc], [0xf7d84a, 0xfdf0a0], [0x9a5ad8, 0xc8a0f0]]).map(col);
      habitSpike(b, r, { stems: [4, 5], H: 0.9, lean: 0.1, stemR: 0.006, florets: 12, from: 0.42, type: 'flower', fs: 0.05, off: 0.014, whorl: 0.35, taper: 0.5, cols: c, bud: col(0x8ab87a),
        basal: { n: 10, L: 0.5, W: 0.03, a: 0.7, b: 0.4, tilt: 0.2, curl: 0.3, fold: 0.5, c: col(0x4a9a50) } }, g, o); } });
  F({ id: 'iris', name: 'Íris', lvl: 7, price: 36, grow: 110, gift: 25, h: 0.65, loves: [0], info: 'Três pétalas para cima, três para baixo.',
    build: (b, r, g, o) => { const p = r.pick([[0x5a3fc0, 0x8a72e8], [0xf7d84a, 0xfdf0a0], [0xf4f0ff, 0xffffff]]), c0 = col(p[0]), c1 = col(p[1]);
      habitStems(b, r, { stems: [4, 5], H: 0.58, lean: 0.1, spread: 0.07, stemR: 0.005, basal: { n: 12, L: 0.46, W: 0.035, a: 0.7, b: 0.4, tilt: 0.18, curl: 0.25, fold: 0.5, c: col(0x5a9a70) },
        head: { layers: [{ n: 3, L: 0.06, W: 0.042, a: 1.2, b: 0.5, tilt: 0.25, tiltC: 0.1, curl: -0.5, cup: 0.9, ruffle: 0.12, cols: [c1, c0, c1] },
          { n: 3, L: 0.07, W: 0.048, a: 1.2, b: 0.5, tilt: 1.1, tiltC: 0.2, curl: 1.2, curlPow: 2, cup: 0.3, ruffle: 0.12, cols: [col(0xf7d84a), c0, shade(c0, 0.85)] }] }, headK: 1.2 }, g, o); } });
  F({ id: 'anturio', name: 'Antúrio', lvl: 7, price: 38, grow: 115, gift: 26, spots: ['pot', 'green'], h: 0.5, loves: [1], info: 'Corações vermelhos de verniz.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(5 + 4 * g); i++) { const az = i * 2.4, L = 0.3 * g * r.range(0.7, 1.1), out = r.range(0.25, 0.6);
        const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.2, L * 0.7, Math.sin(az) * L * out * 0.2), new V3(Math.cos(az) * L * out, L, Math.sin(az) * L * out), 5); b.tube(null, pts, 0.004, 0.003, col(0x3f7a3a), col(0x3f7a3a), 4);
        leaf(b, mul(T(pts[5].x, pts[5].y, pts[5].z), RY(-az + Math.PI / 2), RX(0.9 + r() * 0.3)), r, { L: 0.19 * g, W: 0.12 * g, a: 0.6, b: 0.6, c: col(0x1f6030), fold: 0.25, curl: 0.5, nu: 5, nv: 4 }); }
      if (o >= 0) for (let i = 0; i < 4; i++) { const pts = mkStem(r, 0.42 * g * r.range(0.8, 1.05), 0.1, i * 1.9 + 1, 0.03, 6); b.tube(null, pts, 0.004, 0.003, col(0x8a4a3a), col(0xa85a44), 4);
        const p = pts[6], M = mul(T(p.x, p.y, p.z), RY(r() * 6), RX(0.75)), c = r.pick([col(0xd8182e), col(0xf06a8a), col(0xfaf0f0)]);
        b.petal(M, { L: 0.1 * lerp(0.4, 1, o), W: 0.095 * lerp(0.4, 1, o), a: 0.62, b: 0.55, cup: 0.25, curl: 0.3, cols: [shade(c, 0.85), c, mixc(c, W, 0.2)], nv: 4 });
        b.blob(mul(M, T(0, 0.03, -0.012), RX(-0.5)), 0.006, 0.032, col(0xf2d24a), col(0xfaf0a0), 5, 4); } } });
  F({ id: 'malva_rosa', name: 'Malva-rosa', lvl: 7, price: 36, grow: 115, gift: 25, spots: ['bed'], h: 1.3, loves: [1], info: 'Altíssima, encostada no muro das avós.',
    build: (b, r, g, o) => { const c = r.pick([[0xf06a9a, 0xfbc0d4], [0xd8283e, 0xf0607a], [0xf7e08a, 0xfff6d0], [0x6a2a4a, 0x9a4a6a]]).map(col);
      habitSpike(b, r, { stems: [3, 3], H: 1.25, lean: 0.06, stemR: 0.009, florets: 14, from: 0.3, type: 'flower', fs: 0.055, off: 0.02, whorl: 2.1, taper: 0.4, cols: c, bud: col(0x8ab87a), eye: col(0xf7e08a),
        leaf: { n: 8, L: 0.13, W: 0.12, a: 0.8, b: 0.4, c: col(0x4a8a44), tilt: 1.2 } }, g, o); } });
  F({ id: 'fucsia', name: 'Brinco-de-princesa', lvl: 6, price: 32, grow: 100, gift: 22, spots: ['hang', 'pot'], h: 0.3, loves: [0, 2], info: 'Bailarinas penduradas, rosa e roxo.',
    build: (b, r, g, o) => habitCascade(b, r, { stems: 13, L: 0.46, up: 0.4, out: 0.7, drop: 1.4, stemC: col(0x8a4a4a), leaf: { n: 9, L: 0.04, W: 0.02, c: col(0x3f8a44) },
      flower: { per: 3, make: (bb, M, rr, oo) => { const p = new V3().setFromMatrixPosition(M), k = lerp(0.5, 1, oo), D = mul(T(p.x, p.y - 0.01, p.z), RX(Math.PI), RY(rr() * 6));
        for (let i = 0; i < 4; i++) bb.petal(mul(D, RY(i * 1.57), RX(1.0)), { L: 0.03 * k, W: 0.011, a: 0.8, b: 0.8, curl: -0.9, cols: [col(0xe8286a), col(0xf0508a), col(0xf78ab0)], nu: 3, nv: 1 });
        bb.lathe(mul(D, T(0, 0.004, 0)), [[0.004, 0], [0.011 * k, 0.012], [0.013 * k, 0.03 * k]], col(0x6a2ab0), col(0x8a4ad0), 6, null, 0.1, 4); } } }, g, o) });
  F({ id: 'crisantemo', name: 'Crisântemo', lvl: 4, price: 24, grow: 90, gift: 16, h: 0.5, loves: [2], season: 2, info: 'Só no outono: pompons dourados e cor de vinho.',
    build: (b, r, g, o) => { const pal = [[0xf2b21a, 0xfbe06a], [0xb8402a, 0xf0a04a], [0xfaf4e6, 0xffffff], [0x9a3a6a, 0xe08ab0]];
      habitBush(b, r, { R: 0.24, H: 0.4, branches: 10, heads: 9, stalk: 0.08, leaf: { n: 9, L: 0.07, W: 0.04, c: col(0x3f7a40), ruffle: 0.3, rf: 4, nv: 3 }, head: (rr) => { const p = rr.pick(pal); return H.dahlia(col(p[0]), col(p[1])); }, headK: 1.0, headUp: 0.5 }, g, o); } });
  F({ id: 'estrelicia', name: 'Estrelícia', lvl: 9, price: 48, grow: 150, gift: 34, spots: ['bed', 'pot', 'green'], h: 0.95, loves: [1], info: 'Ave-do-paraíso: uma flor que parece pássaro.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(5 + 4 * g); i++) { const az = i * 2.4 + r() * 0.3, L = 0.6 * g * r.range(0.75, 1.1), out = r.range(0.15, 0.4);
        const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.2, L * 0.6, Math.sin(az) * L * out * 0.2), new V3(Math.cos(az) * L * out, L, Math.sin(az) * L * out), 5); b.tube(null, pts, 0.008, 0.005, col(0x4a8a50), col(0x4a8a50), 5);
        leaf(b, mul(T(pts[5].x, pts[5].y, pts[5].z), RY(-az + Math.PI / 2), RX(0.35 + r() * 0.3)), r, { L: 0.34 * g, W: 0.13 * g, a: 0.75, b: 0.5, c: col(0x3a7a58), fold: 0.3, curl: 0.4, nu: 5, nv: 3 }); }
      if (o >= 0) for (let i = 0; i < 3; i++) { const az = i * 2.1 + 0.6, pts = mkStem(r, 0.85 * g * r.range(0.85, 1.05), 0.14, az, 0.02, 6); b.tube(null, pts, 0.007, 0.006, col(0x5a8a58), col(0x6a8a68), 5);
        const p = pts[6], M = mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2)), k = lerp(0.4, 1, o);
        b.petal(mul(M, RX(1.45)), { L: 0.14 * k, W: 0.035, a: 0.6, b: 0.8, cup: 1.2, cols: [col(0x6a7a68), col(0x8a6a78), col(0xb85a6a)], nu: 4, nv: 2 });
        for (let j = 0; j < 4; j++) b.petal(mul(M, T(0, 0.005, 0.02 + j * 0.022), RX(0.25 + j * 0.2)), { L: 0.1 * k, W: 0.026, a: 0.7, b: 0.9, cup: 0.6, cols: [col(0xf2901a), col(0xf7a81e), col(0xfbc83a)], nu: 3, nv: 2 });
        b.petal(mul(M, T(0, 0.005, 0.045), RX(0.7)), { L: 0.075 * k, W: 0.014, a: 0.7, b: 0.9, cols: [col(0x3a3ac8), col(0x4a4ae0), col(0x6a6af0)], nu: 3, nv: 1 }); } } });
  F({ id: 'heliconia', name: 'Helicônia', lvl: 10, price: 54, grow: 160, gift: 38, spots: ['bed', 'green'], h: 1.2, loves: [1], info: 'Bico-de-papagaio das matas tropicais.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(4 + 3 * g); i++) { const az = i * 2.4 + r() * 0.3, L = 0.85 * g * r.range(0.75, 1.1), out = r.range(0.1, 0.3);
        const pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * out * 0.2, L * 0.6, Math.sin(az) * L * out * 0.2), new V3(Math.cos(az) * L * out, L, Math.sin(az) * L * out), 5); b.tube(null, pts, 0.01, 0.006, col(0x4a8a44), col(0x4a8a44), 5);
        leaf(b, mul(T(pts[5].x, pts[5].y, pts[5].z), RY(-az + Math.PI / 2), RX(0.5 + r() * 0.4)), r, { L: 0.42 * g, W: 0.14 * g, a: 0.75, b: 0.5, c: col(0x2f7a3c), fold: 0.3, curl: 0.7, nu: 5, nv: 3 }); }
      if (o >= 0) for (let i = 0; i < 2; i++) { const az = i * 3 + 0.8, pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * 0.05, 0.9 * g, Math.sin(az) * 0.05), new V3(Math.cos(az) * 0.3 * g, 0.75 * g, Math.sin(az) * 0.3 * g), 8); b.tube(null, pts, 0.007, 0.005, col(0x5a8a44), col(0xc8283a), 5);
        const tip = pts[8], k = lerp(0.4, 1, o); for (let j = 0; j < 7; j++) { const y = -j * 0.045 * k, sd = j % 2 ? 1 : -1;
          b.petal(mul(T(tip.x, tip.y + y, tip.z), RY(-az + (sd > 0 ? 0 : Math.PI)), RX(1.25)), { L: 0.085 * k, W: 0.034, a: 0.6, b: 0.8, cup: 1.4, cols: [col(0xd81e2e), col(0xee3a3a), col(0xf7c82a)], nu: 3, nv: 2 }); } } } });

  // ================= foliage =================
  F({ id: 'espada', name: 'Espada-de-são-jorge', lvl: 2, price: 14, grow: 70, gift: 9, spots: ['pot', 'bed'], h: 0.5, thirst: 0.35, foliage: true, loves: [1], info: 'Protege a casa e quase não pede água.',
    build: (b, r, g) => { for (let i = 0; i < Math.round(6 + 6 * g); i++) { const az = i * 2.4, d = 0.02 + r() * 0.04; b.petal(mul(T(Math.cos(az) * d, 0, Math.sin(az) * d), RY(az + r()), RX(r.range(0.02, 0.2))), { L: 0.5 * g * r.range(0.6, 1.1), W: 0.05, a: 0.62, b: 0.32, base: 0.7, fold: 0.25, twist: r.range(-0.6, 0.6), nu: 6, nv: 2, vein: 0.5, cols: [col(0x3a6a40), col(0x4a7a50), col(0xd8c84a)] }); } } });
  F({ id: 'jiboia', name: 'Jiboia', lvl: 2, price: 13, grow: 65, gift: 9, spots: ['hang', 'pot', 'window'], h: 0.3, foliage: true, loves: [1], info: 'Corações verdes que escorrem do vaso.',
    build: (b, r, g) => habitCascade(b, r, { stems: 11, L: 0.7, up: 0.25, out: 0.55, drop: 1.7, upFall: 0.3, stemC: col(0x6a8a44), leaf: { n: 11, L: 0.075, W: 0.06, c: col(0x4a9a48), tip: col(0xe8e08a), tipMix: 0.5, a: 0.62, b: 0.5, fold: 0.2, curl: 0.3 } }, g, -1) });
  F({ id: 'zamioculca', name: 'Zamioculca', lvl: 5, price: 26, grow: 90, gift: 18, spots: ['pot'], h: 0.55, thirst: 0.4, foliage: true, loves: [1], info: 'Brilhante como se fosse encerada.',
    build: (b, r, g) => habitCascade(b, r, { stems: 9, L: 0.55, up: 1.5, out: 0.5, drop: 0.2, upFall: 0.3, stemC: col(0x3a7a40), stemR: 0.007, frond: { pairs: 9, L: 0.085, wr: 0.48, c: col(0x1f6a30) } }, g, -1) });
  F({ id: 'areca', name: 'Palmeira-areca', lvl: 8, price: 42, grow: 130, gift: 30, spots: ['pot', 'bed'], h: 1.2, foliage: true, loves: [1], info: 'Leques que fazem sombra de praia.',
    build: (b, r, g) => { for (let i = 0; i < 5; i++) b.tube(null, mkStem(r, 0.5 * g, 0.1, i * 1.3, 0.03, 4), 0.012, 0.009, col(0xb8a04a), col(0x8aa84a), 5);
      habitCascade(b, r, { stems: 12, L: 1.05, up: 1.1, out: 0.75, drop: 0.5, upFall: 0.4, stemC: col(0x8aa84a), stemR: 0.006, frond: { pairs: 18, L: 0.2, wr: 0.1, c: col(0x4a9a44) } }, g, -1); } });

  // ================= greenhouse exotics =================
  add({ id: 'dioneia', name: 'Dioneia', lvl: 5, price: 34, grow: 90, gift: 24, spots: ['green'], h: 0.16, info: 'A planta carnívora mais simpática do mundo.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(6 + 6 * g); i++) { const az = i * 2.4, L = 0.1 * g * r.range(0.7, 1.15), pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.5, L * 0.5, Math.sin(az) * L * 0.5), new V3(Math.cos(az) * L, L * 0.55, Math.sin(az) * L), 4);
        b.tube(null, pts, 0.004, 0.003, col(0x6aa84a), col(0x8ab85a), 4); const p = pts[4], op = 0.35 + r() * 0.5;
        for (const sd of [-1, 1]) b.petal(mul(T(p.x, p.y, p.z), RY(-az + Math.PI / 2), RZ(sd * op), RX(0.2)), { L: 0.04 * g, W: 0.034 * g, a: 1.0, b: 0.45, cup: 0.9 * sd, cols: [col(0x8ab85a), col(0xb8c85a), col(0xd8404a)], nu: 3, nv: 3 }); } } });
  add({ id: 'bonsai', name: 'Bonsai', lvl: 9, price: 60, grow: 170, gift: 42, spots: ['green', 'pot'], h: 0.45, foliage: true, thirst: 0.6, info: 'Uma árvore inteira que cabe no colo.',
    build: (b, r, g) => habitTree(b, r, { H: 0.16, R: 0.2, trunkR: 0.028, limbs: 5, bark: col(0x5a4636), leaves: 260, leafSize: 0.05, leafCols: [col(0x2f7a3a), col(0x3f8a44), col(0x256a30)] }, g, -1) });
  add({ id: 'orquidea_azul', name: 'Orquídea-azul', lvl: 12, price: 80, grow: 200, gift: 58, spots: ['green'], h: 0.6, info: 'Só a estufa consegue criar uma dessas.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: 6, L: 0.2 * g, W: 0.065, a: 0.7, b: 0.45, tilt: 1.05, curl: 0.5, fold: 0.5, c: col(0x2f7a3e), nu: 5, base: 0.6, r: 0.01 }); if (o < 0) return;
      for (let s = 0; s < 2; s++) { const az = s * 2.6 + r(), L = 0.55 * g, pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.1, L * 0.95, Math.sin(az) * L * 0.1), new V3(Math.cos(az) * L * 0.75, L * 0.7, Math.sin(az) * L * 0.75), 10); b.tube(null, pts, 0.004, 0.0025, col(0x5a7a44), col(0x6a8a4a), 4);
        for (let k = 0; k < 7; k++) { const pp = polyAt(pts, 0.5 + k * 0.075).p, sd = k % 2 ? 1 : -1, dir = new V3(Math.cos(az + sd * 1.2) * 0.8, 0.25, Math.sin(az + sd * 1.2) * 0.8).normalize();
          head(b, frame(pp.clone().add(dir.clone().multiplyScalar(0.02)), dir), r, H.orchid(col(0x4a6ae8), col(0x9ab4f8), col(0x2a2a9a)), clamp(o * 1.5 - k * 0.07, 0, 1), 1.3); } } } });

  // ================= pond =================
  add({ id: 'vitoria_regia', name: 'Vitória-régia', lvl: 12, price: 70, grow: 190, gift: 50, spots: ['pond'], h: 0.14, thirst: 0, loves: [1], info: 'A rainha das águas da Amazônia.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const az = i * 2.2 + r(), d = i ? 0.42 * g : 0, R = 0.34 * g * (i ? 0.8 : 1), M = mul(T(Math.cos(az) * d, 0.012 + i * 0.002, Math.sin(az) * d), RY(r() * 6)), st = b.n, seg = 20, c = col(0x3f8f48);
        b.vert(0, 0, 0, shade(c, 0.85), M); for (let j = 0; j <= seg; j++) { const a = (j / seg) * TAU; b.vert(Math.cos(a) * R, 0, Math.sin(a) * R, j % 2 ? c : mixc(c, G.light, 0.25), M); }
        for (let j = 0; j < seg; j++) b.idx.push(st, st + j + 2, st + j + 1);
        b.lathe(M, [[R, 0], [R * 1.02, 0.035 * g]], col(0x4a9a50), col(0xa85a6a), seg); }
      if (o >= 0) head(b, T(0.3 * g, 0.03, 0.25 * g), r, H.waterlily(col(0xfff0f4), col(0xf7a0c0)), o, 1.7 * g); } });

  // ================= trees =================
  const tree = (id, name, lvl, price, info, P, extra = {}) => add({ id, name, lvl, price, gift: Math.round(price * 0.58), grow: 240, spots: ['tree'], h: 3.2, tree: true, thirst: 0.5, info, ...extra, build: (b, r, g, o) => habitTree(b, r, P, g, o) });
  tree('macieira', 'Macieira', 6, 90, 'Flores brancas e maçãs coradas.', { H: 1.05, R: 1.05, trunkR: 0.075, limbs: 7, bark: col(0x5f4a3a), foliage: 1, leaves: 2600, leafSize: 0.15, leafCols: [col(0x3a8a3c), col(0x4a9a44), col(0x2f7a34)], blossom: { n: 300, size: 0.08, cols: [W, col(0xfce0ea)] }, fruit: { n: 18, r: 0.05, tall: 0.95, c: col(0xd8282e) } }, { loves: [2] });
  tree('pitangueira', 'Pitangueira', 7, 100, 'Frutinhas vermelhas com gosto de infância.', { H: 0.95, R: 1.0, trunkR: 0.065, limbs: 8, bark: col(0x8a6a50), foliage: 1, leaves: 2800, leafSize: 0.12, leafCols: [col(0x3a8a40), col(0x5a9a48), col(0x8a5a3a)], blossom: { n: 320, size: 0.06, cols: [W] }, fruit: { n: 34, r: 0.026, tall: 0.85, c: col(0xe02a1e) } }, { loves: [0] });
  tree('ipe_rosa', 'Ipê-rosa', 8, 115, 'Uma nuvem cor-de-rosa no meio do inverno.', { H: 1.5, R: 1.3, trunkR: 0.09, limbs: 8, bark: col(0x6a5a4a), foliage: 0.06, leaves: 900, leafCols: [col(0x4a8a3a), col(0x5a9a44)], blossom: { n: 3300, size: 0.125, cols: [col(0xf07ab0), col(0xf7a0c8), col(0xe85a9a), col(0xfcc8e0)], buds: [col(0xd8508a)] } }, { petal: 0xf7a0c8, loves: [3] });
  tree('jabuticabeira', 'Jabuticabeira', 9, 125, 'Bolinhas pretas doces grudadas no tronco.', { H: 1.0, R: 1.15, trunkR: 0.085, limbs: 9, bark: col(0xb09a84), foliage: 1, leaves: 3000, leafSize: 0.11, leafCols: [col(0x2f7a38), col(0x256a30), col(0x4a8a40)], blossom: { n: 300, size: 0.05, cols: [W, col(0xfff8e0)] }, fruit: { n: 46, r: 0.03, tall: 1, c: col(0x2a1a34) } }, { loves: [0] });
  tree('magnolia', 'Magnólia', 10, 135, 'Taças brancas e rosadas, grandes como mãos.', { H: 1.2, R: 1.2, trunkR: 0.08, limbs: 7, bark: col(0x7a6a5a), foliage: 0.5, leaves: 1800, leafSize: 0.16, leafCols: [col(0x2f6a34), col(0x3a7a3c)], blossom: { n: 900, size: 0.2, cols: [col(0xfff4f6), col(0xfbd0de), col(0xf7b0c8)], buds: [col(0xe88ab0)] } }, { petal: 0xfce0ea, loves: [0] });
  tree('mangueira', 'Mangueira', 11, 150, 'Sombra larga e mangas maduras.', { H: 1.3, R: 1.5, trunkR: 0.11, limbs: 9, bark: col(0x5a4a3c), foliage: 1, leaves: 3200, leafSize: 0.17, leafCols: [col(0x256a30), col(0x2f7a38), col(0x8a5a3a)], blossom: { n: 260, size: 0.07, cols: [col(0xf7e8a0), col(0xfaf0c0)] }, fruit: { n: 16, r: 0.06, tall: 1.35, c: col(0xf2a82a) } }, { loves: [1] });
  tree('flamboyant', 'Flamboyant', 12, 165, 'A copa que pega fogo no verão.', { H: 1.3, R: 1.7, trunkR: 0.1, limbs: 9, bark: col(0x7a6a5a), foliage: 0.45, leaves: 1800, leafSize: 0.13, leafCols: [col(0x4a9a44), col(0x5aa850)], blossom: { n: 3000, size: 0.13, cols: [col(0xe8301e), col(0xf2501e), col(0xf7781e), col(0xd81e1e)], buds: [col(0xb8281e)] } }, { petal: 0xf2501e, loves: [1] });

  // ================= climbers =================
  const climb = (id, name, lvl, price, info, P, extra = {}) => add({ id, name, lvl, price, gift: Math.round(price * 0.6), grow: 220, spots: ['arch'], h: 2.3, climber: true, fixedRot: true, info, ...extra, build: (b, r, g, o) => habitClimber(b, r, P, g, o) });
  const outDir = (r) => new V3(r.range(-0.6, 0.6), r.range(0.0, 1), r() > 0.5 ? 1 : -1).normalize();
  climb('ipomeia', 'Ipomeia', 5, 60, 'Bons-dias azuis que abrem cedinho.', { leaf: { n: 70, L: 0.06, W: 0.055, c: col(0x3f8f44), a: 0.62, b: 0.5 }, flower: { n: 54, make: (b, p, r, o) => { const d = outDir(r), k = lerp(0.4, 1, o);
    b.lathe(frame(p.clone().add(d.clone().multiplyScalar(0.06)), d), [[0.004, 0], [0.008, 0.025], [0.03 * k, 0.045], [0.05 * k, 0.05]], null, null, 12, (t, c) => c.copy(col(0xfaf6ff)).lerp(col(0x4a6ae8), clamp(t * 1.6, 0, 1)), 0.08, 5); } } }, { loves: [1] });
  climb('maracuja', 'Maracujá', 7, 85, 'Flor de coroa lilás e fruta para suco.', { leaf: { n: 70, L: 0.07, W: 0.06, c: col(0x3a8a3c), a: 0.6, b: 0.5 }, flower: { n: 40, make: (b, p, r, o) => { const d = outDir(r), q = p.clone().add(d.clone().multiplyScalar(0.07));
    if (o > 0.7 && r() < 0.35) { b.blob(T(p.x + r.range(-0.08, 0.08), p.y - 0.09, p.z + r.range(-0.1, 0.1)), 0.04, 0.045, col(0xd8a01e), col(0xf2c83a), 7, 5); return; }
    head(b, frame(q, d), r, { layers: [{ n: 10, L: 0.034, W: 0.014, a: 0.9, b: 0.7, tilt: 1.4, tiltC: 0.2, cup: 0.3, cols: [W, col(0xf4f0ff), W], nu: 3, nv: 2 }, { n: 26, L: 0.026, W: 0.003, a: 0.8, b: 0.9, tilt: 1.3, tiltC: 0.2, y: 0.003, cols: [col(0x4a2a8a), col(0x7a5ac8), col(0xe8e0ff)], nu: 2, nv: 1 }],
      center: { type: 'dome', r: 0.007, h: 0.012, y: 0.006, cols: [col(0x8ab04a), col(0xb8c85a)], seg: 6 } }, o, 1.3); } } }, { loves: [1] });
  climb('madressilva', 'Madressilva', 9, 100, 'Perfume doce de fim de tarde.', { leaf: { n: 80, L: 0.05, W: 0.026, c: col(0x3f8a48) }, flower: { n: 80, make: (b, p, r, o) => { const d = outDir(r), M = frame(p.clone().add(d.clone().multiplyScalar(0.05)), d), c = r() < 0.5 ? col(0xfff2b0) : col(0xf7a0b0), k = lerp(0.4, 1, o);
    for (let i = 0; i < 5; i++) b.petal(mul(M, RY(i * 1.25), RX(0.55)), { L: 0.04 * k, W: 0.007, a: 0.8, b: 0.9, curl: 1.2, curlPow: 2.5, cols: [col(0xf7e08a), c, W], nu: 3, nv: 1 }); } } }, { loves: [0, 1] });
  climb('clematis', 'Clematis', 11, 118, 'Estrelas roxas do tamanho de um pires.', { leaf: { n: 60, L: 0.06, W: 0.03, c: col(0x3a8a44) }, flower: { n: 42, make: (b, p, r, o) => { const d = outDir(r), c = r.pick([[0x6a3fc0, 0x9a78e8], [0xd85aa8, 0xf7a0d0], [0xf4f0ff, 0xffffff]]);
    head(b, frame(p.clone().add(d.clone().multiplyScalar(0.07)), d), r, { layers: [{ n: 6, L: 0.058, W: 0.03, a: 1.0, b: 0.6, tilt: 1.4, tiltC: 0.2, cup: 0.25, vein: 0.3, cols: [shade(col(c[0]), 0.8), col(c[0]), col(c[1])], nu: 4, nv: 2 }], center: { stamens: { n: 12, len: 0.014, spread: 0.7, c: col(0xf4f0d0), tip: col(0xf7e08a), tipR: 0.003 } } }, o, 1.1); } } }, { loves: [0, 1] });

  // ================= vegetable patch =================
  const Vg = (d) => add({ spots: ['veg'], veg: true, ...d });
  Vg({ id: 'rabanete', name: 'Rabanete', lvl: 1, price: 8, grow: 45, gift: 6, h: 0.18, loves: [0, 2], info: 'O mais apressado da horta.',
    build: (b, r, g, o) => { for (let i = 0; i < 4; i++) { const az = i * 1.6 + r(), d = i ? 0.07 : 0; const x = Math.cos(az) * d, z = Math.sin(az) * d;
        for (let k = 0; k < 5; k++) leaf(b, mul(T(x, 0.01, z), RY(k * 1.3 + r()), RX(r.range(0.3, 0.8))), r, { L: 0.13 * g, W: 0.05, a: 1.2, b: 0.6, c: col(0x4a9a44), ruffle: 0.2, rf: 3, nv: 3 });
        if (o > 0) b.blob(T(x, 0.012 * g, z), 0.022 * g * lerp(0.5, 1, o), 0.022 * g, col(0xfaf0f0), col(0xe02a5a), 7, 5); } } });
  Vg({ id: 'cebolinha', name: 'Cebolinha', lvl: 1, price: 8, grow: 50, gift: 6, spots: ['veg', 'pot', 'window'], h: 0.3, loves: [0, 2], info: 'Um punhadinho verde para qualquer prato.',
    build: (b, r, g) => { for (let i = 0; i < Math.round(14 + 14 * g); i++) { const az = r() * TAU, d = r() * 0.07; b.tube(T(Math.cos(az) * d, 0, Math.sin(az) * d), mkStem(r, 0.3 * g * r.range(0.6, 1.1), 0.09, az, 0.08, 4), 0.004, 0.002, col(0xcfe0b0), col(0x4a9a48), 4); } }, foliage: true });
  Vg({ id: 'salsinha', name: 'Salsinha', lvl: 1, price: 8, grow: 50, gift: 6, spots: ['veg', 'pot', 'window'], h: 0.24, foliage: true, loves: [0, 2], info: 'Cheirinho-verde, par da cebolinha.',
    build: (b, r, g) => { for (let i = 0; i < Math.round(10 + 10 * g); i++) { const az = i * 2.4, L = 0.2 * g * r.range(0.6, 1.1), pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.2, L * 0.7, Math.sin(az) * L * 0.2), new V3(Math.cos(az) * L * 0.5, L, Math.sin(az) * L * 0.5), 4);
        b.tube(null, pts, 0.002, 0.0015, col(0x6ab050), col(0x6ab050), 3); fanLeaf(b, mul(T(pts[4].x, pts[4].y, pts[4].z), RY(-az + Math.PI / 2), RX(0.9)), r, { n: 5, L: 0.04, W: 0.03, c: col(0x4aa044), spread: 2.6, ruffle: 0.4, rf: 4, nv: 3 }); } } });
  Vg({ id: 'alface', name: 'Alface', lvl: 2, price: 10, grow: 55, gift: 7, h: 0.2, loves: [0, 2, 3], info: 'Crespa, fresquinha, colhida na hora.',
    build: (b, r, g) => head(b, T(0, 0.012, 0), r, { layers: [{ n: 26, golden: true, L: [0.04, 0.15], W: [0.05, 0.16], a: 1.3, b: 0.4, tilt: [0.12, 1.2], tiltC: [0.12, 1.2], curl: [-0.6, 0.15], curlC: [-0.6, 0.15], cup: [1.0, 0.4], ruffle: 0.35, rf: 4,
      r: [0.001, 0.01], y: [0.03, 0], cols: [col(0xe6f0b8), col(0x9ad060), col(0x6ab848)], cols2: [col(0xd8ecc0), col(0x7ac050), col(0x58a840)], nu: 4, nv: 4, closedScale: 1, vein: 0.05 }] }, 1, g), foliage: true });
  Vg({ id: 'couve', name: 'Couve', lvl: 2, price: 10, grow: 60, gift: 7, h: 0.4, foliage: true, loves: [2, 3], info: 'Folhonas para o refogado de domingo.',
    build: (b, r, g) => { b.tube(null, [new V3(0, 0, 0), new V3(0.005, 0.07 * g, 0), new V3(0, 0.14 * g, 0)], 0.012, 0.01, col(0x8ab878), col(0x8ab878), 5);
      for (let i = 0; i < Math.round(7 + 6 * g); i++) leaf(b, mul(T(0, 0.04 + i * 0.01 * g, 0), RY(i * 2.4), RX(r.range(0.5, 1.15))), r, { L: 0.3 * g * r.range(0.7, 1.1), W: 0.16 * g, a: 1.1, b: 0.5, c: col(0x3f7a5a), tip: col(0x8ab890), ruffle: 0.25, rf: 4, nu: 5, nv: 4, curl: 0.6, vein: 0.4 }); } });
  Vg({ id: 'cenoura', name: 'Cenoura', lvl: 2, price: 11, grow: 60, gift: 8, h: 0.3, loves: [2, 3], info: 'Um tesouro laranja escondido na terra.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const az = i * 2.1 + r(), d = i ? 0.085 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d;
        for (let k = 0; k < 7; k++) { const a2 = k * 0.9 + r(), L = 0.24 * g * r.range(0.6, 1.1), pts = bez(new V3(x, 0, z), new V3(x + Math.cos(a2) * L * 0.15, L * 0.7, z + Math.sin(a2) * L * 0.15), new V3(x + Math.cos(a2) * L * 0.45, L, z + Math.sin(a2) * L * 0.45), 5);
          b.tube(null, pts, 0.002, 0.001, col(0x5aa048), col(0x5aa048), 3); for (let j = 1; j < 6; j++) { const { p, d: dd } = polyAt(pts, j / 6); for (const sd of [-1, 1]) leaf(b, frame(p, new V3(-dd.z * sd, 0.4, dd.x * sd).normalize()), r, { L: 0.035 * g * (1 - j / 9), W: 0.012, c: col(0x4a9a40), nu: 2, nv: 1, fold: 0 }); } }
        if (o > 0) b.lathe(T(x, -0.01, z), [[0.012, 0], [0.02 * g * lerp(0.5, 1, o), 0.028], [0.012, 0.04]], col(0xf2801e), col(0xf79a3a), 8); } } });
  Vg({ id: 'hortela', name: 'Hortelã', lvl: 2, price: 10, grow: 55, gift: 7, spots: ['veg', 'pot', 'window'], h: 0.26, loves: [0, 1], info: 'Refrescante: para o chá e para o suco.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.16, H: 0.22, branches: 11, heads: 0, stemC: col(0x8a6a8a), leaf: { n: 10, L: 0.045, W: 0.03, c: col(0x4aa850), a: 0.85, b: 0.6, ruffle: 0.25, rf: 5, nv: 3 } }, g, -1);
      if (o > 0.2) habitSpike(b, r, { stems: [5, 6], H: 0.28, lean: 0.4, florets: 9, from: 0.78, type: 'card', fs: 0.008, cols: [col(0xc8a8f0), col(0xe8d8ff)], stemC: col(0x6a9a5a) }, g, o); } });
  Vg({ id: 'morango', name: 'Morango', lvl: 3, price: 16, grow: 70, gift: 12, spots: ['veg', 'pot', 'hang', 'window'], h: 0.2, loves: [0, 3], info: 'Vermelhinho, doce, difícil não beliscar.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(8 + 6 * g); i++) { const az = i * 2.4, L = 0.14 * g * r.range(0.6, 1.1), pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.3, L * 0.8, Math.sin(az) * L * 0.3), new V3(Math.cos(az) * L, L * 0.8, Math.sin(az) * L), 4);
        b.tube(null, pts, 0.002, 0.0015, col(0x7ab060), col(0x7ab060), 3); fanLeaf(b, mul(T(pts[4].x, pts[4].y, pts[4].z), RY(-az + Math.PI / 2), RX(1.1)), r, { n: 3, L: 0.05, W: 0.042, c: col(0x3f8f40), spread: 2.2, a: 1.1, b: 0.45, sideShrink: 0.1 }); }
      if (o >= 0) for (let i = 0; i < 7; i++) { const az = i * 2.4 + 1, d = r.range(0.07, 0.17) * g, x = Math.cos(az) * d, z = Math.sin(az) * d;
        if (o < 0.5 || i % 3 === 0) head(b, mul(T(x, 0.06 * g, z), RY(az)), r, H.small5(W, W, col(0xf7e08a)), clamp(o * 2, 0, 1), 1.0);
        else { const M = mul(T(x, 0.03 * g, z), RX(Math.PI)); b.lathe(M, [[0.004, -0.004], [0.017, 0.004], [0.014, 0.02], [0.002, 0.032]], col(0xe8202a), col(0xd81a2a), 7); for (let k = 0; k < 5; k++) b.petal(mul(T(x, 0.034 * g, z), RY(k * 1.25), RX(1.3)), { L: 0.012, W: 0.006, cols: [col(0x4a9a40), col(0x4a9a40), col(0x6ab050)], nu: 2, nv: 1 }); } } } });
  Vg({ id: 'tomate', name: 'Tomate', lvl: 3, price: 18, grow: 80, gift: 13, spots: ['veg', 'pot'], h: 0.7, loves: [1], info: 'Vai do verde ao vermelho, um cacho de cada vez.',
    build: (b, r, g, o) => { b.tube(null, [new V3(0.02, 0, 0), new V3(0.02, 0.4 * g, 0), new V3(0.02, 0.8 * g, 0)], 0.008, 0.008, col(0xa8845a), col(0xb8946a), 5);
      habitBush(b, r, { R: 0.2, H: 0.62, branches: 9, heads: 0, splay: 0.5, fill: 30, stemC: col(0x5a9a48), leaf: { n: 9, L: 0.075, W: 0.04, c: col(0x3a8a3c), ruffle: 0.3, rf: 4, nv: 3 } }, g, -1);
      if (o >= 0) fruitOn(b, r, Math.round(11 * g), 0.2 * g, 0.55 * g, { r: 0.03, tall: 0.9, c: col(0xe0281e), green: col(0x8ab84a), ripe: o, y: 0.08 }); } });
  Vg({ id: 'beterraba', name: 'Beterraba', lvl: 4, price: 18, grow: 80, gift: 13, h: 0.3, loves: [2, 3], info: 'Folhas de veias roxas, raiz doce.',
    build: (b, r, g, o) => { for (let i = 0; i < 2; i++) { const x = i ? 0.09 : -0.03, z = i ? 0.05 : -0.02;
        for (let k = 0; k < 6; k++) { const az = k * 1.1 + r(); const M = mul(T(x, 0.01, z), RY(az), RX(r.range(0.25, 0.75))); b.tube(M, [new V3(0, 0, 0), new V3(0, 0.07 * g, 0)], 0.003, 0.003, col(0xb8285a), col(0xb8285a), 3); leaf(b, mul(M, T(0, 0.06 * g, 0)), r, { L: 0.18 * g, W: 0.075, a: 0.9, b: 0.6, c: col(0x3f7a44), tip: col(0x8a3a5a), tipMix: 0.2, ruffle: 0.2, rf: 3, nv: 3, vein: 0.5 }); }
        if (o > 0) b.blob(T(x, 0.01, z), 0.035 * g * lerp(0.5, 1, o), 0.03 * g, col(0x5a1436), col(0x8a1e4a), 7, 5); } } });
  Vg({ id: 'milho', name: 'Milho', lvl: 4, price: 20, grow: 90, gift: 14, h: 1.3, fixedRot: true, loves: [1], info: 'Para a pamonha e a pipoca da festa junina.',
    build: (b, r, g, o) => { for (let s = 0; s < 2; s++) { const x = s ? 0.1 : -0.08, H0 = 1.25 * g * r.range(0.9, 1.05), pts = mkStem(r, H0, 0.03, s * 3, 0.01, 8); for (const p of pts) p.x += x; b.tube(null, pts, 0.014, 0.008, col(0x6aa84a), col(0x8ab85a), 6);
        for (let i = 0; i < Math.round(8 * g); i++) { const { p } = polyAt(pts, 0.12 + i * 0.1); leaf(b, mul(T(p.x, p.y, p.z), RY(i * Math.PI + s + r() * 0.4), RX(0.7)), r, { L: 0.42 * g, W: 0.05, a: 0.7, b: 0.4, c: col(0x4a9a44), curl: 1.3, curlPow: 1.8, fold: 0.4, nu: 6, nv: 2 }); }
        if (o >= 0) { const top = pts[8]; for (let k = 0; k < 7; k++) b.tube(T(top.x, top.y, top.z), mkStem(r, 0.14 * g, 0.07, k * 0.9, 0.05, 3), 0.002, 0.001, col(0xd8c87a), col(0xe8d88a), 3);
          const { p } = polyAt(pts, 0.5), M = mul(T(p.x, p.y, p.z), RY(s * 2.5 + 0.8), RX(0.5)), k = lerp(0.4, 1, o); b.blob(mul(M, T(0, 0.08 * k, 0.02)), 0.028 * k, 0.085 * k, col(0x8ab84a), o > 0.6 ? col(0xf7d84a) : col(0xa8c85a), 7, 5);
          for (let j = 0; j < 3; j++) b.petal(mul(M, T(0, 0.0, 0.02), RY(j * 2.1), RX(0.1)), { L: 0.15 * k, W: 0.04, a: 0.7, b: 0.5, cup: 1.4, cols: [col(0x8ab84a), col(0xa8c85a), col(0xd8d88a)], nu: 4, nv: 2 }); } } } });
  Vg({ id: 'ervilha', name: 'Ervilha', lvl: 4, price: 18, grow: 80, gift: 13, h: 0.8, fixedRot: true, loves: [0, 3], info: 'Sobe pelos gravetos e enche de vagens.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU; b.tube(null, [new V3(Math.cos(a) * 0.16, 0, Math.sin(a) * 0.16), new V3(Math.cos(a) * 0.08, 0.42, Math.sin(a) * 0.08), new V3(0, 0.85, 0)], 0.006, 0.005, col(0xa8845a), col(0xb8946a), 4);
        const n = Math.round(22 * g), pts = []; for (let k = 0; k <= n; k++) { const t = (k / n) * g, ang = a + t * 7; pts.push(new V3(Math.cos(a) * 0.16 * (1 - t) + Math.cos(ang) * 0.025, t * 0.85, Math.sin(a) * 0.16 * (1 - t) + Math.sin(ang) * 0.025)); }
        b.tube(null, pts, 0.003, 0.002, col(0x6aa850), col(0x7ab860), 3);
        for (let k = 2; k < n; k += 1) { const p = pts[k], d = new V3(r.range(-1, 1), r.range(0, 0.6), r.range(-1, 1)).normalize(); leaf(b, frame(p, d), r, { L: 0.045, W: 0.03, c: col(0x5aa84a), a: 0.9, b: 0.5 });
          if (o >= 0 && k % 3 === 0) { if (o < 0.5) head(b, frame(p.clone().add(d.clone().multiplyScalar(0.03)), d), r, H.small5(W, W, col(0xe8ffd0)), o * 2, 1); else b.blob(mul(T(p.x + d.x * 0.03, p.y - 0.03, p.z + d.z * 0.03), RZ(r.range(-0.3, 0.3))), 0.008, 0.034, col(0x6ab04a), col(0x8ac85a), 5, 4); } } } } });
  Vg({ id: 'pimentao', name: 'Pimentão', lvl: 5, price: 22, grow: 90, gift: 16, spots: ['veg', 'pot'], h: 0.5, loves: [1], info: 'Verde, amarelo ou vermelho, conforme a paciência.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.2, H: 0.42, branches: 9, heads: 0, splay: 0.6, fill: 26, leaf: { n: 8, L: 0.08, W: 0.045, c: col(0x2f8038) } }, g, -1);
      if (o >= 0) fruitOn(b, r, Math.round(6 * g), 0.19 * g, 0.36 * g, { r: 0.034, tall: 1.5, c: r.pick([col(0xe0281e), col(0xf7c81e), col(0xf2701a)]), green: col(0x4a9a3a), ripe: o, y: 0.04 }); } });
  Vg({ id: 'pimenta', name: 'Pimenta', lvl: 5, price: 22, grow: 90, gift: 16, spots: ['veg', 'pot', 'window'], h: 0.4, loves: [1], info: 'Pequena no tamanho, brava no tempero.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.17, H: 0.34, branches: 10, heads: 0, splay: 0.7, fill: 22, leaf: { n: 9, L: 0.05, W: 0.022, c: col(0x2f8038) } }, g, -1);
      if (o >= 0) fruitOn(b, r, Math.round(18 * g), 0.17 * g, 0.34 * g, { r: 0.009, tall: 4, c: col(0xe01e1e), green: col(0x5aa83a), ripe: o, y: 0.06 }); } });
  Vg({ id: 'repolho', name: 'Repolho', lvl: 5, price: 22, grow: 95, gift: 16, h: 0.26, foliage: true, loves: [2, 3], info: 'Uma bola de folhas bem apertadinhas.',
    build: (b, r, g) => { b.blob(T(0, 0.085 * g, 0), 0.085 * g, 0.08 * g, col(0xc8e0a8), col(0xa8d088), 10, 7);
      head(b, T(0, 0.01, 0), r, { layers: [{ n: 12, golden: true, L: [0.13, 0.2], W: [0.14, 0.2], a: 1.2, b: 0.4, tilt: [0.3, 1.2], tiltC: [0.3, 1.2], curl: [-0.9, -0.1], curlC: [-0.9, -0.1], cup: [1.2, 0.5], ruffle: 0.15, rf: 3,
        r: [0.01, 0.02], y: [0.01, 0], cols: [col(0xc8e0a8), col(0x7ab878), col(0x5a9a70)], nu: 5, nv: 4, closedScale: 1, vein: 0.3 }] }, 1, g); } });
  Vg({ id: 'abobrinha', name: 'Abobrinha', lvl: 5, price: 22, grow: 90, gift: 16, h: 0.4, loves: [1], info: 'Flor amarela que vira legume.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(6 + 4 * g); i++) { const az = i * 2.4, L = 0.3 * g * r.range(0.7, 1.1), pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.4, L * 0.8, Math.sin(az) * L * 0.4), new V3(Math.cos(az) * L, L * 0.75, Math.sin(az) * L), 5); b.tube(null, pts, 0.006, 0.004, col(0x7ab060), col(0x7ab060), 5);
        leaf(b, mul(T(pts[5].x, pts[5].y, pts[5].z), RY(-az + Math.PI / 2), RX(1.15)), r, { L: 0.17 * g, W: 0.17 * g, a: 0.85, b: 0.35, c: col(0x3f8a40), tip: col(0xb8d0a0), tipMix: 0.2, ruffle: 0.2, rf: 5, nu: 4, nv: 4 }); }
      if (o >= 0) for (let i = 0; i < 3; i++) { const az = i * 2.1 + 0.5; if (o < 0.6) head(b, mul(T(Math.cos(az) * 0.08, 0.05, Math.sin(az) * 0.08), RY(az), RX(0.5)), r, flat5(col(0xf2b21a), col(0xf9d84a), null, { L: 0.05, W: 0.04 }), o * 1.6, 1);
        else b.blob(mul(T(Math.cos(az) * 0.12 * g, 0.03, Math.sin(az) * 0.12 * g), RY(-az), RZ(Math.PI / 2)), 0.026 * g, 0.1 * g, col(0x3f8a3a), col(0x5aa048), 7, 5, col(0x8ab860)); } } });
  const vine = (b, r, g, o, P) => { for (let i = 0; i < Math.round(4 + 3 * g); i++) { const az = i * 2.4 + r() * 0.4, L = 0.42 * g * r.range(0.7, 1.1), pts = [];
      for (let k = 0; k <= 8; k++) { const t = k / 8; pts.push(new V3(Math.cos(az + Math.sin(t * 4 + i) * 0.4) * L * t, 0.015 + Math.sin(t * 6) * 0.012, Math.sin(az + Math.sin(t * 4 + i) * 0.4) * L * t)); }
      b.tube(null, pts, 0.006, 0.003, col(0x6aa050), col(0x7ab060), 4);
      for (let k = 2; k <= 8; k += 2) { const p = pts[k], a2 = r() * 6; b.tube(T(p.x, p.y, p.z), [new V3(0, 0, 0), new V3(0, 0.07 * g, 0)], 0.003, 0.003, col(0x7ab060), col(0x7ab060), 3);
        leaf(b, mul(T(p.x, p.y + 0.07 * g, p.z), RY(a2), RX(1.25)), r, { L: 0.13 * g, W: 0.14 * g, a: 0.85, b: 0.35, c: P.leaf, ruffle: 0.2, rf: 5, nu: 4, nv: 4 }); } }
    if (o >= 0) for (let i = 0; i < P.n; i++) { const az = i * 2.6 + 0.9, d = (0.12 + i * 0.1) * g, k = lerp(0.3, 1, o); P.fruit(mul(T(Math.cos(az) * d, P.r * k * 0.8, Math.sin(az) * d), RY(r() * 6)), k); } };
  Vg({ id: 'abobora', name: 'Abóbora', lvl: 6, price: 28, grow: 110, gift: 20, h: 0.3, loves: [2], season: 2, info: 'Só no outono: rama comprida e moranga gorda.',
    build: (b, r, g, o) => vine(b, r, g, o, { leaf: col(0x3f8a40), n: 2, r: 0.1, fruit: (M, k) => { const prof = []; for (let i = 0; i <= 8; i++) { const t = i / 8; prof.push([Math.sin(t * Math.PI) ** 0.6 * 0.105 * k, (t - 0.5) * 0.15 * k]); }
      b.lathe(M, prof, col(0xd8701a), col(0xf79a2a), 24, null, 0.0, 8); b.tube(mul(M, T(0, 0.075 * k, 0)), [new V3(0, 0, 0), new V3(0.01, 0.03, 0)], 0.008, 0.006, col(0x6a8a3a), col(0x7a9a4a), 5); } }) });
  Vg({ id: 'brocolis', name: 'Brócolis', lvl: 6, price: 26, grow: 100, gift: 19, h: 0.36, loves: [2, 3], info: 'Uma arvorezinha que vai para a panela.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(6 + 4 * g); i++) leaf(b, mul(T(0, 0.02, 0), RY(i * 2.4), RX(r.range(0.6, 1.2))), r, { L: 0.26 * g, W: 0.1 * g, a: 1.0, b: 0.5, c: col(0x4a8a70), tip: col(0x9ac0a8), ruffle: 0.25, rf: 4, nu: 5, nv: 3, curl: 0.5, vein: 0.4 });
      b.tube(null, [new V3(0, 0, 0), new V3(0, 0.12 * g, 0)], 0.016, 0.014, col(0x8ab878), col(0x8ab878), 6);
      if (o >= 0) for (let i = 0; i < 22; i++) { const y = 1 - (i + 0.5) / 22 * 1.1, rr = Math.sqrt(Math.max(0, 1 - y * y)), th = i * 2.4, R0 = 0.07 * g * lerp(0.4, 1, o); b.blob(T(Math.cos(th) * rr * R0, 0.15 * g + y * R0 * 0.6, Math.sin(th) * rr * R0), 0.026 * g * lerp(0.5, 1, o), 0.022 * g, col(0x2f6a34), col(0x4a8a44), 6, 4); } } });
  Vg({ id: 'berinjela', name: 'Berinjela', lvl: 7, price: 30, grow: 110, gift: 22, spots: ['veg', 'pot'], h: 0.55, loves: [1], info: 'Roxo brilhante entre flores lilases.',
    build: (b, r, g, o) => { habitBush(b, r, { R: 0.22, H: 0.46, branches: 9, heads: o >= 0 && o < 0.6 ? 6 : 0, splay: 0.65, fill: 24, stemC: col(0x6a5a7a), leaf: { n: 8, L: 0.1, W: 0.065, c: col(0x4a8a58), tip: col(0x8a7aa0), tipMix: 0.15 }, head: flat5(col(0x9a7ae0), col(0xc8b0f4), null, { L: 0.022, W: 0.02 }) }, g, o);
      if (o >= 0.6) fruitOn(b, r, Math.round(5 * g), 0.2 * g, 0.34 * g, { r: 0.034, tall: 2.3, c: col(0x3a1a52), green: col(0x6a4a8a), ripe: o, y: 0.03 }); } });
  Vg({ id: 'couve_flor', name: 'Couve-flor', lvl: 7, price: 30, grow: 110, gift: 22, h: 0.34, loves: [3], season: 3, info: 'Só no inverno: uma nuvem branca na horta.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(7 + 4 * g); i++) leaf(b, mul(T(0, 0.02, 0), RY(i * 2.4), RX(r.range(0.45, 1.05))), r, { L: 0.24 * g, W: 0.11 * g, a: 1.0, b: 0.5, c: col(0x4a8a60), tip: col(0xa8c8a0), ruffle: 0.25, rf: 4, nu: 5, nv: 3, curl: 0.3, cup: 0.5, vein: 0.4 });
      if (o >= 0) for (let i = 0; i < 20; i++) { const y = 1 - (i + 0.5) / 20 * 1.05, rr = Math.sqrt(Math.max(0, 1 - y * y)), th = i * 2.4, R0 = 0.075 * g * lerp(0.4, 1, o); b.blob(T(Math.cos(th) * rr * R0, 0.07 * g + y * R0 * 0.55, Math.sin(th) * rr * R0), 0.028 * g * lerp(0.5, 1, o), 0.024 * g, col(0xe8e0c8), col(0xfbf6ea), 6, 4); } } });
  Vg({ id: 'melancia', name: 'Melancia', lvl: 8, price: 36, grow: 125, gift: 26, h: 0.32, loves: [1], season: 1, info: 'Só no verão: listrada por fora, festa por dentro.',
    build: (b, r, g, o) => vine(b, r, g, o, { leaf: col(0x4a9050), n: 2, r: 0.11, fruit: (M, k) => { const st = b.n, nu = 12, nv = 7, c = new THREE.Color();
      for (let i = 0; i <= nv; i++) { const ph = (i / nv) * Math.PI, y = -Math.cos(ph), s = Math.sin(ph); for (let j = 0; j <= nu; j++) { const th = (j / nu) * TAU; c.set(j % 2 ? 0x2a6a34 : 0x6ab04a); b.vert(Math.cos(th) * s * 0.105 * k, y * 0.1 * k, Math.sin(th) * s * 0.135 * k, c, M); } }
      b.quadGrid(st, nv, nu, false); } }) });
}

// ================= rarities: appear when the two parents bloom side by side =================
export function rareSpecies(add, H) {
  const Hy = (d) => add({ spots: ['bed', 'pot'], rare: true, ...d });
  const sun = { ...H.sunflower, layers: H.sunflower.layers.map((l) => ({ ...l, cols: [col(0x7a1a14), col(0xb8301e), col(0xe8782a)] })) };
  const daisy = (c0, c1, c2) => ({ sepals: { n: 8, L: 0.012, W: 0.006 }, layers: [{ n: 17, L: 0.05, W: 0.013, a: 0.7, b: 0.4, tilt: 1.42, tiltC: 0.2, curl: 0.2, cup: 0.5, cols: [c0, c1, c2], nu: 4, nv: 2 }, { n: 15, L: 0.045, W: 0.013, a: 0.7, b: 0.4, tilt: 1.3, tiltC: 0.15, curl: 0.15, cup: 0.5, cols: [c0, c1, c2], nu: 4, nv: 2 }], center: { ...YEL, r: 0.016, h: 0.009 } });
  const roseBush = (a, c, t) => (b, r, g, o) => habitBush(b, r, { R: 0.3, H: 0.55, branches: 12, heads: 9, stalk: 0.1, splay: 0.85, wood: col(0x4a5a34), stemR: 0.007, fill: 46, leaf: { n: 13, L: 0.075, W: 0.046, c: col(0x2c6634), a: 0.85, b: 0.7, fold: 0.3, tilt: 1.1 }, head: H.rose(col(a), col(c), col(t)), headK: 1.25, headUp: 0.5 }, g, o);
  Hy({ id: 'margarida_rosa', name: 'Margarida-rosa', hybrid: ['margarida', 'amor_perfeito'], lvl: 2, price: 20, grow: 55, gift: 14, h: 0.4, spots: ['bed', 'pot', 'window'], loves: [0], info: 'A margarida ficou corada de tanto olhar o amor-perfeito.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [6, 8], H: 0.34, lean: 0.22, spread: 0.09, stemR: 0.003, basal: { n: 12, L: 0.13, W: 0.04, a: 1.3, b: 0.7, tilt: 1.0 }, leaf: { n: 2, L: 0.05, W: 0.014, tilt: 0.7 }, head: daisy(col(0xe85a9a), col(0xf78ab8), col(0xfcc0da)) }, g, o) });
  Hy({ id: 'tulipa_rajada', name: 'Tulipa rajada', hybrid: ['tulipa_vermelha', 'tulipa_amarela'], lvl: 2, price: 26, grow: 70, gift: 18, h: 0.45, spots: ['bed', 'pot', 'window'], loves: [0], info: 'Chamas vermelhas lambendo o amarelo.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [5, 6], H: 0.4, lean: 0.12, spread: 0.1, stemR: 0.0045, stemC: col(0x7aa860), basal: { n: 9, L: 0.26, W: 0.055, a: 0.75, b: 0.6, tilt: 0.3, curl: 0.55, fold: 0.5, c: col(0x5f9a6a), r: 0.02 }, head: H.tulip(col(0xf7d84a), col(0xe8301e), col(0xfbe04a)) }, g, o) });
  Hy({ id: 'lavanda_branca', name: 'Lavanda-branca', hybrid: ['lavanda', 'margarida'], lvl: 3, price: 28, grow: 80, gift: 20, h: 0.55, loves: [1], info: 'O perfume é o mesmo, a cor é de nuvem.',
    build: (b, r, g, o) => { basalLeaves(b, r, { n: Math.round(40 * g), L: 0.16 * g, W: 0.012, c: col(0x8aa58c), tip: col(0xb8c9b0), tilt: 0.55, curl: 0.3, fold: 0.2, a: 0.8, b: 0.9 });
      habitSpike(b, r, { stems: [16, 20], H: 0.5, lean: 0.4, stemC: col(0x8fae82), stemR: 0.0025, florets: 22, from: 0.68, type: 'card', fs: 0.011, off: 0.004, whorl: 1.3, taper: 0.4, cols: [col(0xf4f0ff), W], bud: col(0xb8c4b8) }, g, o); } });
  Hy({ id: 'amor_perfeito_azul', name: 'Amor-perfeito-azul', hybrid: ['amor_perfeito', 'miosotis'], lvl: 3, price: 28, grow: 65, gift: 20, h: 0.2, spots: ['bed', 'pot', 'window', 'hang'], loves: [3, 0], info: 'Carinhas cor de céu de inverno.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.14, H: 0.13, branches: 9, heads: 9, stalk: 0.25, headUp: 0.25, leaf: { n: 7, L: 0.045, W: 0.03, c: col(0x3f8a3f), a: 0.9, b: 0.6, tilt: 1.1 }, head: H.pansy(col(0x3a6ae0), col(0x9ac0f8), col(0x14205a)), headK: 1.15 }, g, o) });
  Hy({ id: 'cosmos_chocolate', name: 'Cosmos-chocolate', hybrid: ['cosmos', 'papoula'], lvl: 5, price: 40, grow: 75, gift: 28, h: 0.65, loves: [1, 2], info: 'Vinho escuro, com cheirinho de cacau.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [7, 9], H: 0.6, lean: 0.3, spread: 0.08, stemR: 0.0025, wob: 0.09, leaf: { n: 8, L: 0.07, W: 0.005, tilt: 0.9, c: col(0x5a9a48), fold: 0 }, head: H.cosmos(col(0x5a1420), col(0x8a2a34)), headTilt: 0.35 }, g, o) });
  Hy({ id: 'girassol_rubro', name: 'Girassol-rubro', hybrid: ['girassol', 'papoula'], lvl: 5, price: 44, grow: 110, gift: 31, spots: ['bed'], h: 1.6, fixedRot: true, loves: [1], info: 'Um pôr do sol inteiro numa flor.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [2, 3], H: 1.5, lean: 0.06, spread: 0.2, stemR: 0.016, stemC: col(0x6a9a40), faceZ: true, wob: 0.03, leaf: { n: 9, L: 0.24, W: 0.19, a: 0.7, b: 0.75, tilt: 1.15, curl: 0.7, c: col(0x4a8a36), fold: 0.25, nu: 5, nv: 4, t0: 0.12, t1: 0.9 }, head: sun, headTilt: 1.15 }, g, o) });
  Hy({ id: 'rosa_mesclada', name: 'Rosa mesclada', hybrid: ['rosa_vermelha', 'rosa_branca'], lvl: 7, price: 60, grow: 130, gift: 42, h: 0.75, loves: [0, 1], info: 'Branca por dentro, com as pontas beijadas de vermelho.', build: roseBush(0xfaf2ea, 0xfdf6f0, 0xe0304a) });
  Hy({ id: 'rosa_azul', name: 'Rosa azul', hybrid: ['rosa_branca', 'lavanda'], lvl: 7, price: 70, grow: 130, gift: 50, h: 0.75, loves: [0, 1], info: 'A flor que diziam ser impossível.', build: roseBush(0x4a5ac8, 0x7a8ae8, 0xb8c4f8) });
  Hy({ id: 'lirio_tigre', name: 'Lírio-tigre', hybrid: ['lirio', 'zinia'], lvl: 6, price: 54, grow: 120, gift: 38, h: 0.8, loves: [1], info: 'Laranja vivo, recurvado como uma coroa.',
    build: (b, r, g, o) => habitStems(b, r, { stems: [3, 4], H: 0.72, lean: 0.14, spread: 0.07, stemR: 0.006, leaf: { n: 22, L: 0.11, W: 0.018, tilt: 0.95, c: col(0x3f8a44), t0: 0.08, t1: 0.82, taper: 0.5 }, head: H.lily(col(0xf2701a), col(0xf79a3a), col(0x8a2a0c)), headsPer: 3, pedicel: 0.07, headTilt: 1.05, headK: 1.05 }, g, o) });
  Hy({ id: 'hortensia_lilas', name: 'Hortênsia lilás', hybrid: ['hortensia_azul', 'hortensia_rosa'], lvl: 8, price: 66, grow: 150, gift: 46, h: 0.7, loves: [1], info: 'Nem azul nem rosa: as duas se abraçaram.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.36, H: 0.5, branches: 9, heads: 8, splay: 0.95, stalk: 0.05, leaf: { n: 8, L: 0.13, W: 0.09, c: col(0x3a8040), a: 0.8, b: 0.6, fold: 0.25, curl: 0.6, tilt: 1.15, nu: 4, nv: 3 }, head: { ball: { n: 46, r: 0.095, fs: 0.034, cols: [0xa878e0, 0xc4a0f0, 0x9a6ad8, 0xd8c0f8].map(col), squash: 0.75, cover: 0.35 } }, headUp: 0.6 }, g, o) });
  Hy({ id: 'dalia_negra', name: 'Dália-negra', hybrid: ['dalia', 'rosa_vermelha'], lvl: 7, price: 64, grow: 130, gift: 45, h: 0.7, loves: [1, 2], info: 'Bordô tão fundo que parece veludo.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.26, H: 0.55, branches: 8, heads: 5, stalk: 0.14, splay: 0.8, leaf: { n: 8, L: 0.1, W: 0.05, c: col(0x2f5a3a), tilt: 1.1 }, head: H.dahlia(col(0x3a0a18), col(0x7a1a2e)), headK: 1.5, headUp: 0.35 }, g, o) });
  Hy({ id: 'peonia_coral', name: 'Peônia coral', hybrid: ['peonia', 'rosa_pessego'], lvl: 10, price: 80, grow: 160, gift: 56, h: 0.7, loves: [0], info: 'Abre coral e desbota para creme, dia após dia.',
    build: (b, r, g, o) => habitBush(b, r, { R: 0.3, H: 0.52, branches: 8, heads: 5, stalk: 0.1, splay: 0.85, leaf: { n: 9, L: 0.1, W: 0.04, c: col(0x2f6e3a), tilt: 1.1 }, head: H.peony(col(0xf2705a), col(0xfbc0a0)), headK: 1.45, headUp: 0.45 }, g, o) });
  const Vh = (d) => add({ spots: ['veg'], veg: true, rare: true, ...d });
  Vh({ id: 'cenoura_roxa', name: 'Cenoura roxa', hybrid: ['cenoura', 'beterraba'], lvl: 4, price: 24, grow: 60, gift: 17, h: 0.3, loves: [2, 3], info: 'Como eram as cenouras de antigamente.',
    build: (b, r, g, o) => { for (let i = 0; i < 3; i++) { const az = i * 2.1 + r(), d = i ? 0.085 : 0, x = Math.cos(az) * d, z = Math.sin(az) * d;
        for (let k = 0; k < 7; k++) leaf(b, mul(T(x, 0.01, z), RY(k * 0.9 + r()), RX(r.range(0.25, 0.8))), r, { L: 0.22 * g, W: 0.03, c: col(0x4a8a50), tip: col(0x8a5a8a), tipMix: 0.2, ruffle: 0.4, rf: 6, nv: 3 });
        if (o > 0) b.lathe(T(x, -0.01, z), [[0.012, 0], [0.02 * g * lerp(0.5, 1, o), 0.028], [0.012, 0.04]], col(0x5a1e7a), col(0x7a3a9a), 8); } } });
  Vh({ id: 'tomate_amarelo', name: 'Tomate-amarelo', hybrid: ['tomate', 'pimentao'], lvl: 5, price: 34, grow: 80, gift: 24, spots: ['veg', 'pot'], h: 0.7, loves: [1], info: 'Docinho, parece um cacho de sóis.',
    build: (b, r, g, o) => { b.tube(null, [new V3(0.02, 0, 0), new V3(0.02, 0.4 * g, 0), new V3(0.02, 0.8 * g, 0)], 0.008, 0.008, col(0xa8845a), col(0xb8946a), 5);
      habitBush(b, r, { R: 0.2, H: 0.62, branches: 9, heads: 0, splay: 0.5, fill: 30, stemC: col(0x5a9a48), leaf: { n: 9, L: 0.075, W: 0.04, c: col(0x3a8a3c), ruffle: 0.3, rf: 4, nv: 3 } }, g, -1);
      if (o >= 0) fruitOn(b, r, Math.round(14 * g), 0.2 * g, 0.55 * g, { r: 0.024, tall: 1.2, c: col(0xf7c81e), green: col(0x8ab84a), ripe: o, y: 0.08 }); } });
  Vh({ id: 'morango_branco', name: 'Morango-branco', hybrid: ['morango', 'alface'], lvl: 4, price: 30, grow: 70, gift: 21, spots: ['veg', 'pot', 'hang', 'window'], h: 0.2, loves: [0, 3], info: 'Branquinho com sementes vermelhas e gosto de abacaxi.',
    build: (b, r, g, o) => { for (let i = 0; i < Math.round(8 + 6 * g); i++) { const az = i * 2.4, L = 0.14 * g * r.range(0.6, 1.1), pts = bez(new V3(0, 0, 0), new V3(Math.cos(az) * L * 0.3, L * 0.8, Math.sin(az) * L * 0.3), new V3(Math.cos(az) * L, L * 0.8, Math.sin(az) * L), 4);
        b.tube(null, pts, 0.002, 0.0015, col(0x7ab060), col(0x7ab060), 3); fanLeaf(b, mul(T(pts[4].x, pts[4].y, pts[4].z), RY(-az + Math.PI / 2), RX(1.1)), r, { n: 3, L: 0.05, W: 0.042, c: col(0x4a9a48), spread: 2.2, a: 1.1, b: 0.45, sideShrink: 0.1 }); }
      if (o >= 0) for (let i = 0; i < 7; i++) { const az = i * 2.4 + 1, d = r.range(0.07, 0.17) * g, x = Math.cos(az) * d, z = Math.sin(az) * d; b.lathe(mul(T(x, 0.03 * g, z), RX(Math.PI)), [[0.004, -0.004], [0.017, 0.004], [0.014, 0.02], [0.002, 0.032]], col(0xfff4ec), col(0xfbe0d8), 7); } } });
}

// seasons the first catalogue loves (kept here so both lists live side by side)
export const LOVES = {
  margarida: [0], tagetes: [1, 2], tulipa_vermelha: [0], tulipa_amarela: [0], tulipa_rosa: [0], tulipa_roxa: [0], amor_perfeito: [3, 0], lavanda: [1], petunia: [1], suculenta: [1], geranio: [0, 1], samambaia: [1], cosmos: [1, 2], girassol: [1],
  narciso: [0, 3], manjericao: [1], cacto: [1], hera: [3], papoula: [0], zinia: [1], rosa_vermelha: [0, 1], rosa_rosa: [0, 1], rosa_branca: [0, 1], rosa_amarela: [0, 1], rosa_pessego: [0, 1], lirio: [1], costela: [1], hortensia_azul: [1], hortensia_rosa: [1],
  dalia: [1, 2], bromelia: [1], peonia: [0], delfinio: [1], dedaleira: [0], hibisco: [1], copo_de_leite: [0, 3], azaleia: [3, 0], orquidea: [3], camelia: [3], ninfeia: [1], lotus: [1], cerejeira: [0], limoeiro: [3], ipe_amarelo: [3], laranjeira: [3], jacaranda: [0],
  rosa_trepadeira: [0, 1], glicinia: [0], primavera: [1], jasmim: [1], alecrim: [0, 1],
};
