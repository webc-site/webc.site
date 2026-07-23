# Komponen Navigasi Direktori

- Reka Lentur Menegak
- Menyokong kamus untuk menghantar data direktori
- Klik untuk memuatkan teks Markdown secara automatik
- Memuatkan paparan status dalam animasi

## Gunakan demo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Gunakan komponen"
};
</script>
```

## antara muka

### Sifat dan kaedah

- `toc.li`: Menetapkan objek direktori atau senarai entri, seperti `{ key: title }`
- `toc.mdUrl`: Tetapkan fungsi penjanaan URL permintaan `(key, lang) => url` atau rentetan awalan
- `toc.target`: Tetapkan atau kaitkan nod kandungan sasaran (seperti `c-md`), kendalikan `ing` menunggu dan pengisian kandungan secara automatik
- `toc.load(key)`: Cetuskan pemuatan kunci yang sepadan secara manual