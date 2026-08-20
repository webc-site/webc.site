# Auðkenningarinnskráning og skráning

Samþætta skráningu tölvupósts og farsímanúmera og innskráningu, staðfestingu á staðfestingarkóða, innskráningu lykilorðs og skjótri innskráningu þriðja aðila.

- Stuðningur við innslátt tölvupósts og farsímanúmers
- Fljótandi merkimiðar með fljótandi gleráferð
- Styðja niðurtalningu SMS staðfestingarkóða
- Styðjið OAuth hraðinnskráningu þriðja aðila og bundnar leiðbeiningar

## Notaðu kynninguna

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
  console.log("Auðkenning tókst:", e.detail);
});
</script>
```

## stöðufasti

- `0` (`STATE_MAIL`): Inntak í tölvupósti
- `1` (`STATE_CODE`): Skráning á staðfestingarkóða tölvupósts
- `2` (`STATE_PASSWD`): Innskráning með lykilorði fyrir tölvupóst
- `10` (`STATE_PHONE`): Sláðu inn farsímanúmer
- `11` (`STATE_SMS_CODE`): Staðfesting SMS-staðfestingarkóða
- `Array` (`OAUTH_HINT`): Listi yfir innskráningarleiðbeiningar þriðju aðila

## Eiginleikar og krókaaðgerðir

- `step`: núverandi staða (númer eða fylki)
- `mail`: Tölvupóstur
- `phone`: farsímanúmer
- `onSignup(mail, name, password, code)`: Skráðu svarhringingu
- `onResend(mail)`: Endursenda staðfestingarkóða svarhringingu
- `onLogin(mail, password)`: Innskráning með lykilorði
- `onSmsSend(phone)`: Sendu SMS staðfestingarkóða til baka
- `onSmsVerify(phone, code)`: Staðfestingar SMS staðfestingarkóði endurhringingu
- `onPassport(provider)`: Hraðinnskráning þriðja aðila
- `onReset(mail)`: Gleymdi endurstillingu lykilorðs