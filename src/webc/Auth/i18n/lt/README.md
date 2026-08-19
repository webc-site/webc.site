# Autentifikavimo prisijungimas ir registracija

Integruokite el. pašto ir mobiliojo telefono numerių registraciją ir prisijungimą, patvirtinimo kodo patvirtinimą, slaptažodžio prisijungimą ir trečiosios šalies greitą prisijungimą.

- Palaiko skirtukų perjungimą tarp el. pašto adreso ir mobiliojo telefono numerio
- Plaukiojančios etiketės su skysto stiklo tekstūra
- Palaiko kelių šalių vietovės kodo pasirinkimą ir SMS patvirtinimo kodo atgalinį skaičiavimą
- Palaikykite trečiosios šalies „OAuth“ greitą prisijungimą ir susietas gaires

## Naudokite demonstracinę versiją

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Grąžinti būsenos kodą: 1 patvirtinimo kodo registracijai, 2 slaptažodžiui prisijungti arba grąžinti trečiosios šalies prisijungimo masyvą ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Autentifikavimas sėkmingas:", e.detail);
});
</script>
```

## būsenos konstanta

- `0` (`STATE_MAIL`): el. pašto įvestis
- `1` (`STATE_CODE`): el. pašto patvirtinimo kodo registracija
- `2` (`STATE_PASSWD`): el. pašto slaptažodžio prisijungimas
- `10` (`STATE_PHONE`): įveskite mobiliojo telefono numerį
- `11` (`STATE_SMS_CODE`): SMS patvirtinimo kodo patvirtinimas
- `Array` (`OAUTH_HINT`): trečiųjų šalių prisijungimo vadovų sąrašas

## Savybės ir kabliuko funkcijos

- `step`: dabartinė būsena (skaičius arba masyvas)
- `mail`: El. paštas
- `phone`: mobiliojo telefono numeris
- `cc`: tarptautinis rinkimo kodas (numatytasis 86)
- `onMail(mail)`: el. pašto patikrinimo atgalinis skambutis
- `onSignup(mail, name, password)`: užregistruokite atgalinį skambutį
- `onLogin(mail, password)`: Prisijungimo slaptažodžiu atgalinis skambutis
- `onSmsSend(phone, cc)`: siųskite SMS patvirtinimo kodo atgalinį skambutį
- `onSmsVerify(phone, cc, code)`: patvirtinimo SMS patvirtinimo kodo atgalinis skambutis
- `onPassport(provider)`: trečiosios šalies greito prisijungimo atgalinis skambutis
- `onReset(mail)`: Pamiršau slaptažodį iš naujo nustatyti atgalinį skambutį