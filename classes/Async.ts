type CachedRequests = {
    [key : string] : any
}

class Async extends Promise<PromiseConstructor>{
    private static cachedRequests : CachedRequests = {};
    constructor(callback : (resolve : any, reject : any) => (any)){
        super(callback);
    }

    /**
     * @description Realiza uma requisição para um serviço de forma memoizada, cacheando o resultado.
     * @param {string} url URL da API ou serviço a ser consumido. 
     * @param {object} options Configurações para o fetching.
     * @returns {any} Resultado do serviço consumido.
     */
    public static async fetch(url : string, options = {}) : Promise<object>{
        if(url in this.cachedRequests){
            return this.cachedRequests[url];
        }

        const request = await fetch(url, options);
        const response = await request.json();
        this.cachedRequests[url] = response;
        return response;
    }

    /**
     * @description Limpa o cache de requisições.
     */
    public static flushCache(){
        this.cachedRequests = {};
    }
}

export default Async;