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


        if(i% 24 == 12) figure.style.marginRight = "60px"

        dvPalco.appendChild(figure);

        if(i%24 ==0  && dvPalco.appendChild(document.createElement("br")));
        }
})

formulariozinho.addEventListener("submit", (e) => {
    e.preventDefault();
    const poltrona = Number(formulariozinho.inPoltrona.value);

    if(poltrona> poltronas) {
        alert("informe um numero de poltrona valido")
        formulariozinho.inPoltrona.focus();
        formulariozinho.inPoltrona.value ="";
        return;
    }

    if(ocupadas.includes(poltrona.toString()) ) {
        alert(`poltrona ${poltrona} ja esta reservada`)
        formulariozinho.inPoltrona.focus();
        formulariozinho.inPoltrona.value ="";
        return;
    }

    //caputra a imagem da poltroda, filha de divPalco. É 01 pois começa em zero
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona -1];
    imgPoltrona.src ="igm/reservada.jpg" //modifica o atributo da imagem
    reservadas.push(poltrona);

    formulariozinho.inPoltrona.value="";
    formulariozinho.inPoltrona.focus();

})

formulariozinho.btnConfirmar.addEventListener("click", () => {
    if(reservadas.length ==0) {
        alert("nao ha poltronas reservadas")
        formulariozinho.inPoltrona.focus();
        return;
    }
    
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";") : [];
    
    for(let i = reservadas.length -1; i>= 0; i--) {
        ocupadas.push(reservadas[i]);
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] -1];
        imgPoltrona.src = "igm/ocupada.jpg";

        reservadas.pop();
    }

    localStorage.setItem("teatroOcupadas", opcupadas.join(";"));
})