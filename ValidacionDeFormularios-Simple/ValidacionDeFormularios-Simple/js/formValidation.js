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
const sexoInput = document.getElementById("sexo")
const estadoCivilInput = document.getElementById("estado-civil")
const contactoInputs = document.querySelectorAll('input[name="contacto_pref"]')
const contactoChips = contactoInputs[0].closest(".chips")
const nivelInput = document.getElementById("nivel")
const objetivosInput = document.getElementById("objetivos")
const condicionesInputs = document.querySelectorAll('input[name="condiciones[]"]')
const condicionesChips = condicionesInputs[0].closest(".chips")
const diasInputs = document.querySelectorAll('input[name="dias[]"]')
const diasChips = diasInputs[0].closest(".chips")
const horaInput = document.getElementById("hora")
const clasesInput = document.getElementById("clases")
const referidoInput = document.getElementById("referido")
const nifFacturaInput = document.getElementById("nif-fac")
const direccionFacturaInput = document.getElementById("dir-fac")
const tosInput = document.querySelector('input[name="tos"]')
const rgpdInput = document.querySelector('input[name="rgpd"]')
const tosLabel = tosInput.parentElement
const rgpdLabel = rgpdInput.parentElement

//AddEventListener de los elementos del formulario
formulario.addEventListener("submit", handleEnviar)
formulario.addEventListener("reset", handleLimpiar)
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
sexoInput.addEventListener("change", handleValidarSexo)
estadoCivilInput.addEventListener("change", handleValidarEstadoCivil)
contactoInputs.forEach(input => input.addEventListener("change", handleValidarContacto))
nivelInput.addEventListener("change", handleValidarNivel)
objetivosInput.addEventListener("blur", handleValidarObjetivos)
condicionesInputs.forEach(input => input.addEventListener("change", handleValidarCondiciones))
diasInputs.forEach(input => input.addEventListener("change", handleValidarDias))
horaInput.addEventListener("change", handleValidarHora)
clasesInput.addEventListener("change", handleValidarClases)
clasesInput.addEventListener("mousedown", handleMarcarClase)
referidoInput.addEventListener("blur", handleValidarReferido)
nifFacturaInput.addEventListener("blur", handleValidarNifFactura)
direccionFacturaInput.addEventListener("blur", handleValidarDireccionFactura)
tosInput.addEventListener("change", handleValidarTos)
rgpdInput.addEventListener("change", handleValidarRgpd)

//Handle de los eventos
function handleEnviar(event){
    event.preventDefault()
    handleValidarNombre()
    handleValidarApellido()
    handleValidarDNI()
    handleValidarFechaNacimiento()
    handleValidarSexo()
    handleValidarEstadoCivil()
    handleValidarEmail()
    handleValidarTelefono()
    handleValidarContacto()
    handleValidarDireccion()
    handleValidarCiudad()
    handleValidarCodigoPostal()
    handleValidarAltura()
    handleValidarPeso()
    handleValidarNivel()
    handleValidarObjetivos()
    handleValidarCondiciones()
    handleValidarPlan()
    handleValidarDias()
    handleValidarHora()
    handleValidarClases()
    handleValidarReferido()
    handleValidarNifFactura()
    handleValidarDireccionFactura()
    handleValidarIBAN()
    handleValidarTos()
    handleValidarRgpd()

    const errores = formulario.querySelectorAll(".error-msg")
    if(errores.length > 0){
        let mensaje = "Formulario NO enviado. Hay " + errores.length + " errores:\n"
        errores.forEach(error => mensaje += "\n- " + error.innerText)
        alert(mensaje)
    }
    else{
        alert("Formulario enviado")
    }
}
function handleLimpiar(event){
    formulario.querySelectorAll(".error-msg").forEach(error => error.remove())
    formulario.querySelectorAll('[aria-invalid="true"]').forEach(campo => campo.setAttribute("aria-invalid", "false"))
    formulario.querySelectorAll('[data-valid="true"]').forEach(campo => campo.removeAttribute("data-valid"))
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
    const fecha = new Date(valor + "T00:00")
    const hoy = new Date()
    let edad = hoy.getFullYear() - fecha.getFullYear()
    const meses = hoy.getMonth() - fecha.getMonth()
    if(meses < 0 || (meses === 0 && hoy.getDate() < fecha.getDate())){
        edad--
    }
    if(valor === ""){
        showError(fechaNacimientoInput, "La fecha de nacimiento es obligatoria")
    }
    else if(fecha > hoy){
        showError(fechaNacimientoInput, "La fecha de nacimiento no puede ser futura")
    }
    else if(edad < 15){
        showError(fechaNacimientoInput, "Debes tener al menos 15 años")
    }
    else if(edad > 120){
        showError(fechaNacimientoInput, "La edad no puede superar los 120 años")
    }
    else{
        clearError(fechaNacimientoInput)
    }
}
function handleValidarSexo(event){
    const valor = sexoInput.value
    const sexosValidos = ["", "f", "m", "x"]
    if(!sexosValidos.includes(valor)){
        showError(sexoInput, "El sexo seleccionado no es válido")
    }
    else{
        clearError(sexoInput)
    }
}
function handleValidarEstadoCivil(event){
    const valor = estadoCivilInput.value
    const estadosValidos = ["", "Soltero/a", "Casado/a", "Pareja de hecho", "Divorciado/a", "Viudo/a"]
    if(!estadosValidos.includes(valor)){
        showError(estadoCivilInput, "El estado civil seleccionado no es válido")
    }
    else{
        clearError(estadoCivilInput)
    }
}
function handleValidarContacto(event){
    const marcado = document.querySelector('input[name="contacto_pref"]:checked')
    if(marcado === null){
        showError(contactoChips, "Elige una preferencia de contacto")
    }
    else{
        clearError(contactoChips)
    }
}
function handleValidarNivel(event){
    const valor = nivelInput.value
    const nivelesValidos = ["", "Sedentario", "Ligero (1–2 días/sem)", "Moderado (3–4 días/sem)", "Intenso (5–6 días/sem)", "Atleta"]
    if(!nivelesValidos.includes(valor)){
        showError(nivelInput, "El nivel de actividad no es válido")
    }
    else{
        clearError(nivelInput)
    }
}
function handleValidarObjetivos(event){
    const valor = objetivosInput.value.trim()
    if(valor.length > 500){
        showError(objetivosInput, "Los objetivos no pueden superar los 500 caracteres")
    }
    else{
        clearError(objetivosInput)
    }
}
function handleValidarCondiciones(event){
    const marcadas = document.querySelectorAll('input[name="condiciones[]"]:checked')
    const ninguna = document.querySelector('input[name="condiciones[]"][value="ninguna"]')
    if(ninguna.checked && marcadas.length > 1){
        showError(condicionesChips, "Si marcas «Ninguna» no puedes marcar otras condiciones")
    }
    else{
        clearError(condicionesChips)
    }
}
function handleValidarDias(event){
    const marcados = document.querySelectorAll('input[name="dias[]"]:checked')
    if(marcados.length === 0){
        showError(diasChips, "Elige al menos un día")
    }
    else{
        clearError(diasChips)
    }
}
function handleValidarHora(event){
    const valor = horaInput.value
    const horasValidas = ["6:00–9:00", "9:00–12:00", "12:00–16:00", "16:00–19:00", "19:00–22:00"]
    if(!horasValidas.includes(valor)){
        showError(horaInput, "Elige una franja horaria válida")
    }
    else{
        clearError(horaInput)
    }
}
function handleValidarClases(event){
    const seleccionadas = clasesInput.selectedOptions.length
    if(seleccionadas > 3){
        showError(clasesInput, "Puedes elegir como máximo 3 clases")
    }
    else{
        clearError(clasesInput)
    }
}
function handleMarcarClase(event){
    if(event.target.tagName === "OPTION"){
        event.preventDefault()
        event.target.selected = !event.target.selected
        handleValidarClases()
    }
}
function handleValidarReferido(event){
    const valor = referidoInput.value.trim()
    const regexReferido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{3,30}$/
    if(valor === ""){
        clearError(referidoInput)
    }
    else if(!regexReferido.test(valor)){
        showError(referidoInput, "El referido debe tener entre 3 y 30 letras o números")
    }
    else{
        clearError(referidoInput)
    }
}
function handleValidarNifFactura(event){
    const valor = nifFacturaInput.value.trim()
    const regexNif = /^[A-Za-z0-9]{8,15}$/
    if(valor === ""){
        clearError(nifFacturaInput)
    }
    else if(!regexNif.test(valor)){
        showError(nifFacturaInput, "El NIF/NIE debe tener entre 8 y 15 caracteres alfanuméricos")
    }
    else{
        clearError(nifFacturaInput)
    }
}
function handleValidarDireccionFactura(event){
    const valor = direccionFacturaInput.value.trim()
    if(valor === ""){
        clearError(direccionFacturaInput)
    }
    else if(valor.length < 5){
        showError(direccionFacturaInput, "La dirección de facturación debe tener al menos 5 caracteres")
    }
    else{
        clearError(direccionFacturaInput)
    }
}
function handleValidarTos(event){
    if(!tosInput.checked){
        showError(tosLabel, "Debes aceptar los términos y condiciones")
    }
    else{
        clearError(tosLabel)
    }
}
function handleValidarRgpd(event){
    if(!rgpdInput.checked){
        showError(rgpdLabel, "Debes autorizar el tratamiento de tus datos")
    }
    else{
        clearError(rgpdLabel)
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