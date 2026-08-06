# dom.js

Okrajšave spremenljivk dokumenta in funkcije bližnjic

## D

`document` Sklic na bližnjico do predmeta

## B

`document.body` Sklic na bližnjico do predmeta

## css(txt, root)

## newEl

Ustvari elemente DOM

parameter:
- `tagName` : ime oznake elementa

Povratna vrednost: na novo ustvarjen element DOM

## newLi(...tag_li)

Ustvarite več elementov DOM v serijah

parameter:
- `tag_li` : seznam imen oznak

Vrnjena vrednost:
- Matrika, ki vsebuje vse na novo ustvarjene elemente DOM

## cE(name, cls)

Registrirajte elemente po meri spletnih komponent

parameter:
- `name` : Ime elementa po meri, predpona `c-` bo samodejno dodana
- `cls` : razred elementa po meri