declare global {
    interface Array<T> {
        getOnlyPairs() : number[]
    }
}

/**
 * 
 * @returns Um novo array com apenas números pares.
 */
Array.prototype.getOnlyPairs = function(){
    const pairArray : number[] = [];
    for(let x = 0; x < this.length; x++){
        if(this[x] % 2 === 0) pairArray.push(this[x]);
    }

    return pairArray;
}

export {};