# Bekreftelseskode popup-lag

Bekreftelseskode popup-vindu basert på grafisk klikk.

- Kombinert med BoxX for å implementere popup-vinduinteraksjon og ESC/lukke-støtte
- Klikk på mål basert på bakgrunnsbilde
- Støtter trinn-klikk angre og automatisk forsøk på nytt
- bruk
  * Offentlig nettverk:`https://captcha.webc.pub`
  * Privat distribusjon: [captcha_srv](https://crates.io/crates/captcha_srv)

## Bruk demoen

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Etter verifisering, send inn tokenet til backend
  console.log("Bekreftelse bestått Token:", token);
}
```

## returverdi

Å kalle funksjonen returnerer `Promise<string | undefined>`:
- **Verifikasjon bestått**: Returnerer den Base64URL-kodede (ingen utfylling) bekreftelseskoden Token-streng.
- **Lukk eller avbryt**: Gå tilbake til `undefined`.

## Verifikasjonsprosess og back-end-avskrivning

1. **Triggervalidering**: Frontend kaller `Captcha()`.
2. **Få diagram**: `Captcha.js` Start `GET /` til `captcha_srv` for å få klikket bilde og ID.
3. **Koordinatverifisering**: Etter at brukeren har fullført klikket, starter `Captcha.js` `POST /` til `captcha_srv` for å bekrefte koordinatene. Hvis verifiseringen er vellykket, vil et Base64URL-kodet Token bli returnert.
4. **Back-end-verifisering**: Front-end sender inn tokenet til nettsidens backend, og backend kaller `captcha_srv` og `GET /verify/{token}` for å bekrefte og ødelegge tokenet med en gang.

### Instruksjoner for avskrivning av baksiden

Etter at nettstedstøtten har mottatt `token` sendt inn av grensesnittet, må den initiere en forespørsel til `captcha_srv`-tjenesten:

- **Forespørselsgrensesnitt**:`GET /verify/{token}`
- **Path parameter**: `token` (Base64URL-streng returnert av grensesnittet)
- **Returresultat**: `1` betyr at bekreftelsen er bestått og gyldig (vil automatisk bli ødelagt); `0` betyr ugyldig eller har blitt avskrevet.