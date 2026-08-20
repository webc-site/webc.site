# Hyrja dhe regjistrimi i vërtetimit

Integroni regjistrimin dhe hyrjen në email dhe numrin e telefonit celular, verifikimin e kodit të verifikimit, hyrjen me fjalëkalim dhe hyrjen e shpejtë të palës së tretë.

- Mbështet futjen e emailit dhe numrin e telefonit celular
- Etiketa lundruese me teksturë xhami të lëngët
- Mbështet numërimin mbrapsht të kodit të verifikimit të SMS
- Mbështet identifikimin e shpejtë dhe udhëzimin e lidhur me OAuth të palëve të treta

## Përdorni demonstrimin

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
  console.log("Autentifikimi i suksesshëm:", e.detail);
});
</script>
```

## status konstant

- `0` (`STATE_MAIL`): Hyrja e emailit
- `1` (`STATE_CODE`): Regjistrimi i kodit të verifikimit me email
- `2` (`STATE_PASSWD`): Identifikohu me fjalëkalimin me email
- `10` (`STATE_PHONE`): Fut numrin e telefonit celular
- `11` (`STATE_SMS_CODE`): Verifikimi i kodit të verifikimit me SMS
- `Array` (`OAUTH_HINT`): Lista e udhëzuesve të identifikimit të palëve të treta

## Vetitë dhe funksionet e grepit

- `step`: statusi aktual (numri ose grupi)
- `mail`: Email
- `phone`: numër telefoni celular
- `onSignup(mail, name, password, code)`: Regjistro kthimin e telefonatës
- `onResend(mail)`: Ridërgo kthimin e kodit të verifikimit
- `onLogin(mail, password)`: kthimi i thirrjes së hyrjes me fjalëkalim
- `onSmsSend(phone)`: Dërgo kthimin e telefonatës me kodin e verifikimit SMS
- `onSmsVerify(phone, code)`: kthimi i thirrjes së kodit të verifikimit SMS të verifikimit
- `onPassport(provider)`: kthim i shpejtë i identifikimit të palëve të treta
- `onReset(mail)`: Harrova rikthimin e telefonatës për rivendosjen e fjalëkalimit