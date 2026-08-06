---
name: webc
---

Suivez le processus, élaborez un plan et développez étape par étape pour éviter les omissions

1. Exécutez le `./sh/new.js nom du composant de type de projet` et créez le composant dans le répertoire `src/webc`
   Le type de projet peut être `css` (composant de style pur), `js` (composant de page Web)
   Mettre en majuscule la première lettre du nom du composant

2. Lisez les spécifications de codage pour `.agents/doc/code`, puis développez.

   Le style du composant est écrit en `_.styl`. Le style utilisé pour la démonstration est écrit en `demo/_.styl`. Il est interdit de l'écrire en `nom du composant/_.styl`.

  L'utilisation de `@import` pour importer des styles à partir d'autres composants est interdite dans `_.styl` et `demo/_.styl` .

  Suivez les normes de codage et l'esthétique de conception de [./styl.md](./styl.md).

  Les composants dépendants (et leurs styles) sont importés via `import "./other components.js"` dans `webc/componentname.js` ; les dépendances pour la démonstration sont importées via `import "../../other components.js"` dans `demo/_.js`.

   Tous les composants (y compris les composants de style pur) doivent avoir un fichier de script `nom du composant.js`. Le `nom du composant.js` des composants de style pur importe uniquement le `_.styl` correspondant. Pour les composants avec la logique JS, suivez le processus [webc.js.md](./webc.js.md) pour développer.

3. Appuyez sur [demo.md](./demo.md) démonstration de développement de processus

4. Exécutez `./test.sh` du répertoire racine. Corrigez les erreurs et les alarmes, extrayez les fonctions, optimisez le code et évitez la duplication et la redondance. Pour les spécifications du code, voir `.agents/doc/code/js.md`

5. Lire [dbg.md](./dbg.md) et déboguer les composants selon le processus

6. Suivre le processus [i18n.md](./i18n.md) pour mettre en œuvre l'internationalisation des composants et des démonstrations et rédiger des documents

7. Testez à nouveau et optimisez le code

8. Ouvrez un sous-agent et appelez `.agents/skills/js_review/SKILL.md` pour examiner et optimiser le code.

9. Débogage à nouveau