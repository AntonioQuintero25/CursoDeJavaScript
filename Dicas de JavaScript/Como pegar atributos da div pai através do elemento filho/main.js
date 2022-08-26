const botao = document.querySelector('#get-parent-element');

botao.addEventListener('click', function(){

    //receber as caracteristicas do elemento pai
    const parent = this.parentNode;

    console.log(parent);
});