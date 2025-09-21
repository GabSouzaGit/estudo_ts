export default class Stack<T> {
    private struct : T[] = [];
    
    public size : number;

    /**
     * 
     * @param values Valores que serão adicionados na pilha. 
     */
    constructor(...values : T[]){
        this.struct = values;
        this.size = this.struct.length;
    }

    /**
     * @description Adiciona um novo valor à pilha.
     * @param value Valor que será adicionado.
     */
    public add(value : T){
        this.struct[this.struct.length] = value;
        this.size++;
    }

    /**
     * @description Remove elemento(s) da pilha.
     * @param qtd Quantidade de elementos que serão removidos.
     */
    public pop(qtd : number = 1){
        for(let x = 0; x < qtd; x++){
            if(this.struct.length === 0){
                break;
            }

            this.struct.length--;
            this.size--;
        }
    }

    /**
     * 
     * @param i índice da localização do elemento.
     * @returns Elemento localizado pelo índice.
     */
    public get(i : number){
        return this.struct[i];
    }

    /**
     * @description Obtém a estrutura da pilha.
     * @returns Estrutura da pilha formatada como objeto.
     */
    public getStructure(){
        const strcuture = {};
        for(let i = 0; i < this.struct.length; i++){
            strcuture[i] = this.get(i);
        }

        return strcuture;
    }
}