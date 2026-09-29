// Función para mostrar un mensaje al hacer clic en el botón
function mostrarMensaje() {
    alert('¡Hola! Bienvenido a mi página web. 👋');
}

// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaré pronto. 📧');
    // Aquí puedes agregar lógica para enviar el formulario a un servidor
    event.target.reset();
}

// Suavizar el desplazamiento a secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de animación al cargar la página
window.addEventListener('load', () => {
    console.log('¡Página cargada correctamente! 🎉');
});