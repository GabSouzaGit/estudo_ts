type Tree = {
    node : number,
    left? : Tree,
    right? : Tree
}

function treeNodesSum(tree : Tree) : number {
    let sum = tree.node; 

    const recursive = (subTree : Tree) => {
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

        const next = (subTree.left || subTree.right) as Tree;
        sum += next.node;
        recursive(next);
    }

    recursive(tree)

    return sum;
}

export default treeNodesSum;