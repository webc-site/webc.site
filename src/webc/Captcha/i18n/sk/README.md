# Vyskakovacia vrstva overovacieho kódu

Vyskakovacie okno s overovacím kódom založené na grafickom kliknutí.

- V kombinácii s BoxX implementuje interakciu s vyskakovacím oknom a podporu ESC/zatvárania
- Cieľ kliknutia na základe obrázka na pozadí
- Podporuje krokové kliknutie späť a mechanizmus automatického opakovania
- použitie
  * Verejná sieť:`https://captcha.webc.pub`
  * Súkromné ​​nasadenie: [captcha_srv](https://crates.io/crates/captcha_srv)

## Použite demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Po overení odošlite token do backendu
  console.log("Overenie prešiel tokenom:", token);
}
```

## návratová hodnota

Volanie funkcie vráti `Promise<string | undefined>`:
- **Verification Passed**: Vráti reťazec tokenu overovacieho kódu kódovaného Base64URL (bez výplne).
- **Zavrieť alebo zrušiť**: Vráťte sa na `undefined`.

## Proces overovania a záverečný odpis

1. **Overenie spúšťača**: frontend volania `Captcha()`.
2. **Získať graf**: `Captcha.js` Spustite `GET /` až `captcha_srv`, aby ste získali obrázok a ID, na ktoré sa kliklo.
3. **Overenie súradníc**: Keď používateľ dokončí kliknutie, `Captcha.js` spustí `POST /` až `captcha_srv` na overenie súradníc. Ak je overenie úspešné, vráti sa kódovaný token Base64URL.
4. **Verifikácia na strane servera**: Klientske rozhranie odošle token na server backend a koncové rozhranie zavolá `captcha_srv` a `GET /verify/{token}`, aby overilo a zničilo token naraz.

### Pokyny na spätný odpis

Keď koncová časť webovej stránky prijme `token` odoslanú klientskym rozhraním, musí iniciovať požiadavku na službu `captcha_srv`:

- **Rozhranie žiadosti**:`GET /verify/{token}`
- **Parameter cesty**: `token` (reťazec Base64URL vrátený klientskym rozhraním)
- **Vrátiť výsledok**: `1` znamená, že overenie bolo úspešné a platné (bude automaticky zničené); `0` znamená neplatný alebo bol odpísaný.