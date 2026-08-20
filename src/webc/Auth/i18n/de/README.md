# Authentifizierung, Anmeldung und Registrierung

Integrieren Sie die Registrierung und Anmeldung von E-Mail- und Mobiltelefonnummern, die Überprüfung des Bestätigungscodes, die Passwortanmeldung und die Schnellanmeldung von Drittanbietern.

- Unterstützt die Eingabe von E-Mail- und Mobiltelefonnummern
- Schwebende Etiketten mit flüssiger Glasstruktur
- Unterstützt den Countdown für den SMS-Bestätigungscode
- Unterstützt OAuth-Schnellanmeldung und gebundene Anleitung von Drittanbietern

## Nutzen Sie die Demo

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onSignup = async (mail, name, password, code) => {
  return [0, mail, name, code];
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
- `onSignup(mail, name, password, code)`: Rückruf registrieren
- `onResend(mail)`: Bestätigungscode-Rückruf erneut senden
- `onLogin(mail, password)`: Rückruf zur Passwortanmeldung
- `onSmsSend(phone)`: Rückruf per SMS mit Bestätigungscode senden
- `onSmsVerify(phone, code)`: Rückruf des Bestätigungs-SMS-Bestätigungscodes
- `onPassport(provider)`: Schneller Anmelderückruf eines Drittanbieters
- `onReset(mail)`: Rückruf zum Zurücksetzen des Passworts vergessen