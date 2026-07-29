# fetchLang.js

Til paketlarini asinxron yuklang va yangilanishlarni qayta qo'ng'iroqlarni bog'lang

## fetchLang(getDict)

Til paketini asinxron ravishda olish va til oʻzgarganda qayta qoʻngʻiroqni amalga oshirish uchun til toʻplami tinglovchisini yarating.

parametr:
- `getDict` : Til paketining asinxron funksiyasini oling
  - parametr
    - `code` : til kodi
  - Qaytish qiymati: til to'plami lug'ati

Qaytish qiymati: qayta qo'ng'iroqni ro'yxatdan o'tkazish funktsiyasi
- parametr
  - `refresh` : Til yangilanganda qayta qo'ng'iroq funksiyasini yangilash
    - parametr
      - `i18n` : Tillar toʻplami lugʻat obyekti
      - `code` : Joriy til kodi
- Qaytish qiymati: qayta qo'ng'iroqni ro'yxatdan o'chirish funktsiyasi