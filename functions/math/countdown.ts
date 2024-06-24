/**
 * 
 * @param callback Função executada ao fim da contagem.
 * @param time Tempo em segundos definido para a contagem do cronômetro.
 * @param timeTick Velocidade em que o tempo avançará.
 * @returns Resultado da função passada por callback.
 */
export default function countdown(callback : Function, time : number, timeTick : number = 1){
    const minutes = Number(Math.trunc(time / 60))
    const seconds = Math.abs((minutes * 60) - time);
    const currentCountdown = [minutes, seconds]

    return new Promise(resolve => {
        const interval = setInterval(() => {
            console.log(currentCountdown);
            
            if(currentCountdown[0] <= 0 && currentCountdown[1] <= 0){
                clearInterval(interval);
                resolve(callback());
            }
            if(currentCountdown[1] <= 0){
                currentCountdown[0]--;
                currentCountdown[1] = 59;
            }
            else{
                currentCountdown[1]--;
            }
        }, 1000 / timeTick)
    });
}