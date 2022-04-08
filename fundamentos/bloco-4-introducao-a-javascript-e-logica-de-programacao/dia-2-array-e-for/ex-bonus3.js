let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
    if (i+1 < numbers.length) {
        let n = numbers[i] * numbers[i+1];
        newNumbers.push(n);
    } else {
        n = numbers[i] * 2;
        newNumbers.push(n)
    }
}
console.log(newNumbers)
