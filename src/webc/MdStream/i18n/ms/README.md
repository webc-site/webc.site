# Penstriman pemaparan teks Markdown

- Menghuraikan secara berperingkat dan menyebabkan penurunan harga
- Bekerjasama dengan elemen induk menatal untuk menatal secara automatik apabila kandungan melebihi skrin
- Jeda autoscroll apabila mengklik atau menatal ke atas, sambung semula apabila menatal ke bawah
- Paparkan penunjuk status menaip secara automatik

## Gunakan demo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Menstrim pemaparan data melalui fungsi penjana tak segerak yang dikembalikan
el.gen = async function* () {
  hasilkan "# tajuk\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    hasil "- item " + i + "\n";
  }
};
</script>
```

## harta benda

| nama atribut | taip | menggambarkan |
| :--- | :--- | :--- |
| `gen` | `Function` | Fungsi yang mengembalikan lelaran/penjana tak segerak, mengosongkan kandungan dan memaparkan semula selepas ditetapkan |

## gaya

| Kelas/Tag | menggambarkan |
| :--- | :--- |
| `Md` | Kelas ditambah secara automatik pada komponen apabila dipasang, tetapkan gaya Markdown |
| `i.T` | Penunjuk status menaip ditambah secara automatik pada penghujung semasa kemasukan data |