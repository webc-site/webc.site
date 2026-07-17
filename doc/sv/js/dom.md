# dom.js

Dokumentvariable förkortningar och genvägsfunktioner

## D

`document` Genvägsreferens till objektet

## B

`document.body` Genvägsreferens till objektet

## newEl

Skapa DOM-element

parameter:
- `tagName` : elementtaggnamn

Returvärde: nyskapat DOM-element

## newLi(...tag_li)

Skapa flera DOM-element i batcher

parameter:
- `tag_li` : taggnamnlista

Returvärde:
- Array som innehåller alla nyskapade DOM-element

## cE(name, cls)

Registrera Web Components anpassade element

parameter:
- `name` : Anpassat elementnamn, `c-` prefix läggs till automatiskt
- `cls` : klassen för det anpassade elementet