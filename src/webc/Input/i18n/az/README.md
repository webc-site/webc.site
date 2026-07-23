# Yertutan vəziyyətini avtomatik dəyişən giriş qutusu

- Daxil edilmədikdə yertutanı göstərin
- Məzmun yazarkən yer tutucular rəvan şəkildə miqyaslanır və yuxarıda süzülür
- Saf CSS tətbiqi, JavaScript asılılığı yoxdur

## Demodan istifadə edin

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-poçt</label>
</b>
```

## struktur tələbləri

- Konteyner: Giriş qutularını və etiketləri yerləşdirmək üçün `.Input` sinfinin elementlərindən istifadə edin.
- Daxiletmə qutusu: `input` element, `placeholder=" "` (boşluq olan yertutan) vəziyyət keçidini işə salmaq üçün təyin edilməlidir.
- İpucu teqi: `label` element, `input`-dən dərhal sonra.

## stil sinfi

- `.Input`: Giriş qutusu strukturu və keçid animasiyasını təmin edən əsas üslub.
- `.Lg`: Vurğulama/şaxtalı şüşə modifikasiyası üslubu.