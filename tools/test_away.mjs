// Time away: adult plants stock presents, growing ones advance while they have water, the clock and the calendar stand still.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 900, height: 600 } }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const U = 'http://localhost:8765/local.html?q=baixa&nointro=1', ready = () => p.waitForFunction(() => window.__ready, null, { timeout: 300000 }), ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
await p.goto(U); await ready();
const inject = (hoursAway, dayKeyToday) => p.evaluate(async ([h, today]) => { window.__game.game.save = () => {}; localStorage.clear(); await new Promise((r) => { const q = indexedDB.deleteDatabase('jardim-do-sossego'); q.onsuccess = q.onerror = q.onblocked = r; });
  const d = new Date(), key = (x) => `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`, y = new Date(d); y.setDate(y.getDate() - 1);
  localStorage.setItem('jardim-do-sossego-v1', JSON.stringify({ v: 1, pace: 2, days: 5, dayKey: today ? key(d) : key(y), coins: 100, xp: 800, zones: [0], decor: [], upg: [], quest: 9, album: ['margarida'], stats: { planted: 4, watered: 4, collected: 3, blooms: 2 }, hour: 15.25, last: Date.now() - h * 3600000, t0: Date.now() - 9 * 86400000, tips: {}, settings: {},
    plants: { 0: { sp: 'margarida', seed: 3, grown: 99999, wet: 0, giftT: 0, ready: false }, 1: { sp: 'tulipa_vermelha', seed: 4, grown: 600, wet: 3600, giftT: 0, ready: false }, 2: { sp: 'rosa_vermelha', seed: 5, grown: 3000, wet: 0, giftT: 0, ready: false }, 3: { sp: 'tagetes', seed: 6, grown: 99999, wet: 0, giftT: 1000, ready: false } } })); }, [hoursAway, dayKeyToday]);
const read = () => p.evaluate(() => { const g = window.__game, S = g.state; return { hour: +S.hour.toFixed(2), days: S.days, season: g.game.sys.season().name, p: [0, 1, 2, 3].map((i) => ({ grown: Math.round(S.plants[i].grown), stock: S.plants[i].stock || 0, ready: !!S.plants[i].ready, giftT: Math.round(S.plants[i].giftT) })), toastGifts: g.game.awayGifts || 0 }; });
await inject(3, true); await p.reload(); await ready(); const a = await read();
ok('3 h away: adult plants stocked presents (max 3)', a.p[0].stock === 3 && a.p[0].ready && a.p[3].stock === 3, JSON.stringify(a.p));
ok('3 h away: watered tulip kept growing only while it had water', a.p[1].grown > 600 && a.p[1].grown <= 600 + 3600 * 1.5 + 5, 'grown ' + a.p[1].grown);
ok('3 h away: dry rose did not grow', a.p[2].grown === 3000);
ok('clock did not move while away', a.hour === 15.25, 'hour ' + a.hour);
ok('same day: calendar did not move', a.days === 5, a.days + ' ' + a.season);
await inject(0.5, false); await p.reload(); await ready(); const c = await read();
ok('half an hour away: one present, timer keeps the rest', c.p[0].stock === 1 && c.p[0].giftT > 500 && c.p[3].stock === 2, JSON.stringify(c.p));
ok('a new visited day advances the calendar by one', c.days === 6, 'days ' + c.days);
await inject(24 * 6, false); await p.reload(); await ready(); const d = await read();
ok('six days away: calendar still advances by only one day', d.days === 6 && d.hour === 15.25, JSON.stringify({ days: d.days, hour: d.hour, season: d.season }));
// collecting a stocked plant pays for every present
await p.click('#start'); await p.waitForTimeout(2500);
const pay = await p.evaluate(async () => { const g = window.__game, S = g.state, c0 = S.coins, b0 = S.basket.margarida || 0; g.game.tapSpot(g.world.spots[0]); const t0 = Date.now(); while (Date.now() - t0 < 60000 && (g.game.cur || g.game.tasks.length)) await new Promise((r) => setTimeout(r, 500)); return { gain: S.coins - c0, basket: (S.basket.margarida || 0) - b0, stock: S.plants[0].stock, ready: S.plants[0].ready }; });
ok('collecting pays all stocked presents', pay.gain >= 18 && pay.basket === 3 && pay.stock === 0 && !pay.ready, JSON.stringify(pay));
console.log('errors', errs.length, errs.slice(0, 3).join(' | ')); await b.close();
