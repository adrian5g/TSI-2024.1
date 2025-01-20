let numero = prompt('Digite um número:');

const extenso = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];

let resultado = '';
let numeroStr = numero.toString();
for (let i = 0; i < numeroStr.length; i++) {
  let digito = parseInt(numeroStr[i]);
  resultado += extenso[digito];
  if (i < numeroStr.length - 1) {
    resultado += ', ';
  }
}

console.log(resultado)