type Reducer = (acc : any, curr : any) => any;

/**
 * 
 * @param {any[]} array Um array de n posições de qualquer tipo. 
 * @param {Reducer} callback Uma função que obtém a variavel acumuladora e o item atual. Retorna um novo valor para o acumulador.
 * @param init Valor inicial do acumulador, sendo por padrão o primeiro valor do array.
 * @returns A versão reduzida do array.
 */

function reduce(array : any[], callback : Reducer, init = array[0]){
    let acc = init;
    for(let i = 0; i < array.length; i++){
        if(callback(acc, array[i])){
            acc = callback(acc, array[i]);
        }
    }

    return acc;
}

export default reduce;