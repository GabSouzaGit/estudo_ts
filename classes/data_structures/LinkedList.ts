type LinkedListStructure<Data> = {
    [value : string] : Data | any
}

class LinkedList<Data>{
    private linkedList : LinkedListStructure<Data>;
    /**
     * @description Realiza a instancia de uma lista encadeada símples.
     * @param {Data} first Primeiro valor para iniciar a lista encadeada (não obrigatório).
     */
    constructor(first ? : Data){
        if(first){
            this.linkedList = {
                value: first
            }
            return;
        }

        this.linkedList = {};
    }

    /**
     * @description Adiciona novo valor no final da lista.
     * @param {Data} value Valor a ser adicionado.
     */
    public push(value : Data){
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

    /**
     * @description Adiciona novo valor no inicio da lista.
     * @param {Data} value Valor a ser adicionado.
     */
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
    /**
     * @description Remove o valor da lista.
     * @param {Data} value Valor a ser removido.
     */
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

    /**
     * @description Remove todos os valores da lista.
     */
    public flush(){
        this.linkedList = {};
    }

    /**
     * @description Reseta toda a lista, reiniciando com um novo valor.
     * @param {Data} value Valor usado na reinicialização.
     */
    public reset(value : Data){
        this.linkedList = {
            value: value
        }
    }

    /**
     * @description Retorna o ultimo valor da lista.
     * @returns {Data} Ultimo valor correspondente.
     */
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

    /**
     * @description Retorna o primeiro valor da lista.
     * @returns {Data} Primeiro valor correspondente.
     */
    public getFirst() : Data {
        const currentNode : any = this.linkedList.value;
        return currentNode;
    }

    /**
     * @description Gera uma representação da lista.
     * @returns {string} Uma representação textual e formatada da estrutura de dados.
     */
    public getDataStructure() : string {
        return JSON.stringify(this.linkedList, null, 2);
    }
}

export default LinkedList;