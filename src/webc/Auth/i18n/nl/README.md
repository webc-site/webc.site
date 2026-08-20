# Authenticatie inloggen en registratie

Integreer de registratie en login van e-mail- en mobiele telefoonnummers, verificatie van de verificatiecode, inloggen met wachtwoord en snel inloggen door derden.

- Ondersteuning voor het invoeren van e-mail en mobiel telefoonnummer
- Zwevende etiketten met vloeibare glastextuur
- Ondersteuning van het aftellen van de sms-verificatiecode
- Ondersteuning van OAuth voor snel inloggen en gebonden begeleiding van derden

## Gebruik de demo

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
- `onSignup(mail, name, password, code)`: Terugbellen registreren
- `onResend(mail)`: Terugbelverzoek met verificatiecode opnieuw verzenden
- `onLogin(mail, password)`: Terugbellen voor wachtwoordaanmelding
- `onSmsSend(phone)`: Terugbellen via sms-verificatiecode verzenden
- `onSmsVerify(phone, code)`: Verificatie SMS-verificatiecode terugbellen
- `onPassport(provider)`: snel terugbellen voor inloggen van derden
- `onReset(mail)`: Terugbellen voor wachtwoord opnieuw instellen vergeten