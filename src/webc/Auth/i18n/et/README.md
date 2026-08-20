# Autentimise sisselogimine ja registreerimine

Integreerige e-posti ja mobiiltelefoni numbri registreerimine ja sisselogimine, kinnituskoodi kinnitamine, parooliga sisselogimine ja kolmanda osapoole kiire sisselogimine.

- Toetage e-posti ja mobiiltelefoni numbri sisestamist
- Vedelklaasi tekstuuriga ujuvad sildid
- Toetage SMS-i kinnituskoodi loendurit
- Toetage kolmanda osapoole OAuthi kiiret sisselogimist ja seotud juhiseid

## Kasutage demo

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
  console.log("Autentimine õnnestus:", e.detail);
});
</script>
```

## staatuse konstant

- `0` (`STATE_MAIL`): e-posti sisestus
- `1` (`STATE_CODE`): e-posti kinnituskoodi registreerimine
- `2` (`STATE_PASSWD`): e-posti parooli sisselogimine
- `10` (`STATE_PHONE`): sisestage mobiiltelefoni number
- `11` (`STATE_SMS_CODE`): SMS-i kinnituskoodi kinnitus
- `Array` (`OAUTH_HINT`): kolmanda osapoole sisselogimisjuhiste loend

## Omadused ja konksu funktsioonid

- `step`: praegune olek (arv või massiiv)
- `mail`: e-post
- `phone`: mobiiltelefoni number
- `onSignup(mail, name, password, code)`: registreerige tagasihelistamine
- `onResend(mail)`: saatke kinnituskoodi tagasihelistamine uuesti
- `onLogin(mail, password)`: parooliga sisselogimise tagasihelistamine
- `onSmsSend(phone)`: saatke SMS-i kinnituskoodi tagasihelistamine
- `onSmsVerify(phone, code)`: SMS-i kinnituskoodi tagasihelistamine
- `onPassport(provider)`: kolmanda osapoole kiire sisselogimise tagasihelistamine
- `onReset(mail)`: unustasin parooli lähtestamise tagasihelistamise