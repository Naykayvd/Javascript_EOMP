// let container = document.querySelector(".item-box1")

fetch("http://127.0.0.1:5000/products-page/")
.then((request) => {
    // console.log(request.json())
    request.json().then((obj) => {
        // console.log(obj.data)
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
                <p>price-R: ${item[2]}</p>
                <button class="add-btn">add to cart <i class="fas fa-cart-plus"></i></button>
                </div>`;
            // if (item_no == 3){
            //     box++;
            //     item_no = 0;
            //     console.log(box);
            //     console.log(item_no);
            //     createBox(box);
            // } else {
            //     console.log(item_no);
            //     let box_container = document.querySelector(`.item-box${box}`);
            //     box_container.innerHTML += `<div class="item">
            //     <p>item:${item_no}</p>
            //     <img class="item-img" src="images/f8a458e18503c86603dc02339a944feb_XL.jpg" alt="">
            //     <p>price:100</p>
            //     <button class="add-btn">add to cart <i class="fas fa-cart-plus"></i></button>
            //     </div>`;
            //     item_no++;
            // }
        });
    })
})

function createBox(index){
    let item_containers = document.querySelector(".item-containers");
    item_containers.innerHTML += `<div class="item-box${index}"></div>`
}
