type FunctionalError = (error : any) => any

async function typedFetcher<ResponseType>(url : string, callbackError : FunctionalError){
    try {
        const raw : Response = await fetch(url);
        const treated : ResponseType = await raw.json();
        return treated;
    }catch(exception : any){
        return callbackError(exception)
    }
}

export default typedFetcher;