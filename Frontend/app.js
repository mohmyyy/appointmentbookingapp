let form = document.getElementById("formId");
form.addEventListener("submit", addToDatabase);

// This function will add data into local storage
function addToDatabase(e) {
  e.preventDefault();
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("ph").value,
    // date: document.getElementById("date").value,
    // time: document.getElementById("time").value,
    // message: document.getElementById("textArea").value,
  };
  axios
    .post("http://localhost:3000/user/add-user", obj)
    .then((response) => {
      // const dataObject = JSON.parse(response.data)
      console.log(response);
      addToItemList(response.data);
    })
    .catch((error) => console.log(error));
}

// This will make sure to show the local
window.addEventListener("DOMContentLoaded", letItStay);

function letItStay() {
  axios
    .get("http://localhost:3000/user/get-user")
    .then((users) => {
      console.log(users);
      const allUsers = users.data;
      allUsers.forEach((user) => addToItemList(user));
    })
    .catch((error) => console.log(error));
}

function addToItemList(dataObject) {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("ph").value = "";
  const parentNode = document.getElementById("ul");

  const childNode = document.createElement("li");
  childNode.setAttribute("id", dataObject.id);

  const innerHTML = `
  ${dataObject.name} - ${dataObject.email} 
  <button type="click" onclick="deleteUser(${dataObject.id})" >Delete</button>
`;
  //   <input type='hidden' value=${dataObject.id} id='Button + ${dataObject.id}'/>

  childNode.innerHTML = innerHTML;
  parentNode.appendChild(childNode);
}

// document.getElementById('date').value = "";
// document.getElementById('time').value = "";
// document.getElementById('textArea').value = "";

function removeItemFromList(id) {
  let parentNode = document.getElementById("ul");
  let childNodeToBeDeleted = document.getElementById(id);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}

function deleteUser(id) {
  axios
    .post("http://localhost:3000/user/delete-user", { id })
    .then((response) => {})
    .catch((error) => console.log(error));
  console.log(id);
  removeItemFromList(id);
}

// function editUserDetails(name, email, phone, date, time, message) {
//   console.log("helloe");
//   document.getElementById("name").value = name;
//   document.getElementById("email").value = email;
//   document.getElementById("ph").value = phone;
//   // document.getElementById("date").value = date;
//   // document.getElementById("time").value = time;
//   // document.getElementById("textArea").value = message;
//   deleteUser(email);
// }
// <button onclick="editUserDetails('${dataObject.name}', '${dataObject.email}', '${dataObject.phone}', '${dataObject.date}', '${dataObject.time}', '${dataObject.message}')">Edit</button>
