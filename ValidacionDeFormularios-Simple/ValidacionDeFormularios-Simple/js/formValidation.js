//Variables de los elementos del formulario
const formulario = document.getElementById("form-inscripcion")
const nombreInput = document.getElementById("nombre")
const apellidoInput = document.getElementById("apellidos")
const dniInput = document.getElementById("dni")
const fechaNacimientoInput = document.getElementById("fecha-nac")
const emailInput = document.getElementById("email")
const telefonoInput = document.getElementById("telefono")
const direccionInput = document.getElementById("direccion")
const ciudadInput = document.getElementById("ciudad")
const codigoPostalInput = document.getElementById("cp")
const alturaInput = document.getElementById("altura")
const pesoInput = document.getElementById("peso")
const planInput = document.getElementById("plan")
const ibanInput = document.getElementById("iban")

//AddEventListener de los elementos del formulario
formulario.addEventListener("submit", handleEnviar)
nombreInput.addEventListener("blur", handleValidarNombre)
apellidoInput.addEventListener("blur", handleValidarApellido)
dniInput.addEventListener("blur", handleValidarDNI)
fechaNacimientoInput.addEventListener("blur", handleValidarFechaNacimiento)
emailInput.addEventListener("blur", handleValidarEmail)
telefonoInput.addEventListener("blur", handleValidarTelefono)
direccionInput.addEventListener("blur", handleValidarDireccion)
ciudadInput.addEventListener("blur", handleValidarCiudad)
codigoPostalInput.addEventListener("blur", handleValidarCodigoPostal)
alturaInput.addEventListener("blur", handleValidarAltura)
pesoInput.addEventListener("blur", handleValidarPeso)
planInput.addEventListener("change", handleValidarPlan)
ibanInput.addEventListener("blur", handleValidarIBAN)

//Handle de los eventos
function handleEnviar(event){
    event.preventDefault()
    console.log("submit")
}
function handleValidarNombre(event){
    const valor = nombreInput.value.trim()
    if(valor === ""){
        showError(nombreInput, "El nombre es obligatorio")
    }
    else if(valor.length < 3){
        showError(nombreInput, "El nombre debe tener al menos 3 caracteres")
    }
    else{
        clearError(nombreInput)
    }
}
function handleValidarApellido(event){
    const valor = apellidoInput.value.trim()
    if(valor === ""){
        showError(apellidoInput, "El apellido es obligatorio")
    }
    else if(valor.length < 3){
        showError(apellidoInput, "El apellido debe tener al menos 3 caracteres")
    }
    else{
        clearError(apellidoInput)
    }
}
function handleValidarDNI(event){
    const valor = dniInput.value.trim()
    const regexDNI = /^[A-Za-z0-9]{5,15}$/
    if(valor === ""){
        showError(dniInput, "El DNI es obligatorio")
    }
    else if(!regexDNI.test(valor)){
        showError(dniInput, "El DNI no es válido, debe tener entre 5 y 15 caracteres alfanuméricos")
    }
    else{
        clearError(dniInput)
    }
}
function handleValidarEmail(event){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const valor = emailInput.value.trim()
    if(valor === ""){
        showError(emailInput, "El email es obligatorio")
    }
    else if(!regexEmail.test(valor)){
        showError(emailInput, "El email no es válido")
    }
    else{
        clearError(emailInput)
    }
}
function handleValidarTelefono(event){
    const valor = telefonoInput.value.trim()
    const regexTelefono = /^[0-9\s+()-]{9,20}$/
    if(valor === ""){
        showError(telefonoInput, "El teléfono es obligatorio")
    }
    else if(!regexTelefono.test(valor)){
        showError(telefonoInput, "El teléfono no es válido, usa entre 9 y 20 caracteres: números, espacios, +, ( ) o -")
    }
    else{
        clearError(telefonoInput)
    }
}
function handleValidarDireccion(event){
    const valor = direccionInput.value.trim()
    if(valor === ""){
        showError(direccionInput, "La dirección es obligatoria")
    }
    else if(valor.length < 5){
        showError(direccionInput, "La dirección debe tener al menos 5 caracteres")
    }
    else{
        clearError(direccionInput)
    }
}
function handleValidarCiudad(event){
    const valor = ciudadInput.value.trim()
    if(valor === ""){
        showError(ciudadInput, "La ciudad es obligatoria")
    }
    else if(valor.length < 3){
        showError(ciudadInput, "La ciudad debe tener al menos 3 caracteres")
    }
    else{
        clearError(ciudadInput)
    }
}
function handleValidarCodigoPostal(event){
    const valor = codigoPostalInput.value.trim()
    const regexCodigoPostal = /^[0-9]{5}$/
    if(valor === ""){
        showError(codigoPostalInput, "El código postal es obligatorio")
    }
    else if(!regexCodigoPostal.test(valor)){
        showError(codigoPostalInput, "El código postal no es válido, debe tener 5 dígitos")
    }
    else{
        clearError(codigoPostalInput)
    }
}
function handleValidarAltura(event){
    const valor = alturaInput.value.trim()
    const regexAltura = /^[0-9]+(\.[0-9]+)?$/
    if(valor === ""){
        showError(alturaInput, "La altura es obligatoria")
    }
    else if(!regexAltura.test(valor)){
        showError(alturaInput, "La altura no es válida")
    }
    else if(Number(valor) < 120 || Number(valor) > 230){
        showError(alturaInput, "La altura debe estar entre 120 y 230 cm")
    }
    else{
        clearError(alturaInput)
    }
}
function handleValidarPeso(event){
    const valor = pesoInput.value.trim()
    const regexPeso = /^[0-9]+(\.[0-9]+)?$/
    if(valor === ""){
        showError(pesoInput, "El peso es obligatorio")
    }
    else if(!regexPeso.test(valor)){
        showError(pesoInput, "El peso no es válido")
    }
    else if(Number(valor) < 35 || Number(valor) > 250){
        showError(pesoInput, "El peso debe estar entre 35 y 250 kg")
    }
    else{
        clearError(pesoInput)
    }
}
function handleValidarPlan(event){
    const valor = planInput.value.trim()
    if(valor === ""){
        showError(planInput, "El plan es obligatorio")
    }
    else{
        clearError(planInput)
    }
}
function handleValidarIBAN(event){
    const valor = ibanInput.value.trim()
    const regexIBAN = /^[0-9]{4}$/
    if(valor === ""){
        showError(ibanInput, "El IBAN es obligatorio")
    }
    else if(!regexIBAN.test(valor)){
        showError(ibanInput, "Escribe solo los 4 últimos dígitos del IBAN")
    }
    else{
        clearError(ibanInput)
    }
}
function handleValidarFechaNacimiento(event){
    const valor = fechaNacimientoInput.value.trim()
    if(valor === ""){
        showError(fechaNacimientoInput, "La fecha de nacimiento es obligatoria")
    }
    else if(new Date(valor) > new Date()){
        showError(fechaNacimientoInput, "La fecha de nacimiento no puede ser futura")
    }
    else{
        clearError(fechaNacimientoInput)
    }
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
    input.setAttribute("data-valid", "true")
    if(input.getAttribute("aria-invalid") === "true"){
        input.setAttribute("aria-invalid", "false")
        const error = input.parentElement.querySelector(".error-msg")
        error.remove()
    }
}