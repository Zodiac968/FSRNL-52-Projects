import { products } from "./db/products.js";
import { isProductInCart } from "./db/isProductInCart.js";
import { createProductCard } from "./db/createProductCard.js";

const productContainer = document.getElementById("productContainer");

let cartItemIds = JSON.parse(localStorage.getItem("cartItemId")) || [];

refreshCards();

function refreshCards(){
    productContainer.innerHTML = "";
    createProductCard(products.filter(({_id})=> isProductInCart(_id, cartItemIds)), productContainer, cartItemIds, "Cart");
}

productContainer.addEventListener("click", (event)=>{
    console.log(event.target);
    let isInCart = isProductInCart(event.target.dataset.id, cartItemIds);
    console.log(isInCart);
    cartItemIds = products.filter(({_id})=> isProductInCart(_id, cartItemIds) && _id !== event.target.dataset.id).map((prod)=> prod._id);
    localStorage.setItem("cartItemId", JSON.stringify(cartItemIds));
    refreshCards();
    console.log(cartItemIds);
});