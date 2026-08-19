# Lapisan popup kode verifikasi

Jendhela pop-up kode verifikasi adhedhasar klik grafis.

- Digabungake karo BoxX kanggo ngleksanakake interaksi jendhela pop-up lan dhukungan ESC / cedhak
- Klik target adhedhasar gambar latar mburi
- Ndhukung langkah klik batalaken lan mekanisme nyoba maneh otomatis
- nggunakake
  * Jaringan umum:`https://captcha.webc.pub`
  * Penyebaran pribadi: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gunakake demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Sawise verifikasi, ngirim token menyang backend
  console.log("Verifikasi lulus Token:", token);
}
```

## nilai bali

Nelpon fungsi ngasilake `Promise<string | undefined>`:
- **Verifikasi Lulus**: Ngasilake kode verifikasi Base64URL sing dienkode (ora ana padding) string Token.
- **Tutup utawa Batal**: Bali menyang `undefined`.

## Proses verifikasi lan back-end write-off

1. **Validasi pemicu**: Panggilan frontend `Captcha()`.
2. **Entuk grafik**: `Captcha.js` Miwiti `GET /` menyang `captcha_srv` kanggo njaluk gambar lan ID sing diklik.
3. **Verifikasi koordinat**: Sawise pangguna ngrampungake klik, `Captcha.js` miwiti `POST /` dadi `captcha_srv` kanggo verifikasi koordinat. Yen verifikasi sukses, Token sing dienkode Base64URL bakal bali.
4. **Verifikasi mburi-mburi**: Front-end ngirim Token menyang backend situs web, lan backend nelpon `captcha_srv` lan `GET /verify/{token}` kanggo verifikasi lan numpes Token bebarengan.

### Pandhuan back-end write-off

Sawise backend situs web nampa `token` sing dikirim dening front-end, kudu miwiti panjaluk menyang layanan `captcha_srv`:

- **Antarmuka panjalukan**:`GET /verify/{token}`
- **Parameter path**: `token` (String Base64URL bali ing mburi ngarep)
- **Asil bali**: `1` tegese verifikasi wis lulus lan valid (bakal otomatis dirusak); `0` tegese ora sah utawa wis dibusak.