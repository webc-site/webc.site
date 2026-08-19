# Verifikācijas koda uznirstošais slānis

Verifikācijas koda uznirstošais logs, pamatojoties uz grafisku klikšķi.

- Apvienojumā ar BoxX, lai ieviestu uznirstošo logu mijiedarbību un ESC/aizvērt atbalstu
- Noklikšķiniet uz mērķa, pamatojoties uz fona attēlu
- Atbalsta soļa klikšķa atsaukšanu un automātisko atkārtošanas mehānismu
- izmantot
  * Publiskais tīkls:`https://captcha.webc.pub`
  * Privātā izvietošana: [captcha_srv](https://crates.io/crates/captcha_srv)

## Izmantojiet demonstrāciju

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Pēc pārbaudes iesniedziet marķieri aizmugursistēmai
  console.log("Apstiprinājuma pilnvara:", marķieris);
}
```

## atgriešanas vērtība

Funkcijas izsaukšana atgriež `Promise<string | undefined>`:
- **Verifikācija izturēta**: atgriež Base64URL kodētu (bez pildījuma) verifikācijas koda pilnvaras virkni.
- **Aizvērt vai Atcelt**: atgriezties pie `undefined`.

## Pārbaudes process un aizmugures norakstīšana

1. **Aktivizētāja validācija**: priekšgala zvani `Captcha()`.
2. **Iegūt diagrammu**: `Captcha.js` Sāciet no `GET /` līdz `captcha_srv`, lai iegūtu noklikšķināto attēlu un ID.
3. **Koordinātu pārbaude**: kad lietotājs ir pabeidzis klikšķi, `Captcha.js` sāk `POST /` līdz `captcha_srv`, lai pārbaudītu koordinātas. Ja pārbaude ir veiksmīga, tiks atgriezta Base64URL kodēta marķiera marķieris.
4. **Back-end verifikācija**: priekšgals iesniedz marķieri vietnes aizmugursistēmai, un aizmugursistēma izsauc `captcha_srv` un `GET /verify/{token}`, lai verificētu un nekavējoties iznīcinātu marķieri.

### Aizmugurējās norakstīšanas instrukcijas

Kad vietnes aizmugursistēma saņem priekšgala iesniegto `token`, tai ir jāuzsāk pieprasījums pakalpojumam `captcha_srv`:

- **Pieprasījuma saskarne**:`GET /verify/{token}`
- **Path parametrs**: `token` (Base64URL virkne, ko atgriež priekšgals)
- **Atgriešanas rezultāts**: `1` nozīmē, ka pārbaude ir izturēta un derīga (tiks automātiski iznīcināta); `0` nozīmē nederīgu vai norakstītu.