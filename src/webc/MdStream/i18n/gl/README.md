# Renderizado en streaming do texto Markdown

- Analizar e renderizar de forma incremental Markdown
- Coopera co elemento principal de desprazamento para desprazarse automaticamente cando o contido supera a pantalla
- Pausa o desprazamento automático ao facer clic ou desprazarse cara arriba, retomar ao desprazarse cara abaixo
- Mostrar automaticamente os indicadores de estado de escritura

## Use a demostración

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
import "webc.site/MdStream.js";

const el = document.getElementById("md-view"),
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Transmisión de datos a través da función de xerador asíncrono devolto
el.gen = async function* () {
  producir "# título\n";
  for (let i = 1; i <= 100; ++i) {
    await sleep(400);
    yield "- o elemento " + i + "\n";
  }
};
</script>
```

## propiedade

| nome do atributo | tipo | ilustrar |
| :--- | :--- | :--- |
| `gen` | `Function` | Función que devolve un iterador/xerador asíncrono, borra o contido e volve renderizase despois da configuración |

## estilo

| Clase/Etiqueta | ilustrar |
| :--- | :--- |
| `Md` | A clase engádese automaticamente ao compoñente ao montar, establece o estilo Markdown |
| `i.T` | Indicador de estado de escritura engadido automaticamente ao final durante a entrada de datos |