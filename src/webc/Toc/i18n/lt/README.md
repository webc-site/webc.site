# Katalogų naršymo komponentas

- Vertikalus Flex išdėstymas
- Palaikykite žodyną, kad galėtumėte perduoti katalogo duomenis
- Spustelėkite, kad automatiškai įkeltumėte žymėjimo tekstą
- Įkėlimo būsenos ekranas Ing animacija

## Naudokite demonstracinę versiją

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Naudoti komponentus"
};
</script>
```

## sąsaja

### Savybės ir metodai

- `toc.li`: nustato katalogo objektą arba įrašų sąrašą, pvz., `{ key: title }`
- `toc.mdUrl`: nustatykite užklausos URL generavimo funkciją `(key, lang) => url` arba priešdėlio eilutę
- `toc.target`: nustatykite arba susiekite tikslinį turinio mazgą (pvz., `c-md`), automatiškai tvarkykite `ing` laukimą ir turinio užpildymą
- `toc.load(key)`: rankiniu būdu suaktyvinkite atitinkamo rakto įkėlimą