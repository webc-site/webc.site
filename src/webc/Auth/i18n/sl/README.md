# Prijava in registracija za preverjanje pristnosti

Integrirajte registracijo in prijavo na e-pošto in številko mobilnega telefona, preverjanje potrditvene kode, prijavo z geslom in hitro prijavo tretjih oseb.

- Podpora za vnos e-pošte in številke mobilnega telefona
- Plavajoče etikete s teksturo tekočega stekla
- Podpora za odštevanje potrditvene kode SMS
- Podpora za hitro prijavo OAuth tretjih oseb in vezana navodila

## Uporabite demo

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
  console.log("Preverjanje pristnosti uspešno:", e.detail);
});
</script>
```

## statusna konstanta

- `0` (`STATE_MAIL`): vnos e-pošte
- `1` (`STATE_CODE`): Registracija kode za preverjanje e-pošte
- `2` (`STATE_PASSWD`): prijava z geslom za e-pošto
- `10` (`STATE_PHONE`): Vnesite številko mobilnega telefona
- `11` (`STATE_SMS_CODE`): Preverjanje s potrditveno kodo SMS
- `Array` (`OAUTH_HINT`): Seznam vodnikov za prijavo tretjih oseb

## Lastnosti in funkcije kavljev

- `step`: trenutno stanje (število ali niz)
- `mail`: E-pošta
- `phone`: številka mobilnega telefona
- `onSignup(mail, name, password, code)`: Registrirajte povratni klic
- `onResend(mail)`: Ponovno pošlji povratni klic potrditvene kode
- `onLogin(mail, password)`: Povratni klic za prijavo z geslom
- `onSmsSend(phone)`: Pošlji povratni klic s potrditveno kodo SMS
- `onSmsVerify(phone, code)`: povratni klic potrditvene kode s potrditvenim sporočilom SMS
- `onPassport(provider)`: povratni klic za hitro prijavo tretjih oseb
- `onReset(mail)`: povratni klic za ponastavitev pozabljenega gesla