type Keys = {
    [key : string] : string
}

type Timeouts = {
    [key : string] : any;
}

class CachedKeys {
    private keys : Keys = {}
    private timeouts : Timeouts = {};
    constructor(){}

    /**
     * 
     * @param {string} key Chave associada ao valor.
     * @param {string} value Valor associado a chave.
     * @param {number} ms Tempo em milissegundos da duração do valor em cache.
     * @returns {boolean} Retorna se a chave informada já existe.
     */
    set(key : string, value : string, ms : number) : boolean{
        let exists : boolean = false
        if(key in this.keys){
            exists = true;
        }

        this.keys[key] = value;
        this.timeouts[key] = setTimeout(() => {
            delete this.keys[key];
            delete this.timeouts[key];
            console.log(`A chave ${key} acabou e expirar em ${ms} milissegundos.`)
        }, ms);

        return exists
    }

    /**
     * 
     * @param {string} key Chave associada ao valor desejado.
     * @returns {string | unknown} Retorna o valor da chave se ela existir, caso contrário, um valor nulo. 
     */
    get(key : string) : string | unknown {
        if(key in this.keys) return this.keys[key];
        return null;
    }

    /**
     * 
     * @returns {number} Retorna o numero de chaves cacheadas.
     */
    count() : number{
        return Object.keys(this.keys).length;
    }
}

export default CachedKeys;