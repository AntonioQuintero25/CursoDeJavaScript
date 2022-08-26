const text = "TODA A FRASE ESTA EM MAIUSCULO";
const text2 = "converte este aqui agora teste";

function capitalizeFirst(str){
    const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, (a)=>{
        return a.toUpperCase();
    });

    return subst;
}

console.log(capitalizeFirst(text));
console.log(capitalizeFirst(text2));