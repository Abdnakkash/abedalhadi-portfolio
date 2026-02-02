// Typing Effect
const text = "Building clean and responsive web experiences.";
let i = 0;
const typingContainer = document.querySelector(".typing");

function typeEffect() {
  if (i < text.length) {
    typingContainer.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
setTimeout(typeEffect, 1200);

// Theme Toggle with LocalStorage Persistence
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".hidden")
  .forEach((el) => revealObserver.observe(el));
