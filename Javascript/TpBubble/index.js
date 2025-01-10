// Initiate the bubble
function initBubble() {
  document.body.innerHTML += `
  <div class = "bubble">
  </div>
`;
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((child) => {
    setBubble(child);
    setBubbleLocation(child);
  });
}

// Set bubble properties
function setBubble(_child) {
  _child.style.opacity = "1";
  let nbr = 0;
  nbr = getRandomNbr(80, 250) + "px";
  _child.style.height = nbr;
  _child.style.width = nbr;
}

// Init random position
function setBubbleLocation(_child) {
  let nbrVPosition = getRandomNbr(-30, 30);
  _child.style.bottom = nbrVPosition + "px";
  let nbrHPosition = getRandomNbr(0, 900);
  _child.style.transform = `translate(${nbrHPosition}%`;
  console.log("position");
}

// Function to generare random numbers
function getRandomNbr(_min, _max) {
  return Math.random() * (_max - _min) + _min;
}

// Bubble life time management
let interval = setInterval(() => {
  initBubble();
}, 4000);

// Stop propagation
window.addEventListener("click", () => {
  console.log("stop interval");
  clearInterval(interval);
});
