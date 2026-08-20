# Inicio de sesión y registro de autenticación

Integre el registro e inicio de sesión de correo electrónico y número de teléfono móvil, verificación de código de verificación, inicio de sesión con contraseña e inicio de sesión rápido de terceros.

- Admite entrada de correo electrónico y número de teléfono móvil
- Etiquetas flotantes con textura de vidrio líquido.
- Admite cuenta regresiva del código de verificación por SMS
- Admite inicio de sesión rápido de OAuth de terceros y orientación vinculante

## Usa la demostración

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

## estado constante

- `0` (`STATE_MAIL`): entrada de correo electrónico
- `1` (`STATE_CODE`): Registro del código de verificación de correo electrónico
- `2` (`STATE_PASSWD`): inicio de sesión con contraseña de correo electrónico
- `10` (`STATE_PHONE`): Ingrese el número de teléfono móvil
- `11` (`STATE_SMS_CODE`): verificación del código de verificación por SMS
- `Array` (`OAUTH_HINT`): Lista de guías de inicio de sesión de terceros

## Propiedades y funciones de enlace.

- `step`: estado actual (número o matriz)
- `mail`: correo electrónico
- `phone`: número de teléfono móvil
- `onSignup(mail, name, password, code)`: Registrar devolución de llamada
- `onResend(mail)`: Reenviar devolución de llamada del código de verificación
- `onLogin(mail, password)`: devolución de llamada de inicio de sesión con contraseña
- `onSmsSend(phone)`: Enviar devolución de llamada del código de verificación por SMS
- `onSmsVerify(phone, code)`: Devolución de llamada del código de verificación por SMS de verificación
- `onPassport(provider)`: devolución de llamada de inicio de sesión rápido de terceros
- `onReset(mail)`: Olvidé la devolución de llamada para restablecer la contraseña