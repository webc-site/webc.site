# dom.js

Dokumentu aldagaien laburdurak eta lasterbide-funtzioak

## D

`document` Objekturako lasterbide-erreferentzia

## B

`document.body` Objekturako lasterbide-erreferentzia

## newEl

Sortu DOM elementuak

parametroa:
- `tagName` : elementuaren etiketaren izena

Itzultzeko balioa: sortu berri den DOM elementua

## newLi(...tag_li)

Sortu DOM elementu anitz loteetan

parametroa:
- `tag_li` : etiketa-izen zerrenda

Itzultzeko balioa:
- Sortu berri diren DOM elementu guztiak dituen array

## cE(name, cls)

Erregistratu Web Components elementu pertsonalizatuak

parametroa:
- `name` : elementu pertsonalizatuaren izena, `c-` aurrizkia automatikoki gehituko da
- `cls` : elementu pertsonalizatuaren klasea