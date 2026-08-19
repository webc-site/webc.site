# Authentifizierung, Anmeldung und Registrierung

Integrieren Sie die Registrierung und Anmeldung von E-Mail- und Mobiltelefonnummern, die Überprüfung des Bestätigungscodes, die Passwortanmeldung und die Schnellanmeldung von Drittanbietern.

- Unterstützt den Tab-Wechsel zwischen E-Mail-Adresse und Mobiltelefonnummer
- Schwebende Etiketten mit flüssiger Glasstruktur
- Unterstützt die Auswahl von Vorwahlen für mehrere Länder und den Countdown für SMS-Bestätigungscodes
- Unterstützt OAuth-Schnellanmeldung und gebundene Anleitung von Drittanbietern

## Nutzen Sie die Demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Statuscode zurückgeben: 1 für Bestätigungscode-Registrierung, 2 für Passwort-Anmeldung oder Anmeldearray eines Drittanbieters zurückgeben ["google", "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Authentifizierung erfolgreich:", e.detail);
});
</script>
```

## Status konstant

- `0` (`STATE_MAIL`): E-Mail-Eingabe
- `1` (`STATE_CODE`): Registrierung des E-Mail-Bestätigungscodes
- `2` (`STATE_PASSWD`): E-Mail-Passwort-Anmeldung
- `10` (`STATE_PHONE`): Geben Sie die Mobiltelefonnummer ein
- `11` (`STATE_SMS_CODE`): Bestätigung des SMS-Bestätigungscodes
- `Array` (`OAUTH_HINT`): Liste der Anmeldeanleitungen von Drittanbietern

## Eigenschaften und Hook-Funktionen

- `step`: aktueller Status (Zahl oder Array)
- `mail`: E-Mail
- `phone`: Mobiltelefonnummer
- `cc`: internationale Vorwahl (Standard 86)
- `onMail(mail)`: Rückruf zur E-Mail-Überprüfung
- `onSignup(mail, name, password)`: Rückruf registrieren
- `onLogin(mail, password)`: Rückruf zur Passwortanmeldung
- `onSmsSend(phone, cc)`: Rückruf per SMS mit Bestätigungscode senden
- `onSmsVerify(phone, cc, code)`: Rückruf des Bestätigungs-SMS-Bestätigungscodes
- `onPassport(provider)`: Schneller Anmelderückruf eines Drittanbieters
- `onReset(mail)`: Rückruf zum Zurücksetzen des Passworts vergessen