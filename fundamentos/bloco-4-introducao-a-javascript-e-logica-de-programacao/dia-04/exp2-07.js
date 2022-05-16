let teste1 = 'trybe';
let teste2 = 'be';

//let sameEnd = (word1, word2) => word1.slice(-word2.length) === word2 ? true : false;

function sameEnd(word1, word2) {
    if (word1.slice(-word2.length) === word2) {
      return true;
    } else {
      return false;
    }
}
console.log(sameEnd(teste1, teste2));
