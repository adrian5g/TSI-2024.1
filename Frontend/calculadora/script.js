const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const history = document.querySelector('.history');

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
    clear();
    return;
  }

  if (key === '.') {
    if (!currentOperator) {
      if (!number1.includes(".")) number1 += '.'
    } else {
      if (!number2.includes(".")) number2 += '.'
    }
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

function clear() {
  currentOperator = '';
  number1 = '';
  number2 = '';

  result.innerText = '0';
  history.innerText = '';
}

function handleResult() {
  let result = '';

  switch (currentOperator) {
    case '/':
      result = Number(number1) / Number(number2);
      break;
    case '*':
      result = Number(number1) * Number(number2);
      break;
    case '-':
      result = Number(number1) - Number(number2);
      break;
    case '+':
      result = Number(number1) + Number(number2);
      break;
  }

  history.innerText = `${number1} ${currentOperator} ${number2}`;

  currentOperator = '';
  number1 = result;
  number2 = '';
  updateResult();
}

function updateResult() {
  result.innerText = `${number1} ${currentOperator} ${number2}`;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => handleClick(btn));
});
