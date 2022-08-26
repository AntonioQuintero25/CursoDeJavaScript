//Arrow function

// (a,b) =>{
//     return a+b;
// }

// (a,b) => a+b;

let a = 5;
let b = 10;

let c = (a,b) =>{
    return a + b
};

// console.log(c(a,b));

let menosC = (a,b) => a - b;

// console.log(menosC(a,b));

//um argumento

let frase = "O Antonio é um ótimo dev";

let fraseArray = (fraseTeste) => fraseTeste.split(' ');

// console.log(fraseArray(frase));

// sem argumento

let semArg = () => console.log("Não tem argumento");

// semArg()

//Arrow function ficam em escopo global, não funciona utilizar o this nelas

