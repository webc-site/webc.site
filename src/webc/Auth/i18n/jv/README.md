# Login lan registrasi otentikasi

Integrasi registrasi lan login nomer email lan ponsel, verifikasi kode verifikasi, login sandhi lan login cepet pihak katelu.

- Ndhukung ngoper tab antarane alamat email lan nomer telpon seluler
- Label ngambang kanthi tekstur kaca cair
- Ndhukung pilihan kode area multi-negara lan countdown kode verifikasi SMS
- Ndhukung login cepet OAuth pihak katelu lan panuntun dhumateng

## Gunakake demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Kode status bali: 1 kanggo registrasi kode verifikasi, 2 kanggo login sandi, utawa bali array login pihak katelu ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Otentikasi sukses:", e.detail);
});
</script>
```

## status konstan

- `0` (`STATE_MAIL`): Input email
- `1` (`STATE_CODE`): Registrasi kode verifikasi email
- `2` (`STATE_PASSWD`): Login sandi email
- `10` (`STATE_PHONE`): Ketik nomer telpon seluler
- `11` (`STATE_SMS_CODE`): Verifikasi kode verifikasi SMS
- `Array` (`OAUTH_HINT`): Dhaptar pandhuan mlebu pihak katelu

## Properties lan fungsi pancing

- `step`: status saiki (nomer utawa larik)
- `mail`: Email
- `phone`: nomer telpon seluler
- `cc`: kode telpon internasional (standar 86)
- `onMail(mail)`: Email mriksa telpon bali
- `onSignup(mail, name, password)`: Ndhaptar telpon bali
- `onLogin(mail, password)`: Panggilan mlebu sandhi
- `onSmsSend(phone, cc)`: Kirimi kode verifikasi SMS callback
- `onSmsVerify(phone, cc, code)`: Verifikasi SMS kode verifikasi callback
- `onPassport(provider)`: Callback mlebu cepet pihak katelu
- `onReset(mail)`: Kelalen reset tembung sandhi