# Demo

`src/BoxX/demo`'e bakın ve `src/component name/demo/`'de bileşenin bir demosunu geliştirin

`demo/_.pug`, demo alt şablonu

Yalnızca minimalist bileşen etiketleri dahil edilmiştir, tam sayfa gerekmez ve stillerin ve komut dosyalarının içe aktarılması yasaktır. Çerçeve otomatik olarak enjekte edilecektir (`demo/_.styl`, `demo/_.js` gibi).

Başlık yazmayın (örneğin xxx demo yazmayın), bileşen adını yazmayın, bileşeni tanıtmayın, yalnızca demo kullanım durumunun durumunu yazın (durum yoksa başlık yazmayın)

`_.pug` kök öğesi, `demo/_.styl` içinde stili tanımlayan ve `main.demo.Lg` stilini tanımlamayan `main.demo.Lg` öğesini kullanır.

Görüntüleme bileşeninin kapsayıcısı `main.demo.Lg` ile hizalanmalı ve aralarında `margin` ve `padding` olmamalıdır, çünkü `main.demo`'nin kendisi zaten `padding`'i ayarlamıştır ve boş olarak ayarlanması tekrarlanacaktır.

`demo/_.styl` Yalnızca bir görüntüleme bileşeni varsa, kapsayıcısının dış çerçevesi olmayacak ve yalnızca `max-width` ayarlanacaktır (çünkü sunum kapsayıcısı otomatik olarak bir dış çerçeve ekleyecektir). Birden fazla olması durumunda konteyner bir dış çerçeve ile ayrılabilir.

`demo/_.pug` içine `img` yazmayın, arka plan resmini ayarlamak için `demo/_.styl` kullanın

Bileşenin birden fazla formu varsa lütfen bunları sırayla görüntüleyin (yükleme, boş veri, veri, başarısız vb.), dikey düzeni esnekleştirin

`demo/_.styl`: `stylus` demo sayfasının stili, lütfen [./styl.md](./styl.md) kod özelliklerini ve tasarım estetiğini takip edin

Gösterilecek bileşeni içe aktarmak için `@import '../_.styl'` yazmayın, otomatik olarak enjekte edilecektir.

Lütfen `@import '../../Btn/_.styl'`'yi `demo/_.styl` içine aktarın ve `.Btn` kullanın

`demo/_.js`: Komut dosyasını çağırın, `export default (root) => { ... }` biçimini alın, `root` parametresi ana bilgisayardır (`document` veya korumalı alan kabının kök öğesi)

`D.createElement` yasaktır, [./js.md](./js.md) tarafından belirtilen `newEl` kullanın

`js`'nin `c-t`'de kullanılması ve `fLang` uluslararası hale getirilmesi yasaktır.

`../_.js` (`../_.js` bileşenin kendisini görüntüleyecekse, diğer demoların gerektirdiği bağımlı bileşenlerin yine de içe aktarılması gerekir) yalnızca `import` gereklidir ve herhangi bir belirli içerik içe aktarılmaz; bu içerik atlanabilir (çerçeve bunu otomatik olarak enjekte edecektir)

`pug` `js` ve `styl` öğelerini içe aktarmanıza gerek yok, çerçeve bunları otomatik olarak enjekte edecektir