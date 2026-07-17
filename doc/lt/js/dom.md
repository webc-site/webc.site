# dom.js

Dokumentuokite kintamųjų santrumpas ir nuorodų funkcijas

## D

`document` Nuoroda į objektą

## B

`document.body` Nuoroda į objektą

## newEl

Sukurkite DOM elementus

parametras:
- `tagName` : elemento žymos pavadinimas

Grąžinama vertė: naujai sukurtas DOM elementas

## newLi(...tag_li)

Sukurkite kelis DOM elementus partijomis

parametras:
- `tag_li` : žymos pavadinimų sąrašas

Grąžinimo vertė:
- Masyvas, kuriame yra visi naujai sukurti DOM elementai

## cE(name, cls)

Užregistruokite tinkintus žiniatinklio komponentų elementus

parametras:
- `name` : Pasirinktinis elemento pavadinimas, `c-` priešdėlis bus pridėtas automatiškai
- `cls` : pasirinktinio elemento klasė