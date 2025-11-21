document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".intro, .edu, .skill");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // 한 번만 실행
        }
      });
    },
    { threshold: 0.5 }
  );

  targets.forEach((t) => observer.observe(t));
});
