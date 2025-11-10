/* 🎬 비디오 자동 전환 기능 */
let video = document.getElementById("player");
let playlist = [
  "http://picogram.co.kr/upload/maindata6/maindata695711_0.mp4",
  "http://picogram.co.kr/upload/maindata6/maindata695698_0.mp4",
];
let current = 0;

function playVideo(index) {
  video.classList.add("fade-out");
  setTimeout(() => {
    video.src = playlist[index];
    video.load();
    video.play();
    video.classList.remove("fade-out");
  }, 500);
}

// 첫 영상 시작
playVideo(current);

// 영상 끝나면 다음으로 넘어가기
video.addEventListener("ended", () => {
  current++;
  if (current < playlist.length) {
    playVideo(current);
  } else {
    current = 0; // 마지막 후 다시 처음으로
    playVideo(current);
  }
});
window.addEventListener("load", () => {
  let logo = document.querySelector(".logo p img");
  let menu = document.querySelector(".menu");
  let mall1 = document.querySelector(".mall1");
  let mall2 = document.querySelector(".mall2");
  let lang = document.querySelector(".lang");
  let textWrap = document.querySelector(".text-wrap");
  let scrollDown = document.querySelector(".scroll-down");

  let w = window.innerWidth;

  // 1️⃣ 로고 위치
  logo.style.position = "fixed";
  logo.style.top = 0;
  logo.style.left = "34px";
  logo.style.width = "140px";

  // 2️⃣ 메뉴 중앙 정렬
  menu.style.position = "fixed";
  menu.style.top = "40px";
  menu.style.left = "50%";
  menu.style.transform = "translateX(-50%)";

  // 3️⃣ mall 버튼
  mall1.style.position = "fixed";
  mall1.style.top = "25px";
  mall1.style.right = `${w * 0.17}px`;

  mall2.style.position = "fixed";
  mall2.style.top = "25px";
  mall2.style.right = `${w * 0.06}px`;

  // 4️⃣ 언어 버튼
  lang.style.position = "fixed";
  lang.style.top = "40px";
  lang.style.right = "1%";

  // 5️⃣ 텍스트 중앙 정렬
  textWrap.style.position = "absolute";
  textWrap.style.top = "50%";
  textWrap.style.left = "50%";
  textWrap.style.transform = "translate(-50%, -50%)";
  textWrap.style.textAlign = "center";
  textWrap.style.color = "fff";

  // 6️⃣ 스크롤 아이콘
  scrollDown.style.position = "absolute";
  scrollDown.style.left = "50%";
  scrollDown.style.bottom = "40px";
  scrollDown.style.transform = "translateX(-50%)";
});

document.addEventListener("DOMContentLoaded", () => {
  const family = document.querySelector(".family_site p");
  const familyBox = document.querySelector(".family_site");

  family.addEventListener("click", () => {
    familyBox.classList.toggle("active");
  });
});
