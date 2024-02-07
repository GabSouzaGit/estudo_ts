function possibility(percentual : number, total : number){
    const random = (n : number) => {
        return Math.floor(Math.random() * n)
    }

    const chance = percentual * total;
    return random(total) <= chance;
}

export default possibility;