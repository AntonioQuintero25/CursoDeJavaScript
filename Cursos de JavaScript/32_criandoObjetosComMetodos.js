let spartan = {
    nome:"Master Chief",
    idade:29,
    atirar: function(){
        console.log("Atirando em membros do Covenant");
    },
    soma: function(a,b){return a+b;}
};

console.log(spartan.nome);
spartan.atirar();

let Somando = spartan.soma(3,6);

console.log(Somando);