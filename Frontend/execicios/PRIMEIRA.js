const textoDigitado = prompt('Digite um texto:');
const textoDigitadoCaixaAlta = textoDigitado.toLocaleUpperCase();

let vogais = 'aeiouAEIOU';
let digitos = '0123456789';

let quantidadeVogais = 0;
let quantidadeDigitos = 0;
for (let i = 0; i < textoDigitado.length; i++) {
  if (vogais.includes(textoDigitado[i])) {
    quantidadeVogais++;
  }

  if (digitos.includes(textoDigitado[i])) {
    quantidadeDigitos++;
  }
}

let palavra = textoDigitadoCaixaAlta.replace(' ', '');
let ehPalindromo = true;

for (let i = 0; i < palavra.length / 2; i++) {
  let le = palavra.charAt(i);
  let ld = palavra.charAt(palavra.length - 1 - i);

  if (le != ld) {
    ehPalindromo = false;
  }
}

const iniciaComUni = textoDigitadoCaixaAlta.startsWith('UNI');
const terminaComRio = textoDigitadoCaixaAlta.endsWith('RIO');

console.log(`Tamanho do Texto: ${textoDigitado.length}`);
console.log(`Texto em Caixa alta: ${textoDigitadoCaixaAlta}`);
console.log(`Quantidade de vogais: ${quantidadeVogais}`);
console.log(`Começa com "UNI": ${iniciaComUni ? 'sim' : 'não'}`);
console.log(`Termina com "RIO": ${terminaComRio ? 'sim' : 'não'}`);
console.log(`Quantidade de Digitos: ${quantidadeDigitos}`);
console.log(`É palíndromo: ${ehPalindromo ? 'sim' : 'não'}`);
