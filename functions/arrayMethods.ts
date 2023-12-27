type Mapper = (item : any, i : number, array : any[]) => any;
type Reducer = (acc : any, curr : any) => any;

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
 * @param init Valor inicial do acumulador, sendo por padrão o primeiro valor do array.
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
