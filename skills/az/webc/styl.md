Standart `css` istifadə edin, `-webkit-` ilə başlayan `css` yazmayın (çərçivə onu avtomatik olaraq daxil edəcək)

`css nesting` , `flex` və s. kimi müasir `css` xüsusiyyətləri ilə komponent üslublarını inkişaf etdirin.

Eyni dəyər üçün birdən çox css seçicisi bir yerdə yazıla, müəyyən edilə və təkrar istifadə edilə bilər və `stylus` funksiyası deaktiv edilir.

Piksel vahidi `px`-dir və dəyər tam ədəd olmalıdır.

Apple-ın ən son maye şüşəsinin dizayn estetikasını izləyin

`svg` Şəkli `svg` qovluğuna yerləşdirin və nisbi yol ilə `styl` qovluğunda istifadə edin

Xarici kölgələrdən istifadə etməyin, daxili kölgələri daha tez-tez istifadə edin və daxili kölgələr yerdəyişməməlidir.

`font-family` təyin etməyin

`stylus` Təkmil funksiyalar olmadan yalnız ən əsas dəyişənlərdən və girinti sintaksisi formatından istifadə edir

Digər komponent üslublarını (o cümlədən `_.styl` və `demo/_.styl` komponentləri) idxal etmək üçün `@import` istifadə etmək qadağandır; komponentdən asılı üslublar komponentin JS faylı vasitəsilə idxal olunur