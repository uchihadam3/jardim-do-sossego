// Eliane's recipe book: what the vegetable patch and the orchard give can be cooked on the stove.
// Every gift she collects puts one of that plant in her basket; a recipe takes what it lists and pays well for the trouble.
import { SPECIES } from './species.js';

const R = (id, name, ing, note) => ({ id, name, ing, note });
const ALL = [
  R('cha_hortela', 'Chá de hortelã', { hortela: 2 }, 'Fresquinho, para depois de regar tudo.'),
  R('salada_verde', 'Salada verde', { alface: 2, rucula: 1 }, 'Colhida na hora.'),
  R('cha_camomila', 'Chá de camomila', { camomila: 3 }, 'Para dormir como um anjo.'),
  R('salada_tomate', 'Salada de tomate', { tomate: 2, cebola: 1, manjericao: 1 }, 'Com um fio de azeite.'),
  R('bolo_cenoura', 'Bolo de cenoura', { cenoura: 4 }, 'Com cobertura, é claro.'),
  R('couve_refogada', 'Couve refogada', { couve: 3, alho: 1 }, 'Cortada bem fininha.'),
  R('pure_batata', 'Purê de batata', { batata: 4 }, 'Macio como nuvem.'),
  R('suco_morango', 'Suco de morango', { morango: 4 }, 'Cor-de-rosa e docinho.'),
  R('sopa_legumes', 'Sopa de legumes', { cenoura: 2, batata: 2, cebola: 1, salsinha: 1 }, 'Aquece até a alma.'),
  R('salada_beterraba', 'Salada de beterraba', { beterraba: 3, cebolinha: 1 }, 'Vermelha de dar gosto.'),
  R('cha_cidreira', 'Chá de erva-cidreira', { erva_cidreira: 3 }, 'O cheiro toma a cozinha.'),
  R('salada_pepino', 'Salada de pepino', { pepino: 3, hortela: 1 }, 'Crocante e refrescante.'),
  R('milho_cozido', 'Milho cozido', { milho: 3 }, 'Com manteiga derretendo.'),
  R('vinagrete', 'Vinagrete', { tomate: 2, cebola: 2, pimentao: 1, salsinha: 1 }, 'Todo churrasco pede.'),
  R('molho_tomate', 'Molho de tomate', { tomate: 4, alho: 1, manjericao: 2, oregano: 1 }, 'Apurado sem pressa.'),
  R('geleia_morango', 'Geleia de morango', { morango: 6 }, 'Um vidro para cada vizinho.'),
  R('feijao_tropeiro', 'Feijão tropeiro', { feijao: 4, couve: 2, cebolinha: 1 }, 'Receita de família.'),
  R('pesto', 'Pesto de manjericão', { manjericao: 5, alho: 1 }, 'Verde e perfumado.'),
  R('quiabo', 'Quiabo refogado', { quiabo: 4, cebola: 1 }, 'Sequinho, sem baba.'),
  R('torta_abobrinha', 'Torta de abobrinha', { abobrinha: 3, cebola: 1, salsinha: 1 }, 'Dourada por cima.'),
  R('caldo_verde', 'Caldo verde', { couve: 3, batata: 3, alho: 1 }, 'Para as noites de inverno.'),
  R('limonada', 'Limonada com hortelã', { limoeiro: 3, hortela: 1 }, 'Geladinha.'),
  R('cha_capim', 'Chá de capim-limão', { capim_limao: 3 }, 'Perfume de quintal.'),
  R('batata_doce', 'Batata-doce assada', { batata_doce: 3 }, 'Caramelizada na casca.'),
  R('pimenta_conserva', 'Pimenta em conserva', { pimenta: 4, alho: 1 }, 'Só para os corajosos.'),
  R('torta_maca', 'Torta de maçã', { macieira: 4 }, 'Com canela, saindo do forno.'),
  R('berinjela', 'Berinjela recheada', { berinjela: 2, tomate: 2, alho: 1 }, 'Gratinada.'),
  R('escondidinho', 'Escondidinho de mandioca', { mandioca: 3, cebola: 1, cebolinha: 1 }, 'O recheio é surpresa.'),
  R('doce_abobora', 'Doce de abóbora', { abobora: 3 }, 'Com coco, em calda.'),
  R('brocolis', 'Brócolis no alho', { brocolis: 3, alho: 2 }, 'Verdinho e al dente.'),
  R('pamonha', 'Pamonha', { milho: 6 }, 'Amarrada na palha.'),
  R('couve_flor', 'Couve-flor gratinada', { couve_flor: 2, salsinha: 1 }, 'Com queijo borbulhando.'),
  R('suco_laranja', 'Suco de laranja', { laranjeira: 4 }, 'Espremido na hora.'),
  R('suco_melancia', 'Suco de melancia', { melancia: 2, hortela: 1 }, 'O verão num copo.'),
  R('ratatouille', 'Ratatouille', { berinjela: 2, abobrinha: 2, tomate: 2, pimentao: 1, tomilho: 1 }, 'Um arco-íris de legumes.'),
  R('goiabada', 'Goiabada cascão', { goiabeira: 5 }, 'Com queijo, vira Romeu e Julieta.'),
  R('banana_assada', 'Banana assada com canela', { bananeira: 4 }, 'Sobremesa de domingo.'),
  R('geleia_jabuticaba', 'Geleia de jabuticaba', { jabuticabeira: 5 }, 'Roxa e brilhante.'),
  R('figo_calda', 'Figo em calda', { figueira: 4 }, 'Doce de vó.'),
  R('torta_frutas', 'Torta de frutas vermelhas', { framboesa: 2, amora_preta: 2, mirtilo: 2, morango: 2 }, 'A mais bonita da vitrine.'),
  R('sorvete_manga', 'Sorvete de manga', { mangueira: 4 }, 'Cremoso, sem máquina.'),
  R('guacamole', 'Guacamole', { abacateiro: 2, tomate: 1, cebola: 1, coentro: 1 }, 'Para comer com as amigas.'),
  R('moqueca', 'Moqueca de legumes', { pimentao: 2, tomate: 2, coentro: 2, cebola: 1, coqueiro: 1 }, 'No leite de coco.'),
  R('cocada', 'Cocada', { coqueiro: 3 }, 'Branquinha e macia.'),
  R('azeite_ervas', 'Azeite de ervas', { oliveira: 3, alecrim: 2, tomilho: 1 }, 'Um presente feito em casa.'),
  R('abacaxi', 'Abacaxi grelhado', { abacaxi: 2, hortela: 1 }, 'Douradinho.'),
  R('chocolate', 'Chocolate quente', { cacaueiro: 3 }, 'Do cacau à xícara.'),
  R('alcachofra', 'Alcachofra ao alho', { alcachofra: 2, alho: 2, salsinha: 1 }, 'Chique que só.'),
];
// only recipes whose ingredients exist in the seed catalogue; coins and level follow from the ingredients
export const RECIPES = ALL.filter((r) => Object.keys(r.ing).every((k) => SPECIES[k])).map((r) => { let v = 0, lvl = 1; for (const k in r.ing) { v += SPECIES[k].gift * r.ing[k]; lvl = Math.max(lvl, SPECIES[k].lvl); } return { ...r, lvl, coins: Math.max(20, Math.round((v * 2.6) / 5) * 5) }; }).sort((a, b) => a.lvl - b.lvl || a.coins - b.coins);
export const RECIPE_BY = Object.fromEntries(RECIPES.map((r) => [r.id, r]));
export const canCook = (r, basket) => Object.keys(r.ing).every((k) => (basket[k] || 0) >= r.ing[k]);
export const STOVES = ['fogao_simples', 'fogao_lenha', 'forno_torre', 'cozinha_luxo'];
