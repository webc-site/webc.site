# Autentiseringspålogging og registrering

Integrer registrering og pålogging av e-post og mobiltelefonnummer, bekreftelseskodebekreftelse, passordpålogging og hurtigpålogging fra tredjepart.

- Støtter faneveksling mellom e-postadresse og mobiltelefonnummer
- Flytende etiketter med flytende glasstekstur
- Støtter valg av retningsnummer for flere land og nedtelling av SMS-bekreftelseskode
- Støtt tredjeparts OAuth rask pålogging og bundet veiledning

## Bruk demoen

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Returner statuskode: 1 for bekreftelseskoderegistrering, 2 for passordpålogging, eller returner tredjeparts påloggingsarray ["google", "apple"]
  return 2;
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
- `cc`: internasjonal oppringingskode (standard 86)
- `onMail(mail)`: E-postsjekk tilbakeringing
- `onSignup(mail, name, password)`: Registrer tilbakeringing
- `onLogin(mail, password)`: Tilbakeringing av passordpålogging
- `onSmsSend(phone, cc)`: Send SMS-bekreftelseskode tilbakeringing
- `onSmsVerify(phone, cc, code)`: Tilbakeringing av bekreftelses-SMS-bekreftelseskode
- `onPassport(provider)`: Hurtigpålogging fra tredjepart
- `onReset(mail)`: Glemt tilbakeringing av passord