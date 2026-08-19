# Doğrulama girişi və qeydiyyatı

E-poçt və mobil telefon nömrəsinin qeydiyyatı və girişi, doğrulama kodunun yoxlanılması, parol girişi və üçüncü tərəfin sürətli girişini birləşdirin.

- E-poçt ünvanı və mobil telefon nömrəsi arasında tab keçidini dəstəkləyir
- Maye şüşə teksturalı üzən etiketlər
- Çox ölkə ərazi kodu seçimini və SMS doğrulama kodunu geri saymağı dəstəkləyir
- Üçüncü tərəfin OAuth sürətli girişini və bağlı təlimatı dəstəkləyin

## Demodan istifadə edin

```html
<c-auth></c-auth>

<script type="module">
import "webc.site/Auth.js";

const auth = document.querySelector("c-auth");

auth.onMail = async (mail) => {
  // Vəziyyət kodunu qaytarın: doğrulama kodunun qeydiyyatı üçün 1, parol girişi üçün 2 və ya üçüncü tərəf giriş massivini qaytarın ["google", "apple"]
  return 2;
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
- `cc`: beynəlxalq yığım kodu (defolt 86)
- `onMail(mail)`: E-poçtu yoxlayın
- `onSignup(mail, name, password)`: Geri zəngi qeyd edin
- `onLogin(mail, password)`: Parolla daxil olmaq üçün geri çağırış
- `onSmsSend(phone, cc)`: SMS doğrulama kodunu geri çağırış göndərin
- `onSmsVerify(phone, cc, code)`: Doğrulama SMS doğrulama kodu geri çağırış
- `onPassport(provider)`: Üçüncü tərəf sürətli giriş geri zəngi
- `onReset(mail)`: Parol sıfırlamasını unutdum geriyə zəng