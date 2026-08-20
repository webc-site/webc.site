# প্ৰমাণীকৰণ লগইন আৰু পঞ্জীয়ন

ইমেইল আৰু মোবাইল ফোন নম্বৰ পঞ্জীয়ন আৰু লগইন, পৰীক্ষণ ক'ড পৰীক্ষণ, পাছৱৰ্ড লগইন আৰু তৃতীয় পক্ষৰ দ্ৰুত লগইন একত্ৰিত কৰক।

- ইমেইল আৰু মোবাইল ফোন নম্বৰ ইনপুট সমৰ্থন কৰে
- লিকুইড গ্লাছৰ টেক্সচাৰৰ সৈতে ভাসমান লেবেল
- এছএমএছ সত্যাপন ক'ড কাউণ্টডাউন সমৰ্থন কৰে
- তৃতীয়-পক্ষ OAuth দ্ৰুত প্ৰৱেশ আৰু বাউণ্ড নিৰ্দেশনা সমৰ্থন কৰক

## ডেমো ব্যৱহাৰ কৰক

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
  console.log("প্ৰমাণীকৰণ সফল:", e.detail);
});
</script>
```

## অৱস্থা ধ্ৰুৱক

- `0` (`STATE_MAIL`): ইমেইল ইনপুট
- `1` (`STATE_CODE`): ইমেইল সত্যাপন ক'ড পঞ্জীয়ন
- `2` (`STATE_PASSWD`): ইমেইল পাছৱৰ্ড প্ৰৱেশ
- `10` (`STATE_PHONE`): মোবাইল ফোন নম্বৰ দিয়ক
- `11` (`STATE_SMS_CODE`): এছএমএছ পৰীক্ষণ ক’ড পৰীক্ষণ
- `Array` (`OAUTH_HINT`): তৃতীয়-পক্ষৰ প্ৰৱেশ গাইড তালিকা

## বৈশিষ্ট্য আৰু হুক কাৰ্য্য

- `step`: বৰ্তমান অৱস্থা (সংখ্যা বা এৰে)
- `mail`: ইমেইল
- `phone`: মোবাইল ফোন নম্বৰ
- `onSignup(mail, name, password, code)`: কলবেক পঞ্জীয়ন কৰক
- `onResend(mail)`: সত্যাপন ক'ড কলবেক পুনৰ প্ৰেৰণ কৰক
- `onLogin(mail, password)`: পাছৱৰ্ড প্ৰৱেশ কলবেক
- `onSmsSend(phone)`: এছএমএছ সত্যাপন ক'ড কলবেক পঠাওক
- `onSmsVerify(phone, code)`: সত্যাপন এছএমএছ সত্যাপন ক'ড কলবেক
- `onPassport(provider)`: তৃতীয় পক্ষৰ দ্ৰুত প্ৰৱেশ কলবেক
- `onReset(mail)`: পাছৱৰ্ড ৰিছেট কলবেক পাহৰিলোঁ