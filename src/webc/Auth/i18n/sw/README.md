# Uthibitishaji wa kuingia na usajili

Jumuisha usajili na kuingia kwa barua pepe na nambari ya simu ya rununu, uthibitishaji wa nambari ya uthibitishaji, kuingia kwa nenosiri na kuingia kwa haraka kwa wahusika wengine.

- Inaauni ubadilishaji wa kichupo kati ya anwani ya barua pepe na nambari ya simu ya rununu
- Lebo zinazoelea zenye muundo wa glasi kioevu
- Inaauni uteuzi wa msimbo wa eneo la nchi nyingi na uhesabuji wa msimbo wa uthibitishaji wa SMS
- Inasaidia kuingia kwa haraka kwa OAuth ya wahusika wengine na mwongozo wa lazima

## Tumia onyesho

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Rejesha msimbo wa hali: 1 kwa usajili wa nambari ya uthibitishaji, 2 kwa kuingia kwa nenosiri, au rudisha safu ya kuingia ya mtu wa tatu ["google", "apple"]
  return 2;
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
- `cc`: msimbo wa kimataifa wa kupiga simu (chaguo-msingi 86)
- `onMail(mail)`: Barua pepe angalia kurudishiwa simu
- `onSignup(mail, name, password)`: Sajili ya kupigiwa simu
- `onLogin(mail, password)`: Kupigiwa simu kwa kuingia kwa nenosiri
- `onSmsSend(phone, cc)`: Tuma tena msimbo wa uthibitishaji wa SMS
- `onSmsVerify(phone, cc, code)`: Kupigiwa simu kwa nambari ya kuthibitisha ya SMS
- `onPassport(provider)`: Mwito wa kuingia kwa haraka wa wahusika wengine
- `onReset(mail)`: Umesahau kupiga tena nenosiri la kuweka upya