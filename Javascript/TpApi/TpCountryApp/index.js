const result = document.querySelector(".countries-container");
const button = document.querySelectorAll(".btnSort");
let countries = [];
let statut = "";

async function fetchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
  countryDisplay();
  rangeValue.textContent = inputRange.value;
}

function sortAscending() {}
function countryDisplay() {
  if (!countries || countries.length === 0) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
    return;
  }

  // Récupérer la valeur de l'input de recherche en minuscule pour un filtrage insensible à la casse
  const searchQuery = inputSearch.value.toLowerCase();

  // Filtrer les pays selon la recherche
  const filteredCountries = countries.filter((country) =>
    country.translations.fra.common.toLowerCase().includes(searchQuery)
  );

  // Trier selon le statut du tri
  switch (statut) {
    case "minToMax":
      console.log("max");
      filteredCountries.sort((a, b) => a.population - b.population);
      break;
    case "maxToMin":
      console.log("min");
      filteredCountries.sort((a, b) => b.population - a.population);
      break;
    case "alpha":
      console.log("alpha");
      filteredCountries.sort((a, b) =>
        a.translations.fra.common.localeCompare(b.translations.fra.common)
      );
      break;
    default:
      console.log("Aucun tri appliqué");
      break;
  }

  // Limiter le tableau affiché selon la valeur de inputRange (convertie en nombre)
  const limitedCountries = filteredCountries.slice(
    0,
    parseInt(inputRange.value, 10)
  );

  // Générer le HTML pour chaque pays
  result.innerHTML = limitedCountries
    .map(
      (country) => `
      <li class="card">
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <h2>${country.translations.fra.common}</h2>
        <p>${country.capital}</p>
        <p>Population : ${country.population.toLocaleString()}</p>
      </li>
    `
    )
    .join("");
}

window.addEventListener("load", fetchCountry);
inputSearch.addEventListener("input", countryDisplay);
inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
  countryDisplay();
});
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    statut = e.target.id;
    console.log(statut);
    countryDisplay();
  });
});

// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
