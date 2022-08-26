let str = "O  Teste   Esta  COm Espaço  Duplo";
console.log(str);

let strArrumada = str.replace(/(  )+/g,"");
console.log(strArrumada);