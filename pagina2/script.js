document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".artista").forEach(el => {
    const original = el.innerHTML;

    el.addEventListener("mouseenter", () => {
      el.textContent = "Ver en Spotify";
    });

    el.addEventListener("mouseleave", () => {
      el.innerHTML = original;
    });
  });
});