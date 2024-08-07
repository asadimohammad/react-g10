// variables

let form = document.querySelector("form");
let usernameInp = document.querySelector(".username");
let passwordInp = document.querySelector(".password");
let roleSelect = document.querySelector("#role");

// event listeners
eventListeners();
function eventListeners() {
  form.addEventListener("submit", getFrmData);
}

// functions

let objUser;

function getFrmData(e) {
  e.preventDefault();

  if (
    usernameInp.value !== "" &&
    passwordInp.value !== "" &&
    roleSelect.value !== "null"
  ) {
    let user = {
      username: usernameInp.value,
      password: passwordInp.value,
      role: roleSelect.value,
    };

    localStorage.setItem('user' , )

  }
}
