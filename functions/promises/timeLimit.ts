type Fn =  (...params: any[]) => Promise<any>;

/**
 * 
 * @param fn Função com um atraso de tempo de execução.
 * @param t Tempo limite para execução.
 * @returns Uma nova versão da função, agora dentro do tempo limite.
 */
function timeLimit(fn: Fn, t: number): Fn {
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const itn = setTimeout(() => {
                reject("Time Limit Exceeded");
                return;
            }, t)

            try {
                const result = await fn(...args)
                clearTimeout(itn);
                resolve(result)
            }catch(exception){
                reject(exception)
            }
        })
    }
};