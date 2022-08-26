//Recurso similar ao localStorage

//Capacidade máxima de 5mb

//Os dados são salvos no computador do usuário;

//Os dados expiram quando a aba é fechada;

// 1 - enviar valores
sessionStorage.setItem("numbers" , 123);

// Ao fechar a página os dados do sessionStorage são perdidos

// 2 - resgatar valores

const numeros = sessionStorage.getItem("numbers");

console.log(numeros);

// 3 - remover item
sessionStorage.removeItem('numbers');

// 4 - limpar dados
sessionStorage.clear();

// 5 salvar objetos

const person = {

    name: "Antonio",
    idade: 21

};

const personJSON = JSON.stringify(person);

sessionStorage.setItem("person", personJSON)

