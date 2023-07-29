const formulario = document.querySelector("form");
const resposta = document.querySelector("pre");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let fatoriando = Number(formulario.bango.value);
    let fatoriado = Fatorial(fatoriando);
    console.log(fatoriado);
    resposta.innerText = `o resultado de ${fatoriando}! é o numero: ${fatoriado}`

})

function Fatorial(x) {

    if(x == 1) {
        return 1;
    } else {
        return Fatorial(x-1) * x;
    }
}