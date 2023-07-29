const fomulariozinho = document.querySelector("form");
const resposta = document.querySelector("pre");

fomulariozinho.addEventListener("submit", (e) => {
    e.preventDefault();

    numeroStart = Number(fomulariozinho.numeroStart.value);
    numeroEnd = Number(fomulariozinho.numeroEnd.value);
    resposta.innerText = calcularNumeros(numeroStart, numeroEnd);
})

function calcularNumeros(x, y) {
    //ordenar numeros
    if(x > y) {
        let temporario = x;
        x = y;
        y = temporario;
    }

    string = "";
    for(let i = x + 1; i<y; i++) {
        if(divid5resto2(i) || divid5resto3(i)) {
            string += i +"\n"
        }
    }

    return string;
}

function divid5resto2(u) {
    if(u % 5== 2) {
        return true;
    }
    return false;
}

function divid5resto3(o) {
    if(o % 5 ==3) {
        return true;
    }
    return false;
}