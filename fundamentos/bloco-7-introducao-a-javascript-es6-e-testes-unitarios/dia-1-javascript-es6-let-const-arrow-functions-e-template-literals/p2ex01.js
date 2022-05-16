// const factorial = (n) => {
//   let result = 1;
//   for (let f = n; f > 0; f -= 1) {
//     result *= f;
//   }
//   return result
// }

const factorial = (n) => n > 1 ? n * factorial(n - 1) : 1;

console.log(factorial(5))