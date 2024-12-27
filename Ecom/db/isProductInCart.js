export const isProductInCart = (prodId, cartItemIds) => {
    if(cartItemIds.length > 0){
        return cartItemIds.reduce((result, id) => (id === prodId || result), false);
    }
    else{
        return false;
    }
}