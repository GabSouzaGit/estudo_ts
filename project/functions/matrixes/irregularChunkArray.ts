/**
 * @description Particiona de forma irregular qualquer matriz de qualquer tipo.
 * @param array Matriz de qualquer tipo ou tamanho.
 * @param chunkLength Tamanho dos blocos da matriz.
 * @returns Versão particionada da matriz.
 */
export default function irregularArrayChunk(array : any[], chunkLength : number){
    const chunkedArray : any[][] = [];
    let currentChunk : any[] = [];

    for(let i = 0; i < array.length; i++){
        if(currentChunk.length === chunkLength){
            chunkedArray.push(currentChunk);
            currentChunk = [];
        }

        currentChunk.push(array[i]);
    }

    if(currentChunk.length != 0){
        chunkedArray.push(currentChunk);
    }

    return chunkedArray;
}