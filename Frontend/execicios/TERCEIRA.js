const texto = prompt('Digite um texto:');

const palavras = texto.trim().split(/\s+/);
const numeroCaracteres = texto.length;
const numeroPalavras = palavras.length;

console.log(`Número total de caracteres: ${numeroCaracteres}`);
console.log(`Número total de palavras: ${numeroPalavras}`);
