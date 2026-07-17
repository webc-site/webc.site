# fetchLang.js

Laden Sie Sprachpakete asynchron und binden Sie Update-Rückrufe

## fetchLang(getDict)

Erstellen Sie einen Sprachpaket-Listener, um das Sprachpaket asynchron abzurufen und einen Aktualisierungsrückruf auszuführen, wenn sich die Sprache ändert

Parameter:
- `getDict`: Ruft die asynchrone Funktion des Sprachpakets ab
  - Parameter
    - `code`: Sprachcode
  - Rückgabewert: Wörterbuch des Sprachpakets

Rückgabewert: Funktion zum Registrieren eines Aktualisierungsrückrufs
- Parameter
  - `refresh`: Rückruffunktion aktualisieren, wenn die Sprache aktualisiert wird
    - Parameter
      - `i18n`: Sprachpaket-Wörterbuchobjekt
      - `code`: Aktueller Sprachcode
- Rückgabewert: Funktion zum Aufheben der Registrierung des Aktualisierungsrückrufs