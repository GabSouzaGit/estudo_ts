type Fn = (...params: any) => any

/**
 * @param fn {Fn} Uma função que recebe um numero indefinido de parametros e retorna qualquer dado.
 * @returns Uma versão memoizada da função informada.
 */

function memoize(fn: Fn): Fn {
    const cache : {
        [key : string] : any
    } = {}

    return function(...params : any) {
        const key = JSON.stringify(params);
        if(key in cache){
            return cache[key];
        }

        const result = fn(...params);
        cache[key] = result;
        return result;
    }
}

export default memoize;


