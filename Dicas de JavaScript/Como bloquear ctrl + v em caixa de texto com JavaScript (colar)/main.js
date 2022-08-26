const texto = document.querySelector('#texto');
console.log(texto);

texto.addEventListener('paste', (e) => {
    e.preventDefault();
});


