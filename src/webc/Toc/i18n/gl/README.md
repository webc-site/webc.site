# Compoñente de navegación do directorio

- Deseño flexible vertical
- Admite dicionario para pasar os datos do directorio
- Fai clic para cargar automaticamente o texto Markdown
- Cargando o estado de visualización da animación Ing

## Use a demostración

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Usar compoñentes"
};
</script>
```

## interface

### Propiedades e métodos

- `toc.li`: establece un obxecto de directorio ou unha lista de entradas, como `{ key: title }`
- `toc.mdUrl`: establece a función de xeración de URL de solicitude `(key, lang) => url` ou cadea de prefixo
- `toc.target`: establece ou asocia o nodo de contido de destino (como `c-md`), xestiona automaticamente `ing` a espera e o recheo de contido
- `toc.load(key)`: activa manualmente a carga da chave correspondente