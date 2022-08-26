//pop - remove no final do array
let arr = [1,2,3,4,5];
let ultimo = arr.pop();
// console.log(arr);
// console.log(ultimo);

// shift - remove no inicio do array

let nomes = ['Antonio', 'Bruno', 'Carlos','Daniel'];
let primeiro = nomes.shift();
// console.log(nomes);
// console.log(primeiro);

//splice - remove pelo índice do elemento
let numbers = [1,2,3,4,5,6,7,8,9];

let newNumbers = numbers.splice(0,2);

console.log(numbers);
console.log(newNumbers);