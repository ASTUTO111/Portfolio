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
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight;
  const navTop = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= navTop) {
      document.body.style.paddingTop = navHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", fixNav);
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 700) {
    document.getElementById("Computer").innerHTML = "IT student";
  }
});

function adjustTextForMobile() {
  if (window.innerWidth < 700) {
    document.getElementById("Abaut_text").innerHTML =
      "Hallo, ich bin ein 17-Jähriger, der am 12.11.2006 in Veracruz, Mexiko, geboren wurde. Ich spezialisiere mich auf Cybersicherheit durch YouTube-Videos und Online-Kurse. Das Betriebssystem, das ich benutze, ist KaliLinux; früher habe ich Parrot benutzt. Derzeit lerne ich, wie man...";
  }
}

adjustTextForMobile();
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
