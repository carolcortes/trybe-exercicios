let primos = []
    for (var num = 0; num <= 50; num++) {// for para passar por todos os num
        for (var div = 2; div <= num-1; div++){ // for para ver se o numero é divisivel por algum outro ate ele msm
            if (num%div === 0) { // se o modulo for 0 quer dizer q ele é divisivel por algum outro numero
                break;
            } 
        }
        if(div === num){ // se ele for igual a seu divisor e passou do break, da push no array primos
            primos.push(num)
        }
    }
    console.log(Math.max(...primos)) // pegando o maior do array