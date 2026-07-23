# Component de navegació de directoris

- Disseny vertical flexible
- Admet el diccionari per passar les dades del directori
- Feu clic per carregar automàticament el text Markdown
- S'està carregant l'animació Ing de visualització d'estat

## Utilitzeu la demostració

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Utilitza components"
};
</script>
```

## interfície

### Propietats i mètodes

- `toc.li`: estableix un objecte de directori o una llista d'entrades, com ara `{ key: title }`
- `toc.mdUrl`: estableix la funció de generació d'URL de sol·licitud `(key, lang) => url` o la cadena de prefix
- `toc.target`: estableix o associa el node de contingut objectiu (com ara `c-md`), gestiona automàticament `ing` l'espera i l'emplenament de contingut
- `toc.load(key)`: activa manualment la càrrega de la clau corresponent