let nav_sider_prl = document.querySelector('.nav_sider_prl')
let nav_sider_usl = document.querySelector('.nav_sider_usl')
let main_content = document.querySelector('.main_content')

eventListeners();
function eventListeners() {
  nav_sider_prl.addEventListener('click' , productComponent)
  nav_sider_usl.addEventListener('click' , getList)
}


function productComponent() {
    let prl= `
        <form class='content_form_content'>
            <input type="text" placeholder="Title" class="title">
            <select class="cat">
                <option value="null">Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <input type="text" placeholder="Price" class="price">
            <input type="submit" class='btn_submit' value="Save">
        </form>
    `
    main_content.innerHTML = prl
    main_content.addEventListener('click' , (e) => {
        if(e.target.classList.contains('btn_submit')) {
            let frmProduct = e.target.parentElement
            let newProd = {
                title : frmProduct.querySelector('.title').value,
                price : frmProduct.querySelector('.price').value,
                cat : frmProduct.querySelector('.cat').value
            }
            let prodFromLS = localStorage.getItem('product')

            let prodArray
            if(prodFromLS) {
                prodArray = JSON.parse(prodFromLS)
            }else{
                prodArray = []
            }
            prodArray.push(newProd)
            localStorage.setItem('product' , JSON.stringify(prodArray))
        }
    })

    
}

function getList() {
    let prodAr = JSON.parse(localStorage.getItem('product'))
    let tbl = `
    <div class= 'content_btn_content'>
        <table>
            <thead>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    `
    main_content.innerHTML = tbl
    let tbd = main_content.querySelector('table tbody')
    // option chaining
    prodAr?.map(item => {
        let tr = `
            <tr>
                <td>${item.title}</td>
                <td>${item.cat}</td>
                <td>${item.price}</td>
            </tr>
        `
        tbd.innerHTML += tr
    })
}