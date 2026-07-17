# Rendu en streaming du texte Markdown

- Analyser et restituer progressivement Markdown
- Coopérez avec l'élément parent défilant pour faire défiler automatiquement lorsque le contenu dépasse l'écran
- Suspendre le défilement automatique lorsque vous cliquez ou faites défiler vers le haut, reprenez lorsque vous faites défiler vers le bas
- Afficher automatiquement les indicateurs d'état de frappe

## Utilisez la démo

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Rendu des données en streaming via la fonction de générateur asynchrone renvoyée
  el.gen = async function* () {
    rendement "# titre\n" ;
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      rendement "- élément " + i + "\n" ;
    }
  };
</script>
```

## propriété

| nom d'attribut | taper | illustrer |
| :--- | :--- | :--- |
| `gen` | `Function` | Fonction qui renvoie un itérateur/générateur asynchrone, efface le contenu et restitue après le réglage |

## style

| Classe/Étiquette | illustrer |
| :--- | :--- |
| `Md` | Classe automatiquement ajoutée au composant lors du montage, définissez le style Markdown |
| `i.T` | Indicateur d'état de frappe automatiquement ajouté à la fin lors de la saisie des données |