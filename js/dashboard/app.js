let frm_login = document.querySelector("form.frm_login");
let usernameInp = document.querySelector(".username");
let passwordInp = document.querySelector(".password");
let saveUserBtn = document.querySelector(".save_user");

eventListeners();
function eventListeners() {
    saveUserBtn.addEventListener("click", saveNewUser);
    frm_login.addEventListener('submit' , loginHandler)
}

async function loginHandler(e){
    e.preventDefault();
  let userLoggedIn = {
    email: usernameInp.value,
    password: passwordInp.value,
  };

  let data = await fetch('https://wins-api-v2.liara.run/api/login', {
    method: "POST",
    body: JSON.stringify(userLoggedIn),
    headers:{
      'Content-Type' : 'application/json',
    }
  }).then(res => res.json()).then(res => res)

  localStorage.setItem('token' , data.token)
}




async function saveNewUser(e) {
  e.preventDefault();

  let newUser = {
    fName: 'Amir',
    lName: "Soltani",
    email: "soltani@gmail.com",
    mobile: "09504503650",
    title: "Backend developer",
    role: "admin",
    skills: "php-nodejs-mysql",
    image: "/",
  };

  let tkn = localStorage.getItem('token')

  let response = await fetch('https://wins-api-v2.liara.run/api/users' , {
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json' ,
        'Authorization' : `Bearer ${tkn}`
    },
    body: JSON.stringify(newUser)
  })

  console.log(response)

}
