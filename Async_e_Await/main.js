//sintaxe

function primeiraFuncao()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Esperou isso aqui!");
            resolve();
        },1000)
    })
};

async function segundaFuncao()
{
    console.log("Iniciou");
    await primeiraFuncao();
    console.log("Terminou");
}

segundaFuncao();

//Prático
function getUser(id){
    return fetch(`https://reqres.in/api/user?id=${id}`)
     .then((data) => data.json())
     .catch((err) => console.log(err))
}

async function showUser(id)
{
    try {
        const user = await getUser(id);
        console.log(`O nome do usuário é: ${user.data.name}`);  
    } catch (error) {
        console.log("O erro foi: " + error);
    }

}

showUser(3);