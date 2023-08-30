const formulario = document.querySelector("form");
const dvQquadro = document.querySelector("#divQuadro");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarfata = formulario.inTarefa.value;

    const h5 = document.createElement("h5");
    const texto =document.createTextNode(tarfata);
    h5.appendChild(texto);
    dvQquadro.appendChild(h5);

    formulario.inTarefa.value ="";
    formulario.inTarefa.focus();

})

formulario.btSelecionar.addEventListener("click",() =>{

    const tarefas = document.querySelectorAll("h5");
    if(tarefas.length == 0) {
        alert("não ha tarefas para selecionar");
        return
    }
    
    let aux =-1

    for(let i=0; i<tarefas.length; i++) {
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className ="tarefa-normal";
            aux = i;
            break;
        }
    }

    if(aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux +1].className = "tarefa-selecionada";
})