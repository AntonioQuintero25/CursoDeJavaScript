let checkBoxes = document.querySelectorAll(".checkbox");

let selecionados = 0;

let botao = document.querySelector('#enviar');


botao.addEventListener('click', (e)=>{

    e.preventDefault();

    selecionados = 0;

    checkBoxes.forEach((elemento)=>{
        if (elemento.checked) {
            selecionados++;
        } 
    });

    console.log(selecionados);
});