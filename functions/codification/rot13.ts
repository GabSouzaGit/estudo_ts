/**
 * 
 * @param str Texto que será rotacionado.
 * @returns Versão do texto rotacionada 13 vezes.
 */
function rot13(str : string){
    const ABC : string[] = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let rot13String = "";
    
    for(let i = 0; i < str.length; i++){
        const letter = str[i];
        
        if(!(/[A-Za-z]/g.test(letter))) {
            rot13String += letter;
            continue;
        }

        const abcIndex = ABC.indexOf(letter.toLowerCase());
        const isUpper = letter == ABC[abcIndex].toUpperCase();

        if((abcIndex + 1 + 13) > ABC.length){
            const rot13Index = (abcIndex + 13) - ABC.length;
            rot13String += isUpper ? ABC[rot13Index].toUpperCase() : ABC[rot13Index];
            continue;
        }

        rot13String += isUpper ? ABC[abcIndex + 13].toUpperCase() : ABC[abcIndex + 13];
    }

    return rot13String;
}