# fetch.js

Getirme kapsüllemesine dayalı ağ istek aracı işlevi

## F(url, opt)

Bir ağ isteği gönderin ve bir yanıt nesnesi döndürün

parametre:
- `url` : İstek adresi
- `opt` : `fetch` seçenekler nesnesi

Dönüş değeri: Yanıt nesnesi

## f(attr)

Bir isteği saran ve döndürülen içeriği belirli bir biçimde ayrıştıran daha üst düzey bir işlev

parametre:
- `attr` : yanıt gövdesi ayrıştırma özelliği adı

Dönüş değeri: eşzamansız olarak içerik isteme ve ayrıştırma işlevi
  - parametre
    - `url` : İstek adresi
    - `opt` : `fetch` seçenekler nesnesi
  - Dönüş değeri: ayrıştırılmış içerik

## fTxt

Bir ağ isteği gönderin ve yanıt metnini metin biçiminde döndürün

parametre:
- `url` : İstek adresi
- `opt` : `fetch` seçenekler nesnesi

Dönüş değeri: yanıt metni

## fJson(url, opt)

Bir ağ isteği gönderin ve yanıt gövdesini ayrıştırıp JSON biçiminde döndürün

parametre:
- `url` : İstek adresi
- `opt` : `fetch` seçenekler nesnesi

Dönüş değeri: ayrıştırılmış JSON nesnesi

## fBin(url, opt)

Bir ağ isteği gönderin ve yanıt gövdesini ikili bayt dizisi olarak döndürün

parametre:
- `url` : İstek adresi
- `opt` : `fetch` seçenekler nesnesi

Dönüş değeri: bayt dizisi