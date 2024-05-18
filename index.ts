import PROCV from "./functions/excel/PROCV";

const table = [
    ['Nome',     'Setor',     'Idade',  'Trabalhando'],
    ['Gabriel',  'Produção',  '19',     true],
    ['Jorginho', 'RH',        '20',     false]
]

console.log(PROCV('B2', table, 1))