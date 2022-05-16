let teste = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido (array) {
    let cont = 0;
    let contfinal = 0;
    let repetido = 0;
    for (let number of array) {
        cont = 0;
        for(let number2 in array) {
            if (number == array[number2]) {
                cont += 1;
                if (cont > contfinal) {
                    contfinal = cont;
                    repetido= array[number2];
                }
            }
        }
    }
    return repetido
}
console.log(maisRepetido(teste));