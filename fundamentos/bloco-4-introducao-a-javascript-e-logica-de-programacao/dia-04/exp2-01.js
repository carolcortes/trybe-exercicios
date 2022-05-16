function verificaPalindromo(word) {
    for (let letter in word) {
        if (word[letter] == word[(word.length - 1) - letter]) {
        return true;
        } else {
            return false;
        }
    }
}
console.log(verificaPalindromo('ala'))