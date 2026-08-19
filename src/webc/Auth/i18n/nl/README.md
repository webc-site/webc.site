# Authenticatie inloggen en registratie

Integreer de registratie en login van e-mail- en mobiele telefoonnummers, verificatie van de verificatiecode, inloggen met wachtwoord en snel inloggen door derden.

- Ondersteunt het schakelen tussen tabbladen tussen e-mailadres en mobiel telefoonnummer
- Zwevende etiketten met vloeibare glastextuur
- Ondersteunt selectie van netnummers voor meerdere landen en het aftellen van sms-verificatiecodes
- Ondersteuning van OAuth voor snel inloggen en gebonden begeleiding van derden

## Gebruik de demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Retourstatuscode: 1 voor registratie van verificatiecode, 2 voor inloggen met wachtwoord, of retourneert login-array van derden ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Authenticatie succesvol:", e.detail);
});
</script>
```

## status constant

- `0` (`STATE_MAIL`): E-mailinvoer
- `1` (`STATE_CODE`): Registratie van e-mailverificatiecode
- `2` (`STATE_PASSWD`): Inloggen met e-mailwachtwoord
- `10` (`STATE_PHONE`): Voer het mobiele telefoonnummer in
- `11` (`STATE_SMS_CODE`): SMS-verificatiecodeverificatie
- `Array` (`OAUTH_HINT`): Lijst met inloggidsen van derden

## Eigenschappen en hook-functies

- `step`: huidige status (nummer of array)
- `mail`: e-mail
- `phone`: mobiel telefoonnummer
- `cc`: internationale toegangscode (standaard 86)
- `onMail(mail)`: terugbellen via e-mailcontrole
- `onSignup(mail, name, password)`: Terugbellen registreren
- `onLogin(mail, password)`: Terugbellen voor wachtwoordaanmelding
- `onSmsSend(phone, cc)`: Terugbellen via sms-verificatiecode verzenden
- `onSmsVerify(phone, cc, code)`: Verificatie SMS-verificatiecode terugbellen
- `onPassport(provider)`: snel terugbellen voor inloggen van derden
- `onReset(mail)`: Terugbellen voor wachtwoord opnieuw instellen vergeten