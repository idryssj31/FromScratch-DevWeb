const obj = {
  pseudo: "from scratch",
  ville: "bordeaux",
  admin: false,

  direBonjour() {
    console.log("bonjour je suis " + this.pseudo);
  },

  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo);
  },
};

console.log(typeof obj);

delete obj;

console.log(obj);

// Fusionner object
const obj2 = {
  taille: "1m80",
  poids: "75kg",
};
const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// Empecher les modifications
const newObj = Object.freeze(obj2);
newObj.pseudo = "test";
console.log(newObj);

// On peux changer mais pas ajouter ni suppr
const newObj1 = Object.seal(obj);
newObj1.pseudo = "avenue";
console.log(newObj1);

// construire des objets

// fct constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite a " + this.ville);
  };
}

const user1 = new User("idryss", "Bordeaux");
console.log(user1);
user1.getCity();

//factory funvtion
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

