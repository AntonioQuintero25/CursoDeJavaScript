//JSON -> objeto
//classe JSON
//JSON <-> objeto

let json = '{"name":"Antonio", "idade":"21"}';

const data = JSON.parse(json);

console.log(data);
console.log(data.name);

// stringfy

const paraJson = JSON.stringify(data);

console.log(paraJson);