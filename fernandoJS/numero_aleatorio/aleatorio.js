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

  //preencher array
  var paz = [];
  paz = preencherArray(tamanhoArray);
  exibirarray(paz);

  //maior valor
  let maiorValor = getMaiorValor(paz);
  resMaiorValor.innerText = maiorValor;

  //menor valor
  let menorValor = getMenorValor(paz);
  respMenorValor.innerText = menorValor;

  //soma dos elementos
  let somaDosElementos = getSoma(paz);
  respSomaElementos.innerText = somaDosElementos;

  //media dos elementos
  let mediaDosElementos = getMedia(paz, somaDosElementos);
  respMediaElementos.innerText = mediaDosElementos;

  //quantidade de pares
  let qtdPares = getPares(paz);
  respQtdPar.innerText = qtdPares;

  //quantidade de impares
  let qtdImpares = getImpares(paz);
  respQtdImpar.innerText = qtdImpares;

  //mostrar array
  let arrayzinho = getarrayzinho(paz);
  respArray.innerText = arrayzinho;
});

function preencherArray(tamanhoArray) {
  let novoarray = [];
  for (let i = 0; i < tamanhoArray; i++) {
    novoarray.push(gerarnumeroAleatorio());
  }

  return novoarray;
}

function gerarnumeroAleatorio() {
  mim = 40;
  max = 400;
  range = max - mim;
  aletorio = Math.floor(Math.random() * range + mim);

  return aletorio;
}

function getMaiorValor(array) {
  let maiorValor = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    }
  }

  return maiorValor;
}

function exibirarray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function getMenorValor(array) {
  let menorvalor = 999999;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menorvalor) {
      menorvalor = array[i];
    }
  }
  return menorvalor;
}
function getSoma(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

function getMedia(array, soma) {
  let media = soma / array.length;
  return media;
}

function getPares(array) {
    let qtd =0;
    for(let i =0; i<array.length; i++) {
        if(array[i] % 2 == 0) {
            qtd++;
        }
    }

    return qtd;
}

function getImpares(array) {
    let qtd =0;
    for(let i =0; i<array.length; i++) {
        if(array[i] % 2 != 0) {
            qtd++;
        }
    }
    return qtd;
}

function getarrayzinho(array) {
    let arrayString= ""
    for(let i =0; i<array.length; i++) {
        arrayString += " | " +array[i];
    }
    return arrayString;
}
