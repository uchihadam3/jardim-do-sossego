// Quick look at the running game: node tools/peek.mjs out.png "js to run after start" [waitMs] [w] [h] [more query]
// The js runs in the page with `g` = window.__game. Several shots: separate steps with ";;" and the files get -1, -2...
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [out, js = '', wait = 2500, w = 1280, h = 800, query = ''] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, hasTouch: +w < 600, isMobile: +w < 600 }), p = await ctx.newPage(); const errors = [];
p.on('pageerror', (e) => errors.push(e.message + ' | ' + (e.stack || '').split('\n').slice(1, 4).join(' | '))); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 300)); else if (m.text().startsWith('PEEK')) console.log(m.text()); });
await p.goto('http://localhost:8765/local.html?q=baixa&nointro=1&' + query); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await p.evaluate(() => { window.__game.game.save = () => {}; try { localStorage.clear(); } catch (e) {} }); await p.reload(); await p.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await p.evaluate(() => { window.__game.game.save = () => {}; }); await p.click('#start'); await p.waitForTimeout(2000);
const steps = js.split(';;'); let i = 0;
for (const st of steps) { i++; if (st.trim()) { const r = await p.evaluate(async (code) => { const g = window.__game; try { return await eval('(async () => {' + code + '})()'); } catch (e) { return 'ERR ' + e.message + ' ' + (e.stack || '').split('\n').slice(1, 3).join(' | '); } }, st); if (r !== undefined && r !== null) console.log('step', i, typeof r === 'string' ? r : JSON.stringify(r)); }
  await p.waitForTimeout(+wait); await p.screenshot({ path: steps.length > 1 ? out.replace(/\.png$/, `-${i}.png`) : out }).catch((e) => console.log('shot failed', e.message)); }
console.log('errors', errors.length, [...new Set(errors)].slice(0, 5).join(' || '));
await b.close();
