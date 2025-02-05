export default function compareWords(guess, secretWord) {
    let commonCount = 0;
    for (let i = 0; i < guess.length; i++) {
      if (secretWord.includes(guess[i]) && guess[i] === secretWord[i]) {
        commonCount++;
      }
    }
    return commonCount;
  }
  