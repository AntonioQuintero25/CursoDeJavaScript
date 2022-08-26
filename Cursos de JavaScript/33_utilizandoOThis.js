let test = 5;

console.log(this.test);
console.log(test);

let spartan = {
    nome:"Master Chief",
    idade:29,
    atirar: function(){
        console.log("Atirando em membros do Covenant");
    },
    soma: function(a,b){return a+b;},
    dizerNome: function()
    {
        console.log("O meu nome é: "+ this.nome);
    },
    aniversario: function(){ this.idade +=1}
};

spartan.dizerNome();
console.log(spartan.idade);
spartan.aniversario()
console.log(spartan.idade);