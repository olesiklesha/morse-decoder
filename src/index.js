const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';

  let start = 0;
  let end = 10;

  while (end <= expr.length) {
    let codeLetter = '';
    let letter = expr.slice(start, end);

    if (letter.includes('*')) {
      result += ' ';
    } else {
      letter = letter.slice(letter.indexOf('1'));

      for (let i = 0; i < letter.length; i++) {
        let symb = letter[i] + letter[i + 1]
        if (symb == '11') codeLetter += `-`;
        if (symb == '10') codeLetter += `.`;
        i++;
      }

      result += MORSE_TABLE[codeLetter];
    }

    start = end;
    end += 10;
  }

  return result;
}

module.exports = {
  decode
}