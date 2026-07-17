# Demo

`src/BoxX/demo`-ə istinad edin və `src/component name/demo/`-da komponentin demosunu hazırlayın.

`demo/_.pug`, demo alt şablonu

Yalnız minimalist komponent teqləri daxil edilir, tam səhifə tələb olunmur və üslub və skriptlərin idxalı qadağandır. Çərçivə avtomatik olaraq inyeksiya edəcək (məsələn, `demo/_.styl`, `demo/_.js`).

Başlıq yazmayın (məsələn, xxx demo yazmayın), komponentin adını yazmayın, komponenti təqdim etməyin, yalnız demo istifadə halının statusunu yazın (status yoxdursa, başlıq yazmayın)

`_.pug`-in kök elementi `main.demo.Lg` istifadə edir, o, `demo/_.styl`-də üslubu müəyyən etmiş və `main.demo.Lg`-nin özünün üslubunu təyin etmir.

Ekran komponentinin konteyneri `main.demo.Lg` ilə düzlənməlidir və onların arasında `margin` və `padding` olmamalıdır, çünki `main.demo` özü artıq `padding` təyin edib və onun boş qoyulması təkrarlanacaq.

`demo/_.styl` Yalnız bir displey komponenti varsa, onun konteynerinin xarici çərçivəsi olmayacaq və yalnız `max-width` təyin edəcək (çünki təqdimat konteyneri avtomatik olaraq xarici çərçivə əlavə edəcək). Bir neçə ədəd varsa, konteyner xarici çərçivə ilə ayrıla bilər.

`demo/_.pug`-də `img` yazmayın, fon şəklini təyin etmək üçün `demo/_.styl` istifadə edin

Komponentin birdən çox forması varsa, lütfən, onları sıra ilə göstərin (məsələn, yüklənmə, boş məlumat, məlumat, uğursuzluq və s.), şaquli düzümü əyilmək

`demo/_.styl`: `stylus` demo səhifənin üslubu, lütfən, [./styl.md](./styl.md) kodunun spesifikasiyasına və dizayn estetikasına əməl edin.

Nümayiş olunacaq komponenti idxal etmək üçün `@import '../_.styl'` yazmayın, o, avtomatik olaraq vurulacaq

Lütfən, `@import '../../Btn/_.styl'`-ni `demo/_.styl`-ə idxal edin və `.Btn` istifadə edin

`demo/_.js`: Skriptə zəng edin, format `export default (root) => { ... }`, parametr `root` hostdur (`document` və ya sandbox konteynerinin kök elementi)

`D.createElement` qadağandır, [./js.md](./js.md) tərəfindən qeyd olunan `newEl` istifadə edin

`js` `c-t`-də istifadə etmək və `fLang` beynəlmiləlləşdirmək qadağandır

Əgər `../_.js` (`../_.js` komponentin özünü göstərməkdirsə, digər demolar tərəfindən tələb olunan asılı komponentlər hələ də idxal edilməlidir) yalnız `import` tələb olunur və buraxıla bilən heç bir xüsusi məzmun idxal edilmir (çərçivə avtomatik olaraq onu yeridəcək)

`pug` `js` və `styl` idxal etməyə ehtiyac yoxdur, çərçivə onları avtomatik olaraq yeridəcək