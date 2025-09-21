type Maze = (number | string)[][];
type Local = {
    x: number,
    y: number
}

const directions : Local[] = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
]

/**
 * 
 * @param {Maze} maze Estrutura de dados bidimensional que represente um labirinto (0 = parede; 1 = caminho).
 * @param {Local} start Objeto com propriedades x (horizontal) e y (vertical) que representem o inicio do caminho feito pelo algoritmo. 
 * @param {Local} final Objeto com propriedades x (horizontal) e y (vertical) que representem o fim do caminho feito pelo algoritmo. 
 * @returns {Maze} Labirinto com o caminho encontrado pelo algoritmo.
 */

export default function mazeResolver(maze : Maze, start : Local, final : Local) : Maze{
    function resolver(position : Local, exit : Local){
        const path : Local[] = [];
        const notInTheMaze = position.x < 0 || position.y < 0; 
        const afterTheMaze = position.x >= maze[0].length || position.y >= maze.length;

        if(notInTheMaze || afterTheMaze){
            return false;
        }

        if(position.x == exit.x && position.y == exit.y){
            maze[position.y][position.x] = 2;
            return true;
        }
        
        const openPath = maze[position.y][position.x] === 1;

        if(openPath){
            path.push(position);
            maze[position.y][position.x] = 2;

            for(let pos = 0; pos < directions.length; pos++){
                const nextPosition = {
                    x: position.x + directions[pos].x,
                    y: position.y + directions[pos].y
                }

                if(resolver(nextPosition, exit)){
                    return true
                }
            }
            
            path.pop();
        }

        return false
    }

    resolver(start, final)

    return maze;
}
