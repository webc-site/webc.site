# प्रमाणीकरण लगइन र दर्ता

इमेल र मोबाइल फोन नम्बर दर्ता र लगइन, प्रमाणिकरण कोड प्रमाणीकरण, पासवर्ड लगइन र तेस्रो-पक्ष द्रुत लगइन एकीकृत गर्नुहोस्।

- इमेल र मोबाइल फोन नम्बर इनपुट समर्थन गर्नुहोस्
- तरल गिलास बनावट संग फ्लोटिंग लेबल
- समर्थन SMS प्रमाणिकरण कोड काउन्टडाउन
- तेस्रो-पक्ष OAuth द्रुत लगइन र बाध्य मार्गदर्शन समर्थन गर्नुहोस्

## डेमो प्रयोग गर्नुहोस्

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
  console.log("प्रमाणीकरण सफल:", e.detail);
});
</script>
```

## स्थिति स्थिर

- `0` (`STATE_MAIL`): इमेल इनपुट
- `1` (`STATE_CODE`): इमेल प्रमाणिकरण कोड दर्ता
- `2` (`STATE_PASSWD`): इमेल पासवर्ड लगइन
- `10` (`STATE_PHONE`): मोबाइल फोन नम्बर प्रविष्ट गर्नुहोस्
- `11` (`STATE_SMS_CODE`): SMS प्रमाणीकरण कोड प्रमाणीकरण
- `Array` (`OAUTH_HINT`): तेस्रो-पक्ष लगइन गाइड सूची

## गुण र हुक प्रकार्यहरू

- `step`: हालको स्थिति (नम्बर वा एरे)
- `mail`: इमेल
- `phone`: मोबाइल फोन नम्बर
- `onSignup(mail, name, password, code)`: कलब्याक दर्ता गर्नुहोस्
- `onResend(mail)`: प्रमाणीकरण कोड कलब्याक पुन: पठाउनुहोस्
- `onLogin(mail, password)`: पासवर्ड लगइन कलब्याक
- `onSmsSend(phone)`: SMS प्रमाणीकरण कोड कलब्याक पठाउनुहोस्
- `onSmsVerify(phone, code)`: प्रमाणीकरण SMS प्रमाणीकरण कोड कलब्याक
- `onPassport(provider)`: तेस्रो-पक्ष द्रुत लगइन कलब्याक
- `onReset(mail)`: पासवर्ड रिसेट कलब्याक बिर्सनुभयो