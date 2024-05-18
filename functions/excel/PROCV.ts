type Column = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';
type Coordinate = `${Column}${number}`;

/**
 * 
 * @param { Coordinate } targetValue Célula para referenciar a linha do valor procurado.
 * @param matrix Tabela que reside o valor.
 * @param colIndex Coluna em que se encontra o valor.
 * @returns { any } Valor de desejado
 */
function PROCV(targetValue : Coordinate, matrix : any[][], colIndex : number){
    const alphabetArray : string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const splitedTarget : string[] = targetValue.split('');

    const convertCoordInIndexes = (splited : string[]) : [number, number] => {
        const converted : [number, number] = [0, 0];
        converted[1] = alphabetArray.indexOf(splited[0]);
        converted[0] = Number(splited[1]) - 1;

        return converted;
    }

    const coordInMatrix : [number, number] = convertCoordInIndexes(splitedTarget);
    const lineInMatrix = matrix[coordInMatrix[0]];
    return lineInMatrix[colIndex - 1];
}

export default PROCV;