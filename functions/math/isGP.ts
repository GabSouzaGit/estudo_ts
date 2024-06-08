/**
 * 
 * @param sequence Array de numeros.
 * @returns Se a sequência é uma progressão geométrica.
 */
function isGP(sequence :  number[]){
    const reason = sequence[1] / sequence[0];
    for(let i = 1; i < sequence.length; i++){    
        if((sequence[i] / sequence[i - 1]) !== reason){
            return false
        }
    }

    return true;
}