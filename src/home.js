// Life inside the house: going in and out, buying furniture and putting it where she likes, colours, new rooms,
// wallpapers and floors, sitting on the sofa, sleeping, turning the lamps on... and plants in every corner.
import * as THREE from 'three';
import { FURN, FURN_BY, buildFurn } from './furncore.js';
import { ROOMS, ROOM_BY, WALL_BY, FLOOR_BY, CW, CD, FL_DZ, FL_H, STAIR } from './house.js';
import { clamp, easeOutBack } from './util.js';
import { RECIPE_BY, canCook, STOVES } from './recipes.js';
import { critterModel } from './critters.js';

const V3 = THREE.Vector3;
// the simple things she starts with: [id, x, z, quarter turns] or [id, { room, side, t }] for the walls
const STARTER = [
  ['sofa_simples', -1.875, -2.2, 0], ['tapete_simples', -1.875, -1.0, 0], ['mesinha_caixote', -1.875, -1.0, 0], ['estante_simples', -2.875, 0.75, 3], ['comoda_simples', 2.25, -2.375, 0], ['tv_tubo', 2.25, -2.375, 0],
  ['luminaria_teto_simples', 0, 0, 0], ['quadro_simples', { room: 'sala', side: 0, t: -1.875 }], ['vaso_barro', -2.75, 2.25, 0], ['cadeira_simples', 2.625, 1.0, 1],
  ['cama_simples', -2.375, -5.6 - 1.5, 0], ['mesinha_cabeceira', -1.5, -5.6 - 2.375, 0], ['abajur_simples', -1.5, -5.6 - 2.375, 0], ['guarda_roupa_simples', 2.25, -5.6 - 2.375, 0], ['tapete_simples', -1.25, -5.6 - 0.25, 1], ['luminaria_teto_simples', 0, -5.6, 0], ['vaso_barro', 2.75, -5.6 + 2.2, 0], ['quadro_simples', { room: 'quarto', side: 0, t: 0.6 }],
];
const MUSIC = ['toca_discos', 'radio_antigo', 'gramofone', 'aparelho_som', 'caixinha_musica', 'piano_armario', 'piano_cauda', 'harpa', 'violao_suporte', 'jukebox', 'caixa_som'];
export const HOME_GOALS = [10, 30, 60, 100, 160, 250, 400, 600, 900, 1300, 2000, 3000];

export function attachHome(G, { S, house: H, fx, audio, gardener, ui, addXp, level, save, setScene, moveSpot }) {
  const first = !S.house;
  if (first) S.house = { rooms: ['sala', 'quarto'], items: [], stored: {}, walls: {}, floors: {}, ownW: ['liso'], ownF: ['tabuas'] };
  const SH = S.house; for (const k of ['items']) if (!Array.isArray(SH[k])) SH[k] = []; for (const k of ['stored', 'walls', 'floors']) if (!SH[k] || typeof SH[k] !== 'object') SH[k] = {}; if (!Array.isArray(SH.rooms) || !SH.rooms.includes('sala')) SH.rooms = ['sala', 'quarto']; SH.ownW ||= ['liso']; SH.ownF ||= ['tabuas'];
  const scene = H.scene, hour = () => S.hour;
  const mark = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0x6ab85a, transparent: true, opacity: 0.45, depthWrite: false })); mark.rotation.x = -Math.PI / 2; mark.visible = false; mark.renderOrder = 6; scene.add(mark);
  const home = { H };
  const seed = (list, ox = 0, oz = 0) => { for (const [k, a, z, r] of list) { const def = FURN_BY[k]; if (!def) continue; let rec;
      if (typeof a === 'object') { rec = { k, ...a }; } else { const res = H.check(def, { x: a + ox, z: z + oz, r }); if (!res.ok) continue; rec = { k, x: a + ox, z: z + oz, r: r || 0, y: res.y || 0 }; }
      if (!H.claimSpots(rec)) continue; SH.items.push(rec); H.add(rec); } };
  home.init = () => { H.init(SH); if (first) seed(STARTER); for (const s of H.spots) if (s.active) moveSpot(s); G.inside = false; };
  home.comfort = (rid) => { let c = H.comfort(rid); for (const s of H.spots) if (s.active && S.plants[s.id] && (!rid || (H.roomAt(s.pos.x, s.pos.z) || {}).id === rid)) c += 4; return c; };
  home.count = (fn) => SH.items.filter((r) => !fn || fn(FURN_BY[r.k], r)).length;
  home.plants = () => H.spots.filter((s) => s.active && S.plants[s.id]).length;

  // ---------- in and out ----------
  const go = (inside) => ui.fade(() => { G.clearTasks(); if (G.placing) (G.inside ? home : G.deco).cancel(); G.inside = inside; ui.closeCards(); ui.closeModal();
    const p = gardener.group.position; if (inside) { p.set(H.entry.x, 0, H.entry.z); gardener.heading = gardener.targetHeading = Math.PI; } else { p.set(0, 0.18, -5.9); gardener.heading = gardener.targetHeading = 0; }
    gardener.stop(); setScene(inside); fx.setScene(inside ? scene : G.gardenScene, inside); ui.setIndoors(inside); G.refreshMarkers(); audio.sfx('click', 0.5, inside ? 0.8 : 1.1); S.stats.visits = (S.stats.visits || 0) + (inside ? 1 : 0); G.checkQuest(); save(); });
  G.enterHouse = () => { if (G.inside) return; G.walkThen(0, -5.75, () => go(true)); };
  G.exitHouse = () => { if (!G.inside) return; if (H.upAt(gardener.group.position.z)) { go(false); return; } G.walkThen(H.exit.x, H.exit.z - 0.5, () => go(false)); }; // from upstairs she just goes down and out
  // ---------- the staircase ----------
  // She walks to the foot (or the head) of the stairs, climbs them step by step, and the view changes floor at the end.
  home.stairs = (dir) => { if (!G.inside || !H.stairs() || G.placing) return false; const gp = gardener.group.position, up = dir === 'up', onUp = H.upAt(gp.z); if (up === onUp) return false;
    const base = H.stairPath(), pts = (up ? base : base.slice().reverse()).map(([x, y, z]) => new V3(x, up ? y : y - FL_H, z + (up ? 0 : FL_DZ))), len = [0]; for (let i = 1; i < pts.length; i++) len.push(len[i - 1] + pts[i].distanceTo(pts[i - 1]));
    const total = len[len.length - 1], SPD = 1.15, climb = () => { ui.closeCards(); audio.sfx('step', 0.4); let stepT = 0;
      G.busy(total / SPD + 0.05, (dt, t) => { const s = Math.min(total, t * SPD); let i = 1; while (i < pts.length - 1 && len[i] < s) i++; const a = pts[i - 1], b = pts[i], k = (s - len[i - 1]) / Math.max(1e-6, len[i] - len[i - 1]);
        gp.set(a.x + (b.x - a.x) * k, a.y + (b.y - a.y) * k, a.z + (b.z - a.z) * k); G.climbY = gp.y; gardener.targetHeading = Math.atan2(b.x - a.x, b.z - a.z); gardener.state = 'walk'; gardener.speed = SPD; stepT += dt; if (stepT > 0.42) { stepT = 0; audio.sfx('step', 0.3, 0.9 + Math.random() * 0.2); } },
        () => { const e = pts[pts.length - 1]; gp.copy(e); G.climbY = e.y; gardener.stop(); ui.fade(() => { const dy = up ? -FL_H : FL_H, dz = up ? FL_DZ : -FL_DZ; G.climbY = undefined; gp.y = 0; gp.z += dz; if (G.onWarp) G.onWarp(0, dy, dz); H.setLevel(up ? 1 : 0); G.refreshMarkers(); S.stats.stairs = (S.stats.stairs || 0) + 1;
            setTimeout(() => G.walkThen(up ? 0.35 : STAIR.x1 + 1.0, up ? FL_DZ + STAIR.zB + 0.75 : STAIR.zA + 0.5, () => {}), 420); }); }); };
    G.clearTasks(); const s = pts[0]; if (Math.hypot(gp.x - s.x, gp.z - s.z) < 0.25) { climb(); return true; } return G.walkThen(s.x, s.z, climb); };

  // ---------- putting things in place ----------
  const snap = (v) => Math.round(v * 8) / 8;
  const spotsOf = (it) => (it.rec.sl || []).map((id) => H.spots.find((s) => s.id === id)).filter(Boolean);
  const hasPlants = (it) => spotsOf(it).some((s) => S.plants[s.id] || s.pending);
  const showGhost = () => { const p = G.placing; if (!p) { mark.visible = false; return; } const d = p.def, res = (p.res = H.check(d, { x: p.x, z: p.z, r: p.rot }, p.ignore)); p.ok = res.ok;
    if (d.kind === 'wall' && res.room && res.side != null) { const w = H.wallPos(res.room.id, res.side, res.t); p.group.position.copy(w.p); p.group.rotation.y = w.ry; mark.position.set(w.p.x + w.n.x * 0.2, 0.03, w.p.z + w.n.z * 0.2); mark.rotation.z = -w.ry; mark.scale.set(d.w, 0.4, 1); }
    else { p.group.position.set(p.x, res.y || 0, p.z); p.group.rotation.y = -(p.rot % 4) * Math.PI / 2; const rc = H.rect(d, p.x, p.z, p.rot); mark.position.set(p.x, (res.y || 0) + 0.03, p.z); mark.rotation.z = 0; mark.scale.set(Math.max(0.3, rc[1] - rc[0]), Math.max(0.3, rc[3] - rc[2]), 1); }
    mark.visible = true; mark.material.color.setHex(p.ok ? 0x6ab85a : 0xe2685f); for (const k of p.kids || []) { const v = new V3(k.lx, 0, k.lz).applyAxisAngle(new V3(0, 1, 0), -(p.rot % 4) * Math.PI / 2); k.it.group.position.set(p.x + v.x, d.surf, p.z + v.z); k.it.group.rotation.y = -(((k.r0 + p.rot - p.rot0) % 4 + 4) % 4) * Math.PI / 2; } };
  // the piece goes to the nearest place where it fits: against the wall instead of into it, beside another piece instead of over it
  const settle = (p) => { const d = p.def, home0 = H.fit(d, p.x, p.z, p.rot).room, at = (x, z) => { const f = H.fit(d, x, z, p.rot, home0); // it slides inside the room it was dropped in return { x: f.x, z: f.z, res: H.check(d, { x: f.x, z: f.z, r: p.rot }, p.ignore) }; }, slides = (c) => { const rc = H.rect(d, c.x, c.z, p.rot), o = c.res.hit, e = 0.001; return [[o[0] - rc[1] - e, 0], [o[1] - rc[0] + e, 0], [0, o[2] - rc[3] - e], [0, o[3] - rc[2] + e]]; };
    const c0 = at(p.x, p.z); p.x = c0.x; p.z = c0.z; if (c0.res.ok || !c0.res.hit || d.kind !== 'floor') return; let best = null;
    const tryAt = (x, z, cost) => { const c = at(x, z), k = cost + Math.hypot(c.x - p.x, c.z - p.z) * 0.001; if (c.res.ok && (!best || k < best.k)) best = { x: c.x, z: c.z, k }; return c; };
    for (const [dx, dz] of slides(c0)) { const c1 = tryAt(c0.x + dx, c0.z + dz, Math.abs(dx) + Math.abs(dz)); if (!c1.res.ok && c1.res.hit) for (const [ex, ez] of slides(c1)) tryAt(c1.x + ex, c1.z + ez, Math.abs(dx) + Math.abs(dz) + Math.abs(ex) + Math.abs(ez)); }
    if (best && best.k < 2.2) { p.x = best.x; p.z = best.z; } };
  const begin = (p) => { G.clearTasks(); ui.closeCards(); ui.closeModal(); const gp = gardener.group.position;
    if (p.x == null) { const room = H.roomAt(gp.x, gp.z) || ROOM_BY.sala; p.x = snap(clamp(gp.x + Math.sin(gardener.heading) * 1.3, room.cx - CW / 2 + 0.6, room.cx + CW / 2 - 0.6)); p.z = snap(clamp(gp.z + Math.cos(gardener.heading) * 1.3, room.cz - CD / 2 + 0.6, room.cz + CD / 2 - 0.6)); }
    if (p.group.parent !== scene) scene.add(p.group); p.ignore = p.ignore || []; G.placing = p; settle(p); showGhost(); ui.placeBar(p.def, true); };
  Object.assign(home, {
    buy: (id) => { const def = FURN_BY[id]; if (!def) return; const have = SH.stored[id] || 0;
      if (!have) { if (level() < def.lvl) { audio.sfx('error'); ui.toast(`${def.name} chega no nível ${def.lvl}`, 'warn'); return; } if (S.coins < def.price) { audio.sfx('error'); ui.toast(`Faltam ${def.price - S.coins} moedas para ${def.name}`, 'warn'); return; } }
      begin({ id, def, group: buildFurn(id), rot: 0, rot0: 0, mode: have ? 'stored' : 'new' }); },
    move: (x, z) => { const p = G.placing; if (!p) return; const f = p.def.kind === 'top' ? 2 : 1; p.x = snap(x * f) / f; p.z = snap(z * f) / f; settle(p); showGhost(); },
    rotate: () => { const p = G.placing; if (!p || p.def.kind === 'wall') return; p.rot = (p.rot + 1) % 4; audio.sfx('click', 0.4); settle(p); showGhost(); },
    confirm: () => { const p = G.placing; if (!p) return; if (!p.ok) { audio.sfx('error'); ui.toast(p.res.why || 'Aqui não cabe.', 'warn'); return; }
      const rec = p.mode === 'move' ? p.rec : { k: p.id };
      if (p.mode !== 'move' && !H.claimSpots(rec)) { audio.sfx('error'); ui.toast('A casa já está com todos os vasos que cabem. Guarde algum para pôr este.', 'warn'); return; }
      if (p.mode === 'new') { if (S.coins < p.def.price) { audio.sfx('error'); return; } S.coins -= p.def.price; S.stats.furn = (S.stats.furn || 0) + 1; addXp(Math.min(40, 4 + Math.round(p.def.price / 150))); } else if (p.mode === 'stored') SH.stored[p.id] = Math.max(0, (SH.stored[p.id] || 0) - 1);
      const res = p.res; if (p.def.kind === 'wall') { rec.room = res.room.id; rec.side = res.side; rec.t = res.t; delete rec.x; delete rec.z; } else { rec.x = p.x; rec.z = p.z; rec.r = p.rot % 4; rec.y = res.y || 0; }
      if (p.mode !== 'move') SH.items.push(rec);
      const it = H.add(rec, p.group); it.pop = 0; it.on = !rec.off;
      for (const k of p.kids || []) { const v = new V3(k.lx, 0, k.lz).applyAxisAngle(new V3(0, 1, 0), -(p.rot % 4) * Math.PI / 2); k.it.rec.x = p.x + v.x; k.it.rec.z = p.z + v.z; k.it.rec.y = p.def.surf; k.it.rec.r = ((k.r0 + p.rot - p.rot0) % 4 + 4) % 4; H.add(k.it.rec, k.it.group); for (const s of spotsOf(k.it)) moveSpot(s, false); }
      for (const s of spotsOf(it)) moveSpot(s, false);
      G.placing = null; mark.visible = false; ui.placeBar(null); audio.sfx(p.mode === 'new' ? 'buy' : 'plant');
      const at = it.group.getWorldPosition(new V3()); at.y += Math.min(1.2, (p.def.h || 0.5) * 0.6); fx.sparkle(at, 20, 0xfff0a0, Math.max(0.25, p.def.w * 0.4)); ui.hud(); G.refreshMarkers(); G.checkQuest(); save(); },
    cancel: () => { const p = G.placing; if (!p) return; if (p.mode === 'move') { const it = H.add(p.rec, p.group); for (const k of p.kids || []) H.add(k.it.rec, k.it.group); for (const s of [...spotsOf(it), ...(p.kids || []).flatMap((k) => spotsOf(k.it))]) moveSpot(s, false); } else { scene.remove(p.group); }
      G.placing = null; mark.visible = false; ui.placeBar(null); G.refreshMarkers(); },
    startMove: (it) => { const kids = []; if (it.def.surf != null && it.def.kind === 'floor') { const rc = H.rect(it.def, it.rec.x, it.rec.z, it.rec.r), inv = (it.rec.r % 4) * Math.PI / 2;
        for (const o of H.items.slice()) if (o.def.kind === 'top' && o.rec.y > 0 && o.rec.x > rc[0] && o.rec.x < rc[1] && o.rec.z > rc[2] && o.rec.z < rc[3]) { const v = new V3(o.rec.x - it.rec.x, 0, o.rec.z - it.rec.z).applyAxisAngle(new V3(0, 1, 0), inv); kids.push({ it: o, lx: v.x, lz: v.z, r0: o.rec.r || 0 }); } }
      for (const k of kids) { H.drop(k.it, true); for (const s of spotsOf(k.it)) moveSpot(s, true); } H.drop(it, true); for (const s of spotsOf(it)) moveSpot(s, true);
      const w = it.def.kind === 'wall' ? H.wallPos(it.rec.room, it.rec.side, it.rec.t) : null; if (w) scene.add(it.group);
      begin({ id: it.rec.k, def: it.def, group: it.group, rot: it.rec.r || 0, rot0: it.rec.r || 0, x: w ? w.p.x + w.n.x * 0.4 : it.rec.x, z: w ? w.p.z + w.n.z * 0.4 : it.rec.z, mode: 'move', rec: it.rec, kids }); },
    turn: (it) => { if (it.def.kind === 'wall') return; const r = ((it.rec.r || 0) + 1) % 4, res = H.check(it.def, { x: it.rec.x, z: it.rec.z, r }, [it]); if (!res.ok) { audio.sfx('error'); ui.toast('Virado assim não cabe aqui. Use “Mover”.', 'warn'); return; }
      const hadTop = it.def.surf != null && H.items.some((o) => o.def.kind === 'top' && o.rec.y > 0 && Math.abs(o.rec.x - it.rec.x) < it.def.w && Math.abs(o.rec.z - it.rec.z) < it.def.w); if (hadTop && it.def.w !== it.def.d) { home.startMove(it); home.rotate(); return; }
      it.rec.r = r; H.place(it); for (const s of spotsOf(it)) moveSpot(s, false); H.nav.invalidate(); audio.sfx('click', 0.4); save(); },
    store: (it) => { const rc = it.def.kind === 'floor' && it.def.surf != null ? H.rect(it.def, it.rec.x, it.rec.z, it.rec.r) : null, tops = rc ? H.items.filter((o) => o.def.kind === 'top' && o.rec.y > 0 && o.rec.x > rc[0] && o.rec.x < rc[1] && o.rec.z > rc[2] && o.rec.z < rc[3]) : [];
      if ([it, ...tops].some(hasPlants)) { audio.sfx('error'); ui.toast('Tem plantinha morando aí. Para guardar, retire as plantas primeiro.', 'warn'); return; }
      for (const o of [it, ...tops]) { H.freeSpots(o.rec); H.drop(o); SH.items.splice(SH.items.indexOf(o.rec), 1); SH.stored[o.rec.k] = (SH.stored[o.rec.k] || 0) + 1; }
      audio.sfx('plant', 0.6, 1.2); ui.closeCards(); ui.toast(`${it.def.name} guardado${tops.length ? ' (com o que estava em cima)' : ''}. Está em “Guardados”, na loja de móveis.`, 'info'); ui.hud(); G.refreshMarkers(); save(); },
    tint: (it, which, color) => { it.rec[which] = color; H.regroup(it); save(); },
    toggle: (it) => { it.on = !it.on; it.rec.off = it.on ? undefined : 1; H.glow(it); audio.sfx('click', 0.5, it.on ? 1.2 : 0.8); save(); },
    canUse: (it) => (STOVES.includes(it.def.id) ? 'Cozinhar' : it.def.sleep ? 'Deitar' : it.def.seat ? 'Sentar' : MUSIC.includes(it.def.id) ? 'Ouvir música' : (it.group.userData.glow || []).length ? (it.on ? 'Desligar' : 'Ligar') : null),
    use: (it) => { const d = it.def; ui.closeCards();
      if (STOVES.includes(d.id)) { ui.cook(it); return; }
      if (!d.seat && !d.sleep && !MUSIC.includes(d.id)) { home.toggle(it); return; }
      const f = H.front(it); G.walkThen(f.x, f.z, () => { const gp = gardener.group.position, back = gp.clone(), heading = Math.atan2(-f.fx, -f.fz);
        if (d.seat || d.sleep) { const sp = d.sleep || d.seat, to = H.local(it, sp[0], 0, sp[2] + (d.sleep ? 0 : 0.02)); gardener.targetHeading = heading; gardener.seatY = sp[1]; gardener.bedY = sp[1];
          const dur = d.sleep ? 16 : 14; gardener.play(d.sleep ? 'sleep' : 'sit', dur); if (d.sleep) S.stats.naps = (S.stats.naps || 0) + 1; else S.stats.sits = (S.stats.sits || 0) + 1;
          G.busy(dur, (dt, t) => { const k = Math.min(1, t / 0.5), e = Math.min(1, Math.max(0, (dur - t) / 0.5)), u = Math.min(k, e); gp.x = back.x + (to.x - back.x) * u; gp.z = back.z + (to.z - back.z) * u; if (d.sleep && Math.random() < dt * 0.9) fx.sparkle(new V3(to.x, sp[1] + 0.9, to.z), 1, 0xdfe8ff, 0.2);
            if (d.sleep && (S.hour > 20 || S.hour < 5.5) && S.settings.time === 'auto' && t > 2) S.hour = (S.hour + dt * 0.9) % 24; }, () => { gp.x = back.x; gp.z = back.z; gardener.stop(); }); }
        else { gardener.faceTo(f.x + f.fx, f.z + f.fz); if (!it.on) home.toggle(it); gardener.play('dance', 9); S.stats.dances = (S.stats.dances || 0) + 1; audio.sfx('bloom', 0.5, 1.1);
          G.busy(9, (dt) => { if (Math.random() < dt * 3) { const p = it.group.getWorldPosition(new V3()); p.y += (d.h || 0.5) + 0.2; fx.hearts(p, 1); } }, () => gardener.stop()); }
        G.checkQuest(); }); },
  });
  // cooking: she walks to the stove, stirs for a moment, and the dish is ready
  home.cook = (it, rid) => { const r = RECIPE_BY[rid]; if (!r || !it) return false; if (level() < r.lvl) { audio.sfx('error'); return false; } if (!canCook(r, S.basket)) { audio.sfx('error'); ui.toast('Ainda faltam ingredientes na cesta.', 'warn'); return false; }
    ui.closeModal(); const f = H.front(it);
    return G.walkThen(f.x, f.z, () => { if (!canCook(r, S.basket)) return; for (const k in r.ing) S.basket[k] -= r.ing[k]; gardener.faceTo(f.x + f.fx, f.z + f.fz); gardener.play('admire', 4.2); audio.sfx('water', 0.35, 0.7);
      const top = it.group.getWorldPosition(new V3()); top.y += Math.min(1.1, it.def.surf || 0.95);
      G.busy(4.2, (dt) => { if (Math.random() < dt * 9) fx.emit({ x: top.x + (Math.random() - 0.5) * 0.25, y: top.y, z: top.z + (Math.random() - 0.5) * 0.2, vx: 0, vy: 0.35 + Math.random() * 0.2, vz: 0, life: 1.4, size: 0.16, color: 0xffffff, alpha: 0.4, grow: 1.6 }); }, () => {
        (S.recipes ||= {})[rid] = (S.recipes[rid] || 0) + 1; S.stats.cooked = (S.stats.cooked || 0) + 1; S.coins += r.coins; const firstTime = S.recipes[rid] === 1; ui.floatText(top, '+' + r.coins, 'coin'); audio.sfx(firstTime ? 'levelup' : 'coin', 0.7); gardener.play('cheer', 1.3); fx.burst(top, [0xffe680, 0xffc6a0, 0xffffff], 26, 1);
        addXp(Math.ceil(r.coins / 5) + (firstTime ? 10 : 0)); ui.toast(firstTime ? `Receita nova no caderno: ${r.name}!` : `${r.name} pronto. Que cheirinho!`, 'good'); if (firstTime && G.sys.log) G.sys.log(`Cozinhei ${r.name} pela primeira vez.`); ui.hud(); G.checkQuest(); save(); }); }); };
  // a cat adopts the house as soon as there is a bed for it
  let cat = null; const CATBEDS = ['caminha_gato', 'almofadao_chao', 'cesto_mantas'];
  const tickCat = (time) => { const bed = H.items.find((it) => CATBEDS.includes(it.rec.k)); if (!bed) { if (cat) cat.visible = false; return; }
    if (!cat) { cat = critterModel('gato'); cat.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(cat); }
    cat.visible = true; cat.position.set(bed.rec.x, (bed.rec.y || 0) + (bed.rec.k === 'caminha_gato' ? 0.09 : 0.2), bed.rec.z); cat.rotation.y = bed.group.rotation.y + 0.6; const br = 1 + Math.sin(time * 1.3) * 0.03; cat.scale.set(1.15, 1.15 * br, 1.15); };
  home.tick = (dt, time) => { if (G.inside) tickCat(time); const p = G.placing; if (p && G.inside) { mark.material.opacity = 0.35 + 0.15 * Math.sin(time * 5); for (const fn of p.group.userData.ticks || []) fn(dt, time, H.night, p.group); } };

  // ---------- rooms, wallpapers, floors ----------
  home.buyRoom = (id) => { const r = ROOM_BY[id]; if (!r || H.owned(id) || !H.buyable().includes(r)) return false;
    if (level() < r.lvl) { audio.sfx('error'); ui.toast(`${r.name} chega no nível ${r.lvl}`, 'warn'); return false; } if (S.coins < r.cost) { audio.sfx('error'); ui.toast(`Faltam ${r.cost - S.coins} moedas para ${r.name}`, 'warn'); return false; }
    S.coins -= r.cost; SH.rooms.push(id); H.rebuild(); if (G.growHouse && G.growHouse()) setTimeout(() => ui.toast('A casa também cresceu por fora. Saia para o jardim para ver!', 'good'), 2600);
    // whatever was hanging where a door now opens goes back to the box
    let boxed = 0; for (const it of H.items.slice()) { if (it === (G.placing || {}).it) continue; const res = it.def.kind === 'wall' ? (() => { const w = H.wallOf(it.rec.room, it.rec.side); return w && w.door && Math.abs(it.rec.t) < 0.65 + it.def.w / 2 + 0.08 ? { ok: false } : { ok: true }; })() : it.def.kind === 'floor' || (id === 'hall2' && it.def.kind !== 'top') ? H.check(it.def, { x: it.rec.x, z: it.rec.z, r: it.rec.r }, [it]) : { ok: true };
      if (!res.ok && !hasPlants(it)) { H.freeSpots(it.rec); H.drop(it); SH.items.splice(SH.items.indexOf(it.rec), 1); SH.stored[it.rec.k] = (SH.stored[it.rec.k] || 0) + 1; boxed++; } }
    for (const it of H.items.slice()) { if (it.def.kind !== 'top' || hasPlants(it)) continue; const res = H.check(it.def, { x: it.rec.x, z: it.rec.z, r: it.rec.r }, [it]); // ornaments left without their table, or in the way of the stairs
      if (!res.ok || Math.abs((res.y || 0) - (it.rec.y || 0)) > 0.02) { H.freeSpots(it.rec); H.drop(it); SH.items.splice(SH.items.indexOf(it.rec), 1); SH.stored[it.rec.k] = (SH.stored[it.rec.k] || 0) + 1; boxed++; } }
    if (r.kit) seed(r.kit, r.cx, r.cz); for (const s of H.spots) if (s.active) moveSpot(s, false);
    audio.sfx('expand'); fx.burst(new V3(r.cx, 1, r.cz), [0xffe680, 0xb8f0a0, 0xffffff, 0xffc6d8], 80, 2.4); ui.toast(id === 'hall2' ? `A escada está pronta! Toque nela para subir.${boxed ? ' O que estava no canto dela foi guardado.' : ''}` : `${r.name}: a casa cresceu!${boxed ? ' O que estava no lugar da porta nova foi guardado.' : ''}`, 'good'); addXp(30 + ROOMS.indexOf(r) * 8); ui.hud(); if (id === 'hall2') ui.focus((STAIR.x0 + STAIR.x1) / 2, (STAIR.z0 + STAIR.z1) / 2); else if (!!r.up === H.upAt(gardener.group.position.z)) ui.focus(r.cx, r.cz); G.refreshMarkers(); G.checkQuest(); save(); return true; };
  // kind: 'w' wallpaper / 'f' floor. Styles are bought once and then serve every room, in any colour.
  home.style = (kind, rid, id, color) => { const r = ROOM_BY[rid], def = (kind === 'w' ? WALL_BY : FLOOR_BY)[id], ownList = kind === 'w' ? SH.ownW : SH.ownF; if (!r || !def || !H.owned(rid)) return false;
    if (!ownList.includes(id)) { if (level() < def.lvl) { audio.sfx('error'); ui.toast(`${def.name} chega no nível ${def.lvl}`, 'warn'); return false; } if (S.coins < def.price) { audio.sfx('error'); ui.toast(`Faltam ${def.price - S.coins} moedas para ${def.name}`, 'warn'); return false; }
      S.coins -= def.price; ownList.push(id); audio.sfx('buy'); addXp(8); ui.hud(); color = color ?? def.c; } else audio.sfx('click', 0.5);
    const st = H.style(r)[kind === 'w' ? 'wall' : 'floor']; if (st.p !== id && color == null) color = def.c; st.p = id; if (color != null) st.c = color; H.repaint(r); G.checkQuest(); save(); return true; };
  home.roomOf = () => { const p = gardener.group.position; return H.roomAt(p.x, p.z) || ROOM_BY.sala; };
  home.tapFloor = (x, z) => { if (Math.abs(x - H.exit.x) < 0.7 && Math.abs(z - H.exit.z) < 0.55) { G.exitHouse(); return true; } return false; };
  G.home = home;
  return home;
}
