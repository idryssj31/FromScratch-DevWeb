const inputNumber = document.getElementById("choice");
const buttom = document.getElementById("start");
const element = document.getElementById("countdownDisplay");
let value;
let inputValue;
let secondValue = 59;
let interval;
function suppValue() {
  if (secondValue == 0) {
    if (value == 0) {
      clearInterval(interval);
    }
    --value;
    secondValue = 60;
  } else {
    --secondValue;
    element.innerHTML = `<p>${value} : ${secondValue}</p>`;
  }
}

inputNumber.addEventListener("input", (e) => {
  e.preventDefault();
  inputValue = e.target.value;
});

buttom.addEventListener("click", (e) => {
  e.preventDefault();
  value = inputValue;
  choice.value = "";
  secondValue = 0;
  element.innerHTML = `<p>${value} : ${secondValue}</p>`;
  clearInterval(interval);
  interval = setInterval(suppValue, 1000);
});
