# Login dan registrasi otentikasi

Integrasikan pendaftaran dan login email dan nomor ponsel, verifikasi kode verifikasi, login kata sandi, dan login cepat pihak ketiga.

- Mendukung masukan email dan nomor ponsel
- Label mengambang dengan tekstur kaca cair
- Mendukung hitung mundur kode verifikasi SMS
- Mendukung login cepat OAuth pihak ketiga dan panduan terikat

## Gunakan demonya

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onSignup = async (mail, name, password, code) => {
  return [0, mail, name, code];
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Otentikasi berhasil:", e.detail);
});
</script>
```

## statusnya konstan

- `0` (`STATE_MAIL`): Masukan email
- `1` (`STATE_CODE`): Pendaftaran kode verifikasi email
- `2` (`STATE_PASSWD`): Login kata sandi email
- `10` (`STATE_PHONE`): Masukkan nomor ponsel
- `11` (`STATE_SMS_CODE`): Verifikasi kode verifikasi SMS
- `Array` (`OAUTH_HINT`): Daftar panduan masuk pihak ketiga

## Properti dan fungsi kait

- `step`: status saat ini (angka atau larik)
- `mail`: Surel
- `phone`: nomor ponsel
- `onSignup(mail, name, password, code)`: Daftarkan panggilan balik
- `onResend(mail)`: Mengirim ulang panggilan balik kode verifikasi
- `onLogin(mail, password)`: Panggilan balik login kata sandi
- `onSmsSend(phone)`: Kirim panggilan balik kode verifikasi SMS
- `onSmsVerify(phone, code)`: Panggilan balik kode verifikasi SMS
- `onPassport(provider)`: Panggilan balik masuk cepat pihak ketiga
- `onReset(mail)`: Lupa panggilan balik pengaturan ulang kata sandi