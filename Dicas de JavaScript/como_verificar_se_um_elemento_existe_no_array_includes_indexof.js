let profissoes = ["Medico","Advogado", "Dentista"];

const profissaoQueEstouProcurando = profissoes.includes('programador'); //false

const profissaoQueEstouProcurando2 = profissoes.includes('medico'); //false

const profissaoQueEstouProcurando3 = profissoes.includes('Medico'); //true

const indiceDaProfissaoQueEstouProcurando = profissoes.indexOf('Dentista')

console.log(profissaoQueEstouProcurando3);
console.log(indiceDaProfissaoQueEstouProcurando);