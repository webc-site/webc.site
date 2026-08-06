# Pop-uplaag voor verificatiecode

Pop-upvenster voor verificatiecode op basis van grafische klik.

- Gecombineerd met BoxX om pop-upvensterinteractie en ESC/close-ondersteuning te implementeren
- Klik op doel op basis van achtergrondafbeelding
- Ondersteunt stapsgewijs ongedaan maken en automatisch opnieuw proberen
- gebruik
  * Openbaar netwerk:`https://captcha.webc.pub`
  * Privé-implementatie: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gebruik de demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Na verificatie verzendt u het token naar de backend
  console.log("Verificatie geslaagd Token:", token);
}
```

## waarde retourneren

Het aanroepen van de functie retourneert `Promise<string | undefined>`:
- **Verificatie geslaagd**: Retourneert de met Base64URL gecodeerde (geen opvulling) verificatiecode-tokenreeks.
- **Sluiten of annuleren**: Terug naar `undefined`.

## Verificatieproces en back-end afschrijving

1. **Triggervalidatie**: frontend-aanroepen `Captcha()`.
2. **Diagram ophalen**: `Captcha.js` Start `GET /` naar `captcha_srv` om de aangeklikte afbeelding en ID te krijgen.
3. **Coördinatenverificatie**: nadat de gebruiker de klik heeft voltooid, initieert `Captcha.js` `POST /` naar `captcha_srv` om de coördinaten te verifiëren. Als de verificatie succesvol is, wordt een met Base64URL gecodeerde token geretourneerd.
4. **Back-endverificatie**: de front-end verzendt het token naar de backend van de website en de backend roept `captcha_srv` en `GET /verify/{token}` aan om het token in één keer te verifiëren en te vernietigen.

### Back-end afschrijvingsinstructies

Nadat de backend van de website de `token` heeft ontvangen die door de frontend is ingediend, moet deze een verzoek indienen bij de `captcha_srv` service:

- **Verzoekinterface**:`GET /verify/{token}`
- **Padparameter**: `token` (Base64URL-tekenreeks geretourneerd door de frontend)
- **Retourresultaat**: `1` betekent dat de verificatie is geslaagd en geldig is (wordt automatisch vernietigd); `0` betekent ongeldig of is afgeschreven.