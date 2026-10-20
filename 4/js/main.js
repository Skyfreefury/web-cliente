const botonTema = document.getElementById("botonTema");
const selectIdioma = document.getElementById("selectorIdioma");
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

botonTema.addEventListener("click", handleCambiarTema);
selectIdioma.addEventListener("change", handleCambiarIdioma);

function handleCambiarTema() {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        localStorage.setItem("tema", "oscuro");
        botonTema.textContent = "Ver la luz";
    } else {
        botonTema.textContent = "Apagon";
        localStorage.setItem("tema", "claro");
    }
}
function handleCambiarIdioma() {
    const idioma = selectIdioma.value;
    localStorage.setItem("idioma", idioma);
    if (idioma === "es") {
        titulo.textContent = "Bienvenido a Cuba";
        parrafo.textContent = "Aqui la veras con luz y cuando no tiene luz(la mayoria del tiempo no tiene)";
    } else if (idioma === "en") {
        titulo.textContent = "Welcome to Cuba";
        parrafo.textContent = "Here you will see it with light and when it has no light (most of the time it doesn't have)";
    }
}

const temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "oscuro") {
    document.body.classList.add("oscuro");
    botonTema.textContent = "Ver la luz";
}
const idiomaGuardado = localStorage.getItem("idioma");
if (idiomaGuardado === "en") {
    selectIdioma.value = "en";
    titulo.textContent = "Welcome to Cuba";
    parrafo.textContent = "Here you will see it with light and when it has no light (most of the time it doesn't have)";
}
