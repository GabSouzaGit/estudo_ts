// Descrever didaticamente as diferentes formas de se usar recursão no código.

type IterationCallback = (x : any, i? : number, array? : any[]) => any

/**
 * @description Percorre um array recursivamente, executando um callback para cada elemento.
 * @param array Array desejado.
 * @param callback Função executada para cada elemento do array.
 * @returns Um novo array modificado pela função. 
 */
export function simpleRecursiveIteration(array : any[], callback : IterationCallback) : any[] {
    const modifiedArray : any[] = [];
    function iteration(currentIndex : number = 0){
        if(currentIndex >= array.length){
            return;
        }

        const newItem = callback(array[currentIndex], currentIndex, array);
        modifiedArray.push(newItem);

        iteration(currentIndex + 1);
    }

    iteration();
    return modifiedArray;
}

/**
 * @description Percorre um array recursivamente, executando um callback para cada elemento (recursão em statment condicional).
 * @param array Array desejado.
 * @param callback Função executada para cada elemento do array.
 * @returns Um novo array modificado pela função. 
 */
export function recursionInCondition(array : any[], callback : IterationCallback) : any[] {
    const modifiedArray : any[] = [];
    function iteration(currentIndex : number = 0){
        if(currentIndex >= array.length){
            return true;
        }

        const newItem = callback(array[currentIndex], currentIndex, array);
        modifiedArray.push(newItem);

        if(iteration(currentIndex + 1)){
            return true;
        }
    }

    iteration();
    return modifiedArray;
}

/**
 * @description Itera sob os nós de uma arvore, armazenando eles num array.
 * @param tree Arvore que contenha os nós valorizados numéricamente.
 * @returns Um array com todos os valores da arvore.
 */
export function treeIteration(tree : Tree<number>) : number[]{
    const treeValues : number[] = [];

    function tracking(currentTree : Tree<number>){
        treeValues.push(currentTree.value);
        if(currentTree.hasOwnProperty('childs') && currentTree.childs){
            for(let i = 0; i < currentTree.childs.length; i++){
                tracking(currentTree.childs[i]);
            }
        }
    }

    tracking(tree);
    return treeValues;
}

