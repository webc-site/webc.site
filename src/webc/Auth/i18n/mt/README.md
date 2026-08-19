# Awtentikazzjoni login u reġistrazzjoni

Integra r-reġistrazzjoni u l-login tal-email u tan-numru tat-telefon ċellulari, il-verifika tal-kodiċi tal-verifika, il-login tal-password u l-login rapidu ta’ partijiet terzi.

- Jappoġġja l-qlib tat-tab bejn l-indirizz tal-email u n-numru tat-telefon ċellulari
- Tikketti li jżommu f'wiċċ l-ilma b'tessut tal-ħġieġ likwidu
- Jappoġġja l-għażla tal-kodiċi taż-żona f'diversi pajjiżi u l-countdown tal-kodiċi tal-verifika tal-SMS
- Appoġġ ta 'parti terza login OAuth malajr u gwida marbuta

## Uża d-demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Irritorna l-kodiċi tal-istatus: 1 għar-reġistrazzjoni tal-kodiċi tal-verifika, 2 għall-login tal-password, jew irritorna array tal-login ta’ parti terza ["google", "apple"]
  return 2;
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
- `cc`: kodiċi internazzjonali ta' tisselezzjona (default 86)
- `onMail(mail)`: Iċċekkja callback bl-email
- `onSignup(mail, name, password)`: Irreġistra callback
- `onLogin(mail, password)`: Callback tal-login tal-password
- `onSmsSend(phone, cc)`: Ibgħat sejħa lura tal-kodiċi ta' verifika ta' SMS
- `onSmsVerify(phone, cc, code)`: Callback tal-kodiċi tal-verifika tal-SMS tal-verifika
- `onPassport(provider)`: Callback ta' login malajr ta' partijiet terzi
- `onReset(mail)`: Insejt il-password reset callback