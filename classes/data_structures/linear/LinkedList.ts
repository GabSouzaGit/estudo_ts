type LinkedListStructure<T> = {
    [value : string] : T | any
}

class LinkedList<T>{
    private linkedList : LinkedListStructure<T>;
    /**
     * @description Realiza a instancia de uma lista encadeada símples.
     * @param {T} first Primeiro valor para iniciar a lista encadeada (não obrigatório).
     */
    constructor(first ? : T){
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
     * @param {T} value Valor a ser adicionado.
     */
    public push(value : T){
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
     * @param {T} value Valor a ser adicionado.
     */
    public unshift(value : T) : void {
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
     * @param {T} value Valor a ser removido.
     */
    public delete(value : T){
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
     * @param {T} value Valor usado na reinicialização.
     */
    public reset(value : T){
        this.linkedList = {
            value: value
        }
    }

    /**
     * @description Retorna o ultimo valor da lista.
     * @returns {T} Ultimo valor correspondente.
     */
    public getLast() : T {
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
     * @returns {T} Primeiro valor correspondente.
     */
    public getFirst() : T {
        const currentNode : any = this.linkedList.value;
        return currentNode;
    }

    /**
     * @description Gera uma representação da lista.
     * @returns {string} Uma representação textual e formatada da estrutura de dados.
     */
    public getTStructure() : string {
        return JSON.stringify(this.linkedList, null, 2);
    }
}

export default LinkedList;