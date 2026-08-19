# Prijava i registracija autentifikacije

Integrirajte registraciju i prijavu na broj e-pošte i mobilnog telefona, verifikaciju koda, prijavu lozinke i brzu prijavu treće strane.

- Podržava prebacivanje kartica između adrese e-pošte i broja mobilnog telefona
- Plutajuće naljepnice s teksturom tekućeg stakla
- Podržava izbor pozivnog broja za više zemalja i odbrojavanje SMS verifikacionog koda
- Podržava brzu prijavu na OAuth treće strane i vezana uputstva

## Koristite demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vrati statusni kod: 1 za registraciju verifikacionog koda, 2 za prijavu lozinkom ili vrati polje za prijavu treće strane ["google", "apple"]
  return 2;
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
- `cc`: međunarodni pozivni broj (zadano 86)
- `onMail(mail)`: povratni poziv za provjeru e-pošte
- `onSignup(mail, name, password)`: Registrirajte povratni poziv
- `onLogin(mail, password)`: Povratni poziv za prijavu lozinkom
- `onSmsSend(phone, cc)`: Pošalji SMS verifikacioni kod za povratni poziv
- `onSmsVerify(phone, cc, code)`: Povratni poziv s verifikacijskim SMS-om
- `onPassport(provider)`: Povratni poziv za brzu prijavu treće strane
- `onReset(mail)`: Zaboravljena lozinka za povratni poziv