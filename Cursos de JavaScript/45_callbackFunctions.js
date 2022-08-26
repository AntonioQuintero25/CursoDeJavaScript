function exibir(num)
{
    console.log("A operação resultou em: "+num);
}

function soma(a,b,callback)
{
    let op = a + b;
    callback(op);
}

function multi (a,b, cb)
{
    let op = a * b;
    cb(op);
}

soma(3,5,exibir);
multi(3,2,exibir);