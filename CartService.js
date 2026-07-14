// CartService.js
class CartService {
    constructor() {
        this.cart = [];
    }

tambahItem(item) {
        // Gabungan: Diskon member 10% kemudian potongan flat Rp 5.000
        let hargaFinal = item.harga * 0.9;
        hargaFinal = hargaFinal - 5000;
        this.cart.push({ ...item, harga: hargaFinal });
        console.log("Item berhasil ditambahkan dengan diskon member & potongan flat!");
    }
}
module.exports = CartService;