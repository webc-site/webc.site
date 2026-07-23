# Katalog navigatsiya komponenti

- Vertikal moslashuvchan tartib
- Katalog ma'lumotlarini o'tkazish uchun lug'atni qo'llab-quvvatlang
- Markdown matnini avtomatik yuklash uchun bosing
- Animatsiyani yuklash holatini ko'rsatish

## Ko‘rsatma ishlatish

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Komponentlardan foydalanish"
};
</script>
```

## interfeys

### Xususiyatlari va usullari

- `toc.li`: Katalog ob'ektini yoki yozuvlar ro'yxatini o'rnatadi, masalan, `{ key: title }`
- `toc.mdUrl`: URL so'rovini yaratish funksiyasi `(key, lang) => url` yoki prefiks qatorini o'rnating
- `toc.target`: maqsadli kontent tugunini (masalan, `c-md`) o‘rnating yoki bog‘lang, `ing` kutish va kontentni to‘ldirishni avtomatik boshqaring
- `toc.load(key)`: Tegishli kalitni qo'lda yuklash