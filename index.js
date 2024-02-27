const form = document.getElementById("form");
const input = document.getElementById("textInput");
const btnSave = document.getElementById("btnSave");
const btnDelete = document.getElementById("btnDelete");

const pastName = document.getElementById("past-name");
const counterNum = document.getElementById("counterNum");

form.onsubmit = function (e) {
  e.preventDefault();
  const username = input.value;

  console.log(username);

  localStorage.setItem("username", JSON.stringify(username));

  console.log(typeof username);

  pastName.textContent = localStorage.getItem("username");
};

btnDelete.onclick = function (e) {
  input.value = "";
  localStorage.removeItem("username");
  pastName.textContent = localStorage.getItem("username");
};

// ESERCIZIO 2

function counterFn() {
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }

  counter++;
  sessionStorage.setItem("counter", counter);
  counterNum.textContent = counter;
}

window.onload = function () {
  counterFn();
  setInterval(counterFn, 1000);
};
