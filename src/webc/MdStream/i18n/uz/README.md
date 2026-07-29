# Markdown matnining oqimli ko'rsatilishi

- Markdownni bosqichma-bosqich tahlil qiling va ko'rsating
- Kontent ekrandan oshib ketganda avtomatik aylantirish uchun aylantiruvchi asosiy element bilan hamkorlik qiling
- Bosish yoki yuqoriga o'tishda avtoulovni to'xtatib turing, pastga aylantirganda davom eting
- Yozish holati ko'rsatkichlarini avtomatik ravishda ko'rsatish

## Ko‘rsatma ishlatish

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Qaytarilgan asinxron generator funksiyasi orqali ma'lumotlarni uzatish oqimi
el.gen = async function* () {
  hosil "# sarlavha\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    hosil "- element " + i + "\n";
  }
};
</script>
```

## mulk

| atribut nomi | turi | tasvirlab bering |
| :--- | :--- | :--- |
| `gen` | `Function` | Asinxron iterator/generatorni qaytaradigan, tarkibni tozalaydigan va sozlangandan keyin qayta ko'rsatadigan funksiya |

## uslub

| Sinf/yorliq | tasvirlab bering |
| :--- | :--- |
| `Md` | O'rnatish vaqtida komponentga sinf avtomatik ravishda qo'shiladi, Markdown uslubini o'rnating |
| `i.T` | Ma'lumotlarni kiritish paytida oxirida avtomatik ravishda yozish holati ko'rsatkichi qo'shiladi |