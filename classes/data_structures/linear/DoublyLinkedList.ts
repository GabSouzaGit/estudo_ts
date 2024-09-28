type DoublyLinkedListType<T> = {
    previous : DoublyLinkedListType<T>| null,
    value : T,
    next : DoublyLinkedListType<T> | null
}

export default class DoublyLinkedList<T>{
    private struct : DoublyLinkedListType<T>

    constructor(first : T){
        this.struct = {
            previous: null,
            value: first,
            next: null
        }
    }

    public appendNext(value : T){
        let current = this.struct;
        
        while(true){
            if(current.next === null){
                current = {
                    previous: { ...current },
                    value,
                    next: null
                }

                this.struct = current

                return;
            }
        }
    }

    public getDataStructure(){
        return JSON.stringify(this.struct, null, 2)
    }
}