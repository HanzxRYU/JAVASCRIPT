var nama_toko = "Toko BUKU ANDI";

var buku_1 = "Buku Tailwind";

var harga_1 = 12000;

var buku_2 = "Buku Javascript";

var harga_2 = 14000;

var buku_3 = "Buku HTML 5";

var harga_3 = 10000;

var jumlahbeli = 5;

var total_buku_1 = harga_1 * jumlahbeli;

var total_buku_2 = harga_2 * jumlahbeli;

var total_buku_3 = harga_3 * jumlahbeli;

var total_harga = total_buku_1 + total_buku_2 + total_buku_3;

var diskon = 0.5;

var total_diskon_1 = diskon * harga_1 * jumlahbeli;

var total_diskon_2 = diskon * harga_2 * jumlahbeli;

var total_diskon_3 = diskon * harga_3 * jumlahbeli;

var total_harga_diskon = total_diskon_1 + total_diskon_2 + total_diskon_3;

console.log(nama_toko);

console.log(buku_1);

console.log(harga_1);

console.log(buku_2);

console.log(harga_2);

console.log(buku_3);

console.log(harga_3);

console.log("Jumlah pembelian buku " + jumlahbeli);

console.log("total harga " + total_harga);

console.log("Total Harga Setelah di diskon " + total_harga_diskon);

console.log(
  buku_1 +
    " dengan total harga " +
    total_diskon_1 +
    "," +
    buku_2 +
    " dengan total harga " +
    total_diskon_2 +
    "," +
    buku_3 +
    " dengan total harga " +
    total_diskon_3 +
    "." +
    " jadi total harga menjadi " +
    total_harga_diskon +
    "."
);