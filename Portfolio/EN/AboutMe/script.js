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
  if (window.innerWidth > 1024) {
    window.addEventListener("scroll", fixNav);
  }

  function adjustTextForMobile() {
    if (window.innerWidth <= 700) {
      document.getElementById("text_big").innerHTML =
        "I'm a 17-year-old from Veracruz, Mexico, passionate about cybersecurity, learning through YouTube and online courses. I use Kali Linux and am learning Python for cybersecurity purposes. My hobbies include video games and delving into IT security knowledge. Inspired by the Mr. Robot series, I aim to finish my studies with good grades, secure my first job in IT, and become independent. Despite school's demands, I continue to practice in my free time and have earned a certificate in the field.";
      document.getElementById("text_hobby").innerHTML = "<br> Cybersecurity";
    }
  }

  adjustTextForMobile();
});
