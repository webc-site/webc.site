# Kataloq Naviqasiya Komponenti

- Şaquli Flex Layout
- Kataloq məlumatlarını ötürmək üçün lüğəti dəstəkləyin
- Markdown mətnini avtomatik yükləmək üçün klikləyin
- Animasiya yüklənir

## Demodan istifadə edin

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "komponentlərdən istifadə edin"
};
</script>
```

## interfeys

### Xüsusiyyətlər və üsullar

- `toc.li`: Kataloq obyekti və ya qeydlər siyahısını təyin edir, məsələn, `{ key: title }`
- `toc.mdUrl`: Sorğu URL yaratma funksiyası `(key, lang) => url` və ya prefiks sətrini təyin edin
- `toc.target`: Hədəf məzmun qovşağını təyin edin və ya əlaqələndirin (məsələn, `c-md`), `ing` gözləmə və məzmunun doldurulmasını avtomatik idarə edin
- `toc.load(key)`: Müvafiq açarın yüklənməsini əl ilə işə salın