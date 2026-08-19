# Verifikatiounscode Popup Layer

Verifikatiounscode Pop-up Fënster baséiert op grafeschen Klick.

- Kombinéiert mat BoxX fir Pop-up Fënster Interaktioun an ESC / Zoumaache Support ëmzesetzen
- Klickt Zil baséiert op Hannergrondbild
- Ënnerstëtzt Schrëtt Klick undoen an automateschen Neiprobemechanismus
- benotzen
  * Ëffentlech Netzwierk:`https://captcha.webc.pub`
  * Privat Deployment: [captcha_srv](https://crates.io/crates/captcha_srv)

## Benotzt d'Demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // No der Verifizéierung, schéckt den Token un de Backend
  console.log("Verifikatioun passéiert Token:", token);
}
```

## Retour Wäert

D'Funktioun ruffen gëtt `Promise<string | undefined>` zréck:
- ** Verifizéierung passéiert **: Gitt de Base64URL kodéierte (keng Polsterung) Verifikatiounscode Token String zréck.
- ** Zoumaachen oder annuléieren**: Zréck op `undefined`.

## Verifikatiounsprozess a Back-End Ofschreiwe

1. **Trigger Validatioun**: Frontend rifft `Captcha()`.
2. **Kritt Diagramm**: `Captcha.js` Start `GET /` op `captcha_srv` fir geklickt Bild an ID ze kréien.
3. **Koordinatverifizéierung**: Nodeems de Benotzer de Klick ofgeschloss huet, initiéiert `Captcha.js` `POST /` op `captcha_srv` fir d'Koordinaten z'iwwerpréiwen. Wann d'Verifizéierung erfollegräich ass, gëtt e Base64URL-kodéiert Token zréck.
4. **Back-End Verifizéierung**: De Frontend stellt den Token un de Websäit Backend of, an de Backend rifft `captcha_srv` an `GET /verify/{token}` fir den Token op eemol z'iwwerpréiwen an ze zerstéieren.

### Back-Enn Ofschreiwe Uweisungen

Nodeems de Backend vun der Websäit den `token` vum Front-End presentéiert kritt, muss en eng Ufro un de `captcha_srv` Service initiéieren:

- **Ufro Interface**:`GET /verify/{token}`
- **Path-Parameter**: `token` (Base64URL-String zréck vum Frontend)
- **Retourresultat**: `1` heescht datt d'Verifizéierung passéiert a gëlteg ass (gëtt automatesch zerstéiert); `0` heescht ongëlteg oder ass ofgeschriwwe ginn.