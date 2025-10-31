document.addEventListener("DOMContentLoaded", () => {
  const decorations = document.querySelectorAll(".decoration");
  window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;
    decorations[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
    decorations[1].style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  });
});
