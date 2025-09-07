import { possibility } from "../../classes/AdvancedMath";

const resolveStruct = [
    {
        name: 'Usuário A',
        born: 1996
    },
    {
        name: 'Usuário B',
        born: 2005
    },
    {
        name: 'Usuário C',
        born: 1985
    }
]

/**
 * 
 * @param {number | [number, number]} delay Tempo de demora para o retorno da Promise.
 * @param {number} errorChance Valor inteiro entre 0 e 1 que represente o percentual de geração de exceções na função.
 * @returns Uma Promise contendo ou os dados de retorno (resolve) ou um erro (reject).
 */

export default function APISimulation(delay : number | [number, number], errorChance : number){
    const getPromise = (time : number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(possibility(errorChance, 100)) reject(new Error('Falha na obtenção dos dados.'));
                resolve(resolveStruct);
            }, time);
        });
    }

    if(typeof delay === 'number') return getPromise(delay);
    
    const roundedDelay = Math.floor(Math.random() * delay[1] + delay[0]);
    return getPromise(roundedDelay);
}