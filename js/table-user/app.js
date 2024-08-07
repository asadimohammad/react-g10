let btnAddUser = document.querySelector(".btn_add_User"),
  formContainer = document.querySelector(".form_add_user"),
  tbodyUsers = document.querySelector(".tbody_users");

eventListeners();
function eventListeners() {
  btnAddUser.addEventListener("click", createForm);
}

function createForm(e) {
  let form = `
    <form action="" >
        <input type="text" name="" id="" placeholder = 'username'>
        <input type="password" name="" id="" placeholder = 'password'>
        <input type="submit" name="" id="">
    </form>
    <button class='btn_close_form'>close form</button>
    `;

  formContainer.innerHTML = form;
  let btnClose = formContainer.querySelector(".btn_close_form");
  let formElem = formContainer.querySelector("form");

  btnClose.addEventListener("click", () => {
    formContainer.innerHTML = "";
  });
  formElem.addEventListener("submit", saveUser);
}

function saveUser(e) {
  e.preventDefault();
  let usernameInput = e.target.querySelector("input[type=text]");
  let passwordInput = e.target.querySelector("input[type=password]");

  let row = `
        <tr>
            <td>${usernameInput.value}</td>
            <td>${passwordInput.value}</td>
            <td class="action_btn">
                <button class='del_btn'>Delete</button>
                <button>View</button>
            </td>
        </tr>
    `;

  tbodyUsers.innerHTML += row;
    let delBtnList = tbodyUsers.querySelectorAll('.del_btn')
    delBtnList.forEach(btn => {
        btn.addEventListener('click' , (e)=>{
         e.target.parentElement.parentElement.remove()
        })
    })

  e.target.reset();
}



