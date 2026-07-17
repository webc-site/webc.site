# route.js

Einseitiges Front-End-Routing-Management

## nowUrl()

Rufen Sie den aktuellen URL-Pfad ab, wobei der führende Schrägstrich entfernt wurde

Rückgabewert: aktuelle Pfadzeichenfolge

## route(hook)

Registrieren Sie den Listening-Rückruf für Routenänderungen. Bei der Registrierung wird es einmalig mit dem aktuellen Pfad ausgeführt.

Parameter:
- `hook`: Rückruffunktion zur Routenüberwachung
  - Parameter
    - `url`: aktueller Pfad
    - `pre`: letzter Pfad

Rückgabewert: Nicht registrierte Bereinigungsfunktion

## setPre(url)

Speichern Sie die zuletzt aufgezeichnete URL

Parameter:
- `url`: Pfadzeichenfolge

## preUrl()

Rufen Sie die URL des letzten Datensatzes ab

Rückgabewert: letzter Pfadstring

## refresh(url)

Erzwingen Sie, dass alle Routenüberwachungsrückrufe am angegebenen Pfad ausgelöst werden, und aktualisieren Sie sie vorab

Parameter:
- `url`: Zielpfad, standardmäßiger aktueller Pfad

## removeSlash(url)

Entfernen Sie Schrägstriche aus Pfadüberschriften

Parameter:
- `url`: Pfadzeichenfolge

Rückgabewert: Pfad nach Entfernen des führenden Schrägstrichs

## setUrl(url)

Aktualisieren Sie den URL-Status der Browser-Adressleiste

Parameter:
- `url`: Zielpfad

Rückgabewert: 1, wenn sich der Pfad tatsächlich ändert

## goto(url)

Aktualisieren Sie die Browseradresse und lösen Sie eine Routenaktualisierung aus

Parameter:
- `url`: Zielpfad