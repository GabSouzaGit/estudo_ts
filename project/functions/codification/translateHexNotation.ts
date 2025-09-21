type HexAdvancedPartition = `${1|2|3|4|5|6|7}${0|1|2|3|4|5|6|7|8|9|'A'|'B'|'C'|'D'|'E'|'F'}`
type HexLetterPartition = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type HexNumberPartition = `${0|1|2|3|4|5|6|7|8|9}`;
type HexValue = HexNumberPartition | HexLetterPartition | HexAdvancedPartition;
type Hexadecimal = HexValue[]

/**
 * 
 * @param hex Notação em hexadecimal, representada por um array.
 * @returns Valor traduzido em caractéres legíveis.
 */
export default function translateHexNotation(hex : Hexadecimal){
    let translated : string ='';
    for(let i = 0; i < hex.length; i++){
        const dec = parseInt(hex[i], 16);
        translated += String.fromCharCode(dec);
    }

    return translated;
}
