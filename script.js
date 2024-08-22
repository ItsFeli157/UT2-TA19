document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita el envío del formulario si hay errores

    let esValido = true;

    // Validación del nombre
    const campoNombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('errorNombre');
    if (campoNombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        esValido = false;
    } else {
        errorNombre.textContent = "";
    }

    // Validación de la contraseña
    const campoContrasena = document.getElementById('contrasena');
    const errorContrasena = document.getElementById('errorContrasena');
    if (campoContrasena.value.length < 8) {
        errorContrasena.textContent = "La contraseña debe tener al menos 8 caracteres.";
        esValido = false;
    } else {
        errorContrasena.textContent = "";
    }

    // Validación del correo electrónico
    const campoCorreo = document.getElementById('correo');
    const errorCorreo = document.getElementById('errorCorreo');
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronCorreo.test(campoCorreo.value)) {
        errorCorreo.textContent = "El correo electrónico no es válido.";
        esValido = false;
    } else {
        errorCorreo.textContent = "";
    }

    
    if (esValido) {
        alert("Formulario enviado correctamente.");
    }
});

// Validación en tiempo real
document.getElementById('nombre').addEventListener('input', function() {
    const errorNombre = document.getElementById('errorNombre');
    if (this.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
    } else {
        errorNombre.textContent = "";
    }
});

document.getElementById('contrasena').addEventListener('input', function() {
    const errorContrasena = document.getElementById('errorContrasena');
    if (this.value.length < 8) {
        errorContrasena.textContent = "La contraseña debe tener al menos 8 caracteres.";
    } else {
        errorContrasena.textContent = "";
    }
});

document.getElementById('correo').addEventListener('input', function() {
    const errorCorreo = document.getElementById('errorCorreo');
    const patronCorreo = /^[^\s@]+@[^\s@]+\.(com|org|net|edu)$/;
    if (!patronCorreo.test(this.value)) {
        errorCorreo.textContent = "El correo electrónico no es válido.";
    } else {
        errorCorreo.textContent = "";
    }
});
