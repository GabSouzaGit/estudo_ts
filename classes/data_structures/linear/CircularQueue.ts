export default class CircularQueue<T> {
    private struct : T[] = [];
    private position : number = 0;
    
    public size : number;

    /**
     * 
     * @param values Valores que serão adicionados na fila. 
     */
    constructor(...values : T[]){
        this.struct = values;
        this.size = this.struct.length;
    }

    /**
     * @description Adiciona um novo valor à fila.
     * @param value Valor que será adicionado.
     */
    public enqueue(value : T){
        this.struct = [value, ...this.struct];
        this.size++;
    }

    /**
     * @description Remove elemento(s) da fila.
     * @param qtd Quantidade de elementos que serão removidos.
     */
    public dequeue(qtd : number = 1){
        for(let x = 0; x < qtd; x++){
            if(this.struct.length === 0){
                break;
            }

            this.size--;
            this.struct.length--;
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
     * @description Obtém a estrutura da fila.
     * @returns Estrutura da fila formatada como objeto.
     */
    public getStructure(){
        const strcuture = {};
        for(let i = 0; i < this.struct.length; i++){
            strcuture[i] = this.get(i);
        }

        return strcuture;
    }

    /**
     * @description Permite a iteração circular da fila (o método não tem um loop implementado, ele apenas eleva o indice da fila a cada chamada).
     * @param callback Função executada durante cada iteração.
     * @returns Resultado da função.
     */
    public iterator(callback : Function){
        if(this.position >= this.size) this.position = 0;
        
        const result = callback(this.get(this.position));
        this.position++;

        return result;
    }
    
    /**
     * @description Retorna a iteração da fila para o primeiro índice.
     */
    public resetIterations(){
        this.position = 0;
    }
}