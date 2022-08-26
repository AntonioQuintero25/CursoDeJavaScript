// Recurso para salvar dados no navegador, 
// que persiste após o recarregamento da página ou ao fechar a aba;

//Capacidade máxima de 10mb

//Os dados são salvos no computador do usuário;

//Estes dados não possuem tempo de expiração, mas podem ser removidos;

//Os dados ficam na aba Application do Dev tools;

// 1 - inserir dado
localStorage.setItem("name", "Antonio");

// 2 - resgatar item
const nome = localStorage.getItem("name");
console.log(nome);

// 3 - remover item
localStorage.removeItem("name");

// 4 - limpar todos os itens
localStorage.clear();

// 5 salvar objetos

const person = {

    name: "Antonio",
    idade: 21

};

const personJSON = JSON.stringify(person);

localStorage.setItem("person", personJSON)
