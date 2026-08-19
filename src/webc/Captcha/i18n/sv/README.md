# Verifieringskod popup-lager

Verifieringskod popup-fönster baserat på grafiskt klick.

- Kombinerat med BoxX för att implementera popup-fönsterinteraktion och ESC/stäng-stöd
- Klicka på mål baserat på bakgrundsbild
- Stöder steg klick ångra och automatisk försök igen
- använda
  * Offentligt nätverk:`https://captcha.webc.pub`
  * Privat distribution: [captcha_srv](https://crates.io/crates/captcha_srv)

## Använd demon

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Efter verifiering, skicka in token till backend
  console.log("Verifiering godkänd Token:", token);
}
```

## returvärde

Att anropa funktionen returnerar `Promise<string | undefined>`:
- **Verifiering godkänd**: Returnerar den Base64URL-kodade (ingen utfyllnad) verifieringskod Token-sträng.
- **Stäng eller avbryt**: Gå tillbaka till `undefined`.

## Verifieringsprocess och back-end-avskrivning

1. **Triggervalidering**: Frontend-anrop `Captcha()`.
2. **Hämta diagram**: `Captcha.js` Initiera `GET /` till `captcha_srv` för att få klickad bild och ID.
3. **Koordinatverifiering**: När användaren har slutfört klicket `Captcha.js` initierar `POST /` till `captcha_srv` för att verifiera koordinaterna. Om verifieringen lyckas kommer en Base64URL-kodad Token att returneras.
4. **Back-end-verifiering**: Front-end skickar in Token till webbplatsens backend, och backend anropar `captcha_srv` och `GET /verify/{token}` för att verifiera och förstöra Token på en gång.

### Back-end avskrivningsinstruktioner

Efter att webbplatsens backend har tagit emot `token` som skickats av front-end, måste den initiera en begäran till `captcha_srv` tjänsten:

- **Begäran gränssnitt**:`GET /verify/{token}`
- **Path-parameter**: `token` (Base64URL-sträng som returneras av användargränssnittet)
- **Returresultat**: `1` betyder att verifieringen är godkänd och giltig (kommer att förstöras automatiskt); `0` betyder ogiltig eller har avskrivits.