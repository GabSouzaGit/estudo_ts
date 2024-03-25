type Mapper = (item : any, i : number, array : any[]) => any;
type Reducer = (acc : any, curr : any) => any;
type FilterFunction = (target : any, index? : number, array? : any[]) => boolean

/**
 * @param {any[]} array Um array de n posições de qualquer tipo. 
 * @param {Mapper} callback Uma função que recebe o item atual do array, o indice dele e o array em si. Retorna um novo valor para o item atual a cada iteração.
 * @returns Um novo array mapeado pela função callback.
 */
export function map(array : any[], callback : Mapper){
    const mappedArray : any[] = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            mappedArray[i] = callback(array[i], i, array);
            continue;
        }

        mappedArray[i] = array[i];
    }

    return mappedArray;
}

/**
 * 
 * @param {any[]} array Um array de n posições de qualquer tipo. 
 * @param {Reducer} callback Uma função que obtém a variavel acumuladora e o item atual. Retorna um novo valor para o acumulador.
 * @param {init} init Valor inicial do acumulador, sendo por padrão o primeiro valor do array.
 * @returns A versão reduzida do array.
 */

export function reduce(array : any[], callback : Reducer, init = array[0]){
    let acc = init;
    for(let i = 0; i < array.length; i++){
        if(callback(acc, array[i])){
            acc = callback(acc, array[i]);
        }
    }

    return acc;
}

/**
 * 
 * @param {any[]} array Um array de n posições de qualquer tipo. 
 * @param {FilterFunction} callback Função que retorna um booleano como resultado do filtro
 * @returns {any[]} Versão filtrada do array.
 */
export function filter(array : any[], callback : FilterFunction){
    const filtered : any[] = [];
    for(let x = 0; x < array.length; x++){
        if(callback(array[x], x, array)){
            filtered.push(array[x])
        }
    }

    return filtered;
}

/**
 * 
 * @param {number[]} array Um array numérico de n posições.
 * @returns Um novo array com apenas números pares.
 */
export function getOnlyPairs(array : number[]){
    const pairArray : number[] = [];
    for(let x = 0; x < array.length; x++){
        if(array[x] % 2 === 0) pairArray.push(array[x]);
    }

    return pairArray;
}
