# fetchLang.js

Dil paketlerini eşzamansız olarak yükleyin ve güncelleme geri çağrılarını bağlayın

## fetchLang(getDict)

Dil paketini eşzamansız olarak edinmek ve dil değiştiğinde yenileme geri araması yürütmek için bir dil paketi dinleyicisi oluşturun

parametre:
- `getDict` : Dil paketinin eşzamansız işlevini alın
  - parametre
    - `code` : dil kodu
  - Dönüş değeri: dil paketi sözlüğü

Dönüş değeri: yenileme geri çağrısını kaydetme işlevi
- parametre
  - `refresh` : Dil güncellendiğinde geri çağırma işlevini yenile
    - parametre
      - `i18n` : Dil paketi sözlük nesnesi
      - `code` : Geçerli dil kodu
- Dönüş değeri: yenileme geri aramasının kaydını silme işlevi