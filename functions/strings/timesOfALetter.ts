/**
 * 
 * @param letters Letras que serão contadas do texto (tudo acima de 1 caractere será ignorado).
 * @param text Texto em que as letras serão buscadas.
 * @returns Objeto contendo a contagem de cada letra no texto. Se nenhuma letra for válida, será retornado false.
 */
export default function timesOfALtetter(letters : string[], text : string) : Record<string, number> | boolean {
    const lettersCounter : Record<string, number> = {};
    for(let i = 0; i < letters.length; i++){
        if(letters[i].length > 1){
            continue;
        }

        lettersCounter[letters[i]] = 0;
    }
    
    const keys = Object.keys(lettersCounter)

    if(keys.length === 0) return false;

    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < keys.length; j++){
            if(text[i] === keys[j]){
                lettersCounter[keys[j]]++;
            }   
        }
    }

    return lettersCounter;
}