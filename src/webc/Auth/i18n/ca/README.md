# Autenticació inici de sessió i registre

Integreu el registre i l'inici de sessió del número de telèfon mòbil i de correu electrònic, la verificació del codi de verificació, l'inici de sessió amb contrasenya i l'inici de sessió ràpid de tercers.

- Suport de correu electrònic i entrada de números de telèfon mòbil
- Etiquetes flotants amb textura de vidre líquid
- Admet el compte enrere del codi de verificació per SMS
- Admet l'inici de sessió ràpid d'OAuth de tercers i les instruccions vinculades

## Utilitzeu la demostració

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
  console.log("Autenticació correcta:", e.detail);
});
</script>
```

## constant d'estat

- `0` (`STATE_MAIL`): entrada de correu electrònic
- `1` (`STATE_CODE`): registre del codi de verificació del correu electrònic
- `2` (`STATE_PASSWD`): correu electrònic d'inici de sessió amb contrasenya
- `10` (`STATE_PHONE`): introduïu el número de telèfon mòbil
- `11` (`STATE_SMS_CODE`): verificació del codi de verificació per SMS
- `Array` (`OAUTH_HINT`): llista de guies d'inici de sessió de tercers

## Propietats i funcions de ganxo

- `step`: estat actual (número o matriu)
- `mail`: correu electrònic
- `phone`: número de telèfon mòbil
- `onSignup(mail, name, password, code)`: registreu la devolució de trucada
- `onResend(mail)`: torna a enviar la trucada del codi de verificació
- `onLogin(mail, password)`: devolució de trucada d'inici de sessió amb contrasenya
- `onSmsSend(phone)`: envieu una devolució de trucada del codi de verificació per SMS
- `onSmsVerify(phone, code)`: devolució de trucada del codi de verificació per SMS de verificació
- `onPassport(provider)`: devolució de trucada d'inici de sessió ràpida de tercers
- `onReset(mail)`: he oblidat la devolució de trucada per restablir la contrasenya