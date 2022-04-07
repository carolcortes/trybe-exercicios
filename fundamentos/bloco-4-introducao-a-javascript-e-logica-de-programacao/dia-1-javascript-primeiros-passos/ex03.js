// 3. Retornar o maior de três números:
const a = 3;
const b = 15;
const c = 27;
console.log('A =', a, ' B =', b, ' C =', c)

if (a > b && a > c) {
    console.log('O maior número é o', a)
} else if (b > a && b > c) {
    console.log('O maior número é o', b)
} else {
    console.log('O maior número é o', c)
}
