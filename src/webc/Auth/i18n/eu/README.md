# Autentifikazio-saioa eta erregistroa

Integratu posta elektronikoa eta telefono mugikorreko zenbakien erregistroa eta saioa, egiaztapen-kodea egiaztatzea, pasahitza saioa eta hirugarrenen saioa azkarra.

- Onartu posta elektronikoa eta telefono mugikorra sartzeko
- Beira likidoaren ehundura duten etiketa flotagarriak
- Onartu SMS egiaztatzeko kodea atzerako kontaketa
- Onartu hirugarrenen OAuth-en saio-hasiera azkarra eta loturiko orientabideak

## Erabili demoa

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
  console.log("Autentifikazioa arrakastatsua:", e.detail);
});
</script>
```

## egoera konstantea

- `0` (`STATE_MAIL`): posta elektronikoaren sarrera
- `1` (`STATE_CODE`): posta elektronikoa egiaztatzeko kodea erregistratzea
- `2` (`STATE_PASSWD`): posta elektroniko bidezko pasahitza saioa hasteko
- `10` (`STATE_PHONE`): Idatzi mugikorraren zenbakia
- `11` (`STATE_SMS_CODE`): SMS egiaztatzeko kodea egiaztatzea
- `Array` (`OAUTH_HINT`): hirugarrenen saioa hasteko gida zerrenda

## Propietateak eta kako funtzioak

- `step`: uneko egoera (zenbakia edo matrizea)
- `mail`: Posta elektronikoa
- `phone`: telefono-zenbakia
- `onSignup(mail, name, password, code)`: Erregistratu deia itzultzeko
- `onResend(mail)`: berriro bidali egiaztapen-kodearen deia
- `onLogin(mail, password)`: pasahitza saioa hasteko deia
- `onSmsSend(phone)`: Bidali SMS egiaztapen-kodea deia
- `onSmsVerify(phone, code)`: egiaztapen-SMS egiaztapen-kodearen itzulera
- `onPassport(provider)`: Hirugarrenen saioa hasteko deia azkarra
- `onReset(mail)`: Pasahitza berrezartzeko deia ahaztu zait