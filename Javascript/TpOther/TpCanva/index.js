function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(200,150,0, 0.7)";
  ctx.fillRect(40, 40, 50, 50);

  ctx.fillStyle = "rgba(100,100,200,0.5)";
  ctx.fillRect(100, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  ctx.strokeRect(35, 25, 40, 40);

  ctx.fillStyle = "rgba(200,100,200,0.8)";
  ctx.lineTo(100, 75);
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
}

window.addEventListener("load", draw);
