document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".intro");
  if (!target) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // 한 번만 실행하려면 언옵저브
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(target);
});
