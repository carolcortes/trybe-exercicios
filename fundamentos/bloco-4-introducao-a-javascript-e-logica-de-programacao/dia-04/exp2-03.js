let teste = [2, 4, 6, 7, 10, 0, -3];
function menorIndice (array) {
    let menor = array[0];
    for (let index in array) {
        if (menor > array[index]) {
            menor = index;
        }
    }
    return menor
}
console.log(menorIndice(teste))
