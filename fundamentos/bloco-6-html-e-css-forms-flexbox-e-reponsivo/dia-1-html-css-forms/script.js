console.log('Olá, mundo!')

const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');

function handleSubmit(event) {
  event.preventDefault();
}
submitBtn.addEventListener('click', handleSubmit);

function clear() {
  const input = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < input.length; index += 1) {
    input[index].value = '';
    input[index].checked = false;
  }
  textArea = '';
}
clearBtn.addEventListener('click', clear);
