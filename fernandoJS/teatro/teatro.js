const formulariozinho = document.querySelector("from");
const dvPalco = document.querySelector("#dvPalco");

const poltronas = 240; // quantidade poltronas

const reservadas = [] //vetor com as poltronas reservadas

window.addEventListener("Load", () => {

    const ocupada = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [] ;
    for(let i =1 ;i<=poltronas; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas.includes(i.toString()) ? "igm/ocupada.jpg" : "igm/disponivel.jpg";
        imgStatus.className= "poltrona"

        const figgureCap = document.createElement("ficCaption");
        

        //quanidade de zeros antes do numero da poltrona

        const zeros =  i < 10 ? "00" : i <100 ? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`);

        figgureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figgureCap);

        dvPalco.appendChild(figure);
        }
})