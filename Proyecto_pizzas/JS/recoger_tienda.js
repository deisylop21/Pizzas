document.getElementById('recoger-tienda-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario
    alert('Tu pedido ha sido confirmado para recoger en tienda.');
    window.location.href = '/html/Tipo_pago.html'; // Redirige a la página de pago
});

document.getElementById('pagar-tarjeta').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Pagar con Tarjeta seleccionado.');
    // Aquí puedes agregar la lógica para procesar el pago con tarjeta.
});

document.getElementById('pagar-efectivo').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Pagar en Efectivo seleccionado.');
    // Aquí puedes agregar la lógica para procesar el pago en efectivo.
});


/*
document.getElementById('recoger-tienda-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    const nuevoPedido = {
        id: 0,  // El ID se actualizará después
        nombre,
        email,
        telefono
    };

    // Guardar el pedido en el JSON
    guardarPedido(nuevoPedido);

    // Generar y descargar el PDF
    generarPDF(nuevoPedido);
});

function guardarPedido(pedido) {
    const pedidos = obtenerPedidos();
    pedido.id = pedidos.length ? pedidos[pedidos.length - 1].id + 1 : 1; // ID autoincremental
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));  // Simulando el guardado en un archivo JSON
}

function obtenerPedidos() {
    const pedidosJSON = localStorage.getItem('pedidos');
    return pedidosJSON ? JSON.parse(pedidosJSON) : [];
}

function generarPDF(pedido) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`NO. Pedido: ${pedido.id}`, 10, 10);
    doc.text(`Nombre: ${pedido.nombre}`, 10, 20);
    doc.text(`Correo Electrónico: ${pedido.email}`, 10, 30);
    doc.text(`Teléfono: ${pedido.telefono}`, 10, 40);

    doc.save(`pedido_${pedido.id}.pdf`);
}*/