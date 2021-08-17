// delete products

function dlt_items(index) {
    console.log(index);
        fetch(`https://immense-mountain-59630.herokuapp.com/delete-product/${index}/`, {
            headers: {
                "Authorization": `jwt "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyMDMzMDAsImlhdCI6MTYyOTIwMzAwMCwibmJmIjoxNjI5MjAzMDAwLCJpZGVudGl0eSI6MX0.09JONd6-nEtqcM6N0QicvMIHBKpqgXqzREEMXb0CpEQ"`
            }
        })
        .then((response) => console.log(response))
        .then((data) => {
            console.log("successful:", data);
        })
}

function delBtn() {
    let id = document.querySelector("#dlt-item").value;
    console.log(id);
    let confirmation = confirm("Are you sure you want to delete that?")
    if (confirmation) {
        dlt_items(id);
    }
}

let itemRmve = document.querySelector(".remove-btn")
itemRmve.addEventListener("click", delBtn)

// edit products

function editItem(id) {
    let inputs = {
        id:document.querySelector("#editID"),
        product:document.querySelector("#editName"),
        price:document.querySelector("#editPrice")
    }
    let json_info = [];
    let val_space = true;
    inputs.forEach((input) => {
        if (input.value == "") {
            val_space = false;
        }
        json_info.push(input.value);
    });
    if (val_space) {
        let json_dict = {
          name: json_info[0],
          price: json_info[1],
        };
        console.log(json_dict);
        fetch(`https://immense-mountain-59630.herokuapp.com/edit-product/${id}/`, {
            method: "PUT",
            body:JSON.stringify(json_dict),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("successful:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
} else {
    alert("Enter the details");
}
}


// add products

function addItem() {
    fetch("https://immense-mountain-59630.herokuapp.com/add-products")
    .then((request) => {
        request.json().then(obj)
    })
    let inputs = {
        product:document.querySelector("#addProd"),
        price:document.querySelector("#addPrice")
    }
}