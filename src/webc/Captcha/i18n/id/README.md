# Lapisan popup kode verifikasi

Jendela pop-up kode verifikasi berdasarkan klik grafis.

- Dikombinasikan dengan BoxX untuk mengimplementasikan interaksi jendela pop-up dan dukungan ESC/close
- Klik target berdasarkan gambar latar belakang
- Mendukung langkah pembatalan klik dan mekanisme coba lagi otomatis
- menggunakan
  * Jaringan publik:`https://captcha.webc.pub`
  * Penerapan pribadi: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gunakan demonya

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Setelah verifikasi, kirimkan token ke backend
  console.log("Verifikasi lulus Token:", token);
}
```

## nilai kembalian

Memanggil fungsi akan mengembalikan `Promise<string | undefined>`:
- **Verifikasi Lulus**: Mengembalikan string Token kode verifikasi yang dikodekan Base64URL (tanpa padding).
- **Tutup atau Batal**: Kembali ke `undefined`.

## Proses verifikasi dan penghapusan back-end

1. **Validasi pemicu**: Panggilan frontend `Captcha()`.
2. **Dapatkan bagan**: `Captcha.js` Mulai `GET /` ke `captcha_srv` untuk mendapatkan gambar dan ID yang diklik.
3. **Verifikasi koordinat**: Setelah pengguna menyelesaikan klik, `Captcha.js` memulai `POST /` ke `captcha_srv` untuk memverifikasi koordinat. Jika verifikasi berhasil, Token yang dikodekan Base64URL akan dikembalikan.
4. **Verifikasi back-end**: Front-end mengirimkan Token ke backend situs web, dan backend memanggil `captcha_srv` dan `GET /verify/{token}` untuk memverifikasi dan menghancurkan Token sekaligus.

### Instruksi penghapusan back-end

Setelah backend situs web menerima `token` yang dikirimkan oleh front-end, backend perlu memulai permintaan ke layanan `captcha_srv`:

- **Antarmuka permintaan**:`GET /verify/{token}`
- **Parameter jalur**: `token` (string URL Base64 dikembalikan oleh ujung depan)
- **Hasil pengembalian**: `1` berarti verifikasi lulus dan valid (akan dimusnahkan secara otomatis); `0` berarti tidak sah atau telah dihapuskan.