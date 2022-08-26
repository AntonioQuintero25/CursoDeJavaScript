//selecionar elemento

let title = document.querySelector("#titulo");
console.log(title);

//innerHTML
title.innerHTML = "Teste";

//textContent -> mais utilizado e melhor
let titleSecundario = document.querySelector(".titulo2");
titleSecundario.textContent = "Deu Certo Mesmo!";