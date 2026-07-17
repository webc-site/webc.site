
  Untuk komponen `js`, gunakan `Light DOM` untuk melaksanakan komponen dalam `src/component name/_.js`.

  Gunakan laluan relatif untuk mengimport komponen lain, seperti: `import "../component name/_.js"` (`js` tidak mengimport `styl`, rangka kerja akan menyuntiknya secara automatik).

  `this` Hanya tentukan fungsi panggil balik asli bagi komponen web, tulis yang lain sebagai fungsi bebas, masukkan `this` dan parameter yang diperlukan.

  Sebagai tambahan kepada antara muka luaran yang terdedah, untuk memudahkan pengoptimuman gegaran pokok dan pemampatan kod, adalah dilarang untuk mengikat atribut peribadi tersuai pada `this` (gunakan `this.$` untuk fungsi memunggah), dan fungsi tertib tinggi boleh digunakan untuk mengembalikan penutupan untuk menahan pembolehubah perantaraan.

  Jangan tulis `constructor`, atribut diperoleh dalam `connectedCallback`.


  Rujuk [./js.md](./js.md) untuk menggunakan semula fungsi awam di bawah `src/js/`

  Untuk bekas, gunakan `slot` bukannya atribut.
  Jika anda perlu memuatkan data, dedahkan antara muka pemuatan ke lapisan atas dalam bentuk fungsi panggil balik tak segerak dan gunakan ulasan untuk menunjukkan format nilai pulangan.
  Komponen mesti mengelakkan kebocoran memori. `disconnectedCallback` gabungkan acara nyahpasang ke dalam satu fungsi `this.$` dan jangan tulis berbilang fungsi nyahpasang.
  Nilai pulangan antara muka boleh menjadi nilai tunggal, tatasusunan atau tatasusunan tatasusunan, bukan objek.
  Jika komponen mempunyai berbilang keadaan, gunakan ulasan berbilang baris untuk menerangkan dengan jelas format data setiap negeri. (Jangan mendahului setiap baris ulasan dengan `*`)
  Keadaan bertukar, menggunakan pemalar berangka (ditakrifkan kepada `const.js`).
  Semasa panggilan balik sedang dimuatkan, tunjukkan animasi dengan `const xx = newEl('b');xx.className="Ing"` dan `@import "../Ing/_.styl"` dalam `_.styl`