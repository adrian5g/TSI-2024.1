const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

const operators = ['/', '*', '-', '+'];

let currentOperator = '';
let number1 = '';
let number2 = '';

function handleClick(btn) {
  const key = btn.innerText;

  if (operators.includes(key)) {
    currentOperator = key;

    updateResult();
    return;
  }

  if (key === 'AC') {
    currentOperator = '';
    number1 = '';
    number2 = '';

    result.innerHTML = '0';
    return;
  }

  if (key === '.') {
    result.innerHTML = 'dot';
    return;
  }

  if (key === '=') {
    if (number1 && number2 && currentOperator) handleResult();
    return;
  }

  if (!currentOperator) number1 += key;
  else number2 += key;

  updateResult();
}

function handleResult() {
  let result = ''

  switch (currentOperator) {
    case '/':
      result = Number(number1) / Number(number2)
      break;
    case '*':
      result = Number(number1) * Number(number2)
      break;
    case '-':
      result = Number(number1) - Number(number2)
      break;
    case '+':
      result = Number(number1) + Number(number2)
      break;
  }

  currentOperator = '';
  number1 = result;
  number2 = '';
  updateResult()
}

function updateResult() {
  result.innerText = `${number1} ${currentOperator} ${number2}`;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => handleClick(btn));
});
