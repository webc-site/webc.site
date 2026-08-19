# hashActive.js

Ressaltat de l'enllaç de navegació basat en els ancoratges d'URL i el desplaçament de la finestra gràfica

## default(link_li, cls)

Ressalteu automàticament els enllaços de navegació corresponents a l'àrea visible actualment segons la posició de desplaçament de la pàgina i els canvis de punt d'ancoratge de l'URL.

paràmetre:
- `link_li` : llista d'elements DOM de l'enllaç de navegació
- `cls` : nom de classe CSS actiu, predeterminat `"A"`

Valor de retorn: cancel·la totes les funcions de neteja d'escolta