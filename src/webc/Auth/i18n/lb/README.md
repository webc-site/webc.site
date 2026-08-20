# Authentifikatioun Login an Aschreiwung

Integréiert E-Mail an Handysnummer Aschreiwung a Login, Verifizéierungscode Verifizéierung, Passwuert Login an Drëtt Partei Quick Login.

- Ënnerstëtzung E-Mail an Handysnummer Input
- Floating Etiketten mat flëssege Glas Textur
- Ënnerstëtzung SMS Verifizéierungscode Countdown
- Ënnerstëtzt Drëtt Partei OAuth séier Login a gebonnen Leedung

## Benotzt d'Demo

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
  console.log("Authentifikatioun erfollegräich:", e.detail);
});
</script>
```

## Status konstant

- `0` (`STATE_MAIL`): E-Mail-Input
- `1` (`STATE_CODE`): E-Mail Verifikatiounscode Aschreiwung
- `2` (`STATE_PASSWD`): E-Mail Passwuert Login
- `10` (`STATE_PHONE`): Gitt Handysnummer un
- `11` (`STATE_SMS_CODE`): SMS Verifizéierungscode Verifizéierung
- `Array` (`OAUTH_HINT`): Drëtt Partei Login Guide Lëscht

## Eegeschaften an Haken Funktiounen

- `step`: aktuelle Status (Nummer oder Array)
- `mail`: E-Mail
- `phone`: Handysnummer
- `onSignup(mail, name, password, code)`: Réckruff registréieren
- `onResend(mail)`: Réckruff fir d'Verifikatiounscode nei ze schécken
- `onLogin(mail, password)`: Passwuert Login Réckruff
- `onSmsSend(phone)`: Schéckt SMS-Verifikatiounscode Réckruff
- `onSmsVerify(phone, code)`: Verifizéierungs-SMS Verifikatiounscode Réckruff
- `onPassport(provider)`: Drëtt Partei Quick Login Callback
- `onReset(mail)`: Passwuert zréckgesat vergiessen Réckruff