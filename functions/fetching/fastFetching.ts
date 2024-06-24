/**
 * 
 * @param urls Endpoints que serão consumidos pela função.
 * @returns O resultado do endpoint que respondeu mais rápido à requisição.
 */
export default async function fastFetching(...urls : string[]){
    const promises : (() => Promise<any>)[] = []

    const generatePromise = (url : string) => {
        return async () => {
            try {
                return fetch(url);
            }catch(exception){
                return exception
            }
        }
    }

    for(let i = 0; i < urls.length; i++){
        const promise = generatePromise(urls[i]);
        promises.push(promise);
    }

    return await Promise.race(promises);
}
