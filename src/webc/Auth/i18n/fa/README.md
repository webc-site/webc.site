# احراز هویت ورود و ثبت نام

ثبت نام و ورود به سیستم ایمیل و شماره تلفن همراه، تأیید کد تأیید، ورود رمز عبور و ورود سریع شخص ثالث را یکپارچه کنید.

- پشتیبانی از ورودی ایمیل و شماره تلفن همراه
- برچسب های شناور با بافت شیشه ای مایع
- پشتیبانی از شمارش معکوس کد تأیید پیامک
- از ورود سریع OAuth شخص ثالث و راهنمایی محدود پشتیبانی کنید

## از دمو استفاده کنید

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
- `onSignup(mail, name, password, code)`: ثبت پاسخ تماس
- `onResend(mail)`: ارسال مجدد تماس کد تأیید
- `onLogin(mail, password)`: بازگشت به سیستم ورود رمز عبور
- `onSmsSend(phone)`: ارسال پیامک کد تأیید تماس پاسخ
- `onSmsVerify(phone, code)`: پاسخ به تماس کد تأیید پیامک تأیید
- `onPassport(provider)`: پاسخ به تماس ورود سریع شخص ثالث
- `onReset(mail)`: پاسخ تماس مجدد رمز عبور را فراموش کرده اید