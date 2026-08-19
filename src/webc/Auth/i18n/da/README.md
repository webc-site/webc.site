# Autentificering login og registrering

Integrer e-mail- og mobiltelefonnummerregistrering og -login, verifikationskodebekræftelse, adgangskodelogin og hurtig login fra tredjepart.

- Understøtter faneskift mellem e-mailadresse og mobiltelefonnummer
- Flydende etiketter med flydende glasstruktur
- Understøtter valg af områdenummer for flere lande og nedtælling af SMS-bekræftelseskode
- Understøtte tredjeparts OAuth-hurtigt login og bundet vejledning

## Brug demoen

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Returner statuskode: 1 for verifikationskoderegistrering, 2 for adgangskodelogin, eller returner tredjepartslogin-array ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Godkendelse lykkedes:", e.detail);
});
</script>
```

## status konstant

- `0` (`STATE_MAIL`): E-mail-input
- `1` (`STATE_CODE`): Registrering af e-mailbekræftelseskode
- `2` (`STATE_PASSWD`): Login med e-mail-adgangskode
- `10` (`STATE_PHONE`): Indtast mobiltelefonnummer
- `11` (`STATE_SMS_CODE`): SMS-bekræftelseskodebekræftelse
- `Array` (`OAUTH_HINT`): Tredjeparts loginguideliste

## Egenskaber og krogfunktioner

- `step`: aktuel status (nummer eller matrix)
- `mail`: E-mail
- `phone`: mobiltelefonnummer
- `cc`: international opkaldskode (standard 86)
- `onMail(mail)`: E-mail check tilbagekald
- `onSignup(mail, name, password)`: Registrer tilbagekald
- `onLogin(mail, password)`: Tilbagekald ved login med adgangskode
- `onSmsSend(phone, cc)`: Send SMS-bekræftelseskode tilbagekald
- `onSmsVerify(phone, cc, code)`: Bekræftelses-sms-bekræftelseskode tilbagekald
- `onPassport(provider)`: Hurtigt login-tilbagekald fra tredjepart
- `onReset(mail)`: Glemt adgangskode nulstil tilbagekald