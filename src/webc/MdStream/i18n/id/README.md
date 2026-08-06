# Streaming rendering teks penurunan harga

- Parsing dan render Markdown secara bertahap
- Bekerja sama dengan elemen induk pengguliran untuk menggulir secara otomatis ketika konten melebihi layar
- Jeda gulir otomatis saat mengeklik atau menggulir ke atas, lanjutkan saat menggulir ke bawah
- Secara otomatis menampilkan indikator status pengetikan

## Gunakan demonya

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Streaming data yang dirender melalui fungsi generator asinkron yang dikembalikan
el.gen = async function* () {
  hasil "# judul\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    hasil "- item " + i + "\n";
  }
};
</script>
```

## milik

| nama atribut | jenis | menjelaskan |
| :--- | :--- | :--- |
| `gen` | `Function` | Fungsi yang mengembalikan iterator/generator asinkron, menghapus konten dan merender ulang setelah pengaturan |

## gaya

| Kelas/Tag | menjelaskan |
| :--- | :--- |
| `Md` | Kelas secara otomatis ditambahkan ke komponen saat pemasangan, atur gaya penurunan harga |
| `i.T` | Indikator status pengetikan secara otomatis ditambahkan di akhir selama entri data |