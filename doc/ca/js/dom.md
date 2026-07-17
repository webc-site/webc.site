# dom.js

Documenteu les abreviatures de variables i les funcions de drecera

## D

`document` Referència de drecera a l'objecte

## B

`document.body` Referència de drecera a l'objecte

## newEl

Creeu elements DOM

paràmetre:
- `tagName` : nom de l'etiqueta de l'element

Valor de retorn: element DOM creat recentment

## newLi(...tag_li)

Creeu diversos elements DOM en lots

paràmetre:
- `tag_li` : llista de noms d'etiquetes

Valor de retorn:
- Matriu que conté tots els elements DOM creats recentment

## cE(name, cls)

Registreu els elements personalitzats dels components web

paràmetre:
- `name` : el nom de l'element personalitzat, el prefix `c-` s'afegirà automàticament
- `cls` : la classe de l'element personalitzat