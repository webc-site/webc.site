# Kimlik doğrulama girişi ve kaydı

E-posta ve cep telefonu numarası kaydı ve oturum açma, doğrulama kodu doğrulama, parolayla oturum açma ve üçüncü taraf hızlı oturum açma özelliklerini entegre edin.

- E-posta adresi ve cep telefonu numarası arasında sekme geçişini destekler
- Sıvı cam dokulu yüzen etiketler
- Çok ülkeli alan kodu seçimini ve SMS doğrulama kodu geri sayımını destekler
- Üçüncü taraf OAuth hızlı girişini ve bağlı rehberliği destekleyin

## Demoyu kullanın

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Durum kodunu döndür: Doğrulama kodu kaydı için 1, şifre girişi için 2 veya üçüncü taraf giriş dizisini döndür ["google", "apple"]
  return 2;
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
- `cc`: uluslararası arama kodu (varsayılan 86)
- `onMail(mail)`: E-posta kontrolü geri araması
- `onSignup(mail, name, password)`: Geri aramayı kaydedin
- `onLogin(mail, password)`: Şifre girişini geri çağırma
- `onSmsSend(phone, cc)`: SMS doğrulama kodunu geri arama gönder
- `onSmsVerify(phone, cc, code)`: Doğrulama SMS'i doğrulama kodunun geri aranması
- `onPassport(provider)`: Üçüncü taraf hızlı giriş geri araması
- `onReset(mail)`: Şifremi unuttum sıfırlama geri araması