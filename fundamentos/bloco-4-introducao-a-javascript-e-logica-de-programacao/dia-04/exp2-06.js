let n = 5;
function somaNumeros(int) {
    let soma = 0
    for (let number = int; number >= 1; number -= 1) {
        soma += number;
    }
    return soma;
}
console.log(somaNumeros(n))