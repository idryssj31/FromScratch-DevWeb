// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.querySelector("nav");
let navScroll = 0;

const img = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");

const popupClick = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > navScroll) {
    nav.style.height = "60px";
    console.log(window.scrollY);
  }
  if (window.scrollY > 250) {
    img.style.opacity = "1";
    img.style.transform = "translate(-5%)";
    console.log("u");
  }
  if (window.scrollY > 900) {
    popup.style.opacity = "1";
    popup.style.transform = "translate(-8%)";
    console.log("t");
  }
});

popupClick.addEventListener("click", () => {
  popup.style.display = "none";
  console.log("click");
});
