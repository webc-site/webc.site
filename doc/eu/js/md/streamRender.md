# md/streamRender.js

Markdown streaming errendatzea

## default(container, source)

Markdown testua errendatzea zehaztutako DOM edukiontzira, idazteko kurtsore efektuak eta korritze automatikoa onartzen ditu

parametroa:
- `container` : DOM edukiontziaren elementuak errendatutako edukia hartzen du
- `source` : ReadableStream testu-datuen iturria

Itzultzeko balioa:

- `cancel` : errendatzea eta datu-fluxuaren irakurketa geldiarazteko funtzioa
- `setStop`: korritze automatikoa pausatu ala ez ezartzeko funtzioa
  - parametroa
    - `val` : balio boolearra pausatu ala ez