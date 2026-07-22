
  Untuk komponen `js`, implementasikan komponen tersebut menggunakan `Light DOM` di `src/webc/componentname.js`.

  Gunakan jalur relatif untuk mengimpor komponen lain, seperti: `import "./component name.js"` (Dalam file JS setiap komponen, `_.styl` yang sesuai harus diimpor di awal, seperti `import "./component name/_.styl";`).

  `this` Hanya tentukan fungsi panggilan balik asli komponen web, tulis yang lain sebagai fungsi independen, teruskan `this` dan parameter yang diperlukan.

  Selain antarmuka yang terekspos secara eksternal, untuk memfasilitasi pengoptimalan pengguncangan pohon dan kompresi kode, dilarang mengikat atribut pribadi khusus pada `this` (gunakan `this.$` untuk fungsi pembongkaran), dan fungsi tingkat tinggi dapat digunakan untuk mengembalikan penutupan guna menampung variabel perantara.

  Jangan tulis `constructor`, atributnya didapat di `connectedCallback`.


  Lihat [./js.md](./js.md) untuk menggunakan kembali fungsi publik di bawah `src/js/`

  Untuk kontainer, gunakan `slot` sebagai ganti atribut.
  Jika Anda perlu memuat data, paparkan antarmuka pemuatan ke lapisan atas dalam bentuk fungsi panggilan balik asinkron, dan gunakan komentar untuk menunjukkan format nilai yang dikembalikan.
  Komponen harus menghindari kebocoran memori. `disconnectedCallback` gabungkan acara pencopotan pemasangan menjadi satu fungsi `this.$` dan jangan menulis beberapa fungsi pencopotan pemasangan.
  Nilai yang dikembalikan antarmuka bisa berupa nilai tunggal, array, atau array dari array, bukan objek.
  Jika komponen memiliki beberapa status, gunakan komentar multi-baris untuk menjelaskan dengan jelas format data setiap status. (Jangan mengawali setiap baris komentar dengan `*`)
  Peralihan status, menggunakan konstanta numerik (didefinisikan ke `const.js`).
  Saat callback dimuat, gunakan `const xx = newEl('b');xx.className="Ing"` untuk menampilkan animasi, dan perkenalkan dependensi melalui `import "./Ing.js"` di file JS komponen.