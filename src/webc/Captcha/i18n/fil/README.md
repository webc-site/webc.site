# Popup layer ng verification code

Pop-up window ng verification code batay sa graphic click.

- Pinagsama sa BoxX para ipatupad ang pop-up window interaction at ESC/close support
- I-click ang target batay sa larawan sa background
- Sinusuportahan ang step click undo at awtomatikong retry mechanism
- gamitin
  * Pampublikong network:`https://captcha.webc.pub`
  * Pribadong deployment: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gamitin ang demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Pagkatapos ng pag-verify, isumite ang token sa backend
  console.log("Nakapasa ang Verification Token:", token);
}
```

## ibalik ang halaga

Ang pagtawag sa function ay nagbabalik ng `Promise<string | undefined>`:
- **Verification Passed**: Ibinabalik ang Base64URL na naka-encode (walang padding) verification code Token string.
- **Isara o Kanselahin**: Bumalik sa `undefined`.

## Proseso ng pag-verify at back-end na write-off

1. **Pagpapatunay ng trigger**: Mga tawag sa frontend `Captcha()`.
2. **Kumuha ng tsart**: `Captcha.js` Simulan ang `GET /` sa `captcha_srv` upang makakuha ng na-click na larawan at ID.
3. **Pag-verify ng Coordinate**: Pagkatapos makumpleto ng user ang pag-click, `Captcha.js` ay magsisimula ng `POST /` sa `captcha_srv` upang i-verify ang mga coordinate. Kung matagumpay ang pag-verify, ibabalik ang isang Base64URL na naka-encode na Token.
4. **Back-end na pag-verify**: Ang front-end ay nagsusumite ng Token sa website backend, at ang backend ay tumatawag sa `captcha_srv` at `GET /verify/{token}` upang i-verify at sirain ang Token nang sabay-sabay.

### Mga tagubilin sa back-end na write-off

Pagkatapos matanggap ng backend ng website ang `token` na isinumite ng front-end, kailangan nitong simulan ang isang kahilingan sa serbisyo ng `captcha_srv`:

- **Humiling ng interface**:`GET /verify/{token}`
- **Path parameter**: `token` (Base64URL string na ibinalik sa harap na dulo)
- **Return result**: `1` ay nangangahulugang ang pag-verify ay naipasa at wasto (awtomatikong masisira); Ang ibig sabihin ng `0` ay hindi wasto o tinanggal na.