const formulario = document.querySelector('#nome-form');
const containerBemVindo = document.querySelector('#welcome');
const botaoDeLogout = document.querySelector('#logout');

function verificarUsuário(){
    const userName = localStorage.getItem('nome');

    if (userName) {
        formulario.style.display = "none"
        containerBemVindo.style.display = 'block';

        const spanNomeUsuario = document.querySelector('#username');

        spanNomeUsuario.textContent = userName;
    }else{
        formulario.style.display = "block"
        containerBemVindo.style.display = 'none';
    }

}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputDoNome = document.querySelector('#name');

    localStorage.setItem('nome', inputDoNome.value);

    inputDoNome.value = "";

    verificarUsuário();
});

verificarUsuário();

botaoDeLogout.addEventListener('click', function(){
    localStorage.removeItem('nome');

    verificarUsuário();
});
