# Authentifikatioun Login an Aschreiwung

Integréiert E-Mail an Handysnummer Aschreiwung a Login, Verifizéierungscode Verifizéierung, Passwuert Login an Drëtt Partei Quick Login.

- Ënnerstëtzt Tabswiessel tëscht E-Mail Adress an Handysnummer
- Floating Etiketten mat flëssege Glas Textur
- Ënnerstëtzt Multi-Land Beräich Code Auswiel an SMS Verifizéierungscode Countdown
- Ënnerstëtzt Drëtt Partei OAuth séier Login a gebonnen Leedung

## Benotzt d'Demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Statuscode zréckginn: 1 fir d'Verifikatiounscoderegistréierung, 2 fir d'Passwuert Login, oder d'Drëtt-Partei Login Array zréckzeginn ["google", "apple"]
  return 2;
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
- `cc`: international Wielercode (Standard 86)
- `onMail(mail)`: E-Mail Check Réckruff
- `onSignup(mail, name, password)`: Réckruff registréieren
- `onLogin(mail, password)`: Passwuert Login Réckruff
- `onSmsSend(phone, cc)`: Schéckt SMS-Verifikatiounscode Réckruff
- `onSmsVerify(phone, cc, code)`: Verifizéierungs-SMS Verifikatiounscode Réckruff
- `onPassport(provider)`: Drëtt Partei Quick Login Callback
- `onReset(mail)`: Passwuert zréckgesat vergiessen Réckruff