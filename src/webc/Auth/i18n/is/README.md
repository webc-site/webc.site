# Auðkenningarinnskráning og skráning

Samþætta skráningu tölvupósts og farsímanúmera og innskráningu, staðfestingu á staðfestingarkóða, innskráningu lykilorðs og skjótri innskráningu þriðja aðila.

- Styður flipaskipti á milli netfangs og farsímanúmers
- Fljótandi merkimiðar með fljótandi gleráferð
- Styður val á svæðisnúmeri í mörgum löndum og niðurtalningu SMS-staðfestingarkóða
- Styðjið OAuth hraðinnskráningu þriðja aðila og bundnar leiðbeiningar

## Notaðu kynninguna

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Skilaðu stöðukóða: 1 fyrir skráningu staðfestingarkóða, 2 fyrir innskráningu með lykilorði, eða skilaðu innskráningarfylki þriðja aðila ["google", "apple"]
  return 2;
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
- `cc`: alþjóðlegt símanúmer (sjálfgefið 86)
- `onMail(mail)`: Tölvupóstathugun á svarhringingu
- `onSignup(mail, name, password)`: Skráðu svarhringingu
- `onLogin(mail, password)`: Innskráning með lykilorði
- `onSmsSend(phone, cc)`: Sendu SMS staðfestingarkóða til baka
- `onSmsVerify(phone, cc, code)`: Staðfestingar SMS staðfestingarkóði endurhringingu
- `onPassport(provider)`: Hraðinnskráning þriðja aðila
- `onReset(mail)`: Gleymdi endurstillingu lykilorðs