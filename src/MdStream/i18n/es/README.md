# Representación en streaming de texto Markdown

- Analizar y renderizar incrementalmente Markdown
- Coopere con el elemento principal de desplazamiento para desplazarse automáticamente cuando el contenido exceda la pantalla
- Pausar el desplazamiento automático al hacer clic o desplazarse hacia arriba, reanudarlo al desplazarse hacia abajo
- Mostrar automáticamente indicadores de estado de escritura

## Usa la demostración

```html
<c-vs>
  <c-md-stream id="md-view"></c-md-stream>
</c-vs>

<script type="module">
  import "webc.site/MdStream/_.js";

  const el = document.getElementById("md-view"),
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Transmisión de datos en streaming a través de la función de generador asíncrono devuelta
  el.gen = async function* () {
    producir "# título\n";
    for (let i = 1; i <= 100; ++i) {
      await sleep(400);
      producir "- elemento " + i + "\n";
    }
  };
</script>
```

## propiedad

| nombre del atributo | tipo | ilustrar |
| :--- | :--- | :--- |
| `gen` | `Function` | Función que devuelve un iterador/generador asincrónico, borra el contenido y vuelve a renderizar después de la configuración |

## estilo

| Clase/Etiqueta | ilustrar |
| :--- | :--- |
| `Md` | Clase agregada automáticamente al componente durante el montaje, establezca el estilo Markdown |
| `i.T` | Indicador de estado de escritura agregado automáticamente al final durante la entrada de datos |