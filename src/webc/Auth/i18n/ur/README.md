# توثیق لاگ ان اور رجسٹریشن

ای میل اور موبائل فون نمبر کی رجسٹریشن اور لاگ ان، تصدیقی کوڈ کی تصدیق، پاس ورڈ لاگ ان اور تیسرے فریق کے فوری لاگ ان کو مربوط کریں۔

- ای میل اور موبائل فون نمبر ان پٹ کو سپورٹ کریں۔
- مائع شیشے کی ساخت کے ساتھ تیرتے لیبل
- ایس ایم ایس تصدیقی کوڈ الٹی گنتی کو سپورٹ کریں۔
- فریق ثالث OAuth فوری لاگ ان اور پابند رہنمائی کی حمایت کریں۔

## ڈیمو استعمال کریں۔

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
  console.log("تصدیق کامیاب:"، e.detail)؛
});
</script>
```

## مستقل حیثیت

- `0` (`STATE_MAIL`): ای میل ان پٹ
- `1` (`STATE_CODE`): ای میل تصدیقی کوڈ رجسٹریشن
- `2` (`STATE_PASSWD`): ای میل پاس ورڈ لاگ ان
- `10` (`STATE_PHONE`): موبائل فون نمبر درج کریں۔
- `11` (`STATE_SMS_CODE`): SMS تصدیقی کوڈ کی توثیق
- `Array` (`OAUTH_HINT`): فریق ثالث لاگ ان گائیڈ کی فہرست

## پراپرٹیز اور ہک افعال

- `step`: موجودہ حیثیت (نمبر یا صف)
- `mail`: ای میل
- `phone`: موبائل فون نمبر
- `onSignup(mail, name, password, code)`: کال بیک رجسٹر کریں۔
- `onResend(mail)`: تصدیقی کوڈ کال بیک دوبارہ بھیجیں۔
- `onLogin(mail, password)`: پاس ورڈ لاگ ان کال بیک
- `onSmsSend(phone)`: SMS تصدیقی کوڈ کال بیک بھیجیں۔
- `onSmsVerify(phone, code)`: تصدیقی SMS توثیقی کوڈ کال بیک
- `onPassport(provider)`: فریق ثالث فوری لاگ ان کال بیک
- `onReset(mail)`: پاس ورڈ ری سیٹ کال بیک بھول گئے۔