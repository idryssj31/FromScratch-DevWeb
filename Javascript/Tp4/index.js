// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const nav = document.querySelector("nav");
nav.style.top = "0";
let finalValue = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < finalValue) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60" + "px";
  }
  finalValue = window.scrollY;
});

// Other method //

/*let lastScrollPosition = window.scrollY;

document.addEventListener("scroll", () => {
  navbar.style.top = window.scrollY > lastScrollPosition ? "-60px" : "0px";
  lastScrollPosition = window.scrollY;
});*/
