import type { Matrix } from "../../types/Matrix";

/**
 * 
 * @param first Matriz numérica com número de linhas igual ao de colunas da segunda.
 * @param second Matriz numérica com número de colunas igual ao de linhas da primeira.
 * @returns Matriz que corresponda a multiplicação dos termos das outras duas.
 */
export default function matrixMulti(first : Matrix<number>, second : Matrix<number>){
    const leftSameLinesAndCols = first.length === second[0].length;
    const rightSameLinesAndCols = second.length === first[0].length;
    const multipliedMatrix : Matrix<number> = [];

    if(leftSameLinesAndCols 
    && rightSameLinesAndCols){
        for(let i = 0; i < first.length; i++){
            const multipliedLine : number[] = []
            for(let j = 0; j < second[0].length; j++){
                const multiplications : number[] = []
                for(let k = 0; k < second.length; k++){
                    multiplications.push(first[i][k] * second[k][j]);
                }

                multipliedLine.push(multiplications.reduce((acc, curr) => acc += curr))
            }
            multipliedMatrix.push(multipliedLine);
        }
    }

    return multipliedMatrix;
}