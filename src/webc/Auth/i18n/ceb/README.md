# Pag-login ug pagrehistro sa authentication

I-integrate ang email ug mobile phone number registration ug login, verification code verification, password login ug third-party quick login.

- Suportahi email ug numero sa mobile phone input
- Naglutaw nga mga label nga adunay texture nga likido nga bildo
- Suportahi ang SMS verification code countdown
- Suportahi ang third-party nga OAuth nga dali nga pag-login ug gigapos nga giya

## Gamita ang demo

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
  console.log("Malamposon ang authentication:", e.detalye);
});
</script>
```

## kanunay nga kahimtang

- `0` (`STATE_MAIL`): Email input
- `1` (`STATE_CODE`): Pagparehistro sa email verification code
- `2` (`STATE_PASSWD`): Email password login
- `10` (`STATE_PHONE`): Pagsulod sa numero sa mobile phone
- `11` (`STATE_SMS_CODE`): SMS verification code verification
- `Array` (`OAUTH_HINT`): Listahan sa giya sa pag-login sa ikatulo nga partido

## Properties ug hook function

- `step`: kasamtangan nga kahimtang (numero o laray)
- `mail`: Email
- `phone`: numero sa cellphone
- `onSignup(mail, name, password, code)`: Irehistro ang callback
- `onResend(mail)`: Ipadala pag-usab ang verification code callback
- `onLogin(mail, password)`: Password login callback
- `onSmsSend(phone)`: Ipadala ang SMS verification code callback
- `onSmsVerify(phone, code)`: Pag-verify sa SMS verification code callback
- `onPassport(provider)`: Third-party quick login callback
- `onReset(mail)`: Nakalimot sa pag-reset sa password callback