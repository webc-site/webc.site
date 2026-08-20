# প্রমাণীকরণ লগইন এবং নিবন্ধন

ইমেল এবং মোবাইল ফোন নম্বর নিবন্ধন এবং লগইন, যাচাইকরণ কোড যাচাইকরণ, পাসওয়ার্ড লগইন এবং তৃতীয় পক্ষের দ্রুত লগইন সংহত করুন।

- সমর্থন ইমেল এবং মোবাইল ফোন নম্বর ইনপুট
- তরল কাচের টেক্সচার সহ ভাসমান লেবেল
- এসএমএস যাচাইকরণ কোড কাউন্টডাউন সমর্থন করুন
- তৃতীয় পক্ষের OAuth দ্রুত লগইন এবং আবদ্ধ নির্দেশিকা সমর্থন করুন

## ডেমো ব্যবহার করুন

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
  console.log("প্রমাণিকরণ সফল:", e.detail);
});
</script>
```

## স্থিতি ধ্রুবক

- `0` (`STATE_MAIL`): ইমেল ইনপুট
- `1` (`STATE_CODE`): ইমেল যাচাইকরণ কোড নিবন্ধন
- `2` (`STATE_PASSWD`): ইমেল পাসওয়ার্ড লগইন
- `10` (`STATE_PHONE`): মোবাইল ফোন নম্বর লিখুন
- `11` (`STATE_SMS_CODE`): SMS যাচাইকরণ কোড যাচাইকরণ
- `Array` (`OAUTH_HINT`): তৃতীয় পক্ষের লগইন গাইড তালিকা

## বৈশিষ্ট্য এবং হুক ফাংশন

- `step`: বর্তমান অবস্থা (সংখ্যা বা অ্যারে)
- `mail`: ইমেল
- `phone`: মোবাইল ফোন নম্বর
- `onSignup(mail, name, password, code)`: কলব্যাক নিবন্ধন করুন
- `onResend(mail)`: যাচাইকরণ কোড কলব্যাক আবার পাঠান
- `onLogin(mail, password)`: পাসওয়ার্ড লগইন কলব্যাক
- `onSmsSend(phone)`: SMS যাচাইকরণ কোড কলব্যাক পাঠান
- `onSmsVerify(phone, code)`: যাচাইকরণ এসএমএস যাচাইকরণ কোড কলব্যাক
- `onPassport(provider)`: তৃতীয় পক্ষের দ্রুত লগইন কলব্যাক
- `onReset(mail)`: পাসওয়ার্ড রিসেট কলব্যাক ভুলে গেছেন৷