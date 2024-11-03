alert("salut js");

let variable = "hello";

console.log(variable);

// var vieux JS
var unTexte = "voici un texte";

// Kamel Case
let maSuperVariable = "Hello";

// Aucune diff entre "" et ''
let maVariable1 = "hello";

let maVariable2 = "hello";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis l'une des chaines de caractères";
console.log(chaine);

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";

// Concaténation avec guillements altg+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c\'était le contenu;`;
console.log(autreConcatenation);

// *** Type de données ***

let string = "je suis une chaine de caractère";
let number = 24;
let boolean = false;
// Tableau => []
let array = ["je", "suis", 47, true];
// Objet => {}
let object = { prenom: "idryss", age: 33, ville: "bordeaux" };
let arbre;

// *** les opérateurs ***

console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
console.log(4 ** 5);

// *** Opérateurs d'affectations ***
let total = 0;
total++;
total += 5;
total -= 4;
total *= 2;
console.log(total);

//*** Structures de controle ***
let x = 3;
let y = "1";

if (x < y) {
  alert("oui x inf à y");
} else if (y > x) {
  alert("x supp");
} else {
  alert("egaux");
}

if (x) {
  console.log("x existe");
}

if (x === y) {
  console.log("ils sont egaux");
} else {
  console.log("pas egaux");
}

// Test d'égalité de valeur sans prendre en compte le type
if (x == y) {
  console.log("ils sont egaux");
} else {
  console.log("pas egaux");
}

// Condition Ou
if (x < y || x > 1) {
  console.log("exact");
} else {
  console.log("non exact");
}

// Condition et
if (x < y && x > 1) {
  console.log("exact1");
} else {
  console.log("non exact1");
}
