# fetchLang.js

Asinhrono nalaganje jezikovnih paketov in povezovanje povratnih klicev posodobitve

## fetchLang(getDict)

Ustvarite poslušalca jezikovnega paketa, da asinhrono pridobite jezikovni paket in izvedete povratni klic osveževanja, ko se jezik spremeni

parameter:
- `getDict` : pridobite asinhrono funkcijo jezikovnega paketa
  - parameter
    - `code` : koda jezika
  - Povrnjena vrednost: slovar jezikovnega paketa

Povratna vrednost: funkcija za registracijo povratnega klica osveževanja
- parameter
  - `refresh` : Osveži funkcijo povratnega klica, ko je jezik posodobljen
    - parameter
      - `i18n` : objekt slovarja jezikovnega paketa
      - `code` : trenutna koda jezika
- Povratna vrednost: funkcija za odjavo povratnega klica osveževanja