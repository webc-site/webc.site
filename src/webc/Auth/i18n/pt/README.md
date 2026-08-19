# Login e registro de autenticação

Integre registro e login de e-mail e número de celular, verificação de código de verificação, login de senha e login rápido de terceiros.

- Suporta alternância de guias entre endereço de e-mail e número de celular
- Etiquetas flutuantes com textura de vidro líquido
- Suporta seleção de código de área de vários países e contagem regressiva de código de verificação por SMS
- Suporte para login rápido e orientação vinculada de OAuth de terceiros

## Use a demonstração

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Retorna o código de status: 1 para registro do código de verificação, 2 para login com senha ou retorna array de login de terceiros ["google", "apple"]
  return 2;
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
- `cc`: código de discagem internacional (padrão 86)
- `onMail(mail)`: retorno de chamada de verificação de e-mail
- `onSignup(mail, name, password)`: Registrar retorno de chamada
- `onLogin(mail, password)`: retorno de chamada de login com senha
- `onSmsSend(phone, cc)`: Enviar retorno de chamada do código de verificação por SMS
- `onSmsVerify(phone, cc, code)`: retorno de chamada do código de verificação por SMS de verificação
- `onPassport(provider)`: retorno de chamada de login rápido de terceiros
- `onReset(mail)`: retorno de chamada de redefinição de senha esquecida