n = 50;
let numerosPrimos = [];

for (let numeroAtual = 2; numeroAtual < n; numeroAtual += 1) {
  let quantidadeDeDivisores = 0;
  for(let numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor += 1) {
    if (numeroAtual % numeroMenor === 0) {
      quantidadeDeDivisores += 1;
    }
  }

  if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
  }
}
let maiorPrimo = numerosPrimos[0];
for (i = 0; i < numerosPrimos.length; i += 1) {
  if (numerosPrimos[i] > maiorPrimo) {
    maiorPrimo = numerosPrimos[i];
  }
}
console.log(maiorPrimo);