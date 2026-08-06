# Spesifikasi kod JS

## gaya pengekodan

- Mudah, elegan dan cekap, menggunakan sintaks js yang paling moden
- Pisahkan fungsi yang terlalu panjang, dan reka bentuk antara muka hendaklah gandingan rendah dan perpaduan tinggi.
- Gunakan tatasusunan + gelung/forEach/peta lagi dan tulis kod yang kurang berulang
- Jangan tulis ulasan fungsi dalam kod mudah untuk mengelakkan komen yang berlebihan. Logik kompleks dan keperluan khas dijelaskan dalam bahasa Cina yang halus.
- Kod berulang diabstraksi ke dalam fungsi untuk mengurangkan lebihan. Contohnya, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` boleh ditulis sebagai `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Pengisytiharan pembolehubah: Gabungkan berbilang perisytiharan `const` berturut-turut ke dalam satu pernyataan. Daripada menulisnya dalam tiga baris, tulis `const a=1, b=2, c=3;`
- Pemprosesan tak segerak: gunakan `await`, larang penggunaan `.then` panggilan berantai
- Jangan jana kod pengendalian pengecualian secara automatik, jangan tulis `try...catch` secara automatik (`try ... catch` dikekalkan secara manual, `try catch` sedia ada tidak seharusnya dipadamkan)
- Fungsi tulen dahulu: hanya tulis fungsi tulen, jangan sekali-kali membuat kelas
- Gunakan fungsi anak panah `const funcName = () => {}` dan jangan gunakan kata kunci `function` (kecuali penjana); jika anda boleh menggunakan .bind untuk mengikat parameter, elakkan mentakrifkan fungsi
- Penggunaan semula kod: Beri perhatian untuk menggunakan semula, mengekstrak lebih banyak fungsi kecil dan elakkan sebilangan besar struktur kod yang serupa atau tampal salin.
- Akses objek: Utamakan menggunakan tugasan memusnahkan untuk mengekstrak atribut yang diperlukan, elakkan berulang kali menggunakan titik secara dalaman untuk mengakses atribut dalam dan bersarang, dan menggabungkan pertimbangan rantai pilihan berulang
- Jangan gunakan objek untuk parameter fungsi, jangan tulis `{a,b,c}`, tulis `a, b, c`; jika terdapat banyak parameter pilihan, gunakan [[bilangan item konfigurasi, item konfigurasi], [bilangan item konfigurasi, item konfigurasi],..] Dalam paradigma ini, item konfigurasi ditakrifkan dengan pemalar angka
- Untuk pulangan berbilang nilai, gunakan tatasusunan `[a,b,c]` dan bukannya `{a,b,c}`. Jika terdapat lebih daripada 3 nilai pulangan, gunakan pemalar berangka untuk menentukan makna kedudukan.
- Tidak perlu rentetan untuk mewakili keadaan, gunakan pemalar berangka untuk menentukan keadaan
- Tiada templat rentetan (``) digunakan, penggabungan rentetan (+) digunakan, kecuali untuk import (mudah untuk analisis statik Vite)
- Untuk gelung, jika anda memerlukan nombor siri, gunakan `++i` bukannya `i++`
- Elakkan`?.` yang tidak perlu dan larang pengaturcaraan defensif
- Nama pembolehubah tidak perlu jamak dan berakhir dengan `_li` untuk menunjukkan senarai.

## Konvensyen penamaan

- Penamaan itu mengejar minimalisme. Gunakan nama pendek tetapi bermakna, contohnya: gunakan `rm` dan bukannya `remove`, `delete`, `del`. Walau bagaimanapun, anda juga harus mengelak daripada melampau, contohnya: jangan gunakan satu huruf `m` dan bukannya `map`
- Cuba gunakan hanya kata kerja dalam penamaan fungsi. Jika anda boleh menggunakan satu perkataan untuk menyatakannya, jangan gunakan dua perkataan. Kata nama dicerminkan dalam nama fail. Jika anda perlu menambah kata kerja pada nama fail, sila letakkan kata nama dahulu dan kata kerja itu di belakang. Contohnya: `profileSet.js` bukannya `setProfile.js`
- Nama pembolehubah: gunakan gaya garis bawah (snake_case), contohnya `user_auth_token`; jika pembolehubah ialah fungsi, gunakan gaya penamaan huruf kecil unta
- Nama fungsi: Gunakan huruf kecil camelCase (camelCase), contohnya `userData`
- Parameter fungsi: Jika ia ialah fungsi panggil balik, namakannya dalam huruf kecil unta, seperti `onChange`
- Takrif pemalar peringkat modul menggunakan gaya garis bawah huruf besar `UPPER_SNAKE_CASE`
- Jangan tulis `get`, awalan yang tidak bermakna, seperti: tulis `cookieByHeader` bukannya `getCookie`
- Pemalar peringkat global/modul: gunakan gaya garis bawah huruf besar (UPPER_SNAKE_CASE), mis. `CODE_TO_ID`, `ID_TO_LANG`

## Mekanisme modular

- Import: Import berfungsi dengan tepat atas permintaan, melarang import langsung keseluruhan modul (elakkan `import * as x` atau import objek besar)
- Eksport: Lumpuhkan eksport objek. Eksport fungsi dan pembolehubah sebagai unit, seperti `export const X=1, abc=()=>{};`. Cuba gabungkan mereka dengan const + koma untuk mengisytiharkan kandungan yang dieksport. Jika fail hanya mempunyai satu fungsi, gunakan `export default`
- Melainkan anda perlu memanggil fungsi lalai eksport secara dalaman, elakkan mengisytiharkan pemalar terlebih dahulu dan kemudian mengeksportnya pada penghujung fail.
- Peleraian laluan: Apabila mendapatkan laluan direktori semasa, `import.meta.dirname` mesti digunakan

## kesilapan

- Elakkan ralat rentetan dan gunakan const untuk mengisytiharkan kod ralat malar.
- Jika anda perlu mengembalikan maklumat data yang salah, gunakan [kod ralat, mesej ralat,...] Dengan cara ini, mesej ralat bukan penerangan teks, tetapi nilai berangka (seperti [FILE_OVERSIZE, saiz_fail, saiz_maksimum])
-

## Cuba gunakan API yang serasi dengan penyemak imbas

- Penyulitan dan penyahsulitan: Paksa penggunaan API Web Crypto asli
- Data binari: Apabila berurusan dengan binari, cuba gunakan `Uint8Array` secara seragam