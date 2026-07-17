---
name: webc
---

Prosesi izləyin, plan qurun və nöqsanların qarşısını almaq üçün addım-addım inkişaf etdirin

1. `./sh/new.js layihə növü komponent adını` işə salın və `src` kataloqu altında komponent qovluğu yaradın
   Layihə növü `css` (saf üslub komponenti), `js` (veb səhifə komponenti) ola bilər.
   Komponent adının ilk hərfini böyük hərflə yazın

2. `.agents/doc/code` üçün kodlaşdırma spesifikasiyalarını oxuyun və sonra inkişaf etdirin.

   `_.styl`-də asılılıqları idxal etmək üçün əvvəlcə `@import "../component name/_.styl"` edin. [./styl.md](./styl.md) kodlaşdırma standartlarına və dizayn estetikasına əməl edin.

   Digər komponentlərin üslublarını dəyişdirin və əvəzinə onları birbaşa idxal edin, başlanğıcda `@import` istifadə edin və `extend`-ni söndürün.

   Nümayiş üçün istifadə olunan üslubun `komponent adı/_.styl`-də və `demo/_.styl` ilə yazılması qadağandır.

   `js` komponenti üçün onu [webc.js.md](./webc.js.md) prosesinə uyğun olaraq inkişaf etdirin (saf üslub komponentləri üçün `komponent adını/_.js` silin)

3. [demo.md](./demo.md) prosesinin inkişafı nümayişini basın

4. Kök qovluğunun `./test.sh`-ni işə salın. Səhvləri və həyəcan siqnallarını düzəldin, funksiyaları çıxarın, kodu optimallaşdırın və təkrarlanma və artıqlığın qarşısını alın. Kod spesifikasiyası üçün `.agents/doc/code/js.md`-ə baxın

5. [dbg.md](./dbg.md) oxuyun və prosesə uyğun olaraq komponentləri düzəldin

6. Komponentlərin və nümayişlərin beynəlmiləlləşdirilməsini həyata keçirmək və sənədləri yazmaq üçün [i18n.md](./i18n.md) prosesini izləyin

7. Yenidən test edin və kodu optimallaşdırın

8. Sub-agent açın və kodu nəzərdən keçirmək və optimallaşdırmaq üçün `.agents/skills/js_review/SKILL.md` nömrəsinə zəng edin.

9. Yenidən sazlama