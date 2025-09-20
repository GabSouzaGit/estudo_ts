/**
 * 
 * @param first Matriz numérica com o mesmo número de linhas e colunas da segunda.
 * @param second Matriz numérica com o mesmo número de linhas e colunas da primeira.
 * @returns Matriz que corresponda a subtração dos termos das outras duas.
 */
export default function matrixSub(first : Matrix<number>, second : Matrix<number>){
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
                matrix[i][j] = first[i][j] - second[i][j];
            }
        }

        return matrix
    }
}