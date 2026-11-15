import * as THREE from 'three';
import { TAU } from './util.js';

const v = new THREE.Vector3(), n3 = new THREE.Matrix3(), vn = new THREE.Vector3();
const A = new THREE.Vector3(), B = new THREE.Vector3(), Cc = new THREE.Vector3();

// Accumulates many small procedural parts into a single vertex-coloured geometry.
export class Builder {
  constructor() { this.pos = []; this.col = []; this.nrm = []; this.fix = []; this.idx = []; this.n = 0; }

  vert(x, y, z, c, M, nx, ny, nz) {
    v.set(x, y, z); if (M) v.applyMatrix4(M);
    this.pos.push(v.x, v.y, v.z); this.col.push(c.r, c.g, c.b);
    this.fix.push(nx === undefined ? 0 : 1);
    if (nx === undefined) this.nrm.push(NaN, 0, 0);
    else { vn.set(nx, ny, nz); if (M) vn.applyMatrix3(n3.setFromMatrix4(M)).normalize(); this.nrm.push(vn.x, vn.y, vn.z); }
    return this.n++;
  }
  quadGrid(start, nu, nv, flip) {
    const w = nv + 1;
    for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
      const a = start + i * w + j, b = a + 1, c = a + w, d = c + 1;
      if (flip) this.idx.push(a, b, c, b, d, c); else this.idx.push(a, c, b, b, c, d);
    }
  }

  // Petal / leaf: a bent, cupped sheet. Base at origin, grows along +Y, outer face +Z.
  // o: L, W, a, b (outline), base (min half width fraction), cup, curl, curlPow, curl0, ruffle, rf, twist, fold, nu, nv, cols[3], vein, tipNotch
  petal(M, o) {
    const nu = o.nu ?? 5, nv = o.nv ?? 4, L = o.L, hw0 = o.W / 2;
    const a = o.a ?? 1, b = o.b ?? 0.6, cup = o.cup ?? 0, curl = o.curl ?? 0, cp = o.curlPow ?? 1.6;
    const ruf = o.ruffle ?? 0, rf = o.rf ?? 2, tw = o.twist ?? 0, fold = o.fold ?? 0, base = o.base ?? 0.0;
    const [c0, c1, c2] = o.cols, vein = o.vein ?? 0, ph = o.phase ?? 0, notch = o.tipNotch ?? 0;
    const start = this.n, c = new THREE.Color();
    let cy = 0, cz = 0;
    for (let i = 0; i <= nu; i++) {
      const u = i / nu;
      const ang = o.angFn ? o.angFn(u) : (o.curl0 ?? 0) + curl * Math.pow(u, cp);
      if (i > 0) { const um = (i - 0.5) / nu, am = o.angFn ? o.angFn(um) : (o.curl0 ?? 0) + curl * Math.pow(um, cp); cy += Math.cos(am) * L / nu; cz += Math.sin(am) * L / nu; }
      const ny = -Math.sin(ang), nz = Math.cos(ang); // outer normal
      const ty = Math.cos(ang), tz = Math.sin(ang);
      let s = Math.pow(Math.sin(Math.PI * Math.pow(Math.min(u, 0.999), a)), b);
      s = Math.max(s, base * (1 - u));
      const hw = hw0 * s, t = tw * u, ct = Math.cos(t), st = Math.sin(t);
      for (let j = 0; j <= nv; j++) {
        const q = (j / nv) * 2 - 1;
        const x = q * hw;
        let off = -cup * hw * q * q - fold * hw * Math.abs(q) + ruf * hw0 * Math.sin(q * Math.PI * rf + ph + u * 5) * u * u;
        const along = notch ? -notch * L * (1 - Math.abs(q)) * Math.pow(u, 6) : 0;
        const px = x * ct - off * st, po = x * st + off * ct;
        if (u < 0.5) c.copy(c0).lerp(c1, u * 2); else c.copy(c1).lerp(c2, (u - 0.5) * 2);
        if (vein) c.multiplyScalar(1 - vein * (1 - Math.abs(q)) * (1 - u * 0.5) + vein * 0.4);
        this.vert(px, cy + ny * po + ty * along, cz + nz * po + tz * along, c, M);
      }
    }
    this.quadGrid(start, nu, nv, false);
  }

  // Tapered tube along a polyline (local to M)
  tube(M, pts, r0, r1, c0, c1, seg = 5, cap = false) {
    const start = this.n, c = new THREE.Color(), n = pts.length;
    const up = new THREE.Vector3(0.13, 0.2, 0.97);
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      A.copy(pts[Math.min(n - 1, i + 1)]).sub(pts[Math.max(0, i - 1)]).normalize();
      B.crossVectors(A, up).normalize(); Cc.crossVectors(B, A).normalize();
      const r = typeof r0 === 'function' ? r0(t) : r0 + (r1 - r0) * t;
      c.copy(c0).lerp(c1, t);
      for (let j = 0; j <= seg; j++) {
        const th = (j / seg) * TAU, cs = Math.cos(th) * r, sn = Math.sin(th) * r;
        this.vert(pts[i].x + B.x * cs + Cc.x * sn, pts[i].y + B.y * cs + Cc.y * sn, pts[i].z + B.z * cs + Cc.z * sn, c, M);
      }
    }
    this.quadGrid(start, n - 1, seg, true);
    if (cap) { const p = pts[n - 1]; this.blob(new THREE.Matrix4().copy(M || new THREE.Matrix4()).multiply(new THREE.Matrix4().makeTranslation(p.x, p.y, p.z)), (typeof r0 === 'function' ? r0(1) : r1), (typeof r0 === 'function' ? r0(1) : r1), c1, c1, 5, 3); }
  }

  // Ellipsoid (rx=rz=r, ry=h) centred at origin of M, colour gradient bottom->top
  blob(M, r, h, c0, c1, nu = 7, nv = 5, c2) {
    const start = this.n, c = new THREE.Color();
    for (let i = 0; i <= nv; i++) {
      const ph = (i / nv) * Math.PI, y = -Math.cos(ph), s = Math.sin(ph), t = i / nv;
      if (c2) { if (t < 0.5) c.copy(c0).lerp(c1, t * 2); else c.copy(c1).lerp(c2, t * 2 - 1); } else c.copy(c0).lerp(c1, t);
      for (let j = 0; j <= nu; j++) {
        const th = (j / nu) * TAU;
        this.vert(Math.cos(th) * s * r, y * h, Math.sin(th) * s * r, c, M);
      }
    }
    this.quadGrid(start, nv, nu, false);
  }

  // Surface of revolution: prof = [[r, y], ...] bottom->top, colours lerp c0->c1 (or colFn(t))
  lathe(M, prof, c0, c1, seg = 10, colFn, ruffle = 0, rf = 5) {
    const start = this.n, c = new THREE.Color(), n = prof.length;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      if (colFn) colFn(t, c); else c.copy(c0).lerp(c1, t);
      for (let j = 0; j <= seg; j++) {
        const th = (j / seg) * TAU;
        const r = prof[i][0] * (1 + ruffle * t * t * Math.sin(th * rf));
        this.vert(Math.cos(th) * r, prof[i][1], Math.sin(th) * r, c, M);
      }
    }
    this.quadGrid(start, n - 1, seg, false);
  }

  // Flat-ish card (2 tris) with a forced normal - for tiny leaves/blossoms in big clusters
  card(M, w, h, c0, c1, nx, ny, nz, bend = 0.25) {
    const s = this.n;
    this.vert(0, 0, 0, c0, M, nx, ny, nz);
    this.vert(-w / 2, h * 0.5, bend * w, c1, M, nx, ny, nz);
    this.vert(w / 2, h * 0.5, bend * w, c1, M, nx, ny, nz);
    this.vert(0, h, 0, c1, M, nx, ny, nz);
    this.idx.push(s, s + 2, s + 1, s + 1, s + 2, s + 3);
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('aFix', new THREE.Float32BufferAttribute(this.fix, 1));
    g.setIndex(this.idx);
    g.computeVertexNormals();
    const na = g.attributes.normal.array, nr = this.nrm;
    for (let i = 0; i < nr.length; i += 3) if (!Number.isNaN(nr[i])) { na[i] = nr[i]; na[i + 1] = nr[i + 1]; na[i + 2] = nr[i + 2]; }
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}
