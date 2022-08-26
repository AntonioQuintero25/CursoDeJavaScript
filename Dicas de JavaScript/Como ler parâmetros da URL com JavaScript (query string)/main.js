const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

const nomeParam = urlParams.get("nome");

console.log(nomeParam);

const idadeParam = urlParams.get('idade');

console.log(idadeParam);