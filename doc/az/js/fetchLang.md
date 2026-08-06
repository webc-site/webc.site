# fetchLang.js

Asinxron olaraq dil paketlərini yükləyin və yeniləmə geri çağırışlarını bağlayın

## fetchLang(getDict)

Dil paketini asinxron şəkildə əldə etmək və dil dəyişdikdə yenidən geri çağırış yerinə yetirmək üçün dil paketi dinləyicisi yaradın

parametr:
- `getDict` : Dil paketinin asinxron funksiyasını əldə edin
  - parametr
    - `code` : dil kodu
  - Qaytarma dəyəri: dil paketi lüğəti

Qaytarma dəyəri: təzələmə geri çağırışını qeyd etmək funksiyası
- parametr
  - `refresh` : Dil yeniləndikdə geri çağırış funksiyasını təzələyin
    - parametr
      - `i18n` : Dil paketi lüğət obyekti
      - `code` : Cari dil kodu
- Qaytarma dəyəri: təzələmə geri çağırışının qeydiyyatdan çıxarılması funksiyası