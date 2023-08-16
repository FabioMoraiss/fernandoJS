const formulariooo = document.querySelector("form");
const htmlErros = document.querySelector("#outErros");
const htmlChances = document.querySelectorAll("outChances");
const htmlDica = document.querySelector("#outDica");

const erros =[];
const sorteado = Math.floor(Math.random() * 100) + 1
const chances =0;

console.log(sorteado)
formulariooo.addEventListener("submit", (e) => {
    e.preventDefault();

    const tentativa = Number(formulariooo.aaaa.value);
    

    if(tentativa == sorteado) {
        htmlDica.innerText = `parabens ! o numero sorteado é ${sorteado}`
        formulariooo.btnEnviar.disabled = true;
        formulariooo.btnNovo.className= "exibe"
    } else {
        if(erros.push(tentativa)) {
            alert(`voce ja apostou esse numero ${tentativa} testen outro !`)
        } else {
            erros.push(tentativa);
            const numeroErros = erros.length;
            let numeroChances = chances - numeroErros;
            htmlErros.innerText = `${numeroErros} (${erros.join(",")})`
            htmlChances.innerText = numeroChances;
            if(numeroChances ==0) {
                alert("suas chances acabaram");
                formulariooo.btnEnviar.disabled = true;
                formulariooo.btnNovo.className = "exibe";
                htmlDica.innerText = `gamer over, o numero sorteado foi ${sorteado}`
            } else {
                const dica = (numero < sorteado) ? "mair" : "menor"
                htmlDica.innerText = `DICA: TENTE UM NUMERO ${dica} que ${tentativa}`
            }
        }
    }
    formulariooo.aaaa.value ="";
    formulariooo.aaaa.focus();
})

formulariooo.btnNovo.addEventListener("click", () => {
   // location.reload();
   reloadPage();
})

function reloadPage() {
    fetch("vagina.html").then(function(response) {
      response.text().then(function(text) {
        document.body.innerHTML = text;
      });
    });
  }