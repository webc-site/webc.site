# route.js

Pengurusan penghalaan muka hadapan halaman tunggal

## nowUrl()

Dapatkan laluan URL semasa dengan garis miring utama dialih keluar

Nilai pulangan: rentetan laluan semasa

## route(hook)

Daftarkan panggilan balik pendengaran untuk perubahan laluan. Apabila mendaftar, ia akan dilaksanakan sekali dengan laluan semasa.

parameter:
- `hook` : Fungsi panggil balik pemantauan laluan
  - parameter
    - `url` : laluan semasa
    - `pre` : laluan terakhir

Nilai pulangan: Fungsi pembersihan tidak berdaftar

## setPre(url)

Simpan URL yang direkodkan terakhir

parameter:
- `url` : rentetan laluan

## preUrl()

Dapatkan URL rekod terakhir

Nilai pulangan: rentetan laluan terakhir

## refresh(url)

Paksa semua panggilan balik pendengaran laluan dicetuskan pada laluan yang ditentukan dan kemas kini pra

parameter:
- `url` : laluan sasaran, laluan semasa lalai

## removeSlash(url)

Alih keluar garis miring daripada pengepala laluan

parameter:
- `url` : rentetan laluan

Nilai pulangan: laluan selepas mengalih keluar garis miring utama

## setUrl(url)

Kemas kini status URL bar alamat penyemak imbas

parameter:
- `url` : laluan sasaran

Nilai pulangan: 1 jika laluan sebenarnya berubah

## goto(url)

Kemas kini alamat penyemak imbas dan cetuskan muat semula laluan

parameter:
- `url` : laluan sasaran