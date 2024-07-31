document.addEventListener('DOMContentLoaded', function() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '0.01' // Actualiza este valor según el total de la compra
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Pago completado por ' + details.payer.name.given_name);
                window.location.href = '/html/confirmacion.html'; // Redirigir a una página de confirmación
            });
        }
    }).render('#paypal-button-container'); // Renderizar el botón de PayPal en el contenedor especificado
});

document.getElementById('card-payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí deberías agregar la lógica para procesar el pago con tarjeta
    alert('Pago con tarjeta procesado');
    window.location.href = '/html/confirmacion.html'; // Redirigir a una página de confirmación
});

//Configurar... hay un error en la conexión de compra.
