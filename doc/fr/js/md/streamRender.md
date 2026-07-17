# md/streamRender.js

Rendu en streaming Markdown

## default(container, source)

Rendu en streaming du texte Markdown dans le conteneur DOM spécifié, prenant en charge les effets de curseur de machine à écrire et le défilement automatique

paramètre:
- `container` : élément de conteneur DOM hébergeant le contenu rendu
- `source` : source de données texte ReadableStream

Valeur de retour :

- `cancel` : Fonction pour arrêter le rendu et la lecture du flux de données
- `setStop` : Fonction pour définir s'il faut suspendre le défilement automatique
  - paramètre
    - `val` : Valeur booléenne s'il faut mettre en pause ou non