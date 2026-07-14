// CartService.js
class CartService {
    constructor() {
        this.cart = [];
    }

  tambahItem(item) {
        // Aturan Potongan Flat Rp 5.000
        const hargaFinal = item.harga - 5000;
        this.cart.push({ ...item, harga: hargaFinal });
        console.log("Item berhasil ditambahkan dengan potongan flat Rp 5.000!");
    }
}
module.exports = CartService;