# Popup layer sa verification code

Verification code pop-up window base sa graphic click.

- Gihiusa sa BoxX aron ipatuman ang interaksyon sa pop-up window ug ESC/close nga suporta
- I-klik ang target base sa background nga hulagway
- Nagsuporta sa lakang sa pag-klik sa pag-undo ug awtomatikong pag-usab nga mekanismo
- paggamit
  * Publikong network:`https://captcha.webc.pub`
  * Pribado nga pagdeploy: [captcha_srv](https://crates.io/crates/captcha_srv)

## Gamita ang demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Human sa verification, isumite ang token sa backend
  console.log("Napasa ang Verification Token:", token);
}
```

## ibalik nga bili

Ang pagtawag sa function mobalik `Promise<string | undefined>`:
- **Verification Passed**: Ibalik ang Base64URL nga naka-encode (walay padding) verification code Token string.
- **Sirado o Pagkansela**: Balik sa `undefined`.

## Proseso sa pag-verify ug back-end write-off

1. **Pag-validate sa trigger**: Mga tawag sa Frontend `Captcha()`.
2. **Pagkuha og tsart**: `Captcha.js` Pagsugod `GET /` ngadto sa `captcha_srv` aron makakuha og na-click nga hulagway ug ID.
3. **Pagpamatuod sa Coordinate**: Human makompleto sa user ang pag-klik, `Captcha.js` magsugod `POST /` ngadto sa `captcha_srv` aron mapamatud-an ang mga coordinate. Kung malampuson ang pag-verify, usa ka Base64URL nga naka-encode nga Token ang ibalik.
4. **Back-end verification**: Gisumite sa front-end ang Token sa backend sa website, ug ang backend nagtawag `captcha_srv` ug `GET /verify/{token}` aron pamatud-an ug gub-on dayon ang Token.

### Back-end write-off nga mga instruksyon

Human madawat sa backend sa website ang `token` nga gisumite sa front-end, kinahanglan nga magsugod kini og hangyo sa `captcha_srv` serbisyo:

- **Paghangyo interface**:`GET /verify/{token}`
- **Path parameter**: `token` (Base64URL string gibalik sa atubangan nga tumoy)
- **Return result**: `1` nagpasabot nga ang verification gipasa ug balido (awtomatikong malaglag); `0` nagpasabut nga dili balido o giwagtang.