const verifyInput = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Informe os dois valores para realizar a soma');
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe apenas valores numéricos');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyInput(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(error) {
    document.getElementById('result').innerText = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
