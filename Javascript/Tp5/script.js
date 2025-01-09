// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.querySelector("nav");
let navScroll = 50;

const img = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");

const popupClick = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > navScroll) {
    nav.style.height = "60px";
    console.log(window.scrollY);
  } else {
    nav.style.height = "90px";
  }

  let scroolValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scroolValue > 0.45) {
    img.style.opacity = "1";
    img.style.transform = "none";
    console.log("u");
  }
  if (scroolValue > 0.9) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
    console.log("t");
  }
});

popupClick.addEventListener("click", () => {
  popup.style.display = "none";
  console.log("click");
});
