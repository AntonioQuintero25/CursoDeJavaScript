//Criar uma função que receba argumentos infinitos

function somaInfinita(){
    console.log(arguments); //objeto com todos os argumentos

    var args = [].slice.call(arguments, 0);

    console.log(args);
    
    let soma = 0;

    for(let i = 0; i < args.length; i++)
    {
        soma += args[i];
    }

    return soma;
}

let teste = somaInfinita(1,2,3);

let teste1 = somaInfinita(3,4,5,7,7,8,9,6,5,443,32,34,3,54,543,5,44,53)

let teste2 = somaInfinita(1,3);

console.log(teste);
console.log(teste1);
console.log(teste2);