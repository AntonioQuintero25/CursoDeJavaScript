const desc = document.querySelector('#descricao');
console.log(desc);

desc.addEventListener('keypress', function(e){
    const inputLength = desc.value.length;
    inputLength + 1;

    if (inputLength >=5) {
        e.preventDefault();
        return
    }
})