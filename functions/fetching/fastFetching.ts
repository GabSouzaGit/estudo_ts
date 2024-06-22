async function fastFetching(...urls : string[]){
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

console.log(
    fastFetching(
        'https://viacep.com.br/ws/01001000/json/', 
        ''
    )
);
