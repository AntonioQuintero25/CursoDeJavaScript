const objs = [
    {
        "nome":"Antonio",
        "idade": 21,
        "esta_trabalhando":true,
        "detalhes_Profissao":{
            "profissao":"Programador",
            "Empresa":"Magna Sistemas"
        },
        "hobbies":["Programas","Ler","Treinar"]
    },
    {
        "nome":"Suelen",
        "idade": 25,
        "esta_trabalhando":true,
        "detalhes_Profissao":{
            "profissao":"Analista",
            "Empresa":"Grid Log"
        },
        "hobbies":["Ler","Cozinhar"]
    }
];

console.log(objs);

//JSON
//Primeiro vamos converter os objetos para Json - Simulação de um POST

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//Converter JSON para objetos - Simulação de um GET
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa)=>{
    console.log(pessoa.detalhes_Profissao);
});