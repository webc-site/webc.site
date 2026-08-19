# Popup-Ebene für den Bestätigungscode

Popup-Fenster mit Bestätigungscode basierend auf Grafikklick.

- Kombiniert mit BoxX, um Popup-Fenster-Interaktion und ESC/Schließen-Unterstützung zu implementieren
- Klicken Sie auf „Ziel basierend auf Hintergrundbild“.
- Unterstützt Schritt-Klick-Rückgängigmachen und automatischen Wiederholungsmechanismus
- verwenden
  * Öffentliches Netzwerk:`https://captcha.webc.pub`
  * Private Bereitstellung: [captcha_srv](https://crates.io/crates/captcha_srv)

## Nutzen Sie die Demo

```js
import Captcha from "webc.site/Captcha.js";

const token = await Captcha();
if (token) {
  // Nach der Überprüfung den Token an das Backend senden
  console.log("Bestätigung bestandenes Token:", token);
}
```

## Rückgabewert

Der Aufruf der Funktion gibt `Promise<string | undefined>` zurück:
- **Verifizierung bestanden**: Gibt die Base64URL-codierte (keine Auffüllung) Verifizierungscode-Token-Zeichenfolge zurück.
- **Schließen oder Abbrechen**: Zurück zu `undefined`.

## Verifizierungsprozess und Back-End-Abschreibung

1. **Trigger-Validierung**: Frontend-Aufrufe `Captcha()`.
2. **Diagramm abrufen**: `Captcha.js` `GET /` zu `captcha_srv` veranlassen, um angeklicktes Bild und ID abzurufen.
3. **Koordinatenüberprüfung**: Nachdem der Benutzer den Klick abgeschlossen hat, initiiert `Captcha.js` `POST /` zu `captcha_srv`, um die Koordinaten zu überprüfen. Wenn die Überprüfung erfolgreich ist, wird ein Base64URL-codiertes Token zurückgegeben.
4. **Back-End-Verifizierung**: Das Front-End übermittelt das Token an das Website-Back-End und das Backend ruft `captcha_srv` und `GET /verify/{token}` auf, um das Token sofort zu überprüfen und zu zerstören.

### Back-End-Abschreibungsanweisungen

Nachdem das Website-Backend den vom Frontend übermittelten `token` empfangen hat, muss es eine Anfrage an den `captcha_srv`-Dienst initiieren:

- **Schnittstelle anfordern**:`GET /verify/{token}`
- **Pfadparameter**: `token` (vom Frontend zurückgegebener Base64URL-String)
- **Ergebnis zurückgeben**: `1` bedeutet, dass die Verifizierung bestanden wurde und gültig ist (wird automatisch vernichtet); `0` bedeutet ungültig oder wurde abgeschrieben.