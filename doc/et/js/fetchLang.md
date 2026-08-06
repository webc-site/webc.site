# fetchLang.js

Laadige asünkroonselt keelepakette ja siduge värskenduste tagasihelistusi

## fetchLang(getDict)

Looge keelepaketi kuulaja, et asünkroonselt hankida keelepakett ja käivitada tagasihelistamine, kui keel muutub

parameeter:
- `getDict` : hankige keelepaketi asünkroonne funktsioon
  - parameeter
    - `code` : keelekood
  - Tagastatav väärtus: keelepaketi sõnastik

Tagastusväärtus: funktsioon värskendamise tagasihelistamise registreerimiseks
- parameeter
  - `refresh` : tagasihelistamisfunktsiooni värskendamine keele värskendamisel
    - parameeter
      - `i18n` : keelepaketi sõnastiku objekt
      - `code` : praegune keelekood
- Tagastusväärtus: funktsioon värskendamise tagasihelistamise registreerimise tühistamiseks