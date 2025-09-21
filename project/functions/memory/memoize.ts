/**
 * @param {Function} fn Uma função que recebe um numero indefinido de parametros e retorna qualquer dado.
 * @returns Uma versão memoizada da função informada.
 */

export default function memoize(fn: Function): Function {
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


