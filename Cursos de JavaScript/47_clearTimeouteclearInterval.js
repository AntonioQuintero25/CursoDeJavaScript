//clearTimeout na prática
let x = 0;

let myTimer = setTimeout(function(){
    console.log("O x é 0");
},1500);

x = 5;

if(x > 0)
{
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}

//clearsetInterval na prática

let i = 0;

let myInterval = setInterval(function(){
    console.log("Imprimindo o setInterval");
    console.log("O valor de i é: "+i);
    i++;
    if(i >= 10)
    {
        clearInterval(myInterval);
    }
},1000)



