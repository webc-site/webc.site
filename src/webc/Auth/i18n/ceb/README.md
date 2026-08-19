# Pag-login ug pagrehistro sa authentication

I-integrate ang email ug mobile phone number registration ug login, verification code verification, password login ug third-party quick login.

- Nagsuporta sa pagbalhin sa tab tali sa email address ug numero sa mobile phone
- Naglutaw nga mga label nga adunay texture nga likido nga bildo
- Nagsuporta sa multi-country area code selection ug SMS verification code countdown
- Suportahi ang third-party nga OAuth nga dali nga pag-login ug gigapos nga giya

## Gamita ang demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Ibalik ang status code: 1 para sa verification code registration, 2 para sa password login, o ibalik ang third-party login array ["google", "apple"]
  return 2;
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
- `cc`: internasyonal nga dialing code (default 86)
- `onMail(mail)`: Email check callback
- `onSignup(mail, name, password)`: Irehistro ang callback
- `onLogin(mail, password)`: Password login callback
- `onSmsSend(phone, cc)`: Ipadala ang SMS verification code callback
- `onSmsVerify(phone, cc, code)`: Pag-verify sa SMS verification code callback
- `onPassport(provider)`: Third-party quick login callback
- `onReset(mail)`: Nakalimot sa pag-reset sa password callback