---
name: webc
---

Süreci takip edin, bir plan yapın ve atlamalardan kaçınmak için adım adım geliştirin

1. `./sh/new.js proje türü bileşen adını` çalıştırın ve bileşeni `src/webc` dizini altında oluşturun
   Proje türü `css` (saf stil bileşeni), `js` (web sayfası bileşeni) olabilir
   Bileşen adının ilk harfini büyük yazın

2. `.agents/doc/code` için kodlama özelliklerini okuyun ve ardından geliştirin.

   Bileşen stili `_.styl` ile yazılmıştır. Gösterim için kullanılan stil `demo/_.styl` ile yazılmıştır. `bileşen adı/_.styl` içine yazmak yasaktır.

  Diğer bileşenlerden stilleri içe aktarmak için `@import` kullanılması hem `_.styl` hem de `demo/_.styl` öğesinde yasaktır.

  [./styl.md](./styl.md) kodlama standartlarına ve tasarım estetiğine uyun.

  Bağımlı bileşenler (ve stilleri), `webc/componentname.js` dosyasındaki `import "./other Components.js"` aracılığıyla içe aktarılır; gösteriye yönelik bağımlılıklar `demo/_.js` içindeki `import "../../other Component.js"` aracılığıyla içe aktarılır.

   Tüm bileşenlerin (saf stil bileşenleri dahil) bir `bileşen adı.js` komut dosyasına sahip olması gerekir. Saf stil bileşenlerinin `bileşen adı.js`'si yalnızca karşılık gelen `_.styl`'i içe aktarır. JS mantığına sahip bileşenleri geliştirmek için [webc.js.md](./webc.js.md) sürecini izleyin.

3. [demo.md](./demo.md) süreç geliştirme gösterimine basın

4. Kök dizinin `./test.sh` komutunu çalıştırın. Hataları ve alarmları düzeltin, işlevleri çıkarın, kodu optimize edin ve çoğaltma ve fazlalıktan kaçının. Kod spesifikasyonları için bkz. `.agents/doc/code/js.md`

5. [dbg.md](./dbg.md) dosyasını okuyun ve sürece göre bileşenlerde hata ayıklayın

6. Bileşenlerin ve gösterimlerin uluslararası hale getirilmesini uygulamak ve belge yazmak için [i18n.md](./i18n.md) sürecini takip edin

7. Tekrar test edin ve kodu optimize edin

8. Bir alt aracı açın ve kodu incelemek ve optimize etmek için `.agents/skills/js_review/SKILL.md` numaralı telefonu arayın.

9. Tekrar hata ayıklama