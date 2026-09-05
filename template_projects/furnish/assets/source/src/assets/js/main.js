// Furnish template runtime
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");
  if (toggler && collapse) {
    toggler.addEventListener("click", () => {
      collapse.classList.toggle("show");
    });
  }
});
