---
name: webc
---

Suivez le processus, élaborez un plan et développez étape par étape pour éviter les omissions

1. Exécutez le `./sh/new.js nom du composant de type de projet` et créez un dossier de composants sous le répertoire `src`
   Le type de projet peut être `css` (composant de style pur), `js` (composant de page Web)
   Mettre en majuscule la première lettre du nom du composant

2. Lisez les spécifications de codage pour `.agents/doc/code`, puis développez.

   Dans `_.styl`, commencez par `@import "../component name/_.styl"` pour importer les dépendances. Veuillez suivre les normes de codage et l'esthétique de conception de [./styl.md](./styl.md).

   Modifiez les styles des autres composants et importez-les directement, utilisez `@import` au début et désactivez `extend`.

   Il est interdit d'écrire le style utilisé pour la démonstration en `nom du composant/_.styl` et en `demo/_.styl`.

   Pour le composant `js`, développez-le selon le processus [webc.js.md](./webc.js.md) (veuillez supprimer `nom du composant/_.js` pour les composants de style pur)

3. Appuyez sur [demo.md](./demo.md) démonstration de développement de processus

4. Exécutez `./test.sh` du répertoire racine. Corrigez les erreurs et les alarmes, extrayez les fonctions, optimisez le code et évitez la duplication et la redondance. Pour les spécifications du code, voir `.agents/doc/code/js.md`

5. Lire [dbg.md](./dbg.md) et déboguer les composants selon le processus

6. Suivre le processus [i18n.md](./i18n.md) pour mettre en œuvre l'internationalisation des composants et des démonstrations et rédiger des documents

7. Testez à nouveau et optimisez le code

8. Ouvrez un sous-agent et appelez `.agents/skills/js_review/SKILL.md` pour examiner et optimiser le code.

9. Débogage à nouveau