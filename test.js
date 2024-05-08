// Menampilkan pesan selamat datang
alert("Selamat datang di situs kami!");

// Meminta nama pengguna
var namaPengguna = prompt("Silakan masukkan nama Anda:");

// Memastikan pengguna telah memasukkan nama
if (namaPengguna) {
  var konfirmasi = confirm(
    "Apakah Anda yakin nama Anda adalah " + namaPengguna + "?"
  );

  // Jika pengguna mengkonfirmasi, tampilkan pesan selamat datang
  if (konfirmasi) {
    alert("Selamat datang, " + namaPengguna + "!");
  } else {
    alert("Silakan coba lagi.");
  }
} else {
  alert("Silakan masukkan nama Anda.");
}