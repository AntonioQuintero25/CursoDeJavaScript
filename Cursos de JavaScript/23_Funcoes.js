//Funções são blocos de código

function soma(a,b)
{
    if(a <= 0 || b <=0){return console.log("Não somamos números negativos");}
        return console.log(a+b);
}


let somaUm = soma(2,5);



function dizerNome (nome)
{
    console.log("Olá meu nome é: "+nome);
}

dizerNome("Antonio");

let outroNome = "Quintero";

dizerNome(outroNome);
