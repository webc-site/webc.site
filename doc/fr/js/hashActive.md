# hashActive.js

Mise en évidence des liens de navigation en fonction des ancres d'URL et du défilement de la fenêtre d'affichage

## default(link_li, cls)

Mettez automatiquement en surbrillance les liens de navigation correspondant à la zone actuellement visible en fonction de la position de défilement de la page et des modifications du point d'ancrage de l'URL.

paramètre:
- `link_li` : Liste des éléments DOM du lien de navigation
- `cls` : Nom de la classe CSS active, par défaut `"A"`

Valeur de retour : Annuler toutes les fonctions de nettoyage d'écoute