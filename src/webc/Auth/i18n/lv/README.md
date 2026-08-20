# Autentifikācijas pieteikšanās un reģistrācija

Integrējiet e-pasta un mobilā tālruņa numura reģistrāciju un pieteikšanos, verifikācijas koda verifikāciju, paroles pieteikšanos un trešās puses ātro pieteikšanos.

- Atbalstiet e-pasta un mobilā tālruņa numura ievadi
- Peldošās etiķetes ar šķidrā stikla tekstūru
- Atbalstiet SMS verifikācijas koda atpakaļskaitīšanu
- Atbalstiet trešās puses OAuth ātro pieteikšanos un saistošus norādījumus

## Izmantojiet demonstrāciju

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
  console.log("Autentifikācija veiksmīga:", e.detail);
});
</script>
```

## statusa konstante

- `0` (`STATE_MAIL`): e-pasta ievade
- `1` (`STATE_CODE`): e-pasta verifikācijas koda reģistrācija
- `2` (`STATE_PASSWD`): e-pasta paroles pieteikšanās
- `10` (`STATE_PHONE`): ievadiet mobilā tālruņa numuru
- `11` (`STATE_SMS_CODE`): SMS verifikācijas koda pārbaude
- `Array` (`OAUTH_HINT`): trešās puses pieteikšanās ceļvežu saraksts

## Īpašības un āķa funkcijas

- `step`: pašreizējais statuss (skaitlis vai masīvs)
- `mail`: e-pasts
- `phone`: mobilā tālruņa numurs
- `onSignup(mail, name, password, code)`: reģistrēt atzvanīšanu
- `onResend(mail)`: atkārtoti nosūtiet verifikācijas koda atzvanu
- `onLogin(mail, password)`: paroles pieteikšanās atpakaļzvans
- `onSmsSend(phone)`: nosūtiet SMS verifikācijas koda atzvanīšanu
- `onSmsVerify(phone, code)`: verifikācijas SMS verifikācijas koda atzvanīšana
- `onPassport(provider)`: trešās puses ātrās pieteikšanās atzvans
- `onReset(mail)`: aizmirsa paroles atiestatīšanas atzvanīšana