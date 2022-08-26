const frutas = ["Laranja", "Maça", "Pera", "Limão","Tomate"];

let listaUl = document.createElement('ul');

let body = document.getElementsByTagName('body');

console.log(body[0]);

body[0].appendChild(listaUl);


let listaUlNoBody = document.getElementsByTagName('ul');

for(let i = 0; i < frutas.length; i++)
{
    let liFor = document.createElement('li');

    let textoLi = document.createTextNode(frutas[i]);

    liFor.appendChild(textoLi);

    listaUlNoBody[0].appendChild(liFor);
}