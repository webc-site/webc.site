# route.js

Tək səhifəli ön uç marşrutlaşdırma idarəetməsi

## nowUrl()

Baş slash silinmiş cari URL yolunu əldə edin

Qaytarma dəyəri: cari yol sətri

## route(hook)

Marşrut dəyişiklikləri üçün dinləmə geri çağırışını qeyd edin. Qeydiyyatdan keçərkən cari yol ilə bir dəfə icra olunacaq.

parametr:
- `hook` : Marşrutun monitorinqi geri çağırış funksiyası
  - parametr
    - `url` : cari yol
    - `pre` : son yol

Qaytarma dəyəri: Qeydiyyatsız təmizləmə funksiyası

## setPre(url)

Son qeydə alınmış URL-i yadda saxlayın

parametr:
- `url` : yol sətri

## preUrl()

Son qeydin URL-ni əldə edin

Qaytarma dəyəri: son yol sətri

## refresh(url)

Bütün marşrut dinləmə geri çağırışlarını göstərilən yolda işə salın və əvvəlcədən yeniləyin

parametr:
- `url` : hədəf yol, defolt cari yol

## removeSlash(url)

Yol başlıqlarından kəsikləri silin

parametr:
- `url` : yol sətri

Dəyəri qaytarın: aparıcı kəsik xəttini sildikdən sonra yol

## setUrl(url)

Brauzerin ünvan çubuğu URL statusunu yeniləyin

parametr:
- `url` : hədəf yol

Dəyəri qaytarın: yol həqiqətən dəyişirsə 1

## goto(url)

Brauzer ünvanını yeniləyin və marşrut yeniləməsini işə salın

parametr:
- `url` : hədəf yol