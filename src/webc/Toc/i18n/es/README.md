# Componente de navegación de directorio

- Diseño flexible vertical
- Diccionario de soporte para pasar datos del directorio.
- Haga clic para cargar automáticamente el texto de Markdown
- Visualización del estado de carga Ing animación

## Usa la demostración

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "Usar componentes"
};
</script>
```

## interfaz

### Propiedades y métodos

- `toc.li`: establece un objeto de directorio o una lista de entradas, como `{ key: title }`
- `toc.mdUrl`: establece la función de generación de URL de solicitud `(key, lang) => url` o cadena de prefijo
- `toc.target`: establece o asocia el nodo de contenido de destino (como `c-md`), maneja automáticamente `ing` espera y llenado de contenido.
- `toc.load(key)`: Activa manualmente la carga de la clave correspondiente