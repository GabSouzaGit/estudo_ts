/**
 * @param {number} ms Tempo em milissegundos.
 * @description Pausa a execução do código por um determinado tempo (funcional apenas em async functions).
 */
export default function sleep(ms : number){
    return new Promise(resolve => {
        setTimeout(() => resolve, ms)
    });
}