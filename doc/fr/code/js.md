# Spécification du code JS

## style de codage

- Simple, élégant et efficace, utilisant la syntaxe js la plus moderne
- Divisez les fonctions trop longues et la conception de l'interface doit être à faible couplage et à cohésion élevée.
- Utilisez davantage les tableaux + boucles/forEach/map et écrivez du code moins répétitif
- N'écrivez pas de commentaires de fonction dans un code simple pour éviter des commentaires excessifs. La logique complexe et les besoins particuliers sont expliqués dans un chinois raffiné.
- Le code répété est résumé en fonctions pour réduire la redondance. Par exemple, `cosnt A=new Table({ style: { border: NO_BORDER } }), B=new Table({ style: { border: NO_BORDER } })` peut être écrit sous la forme `const newTable=()=>new Table({ style: { border: NO_BORDER } }), A=newTable(), B=newTable()`
- Déclaration de variable : combinez plusieurs déclarations `const` consécutives en une seule instruction. Au lieu de l'écrire en trois lignes, écrivez `const a=1, b=2, c=3;`
- Traitement asynchrone : utiliser `await`, interdire l'utilisation des `.then` appels en chaîne
- Ne générez pas automatiquement de code de gestion des exceptions, n'écrivez pas automatiquement `try...catch` (`try ... catch` est maintenu manuellement, les `try catch` existants ne doivent pas être supprimés)
- Les fonctions pures d'abord : n'écrivez que des fonctions pures, jamais des classes
- Utilisez les fonctions fléchées `const funcName = () => {}` et n'utilisez pas le mot-clé `function` (sauf les générateurs) ; si vous pouvez utiliser .bind pour lier des paramètres, évitez de définir des fonctions
- Réutilisation du code : faites attention à la réutilisation, extrayez davantage de petites fonctions et évitez résolument un grand nombre de structures de code similaires ou copiées.
- Accès aux objets : donnez la priorité à l'utilisation de l'affectation de déstructuration pour extraire les attributs requis, évitez d'utiliser de manière répétée des points en interne pour accéder aux attributs profonds et imbriqués et fusionnez les jugements de chaîne facultatifs répétés.
- N'utilisez pas d'objets pour les paramètres de fonction, n'écrivez pas `{a,b,c}`, écrivez `a, b, c` ; s'il existe de nombreux paramètres facultatifs, utilisez [[nombre d'éléments de configuration, éléments de configuration], [nombre d'éléments de configuration, éléments de configuration],..] Dans ce paradigme, les éléments de configuration sont définis avec des constantes numériques
- Pour les retours à valeurs multiples, utilisez le tableau `[a,b,c]` au lieu de `{a,b,c}`. S'il y a plus de 3 valeurs de retour, utilisez des constantes numériques pour définir la signification de la position.
- Il n'est pas nécessaire d'avoir une chaîne pour représenter l'état, utilisez des constantes numériques pour définir l'état
- Aucun modèle de chaîne (``) n'est utilisé, la concaténation de chaînes (+) est utilisée, sauf pour l'importation (pratique pour l'analyse statique Vite)
- Pour la boucle, si vous avez besoin d'un numéro de série, utilisez `++i` au lieu de `i++`
- Évitez les`?.` inutiles et interdisez la programmation défensive
- Le nom de la variable n'a pas besoin d'être au pluriel et se termine par `_li` pour indiquer une liste.

## Convention de dénomination

- Le nom poursuit le minimalisme. Utilisez des noms courts mais significatifs, par exemple : utilisez `rm` au lieu de `remove`, `delete`, `del`. Cependant, il faut aussi éviter d'aller aux extrêmes, par exemple : n'utilisez pas une seule lettre `m` à la place de `map`
- Essayez d'utiliser uniquement des verbes dans la dénomination des fonctions. Si vous pouvez utiliser un seul mot pour l’exprimer, n’utilisez pas deux mots. Les noms sont reflétés dans les noms de fichiers. Si vous devez ajouter un verbe au nom du fichier, veuillez mettre le nom en premier et le verbe en dernier. Par exemple : `profileSet.js` au lieu de `setProfile.js`
- Nom de la variable : utilisez le style souligné (snake_case), par exemple `user_auth_token` ; si la variable est une fonction, utilisez le style de dénomination en minuscules et en casse camel
- Nom de la fonction : utilisez camelCase minuscule (camelCase), par exemple `userData`
- Paramètres de la fonction : s'il s'agit d'une fonction de rappel, nommez-la en minuscules, par exemple `onChange`
- Les définitions de constantes au niveau du module utilisent le style de soulignement majuscule `UPPER_SNAKE_CASE`
- N'écrivez pas `get`, des préfixes dénués de sens, tels que : écrivez `cookieByHeader` au lieu de `getCookie`
- Constantes globales/au niveau du module : utilisez le style de soulignement majuscule (UPPER_SNAKE_CASE), par ex. `CODE_TO_ID`, `ID_TO_LANG`

## Mécanisme modulaire

- Importer : Importer les fonctions avec précision à la demande, interdire l'import direct de l'intégralité du module (éviter `import * as x` ou importer des objets volumineux)
- Exporter : désactivez l'exportation des objets. Exportez les fonctions et les variables sous forme d'unités, telles que `export const X=1, abc=()=>{};`. Essayez de les combiner avec un const + virgule pour déclarer le contenu exporté. Si un fichier n'a qu'une seule fonction, utilisez `export default`
- Sauf si vous devez appeler la fonction d'exportation par défaut en interne, évitez de déclarer d'abord les constantes puis de les exporter à la fin du fichier.
- Résolution du chemin : lors de l'obtention du chemin du répertoire actuel, `import.meta.dirname` doit être utilisé

## erreur

- Évitez les erreurs de chaîne et utilisez const pour déclarer des codes d'erreur constants.
- Si vous devez renvoyer des informations de données erronées, utilisez [code d'erreur, message d'erreur,...] De cette façon, le message d'erreur n'est pas une description textuelle, mais une valeur numérique (telle que [FILE_OVERSIZE, file_size, max_size])
-

## Essayez d'utiliser des API compatibles avec le navigateur

- Chiffrement et déchiffrement : Forcer l’utilisation de l’API Web Crypto native
- Données binaires : lorsque vous traitez du binaire, essayez d'utiliser `Uint8Array` uniformément