// Eliane's wardrobe. She buys PIECES (a different skirt, a dress, trousers, a hat...) and every piece she owns can be
// worn in any colour and print, for free. The first piece of each list is the one she starts with.
// c / c2 = default colours (main / detail), p = default print.
const P = (id, name, price, lvl, spec = {}) => ({ id, name, price, lvl, ...spec });

export const PALETTE = [
  0xffffff, 0xf6f1e6, 0xf4e4c0, 0xe8cf7a, 0xf2c84a, 0xf2903a, 0xe8806a, 0xd8483a, 0xc8504a, 0x8a2a4a,
  0xf9d8e0, 0xf7a8c0, 0xf08ab0, 0xd89aa4, 0xd45a8a, 0xb48af0, 0xa894c8, 0x7a4a8a, 0x5a3a7a, 0x3f5a8a,
  0xcfe0f2, 0x9ad0f0, 0x7fa8c8, 0x5a8ac8, 0x4aa8a8, 0x4ab0b0, 0x9fd0b8, 0x7fa08a, 0x6aa87a, 0x5a9a5a,
  0x3f7a4a, 0xb8c86a, 0xd4ecd0, 0xc8a878, 0xb98a5e, 0x8a6648, 0x6a4a3a, 0x9a9a98, 0x5a5a64, 0x2a2a34,
];
export const PATTERNS = [['liso', 'Lisa'], ['poa', 'Poá'], ['listras', 'Listras'], ['marinheiro', 'Marinheiro'], ['xadrez', 'Xadrez'], ['vichy', 'Vichy'], ['florido', 'Florida'], ['margaridas', 'Margaridas'], ['miudo', 'Floral miúdo'], ['coracoes', 'Corações'], ['folhas', 'Folhagem'], ['estrelas', 'Estrelas'], ['losangos', 'Losangos'], ['ondas', 'Ondas']];
export const HAIR_COLORS = [['natural', 'Castanho-claro', [1, 1, 1]], ['mel', 'Mel', [1.25, 1.12, 0.85]], ['loiro', 'Loiro', [1.55, 1.42, 1.05]], ['ruivo', 'Ruivo', [1.35, 0.72, 0.42]], ['castanho', 'Castanho', [0.62, 0.55, 0.5]], ['preto', 'Preto', [0.26, 0.24, 0.26]], ['grisalho', 'Grisalho', [1.35, 1.5, 1.75]], ['rosa', 'Rosa', [1.7, 0.95, 1.25]]];

// sleeve: none | strap | cap | puff | short | elbow | long | bell | lantern | thick      neck: round | boat | v | square | turtle | strap | off
// hem: in (tucked) | out (worn over the waist) | crop.   extras: collar ('shirt' | 'peter' | 'sailor' | 'ruffle'), buttons, bow, open (cardigan), hood, belt, lace, pocket
const TOPS = [
  P('bufante', 'Blusa de manga bufante', 0, 1, { sleeve: 'puff', neck: 'round', c: 0xfbf3e4 }),
  P('camiseta', 'Camiseta', 90, 1, { sleeve: 'short', neck: 'round', c: 0xf7d0d8 }),
  P('regata', 'Regata', 110, 2, { sleeve: 'none', neck: 'round', c: 0xfaf4ec }),
  P('manga_longa', 'Blusa de manga longa', 160, 2, { sleeve: 'long', neck: 'boat', c: 0xcfe0f2, p: 'marinheiro' }),
  P('camisa', 'Camisa de botões', 240, 3, { sleeve: 'elbow', neck: 'v', collar: 'shirt', buttons: 1, c: 0xffffff, c2: 0xf2c84a }),
  P('bata', 'Bata soltinha', 320, 4, { sleeve: 'bell', neck: 'square', hem: 'out', c: 0xf4e4c0, p: 'miudo' }),
  P('gola_boneca', 'Blusa de gola boneca', 380, 5, { sleeve: 'cap', neck: 'round', collar: 'peter', bow: 1, c: 0xf9d8e0, c2: 0xffffff }),
  P('sueter', 'Suéter de tricô', 440, 6, { sleeve: 'thick', neck: 'round', hem: 'out', knit: 1, c: 0xe8806a, c2: 0xf6f1e6 }),
  P('gola_alta', 'Blusa de gola alta', 420, 7, { sleeve: 'long', neck: 'turtle', c: 0x3f5a8a }),
  P('ciganinha', 'Blusa ciganinha', 520, 8, { sleeve: 'lantern', neck: 'off', collar: 'ruffle', c: 0xffffff }),
  P('moletom', 'Moletom com capuz', 560, 9, { sleeve: 'thick', neck: 'round', hem: 'out', hood: 1, pocket: 1, c: 0xa894c8, c2: 0xffffff }),
  P('cropped', 'Cropped de alcinha', 600, 10, { sleeve: 'strap', neck: 'strap', hem: 'crop', c: 0xf2c84a }),
  P('cardiga', 'Cardigã aberto', 720, 11, { sleeve: 'long', neck: 'round', open: 1, hem: 'out', buttons: 1, c: 0x9fd0b8, c2: 0xffffff }),
  P('colete', 'Colete sobre camiseta', 780, 12, { sleeve: 'short', neck: 'round', open: 1, vest: 1, c: 0x5a8ac8, c2: 0xffffff }),
  P('marinheira', 'Blusa marinheira', 860, 13, { sleeve: 'short', neck: 'v', collar: 'sailor', bow: 1, c: 0xffffff, c2: 0x3f5a8a }),
  P('babados', 'Blusa de babados', 980, 14, { sleeve: 'lantern', neck: 'round', collar: 'ruffle', hem: 'out', ruffles: 1, c: 0xf7a8c0 }),
  P('jaqueta', 'Jaqueta', 1200, 15, { sleeve: 'thick', neck: 'round', open: 1, collar: 'shirt', hem: 'out', pocket: 1, c: 0x5a8ac8, c2: 0xf6f1e6 }),
  P('quimono', 'Quimono florido', 1600, 17, { sleeve: 'bell', neck: 'v', open: 1, hem: 'out', belt: 1, long: 1, c: 0xd45a8a, c2: 0xf6f1e6, p: 'florido' }),
];
// skirts: len (m), flare, shape ('a' | 'lapis' | 'balone' | 'sereia'), pleats (n, depth), tiers, zig (pointed hem), asym, bib (pinafore)
// trousers: leg: 'full' | 'capri' | 'bermuda' | 'short', cut: 'skinny' | 'reta' | 'larga' | 'sino', cuff, bib (overalls)
const BOTTOMS = [
  P('jardineira', 'Saia jardineira', 0, 1, { skirt: { len: 0.54, flare: 0.178 }, bib: 1, c: 0x7fa08a }),
  P('rodada', 'Saia rodada', 120, 1, { skirt: { len: 0.54, flare: 0.19 }, c: 0xd89aa4, p: 'poa' }),
  P('curta', 'Saia curta evasê', 150, 2, { skirt: { len: 0.36, flare: 0.13 }, c: 0xe8cf7a }),
  P('calca', 'Calça reta', 200, 2, { pants: { leg: 'full', cut: 'reta' }, c: 0x8a6648 }),
  P('shorts', 'Shortinho', 180, 3, { pants: { leg: 'short', cut: 'reta', cuff: 1 }, c: 0x7fa8c8 }),
  P('plissada', 'Saia plissada', 300, 3, { skirt: { len: 0.44, flare: 0.16, pleats: [16, 0.09] }, c: 0x3f5a8a, p: 'xadrez' }),
  P('jeans', 'Calça jeans', 340, 4, { pants: { leg: 'full', cut: 'reta', cuff: 1, stitch: 1 }, c: 0x5a8ac8, c2: 0xf2c84a }),
  P('longa', 'Saia longa', 380, 4, { skirt: { len: 0.78, flare: 0.2 }, c: 0xa894c8, p: 'miudo' }),
  P('macacao', 'Macacão jardineiro', 460, 5, { pants: { leg: 'full', cut: 'larga', cuff: 1 }, bib: 1, c: 0x5a8ac8, c2: 0xf2c84a }),
  P('bermuda', 'Bermuda', 320, 5, { pants: { leg: 'bermuda', cut: 'reta', cuff: 1 }, c: 0xc8a878 }),
  P('lapis', 'Saia lápis', 480, 6, { skirt: { len: 0.5, flare: 0.02, shape: 'lapis' }, c: 0x2a2a34 }),
  P('babados', 'Saia de babados', 560, 7, { skirt: { len: 0.5, flare: 0.2, tiers: 3 }, c: 0xf7a8c0 }),
  P('pantalona', 'Pantalona', 600, 8, { pants: { leg: 'full', cut: 'larga' }, c: 0xf6f1e6, p: 'listras' }),
  P('midi', 'Saia midi godê', 680, 9, { skirt: { len: 0.66, flare: 0.3, pleats: [7, 0.07] }, c: 0xd8483a, p: 'poa' }),
  P('capri', 'Calça capri', 520, 9, { pants: { leg: 'capri', cut: 'skinny', cuff: 1 }, c: 0x9fd0b8 }),
  P('legging', 'Legging', 480, 10, { pants: { leg: 'full', cut: 'skinny' }, c: 0x5a5a64 }),
  P('balone', 'Saia balonê', 820, 11, { skirt: { len: 0.42, flare: 0.085, shape: 'balone' }, c: 0xf2903a }),
  P('boca_sino', 'Calça boca de sino', 760, 11, { pants: { leg: 'full', cut: 'sino' }, c: 0x7a4a8a }),
  P('envelope', 'Saia envelope', 900, 12, { skirt: { len: 0.52, flare: 0.12, asym: 0.3 }, c: 0x4aa8a8, p: 'folhas' }),
  P('salopete', 'Jardineira de shortinho', 940, 13, { pants: { leg: 'short', cut: 'larga', cuff: 1 }, bib: 1, c: 0xe8806a, c2: 0xffffff }),
  P('cigana', 'Saia longa de camadas', 1150, 14, { skirt: { len: 0.8, flare: 0.3, tiers: 4 }, c: 0xd45a8a, p: 'florido' }),
  P('tule', 'Saia de tule', 1300, 15, { skirt: { len: 0.32, flare: 0.21, pleats: [13, 0.12], tiers: 2 }, c: 0xf9d8e0 }),
  P('sereia', 'Saia sereia', 1500, 16, { skirt: { len: 0.76, flare: 0.24, shape: 'sereia' }, c: 0x4ab0b0 }),
  P('fada', 'Saia de pétalas', 1800, 18, { skirt: { len: 0.46, flare: 0.22, zig: [7, 0.1] }, c: 0xb48af0 }),
];
// a dress is a bodice (same fields as a top) plus a skirt, cut from one cloth
const DRESSES = [
  P('verao', 'Vestido de alcinha', 260, 2, { sleeve: 'strap', neck: 'strap', skirt: { len: 0.52, flare: 0.19 }, c: 0xf2c84a, p: 'margaridas' }),
  P('camisetao', 'Vestido camiseta', 320, 3, { sleeve: 'short', neck: 'round', skirt: { len: 0.44, flare: 0.07, shape: 'lapis' }, c: 0x7fa8c8, p: 'listras' }),
  P('boneca', 'Vestido de gola boneca', 460, 4, { sleeve: 'puff', neck: 'round', collar: 'peter', buttons: 1, belt: 1, skirt: { len: 0.5, flare: 0.2 }, c: 0xd8483a, c2: 0xffffff, p: 'poa' }),
  P('chemise', 'Chemise com cinto', 580, 6, { sleeve: 'elbow', neck: 'v', collar: 'shirt', buttons: 1, belt: 1, skirt: { len: 0.58, flare: 0.13 }, c: 0x9fd0b8, c2: 0x8a6648 }),
  P('camponesa', 'Vestido camponesa', 720, 7, { sleeve: 'lantern', neck: 'square', lace: 1, skirt: { len: 0.62, flare: 0.22, tiers: 2 }, c: 0x5a9a5a, c2: 0x6a4a3a, p: 'miudo' }),
  P('tubinho', 'Tubinho', 680, 8, { sleeve: 'cap', neck: 'boat', skirt: { len: 0.46, flare: 0.03, shape: 'lapis' }, c: 0x2a2a34 }),
  P('la', 'Vestido de lã', 840, 9, { sleeve: 'thick', neck: 'turtle', knit: 1, skirt: { len: 0.48, flare: 0.11 }, c: 0xc8504a }),
  P('marinheiro', 'Vestido marinheiro', 960, 10, { sleeve: 'short', neck: 'v', collar: 'sailor', bow: 1, skirt: { len: 0.46, flare: 0.17, pleats: [16, 0.08] }, c: 0xffffff, c2: 0x3f5a8a }),
  P('longo', 'Vestido longo', 1100, 11, { sleeve: 'strap', neck: 'strap', belt: 1, skirt: { len: 0.82, flare: 0.21 }, c: 0xe8806a, c2: 0xf6f1e6, p: 'folhas' }),
  P('rodado', 'Vestido rodado anos 50', 1400, 12, { sleeve: 'cap', neck: 'boat', belt: 1, skirt: { len: 0.6, flare: 0.34, pleats: [8, 0.06] }, c: 0x4aa8a8, c2: 0xffffff, p: 'poa' }),
  P('fada', 'Vestido de fada', 1900, 14, { sleeve: 'cap', neck: 'off', collar: 'ruffle', skirt: { len: 0.5, flare: 0.24, zig: [8, 0.11] }, c: 0x9fd0b8, c2: 0xf2c84a }),
  P('festa', 'Vestido de festa', 2600, 15, { sleeve: 'none', neck: 'off', collar: 'ruffle', bow: 1, belt: 1, skirt: { len: 0.7, flare: 0.36, tiers: 3 }, c: 0xd45a8a, c2: 0xf9d8e0 }),
  P('gala', 'Vestido de gala', 3800, 17, { sleeve: 'none', neck: 'off', belt: 1, skirt: { len: 0.82, flare: 0.3, shape: 'sereia' }, c: 0x5a3a7a, c2: 0xf2c84a }),
  P('princesa', 'Vestido de princesa', 5200, 19, { sleeve: 'puff', neck: 'square', collar: 'ruffle', bow: 1, belt: 1, lace: 1, skirt: { len: 0.82, flare: 0.42, tiers: 4, pleats: [9, 0.05] }, c: 0x9ad0f0, c2: 0xffffff }),
  P('noiva', 'Vestido branco de renda', 6500, 20, { sleeve: 'bell', neck: 'boat', lace: 1, belt: 1, skirt: { len: 0.84, flare: 0.36, tiers: 2 }, c: 0xffffff, c2: 0xf4e4c0 }),
];
// kind: boot (shaft up to `top`, in m below the knee joint... 0 = knee), low, sneaker, flat, sandal, clog, flip, bare
const SHOES = [
  P('galocha', 'Galochas', 0, 1, { kind: 'boot', top: -0.15, c: 0xdfa53c }),
  P('sapatilha', 'Sapatilhas', 100, 1, { kind: 'flat', bow: 1, c: 0xd8483a }),
  P('tenis', 'Tênis', 160, 2, { kind: 'sneaker', c: 0xffffff, c2: 0xe8806a }),
  P('sandalia', 'Sandálias', 200, 3, { kind: 'sandal', c: 0xb98a5e }),
  P('botinha', 'Botinhas', 280, 4, { kind: 'boot', top: -0.3, laces: 1, c: 0x8a6648, c2: 0xf4e4c0 }),
  P('boneca', 'Sapato boneca', 340, 6, { kind: 'flat', strap: 1, c: 0x2a2a34 }),
  P('tamanco', 'Tamanco de jardim', 300, 7, { kind: 'clog', c: 0x5a9a5a }),
  P('chinelo', 'Chinelos', 220, 8, { kind: 'flip', c: 0x4ab0b0, c2: 0xffffff }),
  P('bota_alta', 'Botas de cano alto', 620, 10, { kind: 'boot', top: -0.03, c: 0x6a4a3a }),
  P('cano_medio', 'Botas de chuva estampadas', 700, 12, { kind: 'boot', top: -0.12, band: 1, c: 0xf08ab0, c2: 0xffffff }),
  P('salto', 'Sapato de festa', 900, 14, { kind: 'flat', heel: 1, bow: 1, c: 0xf2c84a }),
  P('descalca', 'Descalça', 0, 1, { kind: 'bare' }),
];
const LEGS = [
  P('sem', 'Nada', 0, 1, {}),
  P('soquete', 'Meias soquete', 80, 2, { sock: -0.3, c: 0xffffff }),
  P('tres_quartos', 'Meias três-quartos', 160, 5, { sock: -0.06, c: 0xffffff }),
  P('listradas', 'Meias listradas', 260, 8, { sock: -0.06, stripes: 1, c: 0xd8483a, c2: 0xffffff }),
  P('meia_calca', 'Meia-calça', 320, 10, { tights: 1, c: 0x5a5a64 }),
];
const HATS = [
  P('palha', 'Chapéu de palha', 0, 1, { c: 0xecd49a, c2: 0xe8736a }),
  P('nenhum', 'Nada', 0, 1, {}),
  P('lenco', 'Lenço', 180, 2, { c: 0xe8736a }),
  P('laco', 'Laço', 220, 3, { c: 0xe8736a }),
  P('aba_larga', 'Aba larga com laço', 320, 3, { c: 0xecd49a, c2: 0x5a8ac8 }),
  P('jardineira', 'Chapéu de pano', 300, 4, { c: 0x7fa8c8, c2: 0xecd49a }),
  P('bone', 'Boné', 280, 5, { c: 0xd8483a, c2: 0xffffff }),
  P('boina', 'Boina', 380, 6, { c: 0xc8504a }),
  P('tiara', 'Tiara', 340, 7, { c: 0xf2c84a }),
  P('bucket', 'Chapéu de pescadora', 460, 8, { c: 0x9fd0b8, c2: 0xffffff }),
  P('coroa', 'Coroa de flores', 520, 9, {}),
  P('gorro', 'Gorro com pompom', 480, 10, { c: 0xd8483a, c2: 0xffffff }),
  P('vaqueira', 'Chapéu de vaqueira', 700, 12, { c: 0xb98a5e, c2: 0x6a4a3a }),
  P('fedora', 'Chapéu fedora', 820, 13, { c: 0x6a4a3a, c2: 0x2a2a34 }),
  P('gatinho', 'Orelhas de gatinho', 900, 15, { c: 0x2a2a34, c2: 0xf7a8c0 }),
  P('capeline', 'Capeline de festa', 1500, 17, { c: 0xffffff, c2: 0xd45a8a }),
  P('diadema', 'Tiara de princesa', 3000, 19, { c: 0xf2c84a, c2: 0x9ad0f0 }),
];
const HAIRS = [
  P('solto', 'Solto', 0, 1), P('rabo', 'Rabo de cavalo', 200, 2), P('tranca', 'Trança de lado', 280, 3), P('coque', 'Coque', 320, 4), P('curto', 'Chanel', 380, 5), P('chiquinhas', 'Maria-chiquinha', 420, 6),
  P('rabo_alto', 'Rabo alto', 460, 8), P('trancas', 'Duas tranças', 540, 9), P('meio_preso', 'Meio preso', 600, 11), P('coques', 'Dois coquinhos', 680, 12), P('longo', 'Bem comprido', 800, 14), P('cacheado', 'Cacheado', 950, 16),
];
const NECK = [
  P('sem', 'Nada', 0, 1), P('lencinho', 'Lencinho', 120, 2, { c: 0xd8483a }), P('colar', 'Colar de pérolas', 380, 5, { c: 0xfaf4ec }), P('pingente', 'Colar com pingente', 460, 7, { c: 0xf2c84a, c2: 0xd8483a }),
  P('cachecol', 'Cachecol', 520, 9, { c: 0xc8504a, c2: 0xf6f1e6 }), P('gravatinha', 'Laço no pescoço', 600, 11, { c: 0x3f5a8a }),
];
const HANDS = [P('sem', 'Nada', 0, 1), P('luvas', 'Luvas de jardinagem', 140, 2, { c: 0xf0a0b8 }), P('pulseira', 'Pulseiras', 360, 6, { c: 0xf2c84a, c2: 0x4ab0b0 }), P('relogio', 'Relógio', 520, 9, { c: 0x8a6648, c2: 0xf2c84a })];
const BAGS = [P('sem', 'Nada', 0, 1), P('cestinha', 'Cestinha de flores', 350, 4), P('bolsa', 'Bolsa a tiracolo', 480, 6, { c: 0xb98a5e, c2: 0xf2c84a }), P('mochila', 'Mochila', 640, 9, { c: 0x5a9a5a, c2: 0xf4e4c0 }), P('asas', 'Asas de borboleta', 2400, 16, { c: 0xf7a8c0, c2: 0xb48af0 })];
const FACE = [P('sem', 'Nada', 0, 1), P('oculos', 'Óculos redondos', 300, 4, { c: 0x6a4a3a }), P('gatinho', 'Óculos gatinho', 520, 8, { c: 0xd8483a }), P('sol', 'Óculos de sol', 640, 10, { c: 0x2a2a34 }), P('flor', 'Flor no cabelo', 260, 5, { c: 0xf08ab0 })];
const EARS = [P('pingo', 'Brinquinhos', 0, 1, { c: 0x2f8f5e }), P('perola', 'Pérolas', 240, 4, { c: 0xfaf4ec }), P('argola', 'Argolas', 380, 7, { c: 0xf2c84a }), P('flor', 'Brincos de flor', 520, 10, { c: 0xf08ab0, c2: 0xf2c84a }), P('pena', 'Brincos compridos', 700, 13, { c: 0x4ab0b0 })];
const APRON = [P('sem', 'Sem avental', 0, 1), P('avental', 'Avental', 160, 2, { c: 0xfaf6ee })];

// tab: section of the dressing room. two: the piece has a second (detail) colour. print: it takes prints.
export const WARDROBE = {
  dress: { name: 'Vestidos', tab: 'roupas', list: DRESSES, two: true, print: true, none: 'Sem vestido' },
  top: { name: 'Blusas', tab: 'roupas', list: TOPS, two: true, print: true },
  bottom: { name: 'Saias e calças', tab: 'roupas', list: BOTTOMS, two: true, print: true },
  apron: { name: 'Avental', tab: 'roupas', list: APRON },
  shoes: { name: 'Sapatos', tab: 'pes', list: SHOES, two: true },
  legs: { name: 'Meias', tab: 'pes', list: LEGS, two: true },
  hair: { name: 'Penteado', tab: 'cabeca', list: HAIRS, hair: true },
  hat: { name: 'Chapéus', tab: 'cabeca', list: HATS, two: true },
  face: { name: 'Óculos e flor', tab: 'cabeca', list: FACE },
  ears: { name: 'Brincos', tab: 'cabeca', list: EARS, two: true },
  neck: { name: 'Pescoço', tab: 'acessorios', list: NECK, two: true },
  hands: { name: 'Mãos', tab: 'acessorios', list: HANDS, two: true },
  bag: { name: 'Bolsas e mais', tab: 'acessorios', list: BAGS, two: true },
};
export const WTABS = [['roupas', 'Roupas'], ['pes', 'Sapatos'], ['cabeca', 'Cabeça'], ['acessorios', 'Acessórios']];
for (const k in WARDROBE) { WARDROBE[k].by = {}; for (const p of WARDROBE[k].list) { p.slot = k; WARDROBE[k].by[p.id] = p; } }
export const piece = (slot, id) => WARDROBE[slot]?.by[id] || null;
export const WEAR0 = { dress: null, top: 'bufante', bottom: 'jardineira', apron: 'sem', shoes: 'galocha', legs: 'sem', hair: 'solto', hat: 'palha', face: 'sem', ears: 'pingo', neck: 'sem', hands: 'sem', bag: 'sem' };
// what she is wearing, resolved to full specs with the chosen colours: { slot: { ...piece, c, c2, p } | null }
export function resolveWear(wear = {}, tint = {}) {
  const out = {};
  for (const slot in WARDROBE) { const id = wear[slot] === undefined ? WEAR0[slot] : wear[slot], pc = id ? piece(slot, id) : null; if (!pc) { out[slot] = slot === 'dress' ? null : { ...WARDROBE[slot].list[0] }; if (!out[slot]) continue; }
    const base = pc || WARDROBE[slot].list[0], t = tint[slot + ':' + base.id] || {}; out[slot] = { ...base, c: t.c ?? base.c, c2: t.c2 ?? base.c2 ?? 0xffffff, p: t.p ?? base.p ?? 'liso' }; }
  out.hairColor = (HAIR_COLORS.find((h) => h[0] === tint.hair) || HAIR_COLORS[0])[2];
  return out;
}
