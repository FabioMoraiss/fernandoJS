const tatatata = document.querySelector("form");
const hihihihi = document.querySelector("pre");

tatatata.addEventListener("submit", (e) => {
    e.preventDefault();

    let hos = Number(tatatata.hoss.value);
    hihihihi.innerText = fazedordehos(hos);
})

function fazedordehos(x) {
    hohoho = "";
    for(let i = 1; i<=x; i++) {
        if( i == x) {
            hohoho +=" HO!";
        } else {
            hohoho +=  " HO";
        }
    }
    return hohoho;
}