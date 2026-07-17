# WebC.site

## Qu'est-ce que c'est ça?

### Il s'agit d'une bibliothèque de composants Web native

Développé sur la base de [composants web](https://developer.mozilla.org/docs/Web/API/Web_components), il est indépendant du runtime et adapté à tous les frameworks.

Extrêmement optimisé en termes de taille (un dixième de la taille des bibliothèques populaires similaires).

Prend en charge 75 langues. Vous pouvez importer directement des js et des css pour une utilisation en ligne, ou ajouter des composants à votre projet selon les besoins pour le développement secondaire.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Ceci est le cadre de développement de la bibliothèque de composants

Il s'agit de la version blog statique de [storybook](https://storybook.js.org).

La création d'une bibliothèque de composants peut améliorer l'efficacité du développement interne de l'entreprise et construire une image de marque dans le cercle technique.

Sur la base de [webc.site](https://github.com/webc-site/webc.site), les équipes peuvent facilement créer leurs propres bibliothèques de composants et les publier sur [page github](https://pages.github.com), [page cloudflare](https://pages.cloudflare.com), etc. Les composants publiés peuvent être débogués en ligne sur [codepen.io](https://codepen.io) et [jsfiddle](https://jsfiddle.net).

Dans le même temps, le cadre de traduction intégré peut réaliser rapidement l'internationalisation des composants et des documents, de sorte que le public de vos produits ne soit plus limité par la langue.

### Il s'agit d'un nouveau paradigme de développement front-end pour l'ère de l'intelligence artificielle

Le framework est intégré `.agents/skills`, permettant à l'intelligence artificielle de vous aider à développer de nouveaux composants en un clic selon les meilleures pratiques.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

Laissez le code frontal passer d’une montagne d’ordures insoutenable de programmation atmosphérique à une partie standard qui peut être maintenue et évoluée de manière itérative sur le long terme.

Compte tenu des caractéristiques du développement assisté par intelligence artificielle, nous avons proposé et conçu un nouveau paradigme de développement front-end :

1. **Tout est un composant Web**
2. **Le composant doit être indépendant de la liaison de données back-end et l'interface de données est exposée en tant que fonction de rappel**

De cette manière, l’intelligence artificielle peut générer de fausses données et afficher différents états des composants sur la page de démonstration.

Séparation du développement des composants et de l'interface de données, combinée avec [cadre de composants webc.site](https://github.com/webc-site/webc.site) Une autre fonctionnalité majeure :

**Chaque composant peut démarrer le serveur de développement indépendamment et développer et déboguer sur la page de démonstration**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Cela réduit le lien frontal pour le développement et le débogage de chaque composant à `0`.

De cette façon, les outils de développement assistés par intelligence artificielle ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Cursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) etc.), vous pouvez profiter d'un développement entièrement automatique, d'un débogage ouvert du navigateur et ne plus être bloqué par divers facteurs désordonnés (données backend, statut de connexion, routage de chemin, etc).

Si vous souhaitez contrôler l'intelligence artificielle, réduire les coûts et augmenter l'efficacité, vous avez besoin d'un nouveau paradigme qui minimise l'environnement de développement et de débogage de chaque composant.

---

# Je n'ai pas encore commencé à écrire TODO

### Bibliothèque de composants Web

#### Optimisation ultime de la taille

Par exemple, pour le composant de barre de défilement virtuelle, comparez la taille du script populaire [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) et le style après `gz`, comme indiqué dans le tableau suivant :

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

Le composant de barre de défilement virtuelle de `webc.site` est uniquement celui de `OverlayScrollbars` `10%`.

#### Indépendant de l'exécution

Construite sur les standards [Web Components](https://developer.mozilla.org/docs/Web/API/Web_components), la bibliothèque de composants webc.site est naturellement indépendante de l'exécution. Que vous utilisiez React, Vue, Angular, Svelte ou un projet HTML/JS pur traditionnel, tous les composants peuvent s'exécuter directement dans le navigateur comme des balises HTML natives, sans avoir besoin d'un packaging secondaire pour un framework spécifique.

##### Comparaison avec shadcn

[shadcn/ui](https://ui.shadcn.com) adopte le mode de distribution de code, qui vous oblige à copier le code du composant directement dans votre propre projet. Il est étroitement lié à l'écosystème React et à des chaînes d'outils de construction spécifiques (telles que Tailwind CSS) et ne peut pas être utilisé dans plusieurs frameworks. Il comporte également certaines exigences en matière de configuration d'ingénierie de projet.

Et le composant de `webc.site` :
- **Universel multi-framework** : écrivez une seule fois et peut être directement introduit et exécuté dans n'importe quel framework front-end (même un environnement sans framework).
- **Environnement zéro dépendance** : aucun outil d'empaquetage spécifique ni préprocesseur CSS n'est requis, il suffit d'importer les fichiers statiques compilés et il peut être utilisé immédiatement.

## Développement et débogage automatisés

### Développement local et débogage

Chaque composant de page Web prend en charge le démarrage du serveur de développement indépendamment, fournissant ainsi un environnement de développement et de débogage minimal :

- **Créez un nouveau composant** : exécutez `./sh/new.js [css|js] [nom du composant]` pour générer rapidement un squelette de développement de composant (y compris une page de démonstration et une configuration d'internationalisation).
- **Débogage indépendant** : exécutez `./dev.js [nom du composant]` (ou exécutez `./dev.js` directement) pour démarrer le serveur de développement Vite et ouvrir automatiquement la page de démonstration du composant dans le navigateur. Prend en charge la mise à jour à chaud des composants (HMR). Étant donné que les liens de développement et de données sont découplés, il n'y a aucun lien frontal de développement, ce qui est très approprié pour l'IA (comme Claude Code, Google Antigravity, etc.) pour aider au développement entièrement automatique et au débogage du navigateur.

### Publier la bibliothèque de composants

#### webc dist

Le processus de packaging et de publication est hautement automatisé :
- **Package de ressources statiques** : l'exécution de `./sh/dist.js` (c'est-à-dire l'exécution de la tâche `webc dist`) peut analyser automatiquement tous les composants de page Web sous `src/`, les compiler, les compresser et les afficher dans le répertoire `dist/`. Ce répertoire contient des fichiers JS/CSS pour la distribution en production, un site de démonstration prêt à être déployé sur GitHub Pages ou Cloudflare Pages, ainsi que des fichiers de routage `_redirects` et `404.html` générés automatiquement.
- **NPM Publish** : exécutez `./sh/npmDist.js`, le script gérera automatiquement les dépendances des composants, incrémentera le numéro de version du package et exécutera `npm publish` en un clic une fois l'empaquetage terminé pour publier la bibliothèque de composants sur NPM.

### La plateforme est responsable de la traduction

Le framework intègre des processus de traduction automatisés :
1. Configurez les règles de traduction (telles que la langue source, la langue cible et le répertoire à traduire) dans `tran.yml` dans le répertoire racine du projet.
2. Utilisez des espaces réservés dans les composants ou les documents sans avoir à coder en dur plusieurs langues dans votre code.
3. Exécutez `./sh/tran.js` et le moteur de traduction extraira automatiquement le texte et appellera le service de traduction WebC pour le traitement, générant automatiquement des entrées de traduction YAML et une documentation README dans différentes langues.

### variables d'environnement

Lors de la traduction automatique, vous devez configurer les variables d'environnement suivantes pour autoriser l'accès à l'API de traduction :

- **`WEBC_SITE_TOKEN`** (ou **`WEBC_TOKEN`**) : clé d'authentification utilisée pour accéder à l'`webc.site` API de traduction automatique. Peut être injecté en tant que variable d'environnement ou écrit `token` dans le fichier de configuration `~/.config/webc.site.yml` dans le répertoire personnel de l'utilisateur local.