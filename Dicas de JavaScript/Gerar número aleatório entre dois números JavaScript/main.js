function gerarNumerosAleatorios(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a; 
}

console.log(gerarNumerosAleatorios(1, 10));
console.log(gerarNumerosAleatorios(20, 30));
console.log(gerarNumerosAleatorios(30, 40));