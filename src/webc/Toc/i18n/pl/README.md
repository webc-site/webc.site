# Komponent nawigacji katalogowej

- Pionowy układ elastyczny
- Słownik pomocniczy do przekazywania danych katalogowych
- Kliknij, aby automatycznie załadować tekst Markdown
- Animacja wyświetlania stanu ładowania Ing

## Skorzystaj z wersji demonstracyjnej

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Użyj komponentów"
};
</script>
```

## interfejs

### Właściwości i metody

- `toc.li`: Ustawia obiekt katalogu lub listę wpisów, na przykład `{ key: title }`
- `toc.mdUrl`: Ustaw funkcję generowania adresu URL żądania `(key, lang) => url` lub ciąg prefiksu
- `toc.target`: Ustaw lub powiąż docelowy węzeł treści (np. `c-md`), automatycznie obsłuż `ing` oczekiwanie i wypełnianie treścią
- `toc.load(key)`: Ręcznie uruchom ładowanie odpowiedniego klucza