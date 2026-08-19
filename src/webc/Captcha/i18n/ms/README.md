# Lapisan pop timbul kod pengesahan

Tetingkap timbul kod pengesahan berdasarkan klik grafik.

- Digabungkan dengan BoxX untuk melaksanakan interaksi tetingkap timbul dan sokongan ESC/tutup
- Klik sasaran berdasarkan imej latar belakang
- Menyokong langkah klik buat asal dan mekanisme cuba semula automatik
- guna
  * Rangkaian awam:`https://captcha.webc.pub`
  * Kerahan peribadi: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gunakan demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Selepas pengesahan, serahkan token ke bahagian belakang
  console.log("Token lulus pengesahan:", token);
}
```

## nilai pulangan

Memanggil fungsi mengembalikan `Promise<string | undefined>`:
- **Pengesahan Lulus**: Mengembalikan rentetan Token kod pengesahan Base64URL yang dikodkan (tiada padding).
- **Tutup atau Batal**: Kembali ke `undefined`.

## Proses pengesahan dan hapus kira bahagian belakang

1. **Pengesahan pencetus**: Panggilan Frontend `Captcha()`.
2. **Dapatkan carta**: `Captcha.js` Mulakan `GET /` ke `captcha_srv` untuk mendapatkan imej dan ID yang diklik.
3. **Pengesahan koordinat**: Selepas pengguna melengkapkan klik, `Captcha.js` memulakan `POST /` ke `captcha_srv` untuk mengesahkan koordinat. Jika pengesahan berjaya, Token berkod Base64URL akan dikembalikan.
4. **Pengesahan bahagian belakang**: Bahagian hadapan menyerahkan Token ke bahagian belakang tapak web, dan bahagian belakang memanggil `captcha_srv` dan `GET /verify/{token}` untuk mengesahkan dan memusnahkan Token sekaligus.

### Arahan hapus kira bahagian belakang

Selepas bahagian belakang tapak web menerima `token` yang diserahkan oleh bahagian hadapan, ia perlu memulakan permintaan kepada perkhidmatan `captcha_srv`:

- **Permintaan antara muka**:`GET /verify/{token}`
- **Parameter laluan**: `token` (rentetan Base64URL dikembalikan oleh hujung hadapan)
- **Return result**: `1` bermaksud pengesahan telah diluluskan dan sah (akan dimusnahkan secara automatik); `0` bermaksud tidak sah atau telah dihapuskan.