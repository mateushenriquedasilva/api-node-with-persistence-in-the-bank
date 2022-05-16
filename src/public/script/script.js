const url = "http://localhost:3200/users";
const tbody = document.getElementById("users");

const getUsers = async () => {
  let response = await fetch(url);
  let users = await response.json();

  users.forEach((item) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let firstname = document.createElement("td");
    let lastname = document.createElement("td");

    id.innerText = `${item.id}`;
    firstname.innerText = `${item.firstname}`;
    lastname.innerText = `${item.lastname}`;

    tr.appendChild(id);
    tr.appendChild(firstname);
    tr.appendChild(lastname);
    
    tbody.appendChild(tr);
  });
};

getUsers();
