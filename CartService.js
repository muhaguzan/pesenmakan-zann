// CartService.js
class CartService {
    constructor() {
        this.cart = [];
    }

    tambahItem(item) {
        // Aturan Diskon Member 10%
        const hargaFinal = item.harga * 0.9;
        this.cart.push({ ...item, harga: hargaFinal });
        console.log("Item member berhasil ditambahkan dengan diskon 10%!");
    }
}
module.exports = CartService;