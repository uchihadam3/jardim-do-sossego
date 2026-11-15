// Tiny grid A* so the gardener walks around beds, pots and the pond
export function createNav(blockedFn, o = {}) {
  const CELL = o.cell ?? 0.4, X0 = o.x0 ?? -12.4, Z0 = o.z0 ?? -8.8, NX = o.nx ?? 63, NZ = o.nz ?? 60, GUARD = o.guard ?? 6000;
  let grid = null;
  const build = () => { grid = new Uint8Array(NX * NZ); for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) grid[j * NX + i] = blockedFn(X0 + i * CELL, Z0 + j * CELL) ? 1 : 0; };
  const cell = (x, z) => [Math.max(0, Math.min(NX - 1, Math.round((x - X0) / CELL))), Math.max(0, Math.min(NZ - 1, Math.round((z - Z0) / CELL)))];
  const free = (i, j) => i >= 0 && j >= 0 && i < NX && j < NZ && !grid[j * NX + i];
  const nearestFree = (i, j) => { if (free(i, j)) return [i, j]; for (let r = 1; r < 14; r++) { let best = null, bd = 1e9; for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue; if (free(i + di, j + dj)) { const d = di * di + dj * dj; if (d < bd) { bd = d; best = [i + di, j + dj]; } } } if (best) return best; } return [i, j]; };
  const los = (ax, az, bx, bz) => { const d = Math.hypot(bx - ax, bz - az), n = Math.ceil(d / 0.15); for (let k = 0; k <= n; k++) { const t = k / n; if (blockedFn(ax + (bx - ax) * t, az + (bz - az) * t)) return false; } return true; };
  const nav = { invalidate: () => { grid = null; } };
  nav.path = (sx, sz, tx, tz) => {
    if (!grid) build();
    const [si, sj] = nearestFree(...cell(sx, sz)), [ti, tj] = nearestFree(...cell(tx, tz));
    const N = NX * NZ, gS = new Float32Array(N).fill(1e9), came = new Int32Array(N).fill(-1), closed = new Uint8Array(N), open = [];
    const s = sj * NX + si, goal = tj * NX + ti; gS[s] = 0; open.push([0, s]);
    const h = (n) => { const i = n % NX, j = (n / NX) | 0; return Math.hypot(i - ti, j - tj); };
    let found = false, guard = 0;
    while (open.length && guard++ < GUARD) {
      let bi = 0; for (let k = 1; k < open.length; k++) if (open[k][0] < open[bi][0]) bi = k;
      const [, n] = open.splice(bi, 1)[0]; if (closed[n]) continue; closed[n] = 1; if (n === goal) { found = true; break; }
      const i = n % NX, j = (n / NX) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue; const a = i + di, b = j + dj; if (!free(a, b)) continue; if (di && dj && (!free(i + di, j) || !free(i, j + dj))) continue;
        const m = b * NX + a, c = gS[n] + (di && dj ? 1.414 : 1); if (c < gS[m]) { gS[m] = c; came[m] = n; open.push([c + h(m), m]); }
      }
    }
    const pts = [];
    if (found) { let n = goal; while (n !== -1) { pts.push([X0 + (n % NX) * CELL, Z0 + ((n / NX) | 0) * CELL]); n = came[n]; } pts.reverse(); }
    else pts.push([sx, sz]);
    pts[0] = [sx, sz];
    if (!blockedFn(tx, tz)) pts.push([tx, tz]);
    // string pulling
    const out = [pts[0]]; let a = 0;
    while (a < pts.length - 1) { let b = pts.length - 1; while (b > a + 1 && !los(pts[a][0], pts[a][1], pts[b][0], pts[b][1])) b--; out.push(pts[b]); a = b; }
    return out.slice(1);
  };
  return nav;
}
