# Patvirtinimo kodo iššokantis sluoksnis

Patvirtinimo kodo iššokantis langas, pagrįstas grafiniu paspaudimu.

- Kartu su BoxX, kad būtų galima įdiegti iššokančiųjų langų sąveiką ir ESC / uždaryti palaikymą
- Spustelėkite tikslą pagal fono paveikslėlį
- Palaiko žingsnio paspaudimo anuliavimo ir automatinio pakartotinio bandymo mechanizmą
- naudoti
  * Viešasis tinklas:`https://captcha.webc.pub`
  * Privatus diegimas: [captcha_srv](https://crates.io/crates/captcha_srv)

## Naudokite demonstracinę versiją

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Patikrinę pateikite prieigos raktą užpakalinei programai
  console.log("Patvirtinimas perduotas Tokenas:", prieigos raktas);
}
```

## grąžinti vertę

Funkcijos iškvietimas grąžina `Promise<string | undefined>`:
- **Patvirtinimas atliktas**: grąžina Base64URL užkoduotą (be užpildymo) patvirtinimo kodo prieigos rakto eilutę.
- **Uždaryti arba atšaukti**: grįžti į `undefined`.

## Patvirtinimo procesas ir nurašymas atgal

1. **Suaktyvinimo patvirtinimas**: Frontend skambučiai `Captcha()`.
2. **Gauti diagramą**: `Captcha.js` inicijuokite `GET /` į `captcha_srv`, kad gautumėte spustelėjusį vaizdą ir ID.
3. **Koordinatės patvirtinimas**: vartotojui spustelėjus, `Captcha.js` pradeda nuo `POST /` iki `captcha_srv` koordinatėms patvirtinti. Jei patvirtinimas bus sėkmingas, bus grąžintas Base64URL užkoduotas prieigos raktas.
4. **Galinis patvirtinimas**: sąsaja pateikia prieigos raktą į svetainės vidinę sistemą, o užpakalinė programa iškviečia `captcha_srv` ir `GET /verify/{token}`, kad patvirtintų ir iš karto sunaikintų prieigos raktą.

### Galinės nurašymo instrukcijos

Kai svetainės užpakalinė programa gauna `token` sąsajos pateiktą informaciją, ji turi inicijuoti užklausą `captcha_srv` paslaugai:

- **Užklausos sąsaja**:`GET /verify/{token}`
- **Kelio parametras**: `token` (Base64URL eilutė, kurią grąžina priekinė dalis)
- **Grąžinimo rezultatas**: `1` reiškia, kad patvirtinimas atliktas ir galioja (bus automatiškai sunaikintas); `0` reiškia netinkamą arba nurašytą.