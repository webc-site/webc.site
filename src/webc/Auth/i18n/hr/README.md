# Autentifikacijska prijava i registracija

Integrirajte registraciju i prijavu broja e-pošte i broja mobilnog telefona, provjeru kontrolnog koda, prijavu lozinkom i brzu prijavu treće strane.

- Podržava unos broja e-pošte i mobilnog telefona
- Plutajuće naljepnice s teksturom tekućeg stakla
- Podržava odbrojavanje SMS koda za provjeru
- Podržite OAuth treće strane za brzu prijavu i vezane upute

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
  console.log("Provjera autentičnosti uspjela:", e.detail);
});
</script>
```

## konstanta statusa

- `0` (`STATE_MAIL`): unos e-pošte
- `1` (`STATE_CODE`): Registracija koda za provjeru e-pošte
- `2` (`STATE_PASSWD`): Prijava putem e-pošte zaporkom
- `10` (`STATE_PHONE`): Unesite broj mobilnog telefona
- `11` (`STATE_SMS_CODE`): provjera SMS koda za provjeru
- `Array` (`OAUTH_HINT`): Popis vodiča za prijavu treće strane

## Svojstva i funkcije kuka

- `step`: trenutni status (broj ili niz)
- `mail`: E-pošta
- `phone`: broj mobilnog telefona
- `onSignup(mail, name, password, code)`: Registrirajte povratni poziv
- `onResend(mail)`: Ponovno pošalji povratni poziv kontrolnog koda
- `onLogin(mail, password)`: Povratni poziv za prijavu lozinkom
- `onSmsSend(phone)`: Pošaljite povratni poziv s kodom za provjeru SMS-a
- `onSmsVerify(phone, code)`: povratni poziv koda za provjeru SMS-a
- `onPassport(provider)`: Povratni poziv za brzu prijavu treće strane
- `onReset(mail)`: Povratni poziv za ponovno postavljanje zaboravljene lozinke