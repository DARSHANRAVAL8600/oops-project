const menBtn = document.querySelector("#Men");
const womenBtn = document.querySelector("#Women");
const addTOCart = document.querySelectorAll(".add-to-cart");
const allBtn = document.querySelector("#All");

//    button catagory divide in All Man Women  
function catagory() {
    addTOCart.forEach((e) => {
        menBtn.addEventListener("click", () => {
            if (e.name === "Men") {
                console.log(e.name);
                e.parentElement.parentElement.parentElement.style.display = "block"
            } else {
                e.parentElement.parentElement.parentElement.style.display = "none"
            }
        })
        womenBtn.addEventListener("click", () => {
            if (e.name === "Women") {
                console.log(e.name);
                e.parentElement.parentElement.parentElement.style.display = "block"
            } else {
                e.parentElement.parentElement.parentElement.style.display = "none"
            }
        })
        allBtn.addEventListener("click", () => {
            e.parentElement.parentElement.parentElement.style.display = "block"
        })
    })



}
catagory();

// Data Parse form localStorage
function filter(catagory, name, price, dcPrice, discount, img) {
    let basket = JSON.parse(localStorage.getItem("data")) || [];

    let data = {
        catagory: catagory,
        name: name,
        price: price,
        dcPrice: dcPrice,
        discount: discount,
        img: img
    }
    basket.push(data);
    localStorage.setItem("data", JSON.stringify(basket));



}