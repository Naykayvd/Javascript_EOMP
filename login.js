function sign_in(email, password) {
    console.log(email);
    console.log(password);

fetch("https://arcane-mountain-40701.herokuapp.com/user-registration", {
    method: "POST",
    body: JSON.stringify({
        email: `${email}`,
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