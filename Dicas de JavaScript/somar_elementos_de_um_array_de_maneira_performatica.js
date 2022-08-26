let arr = [1,2,3,4,5];

let soma = 0;

arr.forEach(item =>{
    soma += item;
})

// console.log(`A soma do valores: ${arr} foi ${soma}`);

//reduce

let arr2 = [1,2,3,4,5];

let soma2 = arr2.reduce((valor, item)=>{ return valor + item});

console.log(soma2);
