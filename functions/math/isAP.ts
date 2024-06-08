/**
 * 
 * @param sequence Array de numeros.
 * @returns Se a sequência é uma progressão aritimética.
 */
function isAP(sequence :  number[]){
    const reason = sequence[1] - sequence[0];
    for(let i = 1; i < sequence.length; i++){
        console.log(reason, sequence[i - 1] - sequence[i]);
        
        if((sequence[i] - sequence[i - 1]) !== reason){
            return false
        }
    }

    return true;
}