# Toast.js

Toast sprettigluggaskilaboð

## toast(render, timeout)

Sýna venjulega hvetjandi sprettiglugga

færibreyta:
- `render` : Endurgerðaraðgerð, notuð til að sérsníða sprettigluggaefni
  - færibreytu
    - `el` : DOM þáttur sprettigluggans
- `timeout` : Sekun í sekúndum fyrir sjálfvirka lokun, sjálfgefið 9, engin sjálfvirk lokun þegar 0

Skilagildi: DOM þáttur sprettigluggans

## toastErr(render, timeout)

Sýna sprettiglugga fyrir villuboð

færibreyta:
- `render` : Endurgerðaraðgerð, notuð til að sérsníða sprettigluggaefni
  - færibreytu
    - `el` : DOM þáttur sprettigluggans
- `timeout` : Sekun í sekúndum fyrir sjálfvirka lokun, sjálfgefið 9, engin sjálfvirk lokun þegar 0

Skilagildi: DOM þáttur í sprettiglugga villu