# Shtresa kërcyese e kodit të verifikimit

Dritarja kërcyese e kodit të verifikimit bazuar në klikimin grafik.

- Kombinuar me BoxX për të zbatuar ndërveprimin e dritareve pop-up dhe mbështetjen ESC/mbyllje
- Kliko objektivin bazuar në imazhin e sfondit
- Mbështet mekanizmin e zhbërjes së klikimeve të hapave dhe riprovës automatike
- përdorni
  * Rrjeti publik:`https://captcha.webc.pub`
  * Vendosja private: [captcha_srv](https://crates.io/crates/captcha_srv)

## Përdorni demonstrimin

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Pas verifikimit, dorëzoni shenjën në backend
  console.log("Verifikimi i kaluar Shenja:", shenjë);
}
```

## vlera e kthimit

Thirrja e funksionit kthen `Promise<string | undefined>`:
- **Verifikimi i kaluar**: Kthen vargun e kodit të verifikimit të koduar në Base64URL (pa mbushje).
- **Mbyll ose Anulo**: Kthehu te `undefined`.

## Procesi i verifikimit dhe fshirja në fund

1. **Vlerësimi i aktivizimit**: Telefonatat në frontend `Captcha()`.
2. **Merr grafikun**: `Captcha.js` Fillo `GET /` te `captcha_srv` për të marrë imazhin dhe ID-në e klikuar.
3. **Verifikimi i koordinatave**: Pasi përdoruesi të përfundojë klikimin, `Captcha.js` fillon `POST /` në `captcha_srv` për të verifikuar koordinatat. Nëse verifikimi është i suksesshëm, do të kthehet një Token i koduar nga Base64URL.
4. **Verifikimi nga ana e pasme**: Pjesa e përparme dorëzon Token-in në bazën e faqes së internetit dhe mbështetja thërret `captcha_srv` dhe `GET /verify/{token}` për të verifikuar dhe shkatërruar Token menjëherë.

### Udhëzime për fshirjen e pasme

Pasi mbështetja e faqes së internetit të marrë `token` të dorëzuar nga pjesa e përparme, duhet të inicojë një kërkesë për shërbimin `captcha_srv`:

- **Kërkoni ndërfaqe**:`GET /verify/{token}`
- **Parametri i rrugës**: `token` (vargu Base64URL u kthye nga pjesa e përparme)
- **Rezultati i kthimit**: `1` do të thotë se verifikimi është kaluar dhe i vlefshëm (do të shkatërrohet automatikisht); `0` do të thotë e pavlefshme ose është shlyer.