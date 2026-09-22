// function cambiarTexto() {
//     var parrafo = document.getElementById("parrafo");
//     parrafo.textContent = "¡Has hecho clic en el botón!";
// }

// document.getElementById("boton").addEventListener("click", cambiarTexto);
const boton = document.getElementById("boton");
let contador = 5;

boton.addEventListener("click", function(){
    contador++;
    boton.textContent = "Click aqui (" + contador + ")";
});

const inputNombre = document.getElementById("nombre");
const salida = document.getElementById("salida");

function mostrarNombre(event) {
    salida.textContent = "Hola, " + event.target.value + "!";
}

inputNombre.addEventListener("input", mostrarNombre);
