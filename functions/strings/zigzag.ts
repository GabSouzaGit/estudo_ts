/**
* @param {string} s String que será percorrida.
* @param {number} number Altura do zig-zag
* @description Itera uma string em forma de zigzag, retornando versão convertida.
**/
export default function zigzag (s: string, numRows: number) : string {
  if(numRows == 1) return s;

  let zigzag_word : string[][] = [];

  for(let i = 0; i < numRows; i++){
    zigzag_word[i] = new Array(s.length).fill(" ");
  }

  let scaling : boolean = false;
  let col : number = 0;
  let line : number = 0;

  for(let i = 0; i < s.length; i++){
    const ch : string = s[i];

    if(scaling){  
      col++;
      line--;

      zigzag_word[line][col] = ch;

      if(line - 1 < 0){
        scaling = false;
        line++;
      }

      continue;
    }
  
    zigzag_word[line][col] = ch;
    line++;

    if(line == numRows){
      scaling = true;
      line--;
    }
  }

  let zigzag_conversion = "";

  zigzag_word.map(line => {
    zigzag_conversion += line.join("").replaceAll(" ", "");
  });

  return zigzag_conversion;
}
