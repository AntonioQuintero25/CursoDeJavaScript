//Break podemos encerrar uma instrução
//Continue podemos pular uma instrução

for(let i = 10; i > 0; i--)
{
    console.log(i);
    if(i === 3)
    {
        console.log("O loop for parou em: "+ i);
        break;
        
    }
    
}

console.log("Break");

let x = 10;

while(x < 100)
{
    
    x += 10;

    if(x === 60)
    {
        console.log("CONTINUE");
        continue;
    }
    console.log(x);
}