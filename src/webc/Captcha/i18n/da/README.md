# Bekræftelseskode popup-lag

Bekræftelseskode pop-up vindue baseret på grafisk klik.

- Kombineret med BoxX for at implementere pop-up vindue interaktion og ESC/close support
- Klik på mål baseret på baggrundsbillede
- Understøtter trin-klik fortryd og automatisk genforsøgsmekanisme
- bruge
  * Offentligt netværk:`https://captcha.webc.pub`
  * Privat implementering: [captcha_srv](https://crates.io/crates/captcha_srv)

## Brug demoen

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Efter verificering, indsend tokenet til backend
  console.log("Bekræftelse bestået Token:", token);
}
```

## returværdi

Kaldning af funktionen returnerer `Promise<string | undefined>`:
- **Verifikation bestået**: Returnerer den Base64URL-kodede (ingen udfyldning) bekræftelseskode Token-streng.
- **Luk eller annuller**: Vend tilbage til `undefined`.

## Verifikationsproces og back-end afskrivning

1. **Triggervalidering**: Frontend opkald `Captcha()`.
2. **Hent diagram**: `Captcha.js` Start `GET /` til `captcha_srv` for at få klikket på billede og ID.
3. **Koordinatbekræftelse**: Når brugeren har fuldført klikket, starter `Captcha.js` `POST /` til `captcha_srv` for at bekræfte koordinaterne. Hvis verifikationen lykkes, returneres et Base64URL-kodet Token.
4. **Backend-bekræftelse**: Front-end'en sender tokenet til webstedets backend, og backend'en kalder `captcha_srv` og `GET /verify/{token}` for at bekræfte og ødelægge tokenet på én gang.

### Back-end afskrivningsinstruktioner

Efter at webstedets backend har modtaget `token` indsendt af frontend, skal det indlede en anmodning til `captcha_srv` tjenesten:

- **Anmodningsgrænseflade**:`GET /verify/{token}`
- **Stiparameter**: `token` (Base64URL-streng returneret af frontend)
- **Returresultat**: `1` betyder, at bekræftelsen er bestået og gyldig (vil automatisk blive ødelagt); `0` betyder ugyldig eller er blevet afskrevet.