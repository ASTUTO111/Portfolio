document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const colors = ["rgba(66, 133, 244, 0.5)", "rgba(217, 101, 112, 0.5)"];
  const numberOfBalls = 50;

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

  for (let i = 0; i < numberOfBalls; i++) {
    createBall();
  }

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
        createBall();
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

  const nav = document.querySelector(".box_navi");
  const navTop = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }
  if (window.innerWidth > 900) {
    window.addEventListener("scroll", fixNav);
  }

  const burgerMenu = document.querySelector(".burger-menu");
  const navigationContainer = document.querySelector(".navigation-container");

  burgerMenu.addEventListener("click", function (event) {
    navigationContainer.style.display =
      navigationContainer.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      navigationContainer.style.display === "block" &&
      !navigationContainer.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      navigationContainer.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".grid-item img").forEach(function (imagen) {
    imagen.addEventListener("click", function () {
      document.getElementById("imagenAmpliada").src = this.src;
      document.getElementById("overlay").style.display = "flex";
    });
  });

  document.getElementById("overlay").addEventListener("click", function () {
    this.style.display = "none";
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
