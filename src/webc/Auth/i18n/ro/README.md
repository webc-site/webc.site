# Autentificare autentificare și înregistrare

Integrați înregistrarea și autentificarea numărului de e-mail și a numărului de telefon mobil, verificarea codului de verificare, autentificarea prin parolă și autentificarea rapidă de la terți.

- Acceptă comutarea filelor între adresa de e-mail și numărul de telefon mobil
- Etichete plutitoare cu textură de sticlă lichidă
- Acceptă selecția codului de zonă din mai multe țări și numărătoarea inversă a codului de verificare prin SMS
- Acceptă autentificare rapidă OAuth terță parte și îndrumări legate

## Utilizați demonstrația

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Returnează codul de stare: 1 pentru înregistrarea codului de verificare, 2 pentru autentificarea cu parolă sau returnează matricea de conectare terță parte [„google”, „apple”]
  return 2;
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
- `cc`: cod de apel internațional (implicit 86)
- `onMail(mail)`: e-mail de verificare apel invers
- `onSignup(mail, name, password)`: Înregistrați apel invers
- `onLogin(mail, password)`: apel invers pentru conectare prin parolă
- `onSmsSend(phone, cc)`: Trimiteți codul de verificare prin SMS înapoi
- `onSmsVerify(phone, cc, code)`: codul de verificare prin SMS de verificare apel invers
- `onPassport(provider)`: apel invers de conectare rapidă de la terți
- `onReset(mail)`: am uitat parola de resetare apel invers