document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío del formulario

    const correo = document.getElementById('correo').value;
    const curp = document.getElementById('curp').value;

    // Correo y CURP definidos
    const validCorreo = "adan.ramirez.l110b@gmail.com";
    const validCurp = "RAVA041126HVZMRDA8";

    // Validar el correo y el CURP (puedes añadir más validaciones aquí si es necesario)
    if (correo === validCorreo && curp === validCurp) {
        alert('Inicio de sesión exitoso');
        window.location.href = '/Interfaz de administrador/MenuAdmi/paadmi.html';  // Reemplaza 'paginaDestino.html' con la URL real a la que deseas redirigir
    } else {
        alert('Correo o CURP incorrectos. Por favor, intente de nuevo.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateCurp(curp) {
    const re = /^[A-Z]{4}\d{6}[A-Z]{6}\d{2}$/i;
    return re.test(String(curp).toUpperCase());
}
