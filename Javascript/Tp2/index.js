// Selecteurs
//document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);

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
    console.log(e);
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
  });
} else {
  console.error("Element with class 'mousemove' not found.");
}
