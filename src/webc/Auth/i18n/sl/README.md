# Prijava in registracija za preverjanje pristnosti

Integrirajte registracijo in prijavo na e-pošto in številko mobilnega telefona, preverjanje potrditvene kode, prijavo z geslom in hitro prijavo tretjih oseb.

- Podpira preklapljanje med zavihki med e-poštnim naslovom in številko mobilnega telefona
- Plavajoče etikete s teksturo tekočega stekla
- Podpira izbiro območne kode več držav in odštevanje kode za preverjanje SMS
- Podpora za hitro prijavo OAuth tretjih oseb in vezana navodila

## Uporabite demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vrni statusno kodo: 1 za registracijo potrditvene kode, 2 za prijavo z geslom ali vrni polje za prijavo tretjih oseb ["google", "apple"]
  return 2;
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
- `cc`: mednarodna klicna koda (privzeto 86)
- `onMail(mail)`: povratni klic za preverjanje e-pošte
- `onSignup(mail, name, password)`: Registrirajte povratni klic
- `onLogin(mail, password)`: Povratni klic za prijavo z geslom
- `onSmsSend(phone, cc)`: Pošlji povratni klic s potrditveno kodo SMS
- `onSmsVerify(phone, cc, code)`: povratni klic potrditvene kode s potrditvenim sporočilom SMS
- `onPassport(provider)`: povratni klic za hitro prijavo tretjih oseb
- `onReset(mail)`: povratni klic za ponastavitev pozabljenega gesla