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