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
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".box_navi"); // Selecciona el contenedor de navegación correcto
  const navTop = nav.offsetTop; // Guarda la posición original del nav

  function fixNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add("fixed-nav"); // Añade la clase al contenedor de navegación
    } else {
      nav.classList.remove("fixed-nav"); // Remueve la clase
    }
  }

  window.addEventListener("scroll", fixNav);
});
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 428 && window.innerHeight <= 926) {
    document.getElementById("text_big").innerHTML = "I'm a 17-year-old from Veracruz, Mexico, passionate about cybersecurity, learning through YouTube and online courses. I use Kali Linux and am learning Python for cybersecurity purposes. My hobbies include video games and delving into IT security knowledge. Inspired by the Mr. Robot series, I aim to finish my studies with good grades, secure my first job in IT, and become independent. Despite school's demands, I continue to practice in my free time and have earned a certificate in the field.";
  }
});
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 428 && window.innerHeight <= 926) {
    document.getElementById("text_hobby").innerHTML = " <br> Cybersecurity";
  }
});
