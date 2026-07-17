---
name: webc
---

Süreci takip edin, bir plan yapın ve atlamalardan kaçınmak için adım adım geliştirin

1. `./sh/new.js proje türü bileşen adını` çalıştırın ve `src` dizini altında bir bileşen klasörü oluşturun
   Proje türü `css` (saf stil bileşeni), `js` (web sayfası bileşeni) olabilir
   Bileşen adının ilk harfini büyük yazın

2. `.agents/doc/code` için kodlama özelliklerini okuyun ve ardından geliştirin.

   Bağımlılıkları içe aktarmak için `_.styl` bölümünde ilk olarak `@import "../component name/_.styl"`. Lütfen [./styl.md](./styl.md) kodlama standartlarına ve tasarım estetiğine uyun.

   Diğer bileşenlerin stillerini değiştirin ve bunun yerine bunları doğrudan içe aktarın, başlangıçta `@import` kullanın ve `extend`'yi devre dışı bırakın.

   Gösterim için kullanılan stilin `bileşen adı/_.styl` ile ve `demo/_.styl` ile yazılması yasaktır.

   `js` bileşeni için, onu [webc.js.md](./webc.js.md) sürecine göre geliştirin (saf stil bileşenleri için lütfen `bileşen adını/_.js` silin)

3. [demo.md](./demo.md) süreç geliştirme gösterimine basın

4. Kök dizinin `./test.sh` komutunu çalıştırın. Hataları ve alarmları düzeltin, işlevleri çıkarın, kodu optimize edin ve çoğaltma ve fazlalıktan kaçının. Kod spesifikasyonları için bkz. `.agents/doc/code/js.md`

5. [dbg.md](./dbg.md) dosyasını okuyun ve sürece göre bileşenlerde hata ayıklayın

6. Bileşenlerin ve gösterimlerin uluslararası hale getirilmesini uygulamak ve belge yazmak için [i18n.md](./i18n.md) sürecini takip edin

7. Tekrar test edin ve kodu optimize edin

8. Bir alt aracı açın ve kodu incelemek ve optimize etmek için `.agents/skills/js_review/SKILL.md` numaralı telefonu arayın.

9. Tekrar hata ayıklama