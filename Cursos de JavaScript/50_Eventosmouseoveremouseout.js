//Evento de mouseover
const titulo = document.querySelector('#titulo');
const paragrafo = document.querySelector('.hide');
titulo.addEventListener("mouseover", function(){
    this.style.color = "red";
    paragrafo.style.cssText = "display:block;";
});

//Evento de mouseout
titulo.addEventListener("mouseout", function(){
    this.style.color = "blue";
    paragrafo.style.cssText = "display:none;";
});