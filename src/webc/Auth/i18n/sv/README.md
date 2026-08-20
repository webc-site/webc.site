# Autentiseringsinloggning och registrering

Integrera registrering och inloggning för e-post och mobilnummer, verifiering av verifieringskod, lösenordsinloggning och snabbinloggning från tredje part.

- Stöd inmatning av e-post och mobiltelefonnummer
- Flytande etiketter med flytande glasstruktur
- Stöd nedräkning för SMS-verifieringskod
- Stöd tredjeparts OAuth snabbinloggning och bunden vägledning

## Använd demon

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
  console.log("Autentiseringen lyckades:", e.detail);
});
</script>
```

## statuskonstant

- `0` (`STATE_MAIL`): E-postinmatning
- `1` (`STATE_CODE`): Registrering av verifieringskod via e-post
- `2` (`STATE_PASSWD`): Logga in med e-postlösenord
- `10` (`STATE_PHONE`): Ange mobiltelefonnummer
- `11` (`STATE_SMS_CODE`): Verifiering av SMS-verifieringskod
- `Array` (`OAUTH_HINT`): Inloggningsguide för tredje part

## Egenskaper och krokfunktioner

- `step`: aktuell status (nummer eller matris)
- `mail`: E-post
- `phone`: mobiltelefonnummer
- `onSignup(mail, name, password, code)`: Registrera återuppringning
- `onResend(mail)`: Skicka återuppringning av verifieringskoden
- `onLogin(mail, password)`: Återuppringning av lösenordsinloggning
- `onSmsSend(phone)`: Skicka SMS-verifieringskod återuppringning
- `onSmsVerify(phone, code)`: Återuppringning med verifierings-SMS-verifieringskod
- `onPassport(provider)`: Snabbinloggning från tredje part
- `onReset(mail)`: Glömt lösenordsåterställning återuppringning