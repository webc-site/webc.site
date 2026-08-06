# Verifikasiekode-opspringlaag

Verifikasiekode-opspringvenster gebaseer op grafiese klik.

- Gekombineer met BoxX om pop-up venster interaksie en ESC/close ondersteuning te implementeer
- Klik teiken gebaseer op agtergrondprent
- Ondersteun stap-klik ongedaan maak en outomatiese herprobeermeganisme
- gebruik
  * Publieke netwerk:`https://captcha.webc.pub`
  * Privaat ontplooiing: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gebruik die demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Na verifikasie, dien die teken na die agterkant in
  console.log("Verifikasie geslaag Token:", token);
}
```

## terugkeer waarde

Deur die funksie te roep, gee u `Promise<string | undefined>`:
- **Verifikasie geslaag**: Wys die Base64URL-gekodeerde (geen opvulling) verifikasiekode Tokenstring.
- **Sluit of kanselleer**: Keer terug na `undefined`.

## Verifikasieproses en agterafskryf

1. **Snellerbekragtiging**: Frontend-oproepe `Captcha()`.
2. **Kry grafiek**: `Captcha.js` Begin `GET /` na `captcha_srv` om geklikte prent en ID te kry.
3. **Koördineerverifikasie**: Nadat die gebruiker die klik voltooi het, begin `Captcha.js` `POST /` na `captcha_srv` om die koördinate te verifieer. As die verifikasie suksesvol is, sal 'n Base64URL-gekodeerde Token teruggestuur word.
4. **Agter-end-verifikasie**: Die voorkant dien die teken aan die webwerf-agterkant in, en die agterkant roep `captcha_srv` en `GET /verify/{token}` om die teken tegelyk te verifieer en te vernietig.

### Agterkant afskryf instruksies

Nadat die webwerf-agterkant die `token` wat deur die voorkant ingedien is ontvang het, moet dit 'n versoek na die `captcha_srv`-diens begin:

- **Versoek-koppelvlak**:`GET /verify/{token}`
- **Padparameter**: `token` (Base64URL-string teruggestuur deur die voorkant)
- **Terugstuurresultaat**: `1` beteken die verifikasie is geslaag en geldig (sal outomaties vernietig word); `0` beteken ongeldig of is afgeskryf.