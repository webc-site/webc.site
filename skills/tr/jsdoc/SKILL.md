---
name: jsdoc
description: src/js belgesi otomatik olarak oluşturuldu
---

## Adımları çalıştırın

1. Eksik belgelere sahip işlevleri görüntülemek için `./sh/jsDoc.js` komutunu çalıştırın (çıktı yoksa eklemenize gerek yoktur).
2. Çıktı dosyası listesine göre mevcut belgeleri ve kodları tek tek okuyup tamamlayın (sırayla işleyip tek tek kırın).

## Dokümantasyon gereksinimleri

Dışa aktarma bir fonksiyon ise, yazın
- Parametreler ve dönüş değerleri:
  - İlgili açıklamaları yalnızca parametreler veya dönüş değerleri varsa yazın, aksi halde yazmayın.
  - Parametreler sırasız listeler kullanılarak tanıtılır.
  - Dönüş değeri bir diziyse, onu tek tek tanımlamak için sırasız bir liste kullanın (aksi takdirde doğrudan yazın, `Dönüş değeri: açıklama`, yalnızca bir satır).
  - Parametreler veya dönüş değeri fonksiyon ise, parametreleri ve dönüş değerlerini açıklamak için alt sırasız listeler kullanın (yoksa yazmayın).

Dışa aktarma bir sabitse, ne olduğunu belirtin, yalnızca bir satır

- Kısa ve profesyonel bir dil kullanın ve sıfat kullanmaktan kaçının.
- Mevcut belgeyi gözden geçirin, tamamen yeniden yazmayın

## format şablonu

Tekrardan kaçınmak için her ismi yalnızca bir kez yazın ve tek satırda net bir şekilde ifade etmeye çalışın. Referans formatı aşağıdaki gibidir

```
# dosya adı

## Fonksiyon adı (parametre)

Kullanım açıklaması

parametre:
- `xx` : Amaç
  - parametre
    - `a` : Amaç
  - Dönüş değeri: açıklama

Dönüş değeri: Açıklama
```