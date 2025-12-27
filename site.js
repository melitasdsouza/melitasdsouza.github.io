// --- SCROLL REVEALS ---
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

// --- CV MODAL ---
const open = document.getElementById("openCV");
const close = document.getElementById("closeCV");
const modal = document.getElementById("cvModal");

open.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
