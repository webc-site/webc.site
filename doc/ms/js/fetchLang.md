# fetchLang.js

Muatkan pek bahasa secara tidak segerak dan ikat panggilan balik kemas kini

## fetchLang(getDict)

Cipta pendengar pek bahasa untuk mendapatkan pek bahasa secara tidak segerak dan laksanakan panggilan semula muat semula apabila bahasa berubah

parameter:
- `getDict` : Dapatkan fungsi tak segerak bagi pakej bahasa
  - parameter
    - `code` : kod bahasa
  - Nilai pulangan: kamus pek bahasa

Nilai pulangan: berfungsi untuk mendaftarkan semula panggilan balik
- parameter
  - `refresh` : Muat semula fungsi panggil balik apabila bahasa dikemas kini
    - parameter
      - `i18n` : Objek kamus pek bahasa
      - `code` : Kod bahasa semasa
- Nilai pulangan: berfungsi untuk menyahdaftarkan panggilan semula muat semula