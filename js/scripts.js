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
  
  // Menú hamburguesa: toggle para navegación móvil
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('header nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      // cambiar foco al primer enlace cuando se abre
      if (isOpen) {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Cerrar menú si se pulsa fuera en móvil
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && e.target !== navToggle && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
