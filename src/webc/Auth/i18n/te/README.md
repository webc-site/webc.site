# ప్రామాణీకరణ లాగిన్ మరియు నమోదు

ఇమెయిల్ మరియు మొబైల్ ఫోన్ నంబర్ నమోదు మరియు లాగిన్, ధృవీకరణ కోడ్ ధృవీకరణ, పాస్‌వర్డ్ లాగిన్ మరియు మూడవ పక్ష త్వరిత లాగిన్‌ను ఏకీకృతం చేయండి.

- మద్దతు ఇమెయిల్ మరియు మొబైల్ ఫోన్ నంబర్ ఇన్‌పుట్
- ద్రవ గాజు ఆకృతితో తేలియాడే లేబుల్‌లు
- SMS ధృవీకరణ కోడ్ కౌంట్‌డౌన్‌కు మద్దతు
- మూడవ పక్షం OAuth శీఘ్ర లాగిన్ మరియు కట్టుబడి మార్గదర్శకత్వానికి మద్దతు ఇవ్వండి

## డెమో ఉపయోగించండి

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
  console.log("ప్రామాణీకరణ విజయవంతమైంది:", e.detail);
});
</script>
```

## స్థితి స్థిరంగా

- `0` (`STATE_MAIL`): ఇమెయిల్ ఇన్‌పుట్
- `1` (`STATE_CODE`): ఇమెయిల్ ధృవీకరణ కోడ్ నమోదు
- `2` (`STATE_PASSWD`): ఇమెయిల్ పాస్‌వర్డ్ లాగిన్
- `10` (`STATE_PHONE`): మొబైల్ ఫోన్ నంబర్‌ను నమోదు చేయండి
- `11` (`STATE_SMS_CODE`): SMS ధృవీకరణ కోడ్ ధృవీకరణ
- `Array` (`OAUTH_HINT`): థర్డ్-పార్టీ లాగిన్ గైడ్ జాబితా

## లక్షణాలు మరియు హుక్ విధులు

- `step`: ప్రస్తుత స్థితి (సంఖ్య లేదా శ్రేణి)
- `mail`: ఇమెయిల్
- `phone`: మొబైల్ ఫోన్ నంబర్
- `onSignup(mail, name, password, code)`: కాల్‌బ్యాక్‌ను నమోదు చేయండి
- `onResend(mail)`: ధృవీకరణ కోడ్ కాల్‌బ్యాక్‌ని మళ్లీ పంపండి
- `onLogin(mail, password)`: పాస్‌వర్డ్ లాగిన్ కాల్‌బ్యాక్
- `onSmsSend(phone)`: SMS ధృవీకరణ కోడ్ కాల్‌బ్యాక్‌ని పంపండి
- `onSmsVerify(phone, code)`: ధృవీకరణ SMS ధృవీకరణ కోడ్ కాల్‌బ్యాక్
- `onPassport(provider)`: థర్డ్-పార్టీ త్వరిత లాగిన్ కాల్‌బ్యాక్
- `onReset(mail)`: పాస్‌వర్డ్ రీసెట్ కాల్‌బ్యాక్‌ని మర్చిపోయాను