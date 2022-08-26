const elementoTitulo = document.querySelector('#titulo');
elementoTitulo.setAttribute('class','testando-atributo');

const botao = document.querySelector('#btn');
botao.setAttribute('disabled','disabled');

const subtitle = document.querySelector('.titulo2');
subtitle.setAttribute('id','testando');

//remover atributos
subtitle.removeAttribute('id');

