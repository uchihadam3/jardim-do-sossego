import { SPECIES_LIST } from './species.js';
import { DECOR } from './world.js';
import { UPGRADES, STAGE_NAMES, LV, STYLE } from './game.js';
import { SPECIES } from './species.js';
import { ACH, DAILY } from './systems.js';
import { CRITTERS } from './critters.js';
import { toCode, fromCode, progress } from './save.js';
import { DECO } from './decor.js';
import { fabricCanvas } from './character.js';
import { WARDROBE, WTABS, PALETTE, PATTERNS, HAIR_COLORS } from './wardrobe.js';
import { FURN, FURN_BY, CATS } from './furncore.js';
import { ROOMS, WALLS, FLOORS, wallCanvas, floorCanvas } from './house.js';
import { RECIPES, canCook } from './recipes.js';
import { FRIENDS, heartsOf, HEART_AT } from './visitor.js';

const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const ICON = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const SPOT_NAMES = { bed: 'canteiro', pot: 'vaso', hang: 'vaso suspenso', window: 'jardineira', pond: 'lago', tree: 'árvore', arch: 'arco', veg: 'horta', green: 'estufa' };
const fmtTime = (s) => { if (s >= 86400) { const d = Math.floor(s / 86400), h = Math.round((s % 86400) / 3600); return h >= 24 ? `${d + 1} d` : h ? `${d} d ${h} h` : `${d} d`; } if (s >= 3600) { const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60 / 5) * 5; return m >= 60 ? `${h + 1} h` : m ? `${h} h ${m}` : `${h} h`; } return s >= 60 ? `${Math.ceil(s / 60)} min` : `${Math.max(1, Math.ceil(s))} s`; };

export function createUI({ project, thumbs, audio }) {
  const U = { game: null, open: null };
  const hudCoins = $('#coins'), hudLvl = $('#lvl'), hudBar = $('#lvlbar'), hudBeauty = $('#beauty');
  const toasts = $('#toasts'), floats = $('#floats'), tags = $('#tags'), sheet = $('#sheet'), card = $('#card'), modal = $('#modal'), questEl = $('#quest');
  let cardUpd = null, cardSpot = null, lastCoins = null;
  const click = () => audio.sfx('click', 0.35);
  // pictures are rendered the first time they are needed: an <img> shows up at once and fills in a moment later
  const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  const TH = (key) => (thumbs.has(key) ? `src="${thumbs.get(key)}"` : `src="${BLANK}" data-th="${key}"`);
  U.TH = TH;
  const pumpThumbs = () => { const t0 = performance.now(); let n = 0; while (n < 6 && performance.now() - t0 < 10) { const im = document.querySelector('img[data-th]'); if (!im) return n; const key = im.dataset.th, url = thumbs.get(key); n++;
      document.querySelectorAll('img[data-th]').forEach((e) => { if (e.dataset.th === key) { e.src = url || BLANK; e.removeAttribute('data-th'); } }); } return n; };

  U.hud = () => {
    const G = U.game, S = G.state, l = G.level();
    if (lastCoins !== null && S.coins !== lastCoins) { hudCoins.parentElement.classList.remove('bump'); void hudCoins.offsetWidth; hudCoins.parentElement.classList.add('bump'); }
    lastCoins = S.coins; hudCoins.textContent = S.coins; hudLvl.textContent = l;
    const a = LV[l - 1] ?? 0, b = LV[l] ?? a + 1; hudBar.style.width = Math.round(Math.min(1, (S.xp - a) / (b - a)) * 100) + '%';
    hudBeauty.textContent = G.inside ? G.home.comfort() : G.beauty();
    const se = G.sys.season(), sp = $('#season'); if (sp.dataset.k !== se.id + ':' + se.day) { sp.dataset.k = se.id + ':' + se.day; sp.innerHTML = `${ICON(se.icon)}<span>${se.name}</span>`; sp.title = `${se.name}, dia ${se.day} de ${se.of}`; }
    if (U.open === 'picker') refreshPicker();
  };
  U.toast = (text, kind = 'info') => {
    const t = el('div', 'toast ' + kind, text); toasts.appendChild(t);
    while (toasts.children.length > 3) toasts.firstChild.remove();
    setTimeout(() => t.classList.add('out'), 3400); setTimeout(() => t.remove(), 3900);
  };
  // a speech balloon that follows whoever is talking
  const says = [];
  U.say = (pos, text, ms = 3600) => { for (const s of says) if (s.pos === pos) s.until = 0; const f = el('div', 'say', text); floats.appendChild(f); says.push({ f, pos, until: performance.now() + ms }); U.sayTick(); };
  U.sayTick = () => { const now = performance.now(); for (let i = says.length - 1; i >= 0; i--) { const s = says[i]; if (now > s.until) { s.f.remove(); says.splice(i, 1); continue; } const p = project(s.pos()); s.f.style.display = p.vis && U.open !== 'modal' ? '' : 'none'; s.f.style.left = p.x + 'px'; s.f.style.top = p.y + 'px'; } };
  const heartsHtml = (n) => `<span class="hearts">${'<i class="on">♥</i>'.repeat(n)}${'<i>♥</i>'.repeat(5 - n)}</span>`;
  // talking to a neighbour who came to visit
  U.neighbour = (V) => { U.closeCards(); U.open = 'card'; U.cardFor = 'neighbour'; let line = V.hello(), mode = '';
    const draw = () => { const me = V.me, h = V.hearts, next = V.next, order = V.order(), gifts = mode === 'gift' ? V.gifts() : [];
      card.innerHTML = `<div class="c-th c-face">${ICON('flower')}</div><div class="c-b"><div class="c-n"><b>${me.n}</b>${heartsHtml(h)}</div>
        <div class="c-say">${line}</div>${mode === 'gift' ? `<div class="c-gifts">${gifts.length ? gifts.map((k) => `<button class="chip ${me.love(SPECIES[k]) && h >= 1 ? 'fav' : ''}" data-give="${k}"><img alt="" ${TH(k)}>${U.game.state.basket[k]}</button>`).join('') : '<small>A cesta está vazia. Recolha presentes das plantas para ter o que dar.</small>'}</div>` : `<div class="c-row"><small style="width:auto;text-align:left">Gosta de ${me.likes}.${next ? ` Faltam ${next - V.pts} para o próximo coração.` : ' Amiga do peito!'}</small></div>`}
        <div class="c-act">${mode === 'gift' ? '<button class="btn ghost" data-a="back">Voltar</button>' : `<button class="btn" data-a="talk">Conversar</button><button class="btn ghost" data-a="gift">Dar um presente</button>${order ? '<button class="btn" data-a="order">Entregar encomenda</button>' : ''}`}<button class="btn ghost" data-a="close">Tchau</button></div></div>`;
      card.querySelectorAll('button[data-a]').forEach((b) => (b.onclick = () => { const a = b.dataset.a; click(); if (a === 'talk') { line = V.talk(); draw(); } else if (a === 'gift') { if (V.canGift()) mode = 'gift'; else line = V.give(''); draw(); } else if (a === 'back') { mode = ''; draw(); } else if (a === 'order') { const l = V.deliver(); if (l) line = l; if (U.open === 'card') draw(); } else U.closeCards(); }));
      card.querySelectorAll('[data-give]').forEach((b) => (b.onclick = () => { line = V.give(b.dataset.give); mode = ''; if (U.open === 'card' && U.cardFor === 'neighbour') draw(); })); };
    draw(); card.classList.add('on'); };
  U.friendUp = (name, h, coins, got) => setTimeout(() => openModal(`<h2>Amizade com ${name}</h2><p class="bighearts">${heartsHtml(h)}</p><p>${h >= 5 ? 'Vocês viraram amigas do peito!' : 'Vocês estão cada vez mais amigas.'} Ela deixou um presente: <b>${got.join(' e ')}</b> e ${coins} moedas.</p><div class="row"><button class="btn big" data-close>Que carinho!</button></div>`, 'small center'), 900);
  U.floatText = (v, text, kind) => {
    const p = project(v); if (!p.vis) return;
    const f = el('div', 'float ' + kind, (kind === 'coin' ? ICON('coin') : '') + text); f.style.left = p.x + 'px'; f.style.top = p.y + 'px'; floats.appendChild(f); setTimeout(() => f.remove(), 1500);
  };
  U.quest = (q) => {
    const ws = U.game && U.game.sys ? U.game.sys.wishes() : [], wd = ws.filter((w) => w.done).length, chip = ws.length ? `<button class="q-w ${wd === ws.length ? 'all' : ''}" id="q-w">${ICON('flower')}Desejos de hoje<b>${wd}/${ws.length}</b></button>` : '';
    if (!q) { const w = ws.find((x) => !x.done); q = w ? { text: w.text, val: w.val, goal: w.goal, reward: w.r, wish: true } : null; }
    const key = (q ? q.text + q.val : 'fim') + wd + ws.length; if (questEl.dataset.k === key) return; questEl.dataset.k = key;
    questEl.innerHTML = q ? `<div class="q-h">${q.wish ? 'Desejo de hoje' : 'Próximo passo'}</div><div class="q-t">${q.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round((q.val / q.goal) * 100)}%"></i></div><span>${q.val}/${q.goal}</span><b>${ICON('coin')}${q.reward}</b></div>${chip}`
      : `<div class="q-t">${ws.length ? 'Tudo feito por hoje. Aproveite o sossego!' : 'Seu jardim está lindo. Aproveite o sossego!'}</div>${chip}`;
    const b = $('#q-w'); if (b) b.onclick = () => { click(); U.wishes(); };
  };
  U.wishes = () => { const ws = U.game.sys.wishes(), done = ws.filter((w) => w.done).length;
    openModal(`<div class="p-h"><h2>Desejos de hoje</h2><span class="wallet">${done}/${ws.length}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>Três vontades novas a cada dia de visita. Sem pressa: o que não der hoje, amanhã tem outros.</p>
      <div class="list">${ws.map((w) => `<div class="item ach ${w.done ? 'own' : ''}"><div class="a-ic">${ICON(w.done ? 'trophy' : 'flower')}</div><div class="a-b"><b>${w.text}</b><div class="q-r"><div class="bar ${w.done ? 'c' : ''}"><i style="width:${Math.round((w.val / w.goal) * 100)}%"></i></div><span>${w.val}/${w.goal}</span><b>${ICON('coin')}${w.r}</b></div></div></div>`).join('')}</div>
      <p class="hint">Realizando os três, vem um presente extra com adubo.</p>`, 'small'); };

  // ---------- bottom sheet: choose what to plant ----------
  let pickSpot = null, pickList = null;
  const refreshPicker = () => {
    if (!pickSpot) return; const G = U.game, lvl = G.level();
    sheet.querySelectorAll('.seed').forEach((b) => { const sp = SPECIES_LIST.find((s) => s.id === b.dataset.id); b.classList.toggle('poor', G.state.coins < sp.price && sp.lvl <= lvl && !(G.state.seedbox[sp.id] > 0)); });
  };
  let pickTab = null, fillBed = false, pickPage = 0;
  U.picker = (spot, list, tab) => {
    U.closeCards(); pickSpot = spot; pickList = list; U.open = 'picker';
    const G = U.game, S = G.state, sibs = G.siblings(spot).length;
    const open = list.filter((x) => !x.locked && !x.off).reverse(), soon = [...list.filter((x) => x.off && !x.locked), ...list.filter((x) => x.locked).slice(0, 4)];
    const rec = S.recent.map((id) => open.find((x) => x.sp.id === id)).filter(Boolean).slice(0, 8);
    const tier = (a, b) => open.filter((x) => x.cat !== 'rara' && x.sp.lvl >= a && x.sp.lvl <= b);
    const tabs = [['box', 'Guardadas', open.filter((x) => x.box > 0)], ['rec', 'Recentes', rec], ['season', 'Na estação', open.filter((x) => G.sys.inSeason(x.sp))], ['t1', 'Simples', tier(1, 3)], ['t2', 'Especiais', tier(4, 7)], ['t3', 'Nobres', tier(8, 99)], ['folhagem', 'Folhagens', open.filter((x) => x.cat === 'folhagem')], ['horta', 'Horta', open.filter((x) => x.cat === 'horta')], ['rara', 'Raras', open.filter((x) => x.cat === 'rara')], ['all', 'Todas', open]]
      .filter(([k, , l]) => l.length && (k === 'all' || k === 'rec' || k === 'box' || (open.length > 8 && l.length < open.length)));
    const boxN = open.reduce((n, x) => n + (x.box || 0), 0); U._boxN = U._boxN || {}; if (!tab && boxN > (U._boxN[spot.type] || 0)) pickTab = 'box'; U._boxN[spot.type] = boxN; // a seedling was just put away: show the saved ones first
    pickTab = tab || (tabs.some((t) => t[0] === pickTab) ? pickTab : rec.length ? 'rec' : 'all'); if (!tabs.some((t) => t[0] === pickTab)) pickTab = 'all';
    // pages instead of scrolling: only as many cards as fit in the sheet
    const full = [...tabs.find((t) => t[0] === pickTab)[2], ...(pickTab === 'all' ? soon : [])], many = fillBed && sibs > 1, per = innerWidth <= 520 ? 8 : Math.max(5, Math.floor((innerWidth - 24) / 104)) * (innerHeight < 700 ? 1 : 2), pages = Math.max(1, Math.ceil(full.length / per));
    if (U._pk !== spot.id + pickTab) { U._pk = spot.id + pickTab; pickPage = 0; } pickPage = Math.max(0, Math.min(pages - 1, pickPage)); const shown = full.slice(pickPage * per, pickPage * per + per);
    const cardHtml = ({ sp, locked, off, box }) => `<button class="seed ${locked || off ? 'locked' : ''}" data-id="${sp.id}" title="${sp.info}"><div class="th"><img alt="" ${TH(sp.id)}>${locked ? `<em>Nível ${sp.lvl}</em>` : off ? `<em>${['Primavera', 'Verão', 'Outono', 'Inverno'][sp.season]}</em>` : ''}${!locked && !off && G.sys.inSeason(sp) ? `<i class="fav" title="Na estação">${ICON('flower')}</i>` : ''}</div><b>${sp.name}</b><div class="meta"><span class="price ${box ? 'box' : ''}">${box ? `Guardada ×${box}` : `${ICON('coin')}${many ? sp.price * sibs : sp.price}`}</span><span>${ICON('clock')}${fmtTime(sp.grow)}</span></div></button>`;
    sheet.innerHTML = `<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${SPOT_NAMES[spot.type]}</span></div>${pages > 1 ? `<div class="pager"><button data-pg="-1" ${pickPage ? '' : 'disabled'} aria-label="Página anterior">‹</button><span>${pickPage + 1} de ${pages}</span><button data-pg="1" ${pickPage < pages - 1 ? '' : 'disabled'} aria-label="Próxima página">›</button></div>` : ''}<button class="x" aria-label="Fechar">${ICON('x')}</button></div>
      <div class="chipsrow">${tabs.length > 1 ? tabs.map(([k, n, l]) => `<button class="fchip ${k === pickTab ? 'on' : ''}" data-ptab="${k}">${n}<i>${l.length}</i></button>`).join('') : ''}${sibs > 1 ? `<button class="fchip fill ${fillBed ? 'on' : ''}" data-fill aria-pressed="${fillBed}">${fillBed ? 'Enchendo' : 'Encher'} os ${sibs} lugares vazios</button>` : ''}</div>
      <div class="seeds ${U._pgDir ? (U._pgDir > 0 ? 'inR' : 'inL') : ''}">${shown.map(cardHtml).join('')}</div>`; U._pgDir = 0;
    const turn = (d) => { const np = pickPage + d; if (np < 0 || np >= pages) return false; click(); pickPage = np; U._pgDir = d; U.picker(spot, list, pickTab); return true; };
    if (pages > 1) { const sw = sheet.querySelector('.seeds'); sw.onpointerdown = (e) => { const x0 = e.clientX, y0 = e.clientY; const end = (u) => { window.removeEventListener('pointerup', end); window.removeEventListener('pointercancel', end); if (u.type !== 'pointerup') return; const dx = u.clientX - x0, dy = u.clientY - y0; if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.3) { U._swiped = performance.now(); turn(dx < 0 ? 1 : -1); } }; window.addEventListener('pointerup', end); window.addEventListener('pointercancel', end); }; } // dragging sideways turns the page, like the arrows
    sheet.querySelectorAll('.seed').forEach((b) => (b.onclick = () => { if (performance.now() - (U._swiped || 0) < 450) return; const n = many ? G.chooseMany(spot, b.dataset.id) : G.choose(spot, b.dataset.id) ? 1 : 0; if (n) U.closeCards(); }));
    sheet.querySelectorAll('[data-ptab]').forEach((b) => (b.onclick = () => { click(); U.picker(spot, list, b.dataset.ptab); }));
    sheet.querySelectorAll('[data-pg]').forEach((b) => (b.onclick = () => turn(+b.dataset.pg)));
    const fb = sheet.querySelector('[data-fill]'); if (fb) fb.onclick = () => { click(); fillBed = !fillBed; U.picker(spot, list, pickTab); };
    sheet.querySelector('.x').onclick = () => { click(); U.closeCards(); };
    sheet.classList.add('on'); refreshPicker();
  };

  // ---------- plant card ----------
  U.plantCard = (spot, getInfo, act) => {
    U.closeCards(); cardSpot = spot; U.open = 'card';
    const draw = () => {
      const i = getInfo(); if (!i) { U.closeCards(); return; }
      const st = i.stage === 4 ? (i.ready ? 'Presente pronto!' : 'Em flor') : STAGE_NAMES[i.stage];
      card.innerHTML = `<img class="c-th" alt="" ${TH(i.sp.id)}><div class="c-b"><div class="c-n"><b>${i.sp.name}${i.stars ? ` <i class="stars">${'★'.repeat(i.stars)}</i>` : ''}</b><span>${st}</span></div>
        <div class="c-row">${ICON('leaf')}<div class="bar g"><i style="width:${Math.round(i.grow * 100)}%"></i></div><small>${i.stage === 4 ? 'adulta' : 'faltam ' + fmtTime(i.left)}</small></div>
        <div class="c-row">${ICON('drop')}<div class="bar w"><i style="width:${Math.round(i.water * 100)}%"></i></div><small>${i.green ? 'ar úmido da estufa' : i.noWater ? 'vive na água' : i.water <= 0 ? 'com sede!' : 'regada'}</small></div>
        ${i.stage === 4 ? `<div class="c-row">${ICON('coin')}<div class="bar c"><i style="width:${Math.round((i.ready ? 1 : i.gift) * 100)}%"></i></div><small>${i.stock > 1 ? i.stock + ' presentes' : 'próximo presente'}</small></div>` : ''}
        ${i.info ? `<div class="c-info">${i.info}</div>` : ''}
        ${i.inSeason ? `<div class="c-note">${ICON('flower')}Está na estação dela: cresce e rende mais.</div>` : ''}
        ${i.crop ? `<div class="c-note">${ICON('leaf')}${i.crop === 1 ? 'Colheita única e farta: depois o lugar fica livre.' : `Ainda dá ${i.cropLeft} ${i.cropLeft === 1 ? 'colheita' : 'colheitas'}; depois o lugar fica livre.`}</div>` : ''}
        <div class="c-act">${i.noWater ? '' : `<button class="btn" data-a="water">${ICON('drop')}Regar</button>`}${i.stage < 4 && i.adubo > 0 ? `<button class="btn honey" data-a="fert">Adubar (${i.adubo})</button>` : ''}<button class="btn ghost" data-a="remove">Guardar a muda</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`;
      card.querySelectorAll('button').forEach((b) => (b.onclick = () => { click(); const a = b.dataset.a;
        if (a === 'remove') { if (b.dataset.sure) { act.remove(); U.closeCards(); } else { b.dataset.sure = 1; b.textContent = 'Tirar daqui?'; cardUpd = null; } }
        else if (a === 'fert') { act.fert(); draw(); }
        else { if (a === 'water') act.water(); U.closeCards(); } }));
    };
    draw(); cardUpd = draw; card.classList.add('on');
  };
  U.closeCards = () => { U.cardFor = null; sheet.classList.remove('on'); card.classList.remove('on'); pickSpot = null; cardUpd = null; cardSpot = null; if (U.open === 'picker' || U.open === 'card') U.open = null; };

  // ---------- modals ----------
  const openModal = (html, cls = '') => { U.closeCards(); U.dressing = false; modal.innerHTML = `<div class="panel ${cls}">${html}</div>`; modal.classList.add('on'); U.open = 'modal';
    modal.querySelectorAll('[data-close]').forEach((b) => (b.onclick = () => { click(); closeModal(); })); };
  const closeModal = () => { modal.classList.remove('on'); if (U.open === 'modal') U.open = null; U.dressing = false; };
  modal.addEventListener('pointerdown', (e) => { if (e.target === modal) closeModal(); });
  U.closeModal = closeModal;

  U.zoneOffer = (z, afford, onBuy, label = 'Abrir esta área') => {
    openModal(`<h2>${z.name}</h2><p>${z.desc || ''}</p><div class="offer"><span class="bigprice">${ICON('coin')}${z.cost}</span>${afford ? '' : `<small>Você tem ${U.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora não</button><button class="btn big" id="buyz" ${afford ? '' : 'disabled'}>${label}</button></div>`, 'small');
    $('#buyz').onclick = () => { closeModal(); onBuy(); };
  };
  U.levelUp = (l, list) => {
    const items = list.map((s) => `<div class="unl"><img alt="" ${TH(s.id)}><span>${s.name}</span></div>`).join('');
    setTimeout(() => openModal(`<div class="lv-badge">${l}</div><h2>Nível ${l}!</h2><p>${list.length ? 'Novas plantas chegaram à sua coleção de sementes:' : 'Você está cada vez melhor com as plantas.'}</p><div class="unls">${items}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`, 'small center'), 900);
  };
  let shopCat = null;
  const shop = (tab = 'decor') => {
    const G = U.game, S = G.state;
    const dec = DECOR.map((d) => { const own = S.decor.includes(d.id); return `<div class="item ${own ? 'own' : ''}"><div><b>${d.name}</b><small>${d.desc}</small></div>${own ? '<span class="tagok">No jardim</span>' : `<button class="btn" data-buy="d:${d.id}" ${S.coins >= d.price ? '' : 'disabled'}>${ICON('coin')}${d.price}</button>`}</div>`; }).join('');
    const lvl = G.level(), cats = [...new Set(DECO.map((d) => d.cat))];
    if (!shopCat) shopCat = cats[0];
    const deco = [shopCat].filter((c) => c !== 'Clássicos').map((c) => `<div class="sgroup"><div class="dgrid">${DECO.filter((d) => d.cat === c).map((d) => { const have = S.stored[d.id] || 0, placed = S.items.filter((r) => r.k === d.id).length, locked = !have && lvl < d.lvl;
      return `<button class="dcard ${locked ? 'lk' : ''}" data-deco="${d.id}"><div class="th"><img alt="" ${TH('d:' + d.id)}>${placed ? `<em>${placed} no jardim</em>` : ''}</div><b>${d.name}</b><small>${d.info}</small><span class="dprice ${have ? 'have' : ''}">${have ? `Colocar (${have} guardado${have > 1 ? 's' : ''})` : locked ? 'Nível ' + d.lvl : `${ICON('coin')}${d.price}`}</span></button>`; }).join('')}</div></div>`).join('');
    const upg = UPGRADES.map((u) => { const own = S.upg.includes(u.id), locked = u.need && !S.upg.includes(u.need); return `<div class="item ${own ? 'own' : ''}"><div><b>${u.name}</b><small>${u.desc}</small></div>${own ? '<span class="tagok">Comprado</span>' : locked ? '<span class="taglock">Depois do anterior</span>' : `<button class="btn" data-buy="u:${u.id}" ${S.coins >= u.price ? '' : 'disabled'}>${ICON('coin')}${u.price}</button>`}</div>`; }).join('');
    openModal(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${ICON('coin')}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <div class="tabs"><button class="${tab === 'decor' ? 'on' : ''}" data-tab="decor">Decoração</button><button class="${tab === 'upg' ? 'on' : ''}" data-tab="upg">Melhorias</button><button data-style>Guarda-roupa</button></div>
      ${tab === 'decor' ? `<div class="chipsrow in">${[...cats, 'Clássicos'].map((c) => `<button class="fchip ${c === shopCat ? 'on' : ''}" data-cat="${c}">${c}</button>`).join('')}</div>${shopCat === 'Clássicos' ? `<p class="hint">Estes já vêm com o lugar certo no jardim.</p><div class="list">${dec}</div>` : `<p class="hint">Escolha um enfeite e toque no gramado para dizer onde ele fica. Dá para mover, girar e guardar.</p>${deco}`}` : `<div class="list">${upg}</div>`}`, tab === 'decor' ? 'wide' : '');
    modal.querySelectorAll('[data-cat]').forEach((b) => (b.onclick = () => { click(); shopCat = b.dataset.cat; shop(tab); }));
    modal.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { click(); shop(b.dataset.tab); }));
    modal.querySelectorAll('[data-deco]').forEach((b) => (b.onclick = () => { click(); G.deco.buy(b.dataset.deco); }));
    modal.querySelectorAll('[data-style]').forEach((b) => (b.onclick = () => { click(); U.wardrobe(); }));
    modal.querySelectorAll('[data-buy]').forEach((b) => (b.onclick = () => { const [k, id] = b.dataset.buy.split(':'); if (k === 'd') G.buyDecor(id); else G.buyUpgrade(id); shop(tab); }));
  };
  let albKind = 'Flores';
  const album = (tab = 'flores') => {
    const G = U.game, S = G.state, lvl = G.level();
    const tabs = [['flores', 'Flores'], ['raras', 'Raridades'], ['bichos', 'Visitantes'], ['receitas', 'Receitas'], ['conq', 'Conquistas'], ['diario', 'Diário']].filter(([k]) => (k !== 'raras' || U.rareTab) && (k !== 'bichos' || U.critterTab));
    let body = '', count = '', chips = '';
    if (tab === 'flores') { const all = SPECIES_LIST.filter((s) => !s.hybrid), kind = (s) => (s.tree ? 'Árvores' : s.climber ? 'Trepadeiras' : s.veg ? 'Horta' : s.spots[0] === 'pond' ? 'Aquáticas' : s.foliage ? 'Folhagens' : 'Flores'), kinds = ['Flores', 'Folhagens', 'Horta', 'Árvores', 'Trepadeiras', 'Aquáticas'];
      count = `${all.filter((s) => S.album.includes(s.id)).length}/${all.length}`; if (!kinds.includes(albKind)) albKind = 'Flores'; const list = all.filter((s) => kind(s) === albKind);
      chips = `<div class="chipsrow in">${kinds.map((k) => { const of = all.filter((s) => kind(s) === k); return `<button class="fchip ${k === albKind ? 'on' : ''}" data-alb="${k}">${k}<i>${of.filter((s) => S.album.includes(s.id)).length}/${of.length}</i></button>`; }).join('')}</div>`;
      body = `${chips}<p class="hint">Cada espécie entra no álbum quando floresce pela primeira vez. Cuidando dela, ganha até três estrelas de mestre (${G.starsTotal()} até agora).</p><div class="albgrid">${list.map((s) => { const got = S.album.includes(s.id); const st = G.stars(s.id); return `<div class="alb ${got ? 'got' : ''}"><img alt="" ${TH(s.id)}>${st ? `<i class="stars">${'★'.repeat(st)}</i>` : ''}<b>${got ? s.name : s.lvl > lvl ? 'Nível ' + s.lvl : s.name}</b>${s.season != null ? `<em>${['primavera', 'verão', 'outono', 'inverno'][s.season]}</em>` : ''}</div>`; }).join('')}</div>`; }
    else if (tab === 'raras' && U.rareTab) { const r = U.rareTab(); count = r.count; body = r.html; }
    else if (tab === 'bichos' && U.critterTab) { const r = U.critterTab(); count = r.count; body = r.html; }
    else if (tab === 'receitas') { const done = RECIPES.filter((r) => (S.recipes || {})[r.id]); count = `${done.length}/${RECIPES.length}`;
      body = `<p class="hint">As receitas se fazem no fogão da cozinha, dentro de casa, com o que a horta e o pomar dão.</p><div class="orders">${RECIPES.filter((r) => lvl >= r.lvl || (S.recipes || {})[r.id]).map((r) => recipeCard(r, S, lvl, false)).join('')}</div>`; }
    else if (tab === 'conq') { const done = ACH.filter((a) => S.ach[a.id]).length; count = `${done}/${ACH.length}`;
      const shown = ACH.filter((a, i) => S.ach[a.id] || !ACH.slice(0, i).some((b) => b.id.replace(/\d+$/, '') === a.id.replace(/\d+$/, '') && !S.ach[b.id]));
      body = `<div class="list">${shown.map((a) => { const v = Math.min(a.goal, a.v(S, G)), ok = !!S.ach[a.id]; return `<div class="item ach ${ok ? 'own' : ''}"><div class="a-ic">${ICON(ok ? 'trophy' : 'trophy-off')}</div><div class="a-b"><b>${a.name}</b><small>${a.desc}</small><div class="q-r"><div class="bar ${ok ? 'c' : ''}"><i style="width:${Math.round((v / a.goal) * 100)}%"></i></div><span>${v}/${a.goal}</span><b>${ICON('coin')}${a.r}</b></div></div></div>`; }).join('')}</div>`; }
    else { count = `dia ${Math.max(1, S.days || 1)}`;
      body = S.log.length ? `<div class="diary">${S.log.slice().reverse().map((e) => `<div><span>Dia ${e.d}</span>${e.t}</div>`).join('')}</div>` : '<p class="hint">O diário da Eliane se escreve sozinho, conforme o jardim cresce.</p>'; }
    openModal(`<div class="p-h"><h2>${tab === 'diario' ? 'Diário da Eliane' : 'Álbum do jardim'}</h2><span class="wallet">${count}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <div class="tabs">${tabs.map(([k, t]) => `<button class="${tab === k ? 'on' : ''}" data-tab="${k}">${t}</button>`).join('')}</div>${body}`, 'wide');
    modal.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { click(); album(b.dataset.tab); }));
    modal.querySelectorAll('[data-alb]').forEach((b) => (b.onclick = () => { click(); albKind = b.dataset.alb; album(tab); }));
  };
  U.album = album;
  U.rareTab = () => { const S = U.game.state, H = U.game.sys.hybrids; return { count: `${H.filter((h) => S.hybrids.includes(h.id)).length}/${H.length}`,
    html: `<p class="hint">Quando duas flores diferentes florescem lado a lado, às vezes deixam uma semente especial. Recolha os presentes delas e fique de olho.</p><div class="list">${H.map((h) => { const got = S.hybrids.includes(h.id), [a, b] = h.hybrid.map((id) => SPECIES[id]);
      return `<div class="item rare ${got ? 'own' : ''}"><img class="r-th ${got ? '' : 'q'}" alt="" ${TH(h.id)}><div><b>${got ? h.name : '? ? ?'}</b><small>${got ? h.info : `Dizem que <i>${a.name}</i> e <i>${b.name}</i>, lado a lado, guardam um segredo.`}</small></div><div class="r-par"><img alt="" ${TH(a.id)}><span>+</span><img alt="" ${TH(b.id)}></div></div>`; }).join('')}</div>` }; };
  U.critterTab = () => { const S = U.game.state; return { count: `${S.seen.length}/${CRITTERS.length}`,
    html: `<p class="hint">As vizinhas passam para visitar. Converse, dê um presente da cesta e a amizade cresce.</p><div class="friends">${FRIENDS.map((f) => { const met = S.friends && S.friends[f.n] !== undefined, pt = met ? S.friends[f.n] : 0; return `<div class="friend ${met ? 'got' : ''}"><b>${met ? f.n : '? ? ?'}</b>${heartsHtml(heartsOf(pt))}<small>${met ? 'Gosta de ' + f.likes : 'Ainda não veio visitar'}</small></div>`; }).join('')}</div><p class="hint">Cada visitante chega sozinho quando o jardim tem aquilo de que ele gosta.</p><div class="albgrid crit">${CRITTERS.map((c) => { const got = S.seen.includes(c.id); return `<div class="alb ${got ? 'got' : ''}"><img alt="" ${TH('c:' + c.id)}><b>${got ? c.name : '? ? ?'}</b><small>${c.hint}</small></div>`; }).join('')}</div>` }; };
  U.rare = (h) => setTimeout(() => openModal(`<div class="rare-hero"><img alt="" ${TH(h.id)}></div><h2>Raridade descoberta!</h2><p><b>${h.name}</b>. ${h.info}</p><p class="hint">Ela já está entre as suas sementes.</p><div class="row"><button class="btn big" data-close>Que maravilha!</button></div>`, 'small center'), 600);
  U.seasonInfo = () => { const G = U.game, se = G.sys.season(), lvl = G.level();
    const fav = SPECIES_LIST.filter((s) => s.loves && s.loves.includes(se.id) && s.lvl <= lvl && (!s.hybrid || G.state.hybrids.includes(s.id))), only = SPECIES_LIST.filter((s) => s.season === se.id);
    const chip = (s) => `<span class="chip"><img alt="" ${TH(s.id)}>${s.name}</span>`;
    openModal(`<div class="p-h"><h2>${ICON(se.icon)} ${se.name}</h2><span class="wallet">dia ${se.day} de ${se.of}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>${se.line} ${se.left === 1 ? 'Amanhã a estação muda.' : `Faltam ${se.left} dias para a próxima estação.`}</p>
      ${only.length ? `<div class="sgroup"><b>Só nascem agora</b><div class="chips">${only.map(chip).join('')}</div></div>` : ''}
      <div class="sgroup"><b>Crescem mais rápido e rendem mais agora</b><div class="chips">${fav.length ? fav.slice(0, 18).map(chip).join('') : '<small>Suba de nível para conhecer as flores desta estação.</small>'}</div></div>
      <p class="hint">Nenhuma planta sofre fora da estação; ela só fica no ritmo normal.</p>`); };

  // ---------- painting the house and the fence ----------
  let styleGroup = null;
  U.style = () => {
    const G = U.game, S = G.state, lvl = G.level(), hx = (n) => '#' + n.toString(16).padStart(6, '0');
    const keys = Object.keys(STYLE); if (!keys.includes(styleGroup)) styleGroup = keys[0];
    const gchips = `<div class="chipsrow in">${keys.map((k) => `<button class="fchip ${k === styleGroup ? 'on' : ''}" data-grp="${k}">${STYLE[k].short || STYLE[k].name}</button>`).join('')}</div>`;
    const d = STYLE[styleGroup], cur = S.style[styleGroup] || d.opts[0][0];
    const groups = `<div class="sgroup"><div class="swatches">${d.opts.map((o, i) => { const own = i === 0 || S.style.own.includes(styleGroup + ':' + o[0]), need = (d.lv && d.lv[i]) || 1, locked = !own && lvl < need;
      return `<button class="sw ${cur === o[0] ? 'on' : ''} ${locked ? 'lk' : ''}" data-k="${styleGroup}" data-id="${o[0]}" title="${o[1]}" aria-label="${o[1]}"><i style="background:${hx(o[2])}"></i><small>${own ? o[1] : locked ? 'Nível ' + need : `${ICON('coin')}${d.price}`}</small></button>`; }).join('')}</div></div>`;
    openModal(`<div class="p-h"><h2>Pintar a casa</h2><span class="wallet">${ICON('coin')}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>${gchips}${groups}`, 'style');
    modal.querySelectorAll('.sw').forEach((b) => (b.onclick = () => { G.pickStyle(b.dataset.k, b.dataset.id); U.style(); }));
    modal.querySelectorAll('[data-grp]').forEach((b) => (b.onclick = () => { click(); styleGroup = b.dataset.grp; U.style(); }));
  };
  U.door = () => {
    openModal(`<h2>Casa da Eliane</h2><p>Lá dentro tem um mundo para arrumar: móveis, quadros, tapetes e muitos cantinhos para as plantas.</p>
      <div class="row"><button class="btn ghost" id="dr-paint">Pintar por fora</button><button class="btn big" id="dr-in">Entrar em casa</button></div>`, 'small center');
    $('#dr-paint').onclick = () => { click(); U.style(); }; $('#dr-in').onclick = () => { closeModal(); U.game.enterHouse && U.game.enterHouse(); };
  };
  // ---------- dressing room: she buys pieces; colour and print of what she owns are free ----------
  const fabricUrl = {}; let wTab = 'roupas', wSlot = {}, wPal = null;
  U.wardrobe = (tab) => {
    const G = U.game, S = G.state, lvl = G.level(), W = G.ward, hx = (n) => '#' + n.toString(16).padStart(6, '0'); if (tab) wTab = tab;
    const slots = Object.keys(WARDROBE).filter((k) => WARDROBE[k].tab === wTab); let slot = wSlot[wTab]; if (!slots.includes(slot)) slot = wSlot[wTab] = slots[0];
    const def = WARDROBE[slot], cur = W.cur(slot), look = W.look(slot);
    const card = (pc) => { const own = W.owns(slot, pc.id), on = cur === pc.id, locked = !own && lvl < pc.lvl;
      return `<button class="wcard ${on ? 'on' : ''} ${own ? 'own' : ''} ${locked ? 'lk' : ''}" data-id="${pc.id}" title="${pc.name}"><div class="th"><img alt="" ${TH('w:' + slot + ':' + pc.id)}></div><b>${pc.name}</b><span class="dprice ${own ? 'have' : ''}">${on ? 'Usando' : own ? 'Vestir' : locked ? 'Nível ' + pc.lvl : ICON('coin') + pc.price}</span></button>`; };
    const none = def.none ? `<button class="wcard ${cur == null ? 'on' : ''} own" data-id=""><div class="th"><i class="nonepic"></i></div><b>${def.none}</b><span class="dprice have">${cur == null ? 'Usando' : 'Tirar'}</span></button>` : '';
    // colours of the piece she is wearing in this section
    let tint = '';
    if (def.hair) tint = `<div class="wtint"><span>Cor do cabelo</span><div class="wpal on">${HAIR_COLORS.map((h) => `<button class="swc ${(S.tint.hair || 'natural') === h[0] ? 'on' : ''}" data-hair="${h[0]}" title="${h[1]}" aria-label="${h[1]}" style="background:rgb(${[0.6, 0.46, 0.34].map((v, i) => Math.min(255, Math.round(v * h[2][i] * 255))).join(',')})"></button>`).join('')}</div></div>`;
    else if (look && look.c != null && cur) { const key = (p) => { const k = p + (look.c || 0); fabricUrl[k] ??= fabricCanvas(p, look.c, {}).toDataURL(); return fabricUrl[k]; };
      const pal = (which, val) => `<div class="wpal on">${PALETTE.map((c) => `<button class="swc ${val === c ? 'on' : ''}" data-col="${c}" data-which="${which}" style="background:${hx(c)}" aria-label="Cor"></button>`).join('')}<label class="swc pick" title="Qualquer cor"><input type="color" data-which="${which}" value="${hx(val ?? 0xffffff)}" aria-label="Escolher qualquer cor"></label></div>`;
      tint = `<div class="wtint"><span>${look.name}: cor à vontade</span><div class="wbtns"><button class="wbtn ${wPal === 'c' ? 'on' : ''}" data-pal="c"><i style="background:${hx(look.c)}"></i>Cor</button>${def.two && def.by[cur].c2 != null ? `<button class="wbtn ${wPal === 'c2' ? 'on' : ''}" data-pal="c2"><i style="background:${hx(look.c2)}"></i>Detalhe</button>` : ''}${def.print ? `<button class="wbtn ${wPal === 'p' ? 'on' : ''}" data-pal="p"><i class="fab" style="background-image:url(${key(look.p)})"></i>Estampa</button>` : ''}</div>
        ${wPal === 'c' ? pal('c', look.c) : wPal === 'c2' && def.two ? pal('c2', look.c2) : wPal === 'p' && def.print ? `<div class="wpal on pat">${PATTERNS.map(([id, n]) => `<button class="swp ${look.p === id ? 'on' : ''}" data-pat="${id}" title="${n}" aria-label="${n}"><i class="fab" style="background-image:url(${key(id)})"></i><small>${n}</small></button>`).join('')}</div>` : ''}</div>`; }
    const sc = modal.querySelector('.panel.style .wgrid'), top = sc && U._wk === wTab + slot ? modal.querySelector('.panel.style').scrollTop : 0; U._wk = wTab + slot;
    openModal(`<div class="p-h"><h2>Guarda-roupa</h2><span class="wallet">${ICON('coin')}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <div class="tabs">${WTABS.map(([k, n]) => `<button class="${k === wTab ? 'on' : ''}" data-tab="${k}">${n}</button>`).join('')}</div>
      <div class="chipsrow in">${slots.map((k) => `<button class="fchip ${k === slot ? 'on' : ''}" data-slot="${k}">${WARDROBE[k].name}</button>`).join('')}</div>${tint}
      <div class="wgrid">${none}${def.list.map(card).join('')}</div>`, 'style ward');
    const np = modal.querySelector('.panel.style'); if (np) np.scrollTop = top; U.dressing = true;
    modal.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { click(); wPal = null; U.wardrobe(b.dataset.tab); }));
    modal.querySelectorAll('[data-slot]').forEach((b) => (b.onclick = () => { click(); wSlot[wTab] = b.dataset.slot; wPal = null; U.wardrobe(); }));
    modal.querySelectorAll('.wcard').forEach((b) => (b.onclick = () => { const id = b.dataset.id || null; if (id && !W.owns(slot, id)) { if (W.buy(slot, id)) wPal = null; } else W.put(slot, id); U.wardrobe(); }));
    modal.querySelectorAll('[data-pal]').forEach((b) => (b.onclick = () => { click(); wPal = wPal === b.dataset.pal ? null : b.dataset.pal; U.wardrobe(); }));
    modal.querySelectorAll('[data-col]').forEach((b) => (b.onclick = () => { click(); W.tint(slot, cur, { [b.dataset.which]: +b.dataset.col }); U.wardrobe(); }));
    modal.querySelectorAll('input[type=color]').forEach((b) => { b.oninput = () => W.tint(slot, cur, { [b.dataset.which]: parseInt(b.value.slice(1), 16) }); b.onchange = () => U.wardrobe(); });
    modal.querySelectorAll('[data-pat]').forEach((b) => (b.onclick = () => { click(); W.tint(slot, cur, { p: b.dataset.pat }); U.wardrobe(); }));
    modal.querySelectorAll('[data-hair]').forEach((b) => (b.onclick = () => { click(); W.hair(b.dataset.hair); U.wardrobe(); }));
  };
  // ---------- placing ornaments ----------
  const bar = $('#placebar');
  U.placeBar = (def, indoor) => { if (!def) { bar.classList.remove('on'); document.body.classList.remove('placing'); return; } document.body.classList.add('placing');
    bar.innerHTML = `<span>${indoor ? (def.kind === 'wall' ? 'Toque no chão, perto da parede onde vai ficar' : def.kind === 'top' ? 'Toque numa mesa, cômoda ou no chão' : 'Toque no chão para escolher o lugar') : 'Toque no gramado para escolher o lugar'}: <b>${def.name}</b></span><div>${indoor && def.kind === 'wall' ? '' : '<button class="btn ghost" id="pb-rot">Girar</button>'}<button class="btn ghost" id="pb-no">Cancelar</button><button class="btn" id="pb-ok">Colocar aqui</button></div>`; bar.classList.add('on');
    const pr = $('#pb-rot'); if (pr) pr.onclick = () => U.game.placer().rotate(); $('#pb-no').onclick = () => { click(); U.game.placer().cancel(); }; $('#pb-ok').onclick = () => U.game.placer().confirm(); };
  U.decoCard = (it) => { U.closeCards(); U.open = 'card';
    card.innerHTML = `<img class="c-th" alt="" ${TH('d:' + it.def.id)}><div class="c-b"><div class="c-n"><b>${it.def.name}</b><span>${ICON('flower')}+${it.def.beauty}</span></div><div class="c-row"><small style="width:auto;text-align:left">${it.def.info}</small></div>
      <div class="c-act"><button class="btn" data-a="move">Mover</button><button class="btn ghost" data-a="turn">Girar</button><button class="btn ghost" data-a="store">Guardar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`;
    card.querySelectorAll('button').forEach((b) => (b.onclick = () => { const a = b.dataset.a, D = U.game.deco; if (a === 'move') { click(); U.closeCards(); D.startMove(it); } else if (a === 'turn') D.turn(it); else if (a === 'store') D.store(it); else { click(); U.closeCards(); } }));
    card.classList.add('on'); };
  // ---------- inside the house ----------
  U.fade = (fn) => { const f = $('#fade'); f.classList.add('on'); setTimeout(() => { try { fn(); } finally { setTimeout(() => f.classList.remove('on'), 120); } }, 340); };
  U.setIndoors = (on) => { document.body.classList.toggle('indoors', on); $('#beauty-ic').setAttribute('href', on ? '#i-home' : '#i-flower'); $('#beauty-pill').title = on ? 'Aconchego da casa' : 'Beleza do jardim'; $('#b-shop').title = on ? 'Móveis e decoração' : 'Lojinha'; U.hud(); };
  const hx = (n) => '#' + n.toString(16).padStart(6, '0');
  const palette = (which, val) => `<div class="wpal on">${PALETTE.map((c) => `<button class="swc ${val === c ? 'on' : ''}" data-col="${c}" data-which="${which}" style="background:${hx(c)}" aria-label="Cor"></button>`).join('')}<label class="swc pick" title="Qualquer cor"><input type="color" data-which="${which}" value="${hx(val ?? 0xffffff)}" aria-label="Escolher qualquer cor"></label></div>`;
  let fTab = 'moveis', fCat = null, stKind = 'w'; const stUrl = {};
  const stPic = (kind, id, c) => { const k = kind + id + c; if (!stUrl[k]) { const src = kind === 'w' ? wallCanvas(id, c) : floorCanvas(id, c), cv = document.createElement('canvas'); cv.width = 120; cv.height = 90; cv.getContext('2d').drawImage(src, 0, kind === 'w' ? 150 : 0, 256, kind === 'w' ? 192 : 192, 0, 0, 120, 90); stUrl[k] = cv.toDataURL(); } return stUrl[k]; };
  U.furnShop = (tab) => {
    const G = U.game, S = G.state, SH = S.house, lvl = G.level(), home = G.home; if (tab) fTab = tab; let body = '';
    if (fTab === 'moveis') { const stored = Object.keys(SH.stored).filter((k) => SH.stored[k] > 0 && FURN_BY[k]), cats = [...CATS.filter((c) => FURN.some((f) => f.cat === c)), ...(stored.length ? ['Guardados'] : [])]; if (!cats.includes(fCat)) fCat = cats[0];
      const list = fCat === 'Guardados' ? stored.map((k) => FURN_BY[k]) : FURN.filter((f) => f.cat === fCat).sort((a, b) => a.price - b.price);
      body = `<div class="chipsrow in">${cats.map((c) => `<button class="fchip ${c === fCat ? 'on' : ''}" data-cat="${c}">${c}</button>`).join('')}</div>
        <div class="dgrid">${list.map((d) => { const have = SH.stored[d.id] || 0, placed = SH.items.filter((r) => r.k === d.id).length, locked = !have && lvl < d.lvl;
          return `<button class="dcard ${locked ? 'lk' : ''}" data-furn="${d.id}"><div class="th"><img alt="" ${TH('f:' + d.id)}>${placed ? `<em>${placed} em casa</em>` : ''}<em class="cz">+${d.comfort}</em></div><b>${d.name}</b><small>${d.info || ''}</small><span class="dprice ${have ? 'have' : ''}">${have ? `Colocar (${have} guardado${have > 1 ? 's' : ''})` : locked ? 'Nível ' + d.lvl : `${ICON('coin')}${d.price}`}</span></button>`; }).join('')}</div>`; }
    else if (fTab === 'paredes') { const r = home.roomOf(), st = home.H.style(r), cur = stKind === 'w' ? st.wall : st.floor, defs = stKind === 'w' ? WALLS : FLOORS, own = stKind === 'w' ? SH.ownW : SH.ownF;
      body = `<p class="hint">Você está ${r.id === 'sala' || r.id === 'cozinha' || r.id === 'biblioteca' ? 'na' : 'no'} <b>${r.name}</b>. Um estilo comprado serve para a casa inteira, em qualquer cor.</p>
        <div class="chipsrow in"><button class="fchip ${stKind === 'w' ? 'on' : ''}" data-stk="w">Paredes</button><button class="fchip ${stKind === 'f' ? 'on' : ''}" data-stk="f">Piso</button></div>
        ${r.glass && stKind === 'w' ? '<p class="hint">As paredes de fora deste cômodo são de vidro; o papel aparece nas paredes de dentro.</p>' : ''}
        <div class="wtint"><span>Cor ${stKind === 'w' ? 'da parede' : 'do piso'}</span>${palette('st', cur.c)}</div>
        <div class="dgrid">${defs.map((d) => { const has = own.includes(d.id), locked = !has && lvl < d.lvl; return `<button class="dcard stcard ${locked ? 'lk' : ''} ${cur.p === d.id ? 'on' : ''}" data-st="${d.id}"><div class="th"><i style="background-image:url(${stPic(stKind, d.id, cur.p === d.id ? cur.c : d.c)})"></i></div><b>${d.name}</b><span class="dprice ${has ? 'have' : ''}">${cur.p === d.id ? 'Em uso aqui' : has ? 'Usar aqui' : locked ? 'Nível ' + d.lvl : `${ICON('coin')}${d.price}`}</span></button>`; }).join('')}</div>`; }
    else { const here = home.roomOf(), can = home.H.buyable(); let cells = '';
      for (let gz = -2; gz <= 0; gz++) for (let gx = -1; gx <= 2; gx++) { const r = ROOMS.find((q) => q.gx === gx && q.gz === gz), own = SH.rooms.includes(r.id), buy = can.includes(r);
        cells += `<button class="croom ${own ? 'own' : buy ? 'can' : ''} ${r === here ? 'here' : ''}" data-room="${r.id}" ${own || !buy ? 'disabled' : ''} title="${r.desc}">${r.name}<small>${own ? `+${home.comfort(r.id)}` : buy ? (lvl < r.lvl ? 'Nível ' + r.lvl : ICON('coin') + r.cost) : ICON('lock')}</small></button>`; }
      body = `<p class="hint">A casa cresce cômodo por cômodo, sempre encostado num que você já tem. A porta da frente fica embaixo, na Sala.</p><div class="cmap">${cells}</div>
        <div class="list">${can.map((r) => `<div class="item"><div><b>${r.name}</b><small>${r.desc}</small></div><button class="btn" data-room="${r.id}" ${S.coins >= r.cost && lvl >= r.lvl ? '' : 'disabled'}>${lvl < r.lvl ? 'Nível ' + r.lvl : ICON('coin') + r.cost}</button></div>`).join('')}</div>`; }
    const sc = modal.querySelector('.panel.furn'), top = sc && U._fk === fTab + fCat + stKind ? sc.scrollTop : 0; U._fk = fTab + fCat + stKind;
    openModal(`<div class="p-h"><h2>A casa da Eliane</h2><span class="wallet">${ICON('coin')}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <div class="tabs"><button class="${fTab === 'moveis' ? 'on' : ''}" data-tab="moveis">Móveis</button><button class="${fTab === 'paredes' ? 'on' : ''}" data-tab="paredes">Paredes e piso</button><button class="${fTab === 'comodos' ? 'on' : ''}" data-tab="comodos">Cômodos</button></div>${body}`, 'wide furn');
    const np = modal.querySelector('.panel.furn'); if (np) np.scrollTop = top;
    modal.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { click(); U.furnShop(b.dataset.tab); }));
    modal.querySelectorAll('[data-cat]').forEach((b) => (b.onclick = () => { click(); fCat = b.dataset.cat; U.furnShop(); }));
    modal.querySelectorAll('[data-furn]').forEach((b) => (b.onclick = () => { click(); home.buy(b.dataset.furn); }));
    modal.querySelectorAll('[data-stk]').forEach((b) => (b.onclick = () => { click(); stKind = b.dataset.stk; U.furnShop(); }));
    modal.querySelectorAll('[data-st]').forEach((b) => (b.onclick = () => { home.style(stKind, home.roomOf().id, b.dataset.st); U.hud(); U.furnShop(); }));
    const stNow = () => { const st = home.H.style(home.roomOf()); return (stKind === 'w' ? st.wall : st.floor).p; };
    modal.querySelectorAll('[data-col]').forEach((b) => (b.onclick = () => { home.style(stKind, home.roomOf().id, stNow(), +b.dataset.col); U.furnShop(); }));
    modal.querySelectorAll('input[type=color]').forEach((b) => { b.onchange = () => { home.style(stKind, home.roomOf().id, stNow(), parseInt(b.value.slice(1), 16)); U.furnShop(); }; });
    modal.querySelectorAll('[data-room]').forEach((b) => (b.onclick = () => { click(); U.roomOffer(ROOMS.find((r) => r.id === b.dataset.room)); }));
  };
  U.roomOffer = (r) => { const G = U.game, lvl = G.level(); if (lvl < r.lvl) { U.toast(`${r.name} chega no nível ${r.lvl}`, 'warn'); return; } U.zoneOffer({ name: r.name, desc: r.desc, cost: r.cost }, G.state.coins >= r.cost, () => G.home.buyRoom(r.id), 'Construir este cômodo'); };
  // ---------- the stove: recipe book ----------
  let cookTab = 'pode';
  const recipeCard = (r, S, lvl, withBtn) => { const locked = lvl < r.lvl, okc = !locked && canCook(r, S.basket), made = (S.recipes || {})[r.id] || 0;
    return `<div class="order ${okc ? 'ok' : ''}"><div class="o-h"><b>${locked ? 'Receita do nível ' + r.lvl : r.name}</b><span>${locked ? '' : made ? `feita ${made} ${made === 1 ? 'vez' : 'vezes'}` : r.note}</span></div>
      <div class="o-items">${Object.keys(r.ing).map((k) => { const have = Math.min(r.ing[k], S.basket[k] || 0); return `<div class="o-it ${have >= r.ing[k] ? 'full' : ''}"><img alt="" ${TH(k)}><b>${have}/${r.ing[k]}</b><small>${SPECIES[k].name}</small></div>`; }).join('')}</div>
      <div class="o-f"><span class="rew">${ICON('coin')}${r.coins}</span>${withBtn ? `<button class="btn" data-cook="${r.id}" ${okc ? '' : 'disabled'}>Preparar</button>` : ''}</div></div>`; };
  U.cook = (stove) => { const G = U.game, S = G.state, lvl = G.level(), can = RECIPES.filter((r) => lvl >= r.lvl && canCook(r, S.basket)), known = RECIPES.filter((r) => lvl >= r.lvl), next = RECIPES.filter((r) => lvl < r.lvl).slice(0, 3);
    if (cookTab === 'pode' && !can.length) cookTab = 'todas'; const list = cookTab === 'pode' ? can : [...known, ...next], made = Object.keys(S.recipes || {}).length;
    openModal(`<div class="p-h"><h2>Caderno de receitas</h2><span class="wallet">${made}/${RECIPES.length}</span><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>Cada presente recolhido põe um ingrediente na cesta. Junte o que a receita pede e leve ao fogo.</p>
      <div class="chipsrow in"><button class="fchip ${cookTab === 'pode' ? 'on' : ''}" data-ct="pode">Dá para fazer agora<i>${can.length}</i></button><button class="fchip ${cookTab === 'todas' ? 'on' : ''}" data-ct="todas">Todas<i>${known.length}</i></button></div>
      <div class="orders">${list.map((r) => recipeCard(r, S, lvl, true)).join('') || '<p class="hint empty">Plante hortaliças e recolha os presentes delas: os ingredientes vão para a cesta.</p>'}</div>`, 'wide');
    modal.querySelectorAll('[data-ct]').forEach((b) => (b.onclick = () => { click(); cookTab = b.dataset.ct; U.cook(stove); }));
    modal.querySelectorAll('[data-cook]').forEach((b) => (b.onclick = () => { click(); G.home.cook(stove, b.dataset.cook); })); };
  let cardPal = false;
  U.furnCard = (it) => { U.closeCards(); U.open = 'card'; const home = U.game.home, d = it.def;
    const draw = () => { const use = home.canUse(it), c1 = it.rec.c1 ?? d.cols[0], c2 = it.rec.c2 ?? d.cols[1], two = d.cols[0] !== d.cols[1] || d.colN[1] !== 'Detalhe';
      card.innerHTML = `<img class="c-th" alt="" ${TH('f:' + d.id)}><div class="c-b"><div class="c-n"><b>${d.name}</b><span>${ICON('home')}+${d.comfort}</span></div>${cardPal ? '' : `<div class="c-row"><small style="width:auto;text-align:left">${d.info || ''}</small></div>`}
        ${cardPal ? `<div class="c-pal"><span>${d.colN[0]}</span>${palette('c1', c1)}${two ? `<span>${d.colN[1]}</span>${palette('c2', c2)}` : ''}</div>` : ''}
        <div class="c-act">${use ? `<button class="btn" data-a="use">${use}</button>` : ''}<button class="btn ${use ? 'ghost' : ''}" data-a="move">Mover</button>${d.kind === 'wall' ? '' : '<button class="btn ghost" data-a="turn">Girar</button>'}<button class="btn ghost ${cardPal ? 'on' : ''}" data-a="pal">Cores</button><button class="btn ghost" data-a="store">Guardar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`;
      card.querySelectorAll('button[data-a]').forEach((b) => (b.onclick = () => { const a = b.dataset.a; if (a === 'move') { click(); U.closeCards(); home.startMove(it); } else if (a === 'turn') home.turn(it); else if (a === 'store') home.store(it); else if (a === 'use') home.use(it); else if (a === 'pal') { click(); cardPal = !cardPal; draw(); } else { click(); U.closeCards(); } }));
      card.querySelectorAll('[data-col]').forEach((b) => (b.onclick = () => { click(); home.tint(it, b.dataset.which, +b.dataset.col); draw(); }));
      card.querySelectorAll('input[type=color]').forEach((b) => { b.onchange = () => { home.tint(it, b.dataset.which, parseInt(b.value.slice(1), 16)); draw(); }; }); };
    draw(); card.classList.add('on'); };
  // ---------- flower stall: neighbours' orders ----------
  U.orders = () => {
    const G = U.game, S = G.state, sys = G.sys;
    const chips = Object.keys(S.basket).filter((k) => S.basket[k] > 0 && SPECIES[k]).sort((a, b) => S.basket[b] - S.basket[a]);
    const cards = S.orders.map((o) => { const ok = sys.canDeliver(o);
      return `<div class="order ${ok ? 'ok' : ''}"><div class="o-h"><b>${o.who}</b><span>${o.why}</span></div>
        <div class="o-items">${o.items.map((it) => { const have = Math.min(it.n, S.basket[it.sp] || 0); return `<div class="o-it ${have >= it.n ? 'full' : ''}"><img alt="" ${TH(it.sp)}><b>${have}/${it.n}</b><small>${SPECIES[it.sp].name}</small></div>`; }).join('')}</div>
        <div class="o-f"><span class="rew">${ICON('coin')}${o.coins}${o.adubo ? ` <i>+ ${o.adubo} adubo</i>` : ''}</span><button class="btn ghost" data-no="${o.id}">Dispensar</button><button class="btn" data-go="${o.id}" ${ok ? '' : 'disabled'}>Entregar</button></div></div>`; }).join('');
    openModal(`<div class="p-h"><h2>Banquinha de flores</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>Cada presente recolhido põe uma flor na cesta. Junte as que os vizinhos pedem e entregue.</p>
      ${cards ? `<div class="orders">${cards}</div>` : `<p class="hint empty">${S.stats.collected ? 'Nenhum pedido agora. Os vizinhos passam por aqui de tempos em tempos.' : 'Recolha o primeiro presente de uma flor e os vizinhos começam a aparecer.'}</p>`}
      <div class="basket"><b>Sua cesta</b>${chips.length ? chips.map((k) => `<span class="chip"><img alt="" ${TH(k)}>${S.basket[k]}</span>`).join('') : '<small>vazia por enquanto</small>'}<span class="chip adubo" title="Adubo">${ICON('leaf')}${S.adubo} adubo</span></div>`);
    modal.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { if (sys.deliver(+b.dataset.go)) { U.hud(); U.orders(); } }));
    modal.querySelectorAll('[data-no]').forEach((b) => (b.onclick = () => { click(); if (b.dataset.sure) { sys.dismiss(+b.dataset.no); U.orders(); } else { b.dataset.sure = 1; b.textContent = 'Dispensar mesmo?'; } }));
  };
  // ---------- mailbox: the daily surprise ----------
  U.daily = () => {
    const G = U.game, S = G.state, sys = G.sys, ready = sys.dailyReady();
    const cur = ready ? (S.daily.streak % 7) : ((S.daily.streak - 1) % 7);
    const strip = DAILY.map((r, i) => `<div class="day ${i < cur || (!ready && i === cur) ? 'done' : ''} ${ready && i === cur ? 'now' : ''} ${r.big ? 'big' : ''}"><small>Dia ${i + 1}</small>${r.coins ? ICON('coin') : ICON('leaf')}<b>${r.coins ? '×' + Math.round(r.coins * (1 + G.level() * 0.2)) : r.adubo + ' adubo'}</b></div>`).join('');
    openModal(`<h2>Caixa de correio</h2><p>${ready ? 'Tem uma surpresa esperando por você hoje!' : 'A surpresa de hoje já foi aberta. Amanhã tem mais.'}</p><div class="days">${strip}</div>
      <p class="hint">Você já abriu ${S.daily.streak} ${S.daily.streak === 1 ? 'surpresa' : 'surpresas'}. A cada sete visitas vem um presente grande, sem pressa.</p>
      <div class="row"><button class="btn ghost" data-close>${ready ? 'Depois' : 'Fechar'}</button>${ready ? '<button class="btn big" id="d-open">Abrir a surpresa</button>' : ''}</div>`, 'small center');
    const b = $('#d-open'); if (b) b.onclick = () => { const r = sys.claimDaily(); if (r) { U.toast(`Surpresa do dia ${r.streak}: ${r.coins ? '+' + r.coins + ' moedas' : ''}${r.coins && r.adubo ? ' e ' : ''}${r.adubo ? '+' + r.adubo + ' adubo' : ''}`, 'good'); U.hud(); U.daily(); } };
  };
  // what changed since her last visit (shown once per big update)
  U.news = () => openModal(`<h2>Chegaram novidades!</h2><p>O jardim cresceu muito desde a última visita. Tudo o que você tinha continua aqui.</p>
    <div class="list">
      <div class="item"><div><b>Entre em casa</b><small>Toque na porta da frente. Lá dentro dá para mobiliar, pendurar quadros, trocar papel de parede e piso, construir cômodos e encher tudo de plantas.</small></div></div>
      <div class="item"><div><b>Guarda-roupa de verdade</b><small>Toque na Eliane: agora ela compra peças (saias, calças, vestidos, sapatos, chapéus) e escolhe a cor e a estampa de graça.</small></div></div>
      <div class="item"><div><b>Terreno grande</b><small>Depois da cerquinha antiga há horta gigante, estufa de entrar, bosque e campos de flores para abrir aos poucos.</small></div></div>
      <div class="item"><div><b>Centenas de plantas novas</b><small>Hortaliças, ervas, árvores frutíferas, orquídeas e plantas de dentro de casa.</small></div></div>
      <div class="item"><div><b>Sempre tem o que fazer</b><small>Três desejos novos a cada dia. As hortaliças agora se colhem e replantam, cada planta ganha estrelas de mestre, e a muda de uma planta retirada fica guardada para replantar de graça.</small></div></div>
      <div class="item"><div><b>Receitas e bichinhos</b><small>Cozinhe no fogão com o que a horta dá. Na lojinha, em “Criação”, há galinheiro, colmeia e composteira.</small></div></div>
    </div><div class="row"><button class="btn big" data-close>Que maravilha!</button></div>`, 'small center');
  U.achievement = (a) => { const t = el('div', 'toast ach', `${ICON('trophy')}<span><small>Conquista</small><b>${a.name}</b></span><i>${ICON('coin')}${a.r}</i>`); toasts.appendChild(t); while (toasts.children.length > 3) toasts.firstChild.remove(); setTimeout(() => t.classList.add('out'), 4600); setTimeout(() => t.remove(), 5100); };
  const settings = () => {
    const S = U.game.state.settings;
    const opt = (v, t, cur) => `<option value="${v}" ${cur === v ? 'selected' : ''}>${t}</option>`;
    openModal(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <label class="set" for="s-music"><span>Música</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${S.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${S.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${opt('auto', 'O dia passa sozinho', S.time)}${opt('dia', 'Sempre manhã', S.time)}${opt('tarde', 'Sempre entardecer', S.time)}${opt('noite', 'Sempre noite', S.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${opt('auto', 'Automática', S.quality)}${opt('alta', 'Alta', S.quality)}${opt('media', 'Média', S.quality)}${opt('baixa', 'Leve (para aparelhos simples)', S.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="howto save"><b>Seu jardim está guardado</b><p id="s-saved"></p>
        <div class="c-act"><button class="btn ghost" id="s-copy">Copiar código do jardim</button>${window.__WEB || window.__APP ? '<a class="btn ghost" id="s-file" download="meu-jardim.txt">Salvar em arquivo</a>' : ''}<button class="btn ghost" id="s-in">Trazer um jardim</button></div>
        <div id="s-box" hidden><textarea id="s-code" rows="3" placeholder="Cole aqui o código do jardim (começa com JARDIM1:)" aria-label="Código do jardim"></textarea><div class="c-act"><button class="btn" id="s-use">Usar este jardim</button></div></div>
        ${U.store && U.store.old ? `<div class="c-act"><button class="btn honey" id="s-old">Recuperar o jardim anterior</button></div>` : ''}<p id="s-msg" class="hint" role="status"></p></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recomeçar o jardim</button><button class="btn" data-close>Pronto</button></div>`, 'small');
    { const st = U.store, G = U.game, msg = (t) => { const m = $('#s-msg'); if (m) m.textContent = t; };
      G.save(true); const ago = st ? Math.max(0, Math.round((Date.now() - st.lastSaved) / 1000)) : 0;
      $('#s-saved').textContent = st && st.where.length ? `Ele se salva sozinho o tempo todo, neste aparelho${st.cloud ? ' e também na sua conta Claude' : ''}. Último salvamento: agora mesmo. Atualizações do jogo não apagam nada.` : 'Este navegador não está deixando o jogo guardar dados. Copie o código do jardim para não perder nada.';
      const code = () => toCode(G.state);
      $('#s-copy').onclick = async () => { click(); const c = code(); try { await navigator.clipboard.writeText(c); msg('Código copiado. Guarde num lugar seguro (uma mensagem para você mesma, por exemplo).'); } catch (e) { $('#s-box').hidden = false; $('#s-code').value = c; $('#s-code').select(); msg('Selecione e copie o código acima.'); } };
      const f = $('#s-file'); if (f) f.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(code());
      $('#s-in').onclick = () => { click(); $('#s-box').hidden = false; $('#s-code').value = ''; $('#s-code').focus(); };
      const adopt = async (s) => { G.save = () => {}; await st.adopt(s); location.reload(); };
      $('#s-use').onclick = () => { const s = fromCode($('#s-code').value); if (!s) { audio.sfx('error'); msg('Não reconheci esse código. Ele precisa começar com JARDIM1: e estar inteiro.'); return; } const b = $('#s-use'); if (b.dataset.sure) adopt(s); else { b.dataset.sure = 1; b.textContent = 'Trocar o jardim atual por este?'; } };
      const o = $('#s-old'); if (o) o.onclick = () => { if (o.dataset.sure) adopt(st.old); else { o.dataset.sure = 1; o.textContent = 'Trocar o jardim atual pelo anterior?'; } }; }
    const apply = () => { S.music = +$('#s-music').value; S.sfx = +$('#s-sfx').value; S.time = $('#s-time').value; const q = $('#s-q').value; if (q !== S.quality) { S.quality = q; U.onQuality && U.onQuality(q); } audio.setVolumes(S.music, S.sfx); U.game.save(); };
    ['#s-music', '#s-sfx', '#s-time', '#s-q'].forEach((id) => ($(id).oninput = $(id).onchange = apply));
    $('#s-reset').onclick = (e) => { const b = e.currentTarget; if (b.dataset.sure) { U.onReset && U.onReset(); } else { b.dataset.sure = 1; b.textContent = 'Apagar tudo e recomeçar?'; } };
  };
  // ---------- install on the computer ----------
  const install = () => {
    openModal(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na área de trabalho e no menu Iniciar. Baixa um .zip: abra e dê dois cliques em “Instalar Jardim do Sossego”. Começa um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo só: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirmação antes de salvar.</p>`, 'small');
    const msg = (t) => { const m = $('#dl-msg'); if (m) m.textContent = t; };
    modal.querySelectorAll('[data-dl]').forEach((b) => (b.onclick = async () => {
      click(); const all = modal.querySelectorAll('[data-dl]'); all.forEach((x) => (x.disabled = true)); msg('Preparando o arquivo…');
      try {
        const downloads = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
        if (!downloads) { msg('Por aqui não dá para baixar. Abra o jogo pelo link, no navegador do computador.'); return; }
        let data, filename;
        if (b.dataset.dl === 'win') { const r = await fetch('instalar/Jardim-do-Sossego-Windows.zip'); if (!r.ok) throw new Error('fetch'); data = await r.blob(); filename = 'Jardim-do-Sossego-Windows.zip'; }
        else { const r = await fetch('instalar/Jardim-do-Sossego.html'); if (!r.ok) throw new Error('fetch'); const t = await r.text(); U.game.save();
          const seed = 'window.__SAVE=' + JSON.stringify(U.game.state).replace(/</g, '\\u003c') + ';';
          data = new Blob([t.replace('/*__SAVE__*/', () => seed)]); filename = 'Jardim-do-Sossego.html'; }
        await downloads.save({ filename, data });
        msg(b.dataset.dl === 'win' ? 'Salvo! Abra o .zip e dê dois cliques no instalador.' : 'Salvo! Dois cliques no arquivo e o jardim abre.');
      } catch (e) { msg(e && e.code === 'declined' ? 'Tudo bem, fica para depois.' : e && e.code === 'rate_limited' ? 'Já existe um pedido de download aberto. Confirme ou feche-o primeiro.' : 'Não foi possível baixar agora. Tente de novo em instantes.'); }
      finally { all.forEach((x) => (x.disabled = false)); }
    }));
  };
  // hosted (self-updating) version: install as an app, or with the Windows installer
  const installWeb = () => {
    const ios = /iPhone|iPad|iPod/i.test(navigator.userAgent), standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    const win = /Windows/i.test(navigator.userAgent);
    openModal(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${ICON('x')}</button></div>
      <p>${standalone ? 'O jogo já está instalado neste aparelho.' : 'Instalado, o jogo ganha um ícone próprio, funciona sem internet e recebe as novidades sozinho.'}</p>
      <div class="list">
        ${standalone ? '' : `<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${ios ? 'No iPhone ou iPad: toque em Compartilhar e depois em “Adicionar à Tela de Início”.' : 'Instala como aplicativo, no celular ou no computador.'}</small></div>${ios ? '' : '<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${win && !standalone ? `<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na área de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>` : ''}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`, 'small');
    const go = $('#pwa-go');
    if (go) go.onclick = async () => { click(); const ev = window.__pwaPrompt;
      if (ev) { ev.prompt(); try { await ev.userChoice; } catch (e) {} window.__pwaPrompt = null; closeModal(); }
      else $('#pwa-how').textContent = 'Abra o menu do navegador (os três pontinhos) e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”.'; };
  };
  if (window.__WEB) $('#b-install').onclick = () => { click(); installWeb(); };
  else if (window.__APP || !window.__INSTALL) $('#b-install').hidden = true; else $('#b-install').onclick = () => { click(); install(); };
  $('#b-shop').onclick = () => { click(); if (U.game.inside) U.furnShop(); else shop(); };
  $('#b-exit').onclick = () => { click(); U.game.exitHouse(); };
  $('#b-album').onclick = () => { click(); album(); };
  $('#season').onclick = () => { click(); const se = U.game.sys.season(); U.seasonInfo ? U.seasonInfo() : U.toast(`${se.name}, dia ${se.day} de ${se.of}. ${se.line}`, 'info'); };
  $('#b-set').onclick = () => { click(); settings(); };
  $('#b-photo').onclick = () => { click(); document.body.classList.add('photo'); U.closeCards(); };
  $('#photo-exit').onclick = () => document.body.classList.remove('photo');

  // ---------- zone tags (locked areas) ----------
  const tagEls = {}, roomTags = {};
  U.initTags = (zones) => { for (const z of zones) { if (!z.cost) continue; const b = el('button', 'ztag', `${ICON('lock')}<small>${ICON('coin')}${z.cost}</small>`); b.title = z.name; b.setAttribute('aria-label', `${z.name}: ${z.cost} moedas`); b.onclick = () => { click(); U.game.offerZone(z.id); }; tags.appendChild(b); tagEls[z.id] = b; } };
  U.frame = (zones, V3) => {
    const S = U.game.state, inside = U.game.inside;
    for (const r of ROOMS) { let b = roomTags[r.id]; const show = inside && U.game.home.H.tags.includes(r); if (!show) { if (b) b.hidden = true; continue; }
      if (!b) { b = roomTags[r.id] = el('button', 'ztag rtag', `${ICON('home')}<small>${ICON('coin')}${r.cost}</small>`); b.title = r.name; b.setAttribute('aria-label', `${r.name}: ${r.cost} moedas`); b.onclick = () => { click(); U.roomOffer(r); }; tags.appendChild(b); }
      const p = project(new V3(r.cx, 0.6, r.cz)); b.hidden = !p.vis; if (p.vis) { b.style.transform = `translate(-50%,-100%) translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px)`; b.classList.toggle('can', S.coins >= r.cost && U.game.level() >= r.lvl); } }
    const gp = U.game.gp;
    for (const z of zones) { const b = tagEls[z.id]; if (!b) continue; if (inside || S.zones.includes(z.id) || Math.hypot(z.tag[0] - gp.x, z.tag[1] - gp.z) > 19) { b.hidden = true; continue; }
      const p = project(new V3(z.tag[0], z.id === 1 ? 2.25 : 1.75, z.tag[1])); b.hidden = !p.vis; if (p.vis) { b.style.transform = `translate(-50%,-100%) translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px)`; b.classList.toggle('can', S.coins >= z.cost); } }
    if (cardUpd && (U._ct = (U._ct || 0) + 1) % 20 === 0) cardUpd();
    U.sayTick(); if (!pumpThumbs() && thumbs.warm) thumbs.warm();
  };
  U.focus = () => {};
  return U;
}
