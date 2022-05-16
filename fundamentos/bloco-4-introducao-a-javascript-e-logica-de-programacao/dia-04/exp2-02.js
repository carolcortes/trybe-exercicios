let teste = [2, 3, 6, 7, 10, 1];
function indiceMaior (array) {
    let maior = array[0];
    for (let index in array) {
        if (maior < array[index]) {
            maior = index;
        }
    }
    return maior;
    
}
teste.push(100)
console.log(indiceMaior(teste))
