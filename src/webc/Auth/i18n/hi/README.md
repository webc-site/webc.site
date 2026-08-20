# प्रमाणीकरण लॉगिन और पंजीकरण

ईमेल और मोबाइल फ़ोन नंबर पंजीकरण और लॉगिन, सत्यापन कोड सत्यापन, पासवर्ड लॉगिन और तृतीय-पक्ष त्वरित लॉगिन एकीकृत करें।

- ईमेल और मोबाइल फोन नंबर इनपुट का समर्थन करें
- तरल ग्लास बनावट के साथ फ्लोटिंग लेबल
- एसएमएस सत्यापन कोड उलटी गिनती का समर्थन करें
- तृतीय-पक्ष OAuth त्वरित लॉगिन और बाध्य मार्गदर्शन का समर्थन करें

## डेमो का प्रयोग करें

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
  कंसोल.लॉग ("प्रमाणीकरण सफल:", ई.विस्तार);
});
</script>
```

## स्थिति स्थिर

- `0` (`STATE_MAIL`): ईमेल इनपुट
- `1` (`STATE_CODE`): ईमेल सत्यापन कोड पंजीकरण
- `2` (`STATE_PASSWD`): ईमेल पासवर्ड लॉगिन
- `10` (`STATE_PHONE`): मोबाइल फोन नंबर दर्ज करें
- `11` (`STATE_SMS_CODE`): एसएमएस सत्यापन कोड सत्यापन
- `Array` (`OAUTH_HINT`): तृतीय-पक्ष लॉगिन गाइड सूची

## गुण और हुक कार्य

- `step`: वर्तमान स्थिति (संख्या या सरणी)
- `mail`: ईमेल
- `phone`: मोबाइल फ़ोन नंबर
- `onSignup(mail, name, password, code)`: कॉलबैक पंजीकृत करें
- `onResend(mail)`: सत्यापन कोड कॉलबैक पुनः भेजें
- `onLogin(mail, password)`: पासवर्ड लॉगिन कॉलबैक
- `onSmsSend(phone)`: एसएमएस सत्यापन कोड कॉलबैक भेजें
- `onSmsVerify(phone, code)`: सत्यापन एसएमएस सत्यापन कोड कॉलबैक
- `onPassport(provider)`: तृतीय-पक्ष त्वरित लॉगिन कॉलबैक
- `onReset(mail)`: पासवर्ड रीसेट कॉलबैक भूल गए