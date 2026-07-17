
  Pour le composant `js`, utilisez `Light DOM` pour implémenter le composant dans `src/component name/_.js`.

  Utilisez des chemins relatifs pour importer d'autres composants, tels que : `import "../component name/_.js"` (`js` n'importe pas `styl`, le framework l'injectera automatiquement).

  `this` Définissez uniquement la fonction de rappel native du composant web, écrivez les autres comme fonctions indépendantes, transmettez `this` et les paramètres requis.

  En plus des interfaces exposées en externe, afin de faciliter l'optimisation de l'arborescence et la compression du code, il est interdit de lier des attributs privés personnalisés sur `this` (utilisez `this.$` pour les fonctions de déchargement), et des fonctions d'ordre élevé peuvent être utilisées pour renvoyer des fermetures pour contenir des variables intermédiaires.

  N'écrivez pas `constructor`, l'attribut est obtenu en `connectedCallback`.


  Reportez-vous à [./js.md](./js.md) pour réutiliser les fonctions publiques sous `src/js/`

  Pour les conteneurs, utilisez `slot` au lieu d'attributs.
  Si vous devez charger des données, exposez l'interface de chargement à la couche supérieure sous la forme d'une fonction de rappel asynchrone et utilisez des commentaires pour indiquer le format de la valeur de retour.
  Les composants doivent éviter les fuites de mémoire. `disconnectedCallback` fusionnez les événements de désinstallation en une seule fonction `this.$` et n'écrivez pas plusieurs fonctions de désinstallation.
  La valeur renvoyée par l'interface peut être une valeur unique, un tableau ou un tableau de tableaux, et non un objet.
  Si le composant possède plusieurs états, utilisez des commentaires sur plusieurs lignes pour décrire clairement le format de données de chaque état. (Ne faites pas précéder chaque ligne de commentaires de `*`)
  Changement d'état, à l'aide de constantes numériques (définies sur `const.js`).
  Pendant le chargement du rappel, affichez l'animation avec `const xx = newEl('b');xx.className="Ing"` et `@import "../Ing/_.styl"` dans `_.styl`