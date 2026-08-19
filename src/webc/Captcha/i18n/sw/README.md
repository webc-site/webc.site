# Safu ibukizi ya msimbo wa uthibitishaji

Dirisha ibukizi la msimbo wa uthibitishaji kulingana na kubofya kwa picha.

- Imeunganishwa na BoxX ili kutekeleza mwingiliano wa dirisha ibukizi na usaidizi wa ESC/kufunga
- Bofya lengo kulingana na picha ya usuli
- Inaauni hatua ya kubofya kutendua na ujaribu tena utaratibu otomatiki
- kutumia
  * Mtandao wa umma:`https://captcha.webc.pub`
  * Usambazaji wa kibinafsi: [captcha_srv](https://crates.io/crates/captcha_srv)

## Tumia onyesho

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Baada ya uthibitishaji, wasilisha ishara kwenye sehemu ya nyuma
  console.log("Uthibitishaji ulipitisha Ishara:", ishara);
}
```

## thamani ya kurudi

Kupigia simu kitendakazi hurejesha `Promise<string | undefined>`:
- **Uthibitishaji Umepitishwa**: Hurejesha msimbo wa uthibitishaji wa Base64URL (hakuna padding) Mfuatano wa Tokeni.
- **Funga au Ghairi**: Rudi kwa `undefined`.

## Mchakato wa uthibitishaji na ufutaji wa mwisho wa nyuma

1. **Anzisha uthibitishaji**: Simu za mazingira ya mbele `Captcha()`.
2. **Pata chati**: `Captcha.js` Anzisha `GET /` hadi `captcha_srv` ili kupata picha na kitambulisho kilichobofya.
3. **Kuratibu uthibitishaji**: Baada ya mtumiaji kukamilisha kubofya, `Captcha.js` huanzisha `POST /` hadi `captcha_srv` ili kuthibitisha viwianishi. Uthibitishaji ukifaulu, Tokeni iliyosimbwa ya Base64URL itarejeshwa.
4. **Uthibitishaji wa nyuma**: Upande wa mbele huwasilisha Tokeni kwenye mandharinyuma ya tovuti, na upande wa nyuma huita `captcha_srv` na `GET /verify/{token}` ili kuthibitisha na kuharibu Tokeni mara moja.

### Maelekezo ya kuandika nyuma ya nyuma

Baada ya mandharinyuma ya tovuti kupokea `token` iliyowasilishwa na sehemu ya mbele, inahitaji kuanzisha ombi kwa huduma ya `captcha_srv`:

- **Omba kiolesura**:`GET /verify/{token}`
- **Kigezo cha njia**: `token` (Mfuatano wa Base64URL umerejeshwa kwa ncha ya mbele)
- **Rejesha matokeo**: `1` inamaanisha uthibitishaji umepitishwa na halali (utaharibiwa kiotomatiki); `0` ina maana batili au imefutwa.