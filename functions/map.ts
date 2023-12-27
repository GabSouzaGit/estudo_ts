type Mapper = (item : any, i : number, array : any[]) => any;

/**
 * @param {any[]} array Um array de n posições de qualquer tipo. 
 * @param {Mapper} callback Uma função que recebe o item atual do array, o indice dele e o array em si. Retorna um novo valor para o item atual a cada iteração.
 * @returns Um novo array mapeado pela função callback.
 */
function map(array : any[], callback : Mapper){
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

export default map;