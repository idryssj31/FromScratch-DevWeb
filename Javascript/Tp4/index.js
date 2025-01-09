// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const nav = document.querySelector("nav");
console.log(nav);
nav.style.top = "0";
let scrollValue = window.scrollY;
let finalValue = scrollValue;
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollValue) {
    nav.style.top = "-60" + "px";
    finalValue = window.scrollY;
    scrollValue = finalValue;
    console.log("final value : " + finalValue);
  } else if (window.scrollY < scrollValue) {
    nav.style.top = "0";
    scrollValue = window.scrollY;
  }
});
