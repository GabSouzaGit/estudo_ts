type Matrix<T> = T[][];

function snailTraversal<A>(matrix : Matrix<A>){
    let [line, add] = [0, 1];
    for(let i = 0; i < matrix[0].length; i++){
        while(true){
            console.log(matrix[line][i]);
            line += add;
            if(line === matrix.length){
                line = matrix.length - 1;
                add = -1
                break;
            }
            if(line < 0){
                line = 0;
                add = 1
                break;
            }
        }
    }
}

export default snailTraversal;