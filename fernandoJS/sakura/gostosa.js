const formulario = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostaLista = document.querySelector("pre");

const pacientes = []; //declara um vetor global

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = formulario.inPaciente.value;
    pacientes.push(nome);
    console.log(pacientes);
    let lista = "";

    for (let i=0; i<pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respostaLista.innerText = lista;
    formulario.inPaciente.value = "";
    formulario.inPaciente.focus();
})

formulario.btnUrgencia.addEventListener("click", () =>{
    console.log("botao urgencia clicado");

    const nome = formulario.inPaciente.value;
    pacientes.push(nome);
    console.log(pacientes);
    let lista = "";

    pacientes.forEach((paciente, i) => {
        return (lista +=`${i+1}-${pacientes[i]}\n`)
    })

    respostaLista.innerText = lista;
    formulario.inPaciente.value = "";
    formulario.inPaciente.focus();
    
})

formulario.btnAtender.addEventListener("click", () => {
    if(pacientes.length == 0) {
        alert("nao ha pacientes para atneder")
        formulario.focus();
        return
    }

    const atender = pacientes.shift();
    respostaNome.innerText = atender;
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i+1} - ${pacientes[i]}\n`))

    respostaLista.innerText = lista;
})