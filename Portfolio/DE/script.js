

document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const colors = ["rgba(66, 133, 244, 0.5)", "rgba(217, 101, 112, 0.5)"];
  const numberOfBalls = 50;

  // Función para crear una pelota y añadirla al fondo
  function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.width = ball.style.height = `${Math.random() * 5 + 5}px`;
    ball.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.random() * window.innerWidth}px`;
    ball.style.top = `${Math.random() * window.innerHeight}px`;
    background.appendChild(ball);
    moveBall(ball);
  }

  // Crear pelotas iniciales
  for (let i = 0; i < numberOfBalls; i++) {
    createBall();
  }

  // Función para mover la pelota y eliminarla si alcanza un límite
  function moveBall(ball) {
    let x = parseInt(ball.style.left, 10);
    let y = parseInt(ball.style.top, 10);
    const dx = (Math.random() - 0.5) * 2.5;
    const dy = (Math.random() - 0.5) * 2.5;

    function animate() {
      if (
        x + dx > window.innerWidth ||
        x + dx < 0 ||
        y + dy > window.innerHeight ||
        y + dy < 0
      ) {
        ball.remove();
        createBall(); // Crea una nueva pelota al eliminar la antigua
      } else {
        x += dx;
        y += dy;
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }
});
// Cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight; // Obtiene la altura del nav
  const navTop = nav.offsetTop; // Guarda la posición original del nav

  function fixNav() {
    if (window.scrollY >= navTop) {
      document.body.style.paddingTop = navHeight + "px"; // Añade padding al body para evitar saltos
      document.body.classList.add("fixed-nav");
    } else {
      document.body.style.paddingTop = 0; // Remueve el padding
      document.body.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", fixNav);
});
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 428 && window.innerHeight <= 926) {
    document.getElementById("Computer").innerHTML = "IT student";
  }
});
