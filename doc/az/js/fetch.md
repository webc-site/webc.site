# fetch.js

Alma inkapsulyasiyasına əsaslanan şəbəkə sorğu aləti funksiyası

## F(url, opt)

Şəbəkə sorğusu göndərin və cavab obyektini qaytarın

parametr:
- `url` : Ünvan tələb edin
- `opt` : `fetch` seçim obyekti

Qaytarma dəyəri: Cavab obyekti

## f(attr)

Sorğunu əhatə edən və qaytarılmış məzmunu müəyyən formatda təhlil edən daha yüksək səviyyəli funksiya

parametr:
- `attr` : cavab orqanının təhlili atribut adı

Dəyəri qaytarın: məzmunu asinxron sorğulamaq və təhlil etmək funksiyası
  - parametr
    - `url` : Ünvan tələb edin
    - `opt` : `fetch` seçim obyekti
  - Qaytarılan dəyər: təhlil edilmiş məzmun

## fTxt

Şəbəkə sorğusu göndərin və cavab mətnini mətn formatında qaytarın

parametr:
- `url` : Ünvan tələb edin
- `opt` : `fetch` seçim obyekti

Qaytarma dəyəri: cavab mətni

## fJson(url, opt)

Şəbəkə sorğusu göndərin və cavab orqanını JSON formatında təhlil edin və qaytarın

parametr:
- `url` : Ünvan tələb edin
- `opt` : `fetch` seçim obyekti

Qaytarma dəyəri: təhlil edilmiş JSON obyekti

## fBin(url, opt)

Şəbəkə sorğusu göndərin və cavab orqanını ikili bayt massivi kimi qaytarın

parametr:
- `url` : Ünvan tələb edin
- `opt` : `fetch` seçim obyekti

Qaytarılan dəyər: bayt massivi