# Stratul pop-up cod de verificare

Fereastra pop-up cod de verificare bazată pe clic grafic.

- Combinat cu BoxX pentru a implementa interacțiunea ferestrelor pop-up și suportul ESC/închis
- Faceți clic pe țintă pe baza imaginii de fundal
- Acceptă un clic pas de anulare și mecanismul de reîncercare automată
- utilizare
  * Rețea publică:`https://captcha.webc.pub`
  * Implementare privată: [captcha_srv](https://crates.io/crates/captcha_srv)

## Utilizați demonstrația

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // După verificare, trimiteți jetonul la backend
  console.log("Token de verificare a trecut:", token);
}
```

## valoarea returnată

Apelarea funcției returnează `Promise<string | undefined>`:
- **Verificare trecută**: returnează codul de verificare codificat Base64URL (fără umplutură) șirul de simboluri.
- **Închideți sau anulați**: reveniți la `undefined`.

## Proces de verificare și anulare back-end

1. **Validarea declanșatorului**: apelurile front-end `Captcha()`.
2. **Obține diagramă**: `Captcha.js` Inițiază `GET /` la `captcha_srv` pentru a obține imaginea și ID-ul pe care s-a făcut clic.
3. **Verificarea coordonatelor**: după ce utilizatorul completează clicul, `Captcha.js` inițiază `POST /` la `captcha_srv` pentru a verifica coordonatele. Dacă verificarea are succes, va fi returnat un Token codificat Base64URL.
4. **Verificare back-end**: front-end-ul trimite Token-ul la backend-ul site-ului, iar backend-ul apelează `captcha_srv` și `GET /verify/{token}` pentru a verifica și distruge Token-ul imediat.

### Instrucțiuni de anulare back-end

După ce backend-ul site-ului web primește `token` trimis de front-end, acesta trebuie să inițieze o solicitare către serviciul `captcha_srv`:

- **Interfață de solicitare**:`GET /verify/{token}`
- **Parametru cale**: `token` (șir Base64URL returnat de front-end)
- **Rezultatul returnat**: `1` înseamnă că verificarea a fost trecută și validă (va fi distrusă automat); `0` înseamnă nevalid sau a fost anulat.