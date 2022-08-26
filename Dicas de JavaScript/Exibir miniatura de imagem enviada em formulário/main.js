const inputImagem = document.querySelector('#imagem');

//change = quando o usuário inserir imagem 
inputImagem.addEventListener('change', function(e){

    const tgt = e.target || window.event.srcElement;

    const files = tgt.files;

    const fr = new FileReader();

    fr.onload = function(){
        document.querySelector('#previewImagem').src = fr.result;
    }

    fr.readAsDataURL(files[0]);

})