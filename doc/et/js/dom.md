# dom.js

Dokumenteerige muutujate lühendid ja otseteede funktsioonid

## D

`document` Otsetee viide objektile

## B

`document.body` Otsetee viide objektile

## newEl

Looge DOM-i elemente

parameeter:
- `tagName` : elemendi märgendi nimi

Tagastamisväärtus: äsja loodud DOM-i element

## newLi(...tag_li)

Looge mitu DOM-i elementi partiidena

parameeter:
- `tag_li` : sildinimede loend

Tagastusväärtus:
- Massiiv, mis sisaldab kõiki äsja loodud DOM-i elemente

## cE(name, cls)

Registreerige veebikomponentide kohandatud elemente

parameeter:
- `name` : Kohandatud elemendi nimi, `c-` prefiks lisatakse automaatselt
- `cls` : kohandatud elemendi klass