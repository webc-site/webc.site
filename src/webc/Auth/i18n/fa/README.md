# احراز هویت ورود و ثبت نام

ثبت نام و ورود به سیستم ایمیل و شماره تلفن همراه، تأیید کد تأیید، ورود رمز عبور و ورود سریع شخص ثالث را یکپارچه کنید.

- پشتیبانی از تغییر زبانه بین آدرس ایمیل و شماره تلفن همراه
- برچسب های شناور با بافت شیشه ای مایع
- از انتخاب کد منطقه چند کشوری و شمارش معکوس کد تأیید پیامک پشتیبانی می کند
- از ورود سریع OAuth شخص ثالث و راهنمایی محدود پشتیبانی کنید

## از دمو استفاده کنید

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // کد وضعیت بازگشت: 1 برای ثبت کد تأیید، 2 برای ورود رمز عبور، یا آرایه ورود شخص ثالث ["google"، "apple"]
  return 2;
};

auth.onLogin = async (mail, password) => {
  return [0, mail];
};

auth.addEventListener("auth", (e) => {
  console.log("Authentication موفق:"، e.detail);
});
</script>
```

## وضعیت ثابت

- `0` (`STATE_MAIL`): ورودی ایمیل
- `1` (`STATE_CODE`): ثبت کد تأیید ایمیل
- `2` (`STATE_PASSWD`): ورود رمز عبور ایمیل
- `10` (`STATE_PHONE`): شماره تلفن همراه را وارد کنید
- `11` (`STATE_SMS_CODE`): تأیید کد تأیید پیامکی
- `Array` (`OAUTH_HINT`): فهرست راهنمای ورود به سیستم شخص ثالث

## خواص و توابع قلاب

- `step`: وضعیت فعلی (تعداد یا آرایه)
- `mail`: ایمیل
- `phone`: شماره تلفن همراه
- `cc`: کد شماره گیری بین المللی (پیش فرض 86)
- `onMail(mail)`: ایمیل چک برگشت به تماس
- `onSignup(mail, name, password)`: ثبت پاسخ تماس
- `onLogin(mail, password)`: بازگشت به سیستم ورود رمز عبور
- `onSmsSend(phone, cc)`: ارسال پیامک کد تأیید تماس پاسخ
- `onSmsVerify(phone, cc, code)`: پاسخ به تماس کد تأیید پیامک تأیید
- `onPassport(provider)`: پاسخ به تماس ورود سریع شخص ثالث
- `onReset(mail)`: پاسخ تماس مجدد رمز عبور را فراموش کرده اید