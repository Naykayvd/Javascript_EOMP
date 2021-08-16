// login function
let login = document.querySelector(".login-section")
console.log(login);

login.addEventListener("submit", e => {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    sign_in(email, password);
})

function sign_in(email, password) {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    console.log(email)
    console.log(password)

fetch("https://immense-mountain-59630.herokuapp.com/auth", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
        username: `${email}`,
        password: `${password}`
    }),
    headers: {
        "Content-Type": "application/json",
    },
})
  .then((response) => response.json())
    .then((data) => {
       if (data["access_token"]) {
            console.log(data);
           myStorage = window.localStorage;
           myStorage.setItem("jwt-token", data["access_token"]);
           myStorage.setItem("email", email);
           myStorage.setItem("password", password);
           window.location.href = "/products.html";
       }
   });
}