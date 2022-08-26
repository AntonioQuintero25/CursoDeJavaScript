const botao = document.querySelector('#botao');

document.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        botao.click();
        console.log('teste');
    }
})

console.log(window);