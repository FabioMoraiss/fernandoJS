
const aaaa = 3;
const formulario = document.querySelector("form");
const predoHTLM = document.querySelector("pre");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let numeroDoHTLM = Number(formulario.bango.value);
    let = numerodeFibonot = fibonot(numeroDoHTLM);
    console.log(numerodeFibonot);
    predoHTLM.innerText = `o numero ${numerodeFibonot} é o ${numeroDoHTLM}° da sequencia de FIBONOT`
})


function fibonot(y) {
    let continuar = true;
    let primeiroNumero;
    let segundoNumero;
    let i = 1;
    let ordinarioFibonot = 1;
    while(continuar) {
        primeiroNumero = fibonacci(i);
        segundoNumero = fibonacci(i+1);

        for(let j = primeiroNumero + 1; j < segundoNumero; j++) {
            if (ordinarioFibonot == y) {
                return j;
            }
            ordinarioFibonot ++;
        }


        i++;
    }

    return 5;

}
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}