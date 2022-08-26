let x = 5;

const y = 10; // Um const nunca muda de valor

console.log("const: " + y);

console.log(x);

if(true)
{
    let x = 20;
    console.log(x);

    const y = 20;

    console.log("Const if: "+ y);
}

console.log(x);