/**
 * 
 * @param {number} percentual Numero entre 1 e 0 que represente a chance de um retorno verdadeiro.
 * @param {number} total Numero inteiro de casos totais.
 * @returns {boolean} Valor verdadeiro ocorrer tal possibilidade, senão, falso.
 */

function possibility(percentual : number, total : number = 1){
    const random = (n : number) => {
        return Math.floor(Math.random() * n)
    }

    if(percentual > 1 || percentual < 0) throw new Error('O percentual precisa ser um numero entre 1 e 0');
    const chance = percentual * total;
    return random(total) <= chance;
}

export default possibility;