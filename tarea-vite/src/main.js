import './style.css'

// Aquí empieza la lógica.
const contrasena = document.getElementById('contrasena');
const rellenoFortaleza = document.getElementById('rellenoFortaleza');
const etiquetaFortaleza = document.getElementById('etiquetaFortaleza');
const consejos = document.getElementById('consejos');
const botonGenerar = document.getElementById('botonGenerar');
const fortaleza = document.querySelector('.fortaleza');
const botonMostrar = document.getElementById('botonMostrar');

const contrasenasComunes = [
  "123456", "12345678", "123456789", "password", "qwerty",
  "abc123", "111111", "iloveyou", "admin", "contraseña"
];

contrasena.addEventListener('input', (event) => {
  actualizarEvaluacion(event.target.value);
});

botonMostrar.addEventListener('click', (event) => {
  if (contrasena.type === 'password') {
    contrasena.type = 'text';
    botonMostrar.textContent = 'Ocultar';
  } else {
    contrasena.type = 'password';
    botonMostrar.textContent = 'Mostrar';
  }
});
botonGenerar.addEventListener('click', () => {
  const nuevaContrasena = generarContrasena();
  contrasena.value = nuevaContrasena;
  actualizarEvaluacion(nuevaContrasena);
});

//FUNCIONES
function actualizarEvaluacion(valor) {
  const puntos = checkPassword(valor);
  const nivel = getNivel(valor, puntos);
  fortaleza.classList.remove('fortaleza-debil', 'fortaleza-media', 'fortaleza-fuerte');
  fortaleza.classList.add(`fortaleza-`+nivel);
  console.log(puntos, nivel);
}

function checkPassword(passwordValue) {
  let puntos = passwordValue.length;

  // Bono extra si alcanza la longitud recomendada por NIST/OWASP para "fuerte".
  if (passwordValue.length >= 15) {
    puntos += 10;
  }

  const tieneMayuscula = /[A-Z]/.test(passwordValue);
  if (tieneMayuscula) {
    puntos += 2;
  }

  const tieneMinuscula = /[a-z]/.test(passwordValue);
  if (tieneMinuscula) {
    puntos += 2;
  }

  const tieneNumero = /[0-9]/.test(passwordValue);
  if (tieneNumero) {
    puntos += 2;
  }

  const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
  if (tieneCaracterEspecial) {
    puntos += 2;
  }

  const espacio = /\s/.test(passwordValue);
  if (espacio) {
    puntos += 2;
  }

  const tieneRepetidos = /(.)\1{2,}/.test(passwordValue);
  if (tieneRepetidos) {
    puntos -= 2;
  }

  if (contrasenasComunes.includes(passwordValue.toLowerCase())) {
    puntos -= 15;
  }

  return puntos;
}

function getNivel(passwordValue, puntos) {
  if (puntos < 12) {
    return 'debil';
  }
  if (passwordValue.length >= 15 && puntos >= 20) {
    return 'fuerte';
  }
  return 'media';
}

function generarContrasena() {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  const longitud = 20;
  let contrasenaGenerada = '';
  let nivel = '';

  do {
    contrasenaGenerada = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * str.length);
      contrasenaGenerada += str[indiceAleatorio];
    }
    const puntos = checkPassword(contrasenaGenerada);
    nivel = getNivel(contrasenaGenerada, puntos);
  } while (nivel !== 'fuerte');

  return contrasenaGenerada;
}