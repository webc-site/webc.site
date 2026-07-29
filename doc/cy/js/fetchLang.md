# fetchLang.js

Llwytho pecynnau iaith yn anghydamserol a rhwymo galwadau diweddaru

## fetchLang(getDict)

Creu gwrandäwr pecyn iaith i gael y pecyn iaith yn anghydamserol a gweithredu galwad yn ôl adnewyddu pan fydd yr iaith yn newid

paramedr:
- `getDict` : Cael swyddogaeth asyncronaidd y pecyn iaith
  - paramedr
    - `code` : cod iaith
  - Gwerth dychwelyd: geiriadur pecyn iaith

Gwerth dychwelyd: swyddogaeth i gofrestru adnewyddu galwad yn ôl
- paramedr
  - `refresh` : Adnewyddu swyddogaeth galw'n ôl pan fydd iaith yn cael ei diweddaru
    - paramedr
      - `i18n` : Gwrthrych geiriadur pecyn iaith
      - `code` : Cod iaith cyfredol
- Gwerth dychwelyd: swyddogaeth i ddadgofrestru'r alwad yn ôl adnewyddu