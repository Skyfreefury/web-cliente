import './style.css'
import productos from './data/productos.json';

// Aquí empieza la lógica del carrito.
console.log(productos);
const listaProductos = document.getElementById("listaProductos");
const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("panelCarrito");
let carrito = [];
const listarCarrito = document.getElementById("listaCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const totalCarrito = document.getElementById("totalCarrito");

//Listener
botonCarrito.addEventListener("click", handlerMostrarPanel);
listaProductos.addEventListener("click",handlerAgregar)

//Handler
function handlerMostrarPanel(){
    panelAlternar();
};
function handlerAgregar(event){
    if (event.target.classList.contains("boton-anadir")) {
        const id = Number(event.target.dataset.id);
        const cantidad = Number(event.target.parentElement.querySelector(".cantidad").value);
        añadirAlCarrito(id,cantidad);
    }
};

//Helper
function panelAlternar(){
    panelCarrito.classList.toggle("oculto");
};
function añadirAlCarrito(id, cantidad){
    const producto = productos.find(function (p) {
        return p.id === id;
    });
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
    });
    pintarCarrito();
};
function pintarCarrito(){
    const lineas = carrito.map(function(item){
        return `<li>${item.nombre} x ${item.cantidad}</li>`;
    });
    const todasLineas = lineas.join("");
    listarCarrito.innerHTML = todasLineas;

    let unidades = 0;
    let total = 0;
    for (const item of carrito) {
        unidades += item.cantidad;
        total += item.precio * item.cantidad;
    }
    contadorCarrito.textContent = unidades;
    totalCarrito.textContent = total;
};
function pintarProductos(){
    const tarjeta = productos.map(function(producto){
        return `<article
                class='producto'> <img src="${producto.imagen}"
                alt="${producto.nombre}"> <h3>${producto.nombre}</h3>
                <p>${producto.precio} €</p>
                <div class="fila-anadir">
                <input type="number" class="cantidad" min="1" max="${producto.stock}" value="1">
                <button class="boton-anadir" data-id="${producto.id}">Añadir</button>
                </div>
                </article>`;
    });
    const todasTarjetas = tarjeta.join("");
    listaProductos.innerHTML = todasTarjetas;
};
pintarProductos();