# Toast.js

Invite de message contextuel Toast

## toast(render, timeout)

Afficher la fenêtre contextuelle d'invite standard

paramètre:
- `render` : Fonction de rendu, utilisée pour personnaliser le contenu des pop-ups
  - paramètre
    - `el` : élément DOM de la fenêtre pop-up
- `timeout` : Délai en secondes pour l'arrêt automatique, par défaut 9, pas d'arrêt automatique lorsque 0

Valeur de retour : élément DOM de la fenêtre pop-up

## toastErr(render, timeout)

Afficher la fenêtre contextuelle du message d'erreur

paramètre:
- `render` : Fonction de rendu, utilisée pour personnaliser le contenu des pop-ups
  - paramètre
    - `el` : élément DOM de la fenêtre pop-up
- `timeout` : Délai en secondes pour l'arrêt automatique, par défaut 9, pas d'arrêt automatique lorsque 0

Valeur de retour : élément DOM de la fenêtre contextuelle d'erreur