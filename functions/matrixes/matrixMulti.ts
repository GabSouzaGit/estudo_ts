import type { Matrix } from "../../types/Matrix";

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