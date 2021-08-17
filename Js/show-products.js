fetch("https://immense-mountain-59630.herokuapp.com/products-page/")
.then((request) => {
    request.json().then((obj) => {
        items = obj.data
        box = 1;
        item_no = 0;
        // createBox(box)
        items.forEach(item => {
            console.log(item);
            let item_containers = document.querySelector(".item-containers");
            item_containers.innerHTML += `<div class="item">
                <p>item: ${item[0]}</p>
                <p>name: ${item[1]}</p>
                <p>price: R${item[2]}</p>
                <button class="add-btn">add to cart <i class="fas fa-cart-plus"></i></button>
                </div>`;
        });
    })
})

function createBox(index){
    let item_containers = document.querySelector(".item-containers");
    item_containers.innerHTML += `<div class="item-box${index}"></div>`
}
