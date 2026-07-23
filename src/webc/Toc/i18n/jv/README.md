# Komponen Navigasi Direktori

- Layout Fleksibel Vertikal
- Dhukungan kamus kanggo ngliwati data direktori
- Klik kanggo mbukak teks Markdown kanthi otomatis
- Tampilan status loading Ing animasi

## Gunakake demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gunakake komponen"
};
</script>
```

## antarmuka

### Properties lan cara

- `toc.li`: Nyetel obyek direktori utawa dhaptar entri, kayata `{ key: title }`
- `toc.mdUrl`: Setel fungsi nggawe URL request `(key, lang) => url` utawa string ater-ater
- `toc.target`: Setel utawa hubungake simpul isi target (kayata `c-md`), kanthi otomatis nangani `ing` nunggu lan ngisi isi
- `toc.load(key)`: Micu kanthi manual mbukak kunci sing cocog