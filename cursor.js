const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.style.zIndex = 9999;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Pencil state
let lastX = null;
let lastY = null;

// Fade the canvas slightly every frame (this creates the trail + disappearance)
function fade() {
  ctx.fillStyle = "rgba(247, 245, 240, 0.08)"; // matches paper bg
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(fade);
}
fade();

document.addEventListener("mousemove", e => {
  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  // Graphite-style stroke
  ctx.strokeStyle = "rgba(20, 20, 20, 0.35)";
  ctx.lineWidth = 1.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  // Slight jitter for hand-drawn feel
  const jitterX = (Math.random() - 0.5) * 0.6;
  const jitterY = (Math.random() - 0.5) * 0.6;

  ctx.lineTo(e.clientX + jitterX, e.clientY + jitterY);
  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});
