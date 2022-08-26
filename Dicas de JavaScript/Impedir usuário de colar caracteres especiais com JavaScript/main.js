//selecionar o input
const inputTexto = document.querySelector('#texto');

//adicionar o evento
inputTexto.addEventListener('paste', function(e){

    const rext = new RegExp("^[0-9a-zA-Z\b]+$");
    const self = this;

    setTimeout(function(){
        const text = self.value;

        if (!rext.test(text)) {
            self.value = "";
        }
    }, 500);

});