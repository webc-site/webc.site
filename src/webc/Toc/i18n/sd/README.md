# ڊاريڪٽري نيويگيشن جزو

- عمودي Flex ترتيب
- ڊاريڪٽري ڊيٽا ۾ پاس ڪرڻ لاء لغت جي مدد ڪريو
- مارڪ ڊائون متن کي خودڪار لوڊ ڪرڻ لاءِ ڪلڪ ڪريو
- لوڊ ڪندي اسٽيٽس ڊسپلي Ing animation

## ڊيمو استعمال ڪريو

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "جزا استعمال ڪريو"
};
</script>
```

## انٽرفيس

### خاصيتون ۽ طريقا

- `toc.li`: هڪ ڊاريڪٽري اعتراض يا لسٽن جي لسٽ کي سيٽ ڪري ٿو، جهڙوڪ `{ key: title }`
- `toc.mdUrl`: سيٽ ڪريو درخواست URL جي نسل جو فنڪشن `(key, lang) => url` يا اڳياڙي اسٽرنگ
- `toc.target`: ھدف واري مواد جي نوڊ کي سيٽ يا ڳنڍيو (جهڙوڪ `c-md`)، خودڪار طريقي سان سنڀاليو `ing` انتظار ۽ مواد ڀرڻ
- `toc.load(key)`: دستي طور تي لاڳاپيل چاٻي جي لوڊشيڊنگ کي ٽاريو