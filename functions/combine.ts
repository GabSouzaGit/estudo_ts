function combine(n: number, k: number): Record<string, number[]> {
    const combinations : Record<string, number[]> = {};
    const combination : number[] = [];
    let x = 1
    for(let i = 0; i < k; i++){
        combination[i] = 1;
    }
    while(x <= (n * n)){
        let sum = 0;
        
        
        console.log(combination, sum)
        if(sum.toString() in combinations){
            x++;
            continue;
        }

        combinations[sum.toString()] = combination;
        x++;
    }

    return combinations;
};

export default combine;
