# Kimlik doğrulama girişi ve kaydı

E-posta ve cep telefonu numarası kaydı ve oturum açma, doğrulama kodu doğrulama, parolayla oturum açma ve üçüncü taraf hızlı oturum açma özelliklerini entegre edin.

- E-posta ve cep telefonu numarası girişini destekleyin
- Sıvı cam dokulu yüzen etiketler
- SMS doğrulama kodu geri sayımını destekleyin
- Üçüncü taraf OAuth hızlı girişini ve bağlı rehberliği destekleyin

## Demoyu kullanın

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
  console.log("Kimlik doğrulama başarılı:", e.detail);
});
</script>
```

## durum sabiti

- `0` (`STATE_MAIL`): E-posta girişi
- `1` (`STATE_CODE`): E-posta doğrulama kodu kaydı
- `2` (`STATE_PASSWD`): E-posta şifresi giriş
- `10` (`STATE_PHONE`): Cep telefonu numarasını girin
- `11` (`STATE_SMS_CODE`): SMS doğrulama kodu doğrulaması
- `Array` (`OAUTH_HINT`): Üçüncü taraf giriş kılavuzu listesi

## Özellikler ve kanca işlevleri

- `step`: geçerli durum (sayı veya dizi)
- `mail`: E-posta
- `phone`: cep telefonu numarası
- `onSignup(mail, name, password, code)`: Geri aramayı kaydedin
- `onResend(mail)`: Doğrulama kodunu geri aramayı yeniden gönder
- `onLogin(mail, password)`: Şifre girişini geri çağırma
- `onSmsSend(phone)`: SMS doğrulama kodunu geri arama gönder
- `onSmsVerify(phone, code)`: Doğrulama SMS'i doğrulama kodunun geri aranması
- `onPassport(provider)`: Üçüncü taraf hızlı giriş geri araması
- `onReset(mail)`: Şifremi unuttum sıfırlama geri araması