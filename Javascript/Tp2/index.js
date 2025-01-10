// Selecteurs
//document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);

const ring = (key) => {
  const audio = new Audio();
  audio.src = "./assets/audio/Enter.mp3";
  audio.play();
};

// Click event
const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);

// pour border-radius le - n'est pas pris en compte donc Kamel Case
questionContainer.computedStyleMap.borderRadius = "150px";
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  console.log("Click !");
  questionContainer.style.borderRadius = "10px";
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  console.log("ok");
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  console.log("okk");
  response.classList.add("show-response");
  response.style.background = "red";
});

//------------------------------------------/

// Mouse events
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

if (mousemove) {
  // premier parametre de la fct on na toute les données de l'évent
  window.addEventListener("mousemove", (e) => {
    //console.log(e.target);
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
  });
} else {
  console.error("Element with class 'mousemove' not found.");
}

// Mouse Down
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

// Mouse Up
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

// Mouse Enter
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

// Mouse Out
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

// Mouse Over
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------/
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
//console.log(keypressContainer);
const key = document.getElementById("key");
//console.log(key);
document.addEventListener("keypress", (e) => {
  console.log(e.key);
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "red";
  } else if (e.key === "h") {
    keypressContainer.style.background = "blue";
  } else {
    keypressContainer.style.background = "black";
  }
  //ring(e.key);
});

//------------------------------------------/
// Scroll event

const nav = document.querySelector("nav");
//console.log(nav);

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//------------------------------------------/
// Form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
//console.log(inputName);
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  console.log(e.target.value);
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form>div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
    console.log("ok");
  } else {
    alert("veuillez accepter les CGV");
  }
});

//------------------------------------------/
// Load events

window.addEventListener("load", () => {
  console.log("doc chargé");
});

//------------------------------------------/
// For each
const boxes = document.querySelectorAll(".box");
//console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.background = "blue";
  });
});

//------------------------------------------/
// AddEventListener Vs OnClick
/*document.body.onclick = function () {
  console.log("Scroll !");
};*/

// Bubbling => fin de base configurer comme ca
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// UseCapture => first
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//------------------------------------------/
// Stop Propagation
questionContainer.addEventListener("click", (e) => {
  console.log("click 5 !");
  e.stopPropagation();
});

//------------------------------------------/
// BOM

//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open("https://www.google.com/", "coik", "width=80");
//window.close();

// Evenements adossés a windows
// alert("ok");

// Confirm
btn2.addEventListener("click", () => {
  confirm("blabalaba");
});

// Prompt
let answer;
btn1.addEventListener("click", () => {
  answer = prompt("blibliblibli");
  console.log(answer);
  questionContainer.innerHTML += "<h3>Blaze : " + answer + "</h3>";
});

// Timer, compte a rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "200px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML += `
    <div class='box'>
      <h2>New Boite</h2>
    </div>
  `;
}, 3000);

/*window.addEventListener("click", () => {
  console.log("stop interval");
  clearInterval(interval);
});*/

// Retirer un element du DOM
/*document.body.addEventListener("click", (e) => {
  e.target.remove();
});*/

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("https://www.google.com");

/*window.onload = () => {
  location.href = "https://www.google.com";
};*/

// Navigator
//console.log(navigator.userAgent);
//faire d autre recherche sur le ficheir du prof

// History
//console.log(history);
//window.history.back();
//history.go(-2);

//------------------------------------------/
// Set Property
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "py");
});
