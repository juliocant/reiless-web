// scripts.js - Funcionalidad básica inicial

// Ejemplo: mostrar alerta al enviar formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por tu mensaje! Te responderemos pronto.");
      form.reset();
    });
  }
});
