let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = menor = array[0]
for (word of array) {
    if (word.length > maior.length) {
        maior = word;
    } else {
        menor = word;
    }
}
console.log(maior, menor)
