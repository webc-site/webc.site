# c-t.js

Internaționalizarea HTML

Eticheta `<c-t>key</c-t>` este personalizată, iar `key` este cheia pachetului lingvistic.

## cTranSet(el, genUrl)

Setați textul pentru `c-t`.

parametru:
- `el` : element rădăcină, global poate fi transmis în `document`
- `genUrl` : funcție pentru a obține dicționarul pachetului de limbi
  - parametru
    - `code` : cod de limbă
  - Valoare returnată: un obiect dicționar al pachetului de limbi sau o Promisiune care se rezolvă la acest obiect