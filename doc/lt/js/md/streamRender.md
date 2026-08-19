# md/streamRender.js

„Markdown“ srautinio perdavimo atvaizdavimas

## default(container, source)

Srautinis žymėjimo teksto atvaizdavimas į nurodytą DOM konteinerį, palaikomas rašomosios mašinėlės žymeklio efektai ir automatinis slinkimas

parametras:
- `container` : DOM sudėtinio rodinio elementas, talpinantis pateiktą turinį
- `source` : ReadableStream teksto duomenų šaltinis

Grąžinimo vertė:

- `cancel` : funkcija sustabdyti pateikimą ir duomenų srauto skaitymą
- `setStop` : Funkcija, skirta nustatyti, ar pristabdyti automatinį slinkimą
  - parametras
    - `val` : Būlio reikšmė, ar pristabdyti, ar ne