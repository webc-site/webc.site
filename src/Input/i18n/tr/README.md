# Yer tutucu durumunu otomatik olarak değiştiren giriş kutusu

- Girilmediğinde yer tutucuyu göster
- İçerik yazarken yer tutucular sorunsuz bir şekilde ölçeklenir ve yukarı doğru kayar
- Saf CSS uygulaması, JavaScript bağımlılığı yok
- Varsayılan olarak buzlu cam arka plan ve fareyle üzerine gelme geçişi

## Demoyu kullanın

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-posta</label>
</b>
```

## yapısal gereksinimler

- Kapsayıcı: Giriş kutularını ve etiketleri barındırmak için `.Input` sınıfının öğelerini kullanın.
- Giriş kutusu: `input` öğesi, `placeholder=" "` (boşluk içeren bir yer tutucu), durum anahtarını tetiklemek için ayarlanmalıdır.
- İpucu etiketi: `label` öğesi, `input`'den hemen sonra.

## stil sınıfı

- `.Input`: Giriş kutusu yapısı ve geçiş animasyonu sağlayan temel stil.
- `.Lg`: Vurgulama/buzlu cam değiştirme stili.