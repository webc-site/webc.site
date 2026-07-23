# Komponen Navigasi Direktori

- Tata Letak Fleksibel Vertikal
- Mendukung kamus untuk meneruskan data direktori
- Klik untuk memuat teks penurunan harga secara otomatis
- Memuat status menampilkan animasi Ing

## Gunakan demonya

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

## antarmuka

### Properti dan metode

- `toc.li`: Menetapkan objek direktori atau daftar entri, seperti `{ key: title }`
- `toc.mdUrl`: Tetapkan fungsi pembuatan URL permintaan `(key, lang) => url` atau string awalan
- `toc.target`: Menetapkan atau mengaitkan node konten target (seperti `c-md`), secara otomatis menangani `ing` menunggu dan mengisi konten
- `toc.load(key)`: Memicu pemuatan kunci terkait secara manual