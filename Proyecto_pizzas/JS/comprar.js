document.addEventListener('DOMContentLoaded', mostrarCarrito);

function mostrarCarrito() {
    const productos = JSON.parse(localStorage.getItem('carrito')) || [];
    const compraLista = document.getElementById('compra-lista');

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="product-txt">
                <h3>${producto.titulo}</h3>
                <p class="precio">${producto.precio}</p>
            </div>
        `;
        compraLista.appendChild(div);
    });
}

function seleccionarEntrega(tipo) {
    if (tipo === 'domicilio') {
        alert('Has seleccionado servicio a domicilio.');
    } else if (tipo === 'tienda') {
        alert('Has seleccionado recoger en tienda.');
    }
    document.getElementById('metodo-entrega').style.display = 'none';
    document.getElementById('seccion-pago').style.display = 'block';
}

function irAPago() {
    if (confirm('¿Estás seguro de finalizar la compra y proceder al pago?')) {
        window.location.href = '/html/pago.html';
    }
}
