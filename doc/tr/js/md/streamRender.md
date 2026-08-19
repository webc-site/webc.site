# md/streamRender.js

Markdown akış oluşturma

## default(container, source)

Daktilo imleç efektlerini ve otomatik kaydırmayı destekleyen, Markdown metninin belirtilen DOM kapsayıcısına akışının sağlanması

parametre:
- `container` : Oluşturulan içeriği barındıran DOM kapsayıcı öğesi
- `source` : ReadableStream metin veri kaynağı

Dönüş değeri:

- `cancel` : Oluşturmayı ve veri akışı okumayı durdurma işlevi
- `setStop` : Otomatik kaydırmanın duraklatılıp duraklatılmayacağını ayarlama işlevi
  - parametre
    - `val` : Duraklatılıp duraklatılmayacağına ilişkin Boolean değeri