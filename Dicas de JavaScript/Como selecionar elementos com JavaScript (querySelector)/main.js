//selecionar por ID
let tituloSecao = document.getElementById('titulo-secao');
console.log(tituloSecao);

//selecionar por classe
let paragrafoDescricao = document.getElementsByClassName('description');
console.log(paragrafoDescricao);

//selecionar por tag
let paragrafo = document.getElementsByTagName('p')
console.log(paragrafo);

//Seletores por CSS - Query Selector

let itensLista = document.querySelectorAll('.item')
console.log(itensLista);

//um elemento apenas

let divContainer = document.querySelector('#container')
console.log(divContainer);

