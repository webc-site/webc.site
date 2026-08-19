# Saff popup tal-kodiċi tal-verifika

Tieqa pop-up tal-kodiċi tal-verifika bbażata fuq klikk grafika.

- Magħquda ma 'BoxX biex timplimenta interazzjoni pop-up window u appoġġ ESC/qrib
- Ikklikkja mira bbażata fuq l-immaġni fl-isfond
- Jappoġġja pass ikklikkja jneħħu u mekkaniżmu awtomatiku retry
- użu
  * Netwerk pubbliku:`https://captcha.webc.pub`
  * Skjerament privat: [captcha_srv](https://crates.io/crates/captcha_srv)

## Uża d-demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Wara l-verifika, ibgħat it-token lill-backend
  console.log ("Verifika mgħoddija Token:", token);
}
```

## valur tar-ritorn

Is-sejħa tal-funzjoni tirritorna `Promise<string | undefined>`:
- **Verifika Mgħoddija**: Jirritorna l-kodiċi ta' verifika kodifikat Base64URL (mingħajr ikkuttunar) string Token.
- **Agħlaq jew Ikkanċella**: Irritorna għal `undefined`.

## Proċess ta' verifika u tħassir back-end

1. **Trigger validation**: Frontend sejħiet `Captcha()`.
2. **Ikseb chart**: `Captcha.js` Ibda `GET /` biex `captcha_srv` biex tikseb immaġni u ID ikklikkjat.
3. **Verifika tal-koordinati**: Wara li l-utent itemm il-klikk, `Captcha.js` jibda `POST /` biex `captcha_srv` biex jivverifika l-koordinati. Jekk il-verifika tirnexxi, Token kodifikat Base64URL jiġi rritornat.
4. **Verifika back-end**: Il-front-end jissottometti t-Token lill-backend tal-websajt, u l-backend isejjaħ `captcha_srv` u `GET /verify/{token}` biex jivverifika u jeqred it-Token f'daqqa.

### Istruzzjonijiet ta' tħassir ta' wara

Wara li l-backend tal-websajt jirċievi l-`token` sottomess mill-front-end, jeħtieġ li jibda talba lis-servizz `captcha_srv`:

- **Interface talba**:`GET /verify/{token}`
- **Parametru tal-passaġġ**: `token` (Sekwenza Base64URL ritornata mill-parti ta' quddiem)
- **Ritorn riżultat**: `1` tfisser li l-verifika tkun għaddiet u valida (se tinqered awtomatikament); `0` tfisser invalida jew tħassret.