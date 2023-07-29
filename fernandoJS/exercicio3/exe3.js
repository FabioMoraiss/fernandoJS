const formulario = document.querySelector("form");
const resposta = document.querySelector("pre");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let numeroBase = Number(formulario.umdoistres.value);
    let somaDosnumeros = SomarNumeros(numeroBase);

    resposta.innerText = `o resultado da soma é ${somaDosnumeros}`;

})

function SomarNumeros(x) {
    soma = 0;
    for(i = 0; i<5; i++) {

        if(!(x % 2 == 0)) {
            x ++;
        }

        soma += x;
        x = x + 2;
        
    }

    return soma;
}