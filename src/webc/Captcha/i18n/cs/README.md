# Vyskakovací vrstva ověřovacího kódu

Vyskakovací okno s ověřovacím kódem založené na grafickém kliknutí.

- V kombinaci s BoxX implementuje interakci s vyskakovacím oknem a podporu ESC/zavřít
- Klikněte na cíl podle obrázku na pozadí
- Podporuje krokové kliknutí zpět a mechanismus automatického opakování
- použití
  * Veřejná síť:`https://captcha.webc.pub`
  * Soukromé nasazení: [captcha_srv](https://crates.io/crates/captcha_srv)

## Použijte demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Po ověření odešlete token do backendu
  console.log("Token prošel ověřením:", ​​token);
}
```

## návratová hodnota

Volání funkce vrátí `Promise<string | undefined>`:
- **Verification Passed**: Vrátí řetězec tokenu ověřovacího kódu zakódovaného Base64URL (bez odsazení).
- **Zavřít nebo zrušit**: Návrat na `undefined`.

## Ověřovací proces a back-end odpis

1. **Ověření spouštěče**: Frontend volání `Captcha()`.
2. **Získat graf**: `Captcha.js` Spusťte `GET /` až `captcha_srv`, abyste získali obrázek a ID, na který jste klikli.
3. **Ověření souřadnic**: Jakmile uživatel dokončí kliknutí, `Captcha.js` zahájí `POST /` až `captcha_srv`, aby ověřil souřadnice. Pokud je ověření úspěšné, bude vrácen token zakódovaný Base64URL.
4. **Ověření back-endem**: Front-end odešle token backendu webu a backend zavolá `captcha_srv` a `GET /verify/{token}`, aby token ověřil a zničil najednou.

### Pokyny pro závěrečný odpis

Poté, co backend webu obdrží `token` odeslaný front-endem, musí iniciovat požadavek na službu `captcha_srv`:

- **Rozhraní žádosti**:`GET /verify/{token}`
- **Parametr cesty**: `token` (řetězec Base64URL vrácený rozhraním frontend)
- **Vrátit výsledek**: `1` znamená, že ověření proběhlo úspěšně a je platné (bude automaticky zničeno); `0` znamená neplatný nebo byl odepsán.