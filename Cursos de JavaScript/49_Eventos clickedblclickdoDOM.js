const botao = document.querySelector('#btn');
botao.style.cssText = "background-color:red; padding:10px;color:white;";
botao.addEventListener("click",function(){
    botao.style.cssText = "background-color:black; padding:50px;color:white;";
});

const titulo = document.querySelector('#titulo');

titulo.addEventListener("click", function(){
    const corpo = document.querySelector('body');
    const divElement = document.createElement('div');
    divElement.classList = 'teste';
    const divParagrafo = document.createElement('p');
    const textoParagrafo = document.createTextNode("Teste Paragrafo");
    divParagrafo.appendChild(textoParagrafo);
    divElement.appendChild(divParagrafo);
    corpo.appendChild(divElement);
});

//double click
const subtitle = document.querySelector('.subtitulo');
subtitle.addEventListener("dblclick",  function(){
    console.log("DUplo click");
});

