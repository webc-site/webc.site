# Mewngofnodi dilysu a chofrestru

Integreiddio cofrestriad a mewngofnodi e-bost a rhif ffôn symudol, dilysu cod dilysu, mewngofnodi cyfrinair a mewngofnodi cyflym trydydd parti.

- Yn cefnogi newid tab rhwng cyfeiriad e-bost a rhif ffôn symudol
- Labeli arnofio gyda gwead gwydr hylif
- Yn cefnogi dewis cod ardal aml-wlad a chyfri'r cod dilysu SMS
- Cefnogi mewngofnodi cyflym OAuth trydydd parti ac arweiniad wedi'i rwymo

## Defnyddiwch y demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Dychwelyd cod statws: 1 ar gyfer cofrestru cod dilysu, 2 ar gyfer mewngofnodi cyfrinair, neu ddychwelyd arae mewngofnodi trydydd parti [ "google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Dilysiad yn llwyddiannus:"", e.detail);
});
</script>
```

## statws cyson

- `0` (`STATE_MAIL`): Mewnbwn e-bost
- `1` (`STATE_CODE`): Cofrestru cod dilysu e-bost
- `2` (`STATE_PASSWD`): Mewngofnodi cyfrinair e-bost
- `10` (`STATE_PHONE`): Rhowch rif ffôn symudol
- `11` (`STATE_SMS_CODE`): Dilysu cod dilysu SMS
- `Array` (`OAUTH_HINT`): Rhestr canllaw mewngofnodi trydydd parti

## Priodweddau a swyddogaethau bachyn

- `step`: statws cyfredol (rhif neu arae)
- `mail`: E-bost
- `phone`: rhif ffôn symudol
- `cc`: cod deialu rhyngwladol (diofyn 86)
- `onMail(mail)`: Galwad yn ôl siec e-bost
- `onSignup(mail, name, password)`: Cofrestru galwad yn ôl
- `onLogin(mail, password)`: Galwad mewngofnodi cyfrinair yn ôl
- `onSmsSend(phone, cc)`: Anfon galwad cod dilysu SMS yn ôl
- `onSmsVerify(phone, cc, code)`: Galwad yn ôl cod dilysu SMS dilysu
- `onPassport(provider)`: Galwad mewngofnodi cyflym trydydd parti yn ôl
- `onReset(mail)`: Wedi anghofio ail-alwad cyfrinair