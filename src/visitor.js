// A neighbour comes in through the gate and waits by the flower stall while there is an order to be delivered.
// She is built like Eliane, with her own clothes and hair, and goes home happy after the delivery.
import * as THREE from 'three';
import { createGardener } from './character.js';
import { WARDROBE, WEAR0, resolveWear, PALETTE, HAIR_COLORS } from './wardrobe.js';

const GATE = [0.35, 15.6], PATH = [[0.35, 15.6], [0.3, 5.2], [-0.9, 4.1], [-2.55, 3.75]];
export function createVisitor(scene, { S, G, env, fx }) {
  let v = null, state = 'away', leg = 0, wait = 0, seenOrders = 0, who = '';
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  const dress = () => { const wear = { ...WEAR0, hat: rnd(['nenhum', 'nenhum', 'lenco', 'laco', 'boina', 'jardineira', 'aba_larga']), hair: rnd(['rabo', 'coque', 'curto', 'tranca', 'meio_preso', 'chiquinhas']), shoes: rnd(['sapatilha', 'tenis', 'sandalia', 'botinha']), bag: rnd(['sem', 'bolsa', 'cestinha']), neck: rnd(['sem', 'sem', 'lencinho', 'colar']) }, tint = { hair: rnd(HAIR_COLORS.slice(1, 7))[0] };
    if (Math.random() < 0.5) { wear.dress = rnd(['verao', 'camisetao', 'boneca', 'chemise', 'rodado']); tint['dress:' + wear.dress] = { c: rnd(PALETTE.slice(3, 36)) }; }
    else { wear.top = rnd(['camiseta', 'manga_longa', 'camisa', 'bata', 'gola_boneca']); wear.bottom = rnd(['rodada', 'curta', 'calca', 'jeans', 'longa', 'bermuda', 'plissada']); tint['top:' + wear.top] = { c: rnd(PALETTE.slice(0, 22)) }; tint['bottom:' + wear.bottom] = { c: rnd(PALETTE.slice(12, 40)) }; }
    for (const k of ['hat', 'shoes', 'bag', 'neck']) if (WARDROBE[k].by[wear[k]] && WARDROBE[k].by[wear[k]].c != null) tint[k + ':' + wear[k]] = { c: rnd(PALETTE.slice(3, 36)) };
    v.wear(resolveWear(wear, tint)); };
  const arrive = () => { if (!v) { v = createGardener(); scene.add(v.group); } dress(); v.group.visible = true; v.group.position.set(GATE[0], 0, GATE[1]); v.heading = v.targetHeading = Math.PI; state = 'come'; leg = 1; wait = 0; who = (S.orders[0] || {}).who || ''; };
  const V = { get who() { return who; }, get here() { return state === 'wait'; } };
  V.update = (dt, time) => {
    const orders = S.orders.length, done = (S.stats.orders || 0) > seenOrders; seenOrders = S.stats.orders || 0;
    if (state === 'away') { wait -= dt; if (orders > 0 && wait <= 0 && env.night < 0.35 && fx.rain < 0.3 && G.state.stats.collected > 0) arrive(); return; }
    const p = v.group.position;
    if (state === 'come' || state === 'go') { const t = PATH[leg], dx = t[0] - p.x, dz = t[1] - p.z, d = Math.hypot(dx, dz), sp = 1.45; v.state = 'walk'; v.speed = sp;
      if (d < sp * dt + 0.02) { p.x = t[0]; p.z = t[1]; leg += state === 'come' ? 1 : -1; if (state === 'come' && leg >= PATH.length) { state = 'wait'; v.stop(); v.speed = 0; v.targetHeading = 2.5; wait = 240; } else if (state === 'go' && leg < 0) { state = 'away'; v.group.visible = false; wait = 150 + Math.random() * 200; return; } }
      else { p.x += (dx / d) * sp * dt; p.z += (dz / d) * sp * dt; v.targetHeading = Math.atan2(dx, dz); } }
    else if (state === 'wait') { wait -= dt; if (done) { v.play('cheer', 1.6); fx.hearts(new THREE.Vector3(p.x, 1.8, p.z), 5); state = 'thanks'; wait = 2.2; } else if (orders === 0 || wait <= 0 || env.night > 0.6) { state = 'go'; leg = PATH.length - 2; } }
    else if (state === 'thanks') { wait -= dt; if (wait <= 0) { state = 'go'; leg = PATH.length - 2; } }
    v.update(dt, time);
  };
  return V;
}
