# प्रमाणीकरण लॉगिन आणि नोंदणी

ईमेल आणि मोबाइल फोन नंबरची नोंदणी आणि लॉगिन, पडताळणी कोड पडताळणी, पासवर्ड लॉगिन आणि तृतीय-पक्ष द्रुत लॉगिन एकत्रित करा.

- समर्थन ईमेल आणि मोबाइल फोन नंबर इनपुट
- लिक्विड ग्लास टेक्सचरसह फ्लोटिंग लेबल
- समर्थन SMS सत्यापन कोड काउंटडाउन
- तृतीय-पक्ष OAuth द्रुत लॉगिन आणि बंधनकारक मार्गदर्शनास समर्थन द्या

## डेमो वापरा

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
  console.log("प्रमाणीकरण यशस्वी:", e.detail);
});
</script>
```

## स्थिती स्थिर

- `0` (`STATE_MAIL`): ईमेल इनपुट
- `1` (`STATE_CODE`): ईमेल सत्यापन कोड नोंदणी
- `2` (`STATE_PASSWD`): ईमेल पासवर्ड लॉगिन
- `10` (`STATE_PHONE`): मोबाइल फोन नंबर एंटर करा
- `11` (`STATE_SMS_CODE`): SMS सत्यापन कोड सत्यापन
- `Array` (`OAUTH_HINT`): तृतीय-पक्ष लॉगिन मार्गदर्शक सूची

## गुणधर्म आणि हुक फंक्शन्स

- `step`: वर्तमान स्थिती (संख्या किंवा ॲरे)
- `mail`: ईमेल
- `phone`: मोबाइल फोन नंबर
- `onSignup(mail, name, password, code)`: कॉलबॅकची नोंदणी करा
- `onResend(mail)`: सत्यापन कोड कॉलबॅक पुन्हा पाठवा
- `onLogin(mail, password)`: पासवर्ड लॉगिन कॉलबॅक
- `onSmsSend(phone)`: SMS सत्यापन कोड कॉलबॅक पाठवा
- `onSmsVerify(phone, code)`: सत्यापन SMS सत्यापन कोड कॉलबॅक
- `onPassport(provider)`: तृतीय-पक्ष द्रुत लॉगिन कॉलबॅक
- `onReset(mail)`: पासवर्ड रीसेट कॉलबॅक विसरलात