// é int ou float

let a = 10; //number
let b = 1.8; //number

console.log(typeof a);
console.log(typeof b);

function checkFloat(num){
    if (num % 1 === 0) {
        console.log(`O número ${num} é um inteiro`);
    }else{
        console.log(`O número ${num} é um float`);
    }
}

checkFloat(a);
checkFloat(b);

//isInteger

console.log(Number.isInteger(a));