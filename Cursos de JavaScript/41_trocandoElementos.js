const elemento = document.createElement('h4');
elemento.classList = 'testando-classe';
const texto = document.createTextNode("Criando um texto para uma tag h4");
elemento.appendChild(texto);

//selecionar o elemento que eu vou trocar
const trocarEsteElemento = document.querySelector('#titulo');

//selecionar o pai do elemento

//Pode usar este const corpo = document.querySelector('body');

//ou este:

const pai = trocarEsteElemento.parentNode;

//trocar os elementos
pai.replaceChild(elemento, trocarEsteElemento);