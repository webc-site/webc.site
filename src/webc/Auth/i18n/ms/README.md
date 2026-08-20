# Log masuk pengesahan dan pendaftaran

Integrasikan pendaftaran dan log masuk nombor e-mel dan telefon bimbit, pengesahan kod pengesahan, log masuk kata laluan dan log masuk pantas pihak ketiga.

- Menyokong input e-mel dan nombor telefon mudah alih
- Label terapung dengan tekstur kaca cecair
- Sokong undur kod pengesahan SMS
- Sokong log masuk pantas OAuth pihak ketiga dan panduan terikat

## Gunakan demo

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
  console.log("Pengesahan berjaya:", e.detail);
});
</script>
```

## pemalar status

- `0` (`STATE_MAIL`): Input e-mel
- `1` (`STATE_CODE`): Pendaftaran kod pengesahan e-mel
- `2` (`STATE_PASSWD`): Log masuk kata laluan e-mel
- `10` (`STATE_PHONE`): Masukkan nombor telefon mudah alih
- `11` (`STATE_SMS_CODE`): Pengesahan kod pengesahan SMS
- `Array` (`OAUTH_HINT`): Senarai panduan log masuk pihak ketiga

## Sifat dan fungsi cangkuk

- `step`: status semasa (nombor atau tatasusunan)
- `mail`: E-mel
- `phone`: nombor telefon mudah alih
- `onSignup(mail, name, password, code)`: Daftar panggilan balik
- `onResend(mail)`: Hantar semula panggilan balik kod pengesahan
- `onLogin(mail, password)`: Panggilan balik log masuk kata laluan
- `onSmsSend(phone)`: Hantar panggilan balik kod pengesahan SMS
- `onSmsVerify(phone, code)`: Panggilan balik kod pengesahan SMS pengesahan
- `onPassport(provider)`: Panggilan balik log masuk pantas pihak ketiga
- `onReset(mail)`: Terlupa panggilan balik tetapan semula kata laluan