
document.addEventListener("DOMContentLoaded", function () {
  const enlacesAgregar = document.querySelectorAll(".agregar-carrito");
  const modal = document.getElementById("modal-carrito");
  const listaCarrito = document.getElementById("lista-carrito");
  const contador = document.getElementById("contador-carrito");
  const botonCarrito = document.querySelector("#carrito-btn button");

  function actualizarVistaCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = producto;
      listaCarrito.appendChild(li);
    });
    if (contador) contador.textContent = carrito.length;
  }

  function mostrarAnimacionAgregar(nombreProducto) {
    const notificacion = document.createElement("div");
    notificacion.textContent = `${nombreProducto} añadido al carrito`;
    notificacion.style.position = "fixed";
    notificacion.style.top = "20px";
    notificacion.style.right = "20px";
    notificacion.style.background = "#000";
    notificacion.style.color = "#fff";
    notificacion.style.padding = "10px 20px";
    notificacion.style.borderRadius = "8px";
    notificacion.style.zIndex = 2000;
    notificacion.style.opacity = 0;
    notificacion.style.transition = "opacity 0.5s ease";

    document.body.appendChild(notificacion);
    setTimeout(() => {
      notificacion.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      notificacion.style.opacity = 0;
      setTimeout(() => document.body.removeChild(notificacion), 500);
    }, 2000);
  }

  enlacesAgregar.forEach(enlace => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const producto = this.dataset.producto;
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarVistaCarrito();
      mostrarAnimacionAgregar(producto);
    });
  });

  if (botonCarrito) {
    botonCarrito.addEventListener("click", () => {
      modal.style.display = "flex";
      actualizarVistaCarrito();
    });
  }

  window.cerrarCarrito = () => {
    modal.style.display = "none";
  };

  actualizarVistaCarrito();
});
