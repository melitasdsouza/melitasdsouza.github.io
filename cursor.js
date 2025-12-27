const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let lastX = null;
let lastY = null;

// --- Gentle fade loop (VERY subtle persistence) ---
function fade() {
  ctx.fillStyle = "rgba(247, 245, 240, 0.25)"; // paper color, fast fade
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(fade);
}
fade();

// --- Graphite stroke ---
document.addEventListener("mousemove", (e) => {
  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 1.6; // thicker graphite
  ctx.strokeStyle = "rgba(30, 30, 30, 0.45)"; // soft graphite gray

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  // Draw multiple noisy sub-strokes to simulate graphite grain
  for (let i = 0; i < 3; i++) {
    const nx = (Math.random() - 0.5) * 0.8;
    const ny = (Math.random() - 0.5) * 0.8;

    ctx.lineTo(e.clientX + nx, e.clientY + ny);
  }

  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});
