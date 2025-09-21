/**
 * 
 * @param word Palavra ou trecho procurado.
 * @param text Texto em que a palavra será buscada.
 * @returns Contagem do numero de ocorrências da palavra no texto.
 */
export default function timesOfAWord(word : string, text : string) : number {
    let sequenceCounter : number = 0;
    let currentLetter : string = word[0];
    let occurrsOfWord : number = 0

    if(word.length <= 0 || text.length <= 0){
        return 0
    }

    for(let i = 0; i < text.length; i++){
        if(text[i] !== currentLetter){
            sequenceCounter = 0;
            currentLetter = word[0]
        }

        if(text[i] === currentLetter){
            sequenceCounter++;
            currentLetter = word[sequenceCounter];
        }

        if(sequenceCounter === word.length){
            sequenceCounter = 0;
            currentLetter = word[0];
            occurrsOfWord++;
        }
    }

    return occurrsOfWord;
}