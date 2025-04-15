
document.addEventListener("DOMContentLoaded", function () {
  // Animación de entrada para los productos
  const productos = document.querySelectorAll(".producto");
  productos.forEach((producto, index) => {
    producto.style.opacity = 0;
    producto.style.transform = "translateY(30px)";
    setTimeout(() => {
      producto.style.transition = "all 0.6s ease";
      producto.style.opacity = 1;
      producto.style.transform = "translateY(0)";
    }, 100 * index);
  });

  // Cambiar estilo de botón al pasar el mouse
  const botones = document.querySelectorAll(".boton, .agregar-carrito");
  botones.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.backgroundColor = "#222";
      btn.style.color = "#fff";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
  });

  // Añadir al carrito
  const enlaces = document.querySelectorAll(".agregar-carrito");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const producto = e.target.dataset.producto;
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito: " + producto);
    });
  });
});
