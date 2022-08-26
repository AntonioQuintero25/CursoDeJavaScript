//Escopo global
let i = 0;

function somar()
{
    let x = 5; //Escopo local
    console.log(x);
}

somar();

function mostrar()
{
    let x = 10; //Escopo local
    console.log(x);
}

mostrar();