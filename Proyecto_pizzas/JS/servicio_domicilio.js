document.getElementById('domicilio-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario
    alert('Tu pedido ha sido confirmado para servicio a domicilio.');
    window.location.href = '/html/APPI_PAYPAL.HTML'; // Redirige a la página de pago
});
