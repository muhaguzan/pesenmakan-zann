class CartService {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
        console.log("Item added to cart:", item);
    }
}
module.exports = CartService;