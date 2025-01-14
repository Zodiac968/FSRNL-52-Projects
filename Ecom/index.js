import { products } from "./db/products.js";
import { isProductInCart } from "./db/isProductInCart.js";
import { createProductCard } from "./db/createProductCard.js";

const productContainer = document.getElementById("productContainer");

let cartItemIds = JSON.parse(localStorage.getItem("cartItemId")) || [];

refreshCards();

function refreshCards(){
    productContainer.innerHTML = "";
    createProductCard(products, productContainer, cartItemIds, "Home");
}

productContainer.addEventListener("click", (event)=>{
    console.log(event.target);
    let isInCart = isProductInCart(event.target.dataset.id, cartItemIds);
    console.log(isInCart);
    if(!isInCart){
        cartItemIds = [...cartItemIds, event.target.dataset.id];
        localStorage.setItem("cartItemId", JSON.stringify(cartItemIds));
        refreshCards();
    }
    else{
        location.href = "./cart.html"
    }
    console.log(cartItemIds);
});