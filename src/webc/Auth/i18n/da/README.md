# Autentificering login og registrering

Integrer e-mail- og mobiltelefonnummerregistrering og -login, verifikationskodebekræftelse, adgangskodelogin og hurtig login fra tredjepart.

- Support e-mail og mobiltelefonnummer input
- Flydende etiketter med flydende glasstruktur
- Support SMS-bekræftelseskode nedtælling
- Understøtte tredjeparts OAuth-hurtigt login og bundet vejledning

## Brug demoen

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
- `onSignup(mail, name, password, code)`: Registrer tilbagekald
- `onResend(mail)`: Send bekræftelseskode tilbagekald igen
- `onLogin(mail, password)`: Tilbagekald ved login med adgangskode
- `onSmsSend(phone)`: Send SMS-bekræftelseskode tilbagekald
- `onSmsVerify(phone, code)`: Bekræftelses-sms-bekræftelseskode tilbagekald
- `onPassport(provider)`: Hurtigt login-tilbagekald fra tredjepart
- `onReset(mail)`: Glemt adgangskode nulstil tilbagekald