//(AND,e, &&) (OR, ou, ||) (NOT, não, !)

let a = '2';
console.log(a === 2 && 'fabio');

let matricula = 123;
let idade = 15;
let idademinima = 15;

if(matricula == 123 && idade >= idademinima && true)
{
    console.log("Você pode fazer o curso de TI");
}
else
{
    console.log("Você não pode fazer o curso de TI ainda, espere", idademinima - idade ,"ano(s)");

}