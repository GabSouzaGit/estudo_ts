declare global {
    interface Array<T> {
        getOnlyPairs() : number[],
        stoppableForEach(callback : (x : T, die : Function, index? : number, array? : T[]) => void) : void,
        fillWithCurrying(first : number) : (last : number) => (value : any) => boolean;  
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

/**
 * @description Versão experimental de um loop forEach que pode ser parado.
 * @param {(x : any, die : Function, index? : number, array? : any[]) => void} callback Função que será executada durante a iteração.
 */
Array.prototype.stoppableForEach = function(callback : (x : any, die : Function, index? : number, array? : any[]) => void){
    const die = () => {
        throw new Error('DIE_FOREACH_EXECUTION');
    }

    try {
        this.forEach((e : any, i : number) => {
            callback(e, die, i, this);
        })
    }catch(exception : any){
        if(exception.message === 'DIE_FOREACH_EXECUTION') return;
        throw exception;
    }
}

/**
 * @description Preenche os índices de uma matriz por meio de currying.
 * @param first Inicio do preenchimento.
 * @param last Fim do preenchimento.
 * @param value Valor para o preenchimento.
 */
Array.prototype.fillWithCurrying = function(first : number){
    return (last : number) => {
        return (value : any) => {
            if(first < 0 || first >= this.length
            || last < 0 || last >= this.length
            || first >= last){
                return false;
            }

            for(let i = first; i <= last; i++){
                this[i] = value;
            }

            return true;
        }
    }
}

export {};