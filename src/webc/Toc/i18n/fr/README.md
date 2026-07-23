# Composant de navigation dans l'annuaire

- Disposition flexible verticale
- Dictionnaire de support pour transmettre les données du répertoire
- Cliquez pour charger automatiquement le texte Markdown
- Affichage de l'état de chargement Animation Ing

## Utilisez la démo

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Utiliser les composants"
};
</script>
```

## interface

### Propriétés et méthodes

- `toc.li` : définit un objet de répertoire ou une liste d'entrées, tel que `{ key: title }`
- `toc.mdUrl` : définir la fonction de génération d'URL de requête `(key, lang) => url` ou une chaîne de préfixe
- `toc.target` : définir ou associer le nœud de contenu cible (tel que `c-md`), gérer automatiquement `ing` l'attente et le remplissage du contenu
- `toc.load(key)` : Déclencher manuellement le chargement de la clé correspondante