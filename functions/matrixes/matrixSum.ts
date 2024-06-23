import type { Matrix } from "../../types/Matrix";

/**
 * 
 * @param first Primeira matriz.
 * @param second Segunda matriz.
 * @returns Uma nova matriz com todos os elementos somados.
 */
export default function matrixSum(first : Matrix<number>, second : Matrix<number>){
    const lengthLines = first.length === second.length;
    const lengthCols = first[0].length === second[0].length;
    const matrix : Matrix<number> = [];

    if(lengthLines && lengthCols){
        for(let i = 0; i < first.length; i++){
            if(first[i].length !== second[i].length){
                throw new Error('O tamanho das linhas da matrizes é diferente.');
            }

            matrix[i] = []
            for(let j = 0; j < first[0].length; j++){
                matrix[i][j] = first[i][j] + second[i][j];
            }
        }

        return matrix
    }
}
