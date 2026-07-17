---
name: jsdoc
description: document src/js généré automatiquement
---

## Exécuter les étapes

1. Exécutez `./sh/jsDoc.js` pour afficher les fonctions avec une documentation manquante (s'il n'y a pas de sortie, il n'est pas nécessaire de l'ajouter).
2. Selon la liste des fichiers de sortie, lisez les documents et codes existants un par un et complétez-les (traitez-les dans l'ordre et décomposez-les un par un).

## Exigences en matière de documentation

Si l'export est une fonction, écrivez
- Paramètres et valeurs de retour :
  - N'écrivez les descriptions correspondantes que s'il y a des paramètres ou des valeurs de retour, sinon ne les écrivez pas.
  - Les paramètres sont introduits à l'aide de listes non ordonnées.
  - Si la valeur de retour est un tableau, utilisez une liste non ordonnée pour la décrire une à une (sinon, écrivez directement, `Valeur de retour : description`, une seule ligne).
  - Si les paramètres ou la valeur de retour sont des fonctions, utilisez des listes sous-non ordonnées pour décrire les paramètres et les valeurs de retour (s'il n'y en a pas, ne les écrivez pas).

Si l'export est une constante, introduisez ce que c'est, une seule ligne

- Utilisez un langage concis et professionnel et évitez d’utiliser des adjectifs.
- Révisez le document existant, ne le réécrivez pas complètement

## modèle de formatage

Écrivez chaque nom une seule fois pour éviter les duplications et essayez de l'exprimer clairement sur une seule ligne. Le format de référence est le suivant

```
# nom de fichier

## Nom de la fonction (paramètre)

Description de l'utilisation

paramètre:
- `xx` : Objectif
  - paramètre
    - `a` : Objectif
  - Valeur de retour : description

Valeur de retour : Description
```