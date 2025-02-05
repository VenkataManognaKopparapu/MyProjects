"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */


const w1 = word.toLowerCase(); 
const w2 = guess.toLowerCase(); 
let commonCount = 0; 
let newW2 = w2; 
  for (let a = 0; a < w1.length; a++) {
  const letter = w1[a]; 
    if (newW2.includes(letter)) {
      commonCount++; 
      newW2 = newW2.replace(letter, ''); 
    }
  }
return commonCount; 
}