const themeToggleBtn = document.getElementById("theme-toggle-btn");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggleBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    breakText();
    animateBox();
  } else {
    themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    breakText();
    animateBox();
  }
});

