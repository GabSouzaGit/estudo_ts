/**
 * @param {BinaryTree} tree Estrutura de dados representada como uma árvore binária numérica.
 * @returns {number} Resultado da soma dos maiores nós traçados durante o percurso pela árvore.
 */

function treeNodesSum(tree : BinaryTree<number>) : number {
    let sum = tree.node; 

    const recursive = (subTree : BinaryTree<number>) => {
        if(subTree.left && subTree.right){
            if(subTree.left.node > subTree.right.node){
                sum += subTree.left.node;
                recursive(subTree.left)
                return;
            }else{
                sum += subTree.right.node;
                recursive(subTree.right);
                return;
            }
        }

        if(!subTree.left && !subTree.right){
            return;
        }

        const next = (subTree.left || subTree.right) as BinaryTree<number>;
        sum += next.node;
        recursive(next);
    }

    recursive(tree)

    return sum;
}

export default treeNodesSum;