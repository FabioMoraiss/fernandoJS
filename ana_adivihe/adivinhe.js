const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDicas = document.querySelector("#ouDica");

const erros = [];

const sorteado = Math.floor(Math.random() * 100) + 1; //gera um número aleatório entre 1 e 100

console.log(sorteado);

const chances = 6;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if(numero == sorteado){
        respDicas.innerText = `Parabéns cara! O Número digitado é o correto`;
        frm.btnSubmit.disable = true;
        frm.btnNovo.className = "exibe";
    }else{
        if(erros.includes(numero)){
            alert("O Número não pode ser repetido");
        }else{
            erros.push(numero);
            const numErros = erros.length;
            const numChances = chances - numErros;
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if(numChances == 0){
                alert("Suas chances acabaram, melhore!");
                frm.btnSubmit.disable = true;
                frm.btnNovo.className = "exibe";
                respDicas.innerText = `Game Over! O número sorteado é ${sorteado}`;
            }else{
                const dica = (numero < sorteado)? "maior" : "menor";
                respDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`;
                
            }
        }
    }

    frm.inNumero.value = "";
    frm.inNumero.focus();
});

frm.btnNovo.addEventListener("click", () => {
    location.reload();


})
