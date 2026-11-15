// Wardrobe: pieces are bought, colours are free, old saves get their colour money back.
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const URL = 'http://localhost:8765/local.html', SP = process.argv[2] || '/tmp';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const errors = [], ok = (n, c, x = '') => console.log((c ? 'PASS ' : 'FAIL ') + n + ' ' + x);
const open = async (ctx, save) => { const p = await ctx.newPage(); p.on('pageerror', (e) => errors.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
  await p.goto(URL + '?q=baixa&nointro=1'); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
  await p.evaluate((s) => { window.__game.game.save = () => {}; try { localStorage.clear(); indexedDB.deleteDatabase('jardim-do-sossego'); if (s) localStorage.setItem('jardim-do-sossego-v1', JSON.stringify(s)); } catch (e) {} }, save); await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 }); await p.click('#start'); await p.waitForTimeout(2500); return p; };
// 1. an old save that had bought colours, a hat and a hair style
const old = { v: 1, coins: 500, xp: 700, zones: [0], decor: [], upg: [], plants: {}, quest: 3, album: [], stats: { planted: 3, watered: 3, collected: 2, blooms: 1 }, hour: 10, last: Date.now(), t0: Date.now() - 5e8, tips: {}, pace: 2, days: 3, dayKey: '',
  style: { own: ['dress:rosa', 'dress:ceu', 'pattern:poa', 'hat:lenco', 'hair:rabo', 'boots:vermelha', 'scarf:azul', 'wall:rosa'], dress: 'rosa', pattern: 'poa', hat: 'lenco', hair: 'rabo', boots: 'vermelha', scarf: 'azul', ribbon: 'coral', wall: 'rosa' }, settings: { music: 0, sfx: 0, quality: 'baixa', time: 'fixo' } };
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } }); let p = await open(ctx, old);
let r = await p.evaluate(() => { const s = window.__game.state; return { coins: s.coins, wear: s.wear, tint: s.tint, own: s.own, style: s.style }; });
ok('old save: colour money returned (180+180+260+150 = 770)', r.coins >= 500 + 770 && r.coins <= 500 + 770 + 60, 'coins ' + r.coins);
ok('old save: look kept (pink polka skirt, red boots, head scarf, pony tail, neck scarf)', r.tint['bottom:jardineira']?.c === 0xd89aa4 && r.tint['bottom:jardineira']?.p === 'poa' && r.tint['shoes:galocha']?.c === 0xd8483a && r.wear.hat === 'lenco' && r.wear.hair === 'rabo' && r.wear.neck === 'lencinho', JSON.stringify(r.wear));
ok('old save: owned pieces kept, house paint kept', r.own['hat:lenco'] && r.own['hair:rabo'] && r.own['neck:lencinho'] && r.style.own.includes('wall:rosa') && r.style.wall === 'rosa', JSON.stringify(r.own));
// 2. dressing room
await p.evaluate(() => { const g = window.__game; g.state.quest = 999; g.state.stats.planted = 0; g.state.coins = 5000; g.state.xp = 30000; g.game.tapThing('eliane'); }); // no quest or wish rewards while we count coins await p.waitForTimeout(1500);
ok('wardrobe opens', (await p.textContent('#modal')).includes('Guarda-roupa'));
await p.click('[data-slot="bottom"]'); await p.waitForTimeout(600);
const c0 = await p.evaluate(() => window.__game.state.coins); await p.click('.wcard[data-id="calca"]'); await p.waitForTimeout(800);
r = await p.evaluate(() => { const s = window.__game.state; return { coins: s.coins, wear: s.wear.bottom, own: !!s.own['bottom:calca'] }; });
ok('buying trousers charges once and wears them', r.coins === c0 - 200 && r.wear === 'calca' && r.own, JSON.stringify(r));
await p.click('[data-pal="c"]'); await p.waitForTimeout(400); await p.click('.swc[data-col="' + 0xd8483a + '"]'); await p.waitForTimeout(500);
r = await p.evaluate(() => { const s = window.__game.state; return { coins: s.coins, c: s.tint['bottom:calca']?.c }; });
ok('colour of an owned piece is free', r.coins === c0 - 200 && r.c === 0xd8483a, JSON.stringify(r));
await p.click('[data-pal="p"]'); await p.waitForTimeout(400); await p.click('[data-pat="xadrez"]'); await p.waitForTimeout(500);
ok('print is free too', await p.evaluate((c) => window.__game.state.tint['bottom:calca'].p === 'xadrez' && window.__game.state.coins === c, c0 - 200));
await p.click('.wcard[data-id="jardineira"]'); await p.waitForTimeout(500); await p.click('.wcard[data-id="calca"]'); await p.waitForTimeout(500);
ok('putting an owned piece back on costs nothing', await p.evaluate((c) => window.__game.state.wear.bottom === 'calca' && window.__game.state.coins === c, c0 - 200));
await p.click('[data-slot="dress"]'); await p.waitForTimeout(600); await p.click('.wcard[data-id="verao"]'); await p.waitForTimeout(800);
await p.click('[data-slot="top"]'); await p.waitForTimeout(600); await p.click('.wcard[data-id="bufante"]'); await p.waitForTimeout(600);
ok('wearing a top takes the dress off', await p.evaluate(() => window.__game.state.wear.dress === null && !!window.__game.state.own['dress:verao']));
await p.waitForFunction(() => !document.querySelector('img[data-th]'), null, { timeout: 240000 }).catch(() => {});
ok('all pictures of the open section got rendered', await p.evaluate(() => !document.querySelector('img[data-th]') && [...document.querySelectorAll('.wcard img')].every((i) => i.src.length > 500)));
await p.waitForTimeout(1500); await p.screenshot({ path: SP + '/ward-desktop.png' });
for (const t of ['pes', 'cabeca', 'acessorios']) { await p.click(`[data-tab="${t}"]`); await p.waitForTimeout(500); }
await p.click('[data-tab="cabeca"]'); await p.waitForTimeout(400); await p.click('[data-hair="ruivo"]'); await p.waitForTimeout(400);
ok('hair colour changes freely', await p.evaluate(() => window.__game.state.tint.hair === 'ruivo'));
await p.evaluate(() => { window.__game.ui.closeModal(); window.__game.game.save(true); }); await p.waitForTimeout(600); await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
ok('outfit survives a reload', await p.evaluate(() => { const s = window.__game.state; return s.wear.bottom === 'calca' && s.tint['bottom:calca'].p === 'xadrez' && s.tint.hair === 'ruivo' && s.own['dress:verao'] === 1; }));
await p.close();
// 3. phone
const ph = await b.newContext({ viewport: { width: 400, height: 820 }, hasTouch: true, isMobile: true }); p = await open(ph, null);
await p.evaluate(() => { window.__game.state.coins = 900; window.__game.game.tapThing('eliane'); }); await p.waitForTimeout(1500);
ok('phone: wardrobe has no sideways overflow', !(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1 || document.querySelector('.panel.ward').scrollWidth > document.querySelector('.panel.ward').clientWidth + 1)));
await p.waitForFunction(() => !document.querySelector('img[data-th]'), null, { timeout: 240000 }).catch(() => {}); await p.waitForTimeout(1500); await p.screenshot({ path: SP + '/ward-phone.png' });
console.log('errors', errors.length, [...new Set(errors)].slice(0, 6).join(' || '));
await b.close();
