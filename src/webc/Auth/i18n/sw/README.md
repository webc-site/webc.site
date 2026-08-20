# Uthibitishaji wa kuingia na usajili

Jumuisha usajili na kuingia kwa barua pepe na nambari ya simu ya rununu, uthibitishaji wa nambari ya uthibitishaji, kuingia kwa nenosiri na kuingia kwa haraka kwa wahusika wengine.

- Msaada wa barua pepe na nambari ya simu ya rununu
- Lebo zinazoelea zenye muundo wa glasi kioevu
- Inasaidia kuhesabu nambari ya kuthibitisha ya SMS
- Inasaidia kuingia kwa haraka kwa OAuth ya wahusika wengine na mwongozo wa lazima

## Tumia onyesho

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
  console.log("Uthibitishaji umefaulu:", e.detail);
});
</script>
```

## hali ya kudumu

- `0` (`STATE_MAIL`): Ingizo la barua pepe
- `1` (`STATE_CODE`): Usajili wa nambari ya uthibitishaji kwa barua pepe
- `2` (`STATE_PASSWD`): Kuingia kwa nenosiri la barua pepe
- `10` (`STATE_PHONE`): Weka nambari ya simu ya rununu
- `11` (`STATE_SMS_CODE`): Uthibitishaji wa msimbo wa uthibitishaji wa SMS
- `Array` (`OAUTH_HINT`): Orodha ya mwongozo wa kuingia wa watu wengine

## Mali na kazi za ndoano

- `step`: hali ya sasa (nambari au safu)
- `mail`: Barua pepe
- `phone`: nambari ya simu ya rununu
- `onSignup(mail, name, password, code)`: Sajili ya kupigiwa simu
- `onResend(mail)`: Tuma tena nambari ya kuthibitisha
- `onLogin(mail, password)`: Kupigiwa simu kwa kuingia kwa nenosiri
- `onSmsSend(phone)`: Tuma tena msimbo wa uthibitishaji wa SMS
- `onSmsVerify(phone, code)`: Kupigiwa simu kwa nambari ya kuthibitisha ya SMS
- `onPassport(provider)`: Mwito wa kuingia kwa haraka wa wahusika wengine
- `onReset(mail)`: Umesahau kupiga tena nenosiri la kuweka upya