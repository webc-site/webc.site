# Prijava i registracija autentifikacije

Integrirajte registraciju i prijavu na broj e-pošte i mobilnog telefona, verifikaciju koda, prijavu lozinke i brzu prijavu treće strane.

- Podržava unos e-pošte i broja mobilnog telefona
- Plutajuće naljepnice s teksturom tekućeg stakla
- Podrška odbrojavanju SMS verifikacionog koda
- Podržava brzu prijavu na OAuth treće strane i vezana uputstva

## Koristite demo

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
  console.log("Autentifikacija uspješna:", e.detail);
});
</script>
```

## status konstanta

- `0` (`STATE_MAIL`): Unos e-pošte
- `1` (`STATE_CODE`): Registracija koda za potvrdu e-pošte
- `2` (`STATE_PASSWD`): Lozinka za prijavu putem e-pošte
- `10` (`STATE_PHONE`): Unesite broj mobilnog telefona
- `11` (`STATE_SMS_CODE`): SMS potvrda koda za potvrdu
- `Array` (`OAUTH_HINT`): Lista vodiča za prijavu treće strane

## Svojstva i funkcije kuke

- `step`: trenutni status (broj ili niz)
- `mail`: E-pošta
- `phone`: broj mobilnog telefona
- `onSignup(mail, name, password, code)`: Registrirajte povratni poziv
- `onResend(mail)`: Ponovo pošalji povratni poziv koda za potvrdu
- `onLogin(mail, password)`: Povratni poziv za prijavu lozinkom
- `onSmsSend(phone)`: Pošalji SMS verifikacioni kod za povratni poziv
- `onSmsVerify(phone, code)`: Povratni poziv s verifikacionim SMS kodom
- `onPassport(provider)`: Povratni poziv za brzu prijavu treće strane
- `onReset(mail)`: Zaboravljena lozinka za povratni poziv