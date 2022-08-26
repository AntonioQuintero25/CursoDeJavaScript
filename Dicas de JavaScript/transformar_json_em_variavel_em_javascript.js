let json = '{"nome":"Antonio", "idade":21, "profissao":"Programador"}';
// console.log(json);
// console.log(typeof json);

//JSON

let obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof obj);

//acessar propriedades
// console.log(obj.nome);
// console.log(obj["idade"]);

//objeto para JSON
var jsonFromObj = JSON.stringify(obj);
console.log(jsonFromObj);