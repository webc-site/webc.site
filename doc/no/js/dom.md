# dom.js

Dokumentvariable forkortelser og snarveisfunksjoner

## D

`document` Snarveireferanse til objektet

## B

`document.body` Snarveireferanse til objektet

## newEl

Lag DOM-elementer

parameter:
- `tagName` : elementkodenavn

Returverdi: nyopprettet DOM-element

## newLi(...tag_li)

Opprett flere DOM-elementer i batcher

parameter:
- `tag_li` : liste over merkenavn

Returverdi:
- Array som inneholder alle nyopprettede DOM-elementer

## cE(name, cls)

Registrer tilpassede elementer for webkomponenter

parameter:
- `name` : Egendefinert elementnavn, `c-` prefiks vil bli lagt til automatisk
- `cls` : klassen til det tilpassede elementet