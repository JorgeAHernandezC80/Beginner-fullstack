// Función para validar el formulario de recuperación de contraseña
function validateForm(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener el valor del campo de correo electrónico
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar si el campo está vacío
    if (email === '') {
        alert('Por favor, ingresa tu dirección de correo electrónico.');
        emailInput.focus(); // Enfocar el campo de entrada
        return false; // Detener la ejecución
    }

    // Validar el formato del correo electrónico
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        emailInput.focus(); // Enfocar el campo de entrada
        return false; // Detener la ejecución
    }

    // Si todas las validaciones pasan, enviar el formulario
    alert('Instrucciones de recuperación de contraseña enviadas a ' + email);
    // Aquí puedes enviar el formulario usando JavaScript, si es necesario
    // document.querySelector('form').submit(); // Descomenta esto para enviar el formulario
}

// Obtener el formulario y agregar el evento de envío
const form = document.getElementById('resetPasswordForm');
form.addEventListener('submit', validateForm);
