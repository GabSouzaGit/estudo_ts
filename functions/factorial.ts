/**
 * 
 * @param {number} n Valor à ser calculado.
 * @returns O fatorial de um valor numérico.
 */

function factorial(n : number) : number{
    if(n <= 1) return n;
    return n * factorial(n - 1);
}

export default factorial;