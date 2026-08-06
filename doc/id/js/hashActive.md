# hashActive.js

Penyorotan tautan navigasi berdasarkan jangkar URL dan pengguliran area pandang

## default(link_li, cls)

Secara otomatis menyorot tautan navigasi yang sesuai dengan area yang terlihat saat ini berdasarkan posisi gulir halaman dan perubahan titik jangkar URL.

parameter:
- `link_li` : Daftar elemen DOM tautan navigasi
- `cls` : Nama kelas CSS aktif, default `"A"`

Nilai kembalian: Membatalkan semua fungsi pembersihan pendengaran