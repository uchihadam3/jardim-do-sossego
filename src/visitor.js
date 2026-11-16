// Neighbours who come to visit. Each one is a friend with her own look and tastes: she walks round the garden admiring the plants,
// waits by the flower stall when she has an order, and Eliane can go and talk to her, give her a present and deliver her flowers.
// Friendship grows in hearts, and every new heart brings a present back.
import * as THREE from 'three';
import { createGardener } from './character.js';
import { WEAR0, resolveWear } from './wardrobe.js';
import { SPECIES, SPECIES_LIST } from './species.js';
import { FURN } from './furncore.js';

export const HEART_AT = [3, 8, 15, 25, 40];
export const heartsOf = (pts = 0) => HEART_AT.filter((n) => pts >= n).length;
export const FRIENDS = [
  { n: 'Dona Lúcia', likes: 'flores de canteiro', love: (sp) => !sp.veg && sp.spots.includes('bed'), size: 0.97,
    wear: { hair: 'coque', dress: 'chemise', shoes: 'sapatilha', neck: 'colar', hat: 'nenhum', bag: 'sem' }, tint: { hair: 'grisalho', 'dress:chemise': { c: 0xb9a3d6 }, 'shoes:sapatilha': { c: 0x8a6a58 } },
    says: ['Na minha idade, o melhor remédio é mexer na terra.', 'Minhas netas adoram vir aqui ver as borboletas.', 'Eu sempre digo: flor gosta de conversa. Fale com elas!', 'Quando eu era moça, meu quintal era só roseira. Que saudade.'] },
  { n: 'Bia', likes: 'frutas e hortaliças', love: (sp) => !!sp.veg, size: 0.84,
    wear: { hair: 'chiquinhas', top: 'camiseta', bottom: 'bermuda', shoes: 'tenis', neck: 'sem', hat: 'nenhum', bag: 'sem' }, tint: { hair: 'ruivo', 'top:camiseta': { c: 0xf2c84b }, 'bottom:bermuda': { c: 0x5b8fc7 }, 'shoes:tenis': { c: 0xf4f0e6 } },
    says: ['Eu vim correndo da escola só para ver o jardim!', 'Você deixa eu ajudar a regar um dia?', 'Minha mãe disse que tomate é fruta. É verdade?', 'Quando eu crescer quero ter uma horta igual à sua.'] },
  { n: 'Tia Zezé', likes: 'plantas de vaso', love: (sp) => sp.spots.some((t) => t === 'pot' || t === 'hang' || t === 'window'), size: 1,
    wear: { hair: 'curto', top: 'bata', bottom: 'longa', shoes: 'sandalia', neck: 'sem', hat: 'aba_larga', bag: 'cestinha' }, tint: { hair: 'preto', 'top:bata': { c: 0xe8806a }, 'bottom:longa': { c: 0x4f7f6b }, 'hat:aba_larga': { c: 0xecd49a } },
    says: ['Lá em casa não cabe mais um vaso, mas eu sempre arrumo lugar.', 'Hoje tem bolo de fubá. Passa lá depois!', 'Planta de vaso é igual gente: gosta de um cantinho só dela.', 'Eu converso com as minhas samambaias. Elas respondem crescendo.'] },
  { n: 'Marina', likes: 'plantas nobres e raras', love: (sp) => sp.lvl >= 8 || !!sp.hybrid, size: 1,
    wear: { hair: 'meio_preso', dress: 'rodado', shoes: 'botinha', neck: 'lencinho', hat: 'laco', bag: 'bolsa' }, tint: { hair: 'mel', 'dress:rodado': { c: 0x6f9fd0 }, 'hat:laco': { c: 0xe8736a }, 'neck:lencinho': { c: 0xf2c84b } },
    says: ['Estou fazendo sabonetes com flores secas. Depois trago um para você.', 'Cada flor rara que você consegue eu fico boba.', 'O seu jardim é o mais bonito da rua, sem exagero.', 'Ando sonhando com um ateliê cheio de orquídeas.'] },
];
const FRIEND_BY = Object.fromEntries(FRIENDS.map((f) => [f.n, f]));
const PATH = [[0.35, 15.6], [0.3, 5.2], [-0.9, 4.1], [-2.55, 3.75]]; // gate -> flower stall

export function createVisitor(scene, { S, G, env, fx, ui, audio, world, gardener, nav }) {
  let v = null, me = null, state = 'away', timer = 40, route = [], onArrive = null, visit = null, seenOrders = S.stats.orders || 0, approach = 0, last = '', pick = null, said = [];
  const rnd = (a) => a[Math.floor(Math.random() * a.length)], pts = () => S.friends[me.n] || 0, V3 = THREE.Vector3;
  const P = () => v.group.position, head = () => new V3(P().x, 1.95 * (me ? me.size : 1), P().z);
  const say = (text, ms) => { if (ui.say) ui.say(head, text, ms); };
  const goTo = (pts2, then) => { route = pts2.map((q) => [q[0], q[1]]); onArrive = then || null; state = 'walk'; };
  const navTo = (x, z, then) => { let pth = null; try { pth = nav && nav.path(P().x, P().z, x, z); } catch (e) {} goTo(pth && pth.length ? pth : [[x, z]], then); };
  const adults = () => Object.keys(S.plants).map((id) => world.spots[id]).filter((s) => s && !s.indoor && s.stand && S.zones.includes(s.zone) && S.plants[s.id].grown >= SPECIES[S.plants[s.id].sp].grow * 0.6);
  const arrive = (kind, name) => { if (!v) { v = createGardener(); scene.add(v.group); pick = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 1.8, 8), new THREE.MeshBasicMaterial({ visible: false })); pick.position.y = 0.9; pick.userData.thing = 'visitor'; v.group.add(pick); }
    const o = S.orders[0], pool = FRIENDS.filter((f) => f.n !== last); me = FRIEND_BY[name] || (kind === 'order' && o && FRIEND_BY[o.who] ? FRIEND_BY[o.who] : rnd(pool.length ? pool : FRIENDS)); last = me.n;
    v.wear(resolveWear({ ...WEAR0, ...me.wear }, me.tint)); v.group.scale.setScalar(me.size); v.group.visible = true; P().set(PATH[0][0], 0, PATH[0][1]); v.heading = v.targetHeading = Math.PI;
    visit = { kind, chatted: 0, gifted: 0, brought: false, stops: 0 }; said = []; if (S.friends[me.n] === undefined) S.friends[me.n] = 0;
    ui.toast(Object.keys(S.friends).length <= 1 && !S.tips.friend ? `${me.n} veio visitar! Toque nela para conversar.` : `${me.n} veio visitar o jardim.`, 'info'); S.tips.friend = 1;
    if (kind === 'order') goTo(PATH.slice(1), () => { state = 'wait'; timer = 240; v.targetHeading = 2.5; });
    else goTo(PATH.slice(1, 2), stroll); };
  // a walk round the garden: stop at a few grown plants and say something nice
  const stroll = () => { const list = adults(), s = visit.stops < 3 && list.length ? rnd(list) : null; if (!s) { navTo(PATH[2][0], PATH[2][1], () => goTo([PATH[3]], () => { state = 'wait'; timer = 70; v.targetHeading = 2.5; })); return; }
    visit.stops++; navTo(s.stand.x, s.stand.z, () => { state = 'look'; timer = 4.2; v.targetHeading = Math.atan2(s.pos.x - P().x, s.pos.z - P().z); v.play('admire', 3.6); const sp = SPECIES[S.plants[s.id] ? S.plants[s.id].sp : ''];
      if (sp) { say(rnd(me.love(sp) ? [`${sp.name}! É a minha preferida.`, `Ai, que amor de ${sp.name.toLowerCase()}!`] : [`Que capricho, ${sp.name.toLowerCase()}!`, `Olha só que beleza.`, `Está tudo tão bem cuidado!`, `Que cheirinho bom por aqui.`])); if (me.love(sp)) fx.hearts(head(), 3); } }); };
  const leave = () => { ui.cardFor === 'neighbour' && ui.closeCards(); navTo(PATH[1][0], PATH[1][1], () => goTo([PATH[0]], () => { state = 'away'; v.group.visible = false; timer = 170 + Math.random() * 200; })); };

  // ----- friendship -----
  const gain = (n) => { const h0 = heartsOf(pts()); S.friends[me.n] = pts() + n; const h1 = heartsOf(pts()); if (h1 > h0) reward(h1); G.save(); };
  const muda = (rare) => { const lvl = G.level(), pool = SPECIES_LIST.filter((s) => !s.hybrid && s.season == null && (rare ? s.lvl > lvl && s.lvl <= lvl + 4 : s.lvl <= lvl + 1)), loved = pool.filter(me.love), sp = rnd(loved.length ? loved : pool.length ? pool : SPECIES_LIST.filter((s) => !s.hybrid)); S.seedbox[sp.id] = (S.seedbox[sp.id] || 0) + 1; return sp; };
  const piece = (lo, hi) => { const pool = FURN.filter((f) => f.price >= lo && f.price <= hi && ['Enfeites', 'Quadros e parede', 'Vasos e plantas', 'Luzes'].includes(f.cat)), f = rnd(pool.length ? pool : FURN); S.house.stored[f.id] = (S.house.stored[f.id] || 0) + 1; return f; };
  const reward = (h) => { const got = []; let coins = 0;
    if (h === 1) { coins = 80; got.push(`uma muda de ${muda().name}`); } else if (h === 2) { coins = 150; S.adubo += 2; got.push('2 adubos'); }
    else if (h === 3) { coins = 200; got.push(`${piece(250, 900).name} para a sua casa`); } else if (h === 4) { coins = 500; got.push(`uma muda especial de ${muda(true).name}`); } else { coins = 1500; got.push(`${piece(1500, 5000).name} para a sua casa`); }
    G.addCoins(coins); G.addXp(20 * h); audio.sfx('levelup', 0.7); fx.hearts(head(), 9); v.play('cheer', 1.8); S.stats.hearts = FRIENDS.reduce((a, f) => a + heartsOf(S.friends[f.n]), 0);
    if (ui.friendUp) ui.friendUp(me.n, h, coins, got); G.sys.log && G.sys.log(`${me.n} e eu ficamos mais amigas.`); };

  const V = { get who() { return me ? me.n : ''; }, get here() { return state !== 'away'; }, get waiting() { return state === 'wait'; }, get pick() { return v && v.group.visible ? pick : null; }, get me() { return me; }, get pos() { return v ? P() : null; },
    get hearts() { return me ? heartsOf(pts()) : 0; }, get pts() { return me ? pts() : 0; }, get next() { return me ? HEART_AT[heartsOf(pts())] || null : null; }, get visit() { return visit; } };
  V.come = (kind = 'stroll', name) => { if (state === 'away') arrive(kind, name); };
  V.tap = () => { if (state === 'away' || !me) return; const g = gardener.group.position, p = P(), d = Math.hypot(g.x - p.x, g.z - p.z), meet = () => { approach = 0; gardener.targetHeading = Math.atan2(P().x - g.x, P().z - g.z); v.targetHeading = Math.atan2(g.x - P().x, g.z - P().z); ui.neighbour(V); };
    approach = 14; if (d < 1.7) { meet(); return; } const k = 1.2 / d; if (!G.walkThen(p.x + (g.x - p.x) * k, p.z + (g.z - p.z) * k, meet)) approach = 0; };
  V.hello = () => { const h = V.hearts, o = S.orders.find((x) => x.who === me.n); return o ? 'Oi, Eliane! Vim ver se as minhas flores já estão prontas.' : h >= 3 ? 'Minha amiga! Que bom te ver.' : h >= 1 ? 'Oi, Eliane! Passei para dar um oi.' : 'Olá! Eu moro aqui pertinho. Que jardim lindo!'; };
  V.talk = () => { let line; const first = !visit.chatted; visit.chatted++;
    if (first) { gain(1); G.addXp(4); S.stats.chats = (S.stats.chats || 0) + 1; }
    if (first && V.hearts >= 1 && !visit.brought && Math.random() < 0.4) { visit.brought = true; if (Math.random() < 0.5) { S.adubo += 1; line = 'Trouxe um pouco de adubo lá de casa para você.'; } else { line = `Trouxe uma mudinha de ${muda().name} do meu quintal para você.`; } audio.sfx('pop', 0.6); ui.hud(); G.save(); return line; }
    const planted = [...new Set(Object.values(S.plants).map((q) => q.sp))].map((id) => SPECIES[id]).filter(Boolean), se = G.sys.season ? G.sys.season().name : '', o = S.orders.find((x) => x.who === me.n);
    const pool = [...me.says, `Eu sou louca por ${me.likes}.`, se ? `Gosto tanto do jardim nesta época, ${se.toLowerCase()} tem um encanto.` : 'O jardim está um encanto.', 'Dá uma paz ficar aqui, né?'];
    if (planted.length) { const sp = rnd(planted); pool.push(me.love(sp) ? `Vi que você tem ${sp.name.toLowerCase()}. Eu adoro!` : `Gostei de ver ${sp.name.toLowerCase()} por aqui.`); }
    if (o) pool.push('Não esquece do meu pedido na banquinha, hein?'); if (S.house && S.house.rooms && S.house.rooms.length > 2) pool.push('Soube que a sua casa está ficando uma graça por dentro.');
    const fresh = pool.filter((l) => !said.includes(l)); if (!fresh.length) said = []; line = rnd(fresh.length ? fresh : pool); said.push(line); return line; };
  V.gifts = () => Object.keys(S.basket).filter((k) => S.basket[k] > 0 && SPECIES[k]).sort((a, b) => (me.love(SPECIES[b]) ? 1 : 0) - (me.love(SPECIES[a]) ? 1 : 0) || S.basket[b] - S.basket[a]).slice(0, 8);
  V.canGift = () => visit && visit.gifted < 1;
  V.give = (k) => { if (!V.canGift() || !(S.basket[k] > 0)) return 'Hoje você já me deu um presente lindo. Guarde esse para a próxima visita!'; const sp = SPECIES[k], loved = me.love(sp); S.basket[k]--; visit.gifted++; S.stats.gifts = (S.stats.gifts || 0) + 1;
    v.play('cheer', 1.6); fx.hearts(head(), loved ? 8 : 4); audio.sfx(loved ? 'bloom' : 'pop', 0.7); gardener.play('cheer', 1.2); gain(loved ? 3 : 1); ui.hud();
    return loved ? `${sp.name}! Como você adivinhou? É do que eu mais gosto!` : `${sp.name}, que gentileza! Muito obrigada.`; };
  V.order = () => S.orders.find((o) => o.who === me.n && G.sys.canDeliver(o)) || (state === 'wait' && visit.kind === 'order' ? S.orders.find((o) => G.sys.canDeliver(o)) : null) || null;
  V.deliver = () => { const o = V.order(); if (!o || !G.sys.deliver(o.id)) return null; ui.hud(); return o.who === me.n ? 'Ficaram perfeitas! Muito obrigada, Eliane.' : `Deixa que eu levo para ${o.who}. Vai adorar!`; };

  V.update = (dt, time) => {
    const done = (S.stats.orders || 0) > seenOrders; seenOrders = S.stats.orders || 0;
    if (state === 'away') { timer -= dt; if (timer <= 0 && env.night < 0.35 && fx.rain < 0.3 && S.stats.collected > 0) arrive(S.orders.length ? 'order' : 'stroll'); return; }
    const p = P(), held = approach > 0 || ui.cardFor === 'neighbour'; if (approach > 0) approach -= dt;
    if (done) { gain(2); v.play('cheer', 1.6); fx.hearts(head(), 5); if (state === 'wait') { state = 'thanks'; timer = 2.4; } }
    if (held) { if (v.state === 'walk') { v.stop(); v.speed = 0; } const g = gardener.group.position; v.targetHeading = Math.atan2(g.x - p.x, g.z - p.z); }
    else if (state === 'walk') { const t = route[0]; if (!t) { const fn = onArrive; onArrive = null; v.stop(); v.speed = 0; state = 'idle'; if (fn) fn(); }
      else { const dx = t[0] - p.x, dz = t[1] - p.z, d = Math.hypot(dx, dz), sp = 1.35; if (v.state !== 'walk' && v.state !== 'cheer') v.state = 'walk'; v.speed = sp; if (d < sp * dt + 0.03) { p.x = t[0]; p.z = t[1]; route.shift(); } else { p.x += (dx / d) * sp * dt; p.z += (dz / d) * sp * dt; v.targetHeading = Math.atan2(dx, dz); } } }
    else if (state === 'look') { timer -= dt; if (timer <= 0) stroll(); }
    else if (state === 'wait') { timer -= dt; if (timer <= 0 || env.night > 0.6 || (visit.kind === 'order' && !S.orders.length && timer < 200)) leave(); }
    else if (state === 'thanks') { timer -= dt; if (timer <= 0) leave(); }
    else if (state === 'idle') leave();
    v.update(dt, time);
  };
  return V;
}
