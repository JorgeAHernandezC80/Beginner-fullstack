document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    form.addEventListener("submit", function (event) {
        // Prevenir el envío si la validación falla
        if (!validateLoginForm()) {
            event.preventDefault();
        }
    });
});

function validateLoginForm() {
    let isValid = true;
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    // Validación del nombre de usuario ("debe tener al menos 3 caracteres")
    if (username.value.trim().length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        isValid = false;
    }

    // Validación de la contraseña ("debe tener al menos 6 caracteres")
    if (password.value.trim().length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    }

    return isValid;
}
