# dom.js

Abkürzungen und Verknüpfungsfunktionen für Dokumentvariablen

## D

`document` Verknüpfungsverweis auf das Objekt

## B

`document.body` Verknüpfungsverweis auf das Objekt

## newEl

Erstellen Sie DOM-Elemente

Parameter:
- `tagName`: Element-Tag-Name

Rückgabewert: neu erstelltes DOM-Element

## newLi(...tag_li)

Erstellen Sie mehrere DOM-Elemente in Stapeln

Parameter:
- `tag_li`: Tag-Namensliste

Rückgabewert:
- Array, das alle neu erstellten DOM-Elemente enthält

## cE(name, cls)

Registrieren Sie benutzerdefinierte Web Components-Elemente

Parameter:
- `name`: Benutzerdefinierter Elementname, das Präfix `c-` wird automatisch hinzugefügt
- `cls`: die Klasse des benutzerdefinierten Elements