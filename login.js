// login function

function sign_in(email, password) {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    console.log(email)
    console.log(password)

fetch("http://127.0.0.1:5000/auth", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
        email: `${email}`,
        password: `${password}`
    }),
    headers: {
        "Content-Type": "application/json",
    },
})
  .then((response) => response.json(
      console.log(response)
  ))
//   .then((data) => {
//       if (data["access_token"]) {
//           console.log(data);
//           myStorage = window.localStorage;
//           myStorage.setItem("jwt-token", data["access_token"]);
//           myStorage.setItem("email", email);
//           myStorage.setItem("password", password);
//           window.location.href = "/products.html";
//       }
//   });
}

// register function

// function register(name, surname, email, password) {
//     console.log(name);
//     console.log(surname);
//     method
// }