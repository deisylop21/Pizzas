// Obtener elementos del DOM
const carrito = document.getElementById("carrito");
const lista1 = document.getElementById("lista-1");
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const comprarCarritoBtn = document.getElementById('comprar-carrito');

// Cargar event listeners
cargarEventListeners();
function cargarEventListeners() {
    // Disparar cuando se agrega un producto al carrito
    lista1.addEventListener('click', agregarProducto);
    // Eliminar productos del carrito
    carrito.addEventListener('click', eliminarProducto);
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    // Comprar productos del carrito
    comprarCarritoBtn.addEventListener('click', comprarCarrito);
}

// Función para agregar el producto al carrito
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto);
    }
}

// Leer los datos del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoProducto);
}

// Mostrar producto en el carrito
function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width="100">
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
    guardarProductoLocalStorage(producto);
}

// Eliminar el producto del carrito
function eliminarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');
        e.target.parentElement.parentElement.remove();
        eliminarProductoLocalStorage(productoId);
    }
}

// Vaciar el carrito
function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    vaciarLocalStorage();
}

// Comprar productos del carrito
function comprarCarrito() {
    const productos = [];
    const rows = listaCarrito.querySelectorAll('tr');
    rows.forEach(row => {
        const producto = {
            imagen: row.querySelector('img').src,
            titulo: row.querySelector('td:nth-child(2)').textContent,
            precio: row.querySelector('td:nth-child(3)').textContent,
            id: row.querySelector('a').getAttribute('data-id')
        }
        productos.push(producto);
    });
    localStorage.setItem('carrito', JSON.stringify(productos));
    window.location.href = '/HTML/Comprar.html';
}

// Guardar producto en Local Storage
function guardarProductoLocalStorage(producto) {
    let productos = obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('carrito', JSON.stringify(productos));
}

// Obtener productos del Local Storage
function obtenerProductosLocalStorage() {
    let productos;
    if (localStorage.getItem('carrito') === null) {
        productos = [];
    } else {
        productos = JSON.parse(localStorage.getItem('carrito'));
    }
    return productos;
}

// Eliminar producto de Local Storage
function eliminarProductoLocalStorage(productoId) {
    let productos = obtenerProductosLocalStorage();
    productos = productos.filter(producto => producto.id !== productoId);
    localStorage.setItem('carrito', JSON.stringify(productos));
}

// Vaciar Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}
