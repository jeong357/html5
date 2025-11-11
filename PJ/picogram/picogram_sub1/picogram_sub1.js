document.addEventListener("DOMContentLoaded", () => {
  const family = document.querySelector(".family_site p");
  const familyBox = document.querySelector(".family_site");

  family.addEventListener("click", (e) => {
    e.stopPropagation();
    familyBox.classList.toggle("active");
  });

  // 바깥 클릭 시 닫기
  document.addEventListener("click", () => {
    familyBox.classList.remove("active");
  });
});
const slides = document.querySelectorAll(".fade-slider img");
let current = 0;

function showNext() {
  // 현재 이미지 제거
  slides[current].classList.remove("active");

  // 다음 인덱스로 이동
  current = (current + 1) % slides.length;

  // 다음 이미지 표시
  slides[current].classList.add("active");
}

// 3초마다 다음 이미지로 변경
setInterval(showNext, 3000);
