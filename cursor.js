const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.style.zIndex = 10;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

document.addEventListener("mousemove", e => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 12, 0, Math.PI * 2);
  ctx.fill();
});
