# Autentizační přihlášení a registrace

Integrujte registraci a přihlášení e-mailu a čísla mobilního telefonu, ověření ověřovacím kódem, přihlášení pomocí hesla a rychlé přihlášení třetích stran.

- Podporuje přepínání karet mezi e-mailovou adresou a číslem mobilního telefonu
- Plovoucí štítky s texturou tekutého skla
- Podporuje výběr předvolby pro více zemí a odpočítávání SMS ověřovacího kódu
- Podporujte rychlé přihlášení OAuth třetích stran a vázané pokyny

## Použijte demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vraťte stavový kód: 1 pro registraci ověřovacího kódu, 2 pro přihlášení pomocí hesla nebo vraťte pole přihlášení třetí strany ["google", "apple"]
  return 2;
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
- `cc`: mezinárodní předvolba (výchozí 86)
- `onMail(mail)`: Zpětné zavolání pro kontrolu e-mailu
- `onSignup(mail, name, password)`: Zaregistrujte zpětné volání
- `onLogin(mail, password)`: Zpětné volání pro přihlášení k heslu
- `onSmsSend(phone, cc)`: Odeslat zpětné volání s ověřovacím kódem SMS
- `onSmsVerify(phone, cc, code)`: Zpětné volání s ověřovacím SMS ověřovacím kódem
- `onPassport(provider)`: Zpětné volání pro rychlé přihlášení třetí strany
- `onReset(mail)`: Zpětné volání pro resetování zapomenutého hesla