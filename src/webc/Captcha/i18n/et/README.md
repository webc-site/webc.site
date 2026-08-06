# Kinnituskoodi hüpikakna kiht

Graafilisel klõpsul põhinev kinnituskoodi hüpikaken.

- Kombineeritud BoxX-iga, et rakendada hüpikakende interaktsiooni ja ESC/sulgemise tuge
- Klõpsake sihtmärgil taustpildi alusel
- Toetab samm-klõpsu tagasivõtmist ja automaatset uuesti proovimise mehhanismi
- kasutada
  * Avalik võrk:`https://captcha.webc.pub`
  * Privaatne juurutamine: [captcha_srv](https://crates.io/crates/captcha_srv)

## Kasutage demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Pärast kinnitamist esitage luba taustaprogrammi
  console.log("Kinnitus läbis Token:", token);
}
```

## tagastatav väärtus

Funktsiooni kutsumine tagastab `Promise<string | undefined>`:
- **Kinnitus läbitud**: tagastab Base64URL-i kodeeritud (polsterita) kinnituskoodi märgistringi.
- **Sule või Tühista**: naaske lehele `undefined`.

## Kinnitusprotsess ja tagavara mahakandmine

1. **Käivitaja kinnitamine**: kasutajaliidese kõned `Captcha()`.
2. **Hangi diagramm**: `Captcha.js` Käivitage `GET /` kuni `captcha_srv`, et saada klõpsatud pilt ja ID.
3. **Koordinaatide kinnitamine**: kui kasutaja on klõpsamise lõpetanud, käivitab `Captcha.js` `POST /` kuni `captcha_srv` koordinaatide kinnitamiseks. Kui kinnitamine õnnestub, tagastatakse Base64URL-i kodeeringuga Token.
4. **Tagaosa kinnitamine**: kasutajaliides saadab märgi veebisaidi taustaprogrammi ning taustaprogramm kutsub `captcha_srv` ja `GET /verify/{token}` märgi kohe kinnitama ja hävitama.

### Tagaosa mahakandmise juhised

Pärast seda, kui veebisaidi taustaprogramm on kasutajaliidese saadetud `token` kätte saanud, peab ta algatama päringu teenusele `captcha_srv`:

- **Taotle liidest**:`GET /verify/{token}`
- **Tee parameeter**: `token` (esiosa tagastab Base64URL-i stringi)
- **Tagastamise tulemus**: `1` tähendab, et kinnitus on läbitud ja kehtiv (hävitatakse automaatselt); `0` tähendab kehtetut või maha kantud.