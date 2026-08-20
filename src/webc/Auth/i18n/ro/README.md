# Autentificare autentificare și înregistrare

Integrați înregistrarea și autentificarea numărului de e-mail și a numărului de telefon mobil, verificarea codului de verificare, autentificarea prin parolă și autentificarea rapidă de la terți.

- Suportă introducerea e-mailului și a numărului de telefon mobil
- Etichete plutitoare cu textură de sticlă lichidă
- Suportă numărătoare inversă a codului de verificare prin SMS
- Acceptă autentificare rapidă OAuth terță parte și îndrumări legate

## Utilizați demonstrația

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
  console.log("Autentificare reușită:", e.detail);
});
</script>
```

## constantă de stare

- `0` (`STATE_MAIL`): introducerea e-mailului
- `1` (`STATE_CODE`): înregistrarea codului de verificare prin e-mail
- `2` (`STATE_PASSWD`): e-mail de conectare prin parolă
- `10` (`STATE_PHONE`): introduceți numărul de telefon mobil
- `11` (`STATE_SMS_CODE`): verificarea codului de verificare prin SMS
- `Array` (`OAUTH_HINT`): listă de ghiduri de conectare terță parte

## Proprietăți și funcții de cârlig

- `step`: starea curentă (număr sau matrice)
- `mail`: e-mail
- `phone`: număr de telefon mobil
- `onSignup(mail, name, password, code)`: Înregistrați apel invers
- `onResend(mail)`: Retrimiteți apelul înapoi cu codul de verificare
- `onLogin(mail, password)`: apel invers pentru conectare prin parolă
- `onSmsSend(phone)`: Trimiteți codul de verificare prin SMS înapoi
- `onSmsVerify(phone, code)`: codul de verificare prin SMS de verificare apel invers
- `onPassport(provider)`: apel invers de conectare rapidă de la terți
- `onReset(mail)`: am uitat parola de resetare apel invers