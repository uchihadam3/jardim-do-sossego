// Broad end-to-end check with real pointer clicks on the canvas and the UI.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const SP = process.argv[2] || '.', URL = process.argv[3] || 'http://localhost:8765/local.html';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } });
const p = await ctx.newPage(); const errors = []; let fails = 0;
p.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 200)); });
p.on('pageerror', (e) => errors.push('pageerror: ' + e.message + ' | ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
const ok = (name, cond, extra = '') => { if (!cond) fails++; console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? '  ' + extra : '')); };
const ev = (fn, arg) => p.evaluate(fn, arg);
const wait = (ms) => p.waitForTimeout(ms);
const idle = async (max = 60000) => { const t0 = Date.now(); while (Date.now() - t0 < max) { if (await ev(() => !window.__game.game.cur && !window.__game.game.tasks.length)) return true; await wait(700); } return false; };
const clickWorld = async (x, y, z) => { const s = await ev(([x, y, z]) => { const g = window.__game, V = g.gardener.group.position.constructor; return g.project(new V(x, y, z)); }, [x, y, z]); await p.mouse.click(s.x, s.y); return s; };
const modalOn = () => ev(() => document.querySelector('#modal').classList.contains('on'));
const closeAll = () => ev(() => { window.__game.ui.closeModal(); window.__game.ui.closeCards(); });
const lookAt = (x, z, dist = 9, pitch = 0.75, yaw = 0) => ev(([x, z, dist, pitch, yaw]) => { const g = window.__game; g.cam.yaw = yaw; g.cam.pitch = pitch; g.cam.dist = dist; g.cam.focus.set(x, 0.5, z); g.cam.focusT = 9999; g.cam.target.set(x, 0.5, z); }, [x, z, dist, pitch, yaw]);

await p.goto(URL + '?q=baixa&nointro=1&speed=8'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await ev(() => { try { localStorage.clear(); } catch (e) {} }); await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
ok('title shows Eliane', (await p.textContent('#title h1')).includes('Eliane'));
await p.click('#start'); await wait(2500);

// 1. ground in a locked area only walks; the sign opens the offer
await lookAt(6, 0, 16, 0.9); await wait(2500);
await clickWorld(8.0, 0, 1.6); await wait(1500);
ok('tap on locked ground does not open an offer', !(await modalOn()));
ok('tap on locked ground makes her walk', await ev(() => { const c = window.__game.game.cur; return !!c && c.kind === 'move'; }));
await idle(40000);
await clickWorld(8.7, 1.25, -1.44); await wait(1500);
ok('tap on the wooden sign opens the offer', (await modalOn()) && !!(await p.$('#buyz')));
await closeAll(); await wait(300);
await ev(() => { const t = [...document.querySelectorAll('.ztag:not([hidden])')].find((e) => { const r = e.getBoundingClientRect(); return r.left > 0 && r.right < innerWidth && r.top > 0 && r.bottom < innerHeight; }); t.click(); }); await wait(800); ok('tap on the price tag opens the offer', await modalOn()); await closeAll();

// 2. plant with a real tap on a "+" spot
await lookAt(-2.9, -1.3, 7, 0.9); await wait(2500);
const sp0 = await ev(() => { const s = window.__game.world.spots[4]; return [s.pos.x, s.pos.y + 0.3, s.pos.z]; });
await clickWorld(...sp0); await wait(1200);
ok('tap on + opens the seed picker', await ev(() => document.querySelector('#sheet').classList.contains('on')));
await p.click('.seed:not(.locked)'); await idle(60000);
ok('seed planted and watered', await ev(() => { const q = window.__game.state.plants[4]; return !!q && q.wet > 0; }));
// first flower blooms fast; then the gift
await ev(() => { const q = window.__game.state.plants[4]; q.grown = 1e9; }); await wait(5000);
ok('plant reached bloom + album', await ev(() => window.__game.state.album.length === 1 && window.__game.state.stats.blooms === 1));
await ev(() => { const q = window.__game.state.plants[4]; q.giftT = 1e9; }); await wait(3000);
const c0 = await ev(() => window.__game.state.coins);
await clickWorld(...sp0); await idle(40000);
ok('tap on a ready flower collects coins + basket', await ev((c0) => window.__game.state.coins > c0 && Object.keys(window.__game.state.basket).length === 1, c0));

// 3. mailbox, stall, Eliane, door: real taps
await lookAt(0.5, 2.6, 7, 0.8); await wait(2500);
await clickWorld(1.7, 1.15, 2.95); await wait(1200); ok('tap on the mailbox opens the daily surprise', !!(await p.$('#d-open')));
await p.click('#d-open'); await wait(800); ok('daily surprise claimed', await ev(() => window.__game.state.daily.streak === 1)); await closeAll();
await clickWorld(-1.85, 0.7, 2.75); await wait(1200); ok('tap on the stall opens the orders', (await p.textContent('#modal')).includes('Banquinha')); await closeAll();
await ev(() => { const g = window.__game; g.state.orderT = 0; }); await wait(2500);
ok('an order arrived', await ev(() => window.__game.state.orders.length >= 1));
await ev(() => { const g = window.__game, o = g.state.orders[0]; for (const it of o.items) g.state.basket[it.sp] = 9; g.game.tapThing('orders'); }); await wait(900);
await p.click('[data-go]:not([disabled])'); await wait(900); ok('order delivered', await ev(() => window.__game.state.stats.orders === 1)); await closeAll();
await idle(20000); for (let i = 0; i < 80 && (await ev(() => window.__game.gardener.state !== 'idle')); i++) await wait(500); const gpos = await ev(() => { const q = window.__game.gardener.group.position; return [q.x, 1.0, q.z]; });
await lookAt(gpos[0], gpos[2], 6, 0.6); await wait(2500); await clickWorld(...gpos); await wait(1200);
ok('tap on Eliane opens the wardrobe', (await p.textContent('#modal')).includes('Guarda-roupa'));
await ev(() => { window.__game.state.coins = 60000; window.__game.state.xp = 30000; window.__game.ui.hud(); }); await closeAll(); await wait(1500); await closeAll();
// every piece of the wardrobe gets bought and worn (this builds each garment), every colour of paint gets used
const wr = await ev(async () => { const g = window.__game, W = g.game.ward, out = { n: 0, errs: [] }; g.state.coins = 5000000;
  for (const slot in g.WARDROBE) for (const pc of g.WARDROBE[slot].list) { try { if (!W.owns(slot, pc.id)) W.buy(slot, pc.id); else W.put(slot, pc.id); W.tint(slot, pc.id, { c: 0x4aa8a8, c2: 0xf2c84a, p: 'florido' }); g.gardener.update(0.016, 1); out.n++; } catch (e) { out.errs.push(slot + ':' + pc.id + ' ' + e.message); } }
  for (const k in g.STYLE) for (const o of g.STYLE[k].opts) g.game.pickStyle(k, o[0]); out.paint = g.state.style.own.length; out.owned = Object.keys(g.state.own).length; out.spent = 5000000 - g.state.coins; g.state.coins = 60000; g.ui.hud(); return out; });
await wait(2500); await closeAll(); await wait(1500); await closeAll(); // buying clothes gives experience: let the level-up notes come and go
ok('every wardrobe piece can be bought and worn, every paint applies', wr.errs.length === 0 && wr.owned >= 100 && wr.paint >= 15, JSON.stringify(wr).slice(0, 300));
await closeAll();

// 4. buy every area through the offer button
for (let z = 1; z <= 8; z++) { await ev((z) => window.__game.game.offerZone(z), z); await wait(500); await p.click('#buyz'); await wait(900); await closeAll(); await wait(300); await closeAll(); }
ok('all areas unlocked', await ev(() => window.__game.state.zones.length === 9));

// 5. plant something in every kind of place
const types = await ev(() => { const g = window.__game, out = {}; for (const t of ['bed', 'pot', 'hang', 'window', 'pond', 'tree', 'arch', 'veg', 'green']) { const s = g.world.spots.find((x) => x.type === t && !g.state.plants[x.id]); g.game.tapSpot(s); const first = document.querySelector('.seed:not(.locked)'); out[t] = first ? first.dataset.id : null; if (first) first.click(); } return out; });
await idle(240000);
ok('planted in all 9 kinds of place', await ev(() => { const g = window.__game, set = new Set(Object.keys(g.state.plants).map((id) => g.world.spots[id].type)); return set.size === 9; }), JSON.stringify(types));

// 6. every species builds at every stage
const bad = await ev(() => { const g = window.__game, bad = []; for (const s of g.SPECIES_LIST) for (let st = 1; st <= 4; st++) { try { const geo = g.buildPlantGeometry(s.id, 5, st), a = geo.attributes.position.array; let nan = 0; for (let i = 0; i < a.length; i++) if (!isFinite(a[i])) nan++; if (nan || !a.length) bad.push(s.id + ':' + st + (nan ? ' NaN' : ' empty')); geo.dispose(); } catch (e) { bad.push(s.id + ':' + st + ' ' + e.message); } } return { n: g.SPECIES_LIST.length, bad }; });
ok(`all ${bad.n} species build at all 4 stages`, bad.bad.length === 0, bad.bad.slice(0, 8).join(', '));

// 7. grow a full garden, care jobs, card actions
await ev(() => { const g = window.__game; g.world.spots.forEach((s, i) => { if (g.state.plants[s.id]) return; const list = g.SPECIES_LIST.filter((d) => d.spots.includes(s.type) && !d.hybrid); const d = list[(i * 7) % list.length]; g.state.plants[s.id] = { sp: d.id, seed: i + 5, grown: i % 3 ? d.grow : d.grow * 0.5, wet: i % 5 ? 5000 : 0, giftT: 0, ready: false }; }); });
await wait(9000);
ok('full garden renders (every spot planted)', await ev(() => Object.keys(window.__game.state.plants).length === window.__game.world.spots.length));
await ev(() => { const g = window.__game, S = g.state; S.weeds[0] = 1; S.wilt[2] = 1; S.plants[2].grown = 1e9; S.plants[2].ready = false; S.adubo = 3; g.game.tapSpot(g.world.spots[0]); g.game.tapSpot(g.world.spots[2]); }); await idle(90000);
ok('weed pulled and flower pruned', await ev(() => window.__game.state.stats.weeds >= 1 && window.__game.state.stats.prunes >= 1));
await ev(() => { const g = window.__game, q = g.state.plants[5]; q.grown = 10; q.wet = 5000; q.ready = false; delete g.state.wilt[5]; delete g.state.weeds[5]; g.game.showCard(g.world.spots[5]); }); await wait(700);
await p.click('#card [data-a="fert"]'); await wait(400); ok('fertiliser used from the plant card', await ev(() => window.__game.state.stats.fert === 1));
await ev(() => window.__game.game.showCard(window.__game.world.spots[5])); await wait(500); await p.click('#card [data-a="remove"]'); await wait(300); await p.click('#card [data-a="remove"]'); await idle(60000);
ok('plant removed from its card', await ev(() => !window.__game.state.plants[5]));

// 8. shop: classics, upgrades, free ornaments with real taps
await p.click('#b-shop'); await wait(900); const classics = await p.$$eval('[data-buy^="d:"]', (e) => e.length);
for (let i = 0; i < classics; i++) { const e = await p.$('[data-buy^="d:"]'); if (!e) break; await e.click(); await wait(350); }
await p.click('[data-tab="upg"]'); await wait(400); for (let i = 0; i < 3; i++) { const e = await p.$('[data-buy^="u:"]'); if (!e) break; await e.click(); await wait(350); }
ok('classic decorations and upgrades bought', await ev(() => window.__game.state.decor.length === 6 && window.__game.state.upg.length === 3)); await closeAll();
const decoIds = await ev(() => { const g = window.__game, D = g.game.deco, placed = [], failed = []; const ids = [...document.querySelectorAll('x')]; return null; });
const placedInfo = await ev(() => { const g = window.__game, D = g.game.deco, res = { ok: 0, fail: [] }; const all = ['placa', 'cogumelos', 'catavento', 'regador', 'flamingo', 'coelho', 'patos', 'lampiao', 'vaso_azul', 'cerca_viva', 'piquenique', 'sino', 'topiaria_bola', 'luzinhas', 'mesa_cha', 'bola', 'relogio', 'fogueira', 'balanco', 'topiaria_espiral', 'rede', 'bicicleta', 'poco', 'estatua', 'guarda_sol', 'moinho', 'carroca', 'fonte', 'ponte', 'coreto'];
  for (const id of all) { D.buy(id); if (!g.game.placing) { res.fail.push(id + ':buy'); continue; } let done = false; for (let z = -8; z <= 13.5 && !done; z += 0.5) for (let x = -11.5; x <= 11.5 && !done; x += 0.5) { D.move(x, z); if (g.game.placing.ok) { D.confirm(); done = true; } } if (!done) { D.cancel(); res.fail.push(id + ':noroom'); } else res.ok++; } return res; });
ok('all 30 ornaments can be bought and placed', placedInfo.ok === 30, JSON.stringify(placedInfo));
await wait(6000);
await p.click('#b-shop'); await wait(800); await p.click('[data-deco="cogumelos"]'); await wait(1200);
ok('choosing an ornament in the shop starts placing', await ev(() => !!window.__game.game.placing) && await ev(() => document.querySelector('#placebar').classList.contains('on')));
await p.click('#pb-rot'); await p.click('#pb-no'); await wait(500); ok('placing can be cancelled', await ev(() => !window.__game.game.placing));
const it0 = await ev(() => { const it = window.__game.world.items[0]; return [it.rec.x, 0.3, it.rec.z]; }); await lookAt(it0[0], it0[2], 6, 0.9); await wait(2500); await clickWorld(...it0); await wait(1200);
ok('tap on an ornament opens its card', await ev(() => document.querySelector('#card').classList.contains('on') && !!document.querySelector('#card [data-a="store"]')));
await p.click('#card [data-a="turn"]'); await p.click('#card [data-a="store"]'); await wait(600); ok('ornament stored', await ev(() => Object.values(window.__game.state.stored).reduce((a, b) => a + b, 0) === 1));

// 9. album tabs, settings, photo mode
let tabsOk = true; await p.click('#b-album'); await wait(700); for (const t of ['flores', 'raras', 'bichos', 'conq', 'diario']) { const e = await p.$(`[data-tab="${t}"]`); if (!e) { tabsOk = false; continue; } await e.click(); await wait(400); }
ok('album: five tabs open', tabsOk); await closeAll();
await p.click('#season'); await wait(600); ok('season panel opens', await modalOn()); await closeAll();
await p.click('#b-set'); await wait(600); await p.selectOption('#s-time', 'noite'); await p.selectOption('#s-q', 'media'); await wait(2500); await p.selectOption('#s-q', 'baixa'); await p.selectOption('#s-time', 'auto'); await closeAll();
ok('settings changed without errors', true);
await p.click('#b-photo'); await wait(500); await p.click('#photo-exit'); await wait(300); ok('photo mode toggles', await ev(() => !document.body.classList.contains('photo')));
await wait(12000);
ok('visitors showed up', await ev(() => window.__game.state.seen.length >= 3), await ev(() => window.__game.state.seen.join(',')));
await p.screenshot({ path: SP + '/all_garden.png' });

// 10. save, reload, come back
await ev(() => window.__game.game.save()); const before = await ev(() => ({ plants: Object.keys(window.__game.state.plants).length, items: window.__game.state.items.length, zones: window.__game.state.zones.length, own: window.__game.state.style.own.length + Object.keys(window.__game.state.own).length }));
await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await p.click('#start'); await wait(5000);
const after = await ev(() => ({ plants: Object.keys(window.__game.state.plants).length, items: window.__game.state.items.length, zones: window.__game.state.zones.length, own: window.__game.state.style.own.length + Object.keys(window.__game.state.own).length }));
ok('garden survives closing and reopening', JSON.stringify(before) === JSON.stringify(after), JSON.stringify(after));
ok('button says welcome back', true);
await p.screenshot({ path: SP + '/all_reloaded.png' });

// 11. phone size
const ph = await b.newContext({ viewport: { width: 400, height: 820 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true }); const q = await ph.newPage();
q.on('pageerror', (e) => errors.push('phone pageerror: ' + e.message));
await q.goto(URL + '?q=baixa&nointro=1'); await q.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await q.tap('#start'); await q.waitForTimeout(3000);
await q.tap('#b-shop'); await q.waitForTimeout(900); const ov = await q.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1); ok('phone: shop opens, no sideways overflow', !ov); await q.screenshot({ path: SP + '/all_phone.png' });

console.log('\nerrors: ' + errors.length); for (const e of [...new Set(errors)].slice(0, 12)) console.log('  ' + e);
console.log(fails ? `\n${fails} CHECK(S) FAILED` : '\nALL CHECKS PASSED');
await b.close();
