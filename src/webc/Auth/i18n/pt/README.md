# Login e registro de autenticação

Integre registro e login de e-mail e número de celular, verificação de código de verificação, login de senha e login rápido de terceiros.

- Suporte para entrada de e-mail e número de celular
- Etiquetas flutuantes com textura de vidro líquido
- Contagem regressiva do código de verificação de SMS de suporte
- Suporte para login rápido e orientação vinculada de OAuth de terceiros

## Use a demonstração

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
  console.log("Autenticação bem-sucedida:", e.detail);
});
</script>
```

## constante de status

- `0` (`STATE_MAIL`): entrada de e-mail
- `1` (`STATE_CODE`): registro do código de verificação de e-mail
- `2` (`STATE_PASSWD`): Login com senha de e-mail
- `10` (`STATE_PHONE`): Insira o número do celular
- `11` (`STATE_SMS_CODE`): verificação do código de verificação por SMS
- `Array` (`OAUTH_HINT`): lista de guias de login de terceiros

## Propriedades e funções de gancho

- `step`: status atual (número ou array)
- `mail`: E-mail
- `phone`: número de celular
- `onSignup(mail, name, password, code)`: Registrar retorno de chamada
- `onResend(mail)`: reenviar retorno de chamada do código de verificação
- `onLogin(mail, password)`: retorno de chamada de login com senha
- `onSmsSend(phone)`: Enviar retorno de chamada do código de verificação por SMS
- `onSmsVerify(phone, code)`: retorno de chamada do código de verificação por SMS de verificação
- `onPassport(provider)`: retorno de chamada de login rápido de terceiros
- `onReset(mail)`: retorno de chamada de redefinição de senha esquecida