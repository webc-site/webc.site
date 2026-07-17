# fetch.js

Virkni netbeiðnartóls sem byggir á sæktu hjúpun

## F(url, opt)

Sendu netbeiðni og skilaðu svarhlut

færibreyta:
- `url` : Beðið um heimilisfang
- `opt` : `fetch` valkostir hlutur

Skilagildi: Svarhlutur

## f(attr)

Hærri röð falla sem umlykur beiðni og flokkar skilað efni á tilteknu sniði

færibreyta:
- `attr` : heiti eigindarþáttunar eigindar fyrir svar líkama

Skilagildi: fall til að biðja um og flokka efni ósamstillt
  - færibreytu
    - `url` : Beðið um heimilisfang
    - `opt` : `fetch` valkostir hlutur
  - Skilagildi: þáttað efni

## fTxt

Sendu netbeiðni og skilaðu meginmáli svarsins á textasniði

færibreyta:
- `url` : Beðið um heimilisfang
- `opt` : `fetch` valkostir hlutur

Skilagildi: svartexti

## fJson(url, opt)

Sendu netbeiðni og flokkaðu og skilaðu svarhlutanum á JSON sniði

færibreyta:
- `url` : Beðið um heimilisfang
- `opt` : `fetch` valkostir hlutur

Skilagildi: þáttaður JSON hlutur

## fBin(url, opt)

Sendu netbeiðni og skilaðu svarhlutanum sem tvöfaldur bætafylki

færibreyta:
- `url` : Beðið um heimilisfang
- `opt` : `fetch` valkostir hlutur

Skilagildi: bæti fylki