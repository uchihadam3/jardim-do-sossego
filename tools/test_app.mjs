// opens the single-file build straight from disk (file://), with the network blocked, and checks it boots with sound
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [file, out] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 1100, height: 700 }, offline: true });
const p = await ctx.newPage();
p.on('console', (m) => { if (m.type() === 'error') console.log('[error]', m.text().slice(0, 300)); });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
p.on('requestfailed', (r) => console.log('[requestfailed]', r.url().slice(0, 120)));
await p.goto('file://' + encodeURI(file) + '?q=baixa&frames=40');
await p.waitForFunction(() => window.__ready, null, { timeout: 240000 });
console.log('app flag', await p.evaluate(() => [window.__APP, Object.keys(window.__AUDIO).length, document.querySelector('#b-install').hidden, document.fonts.check('600 20px Fredoka'), [...document.fonts].map((f) => f.family + ':' + f.status).join(',')]));
await p.click('#start');
await p.waitForFunction(() => window.__frozen, null, { timeout: 240000 });
await p.waitForTimeout(4000);
console.log('audio', await p.evaluate(() => { const a = window.__game.game && window.__game; return 'n/a'; }));
await p.screenshot({ path: out });
// carried-over save
const html = (await import('fs')).readFileSync(file, 'utf8');
console.log('placeholder count', html.split('/*__SAVE__*/').length - 1);
await b.close();
