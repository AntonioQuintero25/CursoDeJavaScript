const inputName = document.querySelector('#name');

inputName.addEventListener('keypress', function(e){

    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    //47 ao 58 = São números
    if(keyCode > 47 && keyCode < 58){
        e.preventDefault();
    }
});