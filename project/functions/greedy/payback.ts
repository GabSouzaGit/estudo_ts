const coins : Record<string, number> = {
    '50': 0,
    '25': 0,
    '10': 0,
    '5': 0,
    '1': 0
};

const coinsValues : number[] = [50, 25, 10, 5, 1];

/**
 * 
 * @param {number} value Valor a ser pago.
 * @param {number} payment Pagamento pelo valor.
 * @returns {number[]} Troco do valor pago em moedas. 
 */

export default function payback(value : number, payment : number){
    let rest = value - payment;
    let paybackCoins : number[] = [];
    while(rest > 0){
        for(let coin = 0; coin < coinsValues.length; coin++){
            if(rest - coinsValues[coin] < 0){
                continue;
            }

            coins[coinsValues[coin]] += 1;
            rest -= coinsValues[coin];
            paybackCoins.push(coinsValues[coin])
            break;
        }
    }

    const coinsKeys = Object.keys(coins);

    const filteredCoins = coinsKeys.filter(coin => {
        return coins[coin] != 0;
    })

    const filteredResult : any[] = filteredCoins.map(x => {
        return [x, coins[x]]
    })

    return filteredResult;
}