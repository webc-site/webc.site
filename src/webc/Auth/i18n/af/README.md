# Verifikasie aanmelding en registrasie

Integreer e-pos- en selfoonnommerregistrasie en -aanmelding, verifikasiekodeverifikasie, wagwoordaanmelding en vinnige aanmelding van derdepartye.

- Ondersteun e-pos en selfoonnommer invoer
- Swaai etikette met vloeibare glastekstuur
- Ondersteun SMS-verifikasiekode-aftelling
- Ondersteun derdeparty OAuth vinnige aanmelding en gebonde leiding

## Gebruik die demo

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
  console.log("Stawing suksesvol:", e.detail);
});
</script>
```

## status konstante

- `0` (`STATE_MAIL`): E-posinvoer
- `1` (`STATE_CODE`): E-pos verifikasiekode registrasie
- `2` (`STATE_PASSWD`): E-pos wagwoordaanmelding
- `10` (`STATE_PHONE`): Voer selfoonnommer in
- `11` (`STATE_SMS_CODE`): SMS-verifikasiekode-verifikasie
- `Array` (`OAUTH_HINT`): Derdeparty-aantekengidslys

## Eienskappe en haakfunksies

- `step`: huidige status (nommer of skikking)
- `mail`: E-pos
- `phone`: selfoonnommer
- `onSignup(mail, name, password, code)`: Registreer terugbel
- `onResend(mail)`: Stuur verifikasiekode terugbel
- `onLogin(mail, password)`: Wagwoord aanmeld terugbel
- `onSmsSend(phone)`: Stuur SMS-verifikasiekode terugbel
- `onSmsVerify(phone, code)`: Verifikasie SMS verifikasie kode terugbel
- `onPassport(provider)`: Derdeparty vinnige aanmelding terugbel
- `onReset(mail)`: Wagwoord-terugbel vergeet