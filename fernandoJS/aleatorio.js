const formulariozinho = document.querySelector("form");
const resMaiorValor = document.querySelector("#maiorValor");
const respMenorValor = document.querySelector("#menorValor");
const respMediaElementos = document.querySelector("#mediaElementos");
const respSomaElementos = document.querySelector("#somaElementos");
const respQtdPar = document.querySelector("#quantidadePares");
const respQtdImpar = document.querySelector("#quantidadeImpares");
const respArray = document.querySelector("#array");

formulariozinho.addEventListener("submit", (e) => {
  e.preventDefault();

  let tamanhoArray = Number(formulariozinho.ggg.value);
  console.log(tamanhoArray);

  let paz = [];
  paz = preencherArray(paz, tamanhoArray);

  let maiorValor = getMaiorValor(paz);

  resMaiorValor.innerText = maiorValor;
});

function preencherArray(tamanhoArray) {
  let novoarray = [];
  for (let i = 0; i < tamanhoArray; i++) {
    novoarray.push(gerarnumeroAleatorio());
  }

  return array;
}

function gerarnumeroAleatorio() {
  mim = 40;
  max = 400;
  range = max - mim;
  aletorio = Math.floor(Math.random * range + mim);

  return aleatorio;
}

function getMaiorValor(array) {
  maiorValor = -1;
  
    
  

  return menorvalor;
}
