const inputTexto = document.querySelector('#texto');

inputTexto.addEventListener('keypress', (e) =>{
    if (!checkChar(e)) {
        e.preventDefault();
    }
})

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);
    // console.log(e.keyCode);
    // console.log(char);

    const padrao = '[a-zA-Z0-9]';

    if (char.match(padrao)) {
        console.log(char);
        return true
    }
}