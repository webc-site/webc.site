# Login dan registrasi otentikasi

Integrasikan pendaftaran dan login email dan nomor ponsel, verifikasi kode verifikasi, login kata sandi, dan login cepat pihak ketiga.

- Mendukung peralihan tab antara alamat email dan nomor ponsel
- Label mengambang dengan tekstur kaca cair
- Mendukung pemilihan kode area multi-negara dan hitungan mundur kode verifikasi SMS
- Mendukung login cepat OAuth pihak ketiga dan panduan terikat

## Gunakan demonya

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Kembalikan kode status: 1 untuk registrasi kode verifikasi, 2 untuk login kata sandi, atau kembalikan array login pihak ketiga ["google", "apple"]
  return 2;
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
- `cc`: kode panggilan internasional (default 86)
- `onMail(mail)`: Panggilan balik pemeriksaan email
- `onSignup(mail, name, password)`: Daftarkan panggilan balik
- `onLogin(mail, password)`: Panggilan balik login kata sandi
- `onSmsSend(phone, cc)`: Kirim panggilan balik kode verifikasi SMS
- `onSmsVerify(phone, cc, code)`: Panggilan balik kode verifikasi SMS
- `onPassport(provider)`: Panggilan balik masuk cepat pihak ketiga
- `onReset(mail)`: Lupa panggilan balik pengaturan ulang kata sandi