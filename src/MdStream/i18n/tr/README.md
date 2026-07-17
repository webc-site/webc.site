# Markdown metninin akış halinde oluşturulması

- Markdown'ı artımlı olarak ayrıştırma ve işleme
- İçerik ekranı aştığında otomatik olarak kaydırma yapmak için kayan ana öğeyle işbirliği yapın
- Tıklarken veya yukarı kaydırırken otomatik kaydırmayı duraklatın, aşağı kaydırırken devam ettirin
- Yazma durumu göstergelerini otomatik olarak görüntüle

## Demoyu kullanın

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Döndürülen eşzamansız oluşturucu işlevi aracılığıyla veri işleme akışının gerçekleştirilmesi
  el.gen = async function* () {
    sonuç "# başlık\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      verim "- öğe " + i + "\n";
    }
  };
</script>
```

## mülk

| özellik adı | tip | göstermek |
| :--- | :--- | :--- |
| `gen` | `Function` | Eşzamansız bir yineleyici/oluşturucu döndüren, içeriği temizleyen ve ayarlandıktan sonra yeniden oluşturan işlev |

## stil

| Sınıf/Etiket | göstermek |
| :--- | :--- |
| `Md` | Montaj sırasında sınıf otomatik olarak bileşene eklenir, Markdown stilini ayarlayın |
| `i.T` | Veri girişi sırasında otomatik olarak sona eklenen yazma durumu göstergesi |