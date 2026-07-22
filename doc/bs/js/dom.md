# dom.js

Skraćenice varijabli dokumenata i funkcije prečica

## D

`document` Prečica za objekt

## B

`document.body` Prečica za objekt

## css(txt, root)

## newEl

Kreirajte DOM elemente

parametar:
- `tagName` : naziv oznake elementa

Povratna vrijednost: novokreirani DOM element

## newLi(...tag_li)

Kreirajte više DOM elemenata u serijama

parametar:
- `tag_li` : lista imena oznaka

Povratna vrijednost:
- Niz koji sadrži sve novokreirane DOM elemente

## cE(name, cls)

Registrirajte prilagođene elemente Web Components

parametar:
- `name` : Ime prilagođenog elementa, `c-` prefiks će se automatski dodati
- `cls` : klasa prilagođenog elementa