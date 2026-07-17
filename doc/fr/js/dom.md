# dom.js

Documenter les abréviations des variables et les fonctions de raccourci

## D

`document` Raccourci de référence vers l'objet

## B

`document.body` Raccourci de référence vers l'objet

## newEl

Créer des éléments DOM

paramètre:
- `tagName` : nom de la balise de l'élément

Valeur de retour : élément DOM nouvellement créé

## newLi(...tag_li)

Créer plusieurs éléments DOM par lots

paramètre:
- `tag_li` : liste des noms de balises

Valeur de retour :
- Tableau contenant tous les éléments DOM nouvellement créés

## cE(name, cls)

Enregistrer les éléments personnalisés des composants Web

paramètre:
- `name` : nom de l'élément personnalisé, le préfixe `c-` sera ajouté automatiquement
- `cls` : la classe de l'élément personnalisé