// length

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.length);

//push

arr.push("Teste");

arr.push(11);

arr.push(true);

console.log(arr);

//pop

arr.pop();

console.log(arr);

//unshift

arr.unshift("Primeiro");

console.log(arr);

//shift

arr.shift();

console.log(arr);

//acessar o último elemento de um array

console.log(arr[arr.length - 1]);

//isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));