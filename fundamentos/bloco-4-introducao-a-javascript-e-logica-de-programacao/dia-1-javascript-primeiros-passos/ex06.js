let pecaXadez = 'rei'

switch (pecaXadez.toUpperCase()) {
    case 'PEAO':
        console.log('Somente para frente, uma casa por vez. No primeiro movimento, podem avançar duas casas.')
        break;
    case 'BISPO':
        console.log('Em linha reta, diagonalmente, quantas casas quiser.')
        break
    case 'TORRE':
        console.log('Em linha reta, horizontalmente e verticalmente.')  
        break;
    case 'CAVALO':
        console.log('Duas casas horizontalmente ou verticalmente e mais uma casa no ângulo reto.')
        break;    
    case 'RAINHA':
        console.log('Qualquer número de casas, em linha reta, horizontal, vertical ou diagonal.')
        break;
    case 'REI':
        console.log('Qualquer casa adjacente.')
        break;
    default:
        console.log('Peça inválida.')
        break;
}      
