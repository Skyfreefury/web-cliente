const lista = document.getElementById("lista");

const li = document.createElement("li");
li.textContent = "Nuevo elemento";
li.classList.add("item");
lista.appendChild(li);

lista.innerHTML = '<li>Uno</li><li>Dos</li>';
lista.innerHTML += '<li>Tres</li>';