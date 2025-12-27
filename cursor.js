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

let lastX = null;
let lastY = null;

document.addEventListener("mousemove", e => {
  // Clear almost immediately (this is the key change)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  // Pencil / graphite style
  ctx.strokeStyle = "rgba(25, 25, 25, 0.45)";
  ctx.lineWidth = 1.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  // Subtle hand jitter
  const jitterX = (Math.random() - 0.5) * 0.4;
  const jitterY = (Math.random() - 0.5) * 0.4;

  ctx.lineTo(e.clientX + jitterX, e.clientY + jitterY);
  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lastX = null;
  lastY = null;
});
