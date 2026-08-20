# Uwierzytelnianie logowania i rejestracji

Zintegruj rejestrację i logowanie za pomocą poczty elektronicznej i numeru telefonu komórkowego, weryfikację kodu weryfikacyjnego, logowanie hasłem i szybkie logowanie przez strony trzecie.

- Obsługa wprowadzania adresu e-mail i numeru telefonu komórkowego
- Pływające etykiety z teksturą płynnego szkła
- Obsługa odliczania kodu weryfikacyjnego SMS
- Obsługa szybkiego logowania OAuth innych firm i powiązanych wskazówek

## Skorzystaj z wersji demonstracyjnej

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
  console.log("Uwierzytelnienie powiodło się:", e.detail);
});
</script>
```

## stan stały

- `0` (`STATE_MAIL`): Wprowadzanie wiadomości e-mail
- `1` (`STATE_CODE`): Rejestracja kodu weryfikacyjnego e-mailem
- `2` (`STATE_PASSWD`): Hasło e-mail do logowania
- `10` (`STATE_PHONE`): Wprowadź numer telefonu komórkowego
- `11` (`STATE_SMS_CODE`): Weryfikacja kodu weryfikacyjnego SMS
- `Array` (`OAUTH_HINT`): Lista przewodników logowania innych firm

## Właściwości i funkcje haka

- `step`: bieżący stan (liczba lub tablica)
- `mail`: E-mail
- `phone`: numer telefonu komórkowego
- `onSignup(mail, name, password, code)`: Zarejestruj wywołanie zwrotne
- `onResend(mail)`: Wyślij ponownie wywołanie zwrotne kodu weryfikacyjnego
- `onLogin(mail, password)`: Wywołanie zwrotne logowania hasłem
- `onSmsSend(phone)`: Wyślij SMS-a z kodem zwrotnym weryfikacyjnym
- `onSmsVerify(phone, code)`: Weryfikacyjny SMS-owy wywołanie zwrotne z kodem weryfikacyjnym
- `onPassport(provider)`: Funkcja zwrotna szybkiego logowania innej firmy
- `onReset(mail)`: Zapomniałem wywołania zwrotnego dotyczącego resetowania hasła