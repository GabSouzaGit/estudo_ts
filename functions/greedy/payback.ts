const coins : number[] = [50, 25, 10, 5, 1];

function payback(value : number, payment : number){
    let rest = value - payment;
    let paybackCoins : number[] = [];
    while(rest > 0){
        for(let coin = 0; coin < coins.length; coin++){
            if(rest - coins[coin] < 0){
                continue;
            }

            rest -= coins[coin];
            paybackCoins.push(coins[coin])
            break;
        }
    }

    return paybackCoins;
}

export default payback;