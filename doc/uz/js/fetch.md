# fetch.js

Inkapsulyatsiyani olishga asoslangan tarmoq so'rovi vositasi funksiyasi

## F(url, opt)

Tarmoq so'rovini yuboring va javob ob'ektini qaytaring

parametr:
- `url` : Manzilni so'rash
- `opt` : `fetch` opsiya obyekti

Qaytish qiymati: Javob obyekti

## f(attr)

So'rovni o'rab oladigan va qaytarilgan tarkibni belgilangan formatda tahlil qiluvchi yuqori darajadagi funksiya

parametr:
- `attr` : javob tanasi tahlil qiluvchi atribut nomi

Qaytish qiymati: asinxron so'rov va tarkibni tahlil qilish funktsiyasi
  - parametr
    - `url` : Manzilni so'rash
    - `opt` : `fetch` opsiya obyekti
  - Qaytish qiymati: tahlil qilingan tarkib

## fTxt

Tarmoq so'rovini yuboring va javob matnini matn formatida qaytaring

parametr:
- `url` : Manzilni so'rash
- `opt` : `fetch` opsiya obyekti

Qaytish qiymati: javob matni

## fJson(url, opt)

Tarmoq so'rovini yuboring va javob tanasini JSON formatida tahlil qiling va qaytaring

parametr:
- `url` : Manzilni so'rash
- `opt` : `fetch` opsiya obyekti

Qaytish qiymati: tahlil qilingan JSON obyekti

## fBin(url, opt)

Tarmoq so'rovini yuboring va javob tanasini ikkilik bayt massivi sifatida qaytaring

parametr:
- `url` : Manzilni so'rash
- `opt` : `fetch` opsiya obyekti

Qaytish qiymati: bayt massivi