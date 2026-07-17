# Streaming rendering teks Markdown

- Parse lan render Markdown kanthi bertahap
- Kerjo bareng karo unsur induk nggulung kanggo otomatis nggulung nalika isi ngluwihi layar
- Ngaso autoscroll nalika ngeklik utawa nggulung munggah, nerusake nalika nggulung mudhun
- Tampilake indikator status ngetik kanthi otomatis

## Gunakake demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming data Rendering liwat fungsi generator bedo bali
  el.gen = async function* () {
    ngasilake "# judhul\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      ngasilake "- item " + i + "\n";
    }
  };
</script>
```

## properti

| jeneng atribut | jinis | nggambaraké |
| :--- | :--- | :--- |
| `gen` | `Function` | Fungsi sing ngasilake iterator asynchronous / generator, mbusak isi lan re-render sawise setelan |

## gaya

| Kelas/Tag | nggambaraké |
| :--- | :--- |
| `Md` | Kelas ditambahake kanthi otomatis menyang komponen nalika dipasang, nyetel gaya Markdown |
| `i.T` | Indikator status ngetik kanthi otomatis ditambahake ing pungkasan sajrone entri data |