const home = document.querySelector(".home");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "green";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = "black";
});

const btnAdd = document.querySelector("#editar"); // Pega o botão

// Cria um evento de click para o botão, que irá executar a function anonima:
btnAdd.addEventListener("click", function () {
  const li = document.createElement("li"); // Cria elemento li novo
  const inputValue = document.querySelector("#myInput").value; // Pega texto digitado no input
  const taskText = document.createTextNode(inputValue); // Add o texto do input na const taskText
  li.appendChild(taskText); // Adiciona o texto na li

  document.getElementById("myUL").appendChild(li); // Add a li na ul
});
