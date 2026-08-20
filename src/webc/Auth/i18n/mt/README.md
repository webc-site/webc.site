# Awtentikazzjoni login u reġistrazzjoni

Integra r-reġistrazzjoni u l-login tal-email u tan-numru tat-telefon ċellulari, il-verifika tal-kodiċi tal-verifika, il-login tal-password u l-login rapidu ta’ partijiet terzi.

- Appoġġ email u numru tat-telefon ċellulari input
- Tikketti li jżommu f'wiċċ l-ilma b'tessut tal-ħġieġ likwidu
- Appoġġ kodiċi ta 'verifika SMS countdown
- Appoġġ ta 'parti terza login OAuth malajr u gwida marbuta

## Uża d-demo

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
  console.log ("Awtentikazzjoni b'suċċess:", e.dettall);
});
</script>
```

## status kostanti

- `0` (`STATE_MAIL`): Input ta' email
- `1` (`STATE_CODE`): Reġistrazzjoni tal-kodiċi tal-verifika tal-email
- `2` (`STATE_PASSWD`): Il-login tal-password bl-email
- `10` (`STATE_PHONE`): Daħħal in-numru tat-telefon ċellulari
- `11` (`STATE_SMS_CODE`): Verifika tal-kodiċi tal-verifika tal-SMS
- `Array` (`OAUTH_HINT`): Lista ta' gwida tal-login ta' parti terza

## Proprjetajiet u funzjonijiet tal-ganċ

- `step`: stat attwali (numru jew firxa)
- `mail`: Email
- `phone`: numru tat-telefon ċellulari
- `onSignup(mail, name, password, code)`: Irreġistra callback
- `onResend(mail)`: Ibgħat mill-ġdid callback tal-kodiċi tal-verifika
- `onLogin(mail, password)`: Callback tal-login tal-password
- `onSmsSend(phone)`: Ibgħat sejħa lura tal-kodiċi ta' verifika SMS
- `onSmsVerify(phone, code)`: Callback tal-kodiċi tal-verifika tal-SMS tal-verifika
- `onPassport(provider)`: Callback ta' login malajr ta' partijiet terzi
- `onReset(mail)`: Insejt il-password reset callback