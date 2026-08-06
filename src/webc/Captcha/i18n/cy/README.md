# Haen naid cod dilysu

Ffenestr naid cod dilysu yn seiliedig ar glic graffeg.

- Wedi'i gyfuno â BoxX i weithredu rhyngweithiad ffenestr naid a chefnogaeth ESC / cau
- Cliciwch targed yn seiliedig ar ddelwedd gefndir
- Cefnogi dadwneud clic cam a mecanwaith ailgynnig awtomatig
- defnydd
  * Rhwydwaith cyhoeddus: `https://captcha.webc.pub`
  * Defnydd preifat: [captcha_srv] (/0)

## Defnyddiwch y demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Ar ôl dilysu, cyflwynwch y tocyn i'r pen ôl
  console.log ("Dilysiad wedi'i basio Tocyn:", tocyn);
}
```

## gwerth dychwelyd

Mae galw'r swyddogaeth yn dychwelyd `Promise<string | undefined>`:
- ** Dilysiad Wedi'i Basio**: Yn dychwelyd y llinyn Token cod dilysu wedi'i amgodio Base64URL (dim padin).
- **Cau neu Canslo**: Dychwelyd i `undefined`.

## Proses ddilysu a dileu ôl-ben

1. **Dilysiad sbardun**: Galwadau Frontend `Captcha()`.
2. **Cael siart**: `Captcha.js` Cychwyn `GET /` i `captcha_srv` i gael delwedd ac ID clicio.
3. **Cydlynu dilysu**: Ar ôl i'r defnyddiwr gwblhau'r clic, mae `Captcha.js` yn cychwyn `POST /` i `captcha_srv` i wirio'r cyfesurynnau. Os bydd y dilysiad yn llwyddiannus, bydd Tocyn wedi'i amgodio Base64URL yn cael ei ddychwelyd.
4. ** Dilysiad pen ôl**: Mae'r pen blaen yn cyflwyno'r Tocyn i gefn y wefan, ac mae'r ôl-wyneb yn galw `captcha_srv` a `GET /verify/{token}` i wirio a dinistrio'r Tocyn ar unwaith.

### Cyfarwyddiadau dileu pen ôl

Ar ôl i gefn y wefan dderbyn y `token` a gyflwynwyd gan y pen blaen, mae angen iddo gychwyn cais i'r gwasanaeth `captcha_srv`:

- **Rhyngwyneb cais**:`GET /verify/{token}`
- **Paramedr llwybr**: `token` (dychwelwyd llinyn Base64URL erbyn y pen blaen)
- **Canlyniad dychwelyd**: mae `1` yn golygu bod y dilysiad wedi'i basio ac yn ddilys (bydd yn cael ei ddinistrio'n awtomatig); Mae `0` yn golygu annilys neu wedi'i ddileu.