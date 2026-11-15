// Garden ornaments Eliane can buy and put wherever she likes.
import * as THREE from 'three';
import { SB, propMat } from './world.js';
import { Builder } from './builder.js';
import { makePlantMaterial } from './plantmat.js';
import { T, RX, RY, RZ, S, mul, col, mulberry, TAU } from './util.js';

const V3 = THREE.Vector3;
// r: space it takes on the ground (m). cat: shop section.
export const DECO = [
  { id: 'placa', name: 'Placa do jardim', price: 80, lvl: 1, beauty: 8, r: 0.3, cat: 'Enfeites', info: '“Jardim da Eliane”, pintada à mão.' },
  { id: 'cogumelos', name: 'Cogumelos de jardim', price: 60, lvl: 1, beauty: 8, r: 0.3, cat: 'Enfeites', info: 'Três chapeuzinhos vermelhos de bolinhas.' },
  { id: 'catavento', name: 'Cata-vento', price: 70, lvl: 1, beauty: 8, r: 0.22, cat: 'Enfeites', info: 'Gira sem parar com a brisa.' },
  { id: 'regador', name: 'Regador antigo', price: 100, lvl: 2, beauty: 10, r: 0.3, cat: 'Enfeites', info: 'Virou vaso: transborda de flores.' },
  { id: 'flamingo', name: 'Flamingo', price: 90, lvl: 2, beauty: 10, r: 0.25, cat: 'Enfeites', info: 'Cor-de-rosa e elegante numa perna só.' },
  { id: 'coelho', name: 'Coelhinho de pedra', price: 110, lvl: 2, beauty: 10, r: 0.25, cat: 'Enfeites', info: 'De orelhas em pé, vigiando as cenouras.' },
  { id: 'patos', name: 'Família de patos', price: 120, lvl: 3, beauty: 10, r: 0.38, cat: 'Enfeites', info: 'Mamãe pata e dois patinhos de cerâmica.' },
  { id: 'lampiao', name: 'Lampião', price: 130, lvl: 3, beauty: 12, r: 0.22, cat: 'Luzes', info: 'Acende sozinho quando escurece.' },
  { id: 'vaso_azul', name: 'Vaso de cerâmica azul', price: 150, lvl: 3, beauty: 12, r: 0.35, cat: 'Enfeites', info: 'Grandão, esmaltado, com folhagem.' },
  { id: 'cerca_viva', name: 'Cerca-viva', price: 160, lvl: 3, beauty: 12, r: 0.75, cat: 'Verde', info: 'Um bloco de buxinho bem aparado.' },
  { id: 'piquenique', name: 'Piquenique', price: 260, lvl: 3, beauty: 18, r: 0.9, cat: 'Cantinhos', info: 'Toalha xadrez, cesta e almofadas.' },
  { id: 'sino', name: 'Sino dos ventos', price: 140, lvl: 4, beauty: 12, r: 0.22, cat: 'Enfeites', info: 'Tilinta baixinho quando venta.' },
  { id: 'topiaria_bola', name: 'Topiária em bolas', price: 220, lvl: 4, beauty: 16, r: 0.38, cat: 'Verde', info: 'Três pompons verdes num vaso.' },
  { id: 'luzinhas', name: 'Varal de luzinhas', price: 320, lvl: 4, beauty: 22, r: 0.3, cat: 'Luzes', info: 'Um colar de lâmpadas para as noites.' },
  { id: 'mesa_cha', name: 'Mesinha de chá', price: 420, lvl: 4, beauty: 26, r: 0.95, cat: 'Cantinhos', info: 'Bule, xícaras e duas cadeiras.' },
  { id: 'bola', name: 'Globo espelhado', price: 180, lvl: 5, beauty: 14, r: 0.28, cat: 'Enfeites', info: 'Reflete o jardim inteiro numa bola.' },
  { id: 'relogio', name: 'Relógio de sol', price: 200, lvl: 5, beauty: 14, r: 0.35, cat: 'Enfeites', info: 'Marca as horas pela sombra.' },
  { id: 'fogueira', name: 'Fogueirinha', price: 340, lvl: 5, beauty: 22, r: 0.6, cat: 'Luzes', info: 'Pedras em roda e um fogo manso.' },
  { id: 'balanco', name: 'Balanço de jardim', price: 450, lvl: 5, beauty: 28, r: 1.0, cat: 'Cantinhos', info: 'Balança devagarinho, convidando a sentar.' },
  { id: 'topiaria_espiral', name: 'Topiária espiral', price: 300, lvl: 6, beauty: 20, r: 0.38, cat: 'Verde', info: 'Um caracol de folhas subindo ao céu.' },
  { id: 'rede', name: 'Rede de descanso', price: 380, lvl: 6, beauty: 24, r: 1.15, cat: 'Cantinhos', info: 'Para a soneca depois do almoço.' },
  { id: 'bicicleta', name: 'Bicicleta florida', price: 480, lvl: 6, beauty: 30, r: 0.85, cat: 'Cantinhos', info: 'Com o cestinho cheio de flores.' },
  { id: 'poco', name: 'Poço dos desejos', price: 650, lvl: 6, beauty: 36, r: 0.85, cat: 'Construções', info: 'Jogue uma moedinha e faça um pedido.' },
  { id: 'estatua', name: 'Anjinho de pedra', price: 380, lvl: 7, beauty: 24, r: 0.35, cat: 'Enfeites', info: 'Guarda o jardim com um sorriso.' },
  { id: 'guarda_sol', name: 'Cadeira com guarda-sol', price: 400, lvl: 7, beauty: 24, r: 1.0, cat: 'Cantinhos', info: 'Sombra listrada para ler um livro.' },
  { id: 'moinho', name: 'Moinho de vento', price: 520, lvl: 7, beauty: 30, r: 0.6, cat: 'Construções', info: 'As pás giram com o vento.' },
  { id: 'carroca', name: 'Carroça de flores', price: 560, lvl: 8, beauty: 32, r: 0.9, cat: 'Cantinhos', info: 'Uma carrocinha transbordando cores.' },
  { id: 'fonte', name: 'Fonte de pedra', price: 900, lvl: 8, beauty: 45, r: 1.0, cat: 'Construções', info: 'Três andares de água cantando.' },
  { id: 'ponte', name: 'Pontezinha de madeira', price: 600, lvl: 9, beauty: 34, r: 1.0, cat: 'Construções', info: 'Arqueada, como nos jardins japoneses.' },
  { id: 'coreto', name: 'Coreto', price: 2200, lvl: 10, beauty: 80, r: 1.7, cat: 'Construções', info: 'O orgulho do jardim, com telhadinho.' },
  // little helpers that give something from time to time, even while the game is closed. prod: { every (s), coins | adubo, what }
  { id: 'composteira', name: 'Composteira', price: 900, lvl: 4, beauty: 10, r: 0.55, cat: 'Criação', info: 'Transforma folhas secas em adubo, de tempos em tempos.', prod: { every: 3 * 3600, adubo: 1, what: 'adubo' } },
  { id: 'colmeia', name: 'Colmeia', price: 1800, lvl: 6, beauty: 22, r: 0.5, cat: 'Criação', info: 'As abelhas passeiam pelas flores e deixam potes de mel.', prod: { every: 3600, coins: 70, what: 'mel' } },
  { id: 'galinheiro', name: 'Galinheiro', price: 2600, lvl: 8, beauty: 30, r: 1.25, cat: 'Criação', info: 'Três galinhas ciscando no quintal. Tem ovo fresquinho todo dia.', prod: { every: 2400, coins: 55, what: 'ovos' } },
  { id: 'casa_passaros', name: 'Viveiro aberto', price: 3400, lvl: 10, beauty: 40, r: 0.7, cat: 'Criação', info: 'Os passarinhos entram e saem quando querem, e sempre deixam uma surpresa.', prod: { every: 5400, coins: 160, what: 'surpresa' } },
];
export const DECO_BY = Object.fromEntries(DECO.map((d) => [d.id, d]));

const STONE = 0xcfc8bc, WOOD = 0xa47850, WOODD = 0x7d5c40, WHT = 0xf6f2e8, IRON = 0x3a3a3a;
const glowMat = (c, e) => { const m = new THREE.MeshStandardMaterial({ color: 0xfff0c8, emissive: c, emissiveIntensity: 0, roughness: 0.4 }); m.userData.e = e; return m; };
// a little bunch of flowers at given points
function posy(g, pts, seed, s = 1) { const b = new Builder(), r = mulberry(seed), cs = [0xf06a9a, 0xf7c81e, 0xffffff, 0x9a7ae8, 0xf2701a, 0xe8384a].map(col);
  for (const [x, y, z] of pts) { const hgt = r.range(0.08, 0.2) * s, c = r.pick(cs);
    b.tube(T(x, y, z), [new V3(0, 0, 0), new V3(0.01, hgt * 0.5, 0), new V3(r.range(-0.04, 0.04), hgt, r.range(-0.04, 0.04))], 0.004, 0.003, col(0x4a8a3a), col(0x5a9a44), 4);
    for (let k = 0; k < 6; k++) b.petal(mul(T(x, y + hgt, z), RY(k * 1.05), RX(1.2)), { L: 0.045 * s, W: 0.03 * s, nu: 2, nv: 2, cup: 0.3, cols: [c, c, c] });
    for (let k = 0; k < 3; k++) b.petal(mul(T(x, y, z), RY(r() * 6), RX(r.range(0.5, 1.1))), { L: 0.1 * s, W: 0.04 * s, nu: 2, nv: 2, fold: 0.3, cols: [col(0x3a7a34), col(0x4c8a3a), col(0x6aa04a)] }); }
  const m = new THREE.Mesh(b.build(), makePlantMaterial({ sway: 0.35 })); m.castShadow = true; g.add(m); }
function leafy(g, fn, seed) { const b = new Builder(); fn(b, mulberry(seed)); const m = new THREE.Mesh(b.build(), makePlantMaterial({ sway: 0.05, glow: 0.08 })); m.castShadow = true; m.receiveShadow = true; g.add(m); }
const ball = (b, r, x, y, z, R, n = 150) => { b.blob(T(x, y, z), R * 0.9, R * 0.9, col(0x2a6a34), col(0x3f8a44), 10, 7);
  for (let i = 0; i < n; i++) { const yy = 1 - ((i + 0.5) / n) * 2, rr = Math.sqrt(1 - yy * yy), th = i * 2.4, nx = Math.cos(th) * rr, nz = Math.sin(th) * rr;
    b.card(mul(T(x + nx * R, y + yy * R, z + nz * R), RY(r() * 6), RX(r.range(0.4, 1.6))), R * 0.3, R * 0.4, col(0x2f7a38), r() < 0.5 ? col(0x4a9a48) : col(0x5aaa50), nx, yy, nz, 0.2); } };

const B = {
  placa(sb, g) { sb.box(0.06, 0.9, 0.06, 0, 0.45, 0, WOODD); sb.box(0.86, 0.36, 0.045, 0, 0.82, 0.03, 0xd8b88a, RZ(-0.03));
    const c = document.createElement('canvas'); c.width = 512; c.height = 200; const x = c.getContext('2d'); x.fillStyle = '#e2c79c'; x.fillRect(0, 0, 512, 200); x.fillStyle = '#5a7a4a'; x.textAlign = 'center'; x.font = '600 60px Fredoka, Nunito, sans-serif'; x.fillText('Jardim', 256, 84); x.fillStyle = '#b8483a'; x.font = '700 72px Fredoka, Nunito, sans-serif'; x.fillText('da Eliane', 256, 162);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const p = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.31), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 })); p.position.set(0, 0.82, 0.055); p.rotation.z = -0.03; g.add(p); posy(g, [[0.2, 0, 0.1], [-0.22, 0, 0.08]], 3); },
  cogumelos(sb) { for (const [x, z, s] of [[0, 0, 1], [0.17, 0.08, 0.7], [-0.12, 0.13, 0.55]]) { sb.cyl(0.035 * s, 0.045 * s, 0.2 * s, x, 0.1 * s, z, 0xf4eede, 8); sb.add(new THREE.SphereGeometry(0.13 * s, 12, 8, 0, TAU, 0, Math.PI / 2), mul(T(x, 0.19 * s, z), S(1, 0.8, 1)), 0xd8302a, 0);
      for (let k = 0; k < 6; k++) { const a = k * 1.05 + s; sb.sph(0.022 * s, x + Math.cos(a) * 0.075 * s, 0.19 * s + 0.07 * s, z + Math.sin(a) * 0.075 * s, 0xffffff, 1, 0.5, 1, 6, 0); } } },
  catavento(sb, g) { sb.cyl(0.012, 0.012, 1.1, 0, 0.55, 0, 0x8a6a4a, 6); const w = new THREE.Group(); w.position.set(0, 1.08, 0.03); const cs = [0xe8483a, 0xf7c84a, 0x5a9ad8, 0x6ab86a];
    for (let i = 0; i < 4; i++) { const tri = new THREE.Shape(); tri.moveTo(0, 0); tri.lineTo(0.2, 0); tri.quadraticCurveTo(0.14, 0.12, 0, 0.1); const m = new THREE.Mesh(new THREE.ShapeGeometry(tri), new THREE.MeshStandardMaterial({ color: cs[i], side: THREE.DoubleSide, roughness: 0.6 })); m.rotation.z = (i / 4) * TAU; m.castShadow = true; w.add(m); }
    w.add(new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshStandardMaterial({ color: 0xfff0c8 }))); g.add(w); g.userData.tick = (dt) => { w.rotation.z -= dt * 5; }; },
  regador(sb, g) { sb.cyl(0.13, 0.15, 0.26, 0, 0.13, 0, 0x7fa8a0, 14); sb.cyl(0.022, 0.035, 0.3, 0.2, 0.2, 0, 0x7fa8a0, 8, RZ(-0.9)); sb.add(new THREE.TorusGeometry(0.1, 0.014, 6, 14, Math.PI), mul(T(-0.15, 0.16, 0), RZ(Math.PI / 2)), 0x6a9890); posy(g, [[0, 0.24, 0], [0.06, 0.24, 0.05], [-0.06, 0.24, 0.04], [0.02, 0.24, -0.06], [-0.04, 0.24, -0.05]], 5); },
  flamingo(sb) { const P = 0xf48ab0; sb.cyl(0.008, 0.008, 0.5, 0, 0.25, 0, 0x3a3a3a, 5); sb.sph(0.11, 0, 0.56, 0, P, 0.75, 0.7, 1.25, 12);
    sb.add(new THREE.TorusGeometry(0.11, 0.022, 6, 14, Math.PI * 1.1), mul(T(0, 0.72, 0.13), RY(Math.PI / 2), RZ(-0.5)), P); sb.sph(0.04, 0, 0.84, 0.2, P, 1, 1, 1.2, 8); sb.add(new THREE.ConeGeometry(0.018, 0.07, 6), mul(T(0, 0.82, 0.26), RX(2.2)), 0x2a2a2a); sb.sph(0.05, 0, 0.55, -0.14, 0xf9b0c8, 0.6, 0.5, 1, 8); },
  coelho(sb) { sb.sph(0.13, 0, 0.12, 0, STONE, 1, 0.95, 1.2, 12); sb.sph(0.09, 0, 0.29, 0.08, STONE, 1, 1, 1, 12); for (const s of [-1, 1]) { sb.sph(0.035, s * 0.04, 0.43, 0.06, STONE, 0.6, 2.4, 0.45, 8); sb.sph(0.012, s * 0.035, 0.31, 0.16, 0x4a443c, 1, 1, 1, 6, 0); sb.sph(0.045, s * 0.08, 0.035, 0.12, STONE, 0.8, 0.7, 1.4, 8); }
    sb.sph(0.045, 0, 0.12, -0.15, 0xe6e0d6, 1, 1, 1, 8); sb.sph(0.014, 0, 0.275, 0.168, 0xd89a9a, 1, 0.8, 1, 6, 0); },
  patos(sb) { const duck = (x, z, s, ry, c) => { const R = mul(T(x, 0, z), RY(ry)); sb.add(new THREE.SphereGeometry(0.12 * s, 12, 9), mul(R, T(0, 0.11 * s, 0), S(0.8, 0.75, 1.2)), c); sb.add(new THREE.SphereGeometry(0.065 * s, 10, 8), mul(R, T(0, 0.25 * s, 0.1 * s)), c);
      sb.add(new THREE.ConeGeometry(0.03 * s, 0.07 * s, 6), mul(R, T(0, 0.24 * s, 0.185 * s), RX(Math.PI / 2), S(1.4, 1, 0.6)), 0xf2a02a, 0); for (const sd of [-1, 1]) sb.add(new THREE.SphereGeometry(0.01 * s, 6, 5), mul(R, T(sd * 0.035 * s, 0.27 * s, 0.15 * s)), 0x2a2a2a, 0);
      sb.add(new THREE.SphereGeometry(0.05 * s, 8, 6), mul(R, T(0, 0.16 * s, -0.14 * s), S(0.8, 0.6, 1)), c); };
    duck(0, 0, 1, 0.3, 0xfaf6ec); duck(0.2, -0.16, 0.55, 0.5, 0xf7d84a); duck(-0.02, -0.24, 0.55, 0.1, 0xf7d84a); },
  lampiao(sb, g) { sb.cyl(0.014, 0.018, 1.5, 0, 0.75, 0, IRON, 6); sb.add(new THREE.TorusGeometry(0.14, 0.012, 5, 14, Math.PI), mul(T(0.14, 1.5, 0), RZ(0)), IRON); sb.box(0.13, 0.02, 0.13, 0.28, 1.2, 0, IRON); sb.add(new THREE.ConeGeometry(0.11, 0.08, 4), mul(T(0.28, 1.44, 0), RY(Math.PI / 4)), IRON); sb.cyl(0.004, 0.004, 0.1, 0.28, 1.5, 0, IRON, 4);
    const m = glowMat(0xffb860, 5), l = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.18, 0.1), m); l.position.set(0.28, 1.31, 0); g.add(l); g.userData.glow = [m]; },
  vaso_azul(sb, g) { sb.lathe([[0.001, 0], [0.16, 0], [0.2, 0.05], [0.3, 0.3], [0.29, 0.5], [0.2, 0.66], [0.18, 0.72], [0.23, 0.76], [0.21, 0.76], [0.17, 0.73]], 0, 0, 0, 0x3a6ab8, 20, 0x5a8ad8, 0.02);
    leafy(g, (b, r) => { for (let i = 0; i < 16; i++) b.petal(mul(T(0, 0.72, 0), RY(i * 2.4), RX(r.range(0.2, 0.9))), { L: r.range(0.35, 0.6), W: 0.07, a: 0.7, b: 0.5, curl: 0.9, fold: 0.4, nu: 5, nv: 2, cols: [col(0x2f6a34), col(0x3f8a44), col(0x7ab860)] }); }, 7); },
  cerca_viva(sb, g) { leafy(g, (b, r) => { for (let i = 0; i < 4; i++) ball(b, r, -0.52 + i * 0.35, 0.3, 0, 0.3, 110); }, 9); },
  piquenique(sb, g) { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.fillStyle = '#fff6ee'; x.fillRect(0, 0, 128, 128); x.fillStyle = 'rgba(226,72,58,0.75)'; for (let i = 0; i < 128; i += 32) { x.fillRect(i, 0, 16, 128); x.fillRect(0, i, 128, 16); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3); const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.3, 6, 6), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95, side: THREE.DoubleSide }));
    const p = m.geometry.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 5) * 0.008 + Math.cos(p.getY(i) * 6) * 0.008); m.rotation.x = -Math.PI / 2; m.position.y = 0.03; m.receiveShadow = true; g.add(m);
    sb.lathe([[0.001, 0], [0.15, 0], [0.19, 0.17], [0.2, 0.19], [0.18, 0.19]], 0.3, 0.035, -0.2, 0xc49a5c, 14); sb.add(new THREE.TorusGeometry(0.17, 0.014, 5, 16, Math.PI), mul(T(0.3, 0.22, -0.2), RY(0.5)), 0xa87a48); sb.box(0.2, 0.02, 0.26, 0.3, 0.225, -0.2, 0xf2e6c8, RY(0.5));
    sb.sph(0.16, -0.38, 0.09, 0.28, 0xf2a0b8, 1, 0.45, 1, 10); sb.sph(0.14, -0.1, 0.085, 0.4, 0x8ab8e0, 1, 0.45, 1, 10); sb.cyl(0.1, 0.1, 0.012, -0.25, 0.045, -0.2, 0xffffff, 14); sb.sph(0.05, -0.25, 0.08, -0.2, 0xd8302a, 1, 0.9, 1, 8); sb.sph(0.04, -0.17, 0.075, -0.25, 0xf2a02a, 1, 1, 1, 8);
    sb.cyl(0.035, 0.03, 0.09, 0.02, 0.085, 0.05, 0xffffff, 10); sb.cyl(0.035, 0.03, 0.09, 0.14, 0.085, 0.14, 0xffffff, 10); },
  sino(sb, g) { sb.cyl(0.014, 0.018, 1.7, 0, 0.85, 0, WOODD, 6); sb.box(0.36, 0.03, 0.03, 0.16, 1.66, 0, WOODD); const w = new THREE.Group(); w.position.set(0.3, 1.64, 0); const m = new THREE.MeshStandardMaterial({ color: 0xd8c08a, metalness: 0.7, roughness: 0.3 });
    { const top = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.012, 12), new THREE.MeshStandardMaterial({ color: WOOD })); top.position.y = -0.06; w.add(top); }
    for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU, L = 0.18 + i * 0.03, t = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, L, 6), m); t.position.set(Math.cos(a) * 0.05, -0.1 - L / 2, Math.sin(a) * 0.05); t.castShadow = true; w.add(t); }
    g.add(w); g.userData.tick = (dt, t) => { w.rotation.x = Math.sin(t * 1.7) * 0.1; w.rotation.z = Math.sin(t * 1.3 + 1) * 0.12; }; },
  topiaria_bola(sb, g) { sb.lathe([[0.001, 0], [0.17, 0], [0.22, 0.3], [0.24, 0.32], [0.2, 0.32]], 0, 0, 0, 0xc66f48, 16); sb.cyl(0.025, 0.03, 1.3, 0, 0.9, 0, 0x6e4c34, 6); leafy(g, (b, r) => { ball(b, r, 0, 0.62, 0, 0.26, 120); ball(b, r, 0, 1.08, 0, 0.2, 90); ball(b, r, 0, 1.44, 0, 0.14, 60); }, 11); },
  luzinhas(sb, g) { for (const s of [-1, 1]) { sb.cyl(0.02, 0.028, 2.1, s * 1.2, 1.05, 0, WOODD, 6); sb.sph(0.04, s * 1.2, 2.12, 0, WOODD, 1, 1, 1, 6); }
    const pts = []; for (let i = 0; i <= 14; i++) { const t = i / 14; pts.push(new V3(-1.2 + t * 2.4, 2.08 - Math.sin(t * Math.PI) * 0.42, 0)); }
    const wire = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 28, 0.006, 4), new THREE.MeshStandardMaterial({ color: 0x3a3a3a })); g.add(wire);
    const cs = [0xffd070, 0xff9a70, 0xfff0b0, 0xffb0c8, 0xb8e0ff], mats = cs.map((c) => glowMat(c, 6)); for (let i = 1; i < 14; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 6), mats[i % 5]); b.position.copy(pts[i]); b.position.y -= 0.045; g.add(b); } g.userData.glow = mats; g.userData.dayGlow = 0.35; },
  mesa_cha(sb) { sb.cyl(0.42, 0.42, 0.035, 0, 0.7, 0, WHT, 20); sb.cyl(0.03, 0.03, 0.68, 0, 0.35, 0, WHT, 8); sb.cyl(0.2, 0.24, 0.03, 0, 0.015, 0, WHT, 12); sb.cyl(0.36, 0.36, 0.008, 0, 0.722, 0, 0xf9d8e0, 20);
    sb.sph(0.075, 0, 0.8, 0, 0xf7b0c0, 1, 0.9, 1, 12); sb.cyl(0.012, 0.02, 0.09, 0.09, 0.82, 0, 0xf7b0c0, 6, RZ(-0.9)); sb.add(new THREE.TorusGeometry(0.035, 0.008, 5, 10), T(-0.085, 0.8, 0), 0xf7b0c0); sb.sph(0.014, 0, 0.875, 0, 0xf2e6c0, 1, 1, 1, 6);
    for (const [x, z] of [[0.2, 0.15], [-0.18, -0.16]]) { sb.cyl(0.06, 0.06, 0.008, x, 0.73, z, 0xffffff, 12); sb.cyl(0.035, 0.026, 0.045, x, 0.755, z, 0xffffff, 10); }
    for (const s of [-1, 1]) { const x = s * 0.72; sb.cyl(0.19, 0.19, 0.03, x, 0.44, 0, WHT, 14); for (const [dx, dz] of [[-0.12, -0.12], [0.12, -0.12], [-0.12, 0.12], [0.12, 0.12]]) sb.cyl(0.014, 0.014, 0.44, x + dx, 0.22, dz, WHT, 5);
      sb.add(new THREE.TorusGeometry(0.17, 0.014, 5, 14, Math.PI), mul(T(x + s * 0.17, 0.62, 0), RY(Math.PI / 2)), WHT); sb.cyl(0.19, 0.19, 0.02, x, 0.47, 0, s > 0 ? 0xf2a0b8 : 0x8ab8e0, 14); } },
  bola(sb, g) { sb.lathe([[0.001, 0], [0.15, 0], [0.13, 0.05], [0.06, 0.1], [0.05, 0.5], [0.09, 0.56], [0.1, 0.6], [0.001, 0.6]], 0, 0, 0, STONE, 14); const m = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 16), new THREE.MeshStandardMaterial({ color: 0x9ad0e8, metalness: 0.95, roughness: 0.08 })); m.position.y = 0.74; m.castShadow = true; g.add(m); },
  relogio(sb) { sb.lathe([[0.001, 0], [0.2, 0], [0.17, 0.06], [0.08, 0.12], [0.07, 0.62], [0.13, 0.7], [0.27, 0.74], [0.27, 0.78], [0.001, 0.78]], 0, 0, 0, STONE, 16); sb.cyl(0.23, 0.23, 0.012, 0, 0.79, 0, 0xc8a85a, 20);
    const tri = new THREE.Shape(); tri.moveTo(-0.15, 0); tri.lineTo(0.12, 0); tri.lineTo(0.12, 0.16); sb.add(new THREE.ExtrudeGeometry(tri, { depth: 0.012, bevelEnabled: false }), mul(T(0, 0.795, 0.006), RY(Math.PI / 2)), 0xb8964a, 0); for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; sb.box(0.012, 0.004, 0.04, Math.cos(a) * 0.19, 0.798, Math.sin(a) * 0.19, 0x7a5a2a, RY(-a + Math.PI / 2), 0); } },
  fogueira(sb, g) { for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; sb.sph(0.11, Math.cos(a) * 0.36, 0.06, Math.sin(a) * 0.36, [0xbdb5a6, 0xa9a195, 0x9c958a][i % 3], 1, 0.75, 1.1, 7); }
    for (let i = 0; i < 4; i++) sb.cyl(0.035, 0.04, 0.5, 0, 0.11, 0, 0x6a4a34, 6, mul(RY(i * 0.8), RZ(1.25)));
    const m1 = glowMat(0xff7a1e, 3.5), m2 = glowMat(0xffd04a, 4.5); m1.color.set(0xff8a2a); m2.color.set(0xffe08a); m1.userData.min = 1.4; m2.userData.min = 1.8;
    const f1 = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 7), m1), f2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 6), m2); f1.position.y = 0.3; f2.position.y = 0.26; g.add(f1, f2); g.userData.glow = [m1, m2]; g.userData.dayGlow = 1;
    g.userData.tick = (dt, t, night, fx, wp) => { const k = 1 + Math.sin(t * 11) * 0.08 + Math.sin(t * 17.3) * 0.05; f1.scale.set(k, 1 + Math.sin(t * 9) * 0.12, k); f2.scale.set(1 / k, 1 + Math.sin(t * 13) * 0.15, 1 / k); f1.rotation.y += dt * 2;
      if (fx && Math.random() < dt * 5) fx.emit({ x: wp.x + (Math.random() - 0.5) * 0.12, y: 0.45, z: wp.z + (Math.random() - 0.5) * 0.12, vx: (Math.random() - 0.5) * 0.15, vy: 0.5 + Math.random() * 0.5, vz: (Math.random() - 0.5) * 0.15, life: 0.9 + Math.random(), size: 0.035, color: 0xffb040, twinkle: 14 }); }; },
  balanco(sb, g) { for (const s of [-1, 1]) { for (const d of [-1, 1]) sb.cyl(0.03, 0.035, 2.1, s * 0.85, 1.0, d * 0.38, WHT, 6, RX(d * -0.36)); sb.box(0.06, 0.06, 0.5, s * 0.85, 0.5, 0, WHT); }
    sb.cyl(0.035, 0.035, 1.9, 0, 1.98, 0, WHT, 8, RZ(Math.PI / 2)); const sw = new THREE.Group(); sw.position.y = 1.98; const ss = new SB(71);
    for (const s of [-1, 1]) { ss.cyl(0.008, 0.008, 1.4, s * 0.6, -0.7, 0.14, IRON, 4); ss.cyl(0.008, 0.008, 1.4, s * 0.6, -0.7, -0.14, IRON, 4); ss.box(0.04, 0.3, 0.04, s * 0.62, -1.3, -0.16, WOOD); }
    for (let i = 0; i < 4; i++) ss.box(1.28, 0.03, 0.085, 0, -1.42, -0.15 + i * 0.1, WOOD, null, 0.04); for (let i = 0; i < 3; i++) ss.box(1.28, 0.085, 0.03, 0, -1.3 + i * 0.11, -0.2, WOOD, RX(-0.12), 0.04);
    ss.sph(0.13, -0.3, -1.36, 0, 0xf2a0b8, 1.2, 0.5, 1, 8); ss.sph(0.13, 0.3, -1.36, 0, 0xf7e0a0, 1.2, 0.5, 1, 8); sw.add(ss.mesh(propMat)); g.add(sw); g.userData.tick = (dt, t) => { sw.rotation.x = Math.sin(t * 1.1) * 0.09; }; },
  topiaria_espiral(sb, g) { sb.lathe([[0.001, 0], [0.17, 0], [0.22, 0.3], [0.24, 0.32], [0.2, 0.32]], 0, 0, 0, 0x7fa8a0, 16); sb.cyl(0.022, 0.03, 1.7, 0, 1.1, 0, 0x6e4c34, 6);
    leafy(g, (b, r) => { for (let i = 0; i < 26; i++) { const t = i / 25, a = t * TAU * 3, R = 0.26 * (1 - t * 0.75); ball(b, r, Math.cos(a) * R * 0.75, 0.42 + t * 1.45, Math.sin(a) * R * 0.75, 0.13 * (1 - t * 0.55) + 0.03, 34); } }, 13); },
  rede(sb, g) { for (const s of [-1, 1]) { sb.cyl(0.035, 0.045, 1.5, s * 1.15, 0.72, 0, WOODD, 7, RZ(s * 0.22)); sb.sph(0.05, s * 1.31, 1.46, 0, WOODD, 1, 1, 1, 6); }
    const geo = new THREE.PlaneGeometry(2.0, 0.8, 16, 6), p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), u = x / 1.0; p.setZ(i, 0); p.setXYZ(i, x * 1.05, 1.3 - (1 - u * u) * 0.62 - (1 - (y / 0.4) ** 2) * 0.12 * (1 - u * u * 0.6), y * (1 - Math.abs(u) * 0.75)); }
    geo.computeVertexNormals(); const c = document.createElement('canvas'); c.width = 64; c.height = 64; const x = c.getContext('2d'); const cs = ['#f2a0a0', '#fff6ee', '#8ab8e0', '#fff6ee', '#f7d87a', '#fff6ee']; cs.forEach((k, i) => { x.fillStyle = k; x.fillRect(0, i * 11, 64, 11); });
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: t, side: THREE.DoubleSide, roughness: 0.95 })); m.castShadow = true; g.add(m); g.userData.tick = (dt, tt) => { m.rotation.x = Math.sin(tt * 0.9) * 0.05; }; },
  bicicleta(sb, g) { const C = 0x7ab8b0, R = 0.3; for (const x of [-0.5, 0.5]) { sb.add(new THREE.TorusGeometry(R, 0.022, 6, 22), T(x, R + 0.02, 0), 0x3a3a3a); sb.add(new THREE.TorusGeometry(R - 0.03, 0.006, 4, 18), T(x, R + 0.02, 0), 0xd8d8d8); for (let i = 0; i < 6; i++) sb.cyl(0.004, 0.004, R * 2 - 0.06, x, R + 0.02, 0, 0xc8c8c8, 4, RZ((i / 6) * Math.PI)); }
    const bar = (x0, y0, x1, y1, r = 0.016) => { const L = Math.hypot(x1 - x0, y1 - y0); sb.cyl(r, r, L, (x0 + x1) / 2, (y0 + y1) / 2, 0, C, 6, RZ(Math.atan2(x1 - x0, y1 - y0) * -1)); };
    bar(-0.5, 0.32, -0.12, 0.34); bar(-0.12, 0.34, -0.2, 0.8); bar(-0.5, 0.32, -0.2, 0.74); bar(-0.12, 0.34, 0.36, 0.76); bar(-0.2, 0.74, 0.36, 0.76); bar(0.5, 0.32, 0.36, 0.76); bar(0.36, 0.76, 0.34, 0.96);
    sb.box(0.2, 0.04, 0.1, -0.22, 0.83, 0, 0x7a5a40); sb.cyl(0.012, 0.012, 0.46, 0.34, 0.97, 0, 0x3a3a3a, 5, RX(Math.PI / 2)); sb.cyl(0.05, 0.05, 0.02, -0.12, 0.34, 0.03, 0x8a8a8a, 10, RX(Math.PI / 2));
    sb.lathe([[0.001, 0], [0.12, 0], [0.15, 0.16], [0.16, 0.18], [0.14, 0.18]], 0.56, 0.72, 0, 0xc49a5c, 12); posy(g, [[0.56, 0.86, 0], [0.62, 0.86, 0.05], [0.5, 0.86, 0.05], [0.56, 0.86, -0.07], [0.62, 0.86, -0.04], [0.5, 0.86, -0.05]], 17, 1.1);
    sb.box(0.02, 0.5, 0.02, -0.25, 0.2, 0.16, 0x3a3a3a, RX(-0.5)); g.rotation.z = 0; },
  poco(sb, g) { for (let j = 0; j < 4; j++) for (let i = 0; i < 12; i++) { const a = ((i + (j % 2) * 0.5) / 12) * TAU; sb.box(0.3, 0.17, 0.16, Math.cos(a) * 0.55, 0.09 + j * 0.17, Math.sin(a) * 0.55, [0xbdb5a6, 0xa9a195, 0xcfc7b8, 0x9c958a][(i + j) % 4], RY(-a + Math.PI / 2), 0.03); }
    sb.add(new THREE.TorusGeometry(0.56, 0.07, 6, 24), mul(T(0, 0.73, 0), RX(Math.PI / 2)), 0xc8c0b2); const w = new THREE.Mesh(new THREE.CircleGeometry(0.48, 20), new THREE.MeshStandardMaterial({ color: 0x3a7a8a, roughness: 0.08, metalness: 0.3 })); w.rotation.x = -Math.PI / 2; w.position.y = 0.52; g.add(w);
    for (const s of [-1, 1]) sb.box(0.09, 1.5, 0.09, s * 0.62, 1.2, 0, WOODD); sb.cyl(0.05, 0.05, 1.24, 0, 1.55, 0, WOOD, 8, RZ(Math.PI / 2)); sb.cyl(0.012, 0.012, 0.45, 0.72, 1.55, 0, IRON, 5, RX(Math.PI / 2)); sb.cyl(0.006, 0.006, 0.55, 0, 1.27, 0, 0xd8c8a0, 4);
    sb.lathe([[0.001, 0], [0.09, 0], [0.11, 0.16], [0.1, 0.16]], 0, 0.86, 0, 0x8a6a4a, 10); for (const d of [-1, 1]) sb.box(1.7, 0.05, 0.75, 0, 2.12, d * 0.3, 0xb85a3c, RX(d * 0.65)); sb.box(1.72, 0.07, 0.07, 0, 2.36, 0, 0xa84e32); posy(g, [[0.75, 0, 0.3], [-0.7, 0, 0.4], [0.6, 0, -0.5]], 19); },
  estatua(sb) { sb.lathe([[0.001, 0], [0.22, 0], [0.2, 0.08], [0.14, 0.12], [0.14, 0.4], [0.18, 0.44], [0.18, 0.5], [0.001, 0.5]], 0, 0, 0, STONE, 14); sb.sph(0.12, 0, 0.64, 0, 0xe6e0d6, 1, 1.15, 0.95, 12); sb.sph(0.1, 0, 0.86, 0.01, 0xe6e0d6, 1, 1, 1, 12);
    for (const s of [-1, 1]) { sb.sph(0.1, s * 0.13, 0.72, -0.08, 0xdcd6cc, 0.35, 1.3, 1.0, 8); sb.sph(0.04, s * 0.1, 0.62, 0.08, 0xe6e0d6, 1, 1.6, 1, 8); sb.sph(0.045, s * 0.06, 0.5, 0.06, 0xe6e0d6, 1, 0.7, 1.6, 8); }
    sb.sph(0.105, 0, 0.9, -0.01, 0xd8d2c8, 1.02, 0.8, 1.02, 10); },
  guarda_sol(sb, g) { sb.cyl(0.02, 0.02, 2.1, 0.45, 1.05, -0.2, WHT, 6); sb.cyl(0.2, 0.22, 0.05, 0.45, 0.025, -0.2, STONE, 12); const um = new THREE.ConeGeometry(1.05, 0.38, 12, 1, true), cols = new Float32Array(um.attributes.position.count * 3), ca = new THREE.Color(0xe2685f), cb = new THREE.Color(0xfff6ee);
    for (let i = 0; i < um.attributes.position.count; i++) { const a = Math.atan2(um.attributes.position.getZ(i), um.attributes.position.getX(i)), c = Math.floor(((a + Math.PI) / TAU) * 12 + 0.01) % 2 ? ca : cb; cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b; }
    um.setAttribute('color', new THREE.BufferAttribute(cols, 3)); const u = new THREE.Mesh(um.toNonIndexed(), new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9, flatShading: true })); u.position.set(0.45, 2.02, -0.2); u.castShadow = true; g.add(u);
    for (let i = 0; i < 7; i++) sb.box(0.56, 0.03, 0.075, -0.2 + 0, 0.34, -0.3 + i * 0.09 + 0.0, WOOD, null, 0.04); for (let i = 0; i < 7; i++) sb.box(0.56, 0.075, 0.03, -0.2, 0.42 + i * 0.085, -0.38 - i * 0.045, WOOD, RX(-0.5), 0.04);
    for (const sx of [-0.45, 0.05]) { sb.box(0.04, 0.34, 0.04, sx, 0.17, 0.25, WOODD); sb.box(0.04, 0.34, 0.04, sx, 0.17, -0.3, WOODD); sb.box(0.04, 0.04, 0.9, sx, 0.33, 0.0, WOODD); } sb.sph(0.14, -0.2, 0.42, -0.2, 0xf7e0a0, 1.5, 0.5, 1, 8); },
  moinho(sb, g) { sb.cyl(0.24, 0.42, 1.3, 0, 0.65, 0, 0xf6ecd9, 8); sb.add(new THREE.ConeGeometry(0.32, 0.36, 8), T(0, 1.48, 0), 0xb85a3c); sb.box(0.16, 0.3, 0.03, 0, 0.2, 0.4, 0x5f8f8a, RX(-0.13)); sb.box(0.12, 0.12, 0.03, 0, 0.85, 0.3, 0x9cc4dd, RX(-0.13));
    const w = new THREE.Group(); w.position.set(0, 1.2, 0.33); const ws = new SB(73); for (let i = 0; i < 4; i++) { const R = RZ((i / 4) * TAU); ws.add(new THREE.BoxGeometry(0.03, 0.7, 0.02), mul(R, T(0, 0.38, 0)), WOODD); ws.add(new THREE.BoxGeometry(0.18, 0.5, 0.012), mul(R, T(0.09, 0.46, 0)), 0xf6f2e8);
      for (let k = 0; k < 4; k++) ws.add(new THREE.BoxGeometry(0.18, 0.012, 0.016), mul(R, T(0.09, 0.26 + k * 0.13, 0.004)), WOODD); } ws.sph(0.05, 0, 0, 0, WOODD, 1, 1, 1, 8); w.add(ws.mesh(propMat)); g.add(w); g.userData.tick = (dt) => { w.rotation.z += dt * 0.9; }; },
  carroca(sb, g) { sb.box(1.2, 0.3, 0.62, 0, 0.5, 0, 0x7fa8a0); sb.box(1.12, 0.04, 0.54, 0, 0.66, 0, 0x4a3426); for (const s of [-1, 1]) { sb.add(new THREE.TorusGeometry(0.28, 0.03, 6, 20), mul(T(-0.15, 0.3, s * 0.36), RY(0)), WOODD); for (let i = 0; i < 4; i++) sb.cyl(0.012, 0.012, 0.54, -0.15, 0.3, s * 0.36, WOOD, 4, RZ((i / 4) * Math.PI)); sb.box(0.9, 0.04, 0.04, 0.95, 0.52, s * 0.22, WOOD, RZ(-0.1)); }
    sb.box(0.05, 0.36, 0.05, 0.5, 0.18, 0, WOODD); const pts = []; const r = mulberry(21); for (let i = 0; i < 26; i++) pts.push([r.range(-0.5, 0.5), 0.68, r.range(-0.22, 0.22)]); posy(g, pts, 23, 1.15); },
  fonte(sb, g) { const tier = (R, y, h) => { sb.lathe([[0.001, 0], [R * 0.35, 0], [R * 0.5, h * 0.3], [R, h * 0.8], [R * 1.03, h], [R * 0.93, h], [R * 0.9, h * 0.86], [0.001, h * 0.7]], 0, y, 0, STONE, 22); const w = new THREE.Mesh(new THREE.CircleGeometry(R * 0.9, 20), new THREE.MeshStandardMaterial({ color: 0x6ab8c8, roughness: 0.06, metalness: 0.3, transparent: true, opacity: 0.85 })); w.rotation.x = -Math.PI / 2; w.position.y = y + h * 0.9; g.add(w); };
    sb.lathe([[0.001, 0], [0.95, 0], [0.95, 0.3], [0.86, 0.3], [0.84, 0.12], [0.001, 0.1]], 0, 0, 0, STONE, 26); { const w = new THREE.Mesh(new THREE.CircleGeometry(0.85, 24), new THREE.MeshStandardMaterial({ color: 0x5aa8b8, roughness: 0.06, metalness: 0.3, transparent: true, opacity: 0.86 })); w.rotation.x = -Math.PI / 2; w.position.y = 0.25; g.add(w); }
    sb.cyl(0.09, 0.13, 0.6, 0, 0.4, 0, STONE, 10); tier(0.5, 0.66, 0.16); sb.cyl(0.06, 0.08, 0.4, 0, 1.0, 0, STONE, 10); tier(0.28, 1.18, 0.12); sb.sph(0.07, 0, 1.38, 0, STONE, 1, 1.2, 1, 8);
    g.userData.tick = (dt, t, night, fx, wp) => { if (!fx) return; for (let k = 0; k < 2; k++) { const a = Math.random() * TAU, sp = 0.35 + Math.random() * 0.25; fx.emit({ x: wp.x, y: 1.46, z: wp.z, vx: Math.cos(a) * sp, vy: 1.3 + Math.random() * 0.4, vz: Math.sin(a) * sp, g: -5.5, life: 0.75, size: 0.03, color: 0xe0f4ff, alpha: 0.8 }); }
      if (Math.random() < dt * 20) { const a = Math.random() * TAU; fx.emit({ x: wp.x + Math.cos(a) * 0.5, y: 0.8, z: wp.z + Math.sin(a) * 0.5, vx: Math.cos(a) * 0.2, vy: 0, vz: Math.sin(a) * 0.2, g: -5, life: 0.45, size: 0.028, color: 0xd8f0ff, alpha: 0.7 }); } }; },
  ponte(sb) { const n = 14; for (let i = 0; i < n; i++) { const t = i / (n - 1), x = -0.95 + t * 1.9, y = Math.sin(t * Math.PI) * 0.32 + 0.04, ang = Math.cos(t * Math.PI) * 0.5; sb.box(0.16, 0.035, 0.9, x, y, 0, [0xb98a5e, 0xa67e58, 0xc49a6c][i % 3], RZ(ang), 0.03); }
    for (const s of [-1, 1]) { for (let i = 0; i < 5; i++) { const t = i / 4, x = -0.9 + t * 1.8, y = Math.sin(t * Math.PI) * 0.32; sb.box(0.05, 0.5, 0.05, x, y + 0.27, s * 0.43, 0xc8483a); }
      for (let i = 0; i < 10; i++) { const t0 = i / 10, t1 = (i + 1) / 10, x0 = -0.9 + t0 * 1.8, x1 = -0.9 + t1 * 1.8, y0 = Math.sin(t0 * Math.PI) * 0.32 + 0.5, y1 = Math.sin(t1 * Math.PI) * 0.32 + 0.5; sb.box(Math.hypot(x1 - x0, y1 - y0) + 0.01, 0.045, 0.045, (x0 + x1) / 2, (y0 + y1) / 2, s * 0.43, 0xc8483a, RZ(Math.atan2(y1 - y0, x1 - x0)), 0); } } },
  coreto(sb, g) { const R = 1.5, n = 8; sb.cyl(R + 0.1, R + 0.15, 0.18, 0, 0.09, 0, 0xcfc4b0, n); sb.cyl(R, R, 0.03, 0, 0.195, 0, 0xb98a5e, n);
    for (let i = 0; i < n; i++) { const a = (i / n) * TAU + Math.PI / n, x = Math.cos(a) * (R - 0.08), z = Math.sin(a) * (R - 0.08); sb.cyl(0.05, 0.06, 2.1, x, 1.25, z, WHT, 8); sb.sph(0.07, x, 2.32, z, WHT, 1, 0.7, 1, 6);
      const a2 = ((i + 1) / n) * TAU + Math.PI / n, x2 = Math.cos(a2) * (R - 0.08), z2 = Math.sin(a2) * (R - 0.08), L = Math.hypot(x2 - x, z2 - z), ry = -Math.atan2(z2 - z, x2 - x); sb.box(L, 0.1, 0.06, (x + x2) / 2, 2.3, (z + z2) / 2, WHT, RY(ry), 0);
      if (i !== 1) { sb.box(L, 0.05, 0.05, (x + x2) / 2, 0.75, (z + z2) / 2, WHT, RY(ry), 0); for (let k = 1; k < 6; k++) { const t = k / 6; sb.box(0.035, 0.55, 0.035, x + (x2 - x) * t, 0.47, z + (z2 - z) * t, WHT, null, 0); } } }
    sb.add(new THREE.ConeGeometry(R + 0.35, 0.95, n), mul(T(0, 2.82, 0), RY(Math.PI / n)), 0xb85a3c, 0.03); sb.sph(0.09, 0, 3.34, 0, 0xe0b85a, 1, 1.3, 1, 8); sb.cyl(0.3, 0.3, 0.03, 0, 0.72, 0, WOOD, 12); sb.cyl(0.04, 0.05, 0.5, 0, 0.46, 0, WOOD, 6);
    const m = glowMat(0xffc070, 5), l = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), m); l.position.set(0, 2.25, 0); g.add(l); g.userData.glow = [m]; posy(g, [[0, 0.74, 0], [0.06, 0.74, 0.05], [-0.05, 0.74, 0.04]], 29); },
  composteira(sb) { const W = 0xa47850; for (let i = 0; i < 4; i++) { sb.box(0.82, 0.1, 0.03, 0, 0.1 + i * 0.14, 0.39, W, null, 0.04); sb.box(0.82, 0.1, 0.03, 0, 0.1 + i * 0.14, -0.39, W, null, 0.04); sb.box(0.03, 0.1, 0.78, 0.4, 0.1 + i * 0.14, 0, W, null, 0.04); sb.box(0.03, 0.1, 0.78, -0.4, 0.1 + i * 0.14, 0, W, null, 0.04); }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) sb.box(0.06, 0.64, 0.06, sx * 0.4, 0.32, sz * 0.39, WOODD); sb.box(0.74, 0.3, 0.72, 0, 0.36, 0, 0x4a3426); sb.sph(0.3, 0, 0.5, 0, 0x5a4030, 1.15, 0.35, 1.1, 8);
    for (const [x, z, c] of [[0.12, 0.1, 0x8ab03c], [-0.15, -0.08, 0xc8a02a], [0.02, -0.2, 0xb8602a], [-0.05, 0.22, 0x6a9a3a]]) sb.sph(0.07, x, 0.6, z, c, 1.4, 0.3, 0.9, 6); sb.box(0.86, 0.035, 0.42, 0.02, 0.69, -0.2, 0xb98a5e, RX(-0.5));
    sb.cyl(0.014, 0.014, 0.8, 0.5, 0.42, 0.25, WOODD, 5, RZ(0.25)); sb.box(0.13, 0.17, 0.02, 0.6, 0.06, 0.25, 0x8a8e92, RZ(0.25)); },
  colmeia(sb, g) { for (const sx of [-1, 1]) for (const sz of [-1, 1]) sb.box(0.05, 0.36, 0.05, sx * 0.2, 0.18, sz * 0.2, WOODD); sb.box(0.56, 0.04, 0.56, 0, 0.37, 0, WOOD);
    [0xf2d06a, 0xfaf4e4, 0xf2d06a].forEach((c, i) => { sb.box(0.46, 0.2, 0.46, 0, 0.5 + i * 0.21, 0, c, null, 0.02); sb.box(0.12, 0.025, 0.02, 0, 0.5 + i * 0.21, 0.235, WOODD); }); sb.box(0.56, 0.05, 0.56, 0, 1.04, 0, 0x7a9ab0); sb.box(0.5, 0.05, 0.5, 0, 1.09, 0, 0x8aaac0); sb.box(0.2, 0.02, 0.1, 0, 0.4, 0.28, WOOD); sb.box(0.14, 0.03, 0.01, 0, 0.42, 0.232, 0x2a2018);
    const bees = []; for (let i = 0; i < 7; i++) { const b = new THREE.Group(), bs = new SB(70 + i); bs.sph(0.016, 0, 0, 0, 0xf2b82a, 1, 1, 1.5, 6); bs.sph(0.0165, 0, 0, 0.006, 0x2a2018, 1, 1, 0.35, 6); bs.sph(0.014, 0.012, 0.012, 0, 0xffffff, 0.3, 0.1, 1.2, 5); bs.sph(0.014, -0.012, 0.012, 0, 0xffffff, 0.3, 0.1, 1.2, 5); b.add(bs.mesh(propMat, false)); g.add(b); bees.push(b); }
    g.userData.tick = (dt, t, night) => { bees.forEach((b, i) => { const a = t * (1.1 + i * 0.13) + i * 2.3, r = 0.45 + 0.25 * Math.sin(t * 0.7 + i), out = night > 0.5 ? 0 : 1; b.visible = !!out; b.position.set(Math.cos(a) * r, 0.75 + 0.3 * Math.sin(t * 1.9 + i * 1.7), 0.25 + Math.sin(a) * r * 0.8); b.rotation.y = -a; }); }; },
  galinheiro(sb, g) { const RED = 0xc8483a, WALL = 0xf2e6cc; for (const sx of [-1, 1]) for (const sz of [-1, 1]) sb.box(0.06, 0.4, 0.06, -0.45 + sx * 0.4, 0.2, -0.45 + sz * 0.33, WOODD);
    sb.box(0.94, 0.62, 0.8, -0.45, 0.71, -0.45, WALL, null, 0.02); for (const s of [-1, 1]) sb.box(0.66, 0.04, 0.92, -0.45 + s * 0.26, 1.2, -0.45, RED, RZ(-s * 0.62)); sb.box(0.08, 0.04, 0.94, -0.45, 1.39, -0.45, 0xa83a2e);
    for (const sz of [-1, 1]) { const tri = new THREE.BufferGeometry(); tri.setAttribute('position', new THREE.Float32BufferAttribute(sz > 0 ? [-0.92, 1.02, -0.05, 0.02, 1.02, -0.05, -0.45, 1.37, -0.05] : [0.02, 1.02, -0.85, -0.92, 1.02, -0.85, -0.45, 1.37, -0.85], 3)); tri.computeVertexNormals(); sb.add(tri, null, WALL, 0); }
    sb.box(0.26, 0.34, 0.02, -0.45, 0.6, -0.04, 0x3a2a20); sb.box(0.3, 0.03, 0.62, -0.45, 0.22, 0.24, WOOD, RX(0.62)); for (let k = 0; k < 4; k++) sb.box(0.3, 0.02, 0.03, -0.45, 0.07 + k * 0.1, 0.44 - k * 0.14, WOODD, RX(0.62));
    sb.box(0.2, 0.2, 0.02, -0.1, 0.84, -0.04, 0x9cc8e0); sb.box(0.24, 0.03, 0.03, -0.1, 0.72, -0.03, WOODD); sb.sph(0.2, 0.75, 0.05, 0.35, 0xd8c08a, 1.3, 0.3, 1, 8); sb.cyl(0.13, 0.1, 0.06, 0.75, 0.05, -0.55, 0x8a9aa8, 10);
    const hens = []; [[0xf6f2e8, 0], [0xb8743a, 2.1], [0x3a342e, 4.2]].forEach(([c, ph], i) => { const h = new THREE.Group(), hs = new SB(80 + i); hs.sph(0.11, 0, 0.17, 0, c, 0.85, 0.85, 1.25, 10); hs.sph(0.06, 0, 0.3, 0.12, c, 1, 1.1, 1, 8); hs.sph(0.06, 0, 0.24, -0.14, c, 0.5, 1.3, 0.8, 6);
      hs.add(new THREE.ConeGeometry(0.018, 0.045, 5), mul(T(0, 0.3, 0.185), RX(Math.PI / 2)), 0xf2a82a); hs.sph(0.022, 0, 0.365, 0.11, 0xd8382e, 0.5, 1, 1.4, 6); hs.sph(0.014, 0, 0.255, 0.16, 0xd8382e, 0.6, 1.2, 0.6, 5); for (const s of [-1, 1]) { hs.sph(0.008, s * 0.045, 0.315, 0.15, 0x1a1a1a, 1, 1, 1, 5); hs.cyl(0.006, 0.006, 0.09, s * 0.04, 0.045, 0, 0xf2a82a, 4); }
      h.add(hs.mesh(propMat)); g.add(h); hens.push({ h, ph, r: 0.55 + i * 0.16 }); });
    g.userData.tick = (dt, t, night) => { for (const q of hens) { const a = t * 0.22 + q.ph + Math.sin(t * 0.31 + q.ph) * 0.8, asleep = night > 0.6; if (asleep) { q.h.position.set(-0.45 + Math.cos(q.ph) * 0.2, 0, 0.3 + Math.sin(q.ph) * 0.15); q.h.rotation.set(0, q.ph, 0); continue; }
        q.h.position.set(0.25 + Math.cos(a) * q.r, 0, 0.1 + Math.sin(a) * q.r * 0.8); q.h.rotation.y = -a + Math.sin(t * 2 + q.ph) * 0.3; q.h.rotation.x = Math.max(0, Math.sin(t * 2.6 + q.ph * 3)) ** 3 * 0.75; } }; },
  casa_passaros(sb, g) { sb.cyl(0.05, 0.07, 1.5, 0, 0.75, 0, WOODD, 8); sb.cyl(0.5, 0.5, 0.05, 0, 1.5, 0, WOOD, 16); for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; sb.cyl(0.012, 0.012, 0.7, Math.cos(a) * 0.46, 1.86, Math.sin(a) * 0.46, WHT, 5); }
    sb.add(new THREE.ConeGeometry(0.6, 0.42, 16), T(0, 2.42, 0), 0x5f8f8a); sb.sph(0.05, 0, 2.66, 0, 0xe0b85a, 1, 1, 1, 8); sb.cyl(0.18, 0.2, 0.06, 0, 1.56, 0, 0x7fa8c0, 12); for (const a of [0.6, 2.7, 4.6]) sb.cyl(0.01, 0.01, 0.34, Math.cos(a) * 0.3, 1.78, Math.sin(a) * 0.3, WOODD, 4, RZ(Math.PI / 2));
    const birds = []; [[0xf2c21e, 0], [0x4a8ad8, 2.2], [0xe8584a, 4.1]].forEach(([c, ph], i) => { const b = new THREE.Group(), bs = new SB(90 + i); bs.sph(0.045, 0, 0, 0, c, 0.85, 0.9, 1.25, 8); bs.sph(0.03, 0, 0.035, 0.045, c, 1, 1, 1, 7); bs.add(new THREE.ConeGeometry(0.01, 0.03, 4), mul(T(0, 0.035, 0.08), RX(Math.PI / 2)), 0xf2903a); bs.sph(0.03, 0, 0.005, -0.06, c, 0.4, 0.3, 1.5, 5); for (const s of [-1, 1]) bs.sph(0.005, s * 0.02, 0.045, 0.062, 0x1a1a1a, 1, 1, 1, 4);
      b.add(bs.mesh(propMat)); g.add(b); birds.push({ b, ph }); });
    g.userData.tick = (dt, t, night) => { birds.forEach((q, i) => { const cyc = (t * 0.08 + q.ph / TAU) % 1, fly = cyc > 0.7 && night < 0.5, a = q.ph + (fly ? (cyc - 0.7) * 20 : 0), r = fly ? 0.3 + Math.sin((cyc - 0.7) / 0.3 * Math.PI) * 1.3 : 0.3; q.b.position.set(Math.cos(a) * r, fly ? 1.85 + Math.sin((cyc - 0.7) / 0.3 * Math.PI) * 0.7 : 1.81 + Math.abs(Math.sin(t * 3 + q.ph)) * 0.02, Math.sin(a) * r); q.b.rotation.y = fly ? -a : -a + Math.PI / 2 + Math.sin(t * 1.3 + q.ph) * 0.5; }); }; },
};

export function buildDeco(id) {
  const g = new THREE.Group(), sb = new SB(900 + id.length * 7 + id.charCodeAt(0));
  B[id](sb, g);
  if (sb.g.length) g.add(sb.mesh(propMat));
  g.userData.def = DECO_BY[id];
  return g;
}
