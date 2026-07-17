# dom.js

Dokumentuj skróty zmiennych i funkcje skrótów

## D

`document` Skrót do obiektu

## B

`document.body` Skrót do obiektu

## newEl

Utwórz elementy DOM

parametr:
- `tagName` : nazwa znacznika elementu

Wartość zwracana: nowo utworzony element DOM

## newLi(...tag_li)

Twórz wiele elementów DOM partiami

parametr:
- `tag_li` : lista nazw tagów

Wartość zwracana:
- Tablica zawierająca wszystkie nowo utworzone elementy DOM

## cE(name, cls)

Zarejestruj elementy niestandardowe komponentów sieciowych

parametr:
- `name` : Nazwa elementu niestandardowego, prefiks `c-` zostanie dodany automatycznie
- `cls` : klasa elementu niestandardowego