import * as THREE from 'three';

export function mulberry(seed) {
  let a = seed >>> 0;
  const f = () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  f.range = (lo, hi) => lo + (hi - lo) * f();
  f.pick = (arr) => arr[Math.floor(f() * arr.length)];
  f.sign = () => (f() < 0.5 ? -1 : 1);
  return f;
}

export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
export const easeOutBack = (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const TAU = Math.PI * 2;

const _m = new THREE.Matrix4();
export const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
export const RX = (a) => new THREE.Matrix4().makeRotationX(a);
export const RY = (a) => new THREE.Matrix4().makeRotationY(a);
export const RZ = (a) => new THREE.Matrix4().makeRotationZ(a);
export const S = (x, y = x, z = x) => new THREE.Matrix4().makeScale(x, y, z);
export const mul = (...ms) => { const r = new THREE.Matrix4(); for (const m of ms) r.multiply(m); return r; };

const _Y = new THREE.Vector3(0, 1, 0);
// matrix moving origin to p with +Y aligned to dir
export function frame(p, dir) {
  const q = new THREE.Quaternion().setFromUnitVectors(_Y, dir.clone().normalize());
  return new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1));
}

export const col = (hex) => new THREE.Color(hex);
export function mixc(a, b, t) { return a.clone().lerp(b, t); }
export function shade(c, k) { return c.clone().multiplyScalar(k); }
export function jitterc(c, rng, amt = 0.06) {
  const h = {}; c.getHSL(h);
  return new THREE.Color().setHSL((h.h + rng.range(-amt, amt) * 0.25 + 1) % 1, clamp(h.s + rng.range(-amt, amt), 0, 1), clamp(h.l + rng.range(-amt, amt), 0, 1));
}

// quadratic bezier sample list
export function bez(p0, p1, p2, n) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t;
    out.push(new THREE.Vector3(p0.x * a + p1.x * b + p2.x * c, p0.y * a + p1.y * b + p2.y * c, p0.z * a + p1.z * b + p2.z * c));
  }
  return out;
}
export function polyAt(pts, t) {
  const f = clamp(t, 0, 1) * (pts.length - 1), i = Math.min(pts.length - 2, Math.floor(f)), k = f - i;
  const p = pts[i].clone().lerp(pts[i + 1], k);
  const d = pts[i + 1].clone().sub(pts[i]).normalize();
  return { p, d };
}
