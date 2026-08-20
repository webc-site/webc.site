# تصديق لاگ ان ۽ رجسٽريشن

ضم ڪريو اي ميل ۽ موبائل فون نمبر رجسٽريشن ۽ لاگ ان، تصديق ڪوڊ جي تصديق، پاسورڊ لاگ ان ۽ ٽئين پارٽي تڪڙي لاگ ان.

- سپورٽ اي ميل ۽ موبائل فون نمبر ان پٽ
- مائع گلاس جي بناوت سان سچل ليبل
- سپورٽ ايس ايم ايس تصديق ڪوڊ ڳڻپ
- سپورٽ ٽئين پارٽي OAuth جلدي لاگ ان ۽ پابند ھدايت

## ڊيمو استعمال ڪريو

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
  console.log("تصديق ڪامياب:", e.detail);
});
</script>
```

## مستقل حيثيت

- `0` (`STATE_MAIL`): اي ميل ان پٽ
- `1` (`STATE_CODE`): اي ميل تصديق ڪوڊ رجسٽريشن
- `2` (`STATE_PASSWD`): اي ميل پاسورڊ لاگ ان
- `10` (`STATE_PHONE`): موبائل فون نمبر داخل ڪريو
- `11` (`STATE_SMS_CODE`): ايس ايم ايس تصديق واري ڪوڊ جي تصديق
- `Array` (`OAUTH_HINT`): ٽئين پارٽي لاگ ان گائيڊ لسٽ

## خاصيتون ۽ ٿلهو افعال

- `step`: موجوده حيثيت (نمبر يا صف)
- `mail`: اي ميل
- `phone`: موبائل فون نمبر
- `onSignup(mail, name, password, code)`: ڪال بڪ رجسٽر ڪريو
- `onResend(mail)`: ٻيهر موڪليو تصديقي ڪوڊ ڪال بيڪ
- `onLogin(mail, password)`: پاسورڊ لاگ ان ڪال بيڪ
- `onSmsSend(phone)`: ايس ايم ايس تصديقي ڪوڊ ڪال بيڪ موڪليو
- `onSmsVerify(phone, code)`: تصديق ايس ايم ايس تصديق ڪوڊ ڪال بيڪ
- `onPassport(provider)`: ٽئين پارٽي تڪڙي لاگ ان ڪال بيڪ
- `onReset(mail)`: وساريو پاسورڊ ري سيٽ ڪال بيڪ