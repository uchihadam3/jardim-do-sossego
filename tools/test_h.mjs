import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } }); const p = await ctx.newPage(); const errors = [];
p.on('pageerror', (e) => errors.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 160)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await ev(() => { try { localStorage.clear(); } catch (e) {} }); await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await p.click('#start'); await wait(3000);
// real tap on Eliane
await ev(() => { const g = window.__game, q = g.gardener.group.position; g.cam.yaw = 0; g.cam.pitch = 0.5; g.cam.dist = 6; }); await wait(3000);
const s = await ev(() => { const g = window.__game, q = g.gardener.group.position, V = q.constructor; return g.project(new V(q.x, 1.0, q.z)); }); await p.mouse.click(s.x, s.y); await wait(1500);
ok('real tap on Eliane opens the wardrobe', (await p.textContent('#modal')).includes('Do seu jeito')); await ev(() => window.__game.ui.closeModal());
// nine plantings queued at once: nothing is lost
await ev(() => { const g = window.__game; g.state.coins = 60000; g.state.xp = 30000; g.state.zones = [0, 1, 2, 3, 4, 5, 6, 7, 8]; for (let z = 1; z <= 8; z++) { g.world.setZone(z, true); g.world.mowZone(z); } g.game.refreshMarkers(); });
const r = await ev(() => { const g = window.__game, c0 = g.state.coins; let spent = 0, n = 0; for (const t of ['bed', 'pot', 'hang', 'window', 'pond', 'tree', 'arch', 'veg', 'green', 'bed', 'bed', 'bed', 'bed', 'bed', 'bed', 'bed']) { const s = g.world.spots.find((x) => x.type === t && !g.state.plants[x.id] && !x.pending); g.game.tapSpot(s); const first = document.querySelector('.seed:not(.locked)'); if (first) { const before = g.state.coins; first.click(); if (g.state.coins < before) n++; } g.ui.closeCards(); } return { queued: g.game.tasks.length, paid: n, pending: g.world.spots.filter((x) => x.pending).length }; });
ok('queue accepts many plantings and charges only what is queued', r.pending === r.paid, JSON.stringify(r));
const t0 = Date.now(); while (Date.now() - t0 < 420000) { if (await ev(() => !window.__game.game.cur && !window.__game.game.tasks.length)) break; await wait(1500); }
const res = await ev(() => { const g = window.__game; return { planted: Object.keys(g.state.plants).length, types: [...new Set(Object.keys(g.state.plants).map((id) => g.world.spots[id].type))].length, stuck: g.world.spots.filter((x) => x.pending).length }; });
ok('everything queued got planted, in all 9 kinds of place', res.planted === r.paid && res.types === 9 && res.stuck === 0, JSON.stringify(res));
// phone
await p.close();
const ph = await b.newContext({ viewport: { width: 400, height: 820 }, hasTouch: true, isMobile: true }); const q = await ph.newPage(); q.on('pageerror', (e) => errors.push('phone: ' + e.message));
await q.goto(URL + '?q=baixa&nointro=1'); await q.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await q.tap('#start'); await q.waitForTimeout(3500);
await q.tap('#b-shop'); await q.waitForTimeout(1200); ok('phone: shop opens without sideways overflow', !(await q.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)));
await q.evaluate(() => window.__game.ui.closeModal()); await q.evaluate(() => window.__game.game.tapThing('eliane')); await q.waitForTimeout(900); ok('phone: wardrobe opens', (await q.textContent('#modal')).includes('Do seu jeito'));
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
