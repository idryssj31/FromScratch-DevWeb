let varR, varG, varB;

let body = document.querySelector("body");
let rgbText = document.querySelector("rbgGenerator");
body.style.background = "red";
console.log();

function setRandomNbr(_min, _max) {
  return Math.floor(Math.random() * (_max - _min) + _min);
}

function setRandomColor() {
  varR = setRandomNbr(0, 255);
  varG = setRandomNbr(0, 255);
  varB = setRandomNbr(0, 255);
  body.style.background = "rgb(" + varR + "," + varG + "," + varB + ")";
  //document.querySelector("rgbGenerator").innerHTML = `"rgb("${varR}","${varG}","${varB}`;
  document.querySelector(".rgbGenerator").innerHTML = `<p>rgb ( ${varR}, ${varG}, ${varB} )</p>`;
}

setInterval(setRandomColor, 2000);
