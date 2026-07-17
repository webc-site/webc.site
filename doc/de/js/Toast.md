# Toast.js

Popup-Meldung zum Toasten

## toast(render, timeout)

Standard-Popup-Fenster mit Eingabeaufforderung anzeigen

Parameter:
- `render`: Rendering-Funktion, die zum Anpassen von Popup-Inhalten verwendet wird
  - Parameter
    - `el`: DOM-Element des Popup-Fensters
- `timeout`: Verzögerungssekunden für automatisches Herunterfahren, Standard 9, kein automatisches Herunterfahren bei 0

Rückgabewert: DOM-Element des Popup-Fensters

## toastErr(render, timeout)

Fehlermeldungs-Popup anzeigen

Parameter:
- `render`: Rendering-Funktion, die zum Anpassen von Popup-Inhalten verwendet wird
  - Parameter
    - `el`: DOM-Element des Popup-Fensters
- `timeout`: Verzögerungssekunden für automatisches Herunterfahren, Standard 9, kein automatisches Herunterfahren bei 0

Rückgabewert: DOM-Element des Fehler-Popup-Fensters