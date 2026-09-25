const faders = document.querySelectorAll(".fade");

function reveal() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Reveal when element enters viewport
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

const btn = document.getElementById("view-projects-btn");
if (btn) {
  btn.addEventListener("click", () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function scrollToProjects() {
  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const canvas = document.getElementById("bg");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
