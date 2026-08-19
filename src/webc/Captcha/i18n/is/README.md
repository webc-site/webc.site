# Staðfestingarkóða sprettigluggalag

Staðfestingarkóði sprettigluggi byggt á myndrænum smelli.

- Samsett með BoxX til að útfæra sprettigluggasamskipti og ESC/loka stuðning
- Smelltu á miða byggt á bakgrunnsmynd
- Styður skrefsmella afturkalla og sjálfvirka endurreynslubúnað
- nota
  * Almennt net:`https://captcha.webc.pub`
  * Einka dreifing: [captcha_srv](https://crates.io/crates/captcha_srv)

## Notaðu kynninguna

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Eftir staðfestingu, sendu táknið til bakendans
  console.log("Staðfesting samþykkt Token:", token);
}
```

## skilaverðmæti

Að kalla fallið skilar `Promise<string | undefined>`:
- **Staðfesting samþykkt**: Skilar Base64URL kóðaða (engin fyllingu) staðfestingarkóða Token streng.
- **Loka eða Hætta við**: Fara aftur í `undefined`.

## Staðfestingarferli og bakhlið afskrift

1. **Kveikja staðfesting**: Framendasímtöl `Captcha()`.
2. **Fáðu töflu**: `Captcha.js` Byrjaðu `GET /` á `captcha_srv` til að fá smellt mynd og auðkenni.
3. **Sannprófun**: Eftir að notandinn hefur smellt á `Captcha.js` byrjar `POST /` á `captcha_srv` til að staðfesta hnitin. Ef staðfestingin heppnast verður Base64URL kóðuðu tákni skilað.
4. **Staðfesting bakenda**: Framhliðin sendir auðkennið til bakendans vefsíðunnar og bakendinn kallar á `captcha_srv` og `GET /verify/{token}` til að sannreyna og eyðileggja táknið í einu.

### Leiðbeiningar um afskriftir á bakhlið

Eftir að bakendi vefsíðunnar hefur móttekið `token` sem framhliðin hefur sent inn þarf hann að hefja beiðni til `captcha_srv` þjónustunnar:

- **Biðja um tengi**:`GET /verify/{token}`
- **Path færibreyta**: `token` (Base64URL strengur skilað af framendanum)
- **Niðurstaða skila**: `1` þýðir að staðfestingin er samþykkt og gild (verður sjálfkrafa eytt); `0` þýðir ógilt eða hefur verið afskrifað.