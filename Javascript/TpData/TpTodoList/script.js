const form = document.querySelector("form");
let text;
const list = document.getElementById("list");

const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getStoreList = () => {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
};

window.addEventListener("load", getStoreList);

form.addEventListener("input", (e) => {
  text = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoList();
  item.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    localStorage.removeItem("value");
  } else {
    e.target.classList.add("checked");
    console.log("add");
  }
  storeList();
});

const addTodoList = () => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
};
