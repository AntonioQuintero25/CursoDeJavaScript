const texto = document.querySelector('#name');

const btn = document.querySelector('#enviar');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(texto.value);
})