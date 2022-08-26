const botao = document.querySelector('#btn');

const url = 'https://google.com';

function openInNewTab(url){
    const janela = window.open(url , '_blank');
    janela.focus();
}

botao.addEventListener('click', function(e){
    openInNewTab(url);
});