const textoUsuario = prompt("Digite um texto:");
const textoSemEspacosAdicionais = textoUsuario.trim().replace(/\s+/g, ' ');

console.log(`Texto sem espaços adicionais: "${textoSemEspacosAdicionais}"`);
