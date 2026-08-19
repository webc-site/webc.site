# Autentiseringsinloggning och registrering

Integrera registrering och inloggning för e-post och mobilnummer, verifiering av verifieringskod, lösenordsinloggning och snabbinloggning från tredje part.

- Stöder flikväxling mellan e-postadress och mobiltelefonnummer
- Flytande etiketter med flytande glasstruktur
- Stöder val av riktnummer för flera länder och nedräkning av SMS-verifieringskod
- Stöd tredjeparts OAuth snabbinloggning och bunden vägledning

## Använd demon

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Returnera statuskod: 1 för registrering av verifieringskod, 2 för lösenordsinloggning, eller returnera tredjepartsinloggningsarray ["google", "apple"]
  return 2;
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
- `cc`: internationellt riktnummer (standard 86)
- `onMail(mail)`: E-postkontroll återuppringning
- `onSignup(mail, name, password)`: Registrera återuppringning
- `onLogin(mail, password)`: Återuppringning av lösenordsinloggning
- `onSmsSend(phone, cc)`: Skicka SMS-verifieringskod återuppringning
- `onSmsVerify(phone, cc, code)`: Återuppringning med verifierings-SMS-verifieringskod
- `onPassport(provider)`: Snabbinloggning från tredje part
- `onReset(mail)`: Glömt lösenordsåterställning återuppringning