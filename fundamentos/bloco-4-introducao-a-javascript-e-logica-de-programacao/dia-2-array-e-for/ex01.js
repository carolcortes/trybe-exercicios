let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex01
for (let number of numbers) {
    console.log(number);
}

//ex02
let soma = 0;
for (let number of numbers) {
    soma += number;
}
console.log(soma);

//ex03
let ma = soma/numbers.length;
console.log(ma);

//ex04
if (ma > 20) {
    console.log('Valor maior do que 20.');
} else {
    console.log('Valor menor ou igual a 20.');
}

//ex05
let maior = 0;
for (let number of numbers) {
    if (number > maior) {
        maior = number;
    }
}
console.log(maior)


//ex06
let impares = 0;
for (let number of numbers) {
    if (number % 2 == 1) {
        impares += 1;
    }
}   
if (impares > 0) {
    console.log(`Existem ${impares} números ímpares`)
} else {
    console.log('Nenhum valor ímpar encontrado.')
}

//ex07
let menor = numbers[0];
for (number of numbers) {
    if (number < menor) {
        menor = number;
    }
}
console.log(menor);

//ex08
let contador = []
for (let number = 1; number <= 25; number += 1){
    contador.push(number)
}
console.log(contador)

for (let number of contador) {
    console.log(number/2);
}
