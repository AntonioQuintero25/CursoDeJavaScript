//expressao regular

let cnpj = "37356542000101";

//replace
// /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
// "$1.$2.$3/$4-$5"

console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));

