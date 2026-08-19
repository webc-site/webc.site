# Pojavni sloj kode za preverjanje

Pojavno okno kode za preverjanje, ki temelji na slikovnem kliku.

- V kombinaciji s BoxX za implementacijo interakcije s pojavnimi okni in podporo ESC/close
- Kliknite cilj na podlagi slike ozadja
- Podpira razveljavitev postopnega klika in mehanizem samodejnega ponovnega poskusa
- uporaba
  * Javno omrežje:`https://captcha.webc.pub`
  * Zasebna uvedba: [captcha_srv](https://crates.io/crates/captcha_srv)

## Uporabite demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Po preverjanju pošljite žeton v zaledje
  console.log("Preverjanje opravljeno žeton:", žeton);
}
```

## povratna vrednost

Klic funkcije vrne `Promise<string | undefined>`:
- **Preverjanje opravljeno**: vrne niz žetona potrditvene kode Base64URL (brez oblazinjenja).
- **Zapri ali Prekliči**: Vrnitev na `undefined`.

## Postopek preverjanja in zaledni odpis

1. **Preverjanje sprožitve**: Frontend klici `Captcha()`.
2. **Pridobite grafikon**: `Captcha.js` Zaženite `GET /` do `captcha_srv`, da dobite kliknjeno sliko in ID.
3. **Preverjanje koordinat**: Ko uporabnik dokonča klik, `Captcha.js` sproži `POST /` do `captcha_srv` za preverjanje koordinat. Če je preverjanje uspešno, bo vrnjen žeton, kodiran z Base64URL.
4. **Zaledno preverjanje**: Sprednji del predloži žeton zaledju spletnega mesta, zaledje pa pokliče `captcha_srv` in `GET /verify/{token}`, da preverita in takoj uničita žeton.

### Navodila za zadnji odpis

Ko zaledje spletnega mesta prejme `token`, ki ga je poslal sprednji del, mora sprožiti zahtevo za storitev `captcha_srv`:

- **Zahtevaj vmesnik**:`GET /verify/{token}`
- **Parameter poti**: `token` (niz Base64URL, ki ga vrne sprednji del)
- **Vrni rezultat**: `1` pomeni, da je preverjanje opravljeno in veljavno (bo samodejno uničeno); `0` pomeni neveljavno ali je bilo odpisano.