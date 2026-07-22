
  `js` bileşeni için, bileşeni `src/webc/componentname.js` dosyasındaki `Light DOM` kullanarak uygulayın.

  Diğer bileşenleri içe aktarmak için göreli yollar kullanın, örneğin: `import "./component name.js"` (Her bileşenin JS dosyasında, önce bağımlılıkları içe aktarın ve ardından karşılık gelen `_.styl`'yi içe aktarın, örneğin `import "./component name/_.styl";`).

  `this` Web bileşeninin yalnızca yerel geri çağırma işlevini tanımlayın, diğerlerini bağımsız işlevler olarak yazın, `this` ve gerekli parametreleri girin.

  Dışarıdan açığa çıkan arayüzlere ek olarak, ağaç sallayan optimizasyonu ve kod sıkıştırmayı kolaylaştırmak için, `this` üzerinde özel özel niteliklerin bağlanması yasaktır (işlevleri boşaltmak için `this.$` kullanın) ve ara değişkenleri tutmak için kapanışları döndürmek için yüksek dereceli işlevler kullanılabilir.

  `constructor` yazmayın, nitelik `connectedCallback` ile elde edilir.


  `src/js/` altındaki ortak işlevleri yeniden kullanmak için [./js.md](./js.md) adresine bakın

  Kapsayıcılar için öznitelikler yerine `slot` kullanın.
  Veri yüklemeniz gerekiyorsa, yükleme arayüzünü eşzamansız geri çağırma işlevi biçiminde üst katmana gösterin ve dönüş değerinin biçimini belirtmek için yorumları kullanın.
  Bileşenler bellek sızıntılarından kaçınmalıdır. `disconnectedCallback` kaldırma olaylarını tek bir işlevde birleştirin `this.$` ve birden fazla kaldırma işlevi yazmayın.
  Arayüz dönüş değeri, bir nesne değil, tek bir değer, bir dizi veya bir dizi dizisi olabilir.
  Bileşenin birden fazla durumu varsa, her bir durumun veri formatını açıkça tanımlamak için çok satırlı yorumları kullanın. (Her yorum satırının başına `*` koymayınız)
  Sayısal sabitleri kullanan durum değiştirme (`const.js` olarak tanımlanır).
  Geri arama yüklenirken, animasyonu görüntülemek için `const xx = newEl('b');xx.className="Ing"` kullanın ve bileşen JS dosyasındaki `import "./Ing.js"` aracılığıyla bağımlılıkları tanıtın.