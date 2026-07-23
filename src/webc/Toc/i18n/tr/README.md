# Dizin Gezinme Bileşeni

- Dikey Esnek Düzen
- Dizin verilerini iletmek için sözlük desteği
- Markdown metnini otomatik olarak yüklemek için tıklayın
- Durum ekranı Ing animasyonu yükleniyor

## Demoyu kullanın

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Bileşenleri kullan"
};
</script>
```

## arayüz

### Özellikler ve yöntemler

- `toc.li`: `{ key: title }` gibi bir dizin nesnesini veya giriş listesini ayarlar
- `toc.mdUrl`: İstek URL'si oluşturma işlevini `(key, lang) => url` veya önek dizesini ayarlayın
- `toc.target`: Hedef içerik düğümünü ayarlayın veya ilişkilendirin (`c-md` gibi), `ing` beklemeyi ve içerik doldurmayı otomatik olarak yönetin
- `toc.load(key)`: İlgili anahtarın yüklenmesini manuel olarak tetikleyin