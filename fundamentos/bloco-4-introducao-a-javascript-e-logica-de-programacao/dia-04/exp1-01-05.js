let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//ex01
console.log(`Bem-vinda, ${info.personagem}!`);

//ex02
info['recorrente'] = 'Sim';
console.log(info);

//ex03
for (let properties in info) {
  console.log(properties)
}

//ex04
for (let properties in info){
  console.log(info[properties])
}

//ex05
let maisInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    maisInfo[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + maisInfo[properties]);
  }
}
