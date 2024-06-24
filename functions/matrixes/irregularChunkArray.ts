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