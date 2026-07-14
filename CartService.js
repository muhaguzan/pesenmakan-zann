// CartService.js
class CartService {
    constructor() {
        this.cart = [];
    }

    tambahItem(item) {
        // BARIS KONFLIK: Aturan harga akan ditulis di sini
        this.cart.push(item); 
        console.log("Item berhasil ditambahkan!");
    }
}
module.exports = CartService;