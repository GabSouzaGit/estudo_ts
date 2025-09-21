type FunctionalError = (error : any) => any

/**
 * 
 * @param {string} url URL até o caminho do recurso.
 * @param {FunctionalError} callbackError Função que será executada no caso do lançamento de uma exceção.
 * @returns {any} Objeto retornado pela busca.
 */
export default async function typedFetcher<ResponseType>(url : string, callbackError : FunctionalError){
    try {
        const raw : Response = await fetch(url);
        const treated : ResponseType = await raw.json();
        return treated;
    }catch(exception : any){
        return callbackError(exception)
    }
}