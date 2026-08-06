# Markdown mətninin axın göstərilməsi

- Markdown-u tədricən təhlil edin və göstərin
- Məzmun ekranı keçdikdə avtomatik sürüşdürmək üçün fırlanan əsas elementlə əməkdaşlıq edin
- Kliklədikdə və ya yuxarı sürüşdürdükdə avtomatik sürüşməni dayandırın, aşağı sürüşdürdükdə davam edin
- Yazma statusu göstəricilərini avtomatik olaraq göstərin

## Demodan istifadə edin

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Qaytarılmış asinxron generator funksiyası vasitəsilə məlumatların ötürülməsi
el.gen = async function* () {
  gəlir "# başlıq\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    gəlir "- maddə " + i + "\n";
  }
};
</script>
```

## əmlak

| atribut adı | növü | təsvir etmək |
| :--- | :--- | :--- |
| `gen` | `Function` | Asinxron iterator/generator qaytaran, məzmunu təmizləyən və təyin etdikdən sonra yenidən göstərən funksiya |

## üslub

| Sinif/Etiket | təsvir etmək |
| :--- | :--- |
| `Md` | Quraşdırma zamanı komponentə avtomatik əlavə edilən sinif, Markdown üslubunu təyin edin |
| `i.T` | Yazma statusu göstəricisi məlumatların daxil edilməsi zamanı avtomatik olaraq sonunda əlavə olunur |