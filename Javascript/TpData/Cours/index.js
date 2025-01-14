// type de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Lebron", "Kawhi", "Nantes"];
console.log(array[0] + array[1]);
console.log(array[0][1]); // afficher le contenu precisement

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Idryss" }];
console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Js", "C++", "Python"],
  admin: false,
};
console.log(objet.technos[1][2]);
objet.adresse = "428 avenue";
console.log(objet.adresse[1]);

let data = [
  {
    pseudo: "romain",
    age: 12,
  },
  {
    pseudo: "romai",
    age: 120,
  },
  {
    pseudo: "roma",
    age: 1,
  },
];

data[0].pseudo = "uu";
console.log(data);

// if and else and while and do and switch
