let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome (array) {
    let maior = array[0];
    for (let index in array) {
        if (maior.length < array[index].length) {
            maior = array[index]
        }
    }
    return maior
}
console.log(maiorNome(teste))