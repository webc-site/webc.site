# Autentiseringspålogging og registrering

Integrer registrering og pålogging av e-post og mobiltelefonnummer, bekreftelseskodebekreftelse, passordpålogging og hurtigpålogging fra tredjepart.

- Støtte inntasting av e-post og mobiltelefonnummer
- Flytende etiketter med flytende glasstekstur
- Støtte nedtelling for SMS-bekreftelseskode
- Støtt tredjeparts OAuth rask pålogging og bundet veiledning

## Bruk demoen

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
  console.log("Autentisering vellykket:", e.detail);
});
</script>
```

## status konstant

- `0` (`STATE_MAIL`): E-postinndata
- `1` (`STATE_CODE`): Registrering av e-postbekreftelseskode
- `2` (`STATE_PASSWD`): Logg på e-postpassord
- `10` (`STATE_PHONE`): Skriv inn mobiltelefonnummer
- `11` (`STATE_SMS_CODE`): SMS-bekreftelseskodebekreftelse
- `Array` (`OAUTH_HINT`): Tredjeparts påloggingsguideliste

## Egenskaper og krokfunksjoner

- `step`: gjeldende status (nummer eller matrise)
- `mail`: E-post
- `phone`: mobiltelefonnummer
- `onSignup(mail, name, password, code)`: Registrer tilbakeringing
- `onResend(mail)`: Send tilbakeringing av bekreftelseskoden på nytt
- `onLogin(mail, password)`: Tilbakeringing av passordpålogging
- `onSmsSend(phone)`: Send SMS-bekreftelseskode tilbakeringing
- `onSmsVerify(phone, code)`: Tilbakeringing av bekreftelses-SMS-bekreftelseskode
- `onPassport(provider)`: Hurtigpålogging fra tredjepart
- `onReset(mail)`: Glemt tilbakeringing av passord