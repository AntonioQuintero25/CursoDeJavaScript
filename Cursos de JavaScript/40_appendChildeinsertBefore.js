// Inserir elemento com appendChild
let elemento = document.createElement('div');
elemento.classList = 'div-criada';
console.log(elemento);
const container = document.querySelector('#container');
container.appendChild(elemento);
const paragrafo = document.createElement('p');
const textoParagrafo = document.createTextNode('Texto para um na div com class div criada paragrafo');
paragrafo.appendChild(textoParagrafo);
elemento.appendChild(paragrafo);

// Inserir elemento com insertBefore
const elemento2 = document.createElement('div');
const paragrafoParaDivInserida = document.createElement('p');
const textoParaNovaDiv = document.createTextNode('Esta div tem um background-color: azul');
paragrafoParaDivInserida.appendChild(textoParaNovaDiv);
elemento2.appendChild(paragrafoParaDivInserida);
elemento2.classList = 'div-inserida';
const divJaCriada = document.querySelector('#container .div-criada');
container.insertBefore(elemento2, divJaCriada);