# WebC.site

## Bu ne?

### Bu yerel bir web bileşeni kütüphanesidir

[Web bileşenleri](https://developer.mozilla.org/docs/Web/API/Web_components) temel alınarak geliştirilmiş olup çalışma zamanından bağımsızdır ve tüm çerçevelere uygundur.

Boyut açısından son derece optimize edilmiştir (benzer popüler kitaplıkların onda biri boyutunda).

75 dili destekler. Çevrimiçi kullanım için js ve css'yi doğrudan içe aktarabilir veya ikincil geliştirme için gerektiği şekilde projenize bileşenler ekleyebilirsiniz.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Bu, bileşen kitaplığı geliştirme çerçevesidir

Bu, [hikaye kitabının](https://storybook.js.org) statik blog sürümüdür.

Bir bileşen kütüphanesi oluşturmak, şirketin dahili geliştirme verimliliğini artırabilir ve teknik çevrede bir marka imajı oluşturabilir.

Ekipler, [webc.site](https://github.com/webc-site/webc.site) temel alınarak kendi bileşen kitaplıklarını kolayca oluşturabilir ve bunları [github sayfası](https://pages.github.com), [cloudflare sayfası](https://pages.cloudflare.com) vb.'de yayınlayabilir. Yayınlanan bileşenlerin hataları, [codepen.io](https://codepen.io) ve [jsfiddle](https://jsfiddle.net) üzerinden çevrimiçi olarak ayıklanabilir.

Aynı zamanda yerleşik çeviri çerçevesi, bileşenlerin ve belgelerin uluslararası hale getirilmesini hızlı bir şekilde gerçekleştirebilir, böylece ürün hedef kitleniz artık dile bağlı kalmaz.

### Bu, yapay zeka çağı için yeni bir ön uç geliştirme paradigmasıdır

Çerçeve yerleşik `.agents/skills` olup, yapay zekanın en iyi uygulamalara göre tek tıklamayla yeni bileşenler geliştirmenize yardımcı olmasına olanak tanır.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Ön uç kodunun, atmosfer programlamanın sürdürülemez bir çöp dağından, uzun vadede korunabilecek ve yinelenerek geliştirilebilecek standart bir parçaya dönüşmesine izin verin.

Yapay zeka destekli geliştirmenin özelliklerini göz önünde bulundurarak yeni bir ön uç geliştirme paradigması önerdik ve tasarladık:

1. **Her şey bir web bileşenidir**
2. **Bileşen, arka uç veri bağlantısından bağımsız olmalı ve veri arayüzü bir geri çağırma işlevi olarak kullanıma sunulmalıdır**

Bu sayede yapay zeka sahte veriler üretebiliyor ve bileşenlerin farklı durumlarını demo sayfasında görüntüleyebiliyor.

Bileşen geliştirme ve veri arayüzünün ayrılması, [webc.site bileşen çerçevesi](https://github.com/webc-site/webc.site) ile birleştirildi Bir başka önemli özellik:

**Her bileşen, geliştirme sunucusunu bağımsız olarak başlatabilir ve demo sayfasında geliştirebilir ve hata ayıklayabilir**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Bu, her bir bileşenin geliştirilmesi ve hata ayıklaması için ön uç bağlantısını `0` olarak azaltır.

Bu sayede yapay zeka destekli geliştirme araçları ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Rüzgar Sörfü](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) vb.), tam otomatik geliştirmenin, açık tarayıcı hata ayıklamanın keyfini çıkarabilir ve artık çeşitli karmaşık faktörler (arka uç verileri, giriş durumu, yol) tarafından engellenemezsiniz. yönlendirme vb.).

Yapay zekayı kontrol edip maliyetleri düşürüp verimliliği artırmak istiyorsanız her bileşenin geliştirme ve hata ayıklama ortamını en aza indiren yeni bir paradigmaya ihtiyacınız var.

---

# Henüz TODO yazmaya başlamadım

### Web bileşeni kitaplığı

#### Üstün boyut optimizasyonu

Örneğin, sanal kaydırma çubuğu bileşeni için, aşağıdaki tabloda gösterildiği gibi, popüler [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) komut dosyasının boyutunu ve `gz`'den sonraki stili karşılaştırın:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880B    |

`webc.site`'nin sanal kaydırma çubuğu bileşeni yalnızca `OverlayScrollbars`'nin `10%` bileşenidir.

#### Çalışma zamanından bağımsız

[Web Bileşenleri](https://developer.mozilla.org/docs/Web/API/Web_components) standartlarını temel alan webc.site bileşen kitaplığı, doğal olarak çalışma zamanından bağımsızdır. İster React, Vue, Angular, Svelte, isterse geleneksel saf HTML/JS projesini kullanıyor olun, tüm bileşenler, belirli bir çerçeve için ikincil paketlemeye ihtiyaç duymadan, yerel HTML etiketleri gibi doğrudan tarayıcıda çalıştırılabilir.

##### Shadcn ile karşılaştırma

[shadcn/ui](https://ui.shadcn.com), bileşen kodunu doğrudan kendi projenize kopyalamanızı gerektiren kod dağıtım modunu benimser. React ekosistemine ve belirli inşaat aracı zincirlerine (Tailwind CSS gibi) sıkı sıkıya bağlıdır ve çerçeveler arasında kullanılamaz. Ayrıca proje mühendisliği konfigürasyonu için belirli gereksinimlere sahiptir.

Ve `webc.site` bileşeni:
- **Çerçeveler arası evrensel**: Bir kez yazın ve herhangi bir ön uç çerçevede (çerçevesiz bir ortamda bile) doğrudan tanıtılabilir ve çalıştırılabilir.
- **Ortama sıfır bağımlılık**: Belirli bir paketleme aracına veya CSS ön işlemcisine gerek yoktur; derlenmiş statik dosyaları içe aktarmanız yeterlidir ve kutudan çıktığı gibi kullanılabilir.

## Otomatik geliştirme ve hata ayıklama

### Yerel geliştirme ve hata ayıklama

Her web sayfası bileşeni, geliştirme sunucusunun bağımsız olarak başlatılmasını destekleyerek minimum düzeyde geliştirme ve hata ayıklama ortamı sağlar:

- **Yeni bir bileşen oluşturun**: Hızlı bir şekilde bir bileşen geliştirme iskeleti (demo sayfası ve uluslararasılaştırma yapılandırması dahil) oluşturmak için `./sh/new.js [css|js] [bileşen adı]` komutunu çalıştırın.
- **Bağımsız hata ayıklama**: Vite geliştirme sunucusunu başlatmak ve bileşenin demo sayfasını tarayıcıda otomatik olarak açmak için `./dev.js [bileşen adı]` komutunu çalıştırın (veya doğrudan `./dev.js` komutunu çalıştırın). Bileşen sıcak güncellemesini (HMR) destekler. Geliştirme ve veri bağlantıları ayrıldığından, tamamen otomatik geliştirme ve tarayıcı hata ayıklamasına yardımcı olmak için yapay zekaya (Claude Code, Google Antigravity vb. gibi) çok uygun olan sıfır geliştirme ön uç bağlantısı vardır.

### Bileşen kitaplığını yayınla

#### webc dist

Paketleme ve yayınlama süreci oldukça otomatiktir:
- **Statik kaynak paketleme**: `./sh/dist.js`'i çalıştırmak (yani, `webc dist` görevini yürütmek), `src/` altındaki tüm web sayfası bileşenlerini otomatik olarak tarayabilir, bunları derleyebilir, sıkıştırabilir ve `dist/` dizinine çıkarabilir. Bu dizin, üretim dağıtımı için JS/CSS dosyalarını, GitHub Pages veya Cloudflare Pages'e dağıtılmaya hazır bir demo sitesini ve otomatik olarak oluşturulan `_redirects` ve `404.html` yönlendirme dosyalarını içerir.
- **NPM Yayınlama**: `./sh/npmDist.js` komutunu çalıştırın, komut dosyası otomatik olarak bileşen bağımlılıklarını yönetecek, paket sürüm numarasını artıracak ve bileşen kitaplığını NPM'de yayınlamak için paketleme tamamlandıktan sonra tek tıklamayla `npm publish` komutunu çalıştıracaktır.

### Platform çeviriden sorumludur

Çerçevede yerleşik otomatik çeviri süreçleri bulunur:
1. Proje kök dizinindeki `tran.yml`'de çeviri kurallarını (kaynak dil, hedef dil ve çevrilecek dizin gibi) yapılandırın.
2. Kodunuzda birden çok dili sabit kodlamanıza gerek kalmadan bileşenlerde veya belgelerde yer tutucular kullanın.
3. `./sh/tran.js` komutunu çalıştırdığınızda, çeviri motoru otomatik olarak metni çıkaracak ve işlenmek üzere WebC çeviri hizmetini arayacak, çeşitli dillerde YAML çeviri girişlerini ve README belgelerini otomatik olarak oluşturacaktır.

### ortam değişkenleri

Otomatik çeviri gerçekleştirirken çeviri API'sine erişime izin vermek için aşağıdaki ortam değişkenlerini yapılandırmanız gerekir:

- **`WEBC_SITE_TOKEN`** (veya **`WEBC_TOKEN`**): `webc.site` Otomatik Çeviri API'sine erişmek için kullanılan kimlik doğrulama anahtarı. Bir ortam değişkeni olarak enjekte edilebilir veya yerel kullanıcının ana dizinindeki `~/.config/webc.site.yml` yapılandırma dosyasına `token` yazılabilir.