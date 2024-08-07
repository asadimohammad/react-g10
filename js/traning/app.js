// Ajax
// Acyncronus Java script XML

// 1- Event Listener
// 2- Create XMLHttpRequest object
// 3- open Req
// 4- Load Req
// 5- Send Req

let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

//1
btn.addEventListener("click", getData);

function getData(e) {
  e.preventDefault();
//2
  let xhr = new XMLHttpRequest();

  //3
  xhr.open("GET", "https://wins-api-v2.liara.run/api/users");

  //4
  xhr.onload = () => {
    if (xhr.status === 200) {
      let res = JSON.parse(xhr.response).users
      res.forEach(item => {
       let li = `<li>${item.fName} ${item.lName}</li>`
        result.innerHTML += li
      });
    }
  };

  xhr.send();
}
