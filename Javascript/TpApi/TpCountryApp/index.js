const input = document.getElementById("inputSearch");
const result = document.querySelector(".countries-container");
let countries = [];

async function fetchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
  countryDisplay();
}

function countryDisplay() {
  if (countries === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    //countries.length = 12;
    result.innerHTML = countries
      .filter((country) =>
        country.translations.fra.common.includes(inputSearch.value)
      )
      .map(
        (country) => `
    <li class="card">
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <h2>${country.translations.fra.common}</h2>
        <p>${country.capital}</p>
        <p>Population : ${country.population.toLocaleString()}</p>
  `
      )
      .join("");
  }
}

inputSearch.addEventListener("input", countryDisplay);

fetchCountry();

// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
