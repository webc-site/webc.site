# dom.js

Dokumentálja a változók rövidítéseit és parancsikonokat

## D

`document` Parancsikon hivatkozás az objektumra

## B

`document.body` Parancsikon hivatkozás az objektumra

## css(txt, root)

## newEl

DOM elemek létrehozása

paraméter:
- `tagName` : elem címke neve

Visszatérési érték: újonnan létrehozott DOM elem

## newLi(...tag_li)

Hozzon létre több DOM-elemet kötegekben

paraméter:
- `tag_li` : címkenév lista

Visszatérési érték:
- Az összes újonnan létrehozott DOM elemet tartalmazó tömb

## cE(name, cls)

A Web Components egyéni elemeinek regisztrálása

paraméter:
- `name` : Az egyéni elem neve, az `c-` előtag automatikusan hozzáadódik
- `cls` : az egyéni elem osztálya