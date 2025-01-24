const form = document.querySelector("form");
let text;
const list = document.getElementById("list");
const todoChecker = () => {};

form.addEventListener("input", (e) => {
  text = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoList();
});

const addTodoList = () => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  li.addEventListener("click", (e) => {
    if ((e.target.classList == "checked")) {
      li.remove(e);
    } else {
      e.target.classList.add("checked");
      console.log("add");
    }
  });
};
