# Verifikasie aanmelding en registrasie

Integreer e-pos- en selfoonnommerregistrasie en -aanmelding, verifikasiekodeverifikasie, wagwoordaanmelding en vinnige aanmelding van derdepartye.

- Ondersteun oortjiewisseling tussen e-posadres en selfoonnommer
- Swaai etikette met vloeibare glastekstuur
- Ondersteun multi-land area kode keuse en SMS verifikasie kode aftelling
- Ondersteun derdeparty OAuth vinnige aanmelding en gebonde leiding

## Gebruik die demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Gee statuskode terug: 1 vir verifikasiekode-registrasie, 2 vir wagwoordaanmelding, of stuur derdeparty-aanmeldingskikking ["google", "apple"]
  return 2;
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
- `cc`: internasionale skakelkode (verstek 86)
- `onMail(mail)`: E-pos kontroleer terugbel
- `onSignup(mail, name, password)`: Registreer terugbel
- `onLogin(mail, password)`: Wagwoord aanmeld terugbel
- `onSmsSend(phone, cc)`: Stuur SMS-verifikasiekode terugbel
- `onSmsVerify(phone, cc, code)`: Verifikasie SMS verifikasie kode terugbel
- `onPassport(provider)`: Derdeparty vinnige aanmelding terugbel
- `onReset(mail)`: Wagwoord-terugbel vergeet