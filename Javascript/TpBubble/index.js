// Value
nbrCounter = 0;

// Initiate the bubble
function initBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  setBubble(bubble);
  setBubbleLocation(bubble);
  clickEventBubble(bubble);
}

// Set bubble properties
function setBubble(_child) {
  _child.style.opacity = "1";
  let nbr = 0;
  nbr = getRandomNbr(80, 250) + "px";
  _child.style.height = nbr;
  _child.style.width = nbr;
}

// Init random position & random movement
function setBubbleLocation(_child) {
  let nbrVPosition = getRandomNbr(700, 800);
  _child.style.top = nbrVPosition + "px";
  let nbrHPosition = getRandomNbr(0, 900);
  _child.style.left = nbrHPosition + "px";
  let mouvement = getRandomNbr(-200, 200);
  _child.style.setProperty("--left", `${mouvement}%`);
  //console.log(mouvement);
}

// Function to generare random numbers
function getRandomNbr(_min, _max) {
  return Math.random() * (_max - _min) + _min;
}

// Bubble life time management
setInterval(initBubble, 500);

// Event click on bubble
function clickEventBubble(_child) {
  _child.addEventListener("click", (e) => {
    // _child.style.display = "none";
    _child.remove();
    nbrCounter++;
    console.log("nbr :" + nbrCounter);
    document.body.innerHTML = `
    <div class = "number"><h3>${nbrCounter}</h3>
    </div>
  `;
  });
}
