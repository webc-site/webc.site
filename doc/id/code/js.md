# Spesifikasi kode JS

## gaya pengkodean

- Sederhana, elegan dan efisien, menggunakan sintaks js paling modern
- Membagi fungsi yang terlalu panjang, dan desain antarmuka harus memiliki kopling rendah dan kohesi tinggi.
- Gunakan array + loops/forEach/map lebih banyak dan tulis lebih sedikit kode berulang
- Jangan menulis komentar fungsi dalam kode sederhana untuk menghindari komentar berlebihan. Logika kompleks dan kebutuhan khusus dijelaskan dalam bahasa Mandarin yang halus.
- Kode yang berulang diabstraksi menjadi fungsi untuk mengurangi redundansi. Misalnya, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` dapat ditulis sebagai `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Deklarasi variabel: Gabungkan beberapa deklarasi `const` yang berurutan menjadi satu pernyataan. Daripada menulisnya dalam tiga baris, tulislah `const a=1, b=2, c=3;`
- Pemrosesan asinkron: gunakan `await`, larang penggunaan `.then` panggilan berantai
- Jangan membuat kode penanganan pengecualian secara otomatis, jangan menulis `try...catch` secara otomatis (`try ... catch` dikelola secara manual, `try catch` yang ada tidak boleh dihapus)
- Fungsi murni terlebih dahulu: hanya tulis fungsi murni, jangan pernah kelas
- Gunakan fungsi panah `const funcName = () => {}` dan jangan gunakan kata kunci `function` (kecuali generator); jika Anda dapat menggunakan .bind untuk mengikat parameter, hindari mendefinisikan fungsi
- Penggunaan kembali kode: Perhatikan penggunaan kembali, ekstrak lebih banyak fungsi kecil, dan hindari sejumlah besar struktur kode serupa atau salin-tempel.
- Akses objek: Prioritaskan penggunaan penugasan destrukturisasi untuk mengekstrak atribut yang diperlukan, hindari penggunaan titik berulang kali secara internal untuk mengakses atribut yang dalam dan bertumpuk, dan gabungkan penilaian rantai opsional yang berulang
- Jangan gunakan objek untuk parameter fungsi, jangan tulis `{a,b,c}`, tulis `a, b, c`; jika ada banyak parameter opsional, gunakan [[jumlah item konfigurasi, item konfigurasi], [jumlah item konfigurasi, item konfigurasi],..] Dalam paradigma ini, item konfigurasi didefinisikan dengan konstanta numerik
- Untuk pengembalian multinilai, gunakan array `[a,b,c]` alih-alih `{a,b,c}`. Jika terdapat lebih dari 3 nilai kembalian, gunakan konstanta numerik untuk menentukan arti posisinya.
- String tidak diperlukan untuk mewakili keadaan, gunakan konstanta numerik untuk menentukan keadaan
- Tidak ada templat string (``) yang digunakan, penggabungan string (+) digunakan, kecuali untuk impor (nyaman untuk analisis statis Vite)
- Untuk perulangan, jika Anda memerlukan nomor seri, gunakan `++i` alih-alih `i++`
- Hindari`?.` yang tidak perlu dan larang pemrograman defensif
- Nama variabel tidak perlu berbentuk jamak, dan diakhiri dengan `_li` untuk menunjukkan daftar.

## Konvensi penamaan

- Penamaannya mengejar minimalis. Gunakan nama yang pendek namun bermakna, misalnya: gunakan `rm` sebagai pengganti `remove`, `delete`, `del`. Namun, Anda juga harus menghindari tindakan ekstrem, misalnya: jangan gunakan satu huruf `m` daripada `map`
- Cobalah untuk hanya menggunakan kata kerja dalam penamaan fungsi. Jika Anda bisa menggunakan satu kata untuk mengungkapkannya, jangan gunakan dua kata. Kata benda tercermin dalam nama file. Jika Anda perlu menambahkan kata kerja pada nama file, masukkan kata benda terlebih dahulu dan kata kerja terakhir. Misalnya: `profileSet.js` bukannya `setProfile.js`
- Nama variabel: gunakan gaya garis bawah (snake_case), misalnya `user_auth_token`; jika variabelnya adalah fungsi, gunakan gaya penamaan huruf kecil unta
- Nama fungsi: Gunakan huruf kecil camelCase (camelCase), misalnya `userData`
- Parameter fungsi: Jika ini adalah fungsi panggilan balik, beri nama dalam huruf kecil, seperti `onChange`
- Definisi konstanta tingkat modul menggunakan gaya garis bawah huruf besar `UPPER_SNAKE_CASE`
- Jangan menulis `get`, awalan yang tidak berarti, seperti: tulis `cookieByHeader` alih-alih `getCookie`
- Konstanta tingkat global/modul: gunakan gaya garis bawah huruf besar (UPPER_SNAKE_CASE), mis. `CODE_TO_ID`, `ID_TO_LANG`

## Mekanisme modular

- Impor: Impor fungsi secara akurat sesuai permintaan, larang impor langsung seluruh modul (hindari `import * as x` atau impor objek besar)
- Ekspor: Menonaktifkan ekspor objek. Ekspor fungsi dan variabel sebagai unit, seperti `export const X=1, abc=()=>{};`. Coba gabungkan keduanya dengan const + koma untuk mendeklarasikan konten yang diekspor. Jika suatu file hanya memiliki satu fungsi, gunakan `export default`
- Kecuali Anda perlu memanggil fungsi default ekspor secara internal, hindari mendeklarasikan konstanta terlebih dahulu lalu mengekspornya di akhir file.
- Resolusi jalur: Saat mendapatkan jalur direktori saat ini, `import.meta.dirname` harus digunakan

## kesalahan

- Hindari kesalahan string dan gunakan const untuk mendeklarasikan kode kesalahan konstan.
- Jika Anda perlu mengembalikan informasi data yang salah, gunakan [kode kesalahan, pesan kesalahan,...] Dengan cara ini, pesan kesalahan bukanlah deskripsi teks, tetapi nilai numerik (seperti [FILE_OVERSIZE, file_size, max_size])
-

## Coba gunakan API yang kompatibel dengan browser

- Enkripsi dan dekripsi: Memaksa penggunaan Web Crypto API asli
- Data biner: Saat menangani biner, coba gunakan `Uint8Array` secara seragam