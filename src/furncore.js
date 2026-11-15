// Furniture for the inside of the house: shared catalogue + the little modelling kit every piece is built with.
// A piece is registered with furn(def, build). build(k, def) receives a Kit and models the piece around the origin:
//   floor pieces: origin = centre of the footprint on the floor, FRONT towards +z, back towards -z, x to the sides.
//   wall pieces : the wall is the plane z = 0, the piece sticks out towards +z, y is the real height above the floor.
//   ceil pieces : hang from y = ROOM_H.   rug: flat on the floor.   top: small things that stand on a table (or on the floor).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { SB, propMat } from './world.js';
import { T, RX, RY, RZ, S, mul, TAU } from './util.js';

export const ROOM_H = 2.8;
export const FURN = [], FURN_BY = {};
const BUILD = {};
export const CATS = ['Camas', 'Sofás e poltronas', 'Mesas', 'Cadeiras', 'Armários e estantes', 'Cozinha', 'Banheiro', 'TV e som', 'Luzes', 'Tapetes', 'Quadros e parede', 'Enfeites', 'Vasos e plantas', 'Especiais'];
export const WOOD = { pinho: 0xdcc096, mel: 0xc99a5c, carvalho: 0xb08252, nogueira: 0x7c5438, mogno: 0x6c3c2a, ebano: 0x3c2c26, branco: 0xf4efe6, cinza: 0xa3a09a };
export const METAL = { ferro: 0x3c3c40, latao: 0xd4a94e, cromo: 0xc9ced2, cobre: 0xc47a4e, ouro: 0xe6c05a };
const WHITE = new THREE.Color(0xffffff);
// tone(c, 0.8) = darker, tone(c, 1.3) = 30% towards white
export const tone = (c, f) => { const k = new THREE.Color(c); return (f > 1 ? k.lerp(WHITE, Math.min(1, f - 1)) : k.multiplyScalar(f)).getHex(); };
export const mixHex = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t).getHex();
const hexCss = (n) => '#' + n.toString(16).padStart(6, '0');

const propMatD = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, side: THREE.DoubleSide });
const shinyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.18 });
const artCache = new Map();
const I = new THREE.Matrix4();

export class Kit {
  constructor(group, c1, c2, def) { this.g = group; this.c1 = c1; this.c2 = c2; this.def = def; this.sb = new SB(7); this.sbD = new SB(8); this.sbS = new SB(9); group.userData.glow = []; group.userData.ticks = []; }
  // --- matte solids (merged into one mesh, coloured per part) ---
  add(geo, M, color) { this.sb.add(geo, M || I.clone(), color, 0); return this; }
  box(w, h, d, x, y, z, color, rot) { return this.add(new THREE.BoxGeometry(w, h, d), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  // soft box: cushions, mattresses, pillows, modern furniture. r = corner radius
  rbox(w, h, d, x, y, z, color, r = 0.04, rot) { r = Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001); return this.add(new RoundedBoxGeometry(w, h, d, 2, Math.max(0.002, r)), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  // cylinder: r0 = top radius, r1 = bottom radius
  cyl(r0, r1, h, x, y, z, color, seg = 14, rot) { return this.add(new THREE.CylinderGeometry(r0, r1, h, seg), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  sph(r, x, y, z, color, sx = 1, sy = 1, sz = 1, seg = 14) { return this.add(new THREE.SphereGeometry(r, seg, Math.max(5, seg - 4)), mul(T(x, y, z), S(sx, sy, sz)), color); }
  // closed turned shape: pts = [[radius, y], ...] from bottom to top (vases, lamp feet, turned legs, bowls with thickness)
  lathe(pts, x, y, z, color, seg = 18, rot) { return this.add(new THREE.LatheGeometry(pts.map(([r, yy]) => new THREE.Vector2(r, yy)), seg), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  cone(r, h, x, y, z, color, seg = 14, rot) { return this.add(new THREE.ConeGeometry(r, h, seg), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  torus(R, r, x, y, z, color, rot, arc = TAU) { return this.add(new THREE.TorusGeometry(R, r, 6, 20, arc), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  // bent rod through points [[x,y,z], ...] (chair backs, lamp arms, handles, bed frames of iron)
  tube(pts, radius, color, seg = 6, closed = false) { const c = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), closed, 'catmullrom', 0.35); return this.add(new THREE.TubeGeometry(c, Math.max(8, pts.length * 6), radius, seg, closed), null, color); }
  // four legs under a w x d top, h tall. o: { r, inset, taper (bottom radius factor), round (cylinders) }
  legs(w, d, h, color, o = {}) { const r = o.r ?? 0.03, ins = o.inset ?? r + 0.02, y0 = o.y ?? 0; for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * (w / 2 - ins), z = sz * (d / 2 - ins); if (o.round ?? true) this.cyl(r, r * (o.taper ?? 0.7), h, x, y0 + h / 2, z, color, 8); else this.box(r * 2, h, r * 2, x, y0 + h / 2, z, color); } return this; }
  // --- thin shells seen from both sides (lamp shades, bowls, curtains, open drawers) ---
  add2(geo, M, color) { this.sbD.add(geo, M || I.clone(), color, 0); return this; }
  lathe2(pts, x, y, z, color, seg = 18) { return this.add2(new THREE.LatheGeometry(pts.map(([r, yy]) => new THREE.Vector2(r, yy)), seg), T(x, y, z), color); }
  // --- polished / metallic solids (taps, chrome, brass, glazed ceramic, lacquer) ---
  addS(geo, M, color) { this.sbS.add(geo, M || I.clone(), color, 0); return this; }
  boxS(w, h, d, x, y, z, color, rot) { return this.addS(new THREE.BoxGeometry(w, h, d), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  cylS(r0, r1, h, x, y, z, color, seg = 14, rot) { return this.addS(new THREE.CylinderGeometry(r0, r1, h, seg), rot ? mul(T(x, y, z), rot) : T(x, y, z), color); }
  sphS(r, x, y, z, color, sx = 1, sy = 1, sz = 1, seg = 14) { return this.addS(new THREE.SphereGeometry(r, seg, Math.max(5, seg - 4)), mul(T(x, y, z), S(sx, sy, sz)), color); }
  latheS(pts, x, y, z, color, seg = 18) { return this.addS(new THREE.LatheGeometry(pts.map(([r, yy]) => new THREE.Vector2(r, yy)), seg), T(x, y, z), color); }
  tubeS(pts, radius, color, seg = 6) { const c = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.35); return this.addS(new THREE.TubeGeometry(c, Math.max(8, pts.length * 6), radius, seg, false), null, color); }
  // --- separate meshes ---
  // a part that glows: lamp bulbs and shades, TV screens, fire, fairy lights. e = strength when lit. o.day (0..1) = how much it also glows by day
  glow(geo, color, e = 1.6, o = {}) { const m = new THREE.MeshStandardMaterial({ color, emissive: o.emissive ?? color, emissiveIntensity: 0, roughness: 0.5, side: o.double ? THREE.DoubleSide : THREE.FrontSide, transparent: o.opacity != null, opacity: o.opacity ?? 1 });
    m.userData.e = e; m.userData.day = o.day ?? 0; const mesh = new THREE.Mesh(geo, m); if (o.M) mesh.applyMatrix4(o.M); else if (o.at) mesh.position.set(...o.at); this.g.add(mesh); this.g.userData.glow.push(m); return mesh; }
  // see-through part: glass doors, aquarium walls, bottles, table tops
  glass(geo, M, color = 0xcfeaf2, opacity = 0.28) { const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.08, metalness: 0.1, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false })); if (M) mesh.applyMatrix4(M); mesh.renderOrder = 4; this.g.add(mesh); return mesh; }
  // a painted rectangle facing +z, centred at x,y,z: pictures, clock faces, book covers, screens. draw(ctx, W, H, css) paints a W x H canvas (css(hex) -> '#rrggbb').
  // key must be unique per different drawing (it is cached). o: { res (pixels of the longer side, default 256), rot (Matrix4), glow (emissive strength, for screens), day }
  art(key, w, h, x, y, z, draw, o = {}) { const res = o.res ?? 256, W = w >= h ? res : Math.round((res * w) / h), H = w >= h ? Math.round((res * h) / w) : res; let tex = artCache.get(key);
    if (!tex) { const c = document.createElement('canvas'); c.width = W; c.height = H; draw(c.getContext('2d'), W, H, hexCss); tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; artCache.set(key, tex); }
    const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }); if (o.glow) { m.emissive = new THREE.Color(0xffffff); m.emissiveMap = tex; m.emissiveIntensity = 0; m.userData.e = o.glow; m.userData.day = o.day ?? 1; this.g.userData.glow.push(m); }
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); mesh.applyMatrix4(o.rot ? mul(T(x, y, z), o.rot) : T(x, y, z)); mesh.receiveShadow = true; this.g.add(mesh); return mesh; }
  // any other mesh of your own (rarely needed)
  mesh(m) { this.g.add(m); return m; }
  // animation: fn(dt, time, night 0..1, group)
  tick(fn) { this.g.userData.ticks.push(fn); return this; }
  finish() { for (const [sb, mat, sh] of [[this.sb, propMat, true], [this.sbD, propMatD, true], [this.sbS, shinyMat, true]]) if (sb.g.length) { const m = sb.mesh(mat, sh); this.g.add(m); }
    this.g.traverse((o) => { if (o.isMesh && !o.material.transparent) { o.castShadow = true; o.receiveShadow = true; } }); }
}

// def: { id, name, cat, price, lvl, comfort, w, d, h, kind, cols: [hex, hex], colN: ['Tecido', 'Madeira'], surf, plants, seat, sleep, info }
export function furn(def, build) {
  def.kind ??= 'floor'; def.cols ??= [0xffffff, 0xffffff]; def.colN ??= ['Cor', 'Detalhe']; def.lvl ??= 1; def.comfort ??= Math.max(1, Math.round(Math.sqrt(def.price) / 2));
  if (FURN_BY[def.id]) { console.warn('furniture id twice: ' + def.id); def.id += '_2'; }
  FURN.push(def); FURN_BY[def.id] = def; BUILD[def.id] = build; return def;
}
export function buildFurn(id, c1, c2) {
  const def = FURN_BY[id], g = new THREE.Group(); if (!def) return g;
  const k = new Kit(g, c1 ?? def.cols[0], c2 ?? def.cols[1], def); BUILD[id](k, def); k.finish(); g.userData.def = def; return g;
}
export { T, RX, RY, RZ, S, mul, TAU, THREE };
