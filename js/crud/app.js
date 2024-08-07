let btn = document.querySelector(".btn");
let tbody = document.querySelector(".tbl_users tbody");
let backdrop = document.querySelector(".backdrop");
let viewCon = document.querySelector(".viewCon");
let btnClose = document.querySelector(".btn_close");

btn.addEventListener("click", showUsers);

async function showUsers() {
  await fetch("https://wins-api-v2.liara.run/api/users")
    .then((res) => res.json())
    .then((res) => showDataTable(res.users));
}

const showDataTable = (data) => {
  console.log(data);
  data.map((user) => {
    let tr = `
            <tr>
                <td>${user.fName}</td>
                <td>${user.lName}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>
                    <button>Delete</button>
                    <button>Edit</button>
                    <button  onclick='viewUser(${JSON.stringify(user)})'>View</button>
                </td>
            </tr>
        `;
    tbody.innerHTML += tr;
  });
};
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("view_btn")) {
    let trCurrent = e.target.parentElement.parentElement;
    backdrop.classList.add("active");
    let viewTbl = viewCon.querySelector("table tbody");
    // viewTbl.innerHTML = ''
    viewTbl.appendChild(trCurrent);
  }
});

btnClose.addEventListener("click", () => {
  backdrop.classList.remove("active");
});

function viewUser(user) {
  console.log(user);
}
