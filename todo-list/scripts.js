const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) return;
  const li = document.createElement("li");
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});
