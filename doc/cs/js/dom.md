# dom.js

Zkratky proměnných dokumentů a funkce zkratek

## D

`document` Odkaz na objekt

## B

`document.body` Odkaz na objekt

## css(txt, root)

## newEl

Vytvořte prvky DOM

parametr:
- `tagName` : název značky prvku

Návratová hodnota: nově vytvořený prvek DOM

## newLi(...tag_li)

Vytvořte více prvků DOM v dávkách

parametr:
- `tag_li` : seznam názvů značek

Návratová hodnota:
- Pole obsahující všechny nově vytvořené prvky DOM

## cE(name, cls)

Zaregistrujte vlastní prvky Web Components

parametr:
- `name` : Název vlastního prvku, předpona `c-` bude přidána automaticky
- `cls` : třída vlastního prvku