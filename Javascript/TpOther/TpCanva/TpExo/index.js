const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
});
