# પ્રમાણીકરણ લૉગિન અને નોંધણી

ઈમેલ અને મોબાઈલ ફોન નંબરની નોંધણી અને લોગિન, વેરીફીકેશન કોડ વેરીફીકેશન, પાસવર્ડ લોગીન અને તૃતીય-પક્ષ ઝડપી લોગીનને એકીકૃત કરો.

- ઇમેઇલ અને મોબાઇલ ફોન નંબર ઇનપુટને સપોર્ટ કરો
- પ્રવાહી કાચની રચના સાથે ફ્લોટિંગ લેબલ્સ
- એસએમએસ ચકાસણી કોડ કાઉન્ટડાઉનને સપોર્ટ કરો
- તૃતીય-પક્ષ OAuth ઝડપી લૉગિન અને બાઉન્ડ માર્ગદર્શનને સપોર્ટ કરો

## ડેમોનો ઉપયોગ કરો

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
  console.log("પ્રમાણીકરણ સફળ:", e.detail);
});
</script>
```

## સ્થિતિ સ્થિર

- `0` (`STATE_MAIL`): ઇમેઇલ ઇનપુટ
- `1` (`STATE_CODE`): ઇમેઇલ ચકાસણી કોડ નોંધણી
- `2` (`STATE_PASSWD`): ઇમેઇલ પાસવર્ડ લોગિન
- `10` (`STATE_PHONE`): મોબાઇલ ફોન નંબર દાખલ કરો
- `11` (`STATE_SMS_CODE`): SMS ચકાસણી કોડ ચકાસણી
- `Array` (`OAUTH_HINT`): તૃતીય-પક્ષ લૉગિન માર્ગદર્શિકા સૂચિ

## ગુણધર્મો અને હૂક કાર્યો

- `step`: વર્તમાન સ્થિતિ (નંબર અથવા એરે)
- `mail`: ઈમેલ
- `phone`: મોબાઇલ ફોન નંબર
- `onSignup(mail, name, password, code)`: કૉલબેક રજીસ્ટર કરો
- `onResend(mail)`: ચકાસણી કોડ કૉલબેક ફરીથી મોકલો
- `onLogin(mail, password)`: પાસવર્ડ લોગિન કૉલબેક
- `onSmsSend(phone)`: SMS ચકાસણી કોડ કૉલબેક મોકલો
- `onSmsVerify(phone, code)`: ચકાસણી SMS ચકાસણી કોડ કૉલબેક
- `onPassport(provider)`: તૃતીય-પક્ષ ઝડપી લોગિન કૉલબેક
- `onReset(mail)`: પાસવર્ડ રીસેટ કૉલબેક ભૂલી ગયા છો