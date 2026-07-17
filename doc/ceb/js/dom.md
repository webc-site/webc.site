# dom.js

Idokumento ang variable abbreviation ug shortcut functions

## D

`document` Shortcut nga pakisayran sa butang

## B

`document.body` Shortcut nga pakisayran sa butang

## newEl

Paghimo mga elemento sa DOM

parameter:
- `tagName` : ngalan sa tag sa elemento

Ibalik nga bili: bag-ong nahimo nga elemento sa DOM

## newLi(...tag_li)

Paghimo daghang mga elemento sa DOM sa mga batch

parameter:
- `tag_li` : lista sa ngalan sa tag

Ibalik nga bili:
- Array nga naglangkob sa tanan nga bag-ong gibuhat nga mga elemento sa DOM

## cE(name, cls)

Pagrehistro sa Web Components custom nga mga elemento

parameter:
- `name` : Custom nga ngalan sa elemento, `c-` prefix awtomatikong idugang
- `cls` : ang klase sa custom nga elemento