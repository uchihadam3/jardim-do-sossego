// The inside of Eliane's house: a doll's house she can walk in, enlarge room by room and furnish as she likes.
// It lives in its own scene. Rooms sit on a grid of cells; walls between two rooms she owns get a doorway.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { SB, propMat } from './world.js';
import { FURN_BY, buildFurn, ROOM_H } from './furncore.js';
import './furniture1.js';
import './furniture2.js';
import { createNav } from './nav.js';
import { mulberry, clamp, lerp, TAU, T, RY, mul } from './util.js';

const V3 = THREE.Vector3;
export const CW = 6.4, CD = 5.6, WT = 0.16, DOOR_W = 1.3, DOOR_H = 2.15, INDOOR_SPOTS = 180;
// The second floor is a map of its own, far from the ground floor (so everything stays flat: walking, furniture, walls), joined to it by the staircase.
export const FL_GZ = 40, FL_DZ = FL_GZ * CD, FL_H = 3.0;
// the staircase: a switchback in the back-left corner of the Sala (and the well it comes out of upstairs). Local to the room centre.
export const STAIR = { x0: -CW / 2 + WT, x1: -0.72, z0: -CD / 2 + WT, z1: -0.72, zA: -1.2, zB: -2.16, zM: -1.68, xT: -1.87, run: 0.23, rise: 0.25 };
// gx, gz: cell on the grid (the living room is 0,0; its front door looks south, +z)
export const ROOMS = [
  { id: 'sala', name: 'Sala', gx: 0, gz: 0, cost: 0, lvl: 1, desc: 'O coração da casa.' },
  { id: 'quarto', name: 'Quarto', gx: 0, gz: -1, cost: 0, lvl: 1, desc: 'Para sonhar com o jardim.' },
  { id: 'cozinha', name: 'Cozinha', gx: 1, gz: 0, cost: 900, lvl: 3, desc: 'Já vem com fogão, geladeira e pia. Cabe uma horta de temperos na janela.', kit: [['fogao_simples', -2.125, -2.33, 0], ['pia_simples', -1.25, -2.33, 0], ['geladeira_simples', 2.625, -2.3, 0]] },
  { id: 'banheiro', name: 'Banheiro', gx: 1, gz: -1, cost: 1600, lvl: 5, desc: 'Azulejos, banho quente e samambaias que adoram o vapor.', kit: [['vaso_sanitario', 2.5, -2.28, 0], ['pia_banheiro_simples', 1.5, -2.4, 0], ['tapetinho_banheiro', 2.0, -1.5, 0]], wall: ['azulejo', 0xcfe6ea], floor: ['ceramica', 0xe8e4da] },
  { id: 'inverno', name: 'Jardim de inverno', gx: -1, gz: 0, cost: 3500, lvl: 7, glass: true, desc: 'Paredes de vidro: aqui dentro as plantas crescem bem mais depressa.', floor: ['pedra', 0xc9c1b4] },
  { id: 'jantar', name: 'Sala de jantar', gx: 2, gz: 0, cost: 5200, lvl: 9, desc: 'Para a mesa grande e os almoços de domingo.' },
  { id: 'atelie', name: 'Ateliê', gx: -1, gz: -1, cost: 7500, lvl: 11, desc: 'Um cantinho para pintar, costurar e inventar.' },
  { id: 'biblioteca', name: 'Biblioteca', gx: 2, gz: -1, cost: 11000, lvl: 13, desc: 'Estantes até o teto e uma poltrona junto à janela.', floor: ['taco', 0xb08252] },
  { id: 'hospedes', name: 'Quarto de hóspedes', gx: 0, gz: -2, cost: 15000, lvl: 15, desc: 'Quem visita o jardim sempre quer ficar mais um dia.' },
  { id: 'musica', name: 'Sala de música', gx: 1, gz: -2, cost: 21000, lvl: 17, desc: 'Um piano pede uma sala só para ele.' },
  { id: 'solario', name: 'Solário das orquídeas', gx: -1, gz: -2, cost: 28000, lvl: 19, glass: true, desc: 'Outra sala de vidro, para as plantas mais preciosas.', floor: ['hidraulico', 0x7fa8a0] },
  { id: 'salao', name: 'Salão de festas', gx: 2, gz: -2, cost: 36000, lvl: 20, desc: 'O maior cômodo de todos, para dançar.', floor: ['marmore', 0xf2efe8] },
  // upstairs (up: 1): the same grid, forty rows away. NEW ROOMS GO AT THE END.
  { id: 'hall2', name: 'Segundo andar', up: 1, gx: 0, gz: FL_GZ, cost: 9000, lvl: 8, desc: 'Uma escada de madeira sobe da Sala para um andar inteiro novo, com mais sete cômodos para construir.' },
  { id: 'suite', name: 'Suíte', up: 1, gx: 0, gz: FL_GZ - 1, cost: 12000, lvl: 10, desc: 'O quarto dos sonhos, lá no alto, com vista para o jardim.' },
  { id: 'escritorio', name: 'Escritório', up: 1, gx: 1, gz: FL_GZ, cost: 14000, lvl: 11, desc: 'Para cuidar das contas do jardim e escrever cartas.', floor: ['taco', 0xb08252] },
  { id: 'closet', name: 'Closet', up: 1, gx: 1, gz: FL_GZ - 1, cost: 16000, lvl: 12, desc: 'Um cômodo inteiro só para as roupas e os sapatos.' },
  { id: 'banho2', name: 'Banheiro de cima', up: 1, gx: -1, gz: FL_GZ - 1, cost: 17000, lvl: 13, desc: 'Banho demorado com a janela aberta para as árvores.', wall: ['azulejo', 0xd8e6dc], floor: ['ceramica', 0xe8e4da] },
  { id: 'netos', name: 'Quarto das crianças', up: 1, gx: -1, gz: FL_GZ, cost: 19000, lvl: 14, desc: 'Para quando a criançada vem dormir na casa da vó.' },
  { id: 'leitura', name: 'Cantinho de leitura', up: 1, gx: 0, gz: FL_GZ - 2, cost: 24000, lvl: 16, desc: 'Uma poltrona, uma manta e a chuva lá fora.' },
  { id: 'terraco', name: 'Terraço envidraçado', up: 1, gx: 2, gz: FL_GZ, cost: 30000, lvl: 18, glass: true, desc: 'Vidro por todos os lados e o jardim inteiro lá embaixo.', floor: ['pedra', 0xc9c1b4] },
];
export const ROOM_BY = Object.fromEntries(ROOMS.map((r) => [r.id, r]));
for (const r of ROOMS) { r.cx = r.gx * CW; r.cz = r.gz * CD; }
const hexCss = (n) => '#' + n.toString(16).padStart(6, '0');
const mixCss = (a, b, t) => '#' + new THREE.Color(a).lerp(new THREE.Color(b), t).getHexString();

// ---------- wallpapers: a tile is 1.4 m wide and the full height of the wall. draw(g, W, H, c, r) ----------
const flower = (g, x, y, s, c, mid) => { g.fillStyle = c; for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU; g.beginPath(); g.arc(x + Math.cos(a) * s, y + Math.sin(a) * s, s * 0.85, 0, TAU); g.fill(); } g.fillStyle = mid; g.beginPath(); g.arc(x, y, s * 0.6, 0, TAU); g.fill(); };
export const WALLS = [
  { id: 'liso', name: 'Pintura lisa', price: 0, lvl: 1, c: 0xf3ead8, draw: () => {} },
  { id: 'listras', name: 'Listras', price: 180, lvl: 2, c: 0xe8d9c0, draw: (g, W, H, c) => { g.fillStyle = mixCss(c, 0xffffff, 0.45); for (let x = 0; x < W; x += W / 8) g.fillRect(x, 0, W / 16, H); } },
  { id: 'poa', name: 'Poá', price: 220, lvl: 3, c: 0xf2d4d8, draw: (g, W, H, c) => { g.fillStyle = mixCss(c, 0xffffff, 0.6); for (let j = 0; j < 20; j++) for (let i = 0; i < 8; i++) { g.beginPath(); g.arc((i + (j % 2) / 2 + 0.25) * (W / 8), (j + 0.5) * (H / 20), W / 44, 0, TAU); g.fill(); } } },
  { id: 'lambri', name: 'Lambri branco', price: 320, lvl: 4, c: 0xa8c4b8, draw: (g, W, H) => { const y = H * 0.62; g.fillStyle = '#f6f2ea'; g.fillRect(0, y, W, H - y); g.strokeStyle = 'rgba(120,110,95,0.35)'; g.lineWidth = 2; for (let x = 0; x <= W; x += W / 6) { g.beginPath(); g.moveTo(x, y + 8); g.lineTo(x, H); g.stroke(); } g.fillStyle = '#fffdf8'; g.fillRect(0, y - 4, W, 12); g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, y + 8, W, 3); } },
  { id: 'floral', name: 'Floral miúdo', price: 420, lvl: 5, c: 0xf4ecd4, draw: (g, W, H, c, r) => { const cs = ['#e88aa4', '#f2b84a', '#8ab0e0', '#ffffff']; for (let j = 0; j < 14; j++) for (let i = 0; i < 5; i++) { const x = (i + (j % 2) / 2 + 0.25) * (W / 5), y = (j + 0.5) * (H / 14); flower(g, x, y, W / 50, cs[(i + j * 3) % 4], '#f2c84a'); g.fillStyle = '#7fa86a'; g.beginPath(); g.ellipse(x + W / 30, y + W / 40, W / 46, W / 110, 0.6, 0, TAU); g.fill(); } } },
  { id: 'azulejo', name: 'Azulejos', price: 480, lvl: 5, c: 0xcfe6ea, draw: (g, W, H, c) => { const y0 = H * 0.42, n = 7, s = W / n; g.fillStyle = mixCss(c, 0xffffff, 0.55); g.fillRect(0, y0, W, H - y0); g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 3; for (let x = 0; x <= W; x += s) { g.beginPath(); g.moveTo(x, y0); g.lineTo(x, H); g.stroke(); } for (let y = y0; y <= H; y += s) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); } g.fillStyle = mixCss(c, 0x3f6a8a, 0.5); g.fillRect(0, y0 - 5, W, 9); } },
  { id: 'tijolinho', name: 'Tijolinho', price: 560, lvl: 6, c: 0xc98a6a, draw: (g, W, H, c, r) => { const bw = W / 5, bh = H / 28; g.fillStyle = mixCss(c, 0xf0e8dc, 0.75); g.fillRect(0, 0, W, H); for (let j = 0; j < 28; j++) for (let i = -1; i < 6; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.14); g.fillRect(i * bw + (j % 2) * bw / 2 + 2, j * bh + 2, bw - 4, bh - 4); } } },
  { id: 'losangos', name: 'Treliça', price: 620, lvl: 7, c: 0xd8e4c8, draw: (g, W, H, c) => { g.strokeStyle = mixCss(c, 0xffffff, 0.6); g.lineWidth = 4; const s = W / 4; for (let k = -12; k < 14; k++) { g.beginPath(); g.moveTo(k * s, 0); g.lineTo(k * s + H, H); g.moveTo(k * s, 0); g.lineTo(k * s - H, H); g.stroke(); } } },
  { id: 'madeira', name: 'Tábuas de madeira', price: 700, lvl: 8, c: 0xc99a5c, draw: (g, W, H, c, r) => { const n = 7; for (let i = 0; i < n; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.1); g.fillRect((i * W) / n, 0, W / n, H); g.fillStyle = 'rgba(60,40,20,0.25)'; g.fillRect((i * W) / n, 0, 2, H); for (let k = 0; k < 5; k++) { g.fillStyle = 'rgba(60,40,20,0.06)'; g.fillRect((i * W) / n + r() * (W / n), r() * H, 2, 40 + r() * 120); } } } },
  { id: 'folhagem', name: 'Folhagens', price: 880, lvl: 9, c: 0xe9efdc, draw: (g, W, H, c, r) => { for (let k = 0; k < 46; k++) { const x = r() * W, y = r() * H, a = r() * TAU, L = W / 9 + r() * W / 10; g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = ['#7fae6a', '#5a9a5a', '#9cc47a', '#4a8a5a'][k % 4]; g.globalAlpha = 0.85; g.beginPath(); g.ellipse(0, 0, L, L * 0.3, 0, 0, TAU); g.fill(); g.strokeStyle = 'rgba(255,255,255,0.4)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(-L, 0); g.lineTo(L, 0); g.stroke(); g.restore(); } } },
  { id: 'faixa', name: 'Meia parede com friso', price: 760, lvl: 10, c: 0x7fa8c8, draw: (g, W, H, c) => { const y = H * 0.55; g.fillStyle = mixCss(c, 0xffffff, 0.78); g.fillRect(0, 0, W, y); g.fillStyle = '#fffdf8'; g.fillRect(0, y - 7, W, 14); g.fillStyle = 'rgba(0,0,0,0.1)'; g.fillRect(0, y + 7, W, 3); } },
  { id: 'nuvens', name: 'Nuvens', price: 1100, lvl: 11, c: 0xbfe0f0, draw: (g, W, H, c, r) => { g.fillStyle = 'rgba(255,255,255,0.85)'; for (let k = 0; k < 9; k++) { const x = r() * W, y = r() * H * 0.9, s = W / 14 + r() * W / 16; for (const [dx, dy, q] of [[0, 0, 1], [s, 6, 0.8], [-s, 8, 0.75], [s * 0.5, -s * 0.5, 0.8]]) for (const ox of [-W, 0, W]) { g.beginPath(); g.arc(x + dx + ox, y + dy, s * q, 0, TAU); g.fill(); } } } },
  { id: 'estrelas', name: 'Céu estrelado', price: 1300, lvl: 12, c: 0x3f4a7a, draw: (g, W, H, c, r) => { for (let k = 0; k < 70; k++) { const x = r() * W, y = r() * H, s = 2 + r() * 5; g.fillStyle = r() < 0.3 ? '#ffe9a0' : '#ffffff'; g.globalAlpha = 0.5 + r() * 0.5; g.beginPath(); for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU - 1.57, rr = i % 2 ? s * 0.42 : s; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill(); } g.globalAlpha = 1; } },
  { id: 'damasco', name: 'Damasco', price: 1800, lvl: 14, c: 0xb8a070, draw: (g, W, H, c) => { g.fillStyle = mixCss(c, 0xffffff, 0.3); const sx = W / 3, sy = H / 6; for (let j = 0; j < 7; j++) for (let i = 0; i < 4; i++) { const x = (i + (j % 2) / 2) * sx, y = (j + 0.5) * sy; g.beginPath(); g.moveTo(x, y - sy * 0.42); g.bezierCurveTo(x + sx * 0.4, y - sy * 0.2, x + sx * 0.22, y + sy * 0.2, x, y + sy * 0.42); g.bezierCurveTo(x - sx * 0.22, y + sy * 0.2, x - sx * 0.4, y - sy * 0.2, x, y - sy * 0.42); g.fill(); g.beginPath(); g.arc(x + sx / 2, y, sx * 0.07, 0, TAU); g.fill(); } } },
  { id: 'rosas', name: 'Rosas inglesas', price: 2400, lvl: 16, c: 0xf6e8e0, draw: (g, W, H, c, r) => { for (let j = 0; j < 9; j++) for (let i = 0; i < 3; i++) { const x = (i + (j % 2) / 2 + 0.25) * (W / 3), y = (j + 0.5) * (H / 9); g.fillStyle = '#6a9a5a'; for (const a of [0.4, 2.2, 3.8]) { g.beginPath(); g.ellipse(x + Math.cos(a) * W / 14, y + Math.sin(a) * W / 14, W / 22, W / 50, a, 0, TAU); g.fill(); } for (let k = 5; k > 0; k--) { g.fillStyle = mixCss(0xd8486a, 0xffd0dc, k / 6); g.beginPath(); g.arc(x + Math.cos(k * 2.2) * k * 1.4, y + Math.sin(k * 2.2) * k * 1.4, (W / 17) * (k / 5), 0, TAU); g.fill(); } } } },
  { id: 'dourado', name: 'Painel nobre', price: 3600, lvl: 18, c: 0x5a7a6a, draw: (g, W, H, c) => { g.strokeStyle = '#e6c878'; g.lineWidth = 5; const y = H * 0.6; g.strokeRect(W * 0.08, H * 0.06, W * 0.84, y - H * 0.1); g.strokeRect(W * 0.08, y + H * 0.03, W * 0.84, H * 0.3); g.fillStyle = mixCss(c, 0x000000, 0.18); g.fillRect(0, y - 6, W, 12); g.fillStyle = '#e6c878'; g.fillRect(0, y - 2, W, 4); } },
];
// ---------- floors: a tile is 1.6 m x 1.6 m ----------
export const FLOORS = [
  { id: 'tabuas', name: 'Tábuas de pinho', price: 0, lvl: 1, c: 0xcda674, draw: (g, S, c, r) => { const n = 6; for (let i = 0; i < n; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.1); g.fillRect(0, (i * S) / n, S, S / n); g.fillStyle = 'rgba(70,45,20,0.3)'; g.fillRect(0, (i * S) / n, S, 2); const x = r() * S; g.fillRect(x, (i * S) / n, 2, S / n); for (let k = 0; k < 4; k++) { g.fillStyle = 'rgba(70,45,20,0.06)'; g.fillRect(r() * S, (i * S) / n + r() * (S / n), 30 + r() * 80, 2); } } } },
  { id: 'xadrez', name: 'Ladrilho xadrez', price: 260, lvl: 2, c: 0x3a3a44, draw: (g, S, c) => { const n = 4, s = S / n; g.fillStyle = '#f4f0e6'; g.fillRect(0, 0, S, S); g.fillStyle = hexCss(c); for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) if ((i + j) % 2) g.fillRect(i * s, j * s, s, s); } },
  { id: 'ceramica', name: 'Cerâmica', price: 320, lvl: 3, c: 0xe8e4da, draw: (g, S, c, r) => { const n = 3, s = S / n; for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.05); g.fillRect(i * s, j * s, s, s); } g.strokeStyle = 'rgba(120,110,100,0.5)'; g.lineWidth = 3; for (let k = 0; k <= n; k++) { g.beginPath(); g.moveTo(k * s, 0); g.lineTo(k * s, S); g.moveTo(0, k * s); g.lineTo(S, k * s); g.stroke(); } } },
  { id: 'taco', name: 'Taco espinha de peixe', price: 520, lvl: 5, c: 0xb08252, draw: (g, S, c, r) => { const n = 8, s = S / n; for (let j = -1; j < n + 1; j++) for (let i = 0; i < n; i++) { g.save(); g.translate(i * s + s / 2, j * s + (i % 2 ? s / 2 : 0) + s / 2); g.rotate(i % 2 ? Math.PI / 4 : -Math.PI / 4); g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.14); g.fillRect(-s * 0.72, -s * 0.34, s * 1.44, s * 0.68); g.strokeStyle = 'rgba(60,40,20,0.35)'; g.lineWidth = 1.5; g.strokeRect(-s * 0.72, -s * 0.34, s * 1.44, s * 0.68); g.restore(); } } },
  { id: 'pedra', name: 'Pedra', price: 600, lvl: 6, c: 0xc9c1b4, draw: (g, S, c, r) => { g.fillStyle = mixCss(c, 0x000000, 0.25); g.fillRect(0, 0, S, S); const n = 4, s = S / n; for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.12); const o = (j % 2) * s * 0.5; for (const ox of [0, -S]) { g.beginPath(); g.roundRect ? g.roundRect(i * s + o + ox + 3, j * s + 3, s - 6, s - 6, 9) : g.rect(i * s + o + ox + 3, j * s + 3, s - 6, s - 6); g.fill(); } } } },
  { id: 'carpete', name: 'Carpete', price: 440, lvl: 4, c: 0xb8a8c8, draw: (g, S, c, r) => { for (let k = 0; k < 2600; k++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.1); g.fillRect(r() * S, r() * S, 3, 3); } } },
  { id: 'cimento', name: 'Cimento queimado', price: 680, lvl: 7, c: 0xb8b6b0, draw: (g, S, c, r) => { for (let k = 0; k < 60; k++) { const x = r() * S, y = r() * S, s = 30 + r() * 90; const gr = g.createRadialGradient(x, y, 2, x, y, s); gr.addColorStop(0, r() < 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - s, y - s, s * 2, s * 2); } } },
  { id: 'colmeia', name: 'Ladrilho colmeia', price: 900, lvl: 9, c: 0xf2efe8, draw: (g, S, c, r) => { g.fillStyle = mixCss(c, 0x000000, 0.3); g.fillRect(0, 0, S, S); const n = 6, w = S / n, h = w * 0.866; for (let j = -1; j < S / h + 1; j++) for (let i = -1; i < n + 1; i++) { const x = i * w + (j % 2 ? w / 2 : 0), y = j * h; g.fillStyle = r() < 0.12 ? mixCss(c, 0x6a9ab0, 0.6) : mixCss(c, 0xffffff, r() * 0.2); g.beginPath(); for (let k = 0; k < 6; k++) { const a = (k / 6) * TAU + 0.5236; g.lineTo(x + Math.cos(a) * w * 0.54, y + Math.sin(a) * w * 0.54); } g.fill(); } } },
  { id: 'rustico', name: 'Tábua larga rústica', price: 1100, lvl: 10, c: 0x8a6244, draw: (g, S, c, r) => { const n = 4; for (let i = 0; i < n; i++) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.14); g.fillRect(0, (i * S) / n, S, S / n); g.fillStyle = 'rgba(30,20,10,0.4)'; g.fillRect(0, (i * S) / n, S, 3); for (let k = 0; k < 2; k++) { g.fillStyle = 'rgba(40,25,10,0.3)'; g.beginPath(); g.ellipse(r() * S, (i + 0.5) * (S / n), 7, 4, 0, 0, TAU); g.fill(); } } } },
  { id: 'hidraulico', name: 'Ladrilho hidráulico', price: 1500, lvl: 12, c: 0x7fa8a0, draw: (g, S, c) => { const n = 4, s = S / n; g.fillStyle = '#f4efe2'; g.fillRect(0, 0, S, S); for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const x = i * s + s / 2, y = j * s + s / 2; g.fillStyle = hexCss(c); g.beginPath(); for (let k = 0; k < 8; k++) { const a = (k / 8) * TAU, rr = k % 2 ? s * 0.2 : s * 0.46; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill(); g.fillStyle = '#e8b84a'; g.beginPath(); g.arc(x, y, s * 0.1, 0, TAU); g.fill(); g.fillStyle = mixCss(c, 0x000000, 0.3); for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { g.beginPath(); g.arc(x + (dx * s) / 2, y + (dy * s) / 2, s * 0.13, 0, TAU); g.fill(); } g.strokeStyle = 'rgba(90,80,70,0.4)'; g.lineWidth = 2; g.strokeRect(i * s, j * s, s, s); } } },
  { id: 'tatame', name: 'Tatame', price: 1300, lvl: 13, c: 0xc8c088, draw: (g, S, c, r) => { for (let y = 0; y < S; y += 3) { g.fillStyle = mixCss(c, r() < 0.5 ? 0x000000 : 0xffffff, r() * 0.08); g.fillRect(0, y, S, 3); } g.fillStyle = '#3f5a4a'; g.fillRect(0, 0, S, 9); g.fillRect(0, S / 2 - 4, S, 9); g.fillRect(0, 0, 9, S / 2); g.fillRect(S / 2 - 4, S / 2, 9, S / 2); } },
  { id: 'marmore', name: 'Mármore', price: 2600, lvl: 16, c: 0xf2efe8, draw: (g, S, c, r) => { g.strokeStyle = 'rgba(120,120,130,0.25)'; for (let k = 0; k < 14; k++) { g.lineWidth = 1 + r() * 3; g.beginPath(); let x = r() * S, y = 0; g.moveTo(x, y); while (y < S) { x += (r() - 0.5) * 60; y += 20 + r() * 40; g.lineTo(x, y); } g.stroke(); } g.strokeStyle = 'rgba(150,150,160,0.5)'; g.lineWidth = 2; g.strokeRect(0, 0, S, S); g.beginPath(); g.moveTo(S / 2, 0); g.lineTo(S / 2, S); g.moveTo(0, S / 2); g.lineTo(S, S / 2); g.stroke(); } },
];
export const WALL_BY = Object.fromEntries(WALLS.map((w) => [w.id, w])), FLOOR_BY = Object.fromEntries(FLOORS.map((w) => [w.id, w]));
const texCache = new Map();
export function wallCanvas(id, c) { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 512; const g = cv.getContext('2d'); g.fillStyle = hexCss(c); g.fillRect(0, 0, 256, 512); (WALL_BY[id] || WALLS[0]).draw(g, 256, 512, c, mulberry(7)); return cv; }
export function floorCanvas(id, c) { const cv = document.createElement('canvas'); cv.width = cv.height = 256; const g = cv.getContext('2d'); g.fillStyle = hexCss(c); g.fillRect(0, 0, 256, 256); (FLOOR_BY[id] || FLOORS[0]).draw(g, 256, c, mulberry(11)); return cv; }
const tex = (kind, id, c) => { const key = kind + id + c; let t = texCache.get(key); if (!t) { t = new THREE.CanvasTexture(kind === 'w' ? wallCanvas(id, c) : floorCanvas(id, c)); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; texCache.set(key, t); } return t; };

// side: 0 north, 1 east, 2 south, 3 west. A wall's own frame: x runs along it, y up, z points into the room.
const SIDE = [{ dx: 0, dz: -1, ry: 0, len: CW }, { dx: 1, dz: 0, ry: -Math.PI / 2, len: CD }, { dx: 0, dz: 1, ry: Math.PI, len: CW }, { dx: -1, dz: 0, ry: Math.PI / 2, len: CD }];
const quads = (list, len) => { const pos = [], uv = [], idx = []; for (const [x0, x1, y0, y1] of list) { const s = pos.length / 3; pos.push(x0, y0, 0, x1, y0, 0, x1, y1, 0, x0, y1, 0); for (const [x, y] of [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]) uv.push((x + len / 2) / 1.4, y / ROOM_H); idx.push(s, s + 1, s + 2, s, s + 2, s + 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g; };

// The staircase. (ox, oy, oz) = centre of its room at floor level; `stub` adds the bit of upper floor it reaches on the ground map.
function buildStairs(sb, ox, oy, oz, stub) {
  const WOODC = 0x9a6a44, WHITE = 0xfbf6ec, RUG = 0xa8434a, { x0, x1, z0, z1, zA, zB, zM, xT, run, rise } = STAIR, lw = 0.94, ly = 6 * rise, slope = Math.atan2(rise, run);
  const B = (w, h, d, x, y, z, c, rot) => sb.box(w, h, d, ox + x, oy + y, oz + z, c, rot, 0), RZm = (a) => new THREE.Matrix4().makeRotationZ(a);
  const post = (x, y, z, h = 1.12) => { B(0.11, h, 0.11, x, y + h / 2, z, WHITE); B(0.15, 0.04, 0.15, x, y + h + 0.02, z, WHITE); sb.sph(0.07, ox + x, oy + y + h + 0.1, oz + z, WOODC, 1, 1, 1, 8, 0); };
  for (let i = 0; i < 5; i++) { const x = x1 - (i + 0.5) * run, y = (i + 1) * rise; B(run, y, lw, x, y / 2, zA, WHITE); B(run + 0.035, 0.045, lw + 0.03, x + 0.017, y + 0.022, zA, WOODC); B(run + 0.037, 0.012, 0.52, x + 0.017, y + 0.05, zA, RUG); B(0.035, 0.86, 0.035, x, y + 0.045 + 0.43, z1 - 0.05, WHITE); }
  B(xT - x0, ly, z1 - z0, (x0 + xT) / 2, ly / 2, (z0 + z1) / 2, WHITE); B(xT - x0 + 0.03, 0.045, z1 - z0 + 0.03, (x0 + xT) / 2 + 0.015, ly + 0.022, (z0 + z1) / 2, WOODC); B(0.56, 0.012, z1 - z0 - 0.5, (x0 + xT) / 2, ly + 0.05, (z0 + z1) / 2, RUG);
  for (let i = 0; i < 5; i++) { const x = xT + (i + 0.5) * run, y = ly + (i + 1) * rise; B(run, y, lw, x, y / 2, zB, WHITE); B(run + 0.035, 0.045, lw + 0.03, x - 0.017, y + 0.022, zB, WOODC); B(run + 0.037, 0.012, 0.52, x - 0.017, y + 0.05, zB, RUG); B(0.035, 0.86, 0.035, x, y + 0.045 + 0.43, zM - 0.03, WHITE); }
  // handrails: up the first flight, along the landing, up the second flight
  B(5 * Math.hypot(run, rise) + 0.12, 0.06, 0.075, x1 - 2.5 * run, 3 * rise + 0.045 + 0.89, z1 - 0.05, WOODC, RZm(-slope));
  B(xT - x0, 0.06, 0.075, (x0 + xT) / 2, ly + 0.96, z1 - 0.05, WOODC); for (let x = x0 + 0.14; x < xT - 0.08; x += 0.17) B(0.035, 0.9, 0.035, x, ly + 0.045 + 0.45, z1 - 0.05, WHITE);
  B(5 * Math.hypot(run, rise) + 0.12, 0.06, 0.075, xT + 2.5 * run, ly + 3 * rise + 0.045 + 0.89, zM - 0.03, WOODC, RZm(slope));
  post(x1 + 0.03, 0, z1 - 0.05, 1.2); post(xT, ly, z1 - 0.05, 1.06); post(xT, ly, zM - 0.03, 1.06);
  // panelling on the side that faces the room
  for (let k = 0; k < 3; k++) B(0.3, 0.6, 0.012, x0 + 0.3 + k * 0.36, 0.7, z1 + 0.006, 0xf1eadc);
  B(xT - x0, 0.1, 0.02, (x0 + xT) / 2, 0.05, z1 + 0.01, WHITE);
  if (stub) { B(0.9, 0.12, lw + 0.06, x1 + 0.45, FL_H - 0.06, zB, WOODC); B(0.9, 0.06, 0.075, x1 + 0.45, FL_H + 0.96, zM - 0.03, WOODC); for (let x = x1 + 0.1; x < x1 + 0.9; x += 0.17) B(0.035, 0.9, 0.035, x, FL_H + 0.45, zM - 0.03, WHITE); post(x1 + 0.9, FL_H, zM - 0.03, 1.06); }
}
// a floor with the stairwell cut out of its back-left corner (same texture mapping as a whole floor)
function floorWithWell() { const { x1, z1 } = STAIR, parts = [[x1, CW / 2, -CD / 2, CD / 2], [-CW / 2, x1, z1, CD / 2]], gs = [];
  for (const [a, b, c, d] of parts) { const g = new THREE.PlaneGeometry(b - a, d - c), uv = g.attributes.uv, pos = g.attributes.position; g.translate((a + b) / 2, -(c + d) / 2, 0); for (let i = 0; i < pos.count; i++) uv.setXY(i, (pos.getX(i) + CW / 2) / CW, (pos.getY(i) + CD / 2) / CD); gs.push(g); }
  return mergeGeometries(gs); }

export function createHouse() {
  const scene = new THREE.Scene(), H = { scene, items: [], rooms: [], walls: [], spots: [], tags: [] };
  scene.background = new THREE.Color(0xcfe3ee); scene.fog = new THREE.Fog(0xcfe3ee, 70, 150); // the other floor is far away and out of sight
  const hemi = new THREE.HemisphereLight(0xfff6e8, 0xa89a88, 1.05); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0dc, 1.7); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03; scene.add(sun, sun.target);
  const lamps = [0, 1, 2].map(() => { const l = new THREE.PointLight(0xffc888, 0, 7.5, 1.6); scene.add(l); return l; });
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(90, 40), new THREE.MeshStandardMaterial({ color: 0x86ad62, roughness: 1 })); lawn.rotation.x = -Math.PI / 2; lawn.position.y = -0.06; lawn.receiveShadow = true; scene.add(lawn);
  const shell = new THREE.Group(); scene.add(shell);
  const pickMat = new THREE.MeshBasicMaterial({ visible: false }), glassWall = new THREE.MeshStandardMaterial({ color: 0xcfeaf2, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false });
  const paneMat = new THREE.MeshStandardMaterial({ color: 0xbfe2f4, emissive: 0xbfe2f4, emissiveIntensity: 0.6, roughness: 0.2 });
  let S = null, own = new Set();
  const cellRoom = (gx, gz) => ROOMS.find((r) => r.gx === gx && r.gz === gz), has = (r) => !!r && own.has(r.id);
  H.owned = (id) => own.has(id);
  H.roomAt = (x, z) => { const r = cellRoom(Math.round(x / CW), Math.round(z / CD)); return has(r) ? r : null; };
  H.neighbour = (r, side) => cellRoom(r.gx + SIDE[side].dx, r.gz + SIDE[side].dz);
  H.buyable = () => ROOMS.filter((r) => !own.has(r.id) && (r.id === 'hall2' || [0, 1, 2, 3].some((s) => has(H.neighbour(r, s)))));
  H.upAt = (z) => z > FL_DZ / 2; H.stairs = () => own.has('hall2');
  // the corner the staircase takes on each floor, and the bit in front of it that must stay clear
  const stairRects = () => (own.has('hall2') ? [[STAIR.x0 - WT, STAIR.x1, STAIR.z0 - WT, STAIR.z1], [STAIR.x0 - WT, STAIR.x1, FL_DZ + STAIR.z0 - WT, FL_DZ + STAIR.z1]] : []);
  const stairWays = () => (own.has('hall2') ? [[STAIR.x1, STAIR.x1 + 0.62, STAIR.zM, STAIR.z1], [STAIR.x1, STAIR.x1 + 0.62, FL_DZ + STAIR.z0, FL_DZ + STAIR.zM]] : []);
  const inStairs = (x, z, pad = 0) => stairRects().some((o) => x > o[0] - pad && x < o[1] + pad && z > o[2] - pad && z < o[3] + pad);
  // which floor is on show: the lawn, the sun and the shadows move with it
  H.level = 0; H.floors = [[0, 0, 0, 0], [0, 0, 0, 0]];
  H.setLevel = (lv, force) => { if (lv === H.level && !force) return; H.level = lv; const b = H.floors[lv], ok = b[0] < b[1], cx = ok ? (b[0] + b[1]) / 2 : 0, cz = ok ? (b[2] + b[3]) / 2 : lv * FL_DZ, ext = (ok ? Math.max(b[1] - b[0], b[3] - b[2]) / 2 : 4) + 3;
    H.bounds = ok ? b : [-CW / 2, CW / 2, lv * FL_DZ - CD / 2, lv * FL_DZ + CD / 2]; lawn.position.set(cx, lv ? -FL_H - 0.06 : -0.06, cz);
    sun.position.set(cx + 7, 14, cz + 9); sun.target.position.set(cx, 0, cz); sun.target.updateMatrixWorld(); const sc = sun.shadow.camera; sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 1; sc.far = 50; sc.updateProjectionMatrix(); };
  const wallOf = (rid, side) => H.walls.find((w) => w.room.id === rid && w.side === side);
  H.wallOf = wallOf;
  H.style = (r) => ({ wall: (S.walls[r.id] ||= { p: (r.wall || ['liso'])[0], c: (r.wall || [0, 0xf3ead8])[1] ?? 0xf3ead8 }), floor: (S.floors[r.id] ||= { p: (r.floor || ['tabuas'])[0], c: (r.floor || [0, 0xcda674])[1] ?? 0xcda674 }) });

  // ----- the shell: floors, walls, doorways, windows -----
  H.rebuild = () => {
    for (const w of H.walls) for (const it of H.items) if (it.wall === w) w.group.remove(it.group, it.pick);
    shell.traverse((o) => { if (o.isMesh && o.geometry && !o.userData.keep) o.geometry.dispose(); }); shell.clear(); H.walls.length = 0; H.rooms.length = 0;
    own = new Set(S.rooms); const sb = new SB(41), WOOD = 0xb08252, TRIM = 0xfbf6ec, bb = [[1e9, -1e9, 1e9, -1e9], [1e9, -1e9, 1e9, -1e9]];
    for (const r of ROOMS) { if (!own.has(r.id)) continue; const st = H.style(r), b = bb[r.up ? 1 : 0]; H.rooms.push(r); b[0] = Math.min(b[0], r.cx - CW / 2); b[1] = Math.max(b[1], r.cx + CW / 2); b[2] = Math.min(b[2], r.cz - CD / 2); b[3] = Math.max(b[3], r.cz + CD / 2);
      if (r.up) { const EXT = 0xefe6d2; // the storey underneath, so the upper floor does not hang in the air
        if (r.id === 'hall2') { const { x0: sx0, x1: sx1, z1: sz1 } = STAIR, y = -FL_H / 2 - 0.03; sb.box(CW / 2 - sx1, FL_H, CD, r.cx + (sx1 + CW / 2) / 2, y, r.cz, EXT, null, 0); sb.box(sx1 + CW / 2, FL_H, CD / 2 - sz1, r.cx + (sx1 - CW / 2) / 2, y, r.cz + (sz1 + CD / 2) / 2, EXT, null, 0);
          sb.box(sx1 + CW / 2, FL_H, WT, r.cx + (sx1 - CW / 2) / 2, y, r.cz - CD / 2 + WT / 2, EXT, null, 0); sb.box(WT, FL_H, sz1 + CD / 2, r.cx - CW / 2 + WT / 2, y, r.cz + (sz1 - CD / 2) / 2, EXT, null, 0); sb.box(sx1 - sx0, 0.04, sz1 + CD / 2 - WT, r.cx + (sx0 + sx1) / 2, -FL_H + 0.02, r.cz + (sz1 - CD / 2 + WT) / 2, 0xb98a5c, null, 0);
          buildStairs(sb, r.cx, -FL_H, r.cz, false);
          // the railing round the well
          const rail = (xa, za, xb, zb) => { const L = Math.hypot(xb - xa, zb - za), along = Math.abs(xb - xa) > Math.abs(zb - za); sb.box(along ? L : 0.075, 0.06, along ? 0.075 : L, r.cx + (xa + xb) / 2, 0.96, r.cz + (za + zb) / 2, 0x9a6a44, null, 0); for (let k = 0.12; k < L - 0.05; k += 0.17) sb.box(0.035, 0.93, 0.035, r.cx + xa + ((xb - xa) * k) / L, 0.465, r.cz + za + ((zb - za) * k) / L, TRIM, null, 0); };
          rail(sx0, sz1 + 0.05, sx1 + 0.05, sz1 + 0.05); rail(sx1 + 0.05, STAIR.zM, sx1 + 0.05, sz1 + 0.05); for (const [px, pz] of [[sx1 + 0.05, sz1 + 0.05], [sx1 + 0.05, STAIR.zM], [sx0 + 0.06, sz1 + 0.05]]) { sb.box(0.11, 1.08, 0.11, r.cx + px, 0.54, r.cz + pz, TRIM, null, 0); sb.sph(0.07, r.cx + px, 1.17, r.cz + pz, 0x9a6a44, 1, 1, 1, 8, 0); } }
        else sb.box(CW, FL_H, CD, r.cx, -FL_H / 2 - 0.03, r.cz, EXT, null, 0);
        for (let side = 0; side < 4; side++) if (!has(H.neighbour(r, side))) { const sd = SIDE[side], R = new THREE.Matrix4().makeRotationY(sd.ry), P = new V3(r.cx + sd.dx * (CW / 2 + 0.012), -FL_H + 1.5, r.cz + sd.dz * (CD / 2 + 0.012)); // windows of the floor below, seen from outside
          for (const t of [-1.6, 1.6]) { const v = new V3(t, 0, 0).applyMatrix4(R).add(P); sb.box(1.25, 1.2, 0.03, v.x, v.y, v.z, TRIM, R, 0); sb.box(1.05, 1.0, 0.04, v.x, v.y, v.z, 0x9cc4dd, R, 0); } } }
      else if (r.id === 'sala' && own.has('hall2')) buildStairs(sb, r.cx, 0, r.cz, true);
      const fl = new THREE.Mesh(r.id === 'hall2' ? floorWithWell() : new THREE.PlaneGeometry(CW, CD), new THREE.MeshStandardMaterial({ map: tex('f', st.floor.p, st.floor.c).clone(), roughness: st.floor.p === 'marmore' || st.floor.p === 'ceramica' ? 0.35 : 0.85 }));
      fl.material.map.repeat.set(CW / 1.6, CD / 1.6); fl.material.map.needsUpdate = true; fl.rotation.x = -Math.PI / 2; fl.position.set(r.cx, 0, r.cz); fl.receiveShadow = true; fl.userData.floor = r; shell.add(fl); r.floorMesh = fl;
      for (let side = 0; side < 4; side++) { const sd = SIDE[side], nb = H.neighbour(r, side), door = has(nb), entrance = r.id === 'sala' && side === 2, len = sd.len, glass = r.glass && !door && !entrance;
        const g = new THREE.Group(); g.position.set(r.cx + sd.dx * (CW / 2 - WT / 2), 0, r.cz + sd.dz * (CD / 2 - WT / 2)); g.rotation.y = sd.ry; shell.add(g);
        const w = { room: r, side, group: g, len, door: door || entrance, window: !door && !entrance && !glass, glass, n: new V3(-sd.dx, 0, -sd.dz), p: g.position.clone() }; H.walls.push(w);
        const hw = DOOR_W / 2, list = w.door ? [[-len / 2, -hw, 0, ROOM_H], [hw, len / 2, 0, ROOM_H], [-hw, hw, DOOR_H, ROOM_H]] : [[-len / 2, len / 2, 0, ROOM_H]];
        if (glass) { const m = new THREE.Mesh(new THREE.PlaneGeometry(len, ROOM_H - 0.5), glassWall); m.position.y = 0.5 + (ROOM_H - 0.5) / 2; m.renderOrder = 3; g.add(m); const wb = new SB(42);
          wb.box(len, 0.5, 0.1, 0, 0.25, -0.03, 0xb5745a); for (let i = 0; i <= 4; i++) wb.box(0.06, ROOM_H - 0.5, 0.06, -len / 2 + 0.03 + ((len - 0.06) * i) / 4, 0.5 + (ROOM_H - 0.5) / 2, 0, TRIM); wb.box(len, 0.06, 0.06, 0, ROOM_H - 0.03, 0, TRIM); wb.box(len, 0.05, 0.05, 0, 1.6, 0, TRIM); g.add(wb.mesh(propMat)); }
        else { const mat = new THREE.MeshStandardMaterial({ map: tex('w', st.wall.p, st.wall.c), roughness: 0.95 }), m = new THREE.Mesh(quads(list, len), mat); m.receiveShadow = true; g.add(m);
          const wb = new SB(43); for (const [a, b] of w.door ? [[-len / 2, -hw], [hw, len / 2]] : [[-len / 2, len / 2]]) { wb.box(b - a, 0.1, 0.025, (a + b) / 2, 0.05, 0.012, TRIM); wb.box(b - a, 0.05, 0.03, (a + b) / 2, ROOM_H - 0.025, 0.015, TRIM); }
          if (w.window) { const wy = 1.55, ww = 1.5, wh = 1.25; wb.box(ww + 0.16, wh + 0.16, 0.05, 0, wy, 0.02, TRIM); wb.box(ww + 0.3, 0.05, 0.14, 0, wy - wh / 2 - 0.08, 0.06, TRIM); wb.box(0.045, wh, 0.03, 0, wy, 0.05, TRIM); wb.box(ww, 0.045, 0.03, 0, wy, 0.05, TRIM);
            const pane = new THREE.Mesh(new THREE.PlaneGeometry(ww, wh), paneMat); pane.position.set(0, wy, 0.047); g.add(pane);
            wb.cyl(0.014, 0.014, ww + 0.5, 0, wy + wh / 2 + 0.16, 0.09, 0xb08252, 6, new THREE.Matrix4().makeRotationZ(Math.PI / 2)); for (const s of [-1, 1]) for (let k = 0; k < 4; k++) wb.box(0.085, wh + 0.36, 0.03, s * (ww / 2 + 0.2 - k * 0.075), wy - 0.02, 0.075 + (k % 2) * 0.02, k % 2 ? 0xf2ece0 : 0xfaf6ee); }
          g.add(wb.mesh(propMat)); }
        if (door && (side === 1 || side === 2)) { const P = new V3(r.cx + sd.dx * (CW / 2), 0, r.cz + sd.dz * (CD / 2)), R = new THREE.Matrix4().makeRotationY(sd.ry); const at = (x, y, z, w2, h2, d2, c) => { const v = new V3(x, y, z).applyMatrix4(R).add(P); sb.box(w2, h2, d2, v.x, v.y, v.z, c, R, 0); };
          for (const s of [-1, 1]) at(s * (hw + 0.035), DOOR_H / 2, 0, 0.07, DOOR_H, WT + 0.06, WOOD); at(0, DOOR_H + 0.035, 0, DOOR_W + 0.14, 0.07, WT + 0.06, WOOD); at(0, 0.006, 0, DOOR_W, 0.012, WT + 0.04, 0x9a7248); }
        if (entrance) { const z = r.cz + CD / 2, eb = new SB(44); for (const s of [-1, 1]) eb.box(0.09, DOOR_H + 0.05, 0.12, s * (hw + 0.045), (DOOR_H + 0.05) / 2, 0.02, TRIM); eb.box(DOOR_W + 0.18, 0.09, 0.12, 0, DOOR_H + 0.07, 0.02, TRIM);
          eb.box(DOOR_W, DOOR_H, 0.05, 0, DOOR_H / 2, -0.02, 0x5f8f8a); for (const [dx, dy] of [[-0.3, 0.55], [0.3, 0.55], [-0.3, 1.5], [0.3, 1.5]]) eb.box(0.44, 0.72, 0.02, dx, dy, 0.012, 0x548079); eb.sph(0.035, 0.5, 1.05, 0.04, 0xe0b85a, 1, 1, 1, 8); g.add(eb.mesh(propMat));
          sb.box(1.0, 0.025, 0.6, 0, 0.013, z - 0.55, 0xb8704a); sb.box(0.86, 0.03, 0.46, 0, 0.014, z - 0.55, 0xc8845a); for (const s of [-1, 1]) sb.box(0.1, 0.18, WT, s * (hw + 0.05), 0.09, z - WT / 2, TRIM); } } }
    if (sb.g.length) shell.add(sb.mesh(propMat));
    H.floors = bb; H.setLevel(H.level, true); stairPicks.forEach((m, i) => { m.visible = own.has('hall2'); m.position.set((STAIR.x0 + STAIR.x1) / 2, i ? 0.4 : 1.5, i * FL_DZ + (STAIR.z0 + STAIR.z1) / 2); });
    for (const it of H.items) if (it.def.kind === 'wall') attach(it);
    H.nav.invalidate(); H.tags = H.buyable();
  };
  H.exit = new V3(0, 0, CD / 2 - 0.55); H.entry = new V3(0, 0, CD / 2 - 1.35);
  H.repaint = (r) => { const st = H.style(r); for (const w of H.walls) if (w.room === r && !w.glass) w.group.children[0].material.map = tex('w', st.wall.p, st.wall.c);
    const m = r.floorMesh.material; m.map = tex('f', st.floor.p, st.floor.c).clone(); m.map.repeat.set(CW / 1.6, CD / 1.6); m.map.needsUpdate = true; m.roughness = st.floor.p === 'marmore' || st.floor.p === 'ceramica' ? 0.35 : 0.85; };

  // ----- where things can go -----
  const quarter = (rot) => ((Math.round(rot || 0) % 4) + 4) % 4;
  H.rect = (def, x, z, rot) => { const q = quarter(rot), w = q % 2 ? def.d : def.w, d = q % 2 ? def.w : def.d; return [x - w / 2, x + w / 2, z - d / 2, z + d / 2]; };
  const overlap = (a, b, e = 0.012) => a[0] < b[1] - e && a[1] > b[0] + e && a[2] < b[3] - e && a[3] > b[2] + e;
  const inner = (r) => [r.cx - CW / 2 + WT, r.cx + CW / 2 - WT, r.cz - CD / 2 + WT, r.cz + CD / 2 - WT];
  const doorZones = (r) => { const out = []; for (const w of H.walls) if (w.room === r && w.door) { const sd = SIDE[w.side], px = r.cx + sd.dx * (CW / 2), pz = r.cz + sd.dz * (CD / 2), a = 0.72, b = 0.85; out.push(sd.dx ? [Math.min(px, px - sd.dx * b), Math.max(px, px - sd.dx * b), pz - a, pz + a] : [px - a, px + a, Math.min(pz, pz - sd.dz * b), Math.max(pz, pz - sd.dz * b)]); } return out; };
  const rectOf = (it) => H.rect(it.def, it.rec.x, it.rec.z, it.rec.r);
  // the nearest place where the piece is inside a room and clear of the walls (it goes right up against them)
  H.fit = (def, x, z, rot, keep) => { let room = keep || H.roomAt(x, z); if (!room) { let bd = 1e9; for (const r of H.rooms) { const d = Math.hypot(x - clamp(x, r.cx - CW / 2, r.cx + CW / 2), z - clamp(z, r.cz - CD / 2, r.cz + CD / 2)); if (d < bd) { bd = d; room = r; } } if (!room) return { x, z }; }
    const In = inner(room); if (def.kind === 'wall') return { x: clamp(x, In[0], In[1]), z: clamp(z, In[2], In[3]), room };
    const q = quarter(rot), hw = (q % 2 ? def.d : def.w) / 2, hd = (q % 2 ? def.w : def.d) / 2, fx = In[1] - In[0] < hw * 2 ? room.cx : clamp(x, In[0] + hw, In[1] - hw), fz = In[3] - In[2] < hd * 2 ? room.cz : clamp(z, In[2] + hd, In[3] - hd); return { x: fx, z: fz, room }; };
  // pose: { x, z, r } -> { ok, y, room, side, t, why, hit (what is in the way) }
  H.check = (def, pose, ignore = []) => {
    const room = H.roomAt(pose.x, pose.z); if (!room) return { ok: false, why: 'Só dentro de um cômodo da casa.' };
    const In = inner(room), others = H.items.filter((it) => !ignore.includes(it));
    if (def.kind === 'wall') { let best = null; for (const w of H.walls) { if (w.room !== room) continue; const sd = SIDE[w.side], dist = sd.dx ? Math.abs(room.cx + sd.dx * (CW / 2) - pose.x) : Math.abs(room.cz + sd.dz * (CD / 2) - pose.z); if (!best || dist < best.dist) best = { w, dist }; }
      const w = best.w, sd = SIDE[w.side], along = w.side === 0 ? pose.x - room.cx : w.side === 2 ? room.cx - pose.x : w.side === 1 ? pose.z - room.cz : room.cz - pose.z, lim = w.len / 2 - def.w / 2 - WT, t = clamp(Math.round(along * 8) / 8, -lim, lim), res = { room, side: w.side, t, y: 0, wall: w, ok: true };
      if (w.glass) return { ...res, ok: false, why: 'Na parede de vidro não dá para pendurar.' };
      { const wp = H.wallPos(room.id, w.side, t).p; if (inStairs(wp.x, wp.z, def.w / 2 + 0.1)) return { ...res, ok: false, why: 'Aí fica a escada.' }; }
      if (w.door && Math.abs(t) < DOOR_W / 2 + def.w / 2 + 0.08) return { ...res, ok: false, why: 'Aí fica a porta.' };
      if (w.window && Math.abs(t) < 0.75 + def.w / 2 + 0.2) return { ...res, ok: false, why: 'Aí fica a janela.' };
      for (const it of others) if (it.def.kind === 'wall' && it.wall === w && Math.abs(it.rec.t - t) < (it.def.w + def.w) / 2 + 0.03) return { ...res, ok: false, why: 'Já tem uma coisa pendurada aí.' };
      return res; }
    const rc = H.rect(def, pose.x, pose.z, pose.r), res = { room, y: 0, ok: true };
    for (const o of stairRects()) if (overlap(rc, o)) return { ...res, ok: false, why: 'Aí fica a escada.', hit: o };
    if (def.kind !== 'ceil') for (const o of stairWays()) if (overlap(rc, o)) return { ...res, ok: false, why: 'Deixe a passagem da escada livre.', hit: o };
    if (rc[0] < In[0] - 0.005 || rc[1] > In[1] + 0.005 || rc[2] < In[2] - 0.005 || rc[3] > In[3] + 0.005) return { ...res, ok: false, why: 'Este é grande demais para este cômodo.' };
    if (def.kind === 'rug') return res;
    if (def.kind === 'ceil') { for (const it of others) if (it.def.kind === 'ceil' && overlap(rc, rectOf(it))) return { ...res, ok: false, why: 'Já tem uma coisa pendurada aí.' }; return res; }
    if (def.kind === 'top') { let y = 0; for (const it of others) { if (it.def.kind !== 'floor') continue; const o = rectOf(it); if (pose.x > o[0] && pose.x < o[1] && pose.z > o[2] && pose.z < o[3]) { if (it.def.surf == null) return { ...res, ok: false, why: 'Em cima disso não fica de pé.' }; y = it.def.surf; res.on = it; } }
      for (const it of others) if (it.def.kind === 'top' && Math.abs((it.rec.y || 0) - y) < 0.05 && overlap(rc, rectOf(it), 0.02)) return { ...res, ok: false, why: 'Já tem um enfeite aí.' };
      if (y === 0) for (const dz of doorZones(room)) if (overlap(rc, dz)) return { ...res, ok: false, why: 'Deixe a passagem da porta livre.' };
      return { ...res, y }; }
    for (const it of others) if (it.def.kind === 'floor' && overlap(rc, rectOf(it))) return { ...res, ok: false, why: 'Aí já tem um móvel.', hit: rectOf(it) };
    for (const it of others) if (it.def.kind === 'top' && !(it.rec.y > 0) && overlap(rc, rectOf(it))) return { ...res, ok: false, why: 'Tem um enfeite no chão aí.', hit: rectOf(it) };
    for (const dz of doorZones(room)) if (overlap(rc, dz)) return { ...res, ok: false, why: 'Deixe a passagem da porta livre.', hit: dz };
    return res;
  };
  // ----- pieces of furniture in the scene -----
  const attach = (it) => { const w = wallOf(it.rec.room, it.rec.side); it.wall = w; if (!w) return; w.group.add(it.group, it.pick); it.group.position.set(it.rec.t, 0, 0); it.group.rotation.y = 0; it.pick.position.set(it.rec.t, it.pickY, it.def.d / 2); };
  H.place = (it) => { const d = it.def, r = it.rec; if (d.kind === 'wall') attach(it); else { if (it.group.parent !== scene) scene.add(it.group, it.pick); it.group.position.set(r.x, r.y || 0, r.z); it.group.rotation.y = -quarter(r.r) * Math.PI / 2; it.pick.position.set(r.x, (r.y || 0) + it.pickY, r.z); it.pick.rotation.y = it.group.rotation.y; } it.group.updateMatrixWorld(true); H.placeSpots(it); };
  H.wallPos = (rid, side, t) => { const r = ROOM_BY[rid], sd = SIDE[side], g = new V3(r.cx + sd.dx * (CW / 2 - WT / 2), 0, r.cz + sd.dz * (CD / 2 - WT / 2)), ax = new V3(1, 0, 0).applyAxisAngle(new V3(0, 1, 0), sd.ry); return { p: g.addScaledVector(ax, t), ry: sd.ry, n: new V3(-sd.dx, 0, -sd.dz) }; };
  H.makeGroup = (rec) => { const g = buildFurn(rec.k, rec.c1, rec.c2); return g; };
  H.add = (rec, group) => { const def = FURN_BY[rec.k]; if (!def) return null; group = group || H.makeGroup(rec);
    const bb = new THREE.Box3().setFromObject(group), h = Math.max(0.12, bb.max.y - Math.min(0, bb.min.y)), y0 = def.kind === 'wall' || def.kind === 'ceil' ? (bb.min.y + bb.max.y) / 2 : h / 2, ph = def.kind === 'wall' || def.kind === 'ceil' ? Math.max(0.2, bb.max.y - bb.min.y) : h;
    const pick = new THREE.Mesh(new THREE.BoxGeometry(Math.max(0.3, def.w), Math.max(0.2, ph), Math.max(def.kind === 'wall' ? 0.16 : 0.26, def.d)), pickMat), it = { rec, def, group, pick, pickY: y0, pop: 1, on: !rec.off }; pick.userData.item = it;
    H.items.push(it); H.place(it); H.glow(it); H.nav.invalidate(); return it; };
  H.drop = (it, keep) => { const i = H.items.indexOf(it); if (i >= 0) H.items.splice(i, 1); if (it.pick.parent) it.pick.parent.remove(it.pick); if (!keep && it.group.parent) it.group.parent.remove(it.group); H.nav.invalidate(); };
  H.regroup = (it) => { const old = it.group, g = H.makeGroup(it.rec); g.position.copy(old.position); g.rotation.copy(old.rotation); g.scale.copy(old.scale); if (old.parent) { old.parent.add(g); old.parent.remove(old); } old.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); it.group = g; H.glow(it); };
  H.night = 0;
  H.glow = (it) => { for (const m of it.group.userData.glow || []) m.emissiveIntensity = it.on ? m.userData.e * Math.max(H.night, m.userData.day || 0) : 0; };
  H.front = (it) => { if (it.def.kind === 'wall') { const p = H.wallPos(it.rec.room, it.rec.side, it.rec.t); return { x: p.p.x + p.n.x * 0.7, z: p.p.z + p.n.z * 0.7, fx: -p.n.x, fz: -p.n.z, ry: p.ry }; }
    const q = quarter(it.rec.r), fx = [0, -1, 0, 1][q], fz = [1, 0, -1, 0][q], half = it.def.d / 2 + 0.42; return { x: it.rec.x + fx * half, z: it.rec.z + fz * half, fx: -fx, fz: -fz, ry: -q * Math.PI / 2 }; };
  H.local = (it, lx, ly, lz) => { if (it.def.kind === 'wall') { const p = H.wallPos(it.rec.room, it.rec.side, it.rec.t), v = new V3(lx, ly, lz).applyAxisAngle(new V3(0, 1, 0), p.ry); return new V3(p.p.x + v.x, ly, p.p.z + v.z); } const v = new V3(lx, 0, lz).applyAxisAngle(new V3(0, 1, 0), -quarter(it.rec.r) * Math.PI / 2); return new V3(it.rec.x + v.x, (it.rec.y || 0) + ly, it.rec.z + v.z); };

  // ----- plants indoors: every plant place of a piece of furniture borrows one spot from a fixed pool -----
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x5a4030, roughness: 1 });
  H.makeSpots = (world) => { for (let i = 0; i < INDOOR_SPOTS; i++) { const s = { id: world.spots.length, type: 'pot', zone: 0, indoor: true, active: false, pos: new V3(0, -30, 0), stand: new V3(), scale: 1, scene, group: null };
      s.soil = new THREE.Mesh(new THREE.SphereGeometry(1, 9, 5, 0, TAU, 0, Math.PI / 2), soilMat.clone()); s.soil.visible = false; s.soil.receiveShadow = true; scene.add(s.soil);
      s.pick = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 8), pickMat); s.pick.userData.spot = s; s.pick.visible = false; scene.add(s.pick); world.spots.push(s); H.spots.push(s); } };
  H.placeSpots = (it) => { const pl = it.def.plants; if (!pl || !it.rec.sl) return; const f = H.front(it);
    pl.forEach(([lx, ly, lz, sc = 1, type = 'pot'], i) => { const s = H.spots.find((q) => q.id === it.rec.sl[i]); if (!s) return; const p = H.local(it, lx, ly, lz), k = sc; s.active = true; s.item = it; s.type = type === 'hang' ? 'hang' : 'pot'; s.scale = 1.05 * k; s.pos.copy(p); s.high = p.y > 1.35; s.glass = !!(H.roomAt(p.x, p.z) || {}).glass;
      s.stand.set(f.x + (p.x - (it.def.kind === 'wall' ? p.x : it.rec.x)) * 0.0, 0, f.z); if (it.def.kind !== 'wall') { const side = new V3(lx, 0, 0).applyAxisAngle(new V3(0, 1, 0), f.ry); s.stand.x += side.x * 0.8; s.stand.z += side.z * 0.8; } else { const ax = new V3(lx, 0, 0).applyAxisAngle(new V3(0, 1, 0), f.ry); s.stand.x += ax.x; s.stand.z += ax.z; }
      s.soil.visible = true; s.soil.position.copy(p); s.soil.position.y -= 0.012; s.soil.scale.set(0.085 * k, 0.03 * k, 0.085 * k); s.pick.visible = true; s.pick.position.set(p.x, p.y + 0.16 * k, p.z); s.pick.scale.set(0.17 * k, 0.5 * k, 0.17 * k); }); };
  H.claimSpots = (rec) => { const def = FURN_BY[rec.k]; if (!def || !def.plants) return true; rec.sl = (rec.sl || []).slice(0, def.plants.length); const used = new Set(); for (const r of S.items) if (r !== rec && r.sl) r.sl.forEach((id) => used.add(id)); rec.sl.forEach((id) => used.add(id));
    while (rec.sl.length < def.plants.length) { const s = H.spots.find((q) => !used.has(q.id)); if (!s) return false; used.add(s.id); rec.sl.push(s.id); } return true; };
  H.freeSpots = (rec) => { for (const id of rec.sl || []) { const s = H.spots.find((q) => q.id === id); if (s) { s.active = false; s.item = null; s.soil.visible = false; s.pick.visible = false; s.pos.set(0, -30, 0); } } delete rec.sl; };

  // ----- walking -----
  H.blocked = (x, z) => { const r = H.roomAt(x, z); if (!r) return true; if (inStairs(x, z, 0.14)) return true; const m = WT + 0.2, dx = x - r.cx, dz = z - r.cz;
    for (let side = 0; side < 4; side++) { const sd = SIDE[side], d = sd.dx ? CW / 2 - dx * sd.dx : CD / 2 - dz * sd.dz; if (d < m) { const nb = H.neighbour(r, side), along = sd.dx ? dz : dx; if (!(has(nb) && Math.abs(along) < DOOR_W / 2 - 0.22)) return true; } }
    for (const it of H.items) { if (it.def.kind !== 'floor' && !(it.def.kind === 'top' && !(it.rec.y > 0) && it.def.w > 0.3)) continue; const o = rectOf(it), p = 0.17; if (x > o[0] - p && x < o[1] + p && z > o[2] - p && z < o[3] + p) return true; } return false; };
  const navs = [0, 1].map((lv) => createNav(H.blocked, { cell: 0.25, x0: -1.5 * CW, z0: lv * FL_DZ - 2.5 * CD, nx: Math.round((4 * CW) / 0.25) + 1, nz: Math.round((3 * CD) / 0.25) + 1, guard: 24000 }));
  H.nav = { path: (sx, sz, tx, tz) => navs[H.upAt(sz) ? 1 : 0].path(sx, sz, tx, tz), invalidate: () => navs.forEach((n) => n.invalidate()) };
  // where she taps to use the stairs, and the way up them (ground-floor coordinates; coming down is the same way backwards, three metres lower, on the upper map)
  const stairPicks = ['up', 'down'].map((dir, i) => { const m = new THREE.Mesh(new THREE.BoxGeometry(STAIR.x1 - STAIR.x0, i ? 0.8 : 3.0, STAIR.z1 - STAIR.z0), pickMat); m.userData.stairs = dir; m.visible = false; scene.add(m); return m; }); H.stairPicks = stairPicks;
  H.stairPath = () => { const { x1, zA, zB, xT, rise } = STAIR; return [[x1 + 0.4, 0, zA], [x1, 0, zA], [xT, 5 * rise, zA], [xT - 0.58, 6 * rise, zA], [xT - 0.58, 6 * rise, zB], [xT, 6 * rise, zB], [x1, 11 * rise, zB], [x1 + 0.28, FL_H, zB]]; };

  // ----- cosiness -----
  H.comfort = (rid) => { let c = 0; for (const it of H.items) { if (rid) { const r = it.def.kind === 'wall' ? it.rec.room : (H.roomAt(it.rec.x, it.rec.z) || {}).id; if (r !== rid) continue; } c += it.def.comfort || 0; } return c; };

  H.init = (state) => { S = state; H.rebuild(); for (const rec of S.items.slice()) { H.claimSpots(rec); if (!H.add(rec)) S.items.splice(S.items.indexOf(rec), 1); } };
  // camPos: camera, at: Eliane. Walls that would hide her (or that we would see from behind) step out of the way.
  const sky = new THREE.Color(), dayC = new THREE.Color(0xcfe3ee), duskC = new THREE.Color(0xf2c8a0), nightC = new THREE.Color(0x2a3358), lawnD = new THREE.Color(0x86ad62), lawnN = new THREE.Color(0x2f4a3c);
  H.update = (dt, time, camPos, at, night, hour) => {
    H.night = night; const d = new V3(); H.setLevel(H.upAt(at.z) ? 1 : 0);
    for (const w of H.walls) { const cs = d.copy(camPos).sub(w.p).dot(w.n), es = d.copy(at).sub(w.p).dot(w.n); w.group.visible = cs > 0.05 && es > -0.35; }
    const dusk = clamp(1 - Math.abs(hour - 18.3) / 1.6, 0, 1) * (1 - night); sky.copy(dayC).lerp(duskC, dusk).lerp(nightC, night); scene.background.copy(sky); scene.fog.color.copy(sky); lawn.material.color.copy(lawnD).lerp(lawnN, night);
    paneMat.color.copy(sky); paneMat.emissive.copy(sky); paneMat.emissiveIntensity = lerp(0.75, 0.25, night);
    hemi.intensity = lerp(1.05, 0.5, night); hemi.color.setHex(0xfff6e8).lerp(new THREE.Color(0xb8c4e8), night * 0.7); sun.intensity = lerp(1.7, 0.28, night); sun.color.setHex(0xfff0dc).lerp(new THREE.Color(0x9ab0e8), night).lerp(duskC, dusk * 0.5);
    // real warm light from the lamps closest to her
    const lit = night > 0.15 ? H.items.filter((it) => it.on && (it.group.userData.glow || []).length && (it.def.cat === 'Luzes' || it.def.cat === 'Especiais' || it.def.cat === 'TV e som')).map((it) => { const p = it.group.getWorldPosition(new V3()); return { p, d: p.distanceTo(at), it }; }).sort((a, b) => a.d - b.d) : [];
    lamps.forEach((l, i) => { const q = lit[i]; if (q && q.d < 9) { const bb = q.it.def; l.position.set(q.p.x, q.it.def.kind === 'ceil' ? ROOM_H - 0.8 : (q.it.rec.y || 0) + Math.min(1.7, (bb.h || 1) * 0.9 + 0.1), q.p.z); if (q.it.def.kind === 'wall') { const w = q.it.wall; if (w) l.position.addScaledVector(w.n, 0.4); l.position.y = 1.7; } l.intensity = 9 * night; } else l.intensity = 0; });
    for (const it of H.items) { const u = it.group.userData; if (u.ticks && it.on) for (const fn of u.ticks) fn(dt, time, night, it.group); if (u.glow && u.glow.length) H.glow(it); if (it.pop < 1) { it.pop = Math.min(1, it.pop + dt * 2.4); const k = 1 - Math.pow(1 - it.pop, 3); it.group.scale.setScalar(0.7 + 0.3 * k * (1 + 0.25 * Math.sin(k * Math.PI))); } }
  };
  return H;
}
