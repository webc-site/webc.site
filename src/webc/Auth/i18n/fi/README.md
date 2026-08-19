# Todennus kirjautuminen ja rekisteröinti

Integroi sähköpostin ja matkapuhelinnumeron rekisteröinti ja kirjautuminen, vahvistuskoodin vahvistus, salasanan kirjautuminen ja kolmannen osapuolen nopea kirjautuminen.

- Tukee välilehtien vaihtamista sähköpostiosoitteen ja matkapuhelinnumeron välillä
- Kelluvat etiketit nestemäisellä lasilla
- Tukee usean maan suuntanumeron valintaa ja SMS-vahvistuskoodin lähtölaskentaa
- Tukee kolmannen osapuolen OAuth-pikakirjautumista ja sidottuja ohjeita

## Käytä demoa

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Palauta tilakoodi: 1 vahvistuskoodin rekisteröintiä varten, 2 salasanan kirjautumista varten tai palauta kolmannen osapuolen kirjautumistaulukko ["google", "apple"]
  return 2;
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
- `cc`: kansainvälinen suuntanumero (oletus 86)
- `onMail(mail)`: Sähköpostin tarkistussoitto
- `onSignup(mail, name, password)`: Rekisteröi takaisinsoitto
- `onLogin(mail, password)`: Salasanan takaisinsoitto
- `onSmsSend(phone, cc)`: Lähetä SMS-vahvistuskoodi takaisinsoitto
- `onSmsVerify(phone, cc, code)`: Vahvistustekstiviestin vahvistuskoodin takaisinsoitto
- `onPassport(provider)`: Kolmannen osapuolen pikakirjautumisen takaisinsoitto
- `onReset(mail)`: Unohdin salasanan palautuksen