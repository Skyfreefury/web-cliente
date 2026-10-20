import './style.css'

// =====================================================
// ELEMENTOS DEL HTML
// =====================================================
const cuerpoTabla = document.querySelector('#cuerpoTabla')
const mensaje = document.querySelector('#mensaje')
const botonVista = document.querySelector('#botonVista')
const vistaCards = document.querySelector('#vistaCards')
const tablaClientes = document.querySelector('#tablaClientes')
const spinner = document.querySelector('#spinner')

// =====================================================
// DATOS
// =====================================================

// Pide el JSON (está en public/data) y devuelve el array de clientes
async function obtenerClientes() {
  await new Promise(resolve => setTimeout(resolve, 2000)) // 2 segundos
  const respuesta = await fetch('/data/data.json')

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar los datos`)
  }

  const data = await respuesta.json()
  return data.clientes
}

// =====================================================
// PINTAR EN PANTALLA
// =====================================================

// Carga los clientes y rellena el tbody de la tabla
async function mostrarClientes() {
  try {
    const clientes = await obtenerClientes()

    cuerpoTabla.innerHTML = clientes.map(cliente => `
      <tr>
        <td>${cliente.id_cliente}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.apellido}</td>
        <td>${cliente.correo}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.direccion}</td>
      </tr>
    `).join('')

    // Pintamos también las cards
    pintarCards(clientes)

    mensaje.textContent = `${clientes.length} clientes cargados`
  } catch (error) {
    mensaje.textContent = error.message
    mensaje.classList.add('error')
    console.error(error)
  } finally {
    // Quitamos el spinner
    spinner.classList.add('oculto')
  }
}

// Muestra los clientes en formato de tarjetas
function pintarCards(clientes) {
  vistaCards.innerHTML = clientes.map(cliente => `
    <div class="card">
      <h2>${cliente.nombre} ${cliente.apellido}</h2>
      <p><strong>ID:</strong> ${cliente.id_cliente}</p>
      <p><strong>Correo:</strong> ${cliente.correo}</p>
      <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
      <p><strong>Dirección:</strong> ${cliente.direccion}</p>
    </div>
  `).join('')
}

// =====================================================
// COOKIES
// =====================================================

// Devuelve el valor de una cookie o null si no existe
function leerCookie(nombre) {
  const cookie = document.cookie
    .split('; ')
    .find(c => c.startsWith(nombre + '='))
  return cookie ? cookie.split('=')[1] : null
}

// =====================================================
// HANDLERS
// =====================================================

// Alterna entre la vista tabla y la vista cards
function handleCambiarVista() {
  vistaCards.classList.toggle('oculto')

  if (!vistaCards.classList.contains('oculto')) {
    document.cookie = `vista=cards; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`
    tablaClientes.classList.add('oculto')
    botonVista.classList.add('activo')
    botonVista.setAttribute('aria-pressed', 'true')
  } else {
    document.cookie = `vista=tabla; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`
    tablaClientes.classList.remove('oculto')
    botonVista.classList.remove('activo')
    botonVista.setAttribute('aria-pressed', 'false')
  }
}

// =====================================================
// INICIO
// =====================================================

// Evento del switch
botonVista.addEventListener('click', handleCambiarVista)

// Cargamos los clientes
mostrarClientes()

// Recuperamos la vista que tenía el usuario
if (leerCookie('vista') === 'cards') {
  vistaCards.classList.remove('oculto')
  tablaClientes.classList.add('oculto')
  botonVista.classList.add('activo')
  botonVista.setAttribute('aria-pressed', 'true')
}
