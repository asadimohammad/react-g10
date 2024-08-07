// ajax

// 1 - eventListener
// 2 - create XMLHttpRequest object
// 3 - open Req
// 4 - load req
// 5 - send req

// Asyncronus , syncronus
// همزمانی و ناهمزمانی

// callback

// let products = ["laptop", "mobile", "monitor"];

// function showProd() {
//   products.map((product) => console.log(product));
// }

// function addNewProduct(product , clb) {
//   setTimeout(() => {
//     products.push(product)
//     clb()
//   }, 3000);
// }

// addNewProduct('tablet' , showProd)

// // callbach hell جهنم

// fullfiled موفق آمیز
// rejected شکست
// pending

// let pr = new Promise((resolve , reject) => {
//   let number = 9
//   if(number > 10) {
//     resolve()
//     console.log('Greater')
//   }
//   else{
//     reject()
//     console.log('Lower')
//   }
// })

let btn = document.querySelector('.btn').addEventListener('click' , getData)

async function getData() {
  let user =  {
    fName :  'Sina' ,
    lName :  'Soltanpour' ,
    email :  'sina@gmail.com' ,
    mobile :  '09157142365' ,
    title :  'Front developer' ,
    skills :  'Wordpress-React' ,
    password :  '222222' ,
    image :  '/'
}
  let data = await fetch("https://wins-api-v2.liara.run/api/users/667c230feb8956d234f36e6e" , {
    method:'PUT',  
    body: JSON.stringify(user),
    headers:{
      'content-type' : 'application/json'
    }
  })

  console.log(data)
}

let key = "name"
let obj = { [key] : "ali"}
console.log(obj.name)