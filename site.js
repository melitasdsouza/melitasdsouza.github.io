const open = document.getElementById("openCV");
const close = document.getElementById("closeCV");
const modal = document.getElementById("cvModal");

open.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
