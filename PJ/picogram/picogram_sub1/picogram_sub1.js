document.addEventListener("DOMContentLoaded", () => {
  const family = document.querySelector(".family_site p");
  const familyBox = document.querySelector(".family_site");

  family.addEventListener("click", (e) => {
    e.stopPropagation();
    familyBox.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    familyBox.classList.remove("active");
  });
});
const slides = document.querySelectorAll(".fade-slider img");
let current = 0;

function showNext() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
setInterval(showNext, 3000);
