# fetchLang.js

Asinchroniškai įkelkite kalbų paketus ir susiekite atnaujinimo atgalinius skambučius

## fetchLang(getDict)

Sukurkite kalbos paketo klausytoją, kad asinchroniškai gautumėte kalbos paketą ir atliktumėte atnaujinimo atgalinį skambutį, kai pasikeičia kalba

parametras:
- `getDict` : gaukite asinchroninę kalbos paketo funkciją
  - parametras
    - `code` : kalbos kodas
  - Grąžinama reikšmė: kalbos paketo žodynas

Grąžinimo reikšmė: funkcija registruojanti atnaujinimo atgalinį skambutį
- parametras
  - `refresh` : Atnaujinkite atgalinio skambinimo funkciją, kai atnaujinama kalba
    - parametras
      - `i18n` : kalbos paketo žodyno objektas
      - `code` : dabartinės kalbos kodas
- Grąžinimo reikšmė: funkcija, skirta išregistruoti atnaujinimo atgalinį skambutį