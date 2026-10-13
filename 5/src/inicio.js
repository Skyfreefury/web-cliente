import './style.css'

const user_name = document.getElementById("nombreUsuario");
const button_close = document.getElementById("botonCerrarSesion");

//Listeners
button_close.addEventListener('click',handlerCerrarSesion);

//Handlers
function handlerCerrarSesion(){
    cerrarSesion();
};

//Helpers
function cerrarSesion(){
    sessionStorage.removeItem("usuario");
    window.location.href = "index.html";
}
function comprobarSesion(){
    let sesion = sessionStorage.getItem("usuario");
    if(sesion == null){
        window.location.href = "index.html";
    }
    else{
        user_name.textContent = sesion;
    }
}
comprobarSesion();