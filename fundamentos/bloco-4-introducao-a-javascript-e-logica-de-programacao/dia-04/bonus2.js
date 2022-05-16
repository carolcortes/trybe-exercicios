let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers (array) {
    let pares = []
    for (numbers in array) {
        for (numbers2 in array[numbers]) {
            if (array[numbers][numbers2] % 2 == 0) {
                pares.push(array[numbers][numbers2])
            }
        }
    }
    return pares
    
}
console.log(arrayOfNumbers(vector))