type Percentuals = {
    total : number,
    percentuals : number[]
}


export default class AdvancedMath {
    /**
     * 
     * @param {number} n Valor à ser calculado.
     * @returns O fatorial de um valor numérico.
     */

    static factorial(n : number) : bigint{
        let factorialNumber = BigInt(1);

        for(let x = BigInt(n); x > 0; x--){
            factorialNumber *= x;
        }

        return factorialNumber;
    }

    /**
     * 
     * @param numbers Numeros para a realização do calculo. 
     * @returns O mínimo multiplo comum entre tods os numeros informados.
     */

    static getMMC(...numbers : number[]){
        const decomposition : number[] = [];
        const INT_DIGITS = [2, 3, 4, 5, 6, 7, 8, 9];
        
        const getCommonNumberToMMC = () => {
        let primeNumber : number = 0;

        for(let x = 0; x < numbers.length; x++){
            if(primeNumber != 0) break;

            for(let y = 0; y < INT_DIGITS.length; y++){
                if(numbers[x] <= INT_DIGITS[y]) break;
                if((numbers[x] % INT_DIGITS[y]) === 0){
                return INT_DIGITS[y]
                }
            }

            primeNumber = numbers[x];
        }

        return primeNumber;
        }

        while(numbers.length != 0){
        const multiple = getCommonNumberToMMC();
        decomposition.push(multiple)

        for(let x = 0; x < numbers.length; x++){
            if((numbers[x] % multiple) == 0) {
            numbers[x] = numbers[x] / multiple;
            }
        }

        numbers = numbers.filter(x => x != 1) 
        }

        return decomposition.reduce((acc, curr) => acc *= curr);
    }
    
    /**
     * @description Obtem o percentual de cada valor em relação ao total entre eles.
     * @param {number[]} n Um numero indefinido de valores numericos.
     * @returns {Percentuals} Os percentuais e o total.
     */
    
    static getPercentualFrom(...n : number[]) : Percentuals {
        const total : number = n.reduce((acc, curr) => {
            return acc += curr
        });
    
        const percentuals : number[] = n.map(x => {
           return x * 100 / total
        })
        
        return { total, percentuals } 
    }

    /**
     * 
     * @param sequence Array de numeros.
     * @returns Se a sequência é uma progressão aritimética.
     */
    static isAP(sequence :  number[]){
        const reason = sequence[1] - sequence[0];
        for(let i = 1; i < sequence.length; i++){
            console.log(reason, sequence[i - 1] - sequence[i]);
            
            if((sequence[i] - sequence[i - 1]) !== reason){
                return false
            }
        }

        return true;
    }

    /**
     * 
     * @param sequence Array de numeros.
     * @returns Se a sequência é uma progressão geométrica.
     */
    static isGP(sequence :  number[]){
        const reason = sequence[1] / sequence[0];
        for(let i = 1; i < sequence.length; i++){    
            if((sequence[i] / sequence[i - 1]) !== reason){
                return false
            }
        }

        return true;
    }

    /**
     * 
     * @param {number} percentual Numero entre 1 e 0 que represente a chance de um retorno verdadeiro.
     * @param {number} total Numero inteiro de casos totais.
     * @returns {boolean} Valor verdadeiro ocorrer tal possibilidade, senão, falso.
     */

    static possibility(percentual : number, total : number = 1){
        const random = (n : number) => {
            return Math.floor(Math.random() * n)
        }

        if(percentual > 1 || percentual < 0) throw new Error('O percentual precisa ser um numero entre 1 e 0');
        const chance = percentual * total;
        return random(total) <= chance;
    }

    /**
     * 
     * @param callback Função executada ao fim da contagem.
     * @param time Tempo em segundos definido para a contagem do cronômetro.
     * @param timeTick Velocidade em que o tempo avançará.
     * @returns Resultado da função passada por callback.
     */
    static countdown(callback : Function, time : number, timeTick : number = 1){
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
}