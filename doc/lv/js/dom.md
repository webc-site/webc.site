# dom.js

Dokumentējiet mainīgo saīsinājumus un īsinājumtaustiņu funkcijas

## D

`document` Īsceļa atsauce uz objektu

## B

`document.body` Īsceļa atsauce uz objektu

## css(txt, root)

## newEl

Izveidojiet DOM elementus

parametrs:
- `tagName` : elementa taga nosaukums

Atgriešanas vērtība: jaunizveidots DOM elements

## newLi(...tag_li)

Izveidojiet vairākus DOM elementus partijās

parametrs:
- `tag_li` : tagu nosaukumu saraksts

Atgriešanas vērtība:
- Masīvs, kurā ir visi jaunizveidotie DOM elementi

## cE(name, cls)

Reģistrējiet Web komponentu pielāgotos elementus

parametrs:
- `name` : Pielāgota elementa nosaukums, `c-` prefikss tiks pievienots automātiski
- `cls` : pielāgotā elementa klase