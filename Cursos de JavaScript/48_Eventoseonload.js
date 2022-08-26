//O onload é ativado ao carregar a  página
 window.onload = function()
{
    const corpo = document.querySelector('body');
    const elementoDiv = document.createElement('div');
    elementoDiv.setAttribute('class','divCriada');
    const paragrafo = document.createElement('p');
    const texto = document.createTextNode("A página Carregou");
    paragrafo.appendChild(texto);
    elementoDiv.appendChild(paragrafo);
    corpo.appendChild(elementoDiv);
}