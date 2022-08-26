// console.log("Este e um script inserido no arquivo main.js e enviado via src no HTML");

// // console, serve para mostrar mensagens aos desenvolvedores para mostrar erros ou alertas
// console.error("Este e um console.error");
// console.warn("Este e um console.warn");


// //variaveis
// var x = 10;

// //let e const são mais modernos e recomendado, não use var de jeito nenhum
// let y = 15;
// const b = 20;

// console.log(x, y, b);

// y = 25;

// console.log(x, y, b);

//Tipos de dados
// const nome = "Antonio"; //String
// console.log(nome);
// console.log(typeof nome);

// const n1 = 4; //Number
// console.log(n1);
// console.log(typeof n1);

// const decimal = 12.4; //Number do tipo float porem o JS não diferencia
// console.log(decimal);
// console.log(typeof decimal);

// const isApproved = true; //Tipo booleano, pode ser apenas true ou false
// console.log(isApproved);
// console.log(typeof isApproved);

// let nulo = null; //E considerado um objeto
// console.log(nulo);
// console.log(typeof nulo);

// let indefinido; // = undefined;
// console.log(indefinido);
// console.log(typeof indefinido);

// const frutas = ["Limão",4,true,null,undefined]; //Array e uma lista que pode armazenar qualquer tipo de variável
// console.log(frutas);
// console.log(typeof frutas);

// const user = {nome:"Antonio",idade:21,profissao:"Programador e Desenvolvedor"};
// console.log(user);
// console.log(typeof user);

//Métodos String
// const fullName = "Antonio Quintero";
// console.log(fullName.length); //Acessando o tamanho da variável

// const stringToArray = fullName.split(' ');

// console.log(stringToArray);

// console.log(fullName.toLowerCase()); //Deixa a frase em caixa baixa
// console.log(fullName.toUpperCase()); //Deixa a frase em caixa alta

// console.log(fullName.indexOf("Quintero")); //Encontra o indice da frase

// console.log(fullName.slice(8,16)); //Corta a frase passando o indice que começa e qual termina
// console.log(fullName.slice(0,7));

// //Métodos de Arrays

// const list = ["a","b","c","d","e"];
// console.log(list.length); //Acessa do tamanho da lista

// console.log(list[2]); //Acessando a letra c

// list[5] = "f"; //Adicionando elemento na lista

// console.log(list);

// console.log(list[list.length - 1]); //Acessando o ultimo elemento de uma lista sem saber o tamanho total dela

// list.push("g"); //Adiciona o elemento g ao final da lista

// console.log(list);

// list.pop(); //Remove o elemento final da minha lista

// console.log(list);

// list.shift(); //Removendo o primeiro elemento da lista

// console.log(list);

// list.unshift("Primeiro Elemento"); //Adiciona o elemento no começo da lista

// console.log(list);

// //objetos

// const product = {
//     nome:"Camisa",
//     preco:14.99,
//     emEstoque:true,
//     tamanhos:["P","M","G","GG"],
//     'main color':'azul'
// }

// console.log(product.nome); //Acessando uma propriedade do objetos
// console.log(product['nome']);
// console.log(product['main color']);
// console.log(product.preco);

// //destructuring

// const {preco, emEstoque} = product;

// console.log(preco);
// console.log(emEstoque);

// const [n1,n2] = list;
// console.log(n1);
// console.log(n2);

// //JSON - JavaScript Object Notation
// const cat = {
//     name:"Jet li",
//     idade: 10
// }

// const catJson = JSON.stringify(cat);

// console.log(catJson);

// const obj = JSON.parse(catJson);

// console.log(obj);

//Estruturas Condicionais

// let a = 10;

// if(a > 8)
// {
//     console.log("A é maior que 8");
// }

// // maior (>), menor (<),maior ou igual(>=),menor ou igual(<=),igual valor(==),igual valor e tipo (===)

// let nome = "Teste";

// if(nome === "João")
// {
//     console.log("A variável nome é igual a João");
// }
// else
// {
//     console.log("A variável nome não é igual a João");
// }

// if(nome === "João")
// {
//     console.log("A variável nome é igual a João");
// }
// else if (nome === "Matheus")
// {
//     console.log("A variável nome não é igual a João");
// }
// else
// {
//      console.log("A variável nome não e igual a Matheus nem a João");
// }

// const n3 = 14;

// //if ternário

// let teste = n3 > 12 ?"SIM":"Não";

// console.log(teste);

//Estruturas de repetição

// const myList = [1,2,3,4,5];

// let contador = 0;

// let total = 0;

// while(contador < myList.length)
// {
//     console.log("Imprimindo: " + myList[contador]);
//     total += myList[contador];
//     contador++;
// }

// console.log(total);

// const mySecondList = ['a','b','c','d','e'];

// for(let i = 0; i < mySecondList.length; i++)
// {
//     console.log(`A letra no índice ${i} é: ${mySecondList[i]}`);
// }

//Métodos de Array -> repetição
// const nomes = ["Antonio","Bruno","Caio","Daniel","Eduardo"];

// // nomes.forEach(nome => {
// //     console.log(nome);
// // });

// const nomesModificados = nomes.map(nome =>{
//     if(nome === "Daniel"){
//         return nome = "Sr.Daniel";
//     }
//     else{
//         return nome
//     }
// });

// console.log(nomesModificados);

// const numerosGrandes = [1,2,4,6,10,25,100].filter((n) =>{
//     return n > 5;
// });

// console.log(numerosGrandes);

// const sumAll = [1,2,4,6,10,25,100].reduce((n1, total)=>{
//     return total += n1;
// });

// console.log(sumAll);

//Funções

// function dizer()
// {
//     console.log("Olá função");
// }

// dizer();

// function nomeCompleto(PrimeiroNome,Sobrenome)
// {
//     return (PrimeiroNome + " " + Sobrenome);
// }

// console.log(nomeCompleto("Antonio","Quintero"));

// const meuNomeCompleto = nomeCompleto("Teste","Testando");

// console.log(meuNomeCompleto);

// const minhaFuncaoSeta = (a,b) =>{
//     return a + b;
// };

// console.log(minhaFuncaoSeta(5,6));

// const minhaFuncaoMaisSimples = (a,b) => a + b;

// console.log(minhaFuncaoMaisSimples(3,4));

//Classes

// class Product {

//     constructor(name,price,description){
//         this.name = name;
//         this.price = price;
//         this.description = description;
//     }

//     detalhesDoProduto()
//     {
//         return `O nome do produto é ${this.name} e o preço é R$: ${this.price}`;
//     }

// };

// const camisa = new Product("Camisa verde",15.99,"Uma bela Camisa Verde Escuro");

// console.log(camisa);
// console.log(camisa.name);
// console.log(camisa.description);
// console.log(camisa.detalhesDoProduto());

// //Herança

// class SuperProduto extends Product{

//     constructor(name, price,description,size)
//     {
//         super(name,price,description);
//         this.size = size;
//     }

//     mostrarComentario(comentario)
//     {
//         return `Este ${this.name} é muito ${comentario}`;
//     }

//     //static
//     static digaOla(){
//         console.log("olá");
//     }
// };

// const calca = new SuperProduto("Calça Jeans",79.99,"Calça Jeans confortavel","P");

// console.log(calca.name);
// console.log(calca.size);
// console.log(calca.detalhesDoProduto());
// console.log(calca.mostrarComentario("Teste"));

// SuperProduto.digaOla()

// DOM - Document Object Model

const title = document.getElementById('tituloPrincipal');
console.log(title);

//query Selector - mais recomendado

const mesmoTitle = document.querySelector('#tituloPrincipal');
console.log(mesmoTitle);

const texts = document.querySelectorAll('.text');
console.log(texts);
console.log(texts[1]);

texts.forEach(elemento =>{
    console.log(elemento.textContent.toUpperCase());
});

//Manipulando text
title.textContent = "Estou alterando o titulo"; //textContent eu altero apenas o texto

texts[0].innerHTML = '<span><b>Alterei este texto<b></span>'; //Eu altero o conteúdo e posso inserir mais elementos html

texts[1].style.color = "red";

texts[2].style.backgroundColor = "red";

texts[3].classList.add('minhaClass'); //Adicionando uma classe ao um elemento

texts[4].classList.remove('text'); //Removendo uma classe do elemento

texts[5].remove();

//Eventos

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    texts[1].style.color = "blue";
    btn.style.cssText = "padding:25px;background-color:pink;"
});

btn.addEventListener('dblclick',function(){
    texts[1].style.color = "red";
    btn.style.cssText = "padding:25px;background-color:red;"
});


