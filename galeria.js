function inicializarGaleria() {
    console.log("Galería cargada");
    añadirTabindex();
}

function añadirTabindex() {
    const imagenes = document.querySelectorAll("figure img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("tabindex", "0");
        console.log(`Tabindex añadido a la imagen ${i+1}`);
    }
}

function resaltarImagen(event) {
    event.target.style.borderColor = "#FF5733";
}

function normalizarImagen(event) {
    event.target.style.borderColor = "#ccc";
}

window.onload = inicializarGaleria;

const imagenes = document.querySelectorAll("figure img");
imagenes.forEach(img => {
    img.addEventListener("mouseover", resaltarImagen);
    img.addEventListener("mouseleave", normalizarImagen);
    img.addEventListener("focus", resaltarImagen);
    img.addEventListener("blur", normalizarImagen);
});