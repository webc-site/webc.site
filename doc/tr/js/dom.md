# dom.js

Belge değişkeni kısaltmaları ve kısayol işlevleri

## D

`document` Nesneye kısayol referansı

## B

`document.body` Nesneye kısayol referansı

## css(txt, root)

## newEl

DOM öğeleri oluşturma

parametre:
- `tagName` : öğe etiketi adı

Dönüş değeri: yeni oluşturulan DOM öğesi

## newLi(...tag_li)

Toplu olarak birden fazla DOM öğesi oluşturun

parametre:
- `tag_li` : etiket adı listesi

Dönüş değeri:
- Yeni oluşturulan tüm DOM öğelerini içeren dizi

## cE(name, cls)

Web Bileşenleri özel öğelerini kaydetme

parametre:
- `name` : Özel öğe adı, `c-` öneki otomatik olarak eklenecektir
- `cls` : özel öğenin sınıfı