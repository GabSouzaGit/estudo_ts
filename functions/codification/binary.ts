/**
 * 
 * @param value Valor desejado para a conversão
 * @returns Todos os caracteres no formato binário (apenas legivel normalmente em codificação Windows-1252)
 */

type Binary = `${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}`

const OCTECT_LENGTH = 8;

export function toBinary(value : string) : Binary[] {
    const binaryTrack : Binary[] = [];
    for(let i = 0; i < value.length; i++){
        let currentBinaryConversion : number[] = []
        let currentCharCode = value.charCodeAt(i);

        while(true){
            const binary01 = currentCharCode % 2;
            currentCharCode = Math.floor(currentCharCode / 2);
            currentBinaryConversion.push(binary01);

            if(currentCharCode <= 1){
                currentBinaryConversion.push(currentCharCode)
                break;
            }
        }

        currentBinaryConversion.reverse();
        const bitsDifference = OCTECT_LENGTH - currentBinaryConversion.length;

        if(bitsDifference != 0){
            const remainingBits = new Array(bitsDifference).fill(0);
            currentBinaryConversion = [...remainingBits, ...currentBinaryConversion];
        }

        binaryTrack[i] = currentBinaryConversion.join('') as Binary;
    }

    return binaryTrack;
}

/**
 * 
 * @param binaryArray Um array contendo todos os caracteres da sua palavra em binário.
 * @returns Um valor em string que corresponda a coleção de binários informada.
 */
export function fromBinary(binaryArray : Binary[]) : string {
    let text = '';
    for(let i = 0; i < binaryArray.length; i++){
        const numericBinary = binaryArray[i].split('').map(digit => Number(digit));
        let charCode = 0;

        numericBinary.reverse().map((digit, i) => {
            charCode += digit * 2 ** i;
        });

        text += String.fromCharCode(charCode);
    }

    return text;
}