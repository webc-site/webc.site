# dom.js

Kratice varijabli dokumenta i funkcije prečaca

## D

`document` Referenca prečaca na objekt

## B

`document.body` Referenca prečaca na objekt

## css(txt, root)

## newEl

Stvorite DOM elemente

parametar:
- `tagName` : naziv oznake elementa

Povratna vrijednost: novostvoreni DOM element

## newLi(...tag_li)

Izradite više DOM elemenata u serijama

parametar:
- `tag_li` : popis naziva oznaka

Povratna vrijednost:
- Niz koji sadrži sve novostvorene DOM elemente

## cE(name, cls)

Registrirajte prilagođene elemente web-komponenti

parametar:
- `name` : Naziv prilagođenog elementa, `c-` prefiks bit će dodan automatski
- `cls` : klasa prilagođenog elementa