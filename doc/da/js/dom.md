# dom.js

Dokumentvariable forkortelser og genvejsfunktioner

## D

`document` Genvejsreference til objektet

## B

`document.body` Genvejsreference til objektet

## newEl

Opret DOM-elementer

parameter:
- `tagName` : element tagnavn

Returværdi: nyoprettet DOM-element

## newLi(...tag_li)

Opret flere DOM-elementer i batches

parameter:
- `tag_li` : liste over tagnavne

Returværdi:
- Array, der indeholder alle nyoprettede DOM-elementer

## cE(name, cls)

Registrer Web Components brugerdefinerede elementer

parameter:
- `name` : Brugerdefineret elementnavn, `c-` præfiks tilføjes automatisk
- `cls` : klassen for det tilpassede element