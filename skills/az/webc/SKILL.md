---
name: webc
---

Prosesi izləyin, plan qurun və nöqsanların qarşısını almaq üçün addım-addım inkişaf etdirin

1. `./sh/new.js layihə növü komponent adını` işə salın və `src/webc` kataloqu altında komponent yaradın
   Layihə növü `css` (saf üslub komponenti), `js` (veb səhifə komponenti) ola bilər.
   Komponent adının ilk hərfini böyük hərflə yazın

2. `.agents/doc/code` üçün kodlaşdırma spesifikasiyalarını oxuyun və sonra inkişaf etdirin.

   Komponent üslubu `_.styl`-də yazılmışdır. Nümayiş üçün istifadə olunan üslub `demo/_.styl`-də yazılmışdır. Onu `komponent adı/_.styl`ə yazmaq qadağandır.

  Digər komponentlərdən üslubları idxal etmək üçün `@import` istifadə etmək həm `_.styl`, həm də `demo/_.styl`-də qadağandır.

  [./styl.md](./styl.md) kodlaşdırma standartlarına və dizayn estetikasına əməl edin.

  Asılı komponentlər (və onların üslubları) `import "./other components.js"` vasitəsilə `webc/componentname.js` vasitəsilə idxal edilir; nümayiş üçün asılılıqlar `demo/_.js`-də `import "../../other components.js"` vasitəsilə idxal edilir.

   Bütün komponentlərdə (saf üslub komponentləri daxil olmaqla) `komponent adı.js` skript faylı olmalıdır. Təmiz üslub komponentlərinin `komponent adı.js` yalnız müvafiq `_.styl`i import edir. JS məntiqi olan komponentlər üçün inkişaf etdirmək üçün [webc.js.md](./webc.js.md) prosesini izləyin.

3. [demo.md](./demo.md) prosesinin inkişafı nümayişini basın

4. Kök qovluğunun `./test.sh`-ni işə salın. Səhvləri və həyəcan siqnallarını düzəldin, funksiyaları çıxarın, kodu optimallaşdırın və təkrarlanma və artıqlığın qarşısını alın. Kod spesifikasiyası üçün `.agents/doc/code/js.md`-ə baxın

5. [dbg.md](./dbg.md) oxuyun və prosesə uyğun olaraq komponentləri düzəldin

6. Komponentlərin və nümayişlərin beynəlmiləlləşdirilməsini həyata keçirmək və sənədləri yazmaq üçün [i18n.md](./i18n.md) prosesini izləyin

7. Yenidən test edin və kodu optimallaşdırın

8. Sub-agent açın və kodu nəzərdən keçirmək və optimallaşdırmaq üçün `.agents/skills/js_review/SKILL.md` nömrəsinə zəng edin.

9. Yenidən sazlama