let primos = []
for (let num = 0; num <= 50; num += 1) {
    for (let div = 2; div < num; div += 1) {
        if (num % div == 0) {
           break
        }
        if (div == num) {
            primos.push(num)
            console.log(num)
        }
    }
}