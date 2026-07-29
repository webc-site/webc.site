# Zone de saisie qui change automatiquement l'état de l'espace réservé

- Afficher l'espace réservé lorsqu'il n'est pas saisi
- Les espaces réservés évoluent et flottent en douceur au-dessus lors de la saisie du contenu
- Implémentation CSS pure, pas de dépendances JavaScript
- Par défaut avec fond en verre dépoli et transition de survol

## Utilisez la démo

```html
<b class="Input Lg">
  <input id="email" type="text" placeholder=" ">
  <label for="email">E-mail</label>
</b>
```

## exigences structurelles

- Conteneur : utilisez des éléments de la classe `.Input` pour héberger les zones de saisie et les étiquettes.
- Zone de saisie : l'élément `input`, `placeholder=" "` (un espace réservé contenant un espace) doit être défini pour déclencher le changement d'état.
- Balise Tip : élément `label`, immédiatement après `input`.

## cours de style

- `.Input` : style de base, fournissant une structure de zone de saisie et une animation de transition.
- `.Lg` : style de modification du verre dépoli/surbrillance.