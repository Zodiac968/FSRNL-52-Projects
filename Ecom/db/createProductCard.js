import { isProductInCart } from "./isProductInCart.js";

export const createProductCard = (products, productContainer, cardItemIds, pageType) => {
    for(let product of products){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");
        cardContainer.style.width = "15rem";
        cardContainer.style.boxShadow = "4px 4px 2px lightgrey";

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("d-flex", "justify-content-center");
        const imgEl = document.createElement("img");
        imgEl.classList.add("card-img-top");
        imgEl.setAttribute("src", product.img);
        imgEl.setAttribute("alt", product.alt);
        imgEl.style.width= "8rem";
        imgEl.style.height = "14rem";
        imgContainer.appendChild(imgEl);
        cardContainer.appendChild(imgContainer);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = product.brand;
        cardBody.appendChild(title);

        const subtitle = document.createElement("h6");
        subtitle.classList.add("card-subtitle", "mb-2", "text-body-secondary");
        subtitle.innerText = product.name;
        cardBody.appendChild(subtitle);

        const span = document.createElement("span");
        span.classList.add("d-flex", "gap-0", "column-gap-2");

        const price = document.createElement("p");
        price.classList.add("card-text", "fw-semibold", "m-0");
        price.innerHTML = `Rs ${product.newPrice}`;
        span.appendChild(price);

        const oldPrice = document.createElement("p");
        oldPrice.classList.add("card-text", "fw-semibold", "m-0");
        oldPrice.style.textDecorationLine = "line-through";
        oldPrice.innerText = `Rs ${product.oldPrice}`;
        span.appendChild(oldPrice);

        const discount = document.createElement("p");
        discount.classList.add("card-text", "fw-semibold", "m-0");
        discount.style.color = "red";
        discount.innerText = `(${product.discount} %)`;
        span.appendChild(discount);

        cardBody.appendChild(span);

        const ratingContainer = document.createElement("div");
        ratingContainer.classList.add("my-2");
        ratingContainer.innerText = product.rating;

        const star = document.createElement("i");
        star.classList.add("bi", "bi-star-fill");
        star.style.color = "goldenrod";
        ratingContainer.appendChild(star);

        cardBody.appendChild(ratingContainer);

        const button = document.createElement("a");
        button.setAttribute("data-id", product._id);
        button.classList.add("btn", "btn-primary");
        button.style.width = "13rem";
        button.innerText = pageType == "Home" ? isProductInCart(product._id, cardItemIds) ? "Go to cart" : "Add to cart" : "Remove";
        cardBody.appendChild(button);

        cardContainer.appendChild(cardBody);
        productContainer.appendChild(cardContainer);
    }
}