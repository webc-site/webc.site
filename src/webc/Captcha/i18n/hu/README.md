# Ellenőrző kód előugró réteg

Grafikus kattintáson alapuló ellenőrző kód felugró ablak.

- A BoxX-szel kombinálva előugró ablak interakció és ESC/bezárás támogatása valósítható meg
- Kattintson a célpontra a háttérkép alapján
- Támogatja a lépéses kattintás visszavonását és az automatikus újrapróbálkozási mechanizmust
- használat
  * Nyilvános hálózat:`https://captcha.webc.pub`
  * Privát telepítés: [captcha_srv](https://crates.io/crates/captcha_srv)

## Használd a demót

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Az ellenőrzés után küldje el a tokent a háttérrendszernek
  console.log("Ellenőrzés sikeres Token:", token);
}
```

## visszatérési értéket

A függvény meghívása a következőt adja vissza: `Promise<string | undefined>`:
- **Ellenőrzés sikeres**: Visszaadja a Base64URL kódolású (kitöltés nélkül) ellenőrző kódot, Token karakterláncot.
- **Bezárás vagy Mégse**: Visszatérés a következőhöz: `undefined`.

## Ellenőrzési folyamat és háttér-leírás

1. **Indítási szabály érvényesítése**: Előtér-hívások `Captcha()`.
2. **Diagram lekérése**: `Captcha.js` Indítsa el a `GET /`-t a `captcha_srv`-ra, hogy megkapja a kattintott képet és azonosítót.
3. **Koordináta ellenőrzése**: Miután a felhasználó befejezte a kattintást, `Captcha.js` elindítja a `POST /` és `captcha_srv` közötti lépéseket a koordináták ellenőrzéséhez. Ha az ellenőrzés sikeres, egy Base64URL kódolású Token kerül visszaadásra.
4. **Háttérellenőrzés**: Az előtér elküldi a tokent a webhely háttérrendszerének, a háttér pedig meghívja a `captcha_srv` és `GET /verify/{token}` parancsot, hogy egyszerre ellenőrizze és semmisítse meg a tokent.

### Háttér-leírási utasítások

Miután a webhely háttérrendszere megkapta a kezelőfelület által elküldött `token`-t, kérést kell kezdeményeznie a `captcha_srv` szolgáltatáshoz:

- **Kérés felület**:`GET /verify/{token}`
- **Elérési út paraméter**: `token` (A kezelőfelület által visszaadott Base64URL karakterlánc)
- **Az eredmény visszaküldése**: `1` azt jelenti, hogy az ellenőrzés sikeres és érvényes (automatikusan megsemmisül); `0` azt jelenti, hogy érvénytelen vagy le lett írva.