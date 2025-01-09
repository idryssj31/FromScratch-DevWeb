// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mouseMove = document.querySelectorAll(".mousemove");
console.log(mouseMove);

mouseMove.forEach((child) => {
  window.addEventListener("mousemove", (e) => {
    child.style.left = e.pageX + "px";
    child.style.top = e.pageY + "px";
  });
});

const mouseCursor = document.getElementById("cursor");
const mouseMove1 = document.getElementById("mouse1");
const mouseMove2 = document.getElementById("mouse2");

const text = document.querySelectorAll("h1, h2, p, h3, li, img");
console.log(text);
