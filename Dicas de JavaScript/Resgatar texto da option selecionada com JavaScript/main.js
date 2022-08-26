const opcoes = document.querySelector('#options');

const indice = opcoes.selectedIndex;
const valor = opcoes.value;
const texto = opcoes.options[indice].text;

console.log(indice);
console.log(valor);
console.log(texto);