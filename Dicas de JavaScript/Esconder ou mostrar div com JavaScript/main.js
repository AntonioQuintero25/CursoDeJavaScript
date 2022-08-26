let divContainer = document.querySelector('#container');

let botao = document.querySelector('#action-btn');

botao.addEventListener('click', () =>{
    
    if(divContainer.style.display === "none"){
        divContainer.style.display = "block";
    }
    else{
        divContainer.style.display = "none";
    }
})

let divContainerB = document.querySelector('#container-b');
let botaoB = document.querySelector('#action-btn-b');

botaoB.addEventListener('click', () =>{
    
    divContainerB.classList.toggle('hide');
    
})