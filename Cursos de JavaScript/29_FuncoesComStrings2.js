//Metodos que modificam uma string

//toLowerCase e toUpperCase

let frase = "Está e uma variável com o nome de frase";

let fraseCaixaAlta = frase.toUpperCase();

let fraseCaixaBaixa = frase.toLowerCase();

console.log(fraseCaixaBaixa);

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

console.log(frase.toUpperCase());

//trim

let nome  = "           Antonio         ";

console.log(nome);

let nomeTrim = nome.trim();

console.log(nomeTrim);

//split

console.log(frase.split(" "));

let tags = "PHP, JAVA, JavaScript, HTML, CSS";

console.log(tags.split(" . "));

//lastIndexOf

let fraseDois = "EU quero a última palavra de teste porém o teste precisa do lastIndexOf";

console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));