type Percentuals = {
    total : number,
    percentuals : number[]
}

/**
 * @description Obtem o percentual de cada valor em relação ao total entre eles.
 * @param {number[]} n Um numero indefinido de valores numericos.
 * @returns {Percentuals} Os percentuais e o total.
 */

function getPercentualFrom(...n : number[]) : Percentuals {
    const total : number = n.reduce((acc, curr) => {
        return acc += curr
    });

    const percentuals : number[] = n.map(x => {
       return x * 100 / total
    })
    
    return { total, percentuals } 
}

export default getPercentualFrom;
