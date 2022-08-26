const pessoas = [
    {
        nome:"Antonio",
        idade: 21
    },
    {
        nome:"Patricia",
        idade: 43
    },
    {
        nome:"Edinaldo",
        idade:35
    },
    {
        nome:"Antonio",
        idade: 30
    }
];

//sort

let pessoasOrdenadas = pessoas.sort((a,b)=>{
    if(a.nome < b.nome)
    {
        return -1
    }
    return true;
});

console.log(pessoasOrdenadas);
