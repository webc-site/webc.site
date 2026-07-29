# JS kod spesifikasyonu

## kodlama stili

- En modern js sözdizimini kullanarak basit, zarif ve verimli
- Aşırı uzun işlevler bölündüğünde arayüz tasarımı düşük bağlantı ve yüksek uyum olmalıdır.
- Diziler + döngüler/forEach/map'i daha fazla kullanın ve daha az tekrarlayan kod yazın
- Aşırı yorumlardan kaçınmak için işlev açıklamalarını basit kodlarla yazmayın. Karmaşık mantık ve özel ihtiyaçlar incelikli Çince ile açıklanmaktadır.
- Tekrarlanan kod, artıklığı azaltmak için işlevlere soyutlanır. Örneğin, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })`, `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()` olarak yazılabilir.
- Değişken bildirimi: Birden fazla ardışık `const` bildirimini tek bir ifadede birleştirin. Üç satır halinde yazmak yerine `const a=1, b=2, c=3;` yazın.
- Eşzamansız işleme: `await` kullanın, `.then` zincirleme çağrıların kullanımını yasaklayın
- Otomatik olarak istisna işleme kodu oluşturmayın, otomatik olarak `try...catch` yazmayın (`try ... catch` manuel olarak korunur, mevcut `try catch` silinmemelidir)
- Önce saf işlevler: yalnızca saf işlevler yazın, sınıfları asla yazın
- `const funcName = () => {}` ok işlevlerini kullanın ve `function` anahtar sözcüğünü kullanmayın (üreticiler hariç); Parametreleri bağlamak için .bind kullanabiliyorsanız işlevleri tanımlamaktan kaçının
- Kodun yeniden kullanımı: Yeniden kullanmaya dikkat edin, daha küçük işlevler çıkarın ve çok sayıda benzer veya kopyalayıp yapıştırılan kod yapılarından kararlılıkla kaçının.
- Nesne erişimi: Gerekli nitelikleri çıkarmak için yıkım atamasını kullanmaya öncelik verin, derin ve iç içe geçmiş niteliklere erişmek için dahili olarak noktaları tekrar tekrar kullanmaktan kaçının ve tekrarlanan isteğe bağlı zincir kararlarını birleştirin
- Fonksiyon parametreleri için nesneler kullanmayın, `{a,b,c}` yazmayın, `a, b, c` yazın; çok sayıda isteğe bağlı parametre varsa, [[yapılandırma öğesi sayısı, yapılandırma öğesi sayısı], [yapılandırma öğesi sayısı, yapılandırma öğesi sayısı],..] kullanın. Bu paradigmada, yapılandırma öğeleri sayısal sabitlerle tanımlanır.
- Çoklu değer dönüşleri için `{a,b,c}` yerine `[a,b,c]` dizisini kullanın. 3'ten fazla dönüş değeri varsa konumsal anlamı tanımlamak için sayısal sabitleri kullanın.
- Durumu temsil etmek için bir dizeye gerek yoktur; durumu tanımlamak için sayısal sabitler kullanın
- Hiçbir dize şablonu (``) kullanılmaz, içe aktarma dışında dize birleştirme (+) kullanılır (Vite statik analizi için uygundur)
- Döngü için seri numarasına ihtiyacınız varsa `i++` yerine `++i` kullanın
- Gereksiz`?.`'den kaçının ve savunma amaçlı programlamayı yasaklayın
- Değişken adının çoğul olmasına gerek yoktur ve bir listeyi belirtmek için `_li` ile biter.

## Adlandırma kuralı

- Adlandırma minimalizmi takip ediyor. Kısa ama anlamlı adlar kullanın, örneğin: `remove`, `delete`, `del` yerine `rm` kullanın. Ancak aşırılıklara gitmekten de kaçınmalısınız; örneğin: `map` yerine tek bir harf `m` kullanmayın.
- İşlev adlandırmada yalnızca fiilleri kullanmaya çalışın. Eğer onu ifade etmek için tek bir kelime kullanabiliyorsanız, iki kelime kullanmayın. İsimler dosya adlarına yansıtılır. Dosya adına bir fiil eklemeniz gerekiyorsa, lütfen önce ismi, sonra da fiili koyun. Örneğin: `setProfile.js` yerine `profileSet.js`
- Değişken adları: alt çizgi stilini (snake_case) kullanın, örneğin `user_auth_token`
- İşlev adı: Küçük harf camelCase (camelCase) kullanın, örneğin `userData`
- İşlev parametreleri: Eğer bu bir geri çağırma işlevi ise, bunu `onChange` gibi küçük deve harfiyle adlandırın.
- Modül düzeyindeki sabit tanımları büyük harfli alt çizgi stilini kullanır `UPPER_SNAKE_CASE`
- `get` gibi anlamsız önekler yazmayın, örneğin: `getCookie` yerine `cookieByHeader` yazın.
- Genel/modül düzeyindeki sabitler: büyük harfli alt çizgi stilini (UPPER_SNAKE_CASE) kullanın, ör. `CODE_TO_ID`, `ID_TO_LANG`

## Modüler mekanizma

- İçe Aktarma: İsteğe bağlı olarak işlevleri doğru bir şekilde içe aktarın, tüm modülün doğrudan içe aktarılmasını engelleyin (`import * as x`'den kaçının veya büyük nesneleri içe aktarın)
- Dışa Aktar: Nesnelerin dışa aktarımını devre dışı bırakın. İşlevleri ve değişkenleri `export const X=1, abc=()=>{};` gibi birimler halinde dışa aktarın. Dışa aktarılan içeriği bildirmek için bunları const + virgülle birleştirmeyi deneyin. Bir dosyanın yalnızca bir işlevi varsa, `export default` kullanın
- Dışa aktarma varsayılan işlevini dahili olarak çağırmanız gerekmediği sürece, önce sabitleri bildirmekten ve ardından bunları dosyanın sonunda dışa aktarmaktan kaçının.
- Yol çözümlemesi: Geçerli dizin yolunu alırken `import.meta.dirname` kullanılmalıdır

## hata

- Dize hatalarından kaçının ve sabit hata kodlarını bildirmek için const kullanın.
- Yanlış veri bilgisi döndürmeniz gerekiyorsa, [hata kodu, hata mesajı,...] kullanın. Bu şekilde, hata mesajı bir metin açıklaması değil, sayısal bir değer olur ([FILE_OVERSIZE, file_size, max_size] gibi)
-

## Tarayıcı uyumlu API'leri kullanmayı deneyin

- Şifreleme ve şifre çözme: Yerel Web Kripto API'sinin kullanımını zorunlu kılın
- İkili veriler: İkili verilerle uğraşırken `Uint8Array`'i eşit şekilde kullanmaya çalışın