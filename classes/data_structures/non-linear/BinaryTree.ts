type BinaryTreeType = {
    node : number,
    left : BinaryTreeType | null,
    right : BinaryTreeType | null
}

function TreeNode(value : number){
    this.value = value
    this.left = null,
    this.right = null
}

export default class BinaryTree{
    private head : BinaryTreeType;
    public nodeQtd : number = 0;
    
    constructor(value : number){
        this.head = new TreeNode(value);
        this.nodeQtd = 1;
    }

    public append(value : number){
        let currentRef = this.head;

        while(true){
            if(currentRef.node >= value){
                if(currentRef.left === null){
                    currentRef.left = new TreeNode(value);
                    return;
                }

                currentRef = currentRef.left;
                continue;
            }else{
                if(currentRef.right === null){
                    currentRef.right = new TreeNode(value);
                    return;
                }

                currentRef = currentRef.right;
                continue;
            }
        }
    }

    public getRepresentation(){
        return JSON.stringify(this.head, null, 2);
    }
}