export default function chunkSymmetricallyArray(array : any[]){
    const chunkedArray : any[][] = [];
    let chunkLength = 0;

    for(let i = 2; i <= 9; i++){
        if(i === array.length) break;
        if(array.length % i === 0){
            chunkLength = i;
            break;
        }
    }
    
    if(chunkLength === 0) return [];

    for(let j = chunkLength; j <= array.length; j += chunkLength){
        const chunk = array.slice(j - chunkLength, j);
        chunkedArray.push(chunk);
    }

    return chunkedArray;
}