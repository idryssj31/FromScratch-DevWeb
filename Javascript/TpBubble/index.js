// Bubble property
const bubble = document.querySelector(".bubble");
bubble.style.opacity = "1";
let nbr = 0;

// Random generation of bubble size
function getRandomNbr(_min, _max) {
  return Math.random() * (_max - _min) + _min;
}

nbr = getRandomNbr(80, 250) + "px";
bubble.style.height = nbr;
bubble.style.width = nbr;

// Random mouvement of the bubble
bubble.style.transform = "translate(100%)";

// Bubble life time management
/*let interval = setInterval(() => {
    setBubbleLocation();
}, 1000);*/

window.addEventListener("click", () => {
  console.log("stop interval");
  clearInterval(interval);
});

// Init random position
function setBubbleLocation() {
  let nbrVPosition = getRandomNbr(-30, 30);
  bubble.style.bottom = nbrVPosition + "px";
  let nbrHPosition = getRandomNbr(0, 900);
  bubble.style.transform = `translate(${nbrHPosition}%`;
  console.log("position");
}

//setBubbleLocation();
