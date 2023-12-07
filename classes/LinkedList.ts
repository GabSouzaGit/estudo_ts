type LinkedListStructure<Data> = {
    [value : string] : Data | any
}

class LinkedList<Data>{
    private linkedList : LinkedListStructure<Data>;
    constructor(first ? : Data){
        if(first){
            this.linkedList = {
                value: first
            }
            return;
        }

        this.linkedList = {};
    }

    public push(value : Data) : void{
        if(!this.linkedList.value){
            this.linkedList.value = value;
            return;
        }

        let reference = this.linkedList;
        while(true){
            if(reference.next){
                reference = reference.next;
                continue;
            }

            break;
        }

        reference.next = { value: value }
    }

    public unshift(value : Data) : void {
        if(!this.linkedList.value){
            this.linkedList.value = value;
            return;
        }

        this.linkedList = {
            value: value,
            next: this.linkedList
        }
    }

    public delete(value : Data){
        let currentNode : any = this.linkedList;
        if(!currentNode.next) return;
        
        let previousPath : any;
        let nextPath : any;
        while(true){            
            if(currentNode.next.value === value){
                previousPath = currentNode;
                nextPath = currentNode.next.next;
                break;
            }
            if(currentNode.value === value){
                this.linkedList = currentNode.next;
                return;
            }
            if(!currentNode.next){           
                return;
            }

            currentNode = currentNode.next;
        }

        previousPath.next = nextPath;
    }

    public flush(){
        this.linkedList = {};
    }

    public reset(value : Data){
        this.linkedList = {
            value: value
        }
    }

    public getLast() : Data {
        let currentNode = this.linkedList;
        while(true){
            if(currentNode.next){
                currentNode = currentNode.next;
                continue;
            }

            break;
        }

        return currentNode.value;
    }

    public getFirst() : Data {
        const currentNode : any = this.linkedList.value;
        return currentNode;
    }

    public getDataStructure() : string {
        return JSON.stringify(this.linkedList, null, 2);
    }
}

export default LinkedList;