`src/js` Yaygın olarak kullanılan js scriptleri aşağıdaki gibidir

- `import { D, newEl, newLi } from "../js/dom.js"`
  - `D`, `document`'nin kısaltmasıdır
  - `newEl` bir `dom` öğesi oluşturur. Birden fazla öğe oluşturmak istiyorsanız bunları toplu olarak oluşturmak için `newLi` kullanın
- `import { cE } from "../js/dom.js"` Özel bir öğe oluşturun
- `import { On } from "../js/On.js"` Olay bağlamayı ve bağlantıyı kaldırmayı uygulamak için kullanılır