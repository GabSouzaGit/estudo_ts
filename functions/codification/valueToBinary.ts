/**
 * 
 * @param value Valor desejado para a conversão
 * @returns Todos os caracteres no formato binário (apenas legivel normalmente em codificação Windows-1252)
 */

export default function valueToBinary(value : string) : string[] {
    const OCTECT_LENGTH = 8;
    const binaryTrack : string[] = [];
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

        binaryTrack[i] = currentBinaryConversion.join('');
    }

    return binaryTrack;
}