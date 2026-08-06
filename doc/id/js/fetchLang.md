# fetchLang.js

Memuat paket bahasa secara asinkron dan mengikat panggilan balik pembaruan

## fetchLang(getDict)

Buat pendengar paket bahasa untuk mendapatkan paket bahasa secara asinkron dan menjalankan panggilan balik penyegaran saat bahasa berubah

parameter:
- `getDict` : Dapatkan fungsi asinkron dari paket bahasa
  - parameter
    - `code` : kode bahasa
  - Nilai kembalian: kamus paket bahasa

Nilai kembalian: berfungsi untuk mendaftarkan panggilan balik penyegaran
- parameter
  - `refresh` : Menyegarkan fungsi panggilan balik ketika bahasa diperbarui
    - parameter
      - `i18n` : Objek kamus paket bahasa
      - `code` : Kode bahasa saat ini
- Nilai kembalian: berfungsi untuk membatalkan pendaftaran panggilan balik penyegaran