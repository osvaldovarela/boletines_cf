// Obtener los elementos de la clase .close

// Recorrerlos

// Agregar un evento click a cada uno de ellos

let links = document.querySelectorAll(".close");

links.forEach(function (link) {
  link.addEventListener("click", function (ev) {
    // Código a ejecutar cuando se haga clic en el botón
    ev.preventDefault();

    let content = document.querySelector(".content");

    // Quitarle las clases de animación que ya tiene

    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    // Agregar clases para animar su salida fadeOutUp

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "/boletines_cf";
    }, 600);

    return false;
  });
});
