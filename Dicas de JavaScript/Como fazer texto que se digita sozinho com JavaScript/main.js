const divElemento = document.querySelector('#text');

const text = "O JavaScript e muito daora";

const intervalo = 100;

function showText(elemento, texto, intervalo){

    const char = text.split("").reverse();

    const typer = setInterval(()=>{

        if (!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop();
        console.log(next);

        elemento.innerHTML += next;


    }, intervalo);
}

showText(divElemento,text,intervalo);