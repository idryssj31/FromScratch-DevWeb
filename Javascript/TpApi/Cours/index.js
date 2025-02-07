// XMLHttpRequest

function reqListener() {
  //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
req.open("get", "data.json", true);
req.send();

// ***** //

// FETCH
/*fetch("monlien", "objet d'options")
  .then((response) => {
    response
  })
  .catch((err) => console.log(err));
*/
fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//fetch("data.json", init).then((res) => console.log(res));

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens.",
  }),
  mode: "cors",
  credentials: "same-origin",
};

const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },

  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/", init2).then(() =>
    console.log("data envoyée")
  );
});


//--- Asynchrone ---//

// Promise

//fetch("monlien").then((res) => res);