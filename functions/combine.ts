function combine(n: number, k: number): Record<string, number[]> {
    const combinations : Record<string, number[]> = {};
    const test : number[][] = [];
    const combination : number[] = [];
    let x = 1

    for(let i = 0; i < k; i++){
        combination[i] = 1;
    }
    
    while(x <= n){
        for(let a = k - 1; a >= 0; a--){
            for(let b = 1; b <= n; b++){
                combination[a] = b;
                test.push([...combination]); 
            }
        }

        x++;
    }
    

    /*
    while(x <= (n * n)){
        let sum = 0;
        for(let a = 0; a < k; a++){
            for(let b = 1; b <= n; b++){
                combination[a] = b;
                test.push(combination); 
            }
        }
        
        console.log(, sum)
        x++;
    }
    */

    console.log(test)
    return combinations;
};

export default combine;

/*

if(sum.toString() in combinations){
            x++;
            continue;
        }

combinations[sum.toString()] = combination; 

*/
