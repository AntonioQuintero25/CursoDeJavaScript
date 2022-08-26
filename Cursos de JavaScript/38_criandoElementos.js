let novoParagrafo = document.createElement('p');

let texto = document.createTextNode('Este e um texto novo');

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

let corpo = document.querySelector('body');

corpo.appendChild(novoParagrafo);

let container = document.querySelector('#container');

let span = document.createElement('span');

let texttoSpan = document.createTextNode('TEXTO DE SPAN');

span.appendChild(texttoSpan);

container.appendChild(span);