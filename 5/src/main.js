import './style.css'

const user = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const formLogin = document.getElementById('formLogin');
const mensajeError = document.getElementById('mensajeError');

//Listeners
formLogin.addEventListener("submit",handlerSubmitLogin);

//Handlers
function handlerSubmitLogin(event){
    event.preventDefault();
    if(logIn(user.value,password.value)){
        startSession(user.value)
    }
    else{
        showError("usuario o contraseña incorrecto")
    }
};

//Helpers
function saveUsers(){
    const users = [
        { usuario: 'Alex123', clave: '1234' },
        { usuario: 'Maria456', clave: '5678' },
        { usuario: 'Juan789', clave: '9012' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(users));
};
saveUsers();
function checkSession(){
    let sesion = sessionStorage.getItem('usuario');
    if (sesion != null){
        window.location.href = "inicio.html";
    };
};
checkSession();
function logIn(usuario,clave){
    let users = JSON.parse(localStorage.getItem('usuarios'));
    let account = users.find(function(u){
        return u.usuario == usuario && u.clave == clave;
    });
    if (account != undefined){
        return true
    }
    else{
        return false
    };
};
function startSession(usuario){
    sessionStorage.setItem('usuario',usuario);
    window.location.href = "inicio.html";
};
function showError(mensaje){
    mensajeError.textContent = mensaje
};
