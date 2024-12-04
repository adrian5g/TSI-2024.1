const buttons = document.querySelectorAll('.btn');
const resultDisplay = document.querySelector('.result');
const historyDisplay = document.querySelector('.history');

const operators = ['/', '*', '-', '+'];

let currentOperator = '';
let firstNumber = '';
let secondNumber = '';

function handleButtonClick(button) {
  const key = button.innerText;

  if (operators.includes(key)) {
    if (!firstNumber) return;

    currentOperator = key;
    updateDisplay();
    return;
  }

  if (key === 'AC') {
    resetCalculator();
    return;
  }

  if (key === '.') {
    if (currentOperator) {
      if (!secondNumber.includes('.')) secondNumber += '.';
    } else {
      if (!firstNumber.includes('.')) firstNumber += '.';
    }
    
    updateDisplay();
    return;
  }

  if (key === '=') {
    if (firstNumber && secondNumber && currentOperator) computeResult();
    return;
  }

  if (currentOperator) {
    secondNumber += key;
  } else {
    firstNumber += key;
  }

  updateDisplay();
}

function resetCalculator() {
  firstNumber = '';
  secondNumber = '';
  currentOperator = '';
  resultDisplay.innerText = '0';
  historyDisplay.innerText = '';
}

function computeResult() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result = 0;

  switch (currentOperator) {
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Erro';
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
  }

  historyDisplay.innerText = `${firstNumber} ${currentOperator} ${secondNumber}`;
  firstNumber = result.toString();
  secondNumber = '';
  currentOperator = '';
  updateDisplay();
}

function updateDisplay() {
  resultDisplay.innerText = `${firstNumber} ${currentOperator} ${secondNumber}`.trim();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => handleButtonClick(button));
});
