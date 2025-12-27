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

document.addEventListener("mousemove", (e) => {
  // CLEAR EVERYTHING — no trail possible
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  ctx.strokeStyle = "rgba(40, 40, 40, 0.6)"; // graphite gray
  ctx.lineWidth = 0.8;                      // thin pencil
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lastX = null;
  lastY = null;
});
