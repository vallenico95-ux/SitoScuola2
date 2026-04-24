const chi_siamo = document.getElementById("chisiamo");
const prodotti_real = document.getElementById("prodotti");
const conttatti_real = document.getElementById("contatti");

// pulsanti
const btn_chis_iamoo = document.getElementById("chi-siamo");
const btn_prodotti = document.getElementById("prodotti-real");
const btn_contatti = document.getElementById("contatti-real");

//creo le funzioni
function vai_chi_siamo() {
    chi_siamo.style.display = "flex";
    prodotti_real.style.display = "none";
    conttatti_real.style.display = "none";
}

function vai_prodotti() {
    chi_siamo.style.display = "none";
    prodotti_real.style.display = "flex";
    conttatti_real.style.display = "none";
}

function vai_contatti() {
    chi_siamo.style.display = "none";
    prodotti_real.style.display = "none";
    conttatti_real.style.display = "flex";
}

//buttoni
btn_chis_iamoo.addEventListener("click", vai_chi_siamo);
btn_contatti.addEventListener("click", vai_contatti);
btn_prodotti.addEventListener("click", vai_prodotti);