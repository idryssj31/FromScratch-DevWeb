const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
  };
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgb(200,150,0, 0.7)";
ctx.fillRect(40, 40, 50, 50);
