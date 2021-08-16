let regform = document.querySelector(".registeration");

regform.addEventListener("submit", e => {
    e.preventDefault()

    user_reg()
})

function user_reg() {
    let user = {
        name: document.querySelector("#name"),
        surname: document.querySelector("#surname"),
        email: document.querySelector("#email2"),
        password: document.querySelector("#password2")
    }

    console.log(user);

    fetch("https://immense-mountain-59630.herokuapp.com/user-registration/", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        alert("user saved")
    });
}