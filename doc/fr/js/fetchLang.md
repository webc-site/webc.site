# fetchLang.js

Charger de manière asynchrone les modules linguistiques et lier les rappels de mise à jour

## fetchLang(getDict)

Créez un écouteur de module linguistique pour obtenir le module linguistique de manière asynchrone et exécuter un rappel d'actualisation lorsque la langue change

paramètre:
- `getDict` : Récupère la fonction asynchrone du package de langue
  - paramètre
    - `code` : code langue
  - Valeur de retour : dictionnaire du module linguistique

Valeur de retour : fonction pour enregistrer le rappel d'actualisation
- paramètre
  - `refresh` : Actualiser la fonction de rappel lorsque la langue est mise à jour
    - paramètre
      - `i18n` : objet dictionnaire du module linguistique
      - `code` : Code de langue actuel
- Valeur de retour : fonction pour désenregistrer le rappel d'actualisation