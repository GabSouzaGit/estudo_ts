export default class MinStack {
    // Stack principal
    private stack : number[] = [];
    private topNumberIndex : number = -1;

    // Stack mínima
    private minTimeline : number[] = []
    private momentInTimeline : number = -1;

    /**
     * @description Constroi pilha com tratamento para numeros mínimos com complexidade de tempo constante O(1).
     */
    constructor(){}

    /**
     * 
     * @param val Valor inserido na pilha.
     * @returns 
     */
    push(val: number): void {
        this.topNumberIndex++;
        this.stack[this.topNumberIndex] = val;

        if(this.momentInTimeline < 0
        || val < this.minTimeline[this.momentInTimeline]){
                this.momentInTimeline++;
                this.minTimeline[this.momentInTimeline] = val;
                
            return;
        }

        this.momentInTimeline++;
        this.minTimeline[this.momentInTimeline] = this.minTimeline[this.momentInTimeline - 1];
    }

    /**
     * 
     * @description Remove o elemento no topo da pilha.
     */
    pop(): void {
        if(this.topNumberIndex < 0) return;
        this.topNumberIndex--;
        this.momentInTimeline--;
    }

    /**
     * 
     * @description Obtém o elemento no topo da pilha.
     */
    top(): number {
        if(this.topNumberIndex < 0) return;
        return this.stack[this.topNumberIndex];
    }

    /**
     * 
     * @description Obtém o menor elemento da lista, independente da posição.
     */
    getMin(): number {
        if(this.momentInTimeline < 0) return;
        return this.minTimeline[this.momentInTimeline];
    }
}