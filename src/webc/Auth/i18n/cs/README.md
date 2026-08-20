# Autentizační přihlášení a registrace

Integrujte registraci a přihlášení e-mailu a čísla mobilního telefonu, ověření ověřovacím kódem, přihlášení pomocí hesla a rychlé přihlášení třetích stran.

- Podpora zadávání e-mailu a čísla mobilního telefonu
- Plovoucí štítky s texturou tekutého skla
- Podpora SMS ověřovacího kódu odpočítávání
- Podporujte rychlé přihlášení OAuth třetích stran a vázané pokyny

## Použijte demo

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
  console.log("Autentizace úspěšná:", e.detail);
});
</script>
```

## stavová konstanta

- `0` (`STATE_MAIL`): Zadání e-mailu
- `1` (`STATE_CODE`): E-mailová registrace ověřovacího kódu
- `2` (`STATE_PASSWD`): Heslo pro přihlášení k e-mailu
- `10` (`STATE_PHONE`): Zadejte číslo mobilního telefonu
- `11` (`STATE_SMS_CODE`): Ověření pomocí SMS ověřovacího kódu
- `Array` (`OAUTH_HINT`): Seznam průvodců přihlášením třetí strany

## Vlastnosti a funkce háku

- `step`: aktuální stav (číslo nebo pole)
- `mail`: E-mail
- `phone`: číslo mobilního telefonu
- `onSignup(mail, name, password, code)`: Zaregistrujte zpětné volání
- `onResend(mail)`: Znovu odeslat zpětné volání ověřovacího kódu
- `onLogin(mail, password)`: Zpětné volání pro přihlášení k heslu
- `onSmsSend(phone)`: Odeslat zpětné volání s ověřovacím kódem SMS
- `onSmsVerify(phone, code)`: Zpětné volání s ověřovacím SMS ověřovacím kódem
- `onPassport(provider)`: Zpětné volání pro rychlé přihlášení třetí strany
- `onReset(mail)`: Zpětné volání pro resetování zapomenutého hesla