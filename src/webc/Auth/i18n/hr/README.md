# Autentifikacijska prijava i registracija

Integrirajte registraciju i prijavu broja e-pošte i broja mobilnog telefona, provjeru kontrolnog koda, prijavu lozinkom i brzu prijavu treće strane.

- Podržava prebacivanje kartica između adrese e-pošte i broja mobilnog telefona
- Plutajuće naljepnice s teksturom tekućeg stakla
- Podržava odabir pozivnog broja za više zemalja i odbrojavanje SMS koda za provjeru
- Podržite OAuth treće strane za brzu prijavu i vezane upute

## Koristite demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vrati statusni kod: 1 za registraciju kontrolnog koda, 2 za prijavu lozinkom ili vrati polje za prijavu treće strane ["google", "apple"]
  return 2;
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
- `cc`: međunarodni pozivni broj (zadano 86)
- `onMail(mail)`: Povratni poziv provjere e-pošte
- `onSignup(mail, name, password)`: Registrirajte povratni poziv
- `onLogin(mail, password)`: Povratni poziv za prijavu lozinkom
- `onSmsSend(phone, cc)`: Pošaljite povratni poziv s kodom za provjeru SMS-a
- `onSmsVerify(phone, cc, code)`: povratni poziv koda za provjeru SMS-a
- `onPassport(provider)`: Povratni poziv za brzu prijavu treće strane
- `onReset(mail)`: Povratni poziv za ponovno postavljanje zaboravljene lozinke