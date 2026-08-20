# Autentifikavimo prisijungimas ir registracija

Integruokite el. pašto ir mobiliojo telefono numerių registraciją ir prisijungimą, patvirtinimo kodo patvirtinimą, slaptažodžio prisijungimą ir trečiosios šalies greitą prisijungimą.

- Palaikykite el. pašto ir mobiliojo telefono numerio įvedimą
- Plaukiojančios etiketės su skysto stiklo tekstūra
- Palaikykite SMS patvirtinimo kodo atgalinį skaičiavimą
- Palaikykite trečiosios šalies „OAuth“ greitą prisijungimą ir susietas gaires

## Naudokite demonstracinę versiją

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
- `onSignup(mail, name, password, code)`: užregistruokite atgalinį skambutį
- `onResend(mail)`: iš naujo išsiųsti patvirtinimo kodo atgalinį skambutį
- `onLogin(mail, password)`: Prisijungimo slaptažodžiu atgalinis skambutis
- `onSmsSend(phone)`: Siųsti SMS patvirtinimo kodo atgalinį skambutį
- `onSmsVerify(phone, code)`: patvirtinimo SMS patvirtinimo kodo atgalinis skambutis
- `onPassport(provider)`: trečiosios šalies greito prisijungimo atgalinis skambutis
- `onReset(mail)`: Pamiršau slaptažodį iš naujo nustatyti atgalinį skambutį