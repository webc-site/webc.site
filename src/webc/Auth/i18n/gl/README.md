# Autenticación inicio de sesión e rexistro

Integre o rexistro e o inicio de sesión do correo electrónico e do número de teléfono móbil, a verificación do código de verificación, o inicio de sesión do contrasinal e o inicio de sesión rápido de terceiros.

- Admite correo electrónico e entrada de número de teléfono móbil
- Etiquetas flotantes con textura de vidro líquido
- Admite a conta atrás do código de verificación por SMS
- Admite o inicio de sesión rápido de OAuth de terceiros e as orientacións vinculadas

## Use a demostración

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
  console.log("Autenticación exitosa:", e.detail);
});
</script>
```

## constante de estado

- `0` (`STATE_MAIL`): entrada de correo electrónico
- `1` (`STATE_CODE`): rexistro do código de verificación do correo electrónico
- `2` (`STATE_PASSWD`): correo electrónico de inicio de sesión contrasinal
- `10` (`STATE_PHONE`): introduce o número de teléfono móbil
- `11` (`STATE_SMS_CODE`): verificación do código de verificación por SMS
- `Array` (`OAUTH_HINT`): lista de guías de inicio de sesión de terceiros

## Propiedades e funcións de gancho

- `step`: estado actual (número ou matriz)
- `mail`: correo electrónico
- `phone`: número de teléfono móbil
- `onSignup(mail, name, password, code)`: rexistra a devolución de chamada
- `onResend(mail)`: Volve enviar a devolución de chamada do código de verificación
- `onLogin(mail, password)`: devolución de chamada de acceso ao contrasinal
- `onSmsSend(phone)`: enviar unha devolución de chamada de código de verificación por SMS
- `onSmsVerify(phone, code)`: devolución de chamada de código de verificación por SMS de verificación
- `onPassport(provider)`: devolución de chamada de acceso rápido de terceiros
- `onReset(mail)`: esquecín a devolución de chamada para restablecer o contrasinal