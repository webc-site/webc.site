# Egiaztapen-kodea laster-geruza

Egiaztapen-kodea pop-up leihoa klik grafikoan oinarrituta.

- BoxX-ekin konbinatuta pop-up leiho interakzioa eta ESC / itxi laguntza ezartzeko
- Egin klik helburuan atzeko planoko irudian oinarrituta
- Urrats klik desegin eta berriro saiatzeko mekanismo automatikoa onartzen du
- erabili
  * Sare publikoa:`https://captcha.webc.pub`
  * Inplementazio pribatua: [captcha_srv](https://crates.io/crates/captcha_srv)

## Erabili demoa

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Egiaztatu ondoren, bidali tokena backend-era
  console.log("Egiaztapena gainditutako tokena:", tokena);
}
```

## itzultzeko balioa

Funtzioari deitzeak `Promise<string | undefined>` itzultzen du:
- **Egiaztapena gaindituta**: Base64URL kodetutako (betegarririk gabe) egiaztapen-kodea Token katea itzultzen du.
- **Itxi edo Utzi**: Itzuli `undefined` helbidera.

## Egiaztapen-prozesua eta back-end baliogabetzea

1. **Trigger baliozkotzea**: frontend-ek `Captcha()` deitzen du.
2. **Lortu diagrama**: `Captcha.js` Hasi `GET /`ra `captcha_srv` klikatutako irudia eta IDa lortzeko.
3. **Koordenatuen egiaztapena**: erabiltzaileak klika egin ondoren, `Captcha.js` `POST /` abiarazten du `captcha_srv` koordenatuak egiaztatzeko. Egiaztapena arrakastatsua bada, Base64URL kodetutako Token bat itzuliko da.
4. **Backend egiaztapena**: frontend-ak tokena webgunearen backend-era bidaltzen du, eta backend-ak `captcha_srv` eta `GET /verify/{token}` deitzen die Tokena aldi berean egiaztatzeko eta suntsitzeko.

### Backend idazteko argibideak

Webgunearen backendak frontend-ak bidalitako `token` jaso ondoren, eskaera bat hasi behar du `captcha_srv` zerbitzura:

- **Eskatu interfazea**:`GET /verify/{token}`
- **Bide-parametroa**: `token` (Base64URL katea frontend-ak itzultzen du)
- **Itzuli emaitza**: `1` egiaztapena gainditu eta baliozkoa dela esan nahi du (automatikoki suntsitu egingo da); `0` baliogabea edo kendu egin dela esan nahi du.