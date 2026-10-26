# Rancangan Website Usaha Hoodie

Paket ini berisi rancangan website responsif untuk usaha hoodie:
- Banner cover dengan ilustrasi mockup hoodie.
- 3 menu utama: Katalog, Pesanan, dan Testimoni.
- Katalog produk dengan nama, harga, dan tombol pilih produk.
- Form detail pesanan (nama, produk, ukuran, jumlah, catatan) dengan estimasi total.
- Tombol Pesan Sekarang yang membuka WhatsApp dengan isi pesan otomatis.
- Testimoni contoh yang perlu diganti dengan ulasan pelanggan asli.

## 1. Sesuaikan sebelum dipakai
1. Buka `script.js` dengan editor teks.
2. Cari `const WHATSAPP_NUMBER = "6289607263535";`
3. Nomor WhatsApp NIX saat ini diatur ke `6289607263535`. Pastikan nomor ini aktif di WhatsApp Business atau WhatsApp biasa.
4. Ganti nama `NIX` di `index.html` dengan nama usaha.
5. Ubah daftar produk, harga, dan deskripsi pada array `products` di `script.js`.
6. Ganti testimoni contoh dengan ulasan asli pelanggan. Jangan mengaku bahwa ulasan contoh adalah ulasan nyata.

## 2. Menjalankan website di komputer
Ekstrak ZIP, lalu buka `index.html` di browser. Untuk menguji tautan WhatsApp, isi nomor bisnis di `script.js` terlebih dahulu.

## 3. Publikasikan melalui GitHub Pages
1. Masuk ke GitHub dan buat repository baru, misalnya `hoodie-store`.
2. Upload seluruh isi folder ini (file `index.html`, `style.css`, `script.js`, dan folder `assets`) ke root repository.
3. Buka **Settings → Pages**.
4. Di bagian Build and deployment, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
5. Tunggu proses selesai. GitHub akan memberikan URL website, biasanya `https://USERNAME.github.io/hoodie-store/`.

## 4. Tampilkan melalui Google Sites
Google Sites tidak mengimpor satu folder HTML/ZIP menjadi website utuh secara langsung. Cara yang paling praktis:
1. Publikasikan website ini di GitHub Pages terlebih dahulu.
2. Buka Google Sites dan edit situs.
3. Pilih **Sisipkan (Insert) → Sematkan (Embed) → URL**.
4. Tempel URL GitHub Pages, lalu klik Insert.
5. Atur ukuran area embed. Bila ingin navigasi dan tampilan website penuh, gunakan URL GitHub Pages sebagai situs utama; Google Sites dapat menjadi halaman pengantar yang menyematkan website tersebut.

Catatan: tampilan embed bisa dibatasi oleh ukuran frame Google Sites. Untuk pengalaman penuh, pengunjung bisa membuka URL GitHub Pages langsung.

## Struktur folder
- `index.html` — struktur halaman.
- `style.css` — tampilan dan responsif untuk ponsel.
- `script.js` — data katalog, total harga, dan integrasi WhatsApp.
- `assets/` — ilustrasi hoodie SVG.
