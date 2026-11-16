// Inside the house: going in, planting in a pot, buying/moving/colouring/storing furniture, things on tables, walls, a new room,
// wallpaper, sitting, going out, and everything surviving a reload.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html', SP = process.argv[2] || '/tmp';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } }), p = await ctx.newPage(), errors = [];
p.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | '))); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
const ev = (fn, a) => p.evaluate(fn, a), wait = (ms) => p.waitForTimeout(ms), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const until = async (fn, ms = 240000, a) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await ev(fn, a)) return true; await wait(700); } return false; };
const open = async () => { await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); };
await open(); await ev(async () => { window.__game.game.save = () => {}; localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; }); }); await open(); await p.click('#start'); await wait(2500);
await ev(() => { const g = window.__game; g.state.coins = 60000; g.state.xp = 9000; g.state.settings.time = 'fixo'; g.state.hour = 11; });
// 1. in
await ev(() => window.__game.game.tapThing('house')); await wait(600); ok('the front door offers to go in', (await p.textContent('#modal')).includes('Entrar em casa')); await p.click('#dr-in');
ok('she walks in', await until(() => window.__game.game.inside)); await wait(1200);
let r = await ev(() => { const g = window.__game, H = g.house; return { items: H.items.length, rooms: g.state.house.rooms, spots: H.spots.filter((s) => s.active).length, comfort: g.game.home.comfort(), ids: H.items.map((i) => i.rec.k) }; });
ok('the house starts with simple furniture in two rooms', r.items >= 15 && r.rooms.length === 2 && r.spots >= 2 && r.ids.includes('sofa_simples') && r.ids.includes('cama_simples'), JSON.stringify(r));
// 1b. placing never ends up inside a wall or on top of another piece: it slides to where it fits
r = await ev(() => { const g = window.__game, H = g.house, home = g.game.home; home.buy('cadeira_simples'); const pl = g.game.placing, out = {};
  home.move(-50, 0.4); out.left = { ok: pl.ok, x0: +H.rect(pl.def, pl.x, pl.z, pl.rot)[0].toFixed(3), why: pl.res.why };
  home.move(0.9, -50); out.back = { ok: pl.ok, z0: +H.rect(pl.def, pl.x, pl.z, pl.rot)[2].toFixed(3), why: pl.res.why }; home.rotate(); out.turned = pl.ok;
  const sofa = H.items.find((i) => i.rec.k === 'sofa_simples'); home.move(sofa.rec.x, sofa.rec.z); const rc = H.rect(pl.def, pl.x, pl.z, pl.rot), o = H.rect(sofa.def, sofa.rec.x, sofa.rec.z, sofa.rec.r);
  out.sofa = { ok: pl.ok, gap: +Math.max(o[0] - rc[1], rc[0] - o[1], o[2] - rc[3], rc[2] - o[3]).toFixed(3), why: pl.res.why }; home.cancel(); return out; });
ok('a piece pushed past a wall stops right against it', r.left.ok && r.left.x0 > -3.2 && r.left.x0 < -2.9 && r.back.ok && r.back.z0 > -2.8 && r.back.z0 < -2.5 && r.turned, JSON.stringify(r));
ok('a piece dropped on the sofa slides to its side', r.sofa.ok && r.sofa.gap >= -0.001 && r.sofa.gap < 0.02, JSON.stringify(r.sofa));
r = await ev(() => { const g = window.__game, it = g.house.items.find((i) => i.rec.k === 'sofa_simples'), ex = () => getComputedStyle(document.querySelector('#b-exit')).display; const a = ex(); g.ui.furnCard(it); const b2 = ex(); g.ui.closeCards(); return { a, b2, c: ex() }; });
ok('the way-out button steps aside while a card is open', r.a !== 'none' && r.b2 === 'none' && r.c !== 'none', JSON.stringify(r));
await p.screenshot({ path: SP + '/house-1.png' });
// 2. a plant in the pot
await ev(() => { const g = window.__game, s = g.house.spots.find((q) => q.active); window.__spot = s.id; g.game.tapSpot(s); }); await wait(700);
ok('the pot opens the plant list', await ev(() => document.querySelectorAll('.seed:not(.locked)').length > 3)); await ev(() => document.querySelector('.seed:not(.locked)').click());
ok('she plants indoors', await until(() => !!window.__game.state.plants[window.__spot] && !window.__game.game.cur && !window.__game.game.tasks.length));
r = await ev(() => { const g = window.__game, v = g.game.V[window.__spot]; return { scene: v.mesh.parent === g.house.scene, wet: g.state.plants[window.__spot].wet > 0, pl: g.game.home.plants() }; }); ok('the plant lives in the house scene and got watered', r.scene && r.wet && r.pl === 1, JSON.stringify(r));
// 3. furniture: buy, colour, move, turn, store, bring back
const c0 = await ev(() => window.__game.state.coins);
await p.click('#b-shop'); await wait(900); ok('the furniture shop opens with categories', (await p.textContent('#modal')).includes('Sofás e poltronas')); await ev(() => [...document.querySelectorAll('[data-cat]')].find((b) => b.dataset.cat === 'Sofás e poltronas').click()); await wait(700);
await p.click('[data-furn="poltrona_simples"]'); await wait(600); ok('choosing a piece starts placing', await ev(() => !!window.__game.game.placing && document.body.classList.contains('placing')));
await ev(() => window.__game.game.home.move(1.0, 1.25)); await wait(300); await p.click('#pb-ok'); await wait(600);
r = await ev((c) => { const g = window.__game, it = g.house.items.find((i) => i.rec.k === 'poltrona_simples'); return { has: !!it, paid: c - g.state.coins, x: it && it.rec.x, placing: !!g.game.placing }; }, c0); ok('placed and paid once', r.has && r.paid === 110 && r.x === 1 && !r.placing, JSON.stringify(r));
r = await ev(() => { const g = window.__game, H = g.house, it = H.items.find((i) => i.rec.k === 'poltrona_simples'); g.game.home.tint(it, 'c1', 0xd8483a); const c = g.state.coins; g.game.home.startMove(it); g.game.home.move(1.5, 0.5); g.game.home.rotate(); g.game.home.confirm(); const it2 = H.items.find((i) => i.rec.k === 'poltrona_simples'); return { c1: it2.rec.c1, x: it2.rec.x, r: it2.rec.r, free: c === g.state.coins, n: H.items.filter((i) => i.rec.k === 'poltrona_simples').length }; });
ok('colour, move and turn are free', r.c1 === 0xd8483a && r.x === 1.5 && r.r === 1 && r.free && r.n === 1, JSON.stringify(r));
r = await ev(() => { const g = window.__game, H = g.house; g.game.home.move; const bad = H.check(H.items.find((i) => i.rec.k === 'poltrona_simples').def, { x: -1.875, z: -2.2, r: 0 }); const wall = H.check(H.items[0].def, { x: 3.1, z: 0, r: 0 }); return { onSofa: bad.ok, inWall: wall.ok }; }); ok('cannot overlap furniture or walls', !r.onSofa && !r.inWall, JSON.stringify(r));
r = await ev(() => { const g = window.__game, H = g.house, it = H.items.find((i) => i.rec.k === 'poltrona_simples'); g.game.home.store(it); const st = g.state.house.stored.poltrona_simples, c = g.state.coins; g.game.home.buy('poltrona_simples'); g.game.home.move(1.5, 0.5); g.game.home.confirm(); return { st, back: H.items.some((i) => i.rec.k === 'poltrona_simples'), free: c === g.state.coins, left: g.state.house.stored.poltrona_simples }; });
ok('stored furniture comes back for free', r.st === 1 && r.back && r.free && r.left === 0, JSON.stringify(r));
// 4. a little pot on the dresser, a plant in it, and the dresser moved with everything on top
r = await ev(() => { const g = window.__game, H = g.house, dr = H.items.find((i) => i.rec.k === 'comoda_simples'); g.game.home.buy('vasinho_mesa'); g.game.home.move(dr.rec.x - 0.375, dr.rec.z); g.game.home.confirm(); if (g.game.placing) g.game.home.cancel(); const v = H.items.find((i) => i.rec.k === 'vasinho_mesa'); window.__pot2 = v && v.rec.sl[0]; return { y: v && v.rec.y, surf: dr.def.surf, spot: v && H.spots.find((s) => s.id === v.rec.sl[0]).pos.y }; });
ok('small things stand on top of furniture', r.y === r.surf && r.spot > r.surf, JSON.stringify(r));
await ev(() => { const g = window.__game; g.game.tapSpot(g.house.spots.find((s) => s.id === window.__pot2)); }); await wait(600); await ev(() => document.querySelector('.seed:not(.locked)').click());
ok('planted on the dresser', await until(() => !!window.__game.state.plants[window.__pot2] && !window.__game.game.cur && !window.__game.game.tasks.length));
r = await ev(() => { const g = window.__game, H = g.house, dr = H.items.find((i) => i.rec.k === 'comoda_simples'), n0 = H.items.length; g.game.home.startMove(dr); g.game.home.move(2.25, 1.5); g.game.home.confirm(); const v = H.items.find((i) => i.rec.k === 'vasinho_mesa'), tv = H.items.find((i) => i.rec.k === 'tv_tubo'), s = H.spots.find((q) => q.id === window.__pot2), m = g.game.V[s.id].mesh;
  return { n: H.items.length === n0, vz: v.rec.z, tz: tv.rec.z, sz: +s.pos.z.toFixed(2), mz: +m.position.z.toFixed(2), vis: m.visible, stuck: g.state.house.items.length === H.items.length }; });
ok('moving the dresser carries the TV, the pot and its plant', r.n && r.vz === 1.5 && r.tz === 1.5 && r.sz === 1.5 && r.mz === 1.5 && r.vis && r.stuck, JSON.stringify(r));
r = await ev(() => { const g = window.__game, H = g.house, v = H.items.find((i) => i.rec.k === 'vasinho_mesa'); g.game.home.store(v); return H.items.includes(v); }); ok('a pot with a plant cannot be stored by accident', r === true);
// 5. on the wall
r = await ev(() => { const g = window.__game, H = g.house; g.game.home.buy('quadro_girassois'); g.game.home.move(-2.6, -2.1); const ok1 = g.game.placing.ok, side = g.game.placing.res.side; g.game.home.confirm(); const it = H.items.find((i) => i.rec.k === 'quadro_girassois'); return { ok1, side, rec: it && it.rec, onWall: it && it.group.parent === H.wallOf('sala', 3).group }; });
ok('pictures go on the nearest wall', r.ok1 && r.side === 3 && r.onWall && r.rec.room === 'sala', JSON.stringify(r));
// 6. a new room
r = await ev(() => { const g = window.__game, H = g.house, c = g.state.coins, okb = g.game.home.buyRoom('cozinha'); return { okb, paid: c - g.state.coins, rooms: g.state.house.rooms.length, kit: H.items.filter((i) => ['fogao_simples', 'geladeira_simples', 'pia_simples'].includes(i.rec.k)).length, far: g.game.home.buyRoom('salao') }; });
ok('the kitchen is built next door, with its starter kit', r.okb && r.paid === 900 && r.rooms === 3 && r.kit === 3 && r.far === false, JSON.stringify(r));
await ev(() => { window.__game.ui.closeModal(); window.__game.game.tapGround(6.4, 0.8); }); ok('she can walk through the new doorway', await until(() => window.__game.gardener.group.position.x > 5.2 && !window.__game.game.cur));
await wait(1500); await p.screenshot({ path: SP + '/house-2.png' });
// 7. wallpaper and floor
r = await ev(() => { const g = window.__game, c = g.state.coins; const a = g.game.home.style('w', 'cozinha', 'azulejo'); const c1 = g.state.coins; g.game.home.style('w', 'cozinha', 'azulejo', 0xf7a8c0); g.game.home.style('w', 'sala', 'azulejo'); g.game.home.style('f', 'cozinha', 'xadrez'); return { a, paid: c - c1, after: c1 - g.state.coins, st: g.state.house.walls.cozinha, sala: g.state.house.walls.sala.p }; });
ok('a wallpaper is bought once, then free in any room and colour', r.a && r.paid === 480 && r.after === 260 && r.st.c === 0xf7a8c0 && r.sala === 'azulejo', JSON.stringify(r));
await p.click('#b-shop'); await wait(700); await p.click('[data-tab="paredes"]'); await wait(900); ok('walls and floor panel shows the styles', await ev(() => document.querySelectorAll('.stcard').length >= 10)); await p.click('[data-tab="comodos"]'); await wait(700); ok('rooms map shows 12 rooms', await ev(() => document.querySelectorAll('.croom').length === 12 && document.querySelectorAll('.croom.own').length === 3));
await ev(() => window.__game.ui.closeModal());
// 8. sit on the sofa, lamps at night
await ev(() => { const g = window.__game; g.game.home.use(g.house.items.find((i) => i.rec.k === 'sofa_simples')); }); ok('she sits on the sofa', await until(() => window.__game.gardener.state === 'sit')); await wait(2500); await p.screenshot({ path: SP + '/house-3.png' });
await ev(() => { const g = window.__game; g.state.hour = 22.5; g.cam.yaw = 0.5; g.cam.dist = 13; }); await wait(4000); await p.screenshot({ path: SP + '/house-4.png' });
// 9. out, save, reload
await ev(() => { const g = window.__game; g.state.hour = 11; }); await ev(() => window.__game.game.exitHouse()); ok('she walks out', await until(() => !window.__game.game.inside)); await wait(800);
r = await ev(() => { const g = window.__game; return { hud: document.querySelector('#b-exit').offsetParent === null, y: g.gardener.group.position.z }; }); ok('back in the garden', r.hud && r.y < -5, JSON.stringify(r));
const snap = () => ev(() => { const g = window.__game, h = g.state.house; return { items: h.items.length, rooms: h.rooms.length, wall: h.walls.cozinha && h.walls.cozinha.p, plants: g.game.home.plants(), c1: (h.items.find((i) => i.k === 'poltrona_simples') || {}).c1, comfort: g.game.home.comfort() }; });
const before = await snap(); await ev(() => window.__game.game.save(true)); await wait(800); await open(); await p.click('#start'); await wait(2500); const after = await snap();
ok('the whole house survives a reload', JSON.stringify(before) === JSON.stringify(after) && after.plants === 2 && after.rooms === 3, JSON.stringify(after));
r = await ev(() => { const g = window.__game, s = g.house.spots.filter((q) => q.active && g.state.plants[q.id]); return s.every((q) => g.game.V[q.id].mesh && g.game.V[q.id].mesh.parent === g.house.scene && q.pos.y > -1); }); ok('indoor plants are back in their pots', r);
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
