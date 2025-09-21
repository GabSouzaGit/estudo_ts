/**
 * @description Particiona, gulosamente e simetricamente, uma matriz de N posições em blocos.
 * @param array Matriz de qualquer tipo ou tamanho.
 * @returns Versão particionada da matriz.
 */
export function greedyChunkArray(array : any[]){
    const chunkedArray : any[][] = [];
    let chunkLength = 0;

    for(let i = 2; i < 9; i++){
        if(array.length % i === 0 && i > chunkLength){
            chunkLength = i;
        }
    }
    
    if(chunkLength === 0) return [];

    for(let j = chunkLength; j <= array.length; j += chunkLength){
        const chunk = array.slice(j - chunkLength, j);
        chunkedArray.push(chunk);
    }

    return chunkedArray;
}

/**
 * @description Particiona, simetricamente e o mais gulosamente possível, uma matriz de N posições.
 * @param array Matriz de qualquer tipo ou tamanho.
 * @returns Versão particionada da matriz.
 */
export function reallyGreedyChunkArray(array : any[]){
    const chunkedArray : any[][] = [];
    let chunkLength = 0;

    for(let i = 2; i < array.length - 1; i++){
        if(array.length % i === 0 && i > chunkLength){
            chunkLength = i;
        }
    }
    
    if(chunkLength === 0) return [];

    for(let j = chunkLength; j <= array.length; j += chunkLength){
        const chunk = array.slice(j - chunkLength, j);
        chunkedArray.push(chunk);
    }

    return chunkedArray;
}