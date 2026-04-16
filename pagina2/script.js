document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".artista").forEach(el => {
    const original = el.innerHTML;

    el.addEventListener("mouseenter", () => {
      el.textContent = "Escuchar en Spotify";
    });

    el.addEventListener("mouseleave", () => {
      el.innerHTML = original;
    });
  });
});