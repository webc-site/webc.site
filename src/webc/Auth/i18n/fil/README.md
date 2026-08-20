# Pag-login at pagpaparehistro ng pagpapatunay

Isama ang pagpaparehistro at pag-login ng numero ng email at mobile phone, verification code verification, password login at third-party quick login.

- Suportahan ang pag-input ng email at numero ng mobile phone
- Mga lumulutang na label na may texture na likidong salamin
- Suportahan ang countdown ng code sa pag-verify ng SMS
- Suportahan ang mabilis na pag-login ng third-party na OAuth at gabay na nakatali

## Gamitin ang demo

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
  console.log("Matagumpay ang pagpapatunay:", e.detalye);
});
</script>
```

## pare-pareho ang katayuan

- `0` (`STATE_MAIL`): Email input
- `1` (`STATE_CODE`): Pagpaparehistro ng verification code sa email
- `2` (`STATE_PASSWD`): Email password login
- `10` (`STATE_PHONE`): Ilagay ang numero ng mobile phone
- `11` (`STATE_SMS_CODE`): Pag-verify ng SMS verification code
- `Array` (`OAUTH_HINT`): Listahan ng gabay sa pag-log in ng third-party

## Mga katangian at pag-andar ng hook

- `step`: kasalukuyang katayuan (numero o array)
- `mail`: Email
- `phone`: numero ng mobile phone
- `onSignup(mail, name, password, code)`: Magrehistro ng callback
- `onResend(mail)`: Muling ipadala ang callback ng verification code
- `onLogin(mail, password)`: Callback sa pag-login ng password
- `onSmsSend(phone)`: Magpadala ng SMS verification code callback
- `onSmsVerify(phone, code)`: Callback ng verification SMS verification code
- `onPassport(provider)`: Third-party quick login callback
- `onReset(mail)`: Nakalimutan ang callback sa pag-reset ng password