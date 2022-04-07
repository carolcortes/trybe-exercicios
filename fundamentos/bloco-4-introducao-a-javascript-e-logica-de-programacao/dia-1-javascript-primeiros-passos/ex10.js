const custo = 1;
const venda = 2;

if (custo >= 0 && venda >= 0) {
    let custoTotal = custo * 1.2;
    let lucro = (venda - custoTotal)* 1000;
    console.log(lucro)
} else {
    console.log('Erro! Os valores não podem ser negativos.')
}
