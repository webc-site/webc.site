# Componenta de navigare în director

- Aspect flexibil vertical
- Suport dicționar pentru a trece în director date
- Faceți clic pentru a încărca automat textul Markdown
- Afișarea stării de încărcare a animației Ing

## Utilizați demonstrația

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Folosiți componente"
};
</script>
```

## interfata

### Proprietăți și metode

- `toc.li`: setează un obiect director sau o listă de intrări, cum ar fi `{ key: title }`
- `toc.mdUrl`: setați funcția de generare a adresei URL de solicitare `(key, lang) => url` sau șirul de prefix
- `toc.target`: setați sau asociați nodul de conținut țintă (cum ar fi `c-md`), gestionați automat `ing` așteptarea și completarea conținutului
- `toc.load(key)`: declanșează manual încărcarea cheii corespunzătoare