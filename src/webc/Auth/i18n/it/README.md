# Autenticazione login e registrazione

Integra la registrazione e l'accesso tramite e-mail e numero di cellulare, la verifica del codice di verifica, l'accesso tramite password e l'accesso rapido di terze parti.

- Supporta l'immissione di e-mail e numero di cellulare
- Etichette galleggianti con texture in vetro liquido
- Supporta il conto alla rovescia del codice di verifica SMS
- Supporta l'accesso rapido OAuth di terze parti e la guida associata

## Utilizza la demo

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
  console.log("Autenticazione riuscita:", e.detail);
});
</script>
```

## costante di stato

- `0` (`STATE_MAIL`): inserimento e-mail
- `1` (`STATE_CODE`): registrazione del codice di verifica via email
- `2` (`STATE_PASSWD`): login con password e-mail
- `10` (`STATE_PHONE`): inserisci il numero di cellulare
- `11` (`STATE_SMS_CODE`): verifica del codice di verifica via SMS
- `Array` (`OAUTH_HINT`): elenco delle guide per l'accesso di terze parti

## Proprietà e funzioni hook

- `step`: stato corrente (numero o array)
- `mail`: e-mail
- `phone`: numero di cellulare
- `onSignup(mail, name, password, code)`: registra la richiamata
- `onResend(mail)`: invia nuovamente la richiamata del codice di verifica
- `onLogin(mail, password)`: richiamata di accesso tramite password
- `onSmsSend(phone)`: invia richiamata con codice di verifica via SMS
- `onSmsVerify(phone, code)`: richiamata del codice di verifica SMS di verifica
- `onPassport(provider)`: richiamata di accesso rapido di terze parti
- `onReset(mail)`: richiamata per la reimpostazione della password dimenticata