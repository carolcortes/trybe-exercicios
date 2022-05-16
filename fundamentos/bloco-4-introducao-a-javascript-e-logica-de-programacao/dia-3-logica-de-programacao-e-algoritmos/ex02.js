let word = 'tryber';
let reverse = '';
for (let letter = word.length-1; letter >= 0; letter -= 1) {
    reverse += word[letter];
}
console.log(reverse);
