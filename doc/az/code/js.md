# JS kodunun spesifikasiyası

## kodlaşdırma tərzi

- Ən müasir js sintaksisindən istifadə edərək sadə, zərif və səmərəli
- Həddindən artıq uzun funksiyaları ayırın və interfeys dizaynı aşağı birləşmə və yüksək birləşmə olmalıdır.
- Massivlərdən + loops/forEach/map-dan daha çox istifadə edin və daha az təkrarlanan kod yazın
- Həddindən artıq şərhlərin qarşısını almaq üçün funksiya şərhlərini sadə kodda yazmayın. Mürəkkəb məntiq və xüsusi ehtiyaclar zərif Çin dilində izah edilir.
- Təkrarlanan kod artıqlığı azaltmaq üçün funksiyalara mücərrədləşdirilir. Məsələn, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` kimi yazıla bilər
- Dəyişən bəyannaməsi: Bir neçə ardıcıl `const` bəyannaməni bir bəyanatda birləşdirin. Bunu üç sətirdə yazmaq əvəzinə, `const a=1, b=2, c=3;` yazın
- Asinxron emal: `await` istifadə edin, `.then` zəncir zənglərinin istifadəsini qadağan edin
- İstisna idarəetmə kodunu avtomatik yaratmayın, avtomatik olaraq `try...catch` yazmayın (`try ... catch` əl ilə saxlanılır, mövcud `try catch` silinməməlidir)
- Əvvəlcə təmiz funksiyalar: yalnız saf funksiyalar yazın, heç vaxt siniflər
- Ok funksiyalarından istifadə edin `const funcName = () => {}` və `function` açar sözündən istifadə etməyin (generatorlar istisna olmaqla); parametrləri bağlamaq üçün .bind istifadə edə bilsəniz, funksiyaları təyin etməkdən çəkinin
- Kodun təkrar istifadəsi: Yenidən istifadəyə diqqət yetirin, daha kiçik funksiyaları çıxarın və çox sayda oxşar və ya kopyala-yapışdırılmış kod strukturlarından qəti şəkildə çəkinin.
- Obyektə giriş: Tələb olunan atributları çıxarmaq üçün dağıdıcı təyinatdan istifadə edərək prioritetləşdirin, dərin və iç-içə atributlara daxil olmaq üçün daxili nöqtələrdən dəfələrlə istifadə etməkdən çəkinin və təkrarlanan isteğe bağlı zəncirvari mühakimələri birləşdirin.
- Funksiya parametrləri üçün obyektlərdən istifadə etməyin, `{a,b,c}` yazmayın, `a, b, c` yazmayın; çoxlu isteğe bağlı parametrlər varsa, [[konfiqurasiya elementlərinin sayı, konfiqurasiya elementləri], [konfiqurasiya elementlərinin sayı, konfiqurasiya elementləri],..] istifadə edin. Bu paradiqmada konfiqurasiya elementləri ədədi sabitlərlə müəyyən edilir.
- Çox dəyərli qaytarmalar üçün `{a,b,c}` əvəzinə `[a,b,c]` massivindən istifadə edin. 3-dən çox qaytarma dəyəri varsa, mövqe mənasını müəyyən etmək üçün rəqəmli sabitlərdən istifadə edin.
- Vəziyyəti təmsil etmək üçün sətirə ehtiyac yoxdur, vəziyyəti müəyyən etmək üçün rəqəmli sabitlərdən istifadə edin
- Heç bir sətir şablonu (``) istifadə edilmir, sətir birləşməsindən (+) istifadə edilir, idxal istisna olmaqla (Vite statik təhlili üçün əlverişlidir)
- Döngü üçün, əgər sizə seriya nömrəsi lazımdırsa, `i++` əvəzinə `++i` istifadə edin
- Lazımsız`?.`dən çəkinin və müdafiə xarakterli proqramları qadağan edin
- Dəyişən adının cəm olmasına ehtiyac yoxdur və siyahını göstərmək üçün `_li` ilə bitir.

## Adlandırma konvensiyası

- Adlandırma minimalizmi izləyir. Qısa, lakin mənalı adlardan istifadə edin, məsələn: `remove`, `delete`, `del` əvəzinə `rm` istifadə edin. Bununla belə, siz ifrata varmaqdan da çəkinməlisiniz, məsələn: `map` əvəzinə bir hərf `m` istifadə etməyin.
- Funksiyaların adlandırılmasında yalnız fellərdən istifadə etməyə çalışın. Əgər onu ifadə etmək üçün bir sözdən istifadə edə bilirsinizsə, iki sözdən istifadə etməyin. İsimlər fayl adlarında əks olunur. Əgər fayl adına fel əlavə etmək lazımdırsa, zəhmət olmasa adı birinci, feli isə axırına qoyun. Məsələn: `setProfile.js` əvəzinə `profileSet.js`
- Dəyişən adları: alt xətt üslubundan istifadə edin (snake_case), məsələn `user_auth_token`
- Funksiya adı: Kiçik camelCase (camelCase) istifadə edin, məsələn, `userData`
- Funksiya parametrləri: Əgər bu, geri çağırış funksiyasıdırsa, onu kiçik hərflərlə adlandırın, məsələn, `onChange`
- Modul səviyyəli sabit təriflər böyük hərf altından xətt çəkmək üslubundan istifadə edir `UPPER_SNAKE_CASE`
- `get`, mənasız prefikslər yazmayın, məsələn: `getCookie` əvəzinə `cookieByHeader` yazın
- Qlobal/modul səviyyəli sabitlər: böyük hərf altından xətt çəkmək üslubundan istifadə edin (UPPER_SNAKE_CASE), məs. `CODE_TO_ID`, `ID_TO_LANG`

## Modul mexanizm

- İdxal: Tələb üzrə dəqiq funksiyaları idxal edin, bütün modulun birbaşa idxalını qadağan edin (`import * as x` və ya böyük obyektləri idxal etməyin)
- İxrac: Obyektlərin ixracını söndürün. `export const X=1, abc=()=>{};` kimi funksiyaları və dəyişənləri vahidlər kimi ixrac edin. Eksport edilmiş məzmunu elan etmək üçün onları const + vergül ilə birləşdirməyə çalışın. Faylın yalnız bir funksiyası varsa, `export default` istifadə edin
- İxrac defolt funksiyasını daxili olaraq çağırmaq lazım deyilsə, əvvəlcə sabitləri elan etməkdən və sonra onları faylın sonunda ixrac etməkdən çəkinin.
- Yol həlli: Cari kataloq yolunu əldə edərkən, `import.meta.dirname` istifadə edilməlidir

## səhv

- Sətir xətalarından çəkinin və daimi xəta kodlarını elan etmək üçün const istifadə edin.
- Yanlış məlumat məlumatını qaytarmaq lazımdırsa, [xəta kodu, xəta mesajı,...] istifadə edin. Beləliklə, səhv mesajı mətn təsviri deyil, ədədi dəyərdir (məsələn, [FILE_OVERSIZE, fayl_ölçüsü, maksimum_ölçüsü])
-

## Brauzerə uyğun API-lərdən istifadə etməyə çalışın

- Şifrələmə və şifrənin açılması: Doğma Web Crypto API-dən istifadə etməyə məcbur edin
- Binary data: Binar ilə işləyərkən, `Uint8Array`-dən vahid şəkildə istifadə etməyə çalışın