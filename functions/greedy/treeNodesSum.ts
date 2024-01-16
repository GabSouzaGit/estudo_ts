type Tree = {
    node : number,
    left? : Tree,
    right? : Tree
}

function treeNodesSum(tree : Tree) : Record<string, number | number[]>{
    const treePath : number[] = [tree.node];
    let curr = tree;
    let sum = curr.node;

    while(true){
        if(curr.right && curr.left){
            const [bigger, side] : [number, string] = curr.right.node > curr.left.node ? [curr.right.node, 'right'] : [curr.left.node, 'left'];
            sum += bigger;
            treePath.push(bigger)
            curr = curr[side];
            continue;
        }

        if(!curr.right){
            const left = (curr.left as Tree)
            sum += left.node;
            treePath.push(left.node)
            curr = left;
            continue;
        }

        if(!curr.left){
            const right = (curr.right as Tree)
            sum += right.node;
            treePath.push(right.node)
            curr = right;
            continue
        }

        break;
    }

    return {
        sum,
        treePath
    }
}

export default treeNodesSum;