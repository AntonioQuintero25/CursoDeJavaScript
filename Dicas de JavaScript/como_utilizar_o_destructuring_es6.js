//destructuring com arrays
let arr = [1,2,3,33,5];

let [num1, num2, num3, num4, num5] = arr;

// console.log(num4);

//com objetos
const pessoa ={
    nome: 'Antonio',
    sobrenome:'quintero',
    idade: 21
}

let {nome:teste1, sobrenome:teste2, idade:test3} = pessoa;

// console.log(teste2);

//com funções

function teste(){
    return ['teste 1', 5]
}


let [a, b] = teste();

// console.log(b);

//ignorando elementos

let arr1 = [5,10,15];

const [,testeA,] = arr1;

// console.log(testeA);

//strings

let novaString = 'laranja';

const [z,y,v]= novaString;

// console.log(z,y,v);

//rest operator
let numeros2 = [1,2,3,4,5];

const [um, ...resto] = numeros2;

// console.log(resto);

//tomar cuidado

let obj2 = {

    x:1,
    z:3

}

let p, q;

({x:p, z:q} = obj2)

console.log(p,q);