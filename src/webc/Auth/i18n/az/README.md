# Doğrulama girişi və qeydiyyatı

E-poçt və mobil telefon nömrəsinin qeydiyyatı və girişi, doğrulama kodunun yoxlanılması, parol girişi və üçüncü tərəfin sürətli girişini birləşdirin.

- E-poçt və mobil telefon nömrəsinin daxil edilməsini dəstəkləyin
- Maye şüşə teksturalı üzən etiketlər
- SMS doğrulama kodunu geri saymağı dəstəkləyin
- Üçüncü tərəfin OAuth sürətli girişini və bağlı təlimatı dəstəkləyin

## Demodan istifadə edin

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
  console.log("Autentifikasiya uğurlu oldu:", e.detail);
});
</script>
```

## status sabit

- `0` (`STATE_MAIL`): E-poçt daxiletməsi
- `1` (`STATE_CODE`): E-poçt doğrulama kodunun qeydiyyatı
- `2` (`STATE_PASSWD`): E-poçt parolu ilə giriş
- `10` (`STATE_PHONE`): Mobil telefon nömrəsini daxil edin
- `11` (`STATE_SMS_CODE`): SMS doğrulama kodunun yoxlanması
- `Array` (`OAUTH_HINT`): Üçüncü tərəfin giriş bələdçi siyahısı

## Xüsusiyyətlər və çəngəl funksiyaları

- `step`: cari status (nömrə və ya massiv)
- `mail`: E-poçt
- `phone`: mobil telefon nömrəsi
- `onSignup(mail, name, password, code)`: Geri zəngi qeyd edin
- `onResend(mail)`: Doğrulama kodunu yenidən göndərin
- `onLogin(mail, password)`: Parolla daxil olmaq üçün geri çağırış
- `onSmsSend(phone)`: SMS doğrulama kodunu geri çağırış göndərin
- `onSmsVerify(phone, code)`: Doğrulama SMS doğrulama kodu geri çağırış
- `onPassport(provider)`: Üçüncü tərəf sürətli giriş geri zəngi
- `onReset(mail)`: Parol sıfırlamasını unutdum geriyə zəng