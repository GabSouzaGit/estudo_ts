/**
 * @description Ordena uma matriz numérica, utilizando um algoritimo de ordenação por seleção.
 * @param {number[]} array Uma  matriz numérica de n posições.
 * @returns Uma versão ordenada da matriz.
 */

export default function selectionSort(array : number[]){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }

    return array;
}