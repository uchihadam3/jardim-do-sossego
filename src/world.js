import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { T, RX, RY, RZ, S, mul, col, mulberry, clamp, lerp, TAU } from './util.js';
import { Builder } from './builder.js';
import { habitTree, archPath } from './parts.js';
import { makePlantMaterial, windU } from './plantmat.js';

const V3 = THREE.Vector3;

// ---------- static geometry collector ----------
export class SB {
  constructor(seed = 1) { this.g = []; this.rng = mulberry(seed); }
  add(geo, M, color, jitter = 0.03, color2) {
    geo = geo.index ? geo.toNonIndexed() : geo;
    if (M) geo.applyMatrix4(M);
    const n = geo.attributes.position.count, c = new Float32Array(n * 3);
    const a = new THREE.Color(color), k = 1 + this.rng.range(-jitter, jitter) * 2;
    a.multiplyScalar(k);
    if (color2) {
      const b = new THREE.Color(color2).multiplyScalar(k), p = geo.attributes.position; geo.computeBoundingBox();
      const y0 = geo.boundingBox.min.y, y1 = geo.boundingBox.max.y, t = new THREE.Color();
      for (let i = 0; i < n; i++) { t.copy(a).lerp(b, (p.getY(i) - y0) / (y1 - y0 + 1e-6)); c[i * 3] = t.r; c[i * 3 + 1] = t.g; c[i * 3 + 2] = t.b; }
    } else for (let i = 0; i < n; i++) { c[i * 3] = a.r; c[i * 3 + 1] = a.g; c[i * 3 + 2] = a.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(c, 3)); geo.deleteAttribute('uv');
    this.g.push(geo); return this;
  }
  box(w, h, d, x, y, z, color, rot, j) { return this.add(new THREE.BoxGeometry(w, h, d), mul(T(x, y, z), rot ?? new THREE.Matrix4()), color, j); }
  cyl(r0, r1, h, x, y, z, color, seg = 10, rot, j, c2) { return this.add(new THREE.CylinderGeometry(r0, r1, h, seg), mul(T(x, y, z), rot ?? new THREE.Matrix4()), color, j, c2); }
  sph(r, x, y, z, color, sx = 1, sy = 1, sz = 1, seg = 10, j, c2) { return this.add(new THREE.SphereGeometry(r, seg, Math.max(4, seg - 3)), mul(T(x, y, z), S(sx, sy, sz)), color, j, c2); }
  lathe(pts, x, y, z, color, seg = 16, c2, j) { return this.add(new THREE.LatheGeometry(pts.map(([r, yy]) => new THREE.Vector2(r, yy)), seg), T(x, y, z), color, j, c2); }
  mesh(mat, shadow = true) {
    const m = new THREE.Mesh(mergeGeometries(this.g), mat);
    m.castShadow = shadow; m.receiveShadow = true; return m;
  }
}
export const propMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86 });
const propMat2 = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, side: THREE.DoubleSide });

// ---------- layout ----------
export const PORCH_Y = 0.18;
export const ZONES = [
  { id: 0, name: 'Jardim da frente', cost: 0, rect: [-5, 5, -4.6, 3.5], tag: [0, 0] },
  { id: 1, name: 'Varanda', cost: 120, rect: [-4.8, 4.8, -6.9, -4.9], tag: [0, -5.6], h: 2.6, desc: 'Vasos suspensos, jardineiras nas janelas e vasos na varanda.' },
  { id: 2, name: 'Canteiros do leste', cost: 500, rect: [5, 12.3, -8.6, 3.5], tag: [8.7, -1.5], desc: 'Dois canteiros, vasos e o lugar da sua primeira árvore.' },
  { id: 3, name: 'Laguinho', cost: 1200, rect: [-12.3, -5, -8.6, 3.5], tag: [-8.6, -1.5], desc: 'Um lago para ninfeias e lótus, com canteiro em volta.' },
  { id: 4, name: 'Alameda dos arcos', cost: 2800, rect: [-5, 5, 5, 14.3], tag: [0, 9.3], desc: 'Arcos para trepadeiras e quatro canteiros floridos.' },
  { id: 5, name: 'Pomar', cost: 5500, rect: [5, 12.3, 5, 14.3], tag: [8.7, 9.6], desc: 'Espaço para três árvores e canteiros à sombra.' },
  { id: 6, name: 'Prado das flores', cost: 9000, rect: [-12.3, -5, 5, 14.3], tag: [-8.7, 9.6], desc: 'Canteiros grandes para um mar de flores.' },
  { id: 7, name: 'Horta', cost: 350, rect: [-9.45, -5.2, -8.75, -5.2], tag: [-7.3, -6.9], desc: 'Oito canteirinhos para hortaliças, temperos e morangos.' },
  { id: 8, name: 'Estufa', cost: 3200, rect: [5.45, 9.25, -8.75, -5.5], tag: [7.35, -5.9], desc: 'Seis vasos onde tudo cresce em dobro, sem regar e em qualquer estação. Só aqui nascem as plantas mais raras.' },
];
const POND = { x: -8.6, z: -0.6, rx: 2.5, rz: 1.9 };
const BEDS = [
  { z: 0, x: -2.9, zc: -1.3, cols: 3, rows: 2 }, { z: 0, x: 2.9, zc: -1.3, cols: 3, rows: 2 },
  { z: 2, x: 8.7, zc: 0.4, cols: 3, rows: 2 }, { z: 2, x: 8.7, zc: -3.2, cols: 3, rows: 2 },
  { z: 3, x: -8.6, zc: -4.3, cols: 5, rows: 1 },
  { z: 4, x: -2.9, zc: 7.6, cols: 3, rows: 2 }, { z: 4, x: 2.9, zc: 7.6, cols: 3, rows: 2 }, { z: 4, x: -2.9, zc: 11.6, cols: 3, rows: 2 }, { z: 4, x: 2.9, zc: 11.6, cols: 3, rows: 2 },
  { z: 5, x: 10.4, zc: 6.6, cols: 3, rows: 1 }, { z: 5, x: 10.2, zc: 13.0, cols: 3, rows: 1 },
  { z: 7, x: -7.3, zc: -5.95, cols: 4, rows: 1, veg: true }, { z: 7, x: -7.3, zc: -7.85, cols: 4, rows: 1, veg: true },
  { z: 6, x: -8.7, zc: 7.2, cols: 4, rows: 2 }, { z: 6, x: -8.7, zc: 10.5, cols: 4, rows: 2 }, { z: 6, x: -8.7, zc: 13.3, cols: 4, rows: 1 },
];
const SLOT = 0.82;
const POTS = [
  { z: 0, x: -1.35, zc: -4.1 }, { z: 0, x: 1.35, zc: -4.1 },
  { z: 1, x: -4.05, zc: -5.75, porch: true }, { z: 1, x: 4.05, zc: -5.75, porch: true },
  { z: 2, x: 6.1, zc: 2.5 }, { z: 2, x: 11.4, zc: 2.5 }, { z: 3, x: -6.0, zc: 2.5 }, { z: 3, x: -11.4, zc: 2.5 },
  { z: 4, x: -1.25, zc: 5.6 }, { z: 4, x: 1.25, zc: 5.6 }, { z: 5, x: 6.0, zc: 5.9 }, { z: 6, x: -5.9, zc: 5.9 }, { z: 6, x: -5.9, zc: 13.6 },
];
const TREES = [{ z: 2, x: 10.4, zc: -6.6 }, { z: 3, x: -10.6, zc: -6.9 }, { z: 5, x: 7.3, zc: 7.9 }, { z: 5, x: 10.6, zc: 9.9 }, { z: 5, x: 7.2, zc: 12.3 }, { z: 6, x: -11.4, zc: 5.9 + 0 }];
const ARCHES = [{ z: 4, x: 0, zc: 7.4 }, { z: 4, x: 0, zc: 11.4 }];
const HANGS = [-3.4, -1.55, 1.55, 3.4];
const WINDOWS = [-2.75, 2.75];
export const DECOR = [
  { id: 'lanternas', name: 'Lanternas do caminho', price: 150, beauty: 15, desc: 'Luz quentinha para as noites no jardim.' },
  { id: 'banco', name: 'Banco de madeira', price: 240, beauty: 15, desc: 'Um cantinho para admirar as flores.' },
  { id: 'bebedouro', name: 'Banho de passarinho', price: 380, beauty: 20, desc: 'Os pássaros agradecem a água fresca.' },
  { id: 'casinha', name: 'Casinha de passarinho', price: 480, beauty: 20, desc: 'Um lar colorido no alto de um poste.' },
  { id: 'carrinho', name: 'Carrinho de mão florido', price: 700, beauty: 30, desc: 'Um velho carrinho transbordando flores.' },
  { id: 'anao', name: 'Anão de jardim', price: 600, beauty: 25, desc: 'O guardião simpático dos canteiros.' },
];

function groundTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d'), r = mulberry(5);
  g.fillStyle = '#6f9a50'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) {
    const x = r() * 512, y = r() * 512, s = r.range(6, 34);
    g.fillStyle = `hsla(${r.range(78, 106)},${r.range(30, 46)}%,${r.range(32, 46)}%,${r.range(0.05, 0.16)})`;
    for (const dx of [-512, 0, 512]) for (const dy of [-512, 0, 512]) { g.beginPath(); g.ellipse(x + dx, y + dy, s, s * r.range(0.5, 1), r() * 3, 0, TAU); g.fill(); }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(36, 36); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function waterNormals() {
  const n = 256, c = document.createElement('canvas'); c.width = c.height = n;
  const g = c.getContext('2d'), img = g.createImageData(n, n), r = mulberry(9), w = [];
  for (let i = 0; i < 9; i++) w.push([Math.round(r.range(1, 5)) * r.sign(), Math.round(r.range(1, 5)) * r.sign(), r() * 6, r.range(0.4, 1)]);
  const hgt = (x, y) => { let s = 0; for (const [a, b, p, k] of w) s += Math.sin((x * a + y * b) * TAU / n + p) * k; return s; };
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1), i = (y * n + x) * 4;
    const v = new V3(-dx * 0.8, -dy * 0.8, 1).normalize();
    img.data[i] = (v.x * 0.5 + 0.5) * 255; img.data[i + 1] = (v.y * 0.5 + 0.5) * 255; img.data[i + 2] = (v.z * 0.5 + 0.5) * 255; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.2, 2.2); return t;
}

const inRect = (x, z, r, pad = 0) => x > r[0] - pad && x < r[1] + pad && z > r[2] - pad && z < r[3] + pad;
const bedRect = (b) => { const w = b.cols * SLOT + 0.3, d = b.rows * SLOT + 0.3; return [b.x - w / 2, b.x + w / 2, b.zc - d / 2, b.zc + d / 2]; };
const GREEN = [5.7, 9.0, -8.35, -5.85];
const inPond = (x, z, pad = 0) => ((x - POND.x) / (POND.rx + pad)) ** 2 + ((z - POND.z) / (POND.rz + pad)) ** 2 < 1;
export const zoneAt = (x, z) => { for (let i = ZONES.length - 1; i >= 0; i--) if (i !== 1 && inRect(x, z, ZONES[i].rect)) return i; return -1; };
const onPath = (x, z) => (Math.abs(x) < 0.75 && z > -4.6 && z < 15.5) || (z > 3.6 && z < 4.9 && Math.abs(x) < 12.3);
export const groundY = (x, z) => (z < -4.95 && Math.abs(x) < 4.9 ? PORCH_Y : z < -4.6 && Math.abs(x) < 1.4 ? lerp(0, PORCH_Y, clamp((-4.6 - z) / 0.35, 0, 1)) : 0);

export function createWorld(scene, q, unlocked) {
  const world = { pond: POND, spots: [], zones: ZONES, decor: {}, zoneGroups: [], lockGroups: [], nightMats: [], lamps: [], tickers: [] };
  const rng = mulberry(77);

  // ----- ground -----
  const ground = new THREE.Mesh(new THREE.CircleGeometry(260, 48), new THREE.MeshStandardMaterial({ map: groundTexture(), roughness: 1, color: 0xdde8cc }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground); world.ground = ground;

  // hills + far trees
  {
    const b = new Builder(), hr = mulberry(3);
    const ring = (r0, r1, hmax, c0, c1, seed) => {
      const seg = 72, st = b.n, ph = [seed, seed * 1.7, seed * 2.9];
      for (let i = 0; i <= 3; i++) for (let j = 0; j <= seg; j++) {
        const a = (j / seg) * TAU, t = i / 3, r = lerp(r0, r1, t);
        const hh = (Math.sin(a * 3 + ph[0]) * 0.5 + Math.sin(a * 7 + ph[1]) * 0.3 + Math.sin(a * 13 + ph[2]) * 0.2 + 1.1) * hmax * Math.sin(t * Math.PI * 0.85);
        b.vert(Math.cos(a) * r, hh - 0.3, Math.sin(a) * r, new THREE.Color().copy(c0).lerp(c1, t));
      }
      b.quadGrid(st, 3, seg, false);
    };
    ring(60, 150, 9, col(0x7eac54), col(0x6a9c5a), 1.3); ring(120, 240, 22, col(0x6a9c62), col(0x5f8f7a), 4.1);
    const m = new THREE.Mesh(b.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 })); scene.add(m);
    // background trees (3 variants, instanced around)
    const treeMat = makePlantMaterial({ sway: 0.03, glow: 0.06 }); world.bgTreeMat = treeMat;
    const variants = [
      { H: 1.6, R: 1.9, trunkR: 0.14, limbs: 6, leaves: 520, leafSize: 0.42, leafCols: [col(0x4c8a3a), col(0x3a7a34), col(0x6aa04a)] },
      { H: 2.4, R: 1.6, trunkR: 0.13, limbs: 6, leaves: 480, leafSize: 0.4, leafCols: [col(0x3a7a44), col(0x2f6a3a), col(0x5a9a4a)] },
      { H: 1.3, R: 2.3, trunkR: 0.16, limbs: 7, leaves: 600, leafSize: 0.45, leafCols: [col(0x5a9440), col(0x6aa648), col(0x4a8438)] },
    ].map((P, i) => { const bb = new Builder(); habitTree(bb, mulberry(20 + i), P, 1, -1); return bb.build(); });
    const spots = [];
    for (let i = 0; i < 46; i++) {
      const side = i % 4; let x, z;
      if (side === 0) { x = hr.range(-24, 24); z = hr.range(-28, -16); } else if (side === 1) { x = hr.range(15.5, 30) * (hr() < 0.5 ? -1 : 1); z = hr.range(-22, 22); }
      else if (side === 2) { x = hr.range(-30, 30); z = hr.range(19.5, 34); if (Math.abs(x) < 4) x += 8; } else { const a = hr() * TAU, r = hr.range(34, 58); x = Math.cos(a) * r; z = Math.sin(a) * r; }
      spots.push([x, z]);
    }
    variants.forEach((geo, vi) => {
      const mine = spots.filter((_, i) => i % 3 === vi), im = new THREE.InstancedMesh(geo, treeMat, mine.length), o = new THREE.Object3D();
      mine.forEach(([x, z], i) => { o.position.set(x, 0, z); o.rotation.y = hr() * 6; o.scale.setScalar(hr.range(1.5, 2.6)); o.updateMatrix(); im.setMatrixAt(i, o.matrix); });
      im.castShadow = true; im.receiveShadow = true; scene.add(im);
    });
  }

  // ----- paths -----
  {
    const sb = new SB(11), pr = mulberry(12);
    const strip = (x0, x1, z0, z1) => { const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0, 1, 1); g.rotateX(-Math.PI / 2); sb.add(g, T((x0 + x1) / 2, 0.012, (z0 + z1) / 2), 0xd8c8a2, 0); };
    strip(-0.8, 0.8, -4.6, 16.2); strip(-12.3, 12.3, 3.55, 4.95);
    const stone = (x, z, s) => sb.add(new THREE.CylinderGeometry(s, s * 1.06, 0.05, 7), mul(T(x, 0.03, z), RY(pr() * 6), S(1, 1, pr.range(0.7, 0.95))), pr.pick([0xc9c1b4, 0xbdb5a6, 0xd6cec0, 0xb8b0a4]), 0.04);
    for (let z = -4.2; z < 16; z += 0.86) stone(pr.range(-0.12, 0.12), z, pr.range(0.3, 0.38));
    for (let x = -11.8; x < 12; x += 0.86) if (Math.abs(x) > 0.7) stone(x, 4.25 + pr.range(-0.1, 0.1), pr.range(0.3, 0.38));
    for (let i = 0; i < 150; i++) { const v = pr() < 0.55, a = v ? pr.range(-0.78, 0.78) : pr.range(-12.2, 12.2), bq = v ? pr.range(-4.5, 16) : pr.range(3.6, 4.9); sb.sph(pr.range(0.02, 0.05), a, 0.02, bq, pr.pick([0xb8ae9c, 0xe4dccb, 0xa89e8c]), 1, 0.5, 1, 5); }
    scene.add(sb.mesh(propMat, false));
  }

  // ----- house -----
  buildHouse(scene, world); world.paintHouse = (pal) => buildHouse(scene, world, pal);

  // ----- fence (repaintable) -----
  world.paintFence = (fenceColor = 0xf3ede2) => {
    const sb = new SB(21), W = fenceColor;
    const run = (x0, z0, x1, z1) => {
      const L = Math.hypot(x1 - x0, z1 - z0), n = Math.round(L / 0.24), ang = Math.atan2(x1 - x0, z1 - z0), R = RY(ang);
      for (let i = 0; i <= n; i++) {
        const t = i / n, x = lerp(x0, x1, t), z = lerp(z0, z1, t), post = i % 8 === 0;
        if (post) { sb.box(0.11, 1.0, 0.11, x, 0.5, z, W, R); sb.sph(0.07, x, 1.03, z, W, 1, 1, 1, 6); }
        else { sb.box(0.085, 0.72, 0.025, x, 0.42, z, W, mul(R, RY(Math.PI / 2))); sb.add(new THREE.ConeGeometry(0.06, 0.09, 4), mul(T(x, 0.825, z), R, RY(Math.PI / 4), S(1, 1, 0.3)), W); }
      }
      sb.box(0.035, 0.07, L, (x0 + x1) / 2, 0.3, (z0 + z1) / 2, W, R); sb.box(0.035, 0.07, L, (x0 + x1) / 2, 0.64, (z0 + z1) / 2, W, R);
    };
    run(-12.6, -9.2, -12.6, 14.7); run(12.6, -9.2, 12.6, 14.7); run(-12.6, 14.7, -1.2, 14.7); run(1.2, 14.7, 12.6, 14.7); run(-12.6, -9.2, -4.6, -9.2); run(4.6, -9.2, 12.6, -9.2);
    // gate arch
    for (const s of [-1, 1]) { sb.box(0.14, 2.2, 0.14, s * 1.2, 1.1, 14.7, W); }
    sb.box(2.7, 0.12, 0.16, 0, 2.2, 14.7, W); sb.box(2.9, 0.06, 0.3, 0, 2.29, 14.7, W);
    // mailbox
    sb.box(0.08, 1.0, 0.08, 2.0, 0.5, 15.3, 0x7a5a40); sb.box(0.24, 0.2, 0.36, 2.0, 1.08, 15.3, 0xc8483a); sb.box(0.02, 0.14, 0.1, 2.13, 1.14, 15.2, 0xf3ede2);
    if (world.fenceMesh) { scene.remove(world.fenceMesh); world.fenceMesh.geometry.dispose(); }
    world.fenceMesh = sb.mesh(propMat); scene.add(world.fenceMesh);
  };
  world.paintFence();

  // ----- zone content -----
  const potGeoPts = [[0.001, 0], [0.17, 0], [0.19, 0.04], [0.25, 0.36], [0.285, 0.38], [0.285, 0.43], [0.25, 0.43], [0.235, 0.4]];
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x5a4030, roughness: 1 });
  const addSpot = (s) => { s.id = world.spots.length; s.soil = null; world.spots.push(s); return s; };
  const mound = (grp, x, y, z, r, flat = 0.35) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 9, 5, 0, TAU, 0, Math.PI / 2), soilMat.clone());
    m.scale.y = flat; m.position.set(x, y, z); m.receiveShadow = true; grp.add(m); return m;
  };
  for (const zn of ZONES) {
    const grp = new THREE.Group(), sb = new SB(100 + zn.id), zr = mulberry(200 + zn.id);
    world.zoneGroups[zn.id] = grp; scene.add(grp);
    for (const b of BEDS.filter((b) => b.z === zn.id)) {
      const [x0, x1, z0, z1] = bedRect(b), w = x1 - x0, d = z1 - z0, cx = b.x, cz = b.zc, wood = b.veg ? [0xc8a878, 0xbc9c6c, 0xd2b484] : [0x8a6648, 0x7d5c40, 0x94704e];
      sb.box(w + 0.16, 0.2, 0.09, cx, 0.1, z0, zr.pick(wood)); sb.box(w + 0.16, 0.2, 0.09, cx, 0.1, z1, zr.pick(wood));
      sb.box(0.09, 0.2, d, x0, 0.1, cz, zr.pick(wood)); sb.box(0.09, 0.2, d, x1, 0.1, cz, zr.pick(wood));
      for (const [px, pz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) sb.box(0.12, 0.27, 0.12, px, 0.135, pz, 0x6e5038);
      const soil = new THREE.PlaneGeometry(w, d, Math.round(w * 4), Math.round(d * 4)); soil.rotateX(-Math.PI / 2);
      const p = soil.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, zr.range(-0.012, 0.02));
      soil.computeVertexNormals(); sb.add(soil, T(cx, 0.15, cz), 0x5e4433, 0.02);
      for (let r = 0; r < b.rows; r++) for (let c = 0; c < b.cols; c++) {
        const x = cx + (c - (b.cols - 1) / 2) * SLOT, z = cz + (r - (b.rows - 1) / 2) * SLOT;
        const front = b.rows === 1 || r === b.rows - 1;
        const s = addSpot({ type: b.veg ? 'veg' : 'bed', zone: zn.id, pos: new V3(x, 0.16, z), stand: new V3(x, 0, front ? z1 + 0.5 : z0 - 0.5), scale: 1.75, pickR: 0.36, pickH: 0.5 });
        s.soil = mound(grp, x, 0.15, z, 0.26);
      }
    }
    for (const p of POTS.filter((p) => p.z === zn.id)) {
      const y = p.porch ? PORCH_Y : 0, big = 1.25;
      sb.lathe(potGeoPts.map(([r, h]) => [r * big, h * big]), p.x, y, p.zc, zr.pick([0xc66f48, 0xb9623f, 0xcf7a52]), 18, undefined, 0.02);
      const s = addSpot({ type: 'pot', zone: zn.id, pos: new V3(p.x, y + 0.5, p.zc), stand: new V3(p.x + (p.porch ? (p.x > 0 ? -0.85 : 0.85) : 0), 0, p.zc + (p.porch ? 0.1 : 0.85)), scale: 1.55, pickR: 0.42, pickH: 0.9, pickY: -0.4 });
      s.soil = mound(grp, p.x, y + 0.47, p.zc, 0.3, 0.2);
    }
    for (const t of TREES.filter((t) => t.z === zn.id)) {
      for (let i = 0; i < 13; i++) { const a = (i / 13) * TAU; sb.sph(zr.range(0.1, 0.14), t.x + Math.cos(a) * 0.72, 0.03, t.zc + Math.sin(a) * 0.72, zr.pick([0xbdb5a6, 0xa9a195, 0xcfc7b8]), 1, 0.7, 1, 6); }
      const s = addSpot({ type: 'tree', zone: zn.id, pos: new V3(t.x, 0.03, t.zc), stand: new V3(t.x + 0.35, 0, t.zc + 1.05), scale: 1.45, pickR: 0.7, pickH: 1.9 });
      s.soil = mound(grp, t.x, 0, t.zc, 0.66, 0.12);
    }
    for (const a of ARCHES.filter((a) => a.z === zn.id)) {
      const path = archPath(), white = 0xf3ede2;
      for (const dz of [-0.24, 0.24]) {
        const curve = new THREE.CatmullRomCurve3(path.map((p) => new V3(p.x, p.y, p.z + dz)));
        sb.add(new THREE.TubeGeometry(curve, 40, 0.028, 6), T(a.x, 0, a.zc), white, 0);
      }
      for (let i = 1; i < path.length - 1; i += 2) { const p = path[i]; sb.cyl(0.014, 0.014, 0.48, a.x + p.x, p.y, a.zc, white, 5, RX(Math.PI / 2), 0); }
      const s = addSpot({ type: 'arch', zone: zn.id, pos: new V3(a.x, 0, a.zc), stand: new V3(a.x - 1.35, 0, a.zc + 0.55), scale: 1, pickR: 0.95, pickH: 2.4 });
      s.soil = mound(grp, a.x - 0.75, 0, a.zc, 0.3, 0.25); mound(grp, a.x + 0.75, 0, a.zc, 0.3, 0.25).material = s.soil.material;
    }
    if (zn.id === 1) {
      for (const x of HANGS) {
        const y = 2.02, z = -5.05;
        sb.add(new THREE.SphereGeometry(0.22, 12, 6, 0, TAU, Math.PI / 2, Math.PI / 2), T(x, y, z), 0x8a6a48, 0.03);
        sb.add(new THREE.TorusGeometry(0.22, 0.018, 5, 14), mul(T(x, y, z), RX(Math.PI / 2)), 0x6e5038);
        for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU + 0.5; sb.cyl(0.005, 0.005, 0.55, x + Math.cos(a) * 0.1, y + 0.26, z + Math.sin(a) * 0.1, 0x4a4a4a, 4, mul(RY(-a), RZ(0.4)), 0); }
        const s = addSpot({ type: 'hang', zone: 1, pos: new V3(x, y, z), stand: new V3(x, 0, -4.35), scale: 1.35, pickR: 0.4, pickH: 0.9, pickY: -0.5, high: true });
        s.soil = mound(grp, x, y - 0.03, z, 0.2, 0.2);
      }
      for (const wx of WINDOWS) {
        sb.box(1.5, 0.2, 0.26, wx, 1.0, -6.78, 0x7e9a8c); sb.box(1.56, 0.03, 0.3, wx, 1.1, -6.78, 0x6e8a7c);
        for (const dx of [-0.6, 0.6]) sb.box(0.05, 0.14, 0.2, wx + dx, 0.86, -6.84, 0x5a4a3a);
        for (let i = -1; i <= 1; i++) {
          const s = addSpot({ type: 'window', zone: 1, pos: new V3(wx + i * 0.46, 1.1, -6.76), stand: new V3(wx + i * 0.46, 0, -6.05), scale: 1.2, pickR: 0.24, pickH: 0.6, pickY: -0.1 });
          s.soil = mound(grp, wx + i * 0.46, 1.09, -6.76, 0.17, 0.2);
        }
      }
    }
    if (zn.id === 3) buildPond(grp, sb, world, addSpot, zr);
    if (zn.id === 7) buildScarecrow(sb, -9.55, -6.9);
    if (zn.id === 8) buildGreenhouse(grp, sb, world, addSpot, mound);
    if (sb.g.length) grp.add(sb.mesh(propMat));
    // locked overlay: wooden sign
    if (zn.cost > 0) {
      const lg = new THREE.Group(), ls = new SB(300 + zn.id);
      const [tx, tz] = zn.tag;
      if (zn.id === 1) { ls.box(0.7, 0.36, 0.05, tx, 1.75, -4.92, 0xb89068); ls.cyl(0.01, 0.01, 0.4, tx - 0.28, 2.05, -4.92, 0x555555, 4); ls.cyl(0.01, 0.01, 0.4, tx + 0.28, 2.05, -4.92, 0x555555, 4); }
      else { ls.box(0.09, 1.25, 0.09, tx, 0.62, tz, 0x7a5a40); ls.box(0.95, 0.5, 0.06, tx, 1.25, tz + 0.06, 0xc49a6c, RZ(0.04)); ls.box(0.8, 0.07, 0.065, tx, 1.33, tz + 0.07, 0x8a6648, RZ(0.04)); ls.box(0.6, 0.07, 0.065, tx - 0.08, 1.17, tz + 0.07, 0x8a6648, RZ(0.04)); }
      lg.add(ls.mesh(propMat)); scene.add(lg); world.lockGroups[zn.id] = lg;
      // only the sign itself opens the offer to buy the area
      const sp = new THREE.Mesh(zn.id === 1 ? new THREE.BoxGeometry(1.0, 0.8, 0.5) : new THREE.CylinderGeometry(0.62, 0.62, 1.7, 8), new THREE.MeshBasicMaterial({ visible: false }));
      sp.position.set(tx, zn.id === 1 ? 1.8 : 0.85, zn.id === 1 ? -4.9 : tz); sp.userData.zoneSign = zn.id; lg.add(sp); (world.signPicks ??= []).push(sp);
    }
  }

  // ----- decorations (bought in the shop) -----
  buildDecor(scene, world);

  // ----- order stand + mailbox (always there, in the front garden) -----
  buildServices(scene, world);

  // ----- grass -----
  buildGrass(scene, world, q, unlocked);

  // ----- pick proxies -----
  const pickMat = new THREE.MeshBasicMaterial({ visible: false });
  world.pickables = [];
  for (const s of world.spots) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(s.pickR, s.pickR, s.pickH, 8), pickMat);
    m.position.copy(s.pos); m.position.y += s.pickH / 2 + (s.pickY ?? 0); m.userData.spot = s; scene.add(m); world.pickables.push(m); s.pick = m;
  }

  world.setZone = (id, on) => {
    world.zoneGroups[id].visible = on; if (world.lockGroups[id]) world.lockGroups[id].visible = !on;
    for (const s of world.spots) if (s.zone === id) s.pick.visible = on;
  };
  world.setDecor = (id, on) => { if (world.decor[id]) world.decor[id].visible = on; };
  world.setNight = (n) => {
    for (const m of world.nightMats) m.emissiveIntensity = m.userData.e * n;
    for (const l of world.lamps) { l.intensity = l.userData.i * n * (l.parent.visible ? 1 : 0); l.visible = n > 0.02; }
  };
  // seasons tint the lawn and the distant trees
  const TINT = [[[1, 1, 1], [1, 1, 1]], [[0.93, 1.0, 0.84], [0.88, 1.0, 0.82]], [[1.22, 0.98, 0.6], [1.6, 0.86, 0.4]], [[0.86, 0.96, 0.92], [0.78, 0.9, 0.8]]];
  const gT = new THREE.Color(1, 1, 1), tT = new THREE.Color(1, 1, 1), g0 = new THREE.Color(0xdde8cc), gg = new THREE.Color();
  world.setSeason = (id, now) => { gT.setRGB(...TINT[id][0]); tT.setRGB(...TINT[id][1]); if (now) { world.grass.material.color.copy(gT); world.bgTreeMat.color.copy(tT); world.ground.material.color.copy(gg.copy(g0).multiply(gT)); } };
  world.tickers.push((dt) => { const k = Math.min(1, dt * 0.6); world.grass.material.color.lerp(gT, k); world.bgTreeMat.color.lerp(tT, k); world.ground.material.color.lerp(gg.copy(g0).multiply(gT), k); });
  world.update = (dt, t) => { for (const f of world.tickers) f(dt, t); };
  // ornaments placed by the player
  world.items = [];
  world.canPlace = (x, z, r, ignore, zones) => {
    if (Math.abs(x) > 12.25 - r || z > 14.45 - r || z < -8.95 + r) return false;
    if (Math.abs(x) < 5.0 + r && z < -4.7 + r) return false;
    const zn = zoneAt(x, z); if (zn >= 0 && !zones.includes(zn)) return false;
    for (let i = 0; i < 9; i++) { const a = (i / 8) * TAU, rr = i === 8 ? 0 : r * 0.9, px = x + Math.cos(a) * rr, pz = z + Math.sin(a) * rr; if (onPath(px, pz) || staticBlocked(px, pz)) return false; }
    for (const s of world.spots) if (s.type !== 'hang' && s.type !== 'window' && Math.hypot(s.pos.x - x, s.pos.z - z) < r + 0.45) return false;
    for (const it of world.items) if (it !== ignore && Math.hypot(it.rec.x - x, it.rec.z - z) < r + it.def.r) return false;
    return true;
  };
  world.blocked = (x, z) => { if (staticBlocked(x, z)) return true; for (const it of world.items) if ((x - it.rec.x) ** 2 + (z - it.rec.z) ** 2 < (it.def.r * 0.85) ** 2) return true; return false; };
  const staticBlocked = (x, z) => {
    if (Math.abs(x) > 12.2 || z > 14.4 || z < -8.9) return true;
    if (Math.abs(x) < 4.95 && z < -4.95) return z < -6.55 || Math.abs(x) > 4.6 || (Math.abs(Math.abs(x) - 4.05) < 0.45 && z < -5.3);
    for (const b of BEDS) if (inRect(x, z, bedRect(b), 0.22)) return true;
    if (inPond(x, z, 0.35)) return true;
    if (inRect(x, z, GREEN, 0.15)) return true;
    for (const p of POTS) if (!p.porch && (x - p.x) ** 2 + (z - p.zc) ** 2 < 0.5 ** 2) return true;
    for (const t of TREES) if ((x - t.x) ** 2 + (z - t.zc) ** 2 < 0.62 ** 2) return true;
    for (const a of ARCHES) for (const s of [-0.75, 0.75]) if ((x - a.x - s) ** 2 + (z - a.zc) ** 2 < 0.3 ** 2) return true;
    for (const k in world.things) { const t = world.things[k]; if ((x - t.pos.x) ** 2 + (z - t.pos.z) ** 2 < t.r ** 2) return true; }
    for (const d of world.decorBlocks) if (world.decor[d.id].visible && (x - d.x) ** 2 + (z - d.z) ** 2 < d.r ** 2) return true;
    return false;
  };
  return world;
}

function buildHouse(scene, world, pal = {}) {
  const first = !world.houseMesh, DOOR = pal.door ?? 0x5f8f8a, SHUT = pal.shut ?? 0x6f93a8, dk = (c) => new THREE.Color(c).multiplyScalar(0.9).getHex();
  const sb = new SB(31), r = mulberry(32);
  const WALL = pal.wall ?? 0xf6ecd9, WOOD = 0x6e4c34, TRIM = 0xfbf6ec, ROOF = [0xb9583a, 0xc46442, 0xae5034, 0xcc6e4a, 0xb85c40];
  const zc = -10, w = 9, d = 6.2, h = 3.0, zf = -6.9;
  sb.box(w, h, d, 0, h / 2, zc, WALL, null, 0); sb.box(w + 0.12, 0.5, d + 0.12, 0, 0.25, zc, 0xb5a696, null, 0);
  // gables
  const gh = 2.5, hw = w / 2;
  for (const sx of [-1, 1]) {
    const g2 = new THREE.BufferGeometry(); const x = sx * hw, z0 = zc - d / 2, z1 = zc + d / 2;
    const v = sx > 0 ? [x, h, z1, x, h, z0, x, h + gh, zc] : [x, h, z0, x, h, z1, x, h + gh, zc];
    g2.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); g2.computeVertexNormals(); sb.add(g2, null, WALL, 0);
    sb.cyl(0.42, 0.42, 0.06, x + sx * 0.02, h + 0.85, zc, 0x9cc4dd, 16, RZ(Math.PI / 2), 0); sb.add(new THREE.TorusGeometry(0.44, 0.05, 6, 20), mul(T(x + sx * 0.03, h + 0.85, zc), RY(Math.PI / 2)), TRIM, 0);
  }
  // roof tiles: half-cylinders laid along each slope
  const slope = Math.atan2(gh, d / 2), len = Math.hypot(gh, d / 2);
  const tiles = (x0, x1, y0, z0, side, ang, L, rows, colsN) => {
    const tw = (x1 - x0) / colsN, sn = Math.sin(ang), cs = Math.cos(ang);
    for (let i = 0; i < rows; i++) for (let j = 0; j < colsN; j++) {
      const dist = ((i + 0.5) / rows) * L, x = x0 + (j + 0.5) * tw + ((i % 2) - 0.5) * tw * 0.5;
      sb.add(new THREE.CylinderGeometry(tw * 0.52, tw * 0.52, (L / rows) * 1.3, 6, 1, true, 0, Math.PI), mul(T(x, y0 - sn * dist + 0.04 + i * 0.002, z0 + side * cs * dist), RX(side * (Math.PI / 2 + ang)), RY(side * Math.PI / 2), S(0.45, 1, 1)), ROOF[Math.floor(r() * ROOF.length)], 0.05);
    }
    sb.box(x1 - x0 - 0.1, 0.08, L, (x0 + x1) / 2, y0 - sn * L / 2 - 0.03, z0 + side * cs * L / 2, 0x8a4630, RX(side * ang), 0);
  };
  tiles(-(w + 1.1) / 2, (w + 1.1) / 2, h + gh, zc, -1, slope, len + 0.75, 11, 26);
  tiles(-(w + 1.1) / 2, (w + 1.1) / 2, h + gh, zc, 1, slope, len + 0.12, 10, 26);
  sb.cyl(0.16, 0.16, w + 1.2, 0, h + gh + 0.1, zc, 0xa84e32, 8, RZ(Math.PI / 2));
  // beams
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) sb.box(0.2, h, 0.2, sx * hw, h / 2, zc + sz * d / 2, WOOD);
  sb.box(w + 0.1, 0.18, 0.16, 0, h - 0.05, zf, WOOD);
  // chimney
  sb.box(0.7, 1.9, 0.7, 2.6, h + gh - 0.3, zc - 1.0, 0xa8674e); sb.box(0.84, 0.14, 0.84, 2.6, h + gh + 0.68, zc - 1.0, 0x8e5540);
  world.chimney = new V3(2.6, h + gh + 0.8, zc - 1.0);
  // door
  sb.box(1.24, 2.28, 0.1, 0, 1.14 + PORCH_Y, zf + 0.03, TRIM, null, 0); sb.box(1.04, 2.14, 0.1, 0, 1.09 + PORCH_Y, zf + 0.06, DOOR, null, 0);
  for (const [dx, dy] of [[-0.24, 0.55], [0.24, 0.55], [-0.24, 1.3], [0.24, 1.3]]) sb.box(0.36, 0.6, 0.03, dx, dy + PORCH_Y, zf + 0.115, dk(DOOR), null, 0);
  sb.sph(0.045, 0.38, 1.1 + PORCH_Y, zf + 0.14, 0xe0b85a, 1, 1, 1, 8, 0);
  sb.add(new THREE.CircleGeometry(0.2, 16), T(0, 1.86 + PORCH_Y, zf + 0.115), 0xf6dfa0, 0);
  // windows
  const glass = new THREE.MeshStandardMaterial({ color: 0x9cc8e0, roughness: 0.15, metalness: 0.1, emissive: 0xffc46a, emissiveIntensity: 0 });
  glass.userData.e = 1.6; if (first) world.nightMats.push(glass);
  const gl = [];
  for (const wx of [-2.75, 2.75]) {
    const wy = 1.85;
    sb.box(1.5, 1.42, 0.1, wx, wy, zf + 0.02, TRIM, null, 0);
    const g = new THREE.PlaneGeometry(1.3, 1.22); g.translate(wx, wy, zf + 0.075); gl.push(g);
    sb.box(0.05, 1.22, 0.04, wx, wy, zf + 0.09, TRIM, null, 0); sb.box(1.3, 0.05, 0.04, wx, wy, zf + 0.09, TRIM, null, 0);
    for (const s of [-1, 1]) { sb.box(0.5, 1.42, 0.05, wx + s * 1.02, wy, zf + 0.04, SHUT); for (let k = 0; k < 6; k++) sb.box(0.4, 0.03, 0.02, wx + s * 1.02, wy - 0.55 + k * 0.22, zf + 0.075, dk(SHUT), null, 0); }
    sb.box(1.7, 0.07, 0.2, wx, wy - 0.75, zf + 0.08, TRIM, null, 0);
  }
  for (const sx of [-1, 1]) { const g = new THREE.CircleGeometry(0.4, 16); g.rotateY(sx * Math.PI / 2); g.translate(sx * (hw + 0.055), h + 0.85, zc); gl.push(g); }
  const gm = new THREE.Mesh(mergeGeometries(gl), glass); if (first) scene.add(gm);
  // porch
  sb.box(9.8, PORCH_Y, 2.05, 0, PORCH_Y / 2, -5.93, 0xa9825c, null, 0);
  for (let i = 0; i < 20; i++) sb.box(0.46, 0.02, 2.05, -4.66 + i * 0.49, PORCH_Y + 0.005, -5.93, r.pick([0xb38a62, 0xa67e58, 0xba9068]), null, 0.03);
  sb.box(2.4, 0.09, 0.4, 0, 0.045, -4.75, 0xa67e58);
  for (const x of [-4.7, -1.45, 1.45, 4.7]) { sb.box(0.15, 2.35, 0.15, x, PORCH_Y + 1.17, -5.0, TRIM); sb.box(0.24, 0.1, 0.24, x, PORCH_Y + 0.05, -5.0, TRIM); sb.box(0.26, 0.08, 0.26, x, 2.5, -5.0, TRIM); }
  sb.box(9.8, 0.16, 0.16, 0, 2.6, -5.0, TRIM);
  for (const [x0, x1] of [[-4.7, -1.45], [1.45, 4.7]]) { sb.box(x1 - x0, 0.06, 0.07, (x0 + x1) / 2, PORCH_Y + 0.78, -5.0, TRIM); for (let x = x0 + 0.2; x < x1; x += 0.2) sb.box(0.04, 0.7, 0.04, x, PORCH_Y + 0.42, -5.0, TRIM, null, 0); }
  // porch roof (shallower continuation of the front slope)
  tiles(-5.15, 5.15, h + 0.1, zf - 0.02, 1, 0.19, 2.5, 5, 30);
  // wall lantern
  sb.box(0.12, 0.2, 0.12, 0.95, 2.1, zf + 0.12, 0x3a3a3a);
  const lampM = new THREE.MeshStandardMaterial({ color: 0xfff0c8, emissive: 0xffc070, emissiveIntensity: 0, roughness: 0.4 }); lampM.userData.e = 4; if (first) world.nightMats.push(lampM);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), lampM); lamp.position.set(0.95, 2.02, zf + 0.14); if (first) scene.add(lamp);
  const pl2 = new THREE.PointLight(0xffb866, 0, 11, 1.6); pl2.position.set(0, 2.3, -5.6); pl2.userData.i = 14; if (first) { scene.add(pl2); world.lamps.push(pl2); }
  // welcome mat + hose barrel
  sb.box(0.9, 0.02, 0.5, 0, PORCH_Y + 0.012, -6.4, 0xb8704a);
  sb.lathe([[0.001, 0], [0.26, 0], [0.3, 0.3], [0.26, 0.62], [0.24, 0.62], [0.24, 0.56]], 5.6, 0, -6.5, 0x7a5a40, 12); sb.cyl(0.24, 0.24, 0.02, 5.6, 0.55, -6.5, 0x6aa0c0, 12);
  if (world.houseMesh) { scene.remove(world.houseMesh); world.houseMesh.geometry.dispose(); }
  const m = sb.mesh(propMat2); scene.add(m); world.houseMesh = m;
}

function buildPond(grp, sb, world, addSpot, zr) {
  const { x, z, rx, rz } = POND;
  const shape = new THREE.Shape(); const n = 40;
  for (let i = 0; i <= n; i++) { const a = (i / n) * TAU, k = 1 + 0.05 * Math.sin(a * 3 + 1) + 0.03 * Math.sin(a * 5); const px = Math.cos(a) * rx * k, pz = Math.sin(a) * rz * k; if (i === 0) shape.moveTo(px, pz); else shape.lineTo(px, pz); }
  const wg = new THREE.ShapeGeometry(shape, 24); wg.rotateX(Math.PI / 2);
  const wn = waterNormals();
  const water = new THREE.Mesh(wg, new THREE.MeshStandardMaterial({ color: 0x3f8f96, roughness: 0.06, metalness: 0.35, normalMap: wn, normalScale: new THREE.Vector2(0.35, 0.35), transparent: true, opacity: 0.86, side: THREE.DoubleSide }));
  water.position.set(x, 0.035, z); water.receiveShadow = true; grp.add(water); world.water = water;
  const bed = new THREE.Mesh(wg.clone(), new THREE.MeshStandardMaterial({ color: 0x2a4a44, roughness: 1, side: THREE.DoubleSide })); bed.position.set(x, 0.008, z); grp.add(bed);
  world.tickers.push((dt, t) => { wn.offset.set(t * 0.012, t * 0.018); });
  const cols = [0xbdb5a6, 0xa9a195, 0xcfc7b8, 0x9c958a, 0xb5ac9c];
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * TAU + zr.range(-0.04, 0.04), k = 1 + 0.05 * Math.sin(a * 3 + 1) + 0.03 * Math.sin(a * 5) + zr.range(0.0, 0.07), s = zr.range(0.13, 0.25);
    sb.add(new THREE.SphereGeometry(s, 7, 5), mul(T(x + Math.cos(a) * rx * k, 0.04, z + Math.sin(a) * rz * k), RY(zr() * 6), S(1, zr.range(0.5, 0.8), zr.range(0.7, 1.1))), zr.pick(cols), 0.04);
  }
  // reeds
  const b = new Builder();
  for (let i = 0; i < 26; i++) { const a = zr.range(2.4, 4.4), px = Math.cos(a) * rx * 0.86 + zr.range(-0.15, 0.15), pz = Math.sin(a) * rz * 0.86 + zr.range(-0.1, 0.1), hgt = zr.range(0.5, 1.0);
    b.petal(mul(T(px, 0, pz), RY(zr() * 6), RX(zr.range(0.02, 0.2))), { L: hgt, W: 0.03, a: 0.6, b: 0.4, curl: 0.4, fold: 0.4, nu: 4, nv: 1, cols: [col(0x3f7a3a), col(0x5a9a48), col(0x8ab860)] });
    if (i % 4 === 0) { b.tube(T(px, 0, pz), [new V3(0, 0, 0), new V3(0.02, hgt * 0.6, 0), new V3(0.03, hgt * 1.1, 0)], 0.006, 0.005, col(0x5a8a3a), col(0x6a8a3a), 4); b.blob(T(px + 0.03, hgt * 1.1, pz), 0.02, 0.07, col(0x6a4a2a), col(0x5a3a22), 6, 4); } }
  const reeds = new THREE.Mesh(b.build(), makePlantMaterial({ sway: 0.25 })); reeds.position.set(x, 0, z); reeds.castShadow = true; grp.add(reeds);
  for (const [dx, dz] of [[-1.0, 0.45], [0.85, -0.5], [0.15, 0.75], [1.35, 0.5]]) {
    const px = x + dx, pz = z + dz, len = Math.hypot(dx / rx, dz / rz), ex = x + (dx / len) * 1.0 * (1 + 0.32 / rx), ez = z + (dz / len) * (1 + 0.42 / rz);
    const a = Math.atan2(dz / rz, dx / rx);
    addSpot({ type: 'pond', zone: 3, pos: new V3(px, 0.04, pz), stand: new V3(x + Math.cos(a) * (rx + 0.75), 0, z + Math.sin(a) * (rz + 0.75)), scale: 1.7, pickR: 0.5, pickH: 0.5 });
  }
  // koi
  const koi = [];
  for (let i = 0; i < 4; i++) {
    const kb = new Builder(), c = zr.pick([col(0xf07a2a), col(0xf4f0e8), col(0xe8482a), col(0xf7b02a)]);
    kb.blob(mul(RZ(Math.PI / 2), S(1, 1, 0.5)), 0.05, 0.14, c, zr() < 0.5 ? col(0xf4f0e8) : c, 6, 5);
    kb.petal(mul(T(-0.12, 0, 0), RZ(Math.PI / 2), RX(Math.PI / 2)), { L: 0.1, W: 0.09, a: 1.6, b: 0.5, nu: 2, nv: 2, cols: [c, c, c] });
    const m = new THREE.Mesh(kb.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, side: THREE.DoubleSide }));
    m.userData = { a: zr() * 6, r: zr.range(0.45, 0.8), v: zr.range(0.25, 0.45) * zr.sign(), o: zr() * 6 }; grp.add(m); koi.push(m);
  }
  world.tickers.push((dt, t) => { for (const k of koi) { const u = k.userData, a = u.a + t * u.v; const rr = u.r + 0.12 * Math.sin(t * 0.5 + u.o);
    k.position.set(x + Math.cos(a) * rx * rr, -0.03, z + Math.sin(a) * rz * rr); k.rotation.y = -a - Math.sign(u.v) * Math.PI / 2 + Math.sin(t * 5 + u.o) * 0.15; } });
}

function buildServices(scene, world) {
  world.things = {};
  const pickMat = new THREE.MeshBasicMaterial({ visible: false });
  const thing = (kind, x, z, r, h, stand, top) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 8), pickMat); m.position.set(x, h / 2, z); m.userData.thing = kind; scene.add(m);
    world.things[kind] = { kind, pos: new V3(x, 0, z), r: r * 0.85, stand: new V3(x + stand[0], 0, z + stand[1]), top, pick: m }; return m; };
  // flower stall where the neighbours leave their orders
  { const x = -1.85, z = 2.75, sb = new SB(61), R = RY(Math.PI / 2);
    const at = (dx, dy, dz) => new V3(dx, dy, dz).applyMatrix4(R).add(new V3(x, 0, z));
    const box = (w, h, d, dx, dy, dz, c, rot) => { const p = at(dx, dy, dz); sb.box(w, h, d, p.x, p.y, p.z, c, rot ? mul(R, rot) : R); };
    box(1.0, 0.05, 0.56, 0, 0.66, 0, 0xb98a5e); box(0.94, 0.3, 0.5, 0, 0.5, 0, 0xa87a50);
    for (const sx of [-0.44, 0.44]) for (const sz of [-0.22, 0.22]) box(0.06, 0.66, 0.06, sx, 0.33, sz, 0x7d5c40);
    for (const sx of [-0.47, 0.47]) box(0.045, 1.25, 0.045, sx, 1.28, -0.24, 0x7d5c40);
    for (let i = 0; i < 6; i++) box(0.18, 0.03, 0.7, -0.45 + i * 0.18, 1.88 - 0.0, 0.02, i % 2 ? 0xf6efe2 : 0xe2685f, RX(0.22));
    let p = at(-0.22, 0.69, 0.02); sb.lathe([[0.001, 0], [0.13, 0], [0.17, 0.14], [0.175, 0.16], [0.16, 0.16]], p.x, p.y, p.z, 0xc49a5c, 12);
    p = at(0.26, 0.69, 0.0); sb.lathe([[0.001, 0], [0.09, 0], [0.1, 0.2], [0.085, 0.2]], p.x, p.y, p.z, 0x7fa8c0, 10);
    box(0.34, 0.26, 0.03, 0, 0.36, 0.3, 0x3d4a44, RX(-0.18)); box(0.38, 0.03, 0.035, 0, 0.5, 0.275, 0xb98a5e, RX(-0.18));
    const m = sb.mesh(propMat); scene.add(m);
    const b = new Builder(), rr = mulberry(62), cs = [0xf07aa4, 0xf7c84a, 0xffffff, 0xb48af0, 0xe2483a].map(col);
    for (let i = 0; i < 16; i++) { const basket = i < 10, q = basket ? at(-0.22 + rr.range(-0.1, 0.1), 0.82, 0.02 + rr.range(-0.1, 0.1)) : at(0.26 + rr.range(-0.04, 0.04), 0.88, rr.range(-0.04, 0.04)), hgt = basket ? rr.range(0.06, 0.16) : rr.range(0.14, 0.26), c = rr.pick(cs);
      b.tube(T(q.x, q.y, q.z), [new V3(0, 0, 0), new V3(0.01, hgt * 0.5, 0), new V3(rr.range(-0.05, 0.05), hgt, rr.range(-0.05, 0.05))], 0.004, 0.003, col(0x4a8a3a), col(0x5a9a44), 4);
      for (let k = 0; k < 6; k++) b.petal(mul(T(q.x, q.y + hgt, q.z), RY(k * 1.05), RX(1.15)), { L: 0.04, W: 0.028, nu: 2, nv: 2, cup: 0.3, cols: [c, c, c] }); }
    const fm = new THREE.Mesh(b.build(), makePlantMaterial({ sway: 0.3 })); fm.castShadow = true; scene.add(fm);
    thing('orders', x, z, 0.62, 2.0, [1.05, 0.0], 2.15); }
  // mailbox for the daily surprise
  { const x = 1.7, z = 2.95, sb = new SB(63);
    sb.cyl(0.04, 0.05, 1.05, x, 0.52, z, 0x8a6a4a, 6); sb.box(0.3, 0.2, 0.44, x, 1.14, z, 0x6f9db8);
    sb.cyl(0.15, 0.15, 0.44, x, 1.24, z, 0x6f9db8, 12, RX(Math.PI / 2)); sb.box(0.02, 0.2, 0.02, x - 0.165, 1.2, z + 0.24, 0x4f7d98);
    sb.cyl(0.13, 0.13, 0.012, x, 1.2, z + 0.226, 0x5b8aa6, 12, RX(Math.PI / 2));
    scene.add(sb.mesh(propMat));
    const flag = new THREE.Group(); flag.position.set(x + 0.16, 1.16, z - 0.05);
    const f1 = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.26, 0.03), new THREE.MeshStandardMaterial({ color: 0xe2483a, roughness: 0.6 })); f1.position.y = 0.13; flag.add(f1);
    const f2 = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.09, 0.12), f1.material); f2.position.set(0, 0.22, 0.06); flag.add(f2); f1.castShadow = f2.castShadow = true;
    scene.add(flag); world.mailFlag = flag;
    thing('mail', x, z, 0.36, 1.6, [0, 0.8], 1.75); }
  thing('house', 0, -6.8, 0.6, 2.5, [0, 1.2], 2.7); // the front door: repaint the house
}

function buildScarecrow(sb, x, z) {
  sb.cyl(0.03, 0.035, 1.5, x, 0.75, z, 0x8a6a4a, 6); sb.box(1.0, 0.05, 0.05, x, 1.12, z, 0x8a6a4a);
  sb.box(0.36, 0.44, 0.16, x, 0.98, z, 0xc8584a); sb.box(0.3, 0.1, 0.12, x - 0.34, 1.12, z, 0xc8584a); sb.box(0.3, 0.1, 0.12, x + 0.34, 1.12, z, 0xc8584a);
  for (const s of [-0.5, 0.5]) for (let k = 0; k < 4; k++) sb.box(0.012, 0.11, 0.012, x + s + (k - 1.5) * 0.02 * Math.sign(s), 1.07, z, 0xe8cf7a, RZ(s * (0.2 + k * 0.2)));
  sb.sph(0.13, x, 1.36, z, 0xecd49a, 1, 1.05, 1, 10); sb.add(new THREE.ConeGeometry(0.2, 0.2, 10), T(x, 1.53, z), 0xb98a4e); sb.cyl(0.27, 0.27, 0.02, x, 1.44, z, 0xb98a4e, 12);
  for (const s of [-0.045, 0.045]) sb.sph(0.016, x + s, 1.38, z + 0.12, 0x3a2a1e, 1, 1, 1, 6); sb.sph(0.02, x, 1.34, z + 0.128, 0xe8843a, 1, 1, 1, 6);
  for (let k = 0; k < 7; k++) sb.box(0.014, 0.16, 0.014, x - 0.15 + k * 0.05, 0.72, z, 0xe8cf7a, RZ((k - 3) * 0.08));
}

function buildGreenhouse(grp, sb, world, addSpot, mound) {
  const [x0, x1, z0, z1] = GREEN, cx = (x0 + x1) / 2, w = x1 - x0, d = z1 - z0, h = 1.9, rh = 0.8, WHT = 0xf6f2e8;
  const glass = new THREE.MeshStandardMaterial({ color: 0xcfeaf2, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false });
  const panes = [];
  const pane = (pw, ph, x, y, z, ry = 0, rx = 0) => { const g = new THREE.PlaneGeometry(pw, ph); g.applyMatrix4(mul(T(x, y, z), RY(ry), RX(rx))); panes.push(g); };
  // floor + low brick base
  sb.box(w + 0.1, 0.05, d + 0.1, cx, 0.025, (z0 + z1) / 2, 0xbfb4a2, null, 0.02);
  for (const [bx, bz, bw, bd] of [[cx, z0, w, 0.1], [x0, (z0 + z1) / 2, 0.1, d], [x1, (z0 + z1) / 2, 0.1, d], [cx - w / 4 - 0.25, z1, w / 2 - 0.5, 0.1], [cx + w / 4 + 0.25, z1, w / 2 - 0.5, 0.1]]) sb.box(bw, 0.36, bd, bx, 0.18, bz, 0xb5745a, null, 0.04);
  // frame
  for (const x of [x0, x1]) for (const z of [z0, z1]) sb.box(0.07, h, 0.07, x, h / 2, z, WHT, null, 0);
  for (let i = 1; i < 4; i++) { const x = x0 + (w * i) / 4; sb.box(0.045, h, 0.045, x, h / 2, z0, WHT, null, 0); if (Math.abs(x - cx) > 0.6) sb.box(0.045, h, 0.045, x, h / 2, z1, WHT, null, 0); }
  for (const x of [cx - 0.5, cx + 0.5]) sb.box(0.055, h, 0.055, x, h / 2, z1, WHT, null, 0);
  for (const z of [z0, z1]) sb.box(w, 0.06, 0.06, cx, h, z, WHT, null, 0);
  for (const x of [x0, x1]) { sb.box(0.06, 0.06, d, x, h, (z0 + z1) / 2, WHT, null, 0); sb.box(0.045, h, 0.045, x, h / 2, (z0 + z1) / 2, WHT, null, 0); }
  sb.box(w + 0.1, 0.06, 0.06, cx, h + rh, (z0 + z1) / 2, WHT, null, 0);
  const sl = Math.hypot(rh, d / 2), ang = Math.atan2(rh, d / 2);
  for (let i = 0; i <= 4; i++) for (const s of [-1, 1]) sb.box(0.045, 0.045, sl, x0 + (w * i) / 4, h + rh / 2, (z0 + z1) / 2 + s * d / 4, WHT, RX(s * ang), 0);
  // glass
  pane(w, h - 0.36, cx, 0.36 + (h - 0.36) / 2, z0); pane(d, h - 0.36, x0, 0.36 + (h - 0.36) / 2, (z0 + z1) / 2, Math.PI / 2); pane(d, h - 0.36, x1, 0.36 + (h - 0.36) / 2, (z0 + z1) / 2, Math.PI / 2);
  pane(w / 2 - 0.5, h - 0.36, cx - w / 4 - 0.25, 0.36 + (h - 0.36) / 2, z1); pane(w / 2 - 0.5, h - 0.36, cx + w / 4 + 0.25, 0.36 + (h - 0.36) / 2, z1);
  for (const s of [-1, 1]) pane(w, sl, cx, h + rh / 2, (z0 + z1) / 2 + s * d / 4, 0, s * ang - Math.PI / 2);
  const gm = new THREE.Mesh(mergeGeometries(panes), glass); gm.renderOrder = 4; grp.add(gm);
  // bench with six pots
  sb.box(w - 0.5, 0.05, 0.5, cx, 0.72, z0 + 0.42, 0xb98a5e); for (const x of [x0 + 0.4, x1 - 0.4]) for (const z of [z0 + 0.24, z0 + 0.6]) sb.box(0.05, 0.7, 0.05, x, 0.35, z, 0x8a6648);
  for (let i = 0; i < 6; i++) { const x = x0 + 0.45 + i * ((w - 0.9) / 5), y = 0.745, z = z0 + 0.42;
    sb.lathe([[0.001, 0], [0.11, 0], [0.12, 0.03], [0.16, 0.24], [0.18, 0.25], [0.18, 0.28], [0.155, 0.28], [0.15, 0.26]], x, y, z, [0xc66f48, 0x7fa8a0, 0xd8b06a][i % 3], 14, undefined, 0.02);
    const s = addSpot({ type: 'green', zone: 8, pos: new V3(x, y + 0.27, z), stand: new V3(cx + (i - 2.5) * 0.12, 0, z1 + 0.45), scale: 1.15, pickR: 0.2, pickH: 0.8, pickY: -0.25 });
    s.soil = mound(grp, x, y + 0.255, z, 0.15, 0.2); }
}

function buildDecor(scene, world) {
  world.decorBlocks = [];
  const mk = (id, fn, block) => { const sb = new SB(400 + id.length), g = new THREE.Group(); fn(sb, g); if (sb.g.length) g.add(sb.mesh(propMat)); g.visible = false; scene.add(g); world.decor[id] = g; if (block) world.decorBlocks.push({ id, ...block }); };
  mk('lanternas', (sb, g) => {
    const lm = new THREE.MeshStandardMaterial({ color: 0xfff0c8, emissive: 0xffb860, emissiveIntensity: 0, roughness: 0.4 }); lm.userData.e = 5; world.nightMats.push(lm);
    const pts = [[-1.0, -2.6], [1.0, 0.6], [-1.0, 6.2], [1.0, 9.4], [-1.0, 12.8], [5.6, 4.25], [-5.6, 4.25]];
    for (const [x, z] of pts) { sb.cyl(0.025, 0.035, 0.8, x, 0.4, z, 0x3a3a3a, 6); sb.box(0.16, 0.03, 0.16, x, 0.8, z, 0x3a3a3a); sb.add(new THREE.ConeGeometry(0.14, 0.1, 4), mul(T(x, 1.05, z), RY(Math.PI / 4)), 0x3a3a3a);
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.18, 0.11), lm); b.position.set(x, 0.905, z); g.add(b); }
    for (const [x, z] of [[0, -1], [0, 7.8], [0, 4.25]]) { const l = new THREE.PointLight(0xffb060, 0, 9, 1.5); l.position.set(x, 1.1, z); l.userData.i = 9; g.add(l); world.lamps.push(l); }
  });
  mk('banco', (sb) => {
    const x = -3.4, z = 2.7, W = 0xa47850;
    for (let i = 0; i < 4; i++) sb.box(1.5, 0.04, 0.1, x, 0.45, z - 0.18 + i * 0.12, W, null, 0.04);
    for (let i = 0; i < 3; i++) sb.box(1.5, 0.1, 0.035, x, 0.62 + i * 0.14, z - 0.27, W, RX(-0.15), 0.04);
    for (const s of [-0.68, 0.68]) { sb.box(0.07, 0.45, 0.07, x + s, 0.22, z + 0.2, 0x4a4a4a); sb.box(0.07, 0.98, 0.07, x + s, 0.49, z - 0.25, 0x4a4a4a, RX(-0.1)); sb.box(0.07, 0.05, 0.5, x + s, 0.62, z - 0.02, 0x4a4a4a); }
  }, { x: -3.4, z: 2.7, r: 0.85 });
  mk('bebedouro', (sb, g) => {
    const x = 2.6, z = 2.5, C = 0xcfc8bc;
    sb.lathe([[0.001, 0], [0.24, 0], [0.22, 0.06], [0.09, 0.12], [0.07, 0.62], [0.12, 0.7], [0.42, 0.78], [0.44, 0.84], [0.4, 0.84], [0.36, 0.78], [0.001, 0.76]], x, 0, z, C, 18);
    const w = new THREE.Mesh(new THREE.CircleGeometry(0.385, 18), new THREE.MeshStandardMaterial({ color: 0x6ab0c0, roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.85 })); w.rotation.x = -Math.PI / 2; w.position.set(x, 0.815, z); g.add(w);
  }, { x: 2.6, z: 2.5, r: 0.55 });
  mk('casinha', (sb) => {
    const x = 4.6, z = -3.7;
    sb.cyl(0.04, 0.05, 2.1, x, 1.05, z, 0x8a6a4a, 6); sb.box(0.36, 0.34, 0.32, x, 2.2, z, 0x7aa8c0);
    sb.box(0.3, 0.03, 0.4, x - 0.12, 2.45, z, 0xc8584a, RZ(0.7)); sb.box(0.3, 0.03, 0.4, x + 0.12, 2.45, z, 0xc8584a, RZ(-0.7));
    sb.cyl(0.06, 0.06, 0.02, x, 2.22, z + 0.165, 0x2a2a2a, 10, RX(Math.PI / 2)); sb.cyl(0.012, 0.012, 0.12, x, 2.1, z + 0.2, 0x8a6a4a, 5, RX(Math.PI / 2));
  });
  mk('carrinho', (sb, g) => {
    const x = 4.2, z = 1.95, R = RY(0.6);
    const at = (dx, dy, dz) => new V3(dx, dy, dz).applyMatrix4(R).add(new V3(x, 0, z));
    let p = at(0, 0.42, 0); sb.box(0.9, 0.28, 0.56, p.x, p.y, p.z, 0x5a8a7a, R);
    p = at(0, 0.56, 0); sb.box(0.82, 0.04, 0.48, p.x, p.y, p.z, 0x4a3426, R);
    p = at(0.55, 0.2, 0); sb.cyl(0.2, 0.2, 0.07, p.x, p.y, p.z, 0x3a3a3a, 14, mul(R, RX(Math.PI / 2)));
    for (const s of [-0.24, 0.24]) { p = at(-0.75, 0.48, s); sb.box(0.7, 0.04, 0.04, p.x, p.y, p.z, 0x8a6a4a, mul(R, RZ(-0.12))); p = at(-0.35, 0.14, s); sb.box(0.05, 0.3, 0.05, p.x, p.y, p.z, 0x8a6a4a, R); }
    const b = new Builder(), rr = mulberry(8), cs = [0xf06a9a, 0xf7c81e, 0xffffff, 0x9a7ae8, 0xf2701a].map(col);
    for (let i = 0; i < 26; i++) { const q = at(rr.range(-0.36, 0.36), 0.58, rr.range(-0.2, 0.2)), hgt = rr.range(0.1, 0.24), c = rr.pick(cs);
      b.tube(T(q.x, q.y, q.z), [new V3(0, 0, 0), new V3(0.01, hgt * 0.5, 0), new V3(rr.range(-0.04, 0.04), hgt, rr.range(-0.04, 0.04))], 0.004, 0.003, col(0x4a8a3a), col(0x5a9a44), 4);
      for (let k = 0; k < 6; k++) b.petal(mul(T(q.x, q.y + hgt, q.z), RY(k * 1.05), RX(1.2)), { L: 0.045, W: 0.03, nu: 2, nv: 2, cup: 0.3, cols: [c, c, c] });
      for (let k = 0; k < 3; k++) b.petal(mul(T(q.x, q.y, q.z), RY(rr() * 6), RX(rr.range(0.5, 1.1))), { L: 0.1, W: 0.04, nu: 2, nv: 2, fold: 0.3, cols: [col(0x3a7a34), col(0x4c8a3a), col(0x6aa04a)] }); }
    const m = new THREE.Mesh(b.build(), makePlantMaterial({ sway: 0.4 })); m.castShadow = true; g.add(m);
  }, { x: 4.2, z: 1.95, r: 0.75 });
  mk('anao', (sb) => {
    const x = -4.3, z = -0.1;
    sb.sph(0.15, x, 0.17, z, 0x3a6aa8, 1, 1.1, 1, 10); sb.sph(0.11, x, 0.4, z, 0xf2c8a4, 1, 1, 1, 10);
    sb.add(new THREE.ConeGeometry(0.115, 0.3, 10), T(x, 0.6, z), 0xd8382e); sb.sph(0.09, x, 0.33, z + 0.07, 0xf4f4f0, 1, 1.1, 0.7, 8);
    sb.sph(0.025, x, 0.41, z + 0.105, 0xe8a888, 1, 1, 1, 6); for (const s of [-0.07, 0.07]) sb.sph(0.05, x + s, 0.03, z + 0.06, 0x4a3426, 1, 0.7, 1.4, 6);
  });
}

function buildGrass(scene, world, q, unlocked) {
  // one tuft = 3 crossed blades
  const pos = [], colr = [], nrm = [], idx = [];
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI + 0.3, cx = Math.cos(a), sz = Math.sin(a), ox = (k - 1) * 0.02, oz = (k % 2) * 0.02, lean = (k - 1) * 0.03, s = pos.length / 3;
    const P = [[-0.5, 0, 0], [0.5, 0, 0], [-0.32, 0.55, 0.5], [0.32, 0.55, 0.5], [0, 1, 1]];
    for (const [w, y, l] of P) { pos.push(ox + cx * w * 0.026 + lean * l, y, oz + sz * w * 0.026 + lean * l * 0.5); nrm.push(0, 1, 0); const g = 0.68 + y * 0.4; colr.push(g * 0.82, g, g * 0.6); }
    idx.push(s, s + 1, s + 2, s + 1, s + 3, s + 2, s + 2, s + 3, s + 4);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3)); geo.setIndex(idx);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, windU);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime, uWind;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        { vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); float h = position.y * position.y;
          float ph = ip.x * 0.55 + ip.z * 0.4; float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ip.x * 0.15 + ip.z * 0.11);
          transformed.x += (sin(uTime * 1.5 + ph) * 0.09 + sin(uTime * 3.3 + ph * 2.1) * 0.03) * h * uWind * gust;
          transformed.z += cos(uTime * 1.2 + ph * 1.3) * 0.07 * h * uWind * gust; }`);
  };
  const r = mulberry(55), list = [];
  const BEDR = BEDS.map(bedRect);
  const free = (x, z) => {
    if (Math.abs(x) < 4.95 && z < -4.75) return false;
    if (onPath(x, z)) return false;
    for (const b of BEDR) if (inRect(x, z, b, 0.1)) return false;
    if (inPond(x, z, 0.28)) return false;
    if (inRect(x, z, GREEN, 0.05)) return false;
    for (const p of POTS) if ((x - p.x) ** 2 + (z - p.zc) ** 2 < 0.1) return false;
    for (const t of TREES) if ((x - t.x) ** 2 + (z - t.zc) ** 2 < 0.45) return false;
    return true;
  };
  const N = 78000;
  const zoneIdx = ZONES.map(() => []);
  const o = new THREE.Object3D(), c = new THREE.Color();
  const recs = [];
  for (let i = 0; i < N; i++) {
    const inside = i < N * 0.74;
    let x, z;
    if (inside) { x = r.range(-12.5, 12.5); z = r.range(-9.1, 14.6); } else { const a = r() * TAU, rr = 13 + Math.pow(r(), 1.6) * 22; x = Math.cos(a) * rr * 1.1; z = 3 + Math.sin(a) * rr; if (Math.abs(x) < 12.6 && z > -9.2 && z < 14.7) continue; if (Math.abs(x) < 5.2 && z < -6) continue; if (Math.abs(x) < 0.9 && z > 14) continue; }
    if (inside && !free(x, z)) continue;
    const zn = inside ? zoneAt(x, z) : -1;
    recs.push({ x, z, zn, s: r.range(0.75, 1.25), rot: r() * TAU, hue: r(), wild: r.range(1.7, 2.8) });
  }
  for (let i = recs.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = recs[i]; recs[i] = recs[j]; recs[j] = t; }
  const im = new THREE.InstancedMesh(geo, mat, recs.length);
  const setRec = (i) => {
    const d = recs[i], locked = d.zn > 0 && !unlocked.has(d.zn), wild = d.zn === -1 || locked;
    o.position.set(d.x, groundY(d.x, d.z), d.z); o.rotation.set(0, d.rot, 0);
    const hgt = (wild ? 0.12 * d.wild : 0.09) * d.s; o.scale.set(d.s * (wild ? 1.25 : 1.0), hgt, d.s * (wild ? 1.25 : 1.0)); o.updateMatrix(); im.setMatrixAt(i, o.matrix);
    if (wild) c.setHSL(0.19 + d.hue * 0.08, 0.36 + d.hue * 0.1, 0.34 + d.hue * 0.1); else c.setHSL(0.225 + d.hue * 0.05, 0.37, 0.33 + d.hue * 0.07);
    im.setColorAt(i, c);
  };
  recs.forEach((d, i) => { setRec(i); if (d.zn > 0) zoneIdx[d.zn].push(i); });
  im.receiveShadow = true; im.frustumCulled = false; scene.add(im); world.grass = im;
  world.setGrass = (f) => { im.count = Math.max(1000, Math.round(recs.length * f)); }; world.setGrass(q.grass);
  world.mowZone = (zn) => { for (const i of zoneIdx[zn]) setRec(i); im.instanceMatrix.needsUpdate = true; im.instanceColor.needsUpdate = true; };

  // wild flowers in the meadow and in locked zones
  const fgeo = new THREE.BufferGeometry(); const fp = [], fc = [], fi = [], fn = [];
  for (let k = 0; k < 6; k++) { const a = (k / 6) * TAU, s = fp.length / 3; fp.push(0, 1, 0, Math.cos(a - 0.4) * 0.5, 1.06, Math.sin(a - 0.4) * 0.5, Math.cos(a + 0.4) * 0.5, 1.06, Math.sin(a + 0.4) * 0.5); fc.push(1, 0.9, 0.3, 1, 1, 1, 1, 1, 1); fn.push(0, 1, 0, 0, 1, 0, 0, 1, 0); fi.push(s, s + 2, s + 1); }
  { const s = fp.length / 3; fp.push(-0.05, 0, 0, 0.05, 0, 0, 0, 1, 0); fc.push(0.25, 0.5, 0.2, 0.25, 0.5, 0.2, 0.3, 0.6, 0.25); fn.push(0, 1, 0, 0, 1, 0, 0, 1, 0); fi.push(s, s + 1, s + 2); }
  fgeo.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3)); fgeo.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3)); fgeo.setAttribute('normal', new THREE.Float32BufferAttribute(fn, 3)); fgeo.setIndex(fi);
  const wf = recs.map((d, i) => [d, i]).filter(([d]) => (d.zn === -1 || d.zn > 0) && d.hue > 0.93);
  const fm = new THREE.InstancedMesh(fgeo, mat, wf.length), pal = [0xffffff, 0xf7d84a, 0xf7a0c8, 0xb8a0f0, 0xf78a5a, 0xfff2a0];
  const setF = (k) => { const [d] = wf[k], show = d.zn === -1 || !unlocked.has(d.zn); o.position.set(d.x + 0.05, 0, d.z); o.rotation.set(0, d.rot, 0); const s = show ? 0.09 * d.s : 0.0001; o.scale.set(s, show ? 0.3 * d.wild * 0.55 : 0.0001, s); o.updateMatrix(); fm.setMatrixAt(k, o.matrix); fm.setColorAt(k, c.set(pal[Math.floor(d.rot * 7) % pal.length])); };
  wf.forEach((_, k) => setF(k)); fm.frustumCulled = false; scene.add(fm);
  const mow0 = world.mowZone; world.mowZone = (zn) => { mow0(zn); wf.forEach(([d], k) => { if (d.zn === zn) setF(k); }); fm.instanceMatrix.needsUpdate = true; };
}
