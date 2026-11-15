// Prints the furniture catalogue by category (id, kind, footprint, price, level, flags). Usage: node tools/furnlist.mjs [ids only: --starters]
import { readFileSync } from 'fs';
for (const f of ['src/furniture1.js', 'src/furniture2.js']) {
  const s = readFileSync(new URL('../' + f, import.meta.url), 'utf8'), re = /furn\(\{ id: '([a-z_0-9]+)', name: '([^']+)', cat: '([^']+)'(.*?)\}, /gs, cats = {}; let m;
  while ((m = re.exec(s))) { const body = m[4], g = (k) => (body.match(new RegExp('\\b' + k + ': ([^,}]+)')) || [])[1];
    (cats[m[3]] ||= []).push(`${m[1]}(${(g('kind') || 'floor').replace(/'/g, '')} ${g('w')}x${g('d')} $${g('price')} L${g('lvl')}${g('surf') ? ' s' + g('surf') : ''}${/plants:/.test(body) ? ' P' : ''}${/seat:/.test(body) ? ' seat' : ''}${/sleep:/.test(body) ? ' sleep' : ''})`); }
  for (const c in cats) console.log(c, cats[c].length, ':', cats[c].join(' '));
}
