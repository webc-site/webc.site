# route.js

Manajemen perutean front-end satu halaman

## nowUrl()

Dapatkan jalur URL saat ini dengan garis miring di depannya dihapus

Nilai kembalian: string jalur saat ini

## route(hook)

Daftarkan panggilan balik mendengarkan untuk perubahan rute. Saat mendaftar, itu akan dieksekusi satu kali dengan jalur saat ini.

parameter:
- `hook` : Fungsi panggilan balik pemantauan rute
  - parameter
    - `url` : jalur saat ini
    - `pre` : jalur terakhir

Nilai kembalian: Fungsi pembersihan tidak terdaftar

## setPre(url)

Simpan URL yang terakhir direkam

parameter:
- `url` : rangkaian jalur

## preUrl()

Dapatkan URL dari catatan terakhir

Nilai kembalian: string jalur terakhir

## refresh(url)

Paksa semua callback mendengarkan rute dipicu pada jalur yang ditentukan dan perbarui sebelumnya

parameter:
- `url` : jalur target, jalur default saat ini

## removeSlash(url)

Hapus garis miring dari header jalur

parameter:
- `url` : rangkaian jalur

Nilai kembalian: jalur setelah menghapus garis miring di depan

## setUrl(url)

Perbarui status URL bilah alamat browser

parameter:
- `url` : jalur target

Nilai kembalian: 1 jika jalur benar-benar berubah

## goto(url)

Perbarui alamat browser dan picu penyegaran rute

parameter:
- `url` : jalur target