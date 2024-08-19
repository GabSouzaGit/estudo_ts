/**
 * 
 * @param numbers Numeros para a realização do calculo. 
 * @returns O mínimo multiplo comum entre tods os numeros informados.
 */

function getMMC(...numbers : number[]){
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