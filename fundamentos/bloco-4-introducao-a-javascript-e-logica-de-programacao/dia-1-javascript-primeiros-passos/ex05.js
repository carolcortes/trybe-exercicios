// 5. Verifica se é triângulo
const a1 = -60;
const a2 = 40;
const a3 = 80;
let s = a1 + a2 + a3;
let aPositivos = a1 > 0 && a2 > 0 && a3 > 0;
let triangulo;

if (aPositivos) {
    if (s == 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log('Erro: ângulo inválido.')
}
