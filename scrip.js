
// CLOSE MENU WHEN LINK CLICKED//
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

//SCROLL SHADOW EFFECT//
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(255,102,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }
  
});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
})

