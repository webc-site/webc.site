# Démo

Reportez-vous à `src/BoxX/demo` et développez une démo du composant dans `src/component name/demo/`

`demo/_.pug`, sous-modèle de démonstration

Seules les balises de composants minimalistes sont incluses, aucune page complète n'est requise et l'importation de styles et de scripts est interdite. Le framework injectera automatiquement (comme `demo/_.styl`, `demo/_.js`).

N'écrivez pas de titre (par exemple, n'écrivez pas xxx demo), n'écrivez pas le nom du composant, n'introduisez pas le composant, écrivez uniquement le statut du cas d'utilisation de la démo (s'il n'y a pas de statut, n'écrivez pas de titre)

L'élément racine de `_.pug` utilise `main.demo.Lg` , qui a défini le style dans `demo/_.styl` et ne définit pas le style de `main.demo.Lg` lui-même.

Le conteneur du composant d'affichage doit être aligné avec `main.demo.Lg`, et il ne doit y avoir aucun `margin` et `padding` entre eux, car `main.demo` lui-même a déjà défini `padding`, et le définir vide sera répété.

`demo/_.styl` S'il n'y a qu'un seul composant d'affichage, son conteneur n'aura pas de cadre extérieur, et définira uniquement `max-width` (car le conteneur de présentation ajoutera automatiquement un cadre extérieur). S'il y en a plusieurs, le conteneur peut être séparé par un cadre extérieur.

N'écrivez pas `img` dans `demo/_.pug`, utilisez `demo/_.styl` pour définir l'image d'arrière-plan

Si le composant a plusieurs formulaires, veuillez les afficher dans l'ordre (comme chargement, données vides, données, échec, etc.), disposition verticale flexible

`demo/_.styl` : `stylus` style de la page de démonstration, veuillez suivre les spécifications du code et l'esthétique de conception de [./styl.md](./styl.md)

N'écrivez pas `@import '../_.styl'` pour importer le composant à démontrer, il sera automatiquement injecté

Veuillez importer `@import '../../Btn/_.styl'` dans `demo/_.styl` et utiliser `.Btn`

`demo/_.js` : Appelez le script, format `export default (root) => { ... }`, paramètre `root` est l'hôte (`document` ou l'élément racine du conteneur sandbox)

`D.createElement` est interdit, utilisez `newEl` mentionné par [./js.md](./js.md)

`js` est interdit pour une utilisation dans `c-t` et pour l'internationalisation `fLang`

Si `../_.js` (`../_.js` doit afficher le composant lui-même, les composants dépendants requis par d'autres démos doivent encore être importés) seul `import` est requis, et aucun contenu spécifique n'est importé, qui peut être omis (le framework l'injectera automatiquement)

`pug` Pas besoin d'importer `js` et `styl` , le framework les injectera automatiquement