//Variables de los elementos del formulario
const formulario = document.getElementById("form-inscripcion")
const nombreInput = document.getElementById("nombre")
const apellidoInput = document.getElementById("apellidos")
const dniInput = document.getElementById("dni")
const emailInput = document.getElementById("email")
const telefonoInput = document.getElementById("telefono")
const direccionInput = document.getElementById("direccion")
const ciudadInput = document.getElementById("ciudad")
const codigoPostalInput = document.getElementById("cp")
const alturaInput = document.getElementById("altura")
const pesoInput = document.getElementById("peso")
const ibanInput = document.getElementById("iban")

//AddEventListener de los elementos del formulario
formulario.addEventListener("submit", handleEnviar)
nombreInput.addEventListener("blur", handleValidarNombre)
apellidoInput.addEventListener("blur", handleValidarApellido)
dniInput.addEventListener("blur", handleValidarDNI)
emailInput.addEventListener("blur", handleValidarEmail)
telefonoInput.addEventListener("blur", handleValidarTelefono)
direccionInput.addEventListener("blur", handleValidarDireccion)
ciudadInput.addEventListener("blur", handleValidarCiudad)
codigoPostalInput.addEventListener("blur", handleValidarCodigoPostal)
alturaInput.addEventListener("blur", handleValidarAltura)
pesoInput.addEventListener("blur", handleValidarPeso)
ibanInput.addEventListener("blur", handleValidarIBAN)

//Handle de los eventos
function handleEnviar(event){
    event.preventDefault()
    console.log("submit")
}
function handleValidarNombre(event){
    console.log("blur nombre")
}
function handleValidarApellido(event){
    console.log("blur apellido")
}
function handleValidarDNI(event){
    console.log("blur dni")
}
function handleValidarEmail(event){
    console.log("blur email")
}
function handleValidarTelefono(event){
    console.log("blur telefono")
}
function handleValidarDireccion(event){
    console.log("blur direccion")
}
function handleValidarCiudad(event){
    console.log("blur ciudad")
}
function handleValidarCodigoPostal(event){
    console.log("blur codigo postal")
}
function handleValidarAltura(event){
    console.log("blur altura")
}
function handleValidarPeso(event){
    console.log("blur peso")
}
function handleValidarIBAN(event){
    console.log("blur iban")
}

//Helpers de los eventos
function showError(input, message){
    if(input.getAttribute("aria-invalid") !== "true"){
        input.setAttribute("aria-invalid", "true")
        input.removeAttribute("data-valid")
        const error = document.createElement("p")
        error.classList.add("error-msg")
        error.innerText = message
        input.parentElement.appendChild(error)
    }
    else{
        const error = input.parentElement.querySelector(".error-msg")
        error.innerText = message
    }
}
function clearError(input){
    
}