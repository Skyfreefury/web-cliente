const inputNombre = document.getElementById("nombre")
const inputApellidos = document.getElementById("apellidos")

inputNombre.addEventListener("blur", handleBlurNombre);
inputApellidos.addEventListener("blur", handleBlurApellidos);


function handleBlurNombre(event){
    const valor = inputNombre.value.trim();
    if(valor.length<=3){
        mostrarError(inputNombre, "El texto debe tener mas de 3 caracteres");
    } else {
        limpiarError(inputNombre);
    }
}
function handleBlurApellidos(event){
    const valor = inputApellidos.value.trim();
    if(valor.length<=2){
        mostrarError(inputApellidos, "El texto debe tener mas de 2 caracteres");
    } else {
        limpiarError(inputApellidos);
    }
}

// HELPERS
function mostrarError(input, mensaje){
    input.setAttribute("aria-invalid", "true");
    let error = input.parentElement.querySelector(".error-msg");

    if(!error){
        error = document.createElement("p");
        error.className = "error-msg";
        input.parentElement.appendChild(error);
    }
    error.textContent = mensaje;
}

function limpiarError(input){
    input.removeAttribute("aria-invalid");
    const error = input.parentElement.querySelector(".error-msg");

    if(error){
        error.remove();
    }
}
