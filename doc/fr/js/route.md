# route.js

Gestion du routage frontal sur une seule page

## nowUrl()

Obtenez le chemin de l'URL actuel avec la barre oblique supprimée

Valeur de retour : chaîne de chemin actuelle

## route(hook)

Enregistrez le rappel d'écoute pour les changements d'itinéraire. Lors de l'enregistrement, il sera exécuté une fois avec le chemin actuel.

paramètre:
- `hook` : Fonction de rappel de surveillance d'itinéraire
  - paramètre
    - `url` : chemin actuel
    - `pre` : dernier chemin

Valeur de retour : fonction de nettoyage non enregistrée

## setPre(url)

Enregistrez la dernière URL enregistrée

paramètre:
- `url` : chaîne de chemin

## preUrl()

Obtenir l'URL du dernier enregistrement

Valeur de retour : dernière chaîne de chemin

## refresh(url)

Forcer tous les rappels d'écoute d'itinéraire à être déclenchés sur le chemin spécifié et mettre à jour avant

paramètre:
- `url` : chemin cible, chemin actuel par défaut

## removeSlash(url)

Supprimer les barres obliques des en-têtes de chemin

paramètre:
- `url` : chaîne de chemin

Valeur de retour : chemin après suppression de la barre oblique de début

## setUrl(url)

Mettre à jour l'état de l'URL de la barre d'adresse du navigateur

paramètre:
- `url` : chemin cible

Valeur de retour : 1 si le chemin change réellement

## goto(url)

Mettre à jour l'adresse du navigateur et déclencher une actualisation de l'itinéraire

paramètre:
- `url` : chemin cible