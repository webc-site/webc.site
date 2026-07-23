# Kipengele cha Urambazaji wa Saraka

- Mpangilio wa Wima wa Flex
- Saidia kamusi kupitisha katika data ya saraka
- Bofya ili kupakia maandishi ya Markdown kiotomatiki
- Inapakia onyesho la hali ya uhuishaji

## Tumia onyesho

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Tumia viambajengo"
};
</script>
```

## kiolesura

### Mali na mbinu

- `toc.li`: Huweka kipengee cha saraka au orodha ya maingizo, kama vile `{ key: title }`
- `toc.mdUrl`: Weka ombi la kuunda chaguo la kuunda URL `(key, lang) => url` au mfuatano wa kiambishi awali
- `toc.target`: Weka au husisha nodi ya maudhui lengwa (kama vile `c-md`), shughulikia kiotomatiki `ing` kusubiri na kujaza maudhui.
- `toc.load(key)`: Anzisha mwenyewe upakiaji wa ufunguo unaolingana