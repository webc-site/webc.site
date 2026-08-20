# Todennus kirjautuminen ja rekisteröinti

Integroi sähköpostin ja matkapuhelinnumeron rekisteröinti ja kirjautuminen, vahvistuskoodin vahvistus, salasanan kirjautuminen ja kolmannen osapuolen nopea kirjautuminen.

- Tuki sähköpostin ja matkapuhelinnumeron syöttöön
- Kelluvat etiketit nestemäisellä lasilla
- Tukea SMS-vahvistuskoodin lähtölaskentaa
- Tukee kolmannen osapuolen OAuth-pikakirjautumista ja sidottuja ohjeita

## Käytä demoa

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
  console.log("Todennus onnistui:", e.detail);
});
</script>
```

## tilavakio

- `0` (`STATE_MAIL`): Sähköpostin syöttö
- `1` (`STATE_CODE`): Sähköpostin vahvistuskoodin rekisteröinti
- `2` (`STATE_PASSWD`): Sähköpostin salasana kirjautuminen
- `10` (`STATE_PHONE`): Anna matkapuhelinnumero
- `11` (`STATE_SMS_CODE`): SMS-vahvistuskoodin vahvistus
- `Array` (`OAUTH_HINT`): Kolmannen osapuolen kirjautumisopasluettelo

## Ominaisuudet ja koukkutoiminnot

- `step`: nykyinen tila (numero tai matriisi)
- `mail`: Sähköposti
- `phone`: matkapuhelinnumero
- `onSignup(mail, name, password, code)`: Rekisteröi takaisinsoitto
- `onResend(mail)`: Lähetä vahvistuskoodin takaisinsoitto uudelleen
- `onLogin(mail, password)`: Salasanan takaisinsoitto
- `onSmsSend(phone)`: Lähetä SMS-vahvistuskoodi takaisinsoitto
- `onSmsVerify(phone, code)`: Vahvistustekstiviestin vahvistuskoodin takaisinsoitto
- `onPassport(provider)`: Kolmannen osapuolen pikakirjautumisen takaisinsoitto
- `onReset(mail)`: Unohdin salasanan palautuksen